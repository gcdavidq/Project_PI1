"""Une la base de datos, el algoritmo y el grafo vial para producir una ruta."""

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models import Camion, Contenedor, Deposito, Ruta, Tiempo
from app.schemas import (
    CandidatoOut,
    ComparacionOut,
    OptimizarIn,
    ParadaOut,
    PasoOut,
    RutaOptimizadaOut,
)
from ecoroutex.algoritmo import Matriz, Pesos, costo_de_secuencia, recorrido_priorizado
from ecoroutex.grafo import geometria_de_recorrido, grafo_san_borja

CANDIDATOS_POR_PASO = 6


class SectorSinDatos(Exception):
    pass


def _matriz_del_sector(db: Session, nodos: list[str]) -> Matriz:
    filas = db.execute(
        select(Tiempo.n_nodo_origen, Tiempo.n_nodo_destino, Tiempo.distancia, Tiempo.tiempo).where(
            Tiempo.n_nodo_origen.in_(nodos), Tiempo.n_nodo_destino.in_(nodos)
        )
    )
    matriz: Matriz = {}
    for origen, destino, distancia, tiempo in filas:
        matriz.setdefault(origen, {})[destino] = {
            "distancia": float(distancia),
            "tiempo": float(tiempo),
        }
    return matriz


def _ahorro(optimizado: float, base: float) -> float:
    return round((1 - optimizado / base) * 100, 1) if base > 0 else 0.0


def optimizar(db: Session, datos: OptimizarIn, guardar: bool) -> RutaOptimizadaOut:
    deposito = db.scalars(select(Deposito)).first()
    contenedores = db.scalars(
        select(Contenedor)
        .where(Contenedor.sector == datos.sector, Contenedor.activo)
        .order_by(Contenedor.n_nodo)
    ).all()
    if deposito is None or not contenedores:
        raise SectorSinDatos(f"No hay contenedores activos en el sector {datos.sector}.")

    por_nodo = {c.n_nodo: c for c in contenedores}
    llenados = {c.n_nodo: c.capacidad for c in contenedores}
    matriz = _matriz_del_sector(db, [deposito.n_nodo, *por_nodo])

    recorrido = recorrido_priorizado(
        deposito.n_nodo, matriz, llenados, datos.capacidad, Pesos(**datos.pesos.model_dump())
    )

    paradas = []
    for orden, nodo in enumerate(recorrido.nodos):
        punto = por_nodo.get(nodo, deposito)
        paradas.append(
            ParadaOut(
                n_nodo=nodo,
                lat=float(punto.posicion_y),
                lon=float(punto.posicion_x),
                orden=orden,
                llenado=llenados.get(nodo),
            )
        )

    visitados = recorrido.nodos[1:-1] if recorrido.regreso else recorrido.nodos[1:]
    secuencia_base = [deposito.n_nodo, *sorted(visitados), deposito.n_nodo]
    distancia_base, tiempo_base = costo_de_secuencia(secuencia_base, matriz)

    tramos = geometria_de_recorrido(grafo_san_borja(), recorrido.nodos)

    ruta_id = None
    if guardar:
        ruta_id = _guardar(db, datos.sector, paradas, tramos, recorrido)

    return RutaOptimizadaOut(
        ruta_id=ruta_id,
        sector=datos.sector,
        capacidad=datos.capacidad,
        paradas=paradas,
        tramos=tramos,
        pasos=[
            PasoOut(
                origen=p.origen,
                destino=p.destino,
                distancia=p.distancia,
                tiempo=p.tiempo,
                capacidad_restante=p.capacidad_restante,
                total_candidatos=len(p.candidatos),
                candidatos=[
                    CandidatoOut(
                        n_nodo=c.nodo,
                        llenado=c.llenado,
                        distancia=c.distancia,
                        tiempo=c.tiempo,
                        prioridad=round(c.prioridad, 4),
                        cabe=c.cabe,
                    )
                    for c in p.candidatos[:CANDIDATOS_POR_PASO]
                ],
            )
            for p in recorrido.pasos
        ],
        distancia_total=round(recorrido.distancia_total, 2),
        tiempo_total=round(recorrido.tiempo_total, 2),
        carga_recogida=recorrido.carga_recogida,
        contenedores_pendientes=len(contenedores) - len(visitados),
        comparacion=ComparacionOut(
            distancia=round(distancia_base, 2),
            tiempo=round(tiempo_base, 2),
            ahorro_distancia_pct=_ahorro(recorrido.distancia_total, distancia_base),
            ahorro_tiempo_pct=_ahorro(recorrido.tiempo_total, tiempo_base),
        ),
    )


def _guardar(db: Session, sector: int, paradas, tramos, recorrido) -> int:
    # Como en el original, la ruta se asigna a un camión en espera; se reparte por
    # sector para que cada conductor demo reciba una ruta distinta.
    camiones = db.scalars(
        select(Camion).where(Camion.accion == "esperando").order_by(Camion.id_camion)
    ).all()
    camion = camiones[(sector - 1) % len(camiones)] if camiones else None

    for anterior in db.scalars(select(Ruta).where(Ruta.sector == sector, Ruta.activo)):
        anterior.activo = False

    ruta = Ruta(
        puntos=[p.model_dump() for p in paradas],
        camion_id=camion.id_camion if camion else None,
        sector=sector,
        geometria=tramos,
        distancia=recorrido.distancia_total,
        tiempo=recorrido.tiempo_total,
    )
    db.add(ruta)
    db.commit()
    return ruta.id
