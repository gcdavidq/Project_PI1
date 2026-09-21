# Código original (2024)

Aquí se conserva, tal como se entregó en el curso, la primera versión de EcoRouteX. **No se ejecuta**: dependía de infraestructura de AWS y de una base de datos MySQL que ya no existen. La versión funcional está en [`/backend`](../../backend) y [`/frontend`](../../frontend).

| Carpeta | Contenido |
|---|---|
| `AWS - LAMBDA/` | Las cuatro funciones Lambda: login, mapa por sector, lista de conductores y el motor de rutas (`Lambda_EcorouteX.py`). |
| `Codigo_Rutas/` | Notebook de Colab con el mismo motor conectado a la base de datos. |
| `HitoFinal-2.ipynb` | Primer prototipo: 9 nodos con matriz de distancias fija. |
| `Base_de_Datos/` | Modelo MySQL inicial (Workbench, SQL y diagrama). |

El único cambio respecto del original es que el host y la contraseña de la base de datos, que estaban escritos en el código, se reemplazaron por `<DB_HOST>` y `<DB_PASSWORD>`.

## Qué pasó con cada pieza

| Original | Ahora |
|---|---|
| `Lambda_EcorouteX.py` (algoritmo + BD + mapa en una función) | `backend/ecoroutex/algoritmo.py` (heurística), `backend/ecoroutex/grafo.py` (Dijkstra y geometría), `backend/app/servicio_rutas.py` (BD) |
| `API_Login.py` (contraseña en texto plano) | `backend/app/routers/auth.py` (bcrypt + JWT) |
| `API_Get_Mapa.py`, `API_Get_Conductores.py` | `backend/app/routers/rutas.py`, `conductores.py` |
| Mapa Folium guardado como HTML en `ruta.mapa` | Geometría JSON en `ruta.geometria`, dibujada con Leaflet en React |
| `pdi1.sql` (MySQL) | `backend/sql/schema.sql` (PostgreSQL, con las tablas `ruta`, `tiempos` y `deposito`) |
