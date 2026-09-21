"""Descarga la red vial de San Borja desde OpenStreetMap y la guarda en data/.

Solo hace falta ejecutarlo si se quiere regenerar el grafo (requiere osmnx,
incluido en requirements-dev.txt):

    python -m scripts.build_graph
"""

import gzip
import json

import networkx as nx
import osmnx as ox

from ecoroutex.grafo import RUTA_GRAFO

LUGAR = "San Borja, Lima, Peru"
# Un camión compactador no circula a la velocidad máxima de la vía.
VELOCIDAD_MAX_CAMION_KMH = 25
DEMORA_SEMAFORO_MIN = 0.5


def main() -> None:
    g = ox.graph_from_place(LUGAR, network_type="drive")
    # Quedarse con la componente fuertemente conexa mayor: desde cualquier nodo
    # se puede llegar a cualquier otro, así no hay pares sin ruta.
    g = g.subgraph(max(nx.strongly_connected_components(g), key=len)).copy()
    g = ox.add_edge_speeds(g)

    nodos = {
        str(n): [round(d["y"], 6), round(d["x"], 6), int(d.get("highway") == "traffic_signals")]
        for n, d in g.nodes(data=True)
    }

    mejores: dict[tuple[str, str], list] = {}
    for u, v, d in g.edges(data=True):
        if u == v:
            continue
        velocidad = min(d["speed_kph"], VELOCIDAD_MAX_CAMION_KMH)
        tiempo = d["length"] / 1000 / velocidad * 60
        if nodos[str(v)][2]:
            tiempo += DEMORA_SEMAFORO_MIN
        geometria = None
        if "geometry" in d:
            geometria = [[round(lat, 6), round(lon, 6)] for lon, lat in d["geometry"].coords]
        arista = [str(u), str(v), round(d["length"], 2), round(tiempo, 4), geometria]
        clave = (str(u), str(v))
        if clave not in mejores or arista[2] < mejores[clave][2]:
            mejores[clave] = arista

    RUTA_GRAFO.parent.mkdir(exist_ok=True)
    with gzip.open(RUTA_GRAFO, "wt", encoding="utf-8") as f:
        json.dump({"lugar": LUGAR, "nodos": nodos, "aristas": list(mejores.values())}, f)
    print(f"{len(nodos)} nodos, {len(mejores)} aristas -> {RUTA_GRAFO}")


if __name__ == "__main__":
    main()
