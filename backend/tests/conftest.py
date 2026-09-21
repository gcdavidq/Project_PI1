import os

# Deben existir antes de importar la app; los tests no tocan la base de datos real.
os.environ["DATABASE_URL"] = "sqlite://"
os.environ["JWT_SECRET"] = "secreto-solo-para-tests"

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.pool import StaticPool

from app.db import get_db
from app.main import app
from app.models import Base, Contenedor, Deposito, Tiempo, Usuario
from app.routers.auth import limite_login
from app.security import hash_password


@pytest.fixture
def client():
    engine = create_engine(
        "sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool
    )
    Base.metadata.create_all(engine)

    with Session(engine) as db:
        db.add_all([
            Usuario(dni="70000001", password_hash=hash_password("admin123"), nombre="Admin",
                    apellido="Demo", rol="administrador"),
            Usuario(dni="12345678", password_hash=hash_password("conductor123"), nombre="Carlos",
                    apellido="Pérez", rol="conductor"),
            Deposito(n_nodo="X", nombre="Depósito", posicion_x=-77.0, posicion_y=-12.1),
            Contenedor(n_nodo="A", posicion_x=-77.001, posicion_y=-12.101, sector=1, capacidad=80),
            Contenedor(n_nodo="B", posicion_x=-77.002, posicion_y=-12.102, sector=1, capacidad=40),
        ])
        pares = {("X", "A"): 100, ("A", "X"): 100, ("X", "B"): 300, ("B", "X"): 300,
                 ("A", "B"): 150, ("B", "A"): 150}
        db.add_all(Tiempo(n_nodo_origen=o, n_nodo_destino=d, distancia=m, tiempo=m / 100)
                   for (o, d), m in pares.items())
        db.commit()

    def get_db_test():
        with Session(engine, expire_on_commit=False) as db:
            yield db

    app.dependency_overrides[get_db] = get_db_test
    limite_login.intentos.clear()
    with TestClient(app) as c:
        yield c
    app.dependency_overrides.clear()


@pytest.fixture
def token_admin(client):
    r = client.post("/auth/login", json={"dni": "70000001", "password": "admin123"})
    return r.json()["token"]


@pytest.fixture
def token_conductor(client):
    r = client.post("/auth/login", json={"dni": "12345678", "password": "conductor123"})
    return r.json()["token"]
