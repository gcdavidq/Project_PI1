import pymysql
import json

def lambda_handler(event, context):
    # Configuración de la conexión a la base de datos
    connection = pymysql.connect(
        host='junction.proxy.rlwy.net',
        user='root',
        password='GUGPuaDajYUZbtXKVvqgtmeWIeRrYuwM',
        database='EcoRoutex',
        port=42752,
        connect_timeout=10000
    )

    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            # Consulta SQL para obtener datos de conductores
            sql_query = """
                SELECT u.id_usuario, 
                       CONCAT(u.nombre, ' ', u.apellido) AS nombre_completo, 
                       u.dni, u.celular, c.placa 
                FROM usuario AS u JOIN conductor AS co ON u.id_usuario=co.id_conductor
                JOIN camion AS c ON co.id_camion=c.id_camion
                WHERE u.rol = 'conductor'
            """
            cursor.execute(sql_query)
            # Obtener resultados
            results = cursor.fetchall()
            return {
                "statusCode": 200,
                "headers": {
                    "Access-Control-Allow-Origin": "https://main.dzqrdnigpsa6z.amplifyapp.com",
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization"
                },
                "body": json.dumps(results)
            }
    except pymysql.MySQLError as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": f"Error en la consulta: {str(e)}"})
        }
    finally:
        connection.close()
