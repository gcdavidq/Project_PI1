from datetime import datetime

from pydantic import BaseModel, Field, model_validator


class LoginIn(BaseModel):
    dni: str = Field(min_length=8, max_length=8, pattern=r"^\d{8}$")
    password: str = Field(min_length=1, max_length=128)


class UsuarioOut(BaseModel):
    id_usuario: int
    dni: str
    nombre: str
    apellido: str
    rol: str


class LoginOut(BaseModel):
    token: str
    usuario: UsuarioOut


class PuntoOut(BaseModel):
    n_nodo: str
    lat: float
    lon: float


class ContenedorOut(PuntoOut):
    sector: int
    llenado: int


class MapaOut(BaseModel):
    deposito: PuntoOut
    contenedores: list[ContenedorOut]


class PesosIn(BaseModel):
    llenado: float = Field(0.3, ge=0, le=1)
    distancia: float = Field(0.5, ge=0, le=1)
    tiempo: float = Field(0.2, ge=0, le=1)

    @model_validator(mode="after")
    def al_menos_un_peso(self):
        if self.llenado + self.distancia + self.tiempo <= 0:
            raise ValueError("Al menos un peso debe ser mayor que cero.")
        return self


class OptimizarIn(BaseModel):
    sector: int = Field(ge=1, le=4)
    capacidad: int = Field(1000, ge=100, le=10000)
    pesos: PesosIn = PesosIn()
    guardar: bool = False


class CandidatoOut(BaseModel):
    n_nodo: str
    llenado: int
    distancia: float
    tiempo: float
    prioridad: float
    cabe: bool


class PasoOut(BaseModel):
    origen: str
    destino: str
    distancia: float
    tiempo: float
    capacidad_restante: float
    total_candidatos: int
    candidatos: list[CandidatoOut]


class ParadaOut(PuntoOut):
    orden: int
    llenado: int | None = None  # None = depósito


class ComparacionOut(BaseModel):
    """Mismas paradas recorridas en orden de registro, sin priorizar."""

    distancia: float
    tiempo: float
    ahorro_distancia_pct: float
    ahorro_tiempo_pct: float


class RutaOptimizadaOut(BaseModel):
    ruta_id: int | None
    sector: int
    capacidad: int
    paradas: list[ParadaOut]
    tramos: list[list[list[float]]]
    pasos: list[PasoOut]
    distancia_total: float
    tiempo_total: float
    carga_recogida: float
    contenedores_pendientes: int
    comparacion: ComparacionOut


class RutaResumenOut(BaseModel):
    id: int
    sector: int
    activo: bool
    placa: str | None
    paradas: int
    distancia: float
    tiempo: float
    fecha_creacion: datetime


class RutaDetalleOut(RutaResumenOut):
    puntos: list[ParadaOut]
    tramos: list[list[list[float]]]


class ConductorOut(BaseModel):
    id_usuario: int
    nombre_completo: str
    dni: str
    celular: str | None
    placa: str | None
