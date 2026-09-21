from typing import Annotated

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import Camion, Conductor, Usuario
from app.schemas import ConductorOut
from app.security import solo_admin

router = APIRouter(tags=["conductores"])


@router.get("/conductores", response_model=list[ConductorOut], dependencies=[Depends(solo_admin)])
def conductores(db: Annotated[Session, Depends(get_db)]):
    filas = db.execute(
        select(Usuario, Camion.placa)
        .join(Conductor, Conductor.id_conductor == Usuario.id_usuario)
        .outerjoin(Camion, Camion.id_camion == Conductor.id_camion)
        .where(Usuario.rol == "conductor")
        .order_by(Usuario.id_usuario)
    )
    return [
        ConductorOut(
            id_usuario=u.id_usuario,
            nombre_completo=f"{u.nombre} {u.apellido}",
            dni=u.dni,
            celular=u.celular,
            placa=placa,
        )
        for u, placa in filas
    ]
