"""Red vial de San Borja precalculada desde OpenStreetMap.

El proyecto original descargaba el grafo con osmnx en cada ejecución. Aquí se
descarga una sola vez (scripts/build_graph.py) y se guarda como JSON comprimido,
de modo que en producción solo hace falta networkx.
"""

import gzip
import json
from functools import lru_cache
from itertools import pairwise
from pathlib import Path

import networkx as nx

RUTA_GRAFO = Path(__file__).resolve().parent.parent / "data" / "san_borja.json.gz"


def cargar_grafo(ruta: Path = RUTA_GRAFO) -> nx.DiGraph:
    with gzip.open(ruta, "rt", encoding="utf-8") as f:
        datos = json.load(f)

    grafo = nx.DiGraph(lugar=datos["lugar"])
    for nodo, (lat, lon, semaforo) in datos["nodos"].items():
        grafo.add_node(nodo, lat=lat, lon=lon, semaforo=bool(semaforo))
    for u, v, longitud, tiempo, geometria in datos["aristas"]:
        grafo.add_edge(u, v, length=longitud, tiempo=tiempo, geometria=geometria)
    return grafo


@lru_cache(maxsize=1)
def grafo_san_borja() -> nx.DiGraph:
    return cargar_grafo()


def geometria_de_camino(grafo: nx.DiGraph, camino: list[str]) -> list[list[float]]:
    """Convierte una lista de nodos en coordenadas [lat, lon] siguiendo las calles."""
    if not camino:
        return []
    coords = [[grafo.nodes[camino[0]]["lat"], grafo.nodes[camino[0]]["lon"]]]
    for u, v in pairwise(camino):
        geometria = grafo.edges[u, v]["geometria"]
        if geometria:
            coords.extend(geometria[1:])
        else:
            coords.append([grafo.nodes[v]["lat"], grafo.nodes[v]["lon"]])
    return coords


def geometria_de_recorrido(grafo: nx.DiGraph, paradas: list[str]) -> list[list[list[float]]]:
    """Un tramo (lista de coordenadas) por cada par de paradas consecutivas.

    Entre paradas se usa Dijkstra sobre la longitud de las calles, igual que el
    `nx.shortest_path(..., weight='length')` del proyecto original.
    """
    tramos = []
    for origen, destino in pairwise(paradas):
        try:
            camino = nx.shortest_path(grafo, origen, destino, weight="length")
        except (nx.NetworkXNoPath, nx.NodeNotFound):
            tramos.append([])
            continue
        tramos.append(geometria_de_camino(grafo, camino))
    return tramos


def matriz_de_costos(grafo: nx.DiGraph, nodos: list[str]) -> list[tuple[str, str, float, float]]:
    """(origen, destino, distancia_m, tiempo_min) entre todos los pares alcanzables.

    El camino es el más corto en distancia; el tiempo es el de ese mismo camino.
    """
    filas = []
    destinos = set(nodos)
    for origen in nodos:
        distancias, caminos = nx.single_source_dijkstra(grafo, origen, weight="length")
        for destino in destinos - {origen}:
            if destino not in distancias:
                continue
            camino = caminos[destino]
            tiempo = sum(grafo.edges[u, v]["tiempo"] for u, v in pairwise(camino))
            filas.append((origen, destino, round(distancias[destino], 2), round(tiempo, 2)))
    return filas
