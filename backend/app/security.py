import time
from collections import defaultdict, deque
from datetime import UTC, datetime, timedelta
from typing import Annotated

import bcrypt
import jwt
from fastapi import Depends, HTTPException, Request, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from app.config import get_settings
from app.db import get_db
from app.models import Usuario

ALGORITMO = "HS256"
bearer = HTTPBearer(auto_error=False)


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()


def verificar_password(password: str, password_hash: str) -> bool:
    return bcrypt.checkpw(password.encode(), password_hash.encode())


def crear_token(usuario: Usuario) -> str:
    settings = get_settings()
    expira = datetime.now(UTC) + timedelta(minutes=settings.jwt_minutos_expiracion)
    payload = {"sub": str(usuario.id_usuario), "rol": usuario.rol, "exp": expira}
    return jwt.encode(payload, settings.jwt_secret, algorithm=ALGORITMO)


def usuario_opcional(
    credenciales: Annotated[HTTPAuthorizationCredentials | None, Depends(bearer)],
    db: Annotated[Session, Depends(get_db)],
) -> Usuario | None:
    if credenciales is None:
        return None
    try:
        payload = jwt.decode(
            credenciales.credentials, get_settings().jwt_secret, algorithms=[ALGORITMO]
        )
    except jwt.PyJWTError:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Token inválido o expirado.") from None
    return db.get(Usuario, int(payload["sub"]))


def usuario_actual(usuario: Annotated[Usuario | None, Depends(usuario_opcional)]) -> Usuario:
    if usuario is None:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Debes iniciar sesión.")
    return usuario


def solo_admin(usuario: Annotated[Usuario, Depends(usuario_actual)]) -> Usuario:
    if usuario.rol != "administrador":
        raise HTTPException(status.HTTP_403_FORBIDDEN, "Solo para administradores.")
    return usuario


class LimiteDeIntentos:
    """Límite simple por IP en memoria; suficiente para una sola instancia."""

    def __init__(self, maximo: int, ventana_segundos: int):
        self.maximo = maximo
        self.ventana = ventana_segundos
        self.intentos: dict[str, deque[float]] = defaultdict(deque)

    def __call__(self, request: Request) -> None:
        # Detrás del proxy de Render la IP real llega en X-Forwarded-For.
        reenviado = request.headers.get("x-forwarded-for", "")
        ip = reenviado.split(",")[0].strip() or (request.client.host if request.client else "?")
        ahora = time.monotonic()
        cola = self.intentos[ip]
        while cola and ahora - cola[0] > self.ventana:
            cola.popleft()
        if len(cola) >= self.maximo:
            raise HTTPException(
                status.HTTP_429_TOO_MANY_REQUESTS, "Demasiadas solicitudes. Intenta en un momento."
            )
        cola.append(ahora)
