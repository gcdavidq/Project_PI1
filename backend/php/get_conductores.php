<?php
    header("Access-Control-Allow-Origin: http://localhost:3000"); // Permite solicitudes desde este origen
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Métodos permitidos
    header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
    header("Access-Control-Allow-Credentials: true"); 
    header('Content-Type: application/json'); 

    session_start();
    include("database.php");
    $connDB = getDBConnection();

    try {
        // Preparar y ejecutar la consulta , camion
        $stmt = $connDB->prepare("SELECT usuario.id_usuario,CONCAT(usuario.nombre, ' ', usuario.apellido) AS nombre_completo, usuario.dni, usuario.celular, camion.placa FROM usuario JOIN conductor ON usuario.id_usuario = conductor.id_conductor JOIN camion ON conductor.id_camion=camion.id_camion WHERE usuario.rol='conductor'");
        $stmt->execute();

        // Obtener los resultados
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($data);
    } catch (PDOException $e) {
        echo json_encode(["error" => "Error en la consulta: " . $e->getMessage()]);
    }
    $connDB = null;
?>