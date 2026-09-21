"""Modelos ORM. La fuente de verdad del esquema en PostgreSQL es sql/schema.sql."""

from datetime import datetime
from decimal import Decimal

from sqlalchemy import JSON, DateTime, ForeignKey, Numeric, SmallInteger, String, func
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

Json = JSON().with_variant(JSONB(), "postgresql")


class Base(DeclarativeBase):
    pass


class Usuario(Base):
    __tablename__ = "usuario"

    id_usuario: Mapped[int] = mapped_column(primary_key=True)
    dni: Mapped[str] = mapped_column(String(8), unique=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    nombre: Mapped[str] = mapped_column(String(50))
    apellido: Mapped[str] = mapped_column(String(50))
    celular: Mapped[str | None] = mapped_column(String(15))
    rol: Mapped[str] = mapped_column(String(15))

    conductor: Mapped["Conductor | None"] = relationship(back_populates="usuario")


class Camion(Base):
    __tablename__ = "camion"

    id_camion: Mapped[int] = mapped_column(primary_key=True)
    placa: Mapped[str] = mapped_column(String(7), unique=True)
    posicion_x: Mapped[Decimal] = mapped_column(Numeric(20, 7))
    posicion_y: Mapped[Decimal] = mapped_column(Numeric(20, 7))
    cantidad_combustible: Mapped[Decimal] = mapped_column(Numeric(10, 2))
    capacidad_total: Mapped[Decimal] = mapped_column(Numeric(10, 2))
    porcentaje_restante: Mapped[Decimal] = mapped_column(Numeric(10, 2), default=100)
    accion: Mapped[str] = mapped_column(String(12), default="esperando")
    ocupado: Mapped[bool] = mapped_column(default=False)


class Conductor(Base):
    __tablename__ = "conductor"

    id_conductor: Mapped[int] = mapped_column(ForeignKey("usuario.id_usuario"), primary_key=True)
    id_camion: Mapped[int | None] = mapped_column(ForeignKey("camion.id_camion"))

    usuario: Mapped[Usuario] = relationship(back_populates="conductor")
    camion: Mapped[Camion | None] = relationship()


class Deposito(Base):
    __tablename__ = "deposito"

    n_nodo: Mapped[str] = mapped_column(String(12), primary_key=True)
    nombre: Mapped[str] = mapped_column(String(80))
    posicion_x: Mapped[Decimal] = mapped_column(Numeric(20, 7))
    posicion_y: Mapped[Decimal] = mapped_column(Numeric(20, 7))


class Contenedor(Base):
    __tablename__ = "contenedor"

    n_nodo: Mapped[str] = mapped_column(String(12), primary_key=True)
    posicion_x: Mapped[Decimal] = mapped_column(Numeric(20, 7))
    posicion_y: Mapped[Decimal] = mapped_column(Numeric(20, 7))
    activo: Mapped[bool] = mapped_column(default=True)
    sector: Mapped[int] = mapped_column(SmallInteger)
    capacidad: Mapped[int] = mapped_column(default=0)


class Tiempo(Base):
    __tablename__ = "tiempos"

    id_tiempo: Mapped[int] = mapped_column(primary_key=True)
    n_nodo_origen: Mapped[str] = mapped_column(String(12), index=True)
    n_nodo_destino: Mapped[str] = mapped_column(String(12))
    tiempo: Mapped[Decimal] = mapped_column(Numeric(12, 4))
    distancia: Mapped[Decimal] = mapped_column(Numeric(12, 4))


class Ruta(Base):
    __tablename__ = "ruta"

    id: Mapped[int] = mapped_column(primary_key=True)
    puntos: Mapped[list] = mapped_column(Json)
    camion_id: Mapped[int | None] = mapped_column(ForeignKey("camion.id_camion"))
    sector: Mapped[int] = mapped_column(SmallInteger)
    activo: Mapped[bool] = mapped_column(default=True)
    orden: Mapped[int] = mapped_column(default=0)
    geometria: Mapped[list] = mapped_column(Json)
    distancia: Mapped[Decimal] = mapped_column(Numeric(20, 7))
    tiempo: Mapped[Decimal] = mapped_column(Numeric(20, 7))
    fecha_creacion: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )

    camion: Mapped[Camion | None] = relationship()
