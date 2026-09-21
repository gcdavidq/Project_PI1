import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routers import auth, conductores, rutas
from ecoroutex.grafo import grafo_san_borja

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")


@asynccontextmanager
async def lifespan(app: FastAPI):
    grafo = grafo_san_borja()  # se carga una vez al arrancar, no en la primera petición
    logging.getLogger(__name__).info("Grafo vial cargado: %d nodos", grafo.number_of_nodes())
    yield


app = FastAPI(
    title="EcoRouteX API",
    description="Optimización de rutas de recolección de residuos en San Borja, Lima.",
    version="2.0.0",
    lifespan=lifespan,
)

# El middleware envuelve también las respuestas de error, así el navegador ve el
# 401/404 real y no un fallo de CORS (problema de las Lambdas originales).
app.add_middleware(
    CORSMiddleware,
    allow_origins=get_settings().lista_cors,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

app.include_router(auth.router)
app.include_router(rutas.router)
app.include_router(conductores.router)


@app.api_route("/health", methods=["GET", "HEAD"], tags=["sistema"])
def health():
    """Usado por Render y por el ping de keep-alive. No toca la base de datos."""
    return {"status": "ok"}
