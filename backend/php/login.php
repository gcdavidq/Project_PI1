<?php
    ini_set('display_errors', 0);
    ini_set('log_errors', 1);
    error_reporting(E_ALL);

    if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        // Responde a la solicitud OPTIONS
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        header("Access-Control-Allow-Credentials: true");
        exit;  // Termina la ejecución, ya que no se necesita hacer más nada para OPTIONS
    }

    header("Access-Control-Allow-Origin: http://localhost:3000"); // Permite solicitudes desde este origen
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Métodos permitidos
    header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
    header("Access-Control-Allow-Credentials: true"); 

    header('Content-Type: application/json');
    session_start();
    include("database.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = json_decode(file_get_contents("php://input"));
        if (!$data || !isset($data->user, $data->dni, $data->password)) {
            echo json_encode(['error' => 'Datos inválidos o incompletos']);
            exit;
        }
        $user = $data->user;
        $dni = $data->dni;
        $password = $data->password;
        
        // Obtiene la conexión
        $connDB = getDBConnection();

        if ($connDB){
            // Consulta para verificar usuario y contraseña
            $sql = "SELECT * FROM usuario WHERE rol = :user AND dni = :dni AND password = :password";
            $stmt = $connDB->prepare($sql);
            $stmt->bindParam(":user", $user);
            $stmt->bindParam(":dni", $dni);
            $stmt->bindParam(":password", $password);

            try{
                $stmt->execute();
                if ($stmt->rowCount() > 0) {
                    echo json_encode(['success' => true]);
                } else {
                    echo json_encode(['error' => 'Usuario o password incorrectos.']);
                }
            }catch (PDOException $e) {
                error_log("Error de PDO: " . $e->getMessage()); // Depurar errores de PDO
                echo json_encode(['error' => 'Error al ejecutar la consulta.']);
            }
        }else{
            echo json_encode(['error' => 'Error en la conexión a la base de datos.']);
        }
    }
    ?>