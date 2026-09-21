import logging
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app import servicio_rutas
from app.db import get_db
from app.models import Conductor, Contenedor, Deposito, Ruta, Usuario
from app.schemas import (
    ContenedorOut,
    MapaOut,
    OptimizarIn,
    PuntoOut,
    RutaDetalleOut,
    RutaOptimizadaOut,
    RutaResumenOut,
)
from app.security import LimiteDeIntentos, solo_admin, usuario_actual, usuario_opcional

log = logging.getLogger(__name__)
router = APIRouter(tags=["rutas"])

limite_optimizar = LimiteDeIntentos(maximo=30, ventana_segundos=60)


@router.get("/contenedores", response_model=MapaOut)
def contenedores(
    db: Annotated[Session, Depends(get_db)],
    sector: Annotated[int | None, Query(ge=1, le=4)] = None,
):
    deposito = db.scalars(select(Deposito)).first()
    if deposito is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "La base de datos no tiene datos (seed).")
    consulta = select(Contenedor).where(Contenedor.activo)
    if sector is not None:
        consulta = consulta.where(Contenedor.sector == sector)
    return MapaOut(
        deposito=PuntoOut(
            n_nodo=deposito.n_nodo, lat=float(deposito.posicion_y), lon=float(deposito.posicion_x)
        ),
        contenedores=[
            ContenedorOut(
                n_nodo=c.n_nodo,
                lat=float(c.posicion_y),
                lon=float(c.posicion_x),
                sector=c.sector,
                llenado=c.capacidad,
            )
            for c in db.scalars(consulta)
        ],
    )


@router.post(
    "/rutas/optimizar", response_model=RutaOptimizadaOut, dependencies=[Depends(limite_optimizar)]
)
def optimizar(
    datos: OptimizarIn,
    db: Annotated[Session, Depends(get_db)],
    usuario: Annotated[Usuario | None, Depends(usuario_opcional)],
):
    """Calcular es público (demo); solo un administrador puede guardar la ruta."""
    guardar = datos.guardar and usuario is not None and usuario.rol == "administrador"
    try:
        resultado = servicio_rutas.optimizar(db, datos, guardar)
    except servicio_rutas.SectorSinDatos as e:
        raise HTTPException(status.HTTP_404_NOT_FOUND, str(e)) from None
    log.info(
        "Sector %s: %d paradas, %.0f m, guardada=%s",
        datos.sector, len(resultado.paradas), resultado.distancia_total, guardar,
    )
    return resultado


def _resumen(ruta: Ruta) -> dict:
    return {
        "id": ruta.id,
        "sector": ruta.sector,
        "activo": ruta.activo,
        "placa": ruta.camion.placa if ruta.camion else None,
        "paradas": sum(1 for p in ruta.puntos if p.get("llenado") is not None),
        "distancia": float(ruta.distancia),
        "tiempo": float(ruta.tiempo),
        "fecha_creacion": ruta.fecha_creacion,
    }


def _detalle(ruta: Ruta) -> RutaDetalleOut:
    return RutaDetalleOut(**_resumen(ruta), puntos=ruta.puntos, tramos=ruta.geometria)


@router.get("/rutas", response_model=list[RutaResumenOut], dependencies=[Depends(solo_admin)])
def historial(db: Annotated[Session, Depends(get_db)], limite: Annotated[int, Query(le=100)] = 30):
    rutas = db.scalars(
        select(Ruta).options(selectinload(Ruta.camion)).order_by(Ruta.id.desc()).limit(limite)
    )
    return [_resumen(r) for r in rutas]


@router.get("/rutas/mi-ruta", response_model=RutaDetalleOut | None)
def mi_ruta(
    db: Annotated[Session, Depends(get_db)],
    usuario: Annotated[Usuario, Depends(usuario_actual)],
):
    """Ruta activa asignada al camión del conductor que inició sesión."""
    conductor = db.get(Conductor, usuario.id_usuario)
    if conductor is None or conductor.id_camion is None:
        return None
    ruta = db.scalars(
        select(Ruta)
        .where(Ruta.camion_id == conductor.id_camion, Ruta.activo)
        .order_by(Ruta.id.desc())
    ).first()
    return _detalle(ruta) if ruta else None


@router.get("/rutas/{ruta_id}", response_model=RutaDetalleOut, dependencies=[Depends(solo_admin)])
def detalle(ruta_id: int, db: Annotated[Session, Depends(get_db)]):
    ruta = db.get(Ruta, ruta_id)
    if ruta is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Ruta no encontrada.")
    return _detalle(ruta)
