USE EcoRutex;

-- Tabla usuario
CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    dni VARCHAR(8) NOT NULL,  -- Clave única como DNI de 8 caracteres
    password VARCHAR(255) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    celular VARCHAR(15),  -- Campo opcional
    rol ENUM('administrador', 'trabajador') NOT NULL, -- Verificación de rol
    UNIQUE (dni)
);

-- Tabla camion
CREATE TABLE camion (
    id_camion INT PRIMARY KEY AUTO_INCREMENT,
    posicion_x DECIMAL(20, 7) NOT NULL,
    posicion_y DECIMAL(20, 7) NOT NULL,
    cantidad_combustible DECIMAL(10, 2) CHECK (cantidad_combustible BETWEEN 0 AND 100) NOT NULL,
    capacidad_restante DECIMAL(10, 2) CHECK (capacidad_restante BETWEEN 0 AND 100) NOT NULL,
    accion ENUM('esperando', 'en ruta', 'regresando') NOT NULL DEFAULT 'esperando',
    ocupado ENUM('si', 'no') NOT NULL DEFAULT 'no'
);

-- Tabla conductor con el cambio de id_camion a NULLABLE
CREATE TABLE conductor (
    id_conductor INT PRIMARY KEY,
    id_camion INT,  -- Eliminamos el NOT NULL
    FOREIGN KEY (id_conductor) REFERENCES usuario(id_usuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (id_camion) REFERENCES camion(id_camion)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);


-- Tabla contenedor
CREATE TABLE contenedor (
    id_contenedor INT PRIMARY KEY AUTO_INCREMENT,
    N_nodo VARCHAR(11) NOT NULL,
    posicion_x DECIMAL(20, 7) NOT NULL,
    posicion_y DECIMAL(20, 7) NOT NULL,
    porcentaje_lleno DECIMAL(5, 2) DEFAULT '0.00' CHECK (porcentaje_lleno BETWEEN 0 AND 100) NOT NULL,
    activo ENUM('0','1') NOT NULL DEFAULT '1'
);

-- Trigger for assigning a truck to a new worker if available
DELIMITER //
CREATE TRIGGER asignar_camion_a_trabajador
AFTER INSERT ON usuario
FOR EACH ROW
BEGIN
    IF NEW.rol = 'trabajador' THEN
        -- Variable to store available truck ID
        SET @camion_disponible = (SELECT id_camion 
                                  FROM camion 
                                  WHERE ocupado = 'no' 
                                  LIMIT 1);

        -- Insert new conductor with available truck ID if found
        IF @camion_disponible IS NOT NULL THEN
            INSERT INTO conductor (id_conductor, id_camion)
            VALUES (NEW.id_usuario, @camion_disponible);

            -- Mark the truck as occupied
            UPDATE camion SET ocupado = 'si' WHERE id_camion = @camion_disponible;
        ELSE
            INSERT INTO conductor (id_conductor, id_camion)
            VALUES (NEW.id_usuario, NULL);
        END IF;
    END IF;
END //
DELIMITER ;

-- Trigger for assigning the first truck to an unassigned driver when a truck becomes available
DELIMITER //
CREATE TRIGGER asignar_conductor_a_camion
AFTER UPDATE ON camion
FOR EACH ROW
BEGIN
    IF NEW.ocupado = 'no' THEN
        -- Variable to store ID of driver without a truck
        SET @conductor_sin_camion = (SELECT id_conductor 
                                     FROM conductor 
                                     WHERE id_camion IS NULL 
                                     LIMIT 1);

        -- Assign truck to driver if a driver without a truck is found
        IF @conductor_sin_camion IS NOT NULL THEN
            UPDATE conductor SET id_camion = NEW.id_camion WHERE id_conductor = @conductor_sin_camion;
            
            -- Mark the truck as occupied
            UPDATE camion SET ocupado = 'si' WHERE id_camion = NEW.id_camion;
        END IF;
    END IF;
END //
DELIMITER ;