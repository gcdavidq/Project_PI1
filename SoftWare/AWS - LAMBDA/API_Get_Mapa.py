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

    # Intentar parsear el JSON del body
    try:
        body = json.loads(event['body'])
        print(f"Parsed body: {body}")  # Agrega esto para verificar
        sector_seleccionado = body.get('sector')
        print(f"Sector seleccionado: {sector_seleccionado}")  # Agrega esto para verificar
        if not sector_seleccionado:
            return {
                "statusCode": 400,
                "body": json.dumps({"error": "Falta el parámetro 'sector'"})
            }
    except Exception as e:
        return {
            "statusCode": 400,
            "body": json.dumps({"error": "Entrada inválida", "details": str(e)})
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
            query = """
                SELECT mapa, distancia, tiempo
                FROM ruta 
                WHERE sector = %s AND orden=0
                ORDER BY ID DESC LIMIT 1
            """
            cursor.execute(query, (sector_seleccionado,))
            result = cursor.fetchone()

            if result:
                return {
                    "statusCode": 200,
                    "headers": {
                        "Access-Control-Allow-Origin": "https://main.dzqrdnigpsa6z.amplifyapp.com",
                        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                        "Access-Control-Allow-Headers": "Content-Type, Authorization"
                    },
                    "body": json.dumps({"mapa_html": result[0], "distancia": float(result[1]), "tiempo": float(result[2])}, ensure_ascii=False)
                }
            else:
                return {
                    "statusCode": 404,
                    "body": json.dumps({"error": "No se encontraron datos para el sector seleccionado"})
                }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "Error interno del servidor", "details": str(e)})
        }
    finally:
        conexion.close()
