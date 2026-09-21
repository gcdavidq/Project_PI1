"""Crea el esquema en PostgreSQL y carga datos de demostración reproducibles.

    python -m scripts.seed           # falla si las tablas ya existen
    python -m scripts.seed --reset   # BORRA las tablas de EcoRouteX y las recrea

Los contenedores son nodos reales de la red vial de San Borja (OpenStreetMap);
su nivel de llenado es simulado, igual que en el proyecto original, donde la base
de datos era una "simulación de la BD de la municipalidad".
"""

import argparse
import math
import random
import statistics
from pathlib import Path

from sqlalchemy import insert, inspect, text

from app.db import get_engine
from app.models import Camion, Contenedor, Deposito, Tiempo, Usuario
from app.security import hash_password
from ecoroutex.grafo import grafo_san_borja, matriz_de_costos

SCHEMA = Path(__file__).resolve().parent.parent / "sql" / "schema.sql"
TABLAS = ["ruta", "tiempos", "contenedor", "deposito", "conductor", "camion", "usuario"]

CONTENEDORES_POR_SECTOR = 32
SEPARACION_MINIMA_M = 180

# Nodos que ya eran contenedores en la base de datos original (salida del notebook
# EcoRouteX_with_BD.ipynb); se conservan si siguen existiendo en OpenStreetMap.
NODOS_ORIGINALES = [
    "412529888", "3903819668", "412554073", "412549362", "412554037", "417252102",
    "417252136", "1273879842", "417252706", "412528235", "1841915508", "3630229215",
    "417251204", "392151970", "391036814", "412554325", "4354022565", "4170789705",
    "412529887", "412557563", "9890962282", "417251195", "412554242", "791159897",
    "326022171", "417251159", "417252572", "3628169609", "412553943", "412554253",
    "412528242", "4549868556", "1273664820", "417252592", "515494213", "412554319",
    "417252214", "316625042", "9890779746", "412557570", "412557535", "412528255",
    "412528286", "4351533396", "412529889", "6408227574", "263933849", "3628219077",
    "412528267", "4042528361", "9890955626",
]

PASSWORD_ADMIN = "admin123"
PASSWORD_CONDUCTOR = "conductor123"
# Mismos conductores y placas de la demo original.
CONDUCTORES = [
    ("12345678", "Carlos", "Pérez", "987654321", "GHI789"),
    ("87654321", "Luis", "Ramírez", "912345678", "ABC123"),
    ("11223344", "Ana", "García", "934567890", "JKL012"),
    ("44332211", "Marta", "Lopez", "956789012", "DEF456"),
    ("55667788", "Jorge", "Hernández", "978901234", "MNO345"),
]


def metros(a: tuple[float, float], b: tuple[float, float]) -> float:
    dlat = (a[0] - b[0]) * 111_320
    dlon = (a[1] - b[1]) * 111_320 * math.cos(math.radians(a[0]))
    return math.hypot(dlat, dlon)


def elegir_contenedores(grafo, rng: random.Random):
    """Reparte contenedores en 4 sectores (cuadrantes del distrito) con separación mínima."""
    pos = {n: (d["lat"], d["lon"]) for n, d in grafo.nodes(data=True)}
    lat_c = statistics.median(p[0] for p in pos.values())
    lon_c = statistics.median(p[1] for p in pos.values())

    def sector(p):  # 1 = NO, 2 = NE, 3 = SO, 4 = SE
        return (1 if p[0] >= lat_c else 3) + (1 if p[1] >= lon_c else 0)

    deposito = min(pos, key=lambda n: metros(pos[n], (lat_c, lon_c)))

    otros = [n for n in pos if n not in NODOS_ORIGINALES]
    rng.shuffle(otros)
    elegidos: dict[int, list[str]] = {1: [], 2: [], 3: [], 4: []}
    for nodo in [n for n in NODOS_ORIGINALES if n in pos] + otros:
        s = sector(pos[nodo])
        if nodo == deposito or len(elegidos[s]) >= CONTENEDORES_POR_SECTOR:
            continue
        if all(metros(pos[nodo], pos[o]) >= SEPARACION_MINIMA_M for o in elegidos[s]):
            elegidos[s].append(nodo)
    return deposito, elegidos, pos


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--reset", action="store_true", help="borra y recrea las tablas")
    args = parser.parse_args()

    engine = get_engine()
    existentes = set(inspect(engine).get_table_names()) & set(TABLAS)
    if existentes and not args.reset:
        raise SystemExit(f"Ya existen tablas ({sorted(existentes)}). Usa --reset para recrearlas.")

    rng = random.Random(42)
    grafo = grafo_san_borja()
    deposito, por_sector, pos = elegir_contenedores(grafo, rng)

    with engine.begin() as con:
        for tabla in TABLAS:
            con.execute(text(f"DROP TABLE IF EXISTS {tabla} CASCADE"))
        con.execute(text("DROP FUNCTION IF EXISTS asignar_camion_a_conductor CASCADE"))
        con.execute(text("DROP FUNCTION IF EXISTS asignar_conductor_a_camion CASCADE"))
        con.exec_driver_sql(SCHEMA.read_text(encoding="utf-8"))

        lat, lon = pos[deposito]
        con.execute(
            insert(Deposito),
            [{"n_nodo": deposito, "nombre": "Depósito municipal (referencial)",
              "posicion_x": lon, "posicion_y": lat}],
        )
        con.execute(
            insert(Contenedor),
            [
                {"n_nodo": n, "posicion_x": pos[n][1], "posicion_y": pos[n][0],
                 "sector": s, "capacidad": rng.randint(8, 100)}
                for s, nodos in por_sector.items()
                for n in nodos
            ],
        )

        filas = set()
        for nodos in por_sector.values():
            filas.update(matriz_de_costos(grafo, [deposito, *nodos]))
        con.execute(
            insert(Tiempo),
            [{"n_nodo_origen": o, "n_nodo_destino": d, "distancia": dist, "tiempo": t}
             for o, d, dist, t in sorted(filas)],
        )

        # Primero los camiones; al insertar cada conductor, el trigger le asigna uno.
        con.execute(
            insert(Camion),
            [{"placa": placa, "posicion_x": lon, "posicion_y": lat,
              "cantidad_combustible": rng.randint(55, 100), "capacidad_total": 1000}
             for *_, placa in CONDUCTORES],
        )
        con.execute(
            insert(Usuario),
            [{"dni": "70000001", "password_hash": hash_password(PASSWORD_ADMIN),
              "nombre": "Admin", "apellido": "Demo", "celular": None, "rol": "administrador"}],
        )
        hash_conductor = hash_password(PASSWORD_CONDUCTOR)
        for dni, nombre, apellido, celular, _ in CONDUCTORES:
            con.execute(
                insert(Usuario),
                [{"dni": dni, "password_hash": hash_conductor, "nombre": nombre,
                  "apellido": apellido, "celular": celular, "rol": "conductor"}],
            )

    total = sum(len(n) for n in por_sector.values())
    print(f"Depósito: nodo {deposito}")
    print(f"Contenedores: {total} ({', '.join(f'S{s}={len(n)}' for s, n in por_sector.items())})")
    print(f"Pares en 'tiempos': {len(filas)}")
    print(f"Admin demo:     DNI 70000001 / {PASSWORD_ADMIN}")
    print(f"Conductor demo: DNI {CONDUCTORES[0][0]} / {PASSWORD_CONDUCTOR}")


if __name__ == "__main__":
    main()
