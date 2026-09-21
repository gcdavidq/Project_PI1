"""Motor de EcoRouteX: recorrido priorizado de contenedores.

Es la misma heurística voraz del proyecto original (Lambda_EcorouteX.py /
EcoRouteX_with_BD.ipynb), extraída a funciones puras sin base de datos ni mapas:

    prioridad = w_llenado * llenado_norm
              + w_distancia * (1 - distancia_norm)
              + w_tiempo * (1 - tiempo_norm)

Desde el nodo actual se elige el contenedor de mayor prioridad que todavía quepa
en el camión, hasta que no queden candidatos o se agote la capacidad, y al final
se regresa al depósito.
"""

from dataclasses import dataclass, field
from itertools import pairwise

# matriz[origen][destino] = {"distancia": metros, "tiempo": minutos}
Matriz = dict[str, dict[str, dict[str, float]]]


@dataclass(frozen=True)
class Pesos:
    llenado: float = 0.3
    distancia: float = 0.5
    tiempo: float = 0.2


@dataclass
class Candidato:
    nodo: str
    llenado: int
    distancia: float
    tiempo: float
    prioridad: float
    cabe: bool


@dataclass
class Paso:
    origen: str
    destino: str
    distancia: float
    tiempo: float
    capacidad_restante: float
    candidatos: list[Candidato] = field(default_factory=list)


@dataclass
class Recorrido:
    nodos: list[str]
    pasos: list[Paso]
    distancia_total: float
    tiempo_total: float
    carga_recogida: float
    regreso: bool


def normalizar(valor: float, max_valor: float, min_valor: float) -> float:
    if max_valor == min_valor:
        return 0.0
    return (valor - min_valor) / (max_valor - min_valor)


def evaluar_candidatos(
    nodo_actual: str,
    matriz: Matriz,
    llenados: dict[str, int],
    visitados: set[str],
    capacidad_restante: float,
    pesos: Pesos,
) -> list[Candidato]:
    """Calcula la prioridad de cada contenedor alcanzable desde `nodo_actual`."""
    conexiones = matriz.get(nodo_actual, {})
    if not conexiones or not llenados:
        return []

    distancias = [c["distancia"] for c in conexiones.values()]
    tiempos = [c["tiempo"] for c in conexiones.values()]
    max_d, min_d = max(distancias), min(distancias)
    max_t, min_t = max(tiempos), min(tiempos)
    max_ll, min_ll = max(llenados.values()), min(llenados.values())

    candidatos = []
    for destino, datos in conexiones.items():
        if destino in visitados or destino == nodo_actual:
            continue
        if llenados.get(destino, 0) <= 0:
            continue
        prioridad = (
            pesos.llenado * normalizar(llenados[destino], max_ll, min_ll)
            + pesos.distancia * (1 - normalizar(datos["distancia"], max_d, min_d))
            + pesos.tiempo * (1 - normalizar(datos["tiempo"], max_t, min_t))
        )
        candidatos.append(
            Candidato(
                nodo=destino,
                llenado=llenados[destino],
                distancia=datos["distancia"],
                tiempo=datos["tiempo"],
                prioridad=prioridad,
                cabe=llenados[destino] <= capacidad_restante,
            )
        )
    candidatos.sort(key=lambda c: c.prioridad, reverse=True)
    return candidatos


def recorrido_priorizado(
    deposito: str,
    matriz: Matriz,
    llenados: dict[str, int],
    capacidad_camion: float,
    pesos: Pesos = Pesos(),
) -> Recorrido:
    nodo_actual = deposito
    visitados = {deposito}
    nodos = [deposito]
    pasos: list[Paso] = []
    capacidad_restante = capacidad_camion
    distancia_total = 0.0
    tiempo_total = 0.0

    while capacidad_restante > 0:
        candidatos = evaluar_candidatos(
            nodo_actual, matriz, llenados, visitados, capacidad_restante, pesos
        )
        elegido = next((c for c in candidatos if c.cabe), None)
        if elegido is None:
            break

        visitados.add(elegido.nodo)
        nodos.append(elegido.nodo)
        capacidad_restante -= elegido.llenado
        distancia_total += elegido.distancia
        tiempo_total += elegido.tiempo
        pasos.append(
            Paso(
                origen=nodo_actual,
                destino=elegido.nodo,
                distancia=elegido.distancia,
                tiempo=elegido.tiempo,
                capacidad_restante=capacidad_restante,
                candidatos=candidatos,
            )
        )
        nodo_actual = elegido.nodo

    regreso = False
    vuelta = matriz.get(nodo_actual, {}).get(deposito)
    if nodo_actual != deposito and vuelta is not None:
        distancia_total += vuelta["distancia"]
        tiempo_total += vuelta["tiempo"]
        nodos.append(deposito)
        regreso = True

    return Recorrido(
        nodos=nodos,
        pasos=pasos,
        distancia_total=distancia_total,
        tiempo_total=tiempo_total,
        carga_recogida=capacidad_camion - capacidad_restante,
        regreso=regreso,
    )


def costo_de_secuencia(secuencia: list[str], matriz: Matriz) -> tuple[float, float]:
    """Distancia y tiempo de recorrer `secuencia` en el orden dado.

    Sirve para comparar contra una ruta sin optimizar (mismas paradas, orden fijo).
    """
    distancia = tiempo = 0.0
    for origen, destino in pairwise(secuencia):
        tramo = matriz.get(origen, {}).get(destino)
        if tramo is None:
            continue
        distancia += tramo["distancia"]
        tiempo += tramo["tiempo"]
    return distancia, tiempo
