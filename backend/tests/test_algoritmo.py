from ecoroutex.algoritmo import (
    Pesos,
    costo_de_secuencia,
    evaluar_candidatos,
    normalizar,
    recorrido_priorizado,
)


def tramo(distancia, tiempo=None):
    return {"distancia": distancia, "tiempo": tiempo if tiempo is not None else distancia / 100}


def matriz_completa(distancias: dict[tuple[str, str], float]):
    matriz = {}
    for (a, b), d in distancias.items():
        matriz.setdefault(a, {})[b] = tramo(d)
        matriz.setdefault(b, {})[a] = tramo(d)
    return matriz


# X es el depósito; A está cerca, B lejos, C a media distancia.
MATRIZ = matriz_completa(
    {("X", "A"): 100, ("X", "B"): 900, ("X", "C"): 500,
     ("A", "B"): 800, ("A", "C"): 400, ("B", "C"): 300}
)


def test_normalizar_rango_nulo():
    assert normalizar(5, 5, 5) == 0.0
    assert normalizar(5, 10, 0) == 0.5


def test_solo_distancia_elige_el_mas_cercano():
    llenados = {"A": 10, "B": 90, "C": 50}
    r = recorrido_priorizado("X", MATRIZ, llenados, 1000, Pesos(llenado=0, distancia=1, tiempo=0))
    assert r.nodos == ["X", "A", "C", "B", "X"]
    assert r.distancia_total == 100 + 400 + 300 + 900
    assert r.carga_recogida == 150
    assert r.regreso


def test_solo_llenado_elige_el_mas_lleno():
    llenados = {"A": 10, "B": 90, "C": 50}
    r = recorrido_priorizado("X", MATRIZ, llenados, 1000, Pesos(llenado=1, distancia=0, tiempo=0))
    assert r.nodos[1] == "B"


def test_respeta_la_capacidad_del_camion():
    llenados = {"A": 60, "B": 60, "C": 30}
    r = recorrido_priorizado("X", MATRIZ, llenados, 100, Pesos(llenado=0, distancia=1, tiempo=0))
    # A (60) entra; B (60) ya no cabe, pero C (30) sí.
    assert r.nodos == ["X", "A", "C", "X"]
    assert r.carga_recogida == 90
    assert r.pasos[-1].capacidad_restante == 10


def test_ignora_contenedores_vacios_y_no_repite():
    llenados = {"A": 0, "B": 40, "C": 40}
    r = recorrido_priorizado("X", MATRIZ, llenados, 1000)
    visitados = r.nodos[1:-1]
    assert "A" not in visitados
    assert sorted(visitados) == ["B", "C"]


def test_nodo_sin_conexion_no_rompe_el_recorrido():
    matriz = {"X": {"A": tramo(100)}, "A": {}}  # desde A no hay salida ni regreso
    r = recorrido_priorizado("X", matriz, {"A": 20, "B": 50}, 1000)
    assert r.nodos == ["X", "A"]
    assert not r.regreso


def test_sin_contenedores():
    r = recorrido_priorizado("X", {}, {}, 1000)
    assert r.nodos == ["X"]
    assert r.distancia_total == 0


def test_candidatos_ordenados_por_prioridad():
    candidatos = evaluar_candidatos("X", MATRIZ, {"A": 10, "B": 90, "C": 50}, {"X"}, 1000, Pesos())
    prioridades = [c.prioridad for c in candidatos]
    assert prioridades == sorted(prioridades, reverse=True)
    assert all(0 <= p <= 1 for p in prioridades)


def test_costo_de_secuencia():
    assert costo_de_secuencia(["X", "A", "B"], MATRIZ) == (900, 9.0)
