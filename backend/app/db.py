from collections.abc import Iterator
from functools import lru_cache

from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

from app.config import get_settings


@lru_cache
def get_engine():
    # pool_pre_ping: Neon suspende el cómputo cuando está inactivo y corta conexiones.
    return create_engine(get_settings().sqlalchemy_url, pool_pre_ping=True, pool_recycle=300)


def get_db() -> Iterator[Session]:
    with sessionmaker(get_engine(), expire_on_commit=False)() as session:
        yield session
