#Extraemos las librerias de EFS
import sys
sys.path.append("/mnt/efs/python/env/lib/python3.12/site-packages")

import json
import pymysql
import pandas as pd
import os
import folium
import networkx as nx
import osmnx as ox
import logging
import boto3
import tempfile
from shapely import wkt

#Libreria para llamar al cliente Lambda
import boto3

# Inicializa el cliente de Lambda
cliente_lambda = boto3.client('lambda')

# Función para deserializar el grafo
def deserialize_graph(graph_json):
    """Reconstruir un grafo a partir del formato JSON."""
    graph = nx.node_link_graph(graph_json)
    
    # Convertir las geometrías WKT de vuelta a objetos Shapely
    for u, v, data in graph.edges(data=True):
        if 'geometry' in data and data['geometry'] is not None:
            data['geometry'] = wkt.loads(data['geometry'])  # Convertir WKT a objeto LineString
    
    return graph

def lambda_handler(event, context):
    
# Invocar la primera Lambda para obtener los nodos seleccionados
    try:
        response = cliente_lambda.invoke(
            FunctionName='MyReadEFSFunction',  # Cambia esto al nombre de tu primera Lambda
            InvocationType='RequestResponse',  # 'RequestResponse' para invocación sincrónica
            Payload=json.dumps(event)  # Pasar el evento recibido a la primera Lambda
        )
        
        # Leer la respuesta de la primera función
        result = json.loads(response['Payload'].read().decode('utf-8'))
        
        # Verificar si la respuesta contiene la clave 'body' y el grafo
        if 'body' not in result:
            return {
                'statusCode': 700,
                'body': json.dumps({
                    'error': 'No graph data in response body'
                })
            }
        
        # Parsear el cuerpo de la respuesta para extraer el grafo
        graph_json_string = json.loads(result['body']).get('graph', None)
        
        if graph_json_string is None:
            return {
                'statusCode': 400,
                'body': json.dumps({
                    'error': 'No graph data provided'
                })
            }

        # Convertir el JSON string a objeto Python
        graph_json = json.loads(graph_json_string)
        
        # Deserializar el grafo
        sb = deserialize_graph(graph_json)
    finally:
        print("Se ejecuta siempre")

    
    #probable problema arriba
    

    def subir_mapa(m, recorrido, sector, distancia_total, tiempo_total):
        # Conexión a la base de datos
        conexion = pymysql.connect(
                host='junction.proxy.rlwy.net',
                user='root',
                password='GUGPuaDajYUZbtXKVvqgtmeWIeRrYuwM',
                database='EcoRoutex',
                port=42752,
                connect_timeout=10000
        )

        cursor = conexion.cursor()

        # Obtener el ID de un camión en espera
        query_camion = "SELECT id_camion FROM camion WHERE accion = 'Esperando' LIMIT 1"
        cursor.execute(query_camion)
        camion_id = cursor.fetchone()[0]  # Obtiene el primer camión en estado 'Esperando'

        # Convertir el mapa a HTML
        # Convertir el mapa a HTML
        # Guardar el mapa como archivo HTML
        m.save("/mnt/efs/mapa.html")

        # Leer el contenido del archivo HTML
        with open("/mnt/efs/mapa.html", "r") as file:
            mapa_html = file.read()
          # Representación HTML del mapa para el JSON

        # Insertar en la tabla ruta
        query_insert = """
        INSERT INTO ruta (puntos, camion_id, sector, activo, mapa, distancia, tiempo)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        """
        valores = (json.dumps(recorrido), camion_id, str(sector), 1, mapa_html, round(distancia_total, 4), round(tiempo_total, 4))

        cursor.execute(query_insert, valores)
        conexion.commit()

        # Cerrar la conexión
        cursor.close()
        conexion.close()
    

    # Función para obtener las coordenadas de un nodo en el grafo de OSMnx
    def obtener_coordenadas_de_nodo(G, nodo_id):
        """
        Dada una ID de nodo de OpenStreetMap, obtiene las coordenadas geográficas más cercanas en el grafo de OSMnx.
        """
        coords = ox.graph_to_gdfs(G, nodes=True, edges=False).loc[nodo_id, ['y', 'x']]  # 'y' es lat, 'x' es lon
        return coords['y'], coords['x']

    # Paso 2: Obtener las coordenadas de los nodos del recorrido
    def mapa(recorrido, sector, distancia_total, tiempo_total):
        nodos_con_coordenadas = {}
        for nodo in recorrido:
            try:
                lat, lon = obtener_coordenadas_de_nodo(sb, nodo)
                nodos_con_coordenadas[nodo] = (lat, lon)
            except KeyError:
                print(f"Nodo {nodo} no encontrado en el grafo de OSMnx.")

        # Paso 4: Encontrar los nodos más cercanos en el grafo a las coordenadas dadas
        def obtener_nodo_mas_cercano(G, lat, lon):
            """
            Dado un par de coordenadas (lat, lon), devuelve el ID del nodo más cercano en el grafo de OSMnx.
            """
            node = ox.distance.nearest_nodes(G, X=lon, Y=lat)  # 'X' es longitud, 'Y' es latitud
            return node

        # Paso 5: Calcular la ruta más corta entre los nodos seleccionados
        rutas = []
        for i in range(len(nodos_con_coordenadas)-1):
            nodo_origen = nodos_con_coordenadas[recorrido[i]]
            nodo_destino = nodos_con_coordenadas[recorrido[i+1]]

            origen_id = obtener_nodo_mas_cercano(sb, nodo_origen[0], nodo_origen[1])
            destino_id = obtener_nodo_mas_cercano(sb, nodo_destino[0], nodo_destino[1])

            try:
                # Intentamos calcular la ruta más corta usando NetworkX
                route = nx.shortest_path(sb, source=origen_id, target=destino_id, weight='length')
                rutas.append(route)
            except nx.NetworkXNoPath:
                # Si no hay ruta entre los nodos, imprimimos un mensaje y continuamos con el siguiente par de nodos
                print(f"No se encontró una ruta entre el nodo {recorrido[i]} y el nodo {recorrido[i+1]}. Intentando con el siguiente par de nodos.")
                continue  # Continúa con el siguiente par de nodos

        # Paso 6: Crear un mapa interactivo con Folium para visualizar la ruta
        m = folium.Map(location=[-12.09755, -76.99521], zoom_start=13)

        # Paso 7: Visualizar las rutas calculadas en el mapa
        for route in rutas:
            # Convertir la ruta de nodos a coordenadas
            route_coords = [(sb.nodes[node]['y'], sb.nodes[node]['x']) for node in route]

            # Crear una línea de la ruta
            folium.PolyLine(route_coords, color="blue", weight=4).add_to(m)

        # Paso 8: Resaltar los nodos del recorrido con marcadores y círculos
        for nodo, coords in nodos_con_coordenadas.items():
            lat, lon = coords

            # Colocar un marcador con un color personalizado para los nodos del recorrido
            folium.Marker(
                location=[lat, lon],
                popup=f"Nodo ID: {nodo}",
                icon=folium.Icon(color='red', icon='info-sign')  # Puedes cambiar el icono o color
            ).add_to(m)

            # Añadir un círculo alrededor de los nodos para hacerlos más visibles
            folium.Circle(
                location=[lat, lon],
                radius=50,  # Tamaño del círculo
                color='red',
                fill=True,
                fill_color='red'
            ).add_to(m)
        subir_mapa(m, recorrido, sector, distancia_total, tiempo_total)
    

    def obtener_datos_contenedor_activo_sector(sector_determinado):
        # Conexión a la base de datos
        connection = pymysql.connect(
            host='junction.proxy.rlwy.net',
            user='root',
            password='GUGPuaDajYUZbtXKVvqgtmeWIeRrYuwM',
            database='EcoRoutex',
            port=42752,
            connect_timeout=10000
        )

        try:
            with connection.cursor() as cursor:
                # Realizar la consulta SQL con las condiciones para activo y sector
                sql_select = "SELECT * FROM contenedor WHERE activo = '1' AND sector = %s"

                cursor.execute(sql_select, (sector_determinado,))

                # Obtener todos los resultados
                resultados = cursor.fetchall()

                # Obtener los nombres de las columnas
                columnas = [desc[0] for desc in cursor.description]

                # Convertir los resultados a un DataFrame de pandas
                df_contenedor = pd.DataFrame(resultados, columns=columnas)

            with connection.cursor() as cursor:
                # Consulta SQL para seleccionar solo las filas donde N_nodo_origen pertenece al sector
                # Aquí asumimos que existe una relación entre N_nodo_origen y el sector
                sql_select = """
                    SELECT *
                    FROM tiempos
                    WHERE N_nodo_origen IN (
                        SELECT N_nodo
                        FROM contenedor
                        WHERE sector = %s AND activo = '1'
                    )
                """
                cursor.execute(sql_select, (sector_determinado,))

                # Obtener todos los resultados
                resultados = cursor.fetchall()

                # Obtener los nombres de las columnas
                columnas = [desc[0] for desc in cursor.description]

                # Convertir los resultados a un DataFrame de pandas
                df_tiempos = pd.DataFrame(resultados, columns=columnas)

            return (df_contenedor, df_tiempos)

        except pymysql.MySQLError as e:
            print(f"Error al realizar la consulta: {e}")
            return None

        finally:
            connection.close()

    def crear_diccionario_distancias_tiempos(datos_unidos_df):
        distancias_tiempos = {}
        for _, row in datos_unidos_df.iterrows():
            origen = row['N_nodo_origen']
            destino = row['N_nodo_destino']
            distancia = float(row['distancia'])
            tiempo = float(row['tiempo'])
            if origen not in distancias_tiempos:
                distancias_tiempos[origen] = {}
            distancias_tiempos[origen][destino] = {'distancia': distancia, 'tiempo': tiempo}
        return distancias_tiempos

    def normalizar(valor, max_valor, min_valor):
        if max_valor == min_valor:
            return 0
        return (valor - min_valor) / (max_valor - min_valor)

    def seleccionar_siguiente_nodo(nodo_actual, distancias_tiempos, capacidades, visitados, capacidad_restante):
        candidatos = []
        max_capacidad = max(capacidades.values())
        min_capacidad = min(capacidades.values())
        print(f"\nAnalizando opciones desde el nodo {nodo_actual}...")

        # Filtrar valores válidos (diferentes de 1000000000.00) para normalización
        valores_distancia = [d['distancia'] for d in distancias_tiempos[nodo_actual].values()
                            if d['distancia'] != 1000000000.00]
        valores_tiempo = [d['tiempo'] for d in distancias_tiempos[nodo_actual].values()
                        if d['tiempo'] != 1000000000.00]

        # Si no hay valores válidos, usar valores por defecto
        if not valores_distancia or not valores_tiempo:
            print("  No hay conexiones válidas desde este nodo.")
            return None, 0, 0, 0

        max_distancia = max(valores_distancia)
        min_distancia = min(valores_distancia)
        max_tiempo = max(valores_tiempo)
        min_tiempo = min(valores_tiempo)

        for nodo_destino, datos in distancias_tiempos[nodo_actual].items():
            distancia = datos['distancia']
            tiempo = datos['tiempo']

            # Saltar nodos con valores de 1000000000.00
            if (distancia == 1000000000.00 or tiempo == 1000000000.00 or
                nodo_destino in visitados or nodo_destino == nodo_actual or
                capacidades[nodo_destino] <= 0):
                continue

            distancia_normalizada = normalizar(distancia, max_distancia, min_distancia)
            tiempo_normalizado = normalizar(tiempo, max_tiempo, min_tiempo)
            capacidad_normalizada = normalizar(capacidades[nodo_destino], max_capacidad, min_capacidad)

            prioridad = (0.3 * capacidad_normalizada) + (0.5 * (1 - distancia_normalizada)) + (0.2 * (1 - tiempo_normalizado))
            print(f"  Considerando nodo {nodo_destino} con capacidad {capacidades[nodo_destino]}, "
                f"distancia {distancia:.2f} metros y tiempo {tiempo:.2f} minutos. Prioridad: {prioridad:.3f}")

            if capacidades[nodo_destino] <= capacidad_restante:
                candidatos.append((prioridad, nodo_destino, distancia, tiempo))

        if candidatos:
            candidatos.sort(reverse=True, key=lambda x: x[0])
            mejor_opcion = candidatos[0]
            print(f"  Seleccionado nodo {mejor_opcion[1]} con prioridad {mejor_opcion[0]:.2f}, "
                f"capacidad {capacidades[mejor_opcion[1]]}, distancia {mejor_opcion[2]:.2f} metros "
                f"y tiempo {mejor_opcion[3]:.2f} minutos.")
            return mejor_opcion[1], capacidades[mejor_opcion[1]], mejor_opcion[2], mejor_opcion[3]

        print("  No hay más nodos disponibles para visitar o todos exceden la capacidad restante del camión.")
        return None, 0, 0, 0

    def recorrido_priorizado(sector):
        df_resultados, datos_unidos_df = obtener_datos_contenedor_activo_sector(sector)
        capacidades_nodos = dict(zip(df_resultados['N_nodo'], df_resultados['capacidad']))
        distancias_tiempos = crear_diccionario_distancias_tiempos(datos_unidos_df)
        nodos_sector = datos_unidos_df['N_nodo_origen'].unique()
        capacidades = {nodo: capacidades_nodos[nodo] for nodo in nodos_sector if nodo in capacidades_nodos}
        nodo_inicial = list(capacidades.keys())[0]
        nodo_actual = nodo_inicial
        visitados = set([nodo_actual])
        recorrido = [int(nodo_actual)]
        capacidad_restante = 10000
        distancia_total = 0
        tiempo_total = 0
        print(f"Iniciando en el nodo {nodo_actual}. Capacidad restante: {capacidad_restante}")

        while True:
            siguiente_nodo, capacidad_nodo, distancia, tiempo = seleccionar_siguiente_nodo(
                nodo_actual, distancias_tiempos, capacidades, visitados, capacidad_restante)

            if siguiente_nodo is None:
                print("No hay más nodos disponibles para visitar o todos exceden la capacidad restante del camión. "
                    "Finalizando recorrido.")
                break

            visitados.add(siguiente_nodo)
            recorrido.append(int(siguiente_nodo))
    
            capacidad_restante -= capacidad_nodo
            distancia_total += distancia
            tiempo_total += tiempo


            print(f"Moviéndose al nodo {siguiente_nodo} con capacidad {capacidades[siguiente_nodo]}. "
                f"Capacidad restante: {capacidad_restante}. Distancia total: {distancia_total:.2f} metros. "
                f"Tiempo total: {tiempo_total:.2f} minutos.")
            # Preguntar al usuario si desea continuar
            nodo_actual = siguiente_nodo

            mapa(recorrido, sector, distancia_total, tiempo_total)
            recorrido.pop(0)

            if capacidad_restante <= 0:
                print("El camión ha alcanzado su capacidad máxima. Finalizando recorrido.")
                break

        if nodo_actual != nodo_inicial:
            # Verificar si existe una conexión válida de regreso
            if (distancias_tiempos[nodo_actual][nodo_inicial]['distancia'] != 1000000000.00 and
                distancias_tiempos[nodo_actual][nodo_inicial]['tiempo'] != 1000000000.00):
                distancia_de_regreso = distancias_tiempos[nodo_actual][nodo_inicial]['distancia']
                tiempo_de_regreso = distancias_tiempos[nodo_actual][nodo_inicial]['tiempo']
                distancia_total += distancia_de_regreso
                tiempo_total += tiempo_de_regreso
                recorrido.append(int(nodo_inicial))
                print(f"Regresando al nodo {nodo_inicial} desde el nodo {nodo_actual}. "
                    f"Distancia de regreso: {distancia_de_regreso:.2f} metros. "
                    f"Tiempo de regreso: {tiempo_de_regreso:.2f} minutos.")
            else:
                print(f"No existe una conexión válida para regresar al nodo inicial {nodo_inicial} "
                    f"desde el nodo {nodo_actual}.")

        print(f"\nRecorrido completo: {recorrido}")
        print(f"Distancia total recorrida: {distancia_total:.2f} metros")
        print(f"Tiempo total: {tiempo_total:.2f} minutos")
        

    # Solicitar el sector para filtrar los nodos
    for sector in range(1,5):
        recorrido_priorizado(sector)


    # Retornar la respuesta para la siguiente Lambda (o para el cliente)
    return {
        'statusCode': 200,
        'body': json.dumps({
            'sector_id': "hecho"
        })
    }