def auth(token):
    return {"Authorization": f"Bearer {token}"}


def test_health(client):
    assert client.get("/health").json() == {"status": "ok"}


def test_login_correcto(client):
    r = client.post("/auth/login", json={"dni": "70000001", "password": "admin123"})
    assert r.status_code == 200
    assert r.json()["usuario"]["rol"] == "administrador"
    assert "password" not in str(r.json()["usuario"])


def test_login_password_incorrecto(client):
    r = client.post("/auth/login", json={"dni": "70000001", "password": "mala"})
    assert r.status_code == 401


def test_login_dni_invalido(client):
    r = client.post("/auth/login", json={"dni": "abc", "password": "x"})
    assert r.status_code == 422


def test_login_limite_de_intentos(client):
    for _ in range(10):
        client.post("/auth/login", json={"dni": "70000001", "password": "mala"})
    r = client.post("/auth/login", json={"dni": "70000001", "password": "admin123"})
    assert r.status_code == 429


def test_conductores_requiere_admin(client, token_admin, token_conductor):
    assert client.get("/conductores").status_code == 401
    assert client.get("/conductores", headers=auth(token_conductor)).status_code == 403
    assert client.get("/conductores", headers=auth("token-falso")).status_code == 401
    r = client.get("/conductores", headers=auth(token_admin))
    assert r.status_code == 200


def test_contenedores_por_sector(client):
    r = client.get("/contenedores", params={"sector": 1}).json()
    assert r["deposito"]["n_nodo"] == "X"
    assert {c["n_nodo"] for c in r["contenedores"]} == {"A", "B"}
    assert client.get("/contenedores", params={"sector": 9}).status_code == 422


def test_optimizar_es_publico_pero_no_guarda(client, token_admin):
    r = client.post("/rutas/optimizar", json={"sector": 1, "guardar": True})
    assert r.status_code == 200
    cuerpo = r.json()
    assert cuerpo["ruta_id"] is None
    assert [p["n_nodo"] for p in cuerpo["paradas"]] == ["X", "A", "B", "X"]
    assert cuerpo["distancia_total"] == 100 + 150 + 300
    assert cuerpo["pasos"][0]["candidatos"][0]["n_nodo"] == "A"
    assert client.get("/rutas", headers=auth(token_admin)).json() == []


def test_admin_guarda_y_reemplaza_la_ruta_activa(client, token_admin):
    for _ in range(2):
        r = client.post(
            "/rutas/optimizar", json={"sector": 1, "guardar": True}, headers=auth(token_admin)
        )
        assert r.json()["ruta_id"] is not None
    rutas = client.get("/rutas", headers=auth(token_admin)).json()
    assert [x["activo"] for x in rutas] == [True, False]
    detalle = client.get(f"/rutas/{rutas[0]['id']}", headers=auth(token_admin)).json()
    assert detalle["paradas"] == 2
    assert len(detalle["puntos"]) == 4


def test_sector_sin_contenedores(client):
    assert client.post("/rutas/optimizar", json={"sector": 3}).status_code == 404
