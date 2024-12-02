import json
import pymysql

def lambda_handler(event, context):
    # Verifica si la solicitud es OPTIONS
    if event['httpMethod'] == 'OPTIONS':
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "https://main.dzqrdnigpsa6z.amplifyapp.com",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            },
            "body": ""  # Cuerpo vacío para OPTIONS
        }
    # Validar si 'body' existe en el evento
    if 'body' not in event:
        return {
            "statusCode": 400,
            "body": json.dumps({"error": "Entrada inválida: falta el campo 'body'"})
        }
        
    try:
        # Extraer datos del cuerpo de la solicitud
        body = json.loads(event['body'])
        user = body.get("user")
        dni = body.get("dni")
        password = body.get("password")

        # Validar que se reciban todos los datos necesarios
        if not all([user, dni, password]):
            return {
                "statusCode": 400,
                "body": json.dumps({"message": "Faltan datos requeridos: user, dni, password."})
            }

        # Conexión a la base de datos
        conexion = pymysql.connect(
            host='junction.proxy.rlwy.net',
            user='root',
            password='GUGPuaDajYUZbtXKVvqgtmeWIeRrYuwM',
            database='EcoRoutex',
            port=42752,
            connect_timeout=10
        )

        try:
            with conexion.cursor() as cursor:
                # Consulta para verificar usuario y contraseña
                sql = """
                    SELECT * 
                    FROM usuario 
                    WHERE rol = %s AND dni = %s AND password = %s
                """
                cursor.execute(sql, (user, dni, password))
                resultado = cursor.fetchone()

                if resultado:
                    return {
                        "statusCode": 200,
                        "headers": {
                            "Access-Control-Allow-Origin": "https://main.dzqrdnigpsa6z.amplifyapp.com",
                            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                            "Access-Control-Allow-Headers": "Content-Type, Authorization"
                        },
                        "body": json.dumps({"success": True,  "message": "Usuario autenticado exitosamente."})
                    }
                else:
                    return {
                        "statusCode": 401,
                        "body": json.dumps({"message": "Credenciales incorrectas."})
                    }
        finally:
            conexion.close()

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"message": f"Error interno: {str(e)}"})
        }
