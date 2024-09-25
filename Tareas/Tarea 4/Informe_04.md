

- **Diseño del Algoritmo - Pseudocódigo**
El algoritmo presentado se basa en el cálculo de una ruta óptima para la recolección de residuos urbanos. Este utiliza datos en tiempo real obtenidos de Firebase, como los niveles de llenado de los contenedores de basura. A partir de estos datos, se selecciona el siguiente nodo (contenedor) basándose en una combinación de la distancia y el nivel de llenado, ambos normalizados.
El proceso comienza en un nodo inicial (representando la ubicación del camión) y el algoritmo selecciona los contenedores hasta que se llene la capacidad del camión. En cada paso, se selecciona el contenedor más prioritario, que combina distancia corta y nivel de llenado alto.

![image](https://github.com/user-attachments/assets/f0cc8c3c-2f17-4ff2-9876-d8976f5dd32c)
 
- **Diagrama Esquemático del Circuito**
En el desarrollo de este sistema basado en el ESP32, el circuito electrónico fue diseñado para captar y transmitir información de los sensores a través de Firebase, lo que permite monitorear el estado de los contenedores de basura en tiempo real. Como se observa en la Figura 4, el circuito está compuesto por un microcontrolador ESP32, potenciómetros que simulan sensores de llenado, y un regulador de voltaje LM2596 para garantizar una alimentación constante desde una batería de litio. Estos componentes están conectados para permitir la lectura de los niveles de llenado de los contenedores y transmitir esta información a la nube.

![image](https://github.com/user-attachments/assets/7262d04a-ec88-4238-b226-0a1cde65aca9)


