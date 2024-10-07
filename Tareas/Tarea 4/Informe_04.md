# Lista de requerimientos
| **Categoría**               | **Requerimientos adaptados al proyecto de recolección de basura**                                                     |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------|
| **Integración**              | El sistema debe integrarse con al menos 3 tecnologías: GPS, sensores de llenado y mapas. La actualización de los datos debe ocurrir en tiempo real, al menos cada 5 minutos. |
| **Interfaces**               | Deben existir 2 interfaces principales: una para los operadores (administración) y otra para los conductores de camiones. Ambas deben ser 100% compatibles con dispositivos móviles. |
| **Actualizaciones**          | El software debe recibir actualizaciones remotas al menos una vez al mes. Las actualizaciones deben realizarse en una ventana de mantenimiento que no dure más de 2 horas. |
| **Hardware**                 | Los dispositivos que optimizan las rutas y leen los sensores deben tener procesadores de al menos 4 núcleos y los sensores de llenado deben ser precisos, con un margen de error del ±5%. |
| **Testabilidad**             | Se deben hacer al menos 2 pruebas al mes usando un “gemelo digital” (una simulación) para probar la eficiencia de las rutas sin necesidad de implementarlas en la vida real. |
| **Modos de operación**       | El sistema debe tener 3 modos de operación: emergencia (responde en menos de 15 minutos), automático (ajusta las rutas en tiempo real) y personalizado (usa rutas predefinidas). |
| **Entorno de desarrollo**    | El desarrollo debe seguir un enfoque ágil con sprints, y cumplir con al menos el 80% de los estándares GIS y de manejo de datos en tiempo real. |
| **Versionado**               | Se debe registrar una nueva versión del software cada vez que se hagan cambios importantes, con descripciones claras de al menos el 90% de los cambios realizados. |
| **Selección de lenguajes**   | El software debe estar programado en al menos dos lenguajes: uno principal para el backend (por ejemplo, Python o Java) y otro para las interfaces de usuario (JavaScript). |
| **Documentación**            | El 100% del código debe estar bien documentado según los estándares del proyecto, con especial atención a los algoritmos de optimización de rutas y la integración con los sensores. |
| **Archivado de documentos**  | Toda la documentación debe almacenarse de forma organizada en una base de datos accesible. Las consultas a esta base deben responder en menos de 5 segundos. |
| **Mantenibilidad del código**| El código debe ser lo suficientemente flexible como para permitir la adición de nuevas áreas o tecnologías, con un tiempo de implementación de menos de una semana por cada cambio. |
| **Requisitos de tiempo real**| El sistema debe ajustar las rutas en tiempo real con una latencia máxima de 30 segundos cuando reciba alertas de llenado de contenedores o congestión. |
| **Planificación**            | Los desarrollos deben organizarse en sprints de 2 semanas, con una meta de completar al menos el 90% de las tareas planeadas en cada sprint. |


## **Diseño del Algoritmo - Pseudocódigo**
El algoritmo presentado se basa en el cálculo de una ruta óptima para la recolección de residuos urbanos. Este utiliza datos en tiempo real obtenidos de Firebase, como los niveles de llenado de los contenedores de basura. A partir de estos datos, se selecciona el siguiente nodo (contenedor) basándose en una combinación de la distancia y el nivel de llenado, ambos normalizados.
El proceso comienza en un nodo inicial (representando la ubicación del camión) y el algoritmo selecciona los contenedores hasta que se llene la capacidad del camión. En cada paso, se selecciona el contenedor más prioritario, que combina distancia corta y nivel de llenado alto.

![image](https://github.com/user-attachments/assets/f0cc8c3c-2f17-4ff2-9876-d8976f5dd32c)
 
## **Diagrama Esquemático del Circuito**
  
En el desarrollo de este sistema basado en el ESP32, el circuito electrónico fue diseñado para captar y transmitir información de los sensores a través de Firebase, lo que permite monitorear el estado de los contenedores de basura en tiempo real. Como se observa en la Figura 4, el circuito está compuesto por un microcontrolador ESP32, potenciómetros que simulan sensores de llenado, y un regulador de voltaje LM2596 para garantizar una alimentación constante desde una batería de litio. Estos componentes están conectados para permitir la lectura de los niveles de llenado de los contenedores y transmitir esta información a la nube.

![image](https://github.com/user-attachments/assets/7262d04a-ec88-4238-b226-0a1cde65aca9)


