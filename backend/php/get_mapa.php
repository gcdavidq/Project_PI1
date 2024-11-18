<?php
    ini_set('display_errors', 0);
    ini_set('log_errors', 1);
    error_reporting(E_ALL);

    header("Access-Control-Allow-Origin: http://localhost:3000"); // Permite solicitudes desde este origen
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Métodos permitidos
    header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
    header("Access-Control-Allow-Credentials: true"); 
    header('Content-Type: application/json'); 

    // Manejar la solicitud OPTIONS (Preflight request)
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200); // Responder con HTTP 200 para la preflight
        exit;
    }

    $requestBody = file_get_contents('php://input');
    $data = json_decode($requestBody, true);
    
    // Asegurarse de que se recibió el sector
    if (isset($data['sector'])) {
        $sectorSeleccionado = $data['sector'];
        session_start();
        include("database.php");
        $connDB = getDBConnection();

        try {
            // Obtener el último mapa registrado
            $stmt = $connDB->prepare("SELECT mapa FROM ruta WHERE activo=$sectorSeleccionado ORDER BY ID DESC LIMIT 1");
            $stmt->execute();
    
            // Obtener solo la última fila
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
    
            // Enviar el resultado como JSON
            echo json_encode(["mapa_html" => $data['mapa']], JSON_UNESCAPED_SLASHES);
        } catch (PDOException $e) {
            // Enviar error en formato JSON
            echo json_encode(["error" => "Error en la consulta: " . $e->getMessage()]);
        }    

    } else {
        http_response_code(400);
    }

    // Cerrar conexión
    $connDB = null;
?>
