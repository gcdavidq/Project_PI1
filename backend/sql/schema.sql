-- Esquema de EcoRouteX para PostgreSQL (Neon).
-- Migrado del modelo MySQL original (SoftWare/legacy/Base_de_Datos).

CREATE TABLE usuario (
    id_usuario    SERIAL PRIMARY KEY,
    dni           VARCHAR(8) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    nombre        VARCHAR(50) NOT NULL,
    apellido      VARCHAR(50) NOT NULL,
    celular       VARCHAR(15),
    rol           VARCHAR(15) NOT NULL CHECK (rol IN ('administrador', 'conductor'))
);

CREATE TABLE camion (
    id_camion            SERIAL PRIMARY KEY,
    placa                VARCHAR(7) NOT NULL UNIQUE,
    posicion_x           DECIMAL(20, 7) NOT NULL,
    posicion_y           DECIMAL(20, 7) NOT NULL,
    cantidad_combustible DECIMAL(10, 2) NOT NULL CHECK (cantidad_combustible BETWEEN 0 AND 100),
    capacidad_total      DECIMAL(10, 2) NOT NULL,
    porcentaje_restante  DECIMAL(10, 2) NOT NULL DEFAULT 100 CHECK (porcentaje_restante BETWEEN 0 AND 100),
    accion               VARCHAR(12) NOT NULL DEFAULT 'esperando'
                         CHECK (accion IN ('esperando', 'en ruta', 'regresando')),
    ocupado              BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE conductor (
    id_conductor INT PRIMARY KEY REFERENCES usuario (id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    id_camion    INT REFERENCES camion (id_camion) ON DELETE SET NULL ON UPDATE CASCADE
);

-- Punto de partida y retorno de los camiones (el nodo 'X' del prototipo original).
CREATE TABLE deposito (
    n_nodo     VARCHAR(12) PRIMARY KEY,
    nombre     VARCHAR(80) NOT NULL,
    posicion_x DECIMAL(20, 7) NOT NULL,
    posicion_y DECIMAL(20, 7) NOT NULL
);

-- n_nodo es el id del nodo de OpenStreetMap donde está el contenedor.
-- posicion_x = longitud, posicion_y = latitud. capacidad = nivel de llenado (0-100).
CREATE TABLE contenedor (
    n_nodo     VARCHAR(12) PRIMARY KEY,
    posicion_x DECIMAL(20, 7) NOT NULL,
    posicion_y DECIMAL(20, 7) NOT NULL,
    activo     BOOLEAN NOT NULL DEFAULT TRUE,
    sector     SMALLINT NOT NULL CHECK (sector BETWEEN 1 AND 4),
    capacidad  INT NOT NULL DEFAULT 0 CHECK (capacidad BETWEEN 0 AND 100)
);

-- Matriz de distancia (m) y tiempo (min) por calles entre nodos de un mismo sector.
-- Un par sin fila significa "sin conexión" (antes se marcaba con 1000000000.00).
CREATE TABLE tiempos (
    id_tiempo      SERIAL PRIMARY KEY,
    n_nodo_origen  VARCHAR(12) NOT NULL,
    n_nodo_destino VARCHAR(12) NOT NULL,
    tiempo         DECIMAL(12, 4) NOT NULL,
    distancia      DECIMAL(12, 4) NOT NULL,
    UNIQUE (n_nodo_origen, n_nodo_destino)
);
CREATE INDEX idx_tiempos_origen ON tiempos (n_nodo_origen);

CREATE TABLE ruta (
    id             SERIAL PRIMARY KEY,
    puntos         JSONB NOT NULL,
    camion_id      INT REFERENCES camion (id_camion) ON DELETE SET NULL,
    sector         SMALLINT NOT NULL,
    activo         BOOLEAN NOT NULL DEFAULT TRUE,
    orden          INT NOT NULL DEFAULT 0,
    geometria      JSONB NOT NULL,  -- reemplaza al HTML de Folium (columna `mapa`)
    distancia      DECIMAL(20, 7) NOT NULL,
    tiempo         DECIMAL(20, 7) NOT NULL,
    fecha_creacion TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_ruta_sector ON ruta (sector, id DESC);

-- Triggers originales: asignación automática entre conductores y camiones.

CREATE FUNCTION asignar_camion_a_conductor() RETURNS trigger AS $$
DECLARE
    camion_disponible INT;
BEGIN
    IF NEW.rol = 'conductor' THEN
        SELECT id_camion INTO camion_disponible
        FROM camion WHERE ocupado = FALSE ORDER BY id_camion LIMIT 1;

        INSERT INTO conductor (id_conductor, id_camion) VALUES (NEW.id_usuario, camion_disponible);

        IF camion_disponible IS NOT NULL THEN
            UPDATE camion SET ocupado = TRUE WHERE id_camion = camion_disponible;
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_asignar_camion_a_conductor
AFTER INSERT ON usuario
FOR EACH ROW EXECUTE FUNCTION asignar_camion_a_conductor();

CREATE FUNCTION asignar_conductor_a_camion() RETURNS trigger AS $$
DECLARE
    conductor_sin_camion INT;
BEGIN
    IF NEW.ocupado = FALSE THEN
        SELECT id_conductor INTO conductor_sin_camion
        FROM conductor WHERE id_camion IS NULL ORDER BY id_conductor LIMIT 1;

        IF conductor_sin_camion IS NOT NULL THEN
            UPDATE conductor SET id_camion = NEW.id_camion WHERE id_conductor = conductor_sin_camion;
            UPDATE camion SET ocupado = TRUE WHERE id_camion = NEW.id_camion;
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_asignar_conductor_a_camion
AFTER INSERT OR UPDATE OF ocupado ON camion
FOR EACH ROW EXECUTE FUNCTION asignar_conductor_a_camion();
