from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import Usuario
from app.schemas import LoginIn, LoginOut, UsuarioOut
from app.security import LimiteDeIntentos, crear_token, usuario_actual, verificar_password

router = APIRouter(prefix="/auth", tags=["auth"])

limite_login = LimiteDeIntentos(maximo=10, ventana_segundos=60)


def _usuario_out(usuario: Usuario) -> UsuarioOut:
    return UsuarioOut(
        id_usuario=usuario.id_usuario,
        dni=usuario.dni,
        nombre=usuario.nombre,
        apellido=usuario.apellido,
        rol=usuario.rol,
    )


@router.post("/login", response_model=LoginOut, dependencies=[Depends(limite_login)])
def login(datos: LoginIn, db: Annotated[Session, Depends(get_db)]):
    usuario = db.scalars(select(Usuario).where(Usuario.dni == datos.dni)).first()
    if usuario is None or not verificar_password(datos.password, usuario.password_hash):
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Credenciales incorrectas.")
    return LoginOut(token=crear_token(usuario), usuario=_usuario_out(usuario))


@router.get("/me", response_model=UsuarioOut)
def me(usuario: Annotated[Usuario, Depends(usuario_actual)]):
    return _usuario_out(usuario)
