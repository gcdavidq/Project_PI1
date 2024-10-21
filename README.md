# UNIVERSIDAD PERUANA CAYETANO HEREDIA

# PROYECTOS DE INIGENIERIA 1
Repositorio grupal para el curso de Proyectos de Ingeniería 1

## INTEGRANTES: 
- Arquiño Cerna, Noemi Salomina
- Aybar Escobar, Edithson Ricardo
- Colla Cervantes, Marelly Massiel
- Quezada Marceliano, Gian Carlos
- Salazar Cobian, Arny Eliu

# INTRODUCCIÓN

En este repositorio se subirán los trabajos que se iran encargando para el fin de este curso.

La ausencia de rutas óptimas para la recolección de basura es un desafío crucial en la gestión de residuos en el Perú, lo cual compromete la eficiencia del sistema y contribuye al deterioro del entorno urbano. Por ello presentaremos una posible solución que de fin a esta problemática.

### TRL-1: Matemáticas Discretas y Algoritmos de Búsqueda de Caminos Más Cortos (Dijkstra)

#### Grafos Simples

En la **matemática discreta**, un **grafo simple** \(G\) es un par de conjuntos \((V, E)\), donde:
- **V** es un conjunto no vacío de **vértices** (nodos).
- **E** es el conjunto de **aristas** (o lados), que son pares no ordenados \(\{v1, v2\}\) de vértices.

Se denota como \(G = (V, E)\). Por ejemplo, si tenemos los siguientes conjuntos:
- **V = {1, 2, 3, 4}**
- **E = {{1, 2}, {1, 3}, {2, 3}, {2, 4}, {3, 4}}**

Este grafo tiene **4 vértices** y **5 aristas**, lo que significa que es un grafo de **orden 4** y **tamaño 5**. Gráficamente, los vértices se representan como puntos y las aristas como líneas que conectan esos puntos.

#### Grafos Dirigidos

En un **grafo dirigido ponderado** \(G = (V, E, w)\):
- **V** es un conjunto no vacío de **vértices** (nodos).
- **E** es un conjunto de **arcos**, donde cada arco es una dupla ordenada \((vi, vj)\), lo que indica que el arco va desde \(vi\) hacia \(vj\).
- **w** es una función de peso que asigna un número real no negativo \(w(vi, vj)\) a cada arco en \(E\).

Por ejemplo:
- **V = {x, y, v, w}**
- **E = {(v, w), (w, y), (y, x), (x, v)}**

En un **dígrafo** (grafo dirigido), los arcos tienen una dirección, a diferencia de los grafos simples donde las aristas no están dirigidas.

#### Algoritmos de Búsqueda de Caminos Más Cortos (Dijkstra)

El **Algoritmo de Dijkstra** se define como un conjunto de pasos que resuelve el problema de encontrar la **ruta más corta** en grafos ponderados donde no existen pesos negativos. El proceso incluye:

1. Un conjunto \(S\) de nodos cuya distancia más corta desde el nodo de origen ya está determinada.
2. \(S\) inicialmente contiene solo el nodo de origen.
3. El algoritmo itera agregando nodos cuya distancia desde el origen es la más corta posible.
4. Se utiliza un **arreglo [D]** para almacenar la longitud del camino más corto a cada nodo.
5. Cuando \(S\) incluye todos los nodos, el arreglo **[D]** contiene las distancias más cortas.
6. Un **arreglo [P]** almacena la trayectoria más corta entre nodos.

Este proceso se repite hasta que se encuentran las rutas más cortas para todos los nodos.

---

### Sistemas de Coordenadas

Los sistemas de coordenadas, esenciales para la **optimización de rutas**, se definen de la siguiente manera:

1. **Coordenadas Geográficas**: Utilizan una superficie tridimensional esférica determinada por dos ángulos, la **latitud** y la **longitud**, para posicionar puntos en la Tierra.
   
2. **Coordenadas Cartesianas**: Utilizan un sistema tridimensional **(x, y, z)**, donde el eje \(z\) pasa por el centro de la Tierra y los polos, y el eje \(x\) pasa por el meridiano de Greenwich.

Ambos sistemas son fundamentales para ubicar con precisión los puntos en aplicaciones geoespaciales.

---

### Protocolo de Comunicación

Los **protocolos de comunicación** facilitan la transmisión de datos en un sistema de optimización de rutas en tiempo real. Los más relevantes son:

- **HTTP/HTTPS**: Utilizado para la comunicación cliente-servidor, garantizando seguridad mediante HTTPS.
- **WebSocket**: Permite mantener una conexión en tiempo real entre el cliente y el servidor.
- **MQTT**: Protocolo ligero ideal para sistemas de bajo consumo, común en aplicaciones de **IoT**.
