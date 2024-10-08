# INFORME N°3 - TinyML  - PI1

## INTEGRANTES: 
- Arquiño Cerna, Noemi Salomina
- Aybar Escobar, Edithson Ricardo
- Colla Cervantes, Marelly Massiel 
- Quezada Marceliano, Gian Carlos
- Salazar Cobian, Arny Eliu

## Introducción
En el presente informe se aborda el concepto de TinyML, una tecnología emergente que permite ejecutar modelos de aprendizaje automático directamente en microcontroladores de bajo costo y consumo energético reducido, abriendo la puerta a nuevas aplicaciones en dispositivos con recursos limitados (ICTP, 2024). TinyML facilita la creación de soluciones inteligentes sin la necesidad de infraestructuras costosas o de gran tamaño, lo que resulta ideal para sistemas embebidos en sectores como la salud, la agricultura y el IoT.

Para esta actividad, se utilizó la placa Arduino Nano 33 BLE Sense, equipada con un acelerómetro integrado, en conjunto con la plataforma Edge Impulse para capturar datos, entrenar un modelo de clasificación y desplegar el modelo entrenado directamente en el dispositivo. Edge Impulse proporcionó un entorno intuitivo para la recolección de datos, el procesamiento de señales y el entrenamiento del modelo, optimizado para dispositivos con recursos limitados como el Arduino Nano.

El objetivo principal de esta tarea consistió en recolectar datos de movimiento, grabando la trayectoria de figuras específicas como un círculo, el número "1" y el número "3" con el acelerómetro del Arduino. A partir de estos datos, se entrenó un modelo de clasificación en Edge Impulse, el cual fue cargado en la placa para realizar predicciones en tiempo real, permitiendo la identificación precisa de las figuras dibujadas a partir de los movimientos detectados. Esta implementación demuestra el potencial de TinyML para la creación de dispositivos interactivos y autónomos que no dependen de la conectividad a la nube.

## Metodología
- Subida de Datos a Edge Impulse
En primer lugar, se capturaron los datos utilizando el acelerómetro del Arduino Nano 33 BLE Sense, grabando movimientos que formaban figuras específicas como un círculo, el número "1" y el número "3". Estos datos fueron cargados a la plataforma Edge Impulse a través de la herramienta de conexión serial. Cada muestra fue etiquetada manualmente para asociarla con la figura correspondiente. El etiquetado adecuado fue fundamental para garantizar la precisión del modelo durante el entrenamiento. En Edge Impulse, se siguieron los pasos estándar: creación de un proyecto, selección de dispositivo y subida de los datos capturados.
  
  ![image](https://github.com/user-attachments/assets/8129bab5-8f62-4d73-a57d-c05b2f172943)

- Configuración del Modelo
Para clasificar los movimientos, optamos por una red neuronal simple, que es perfecta para detectar patrones en datos secuenciales como los que genera un acelerómetro. El modelo se configuró con una capa de entrada que coincidía con las características de los datos, seguida por dos capas ocultas de 20 y 10 neuronas, usando la función de activación ReLU para darle al modelo la capacidad de aprender relaciones no lineales. La capa de salida utilizó una función Softmax, que nos permitió clasificar los movimientos en tres categorías: círculo, número "1" y número "3". Estos parámetros fueron elegidos porque ofrecen un buen equilibrio entre rendimiento y la capacidad limitada de procesamiento del Arduino.

![image](https://github.com/user-attachments/assets/14d9829a-d24a-497c-99db-28a63959ef1c)


- Entrenamiento y Validación
El entrenamiento se llevó a cabo en Edge Impulse, dividiendo los datos en un 79% para entrenamiento y un 21% para validación. Entrenamos el modelo durante 30 épocas, usando una tasa de aprendizaje de 0.0005. Durante el entrenamiento, fuimos monitoreando cómo mejoraban la precisión y la pérdida, y al final logramos una precisión de alrededor del 96.6% en los datos de validación con una perdida de 0.10, lo cual fue bastante satisfactorio. También revisamos la curva de aprendizaje para asegurarnos de que el modelo no estuviera sobreajustando, y todo salió dentro de lo esperado.

![image](https://github.com/user-attachments/assets/b8017f7d-1542-4096-b5bf-adb99b0ef20f)

![image](https://github.com/user-attachments/assets/62369d4a-0d86-44d8-b7fc-b1a1e0cd2580)

![image](https://github.com/user-attachments/assets/4866b885-086b-4e71-9e27-bce8cfc7cee3)

![image](https://github.com/user-attachments/assets/b04cf89b-6c31-4e89-9454-65966d403656)

## Resultados
Durante el experimento, se utilizó un Arduino Nano 33 BLE con un giroscopio integrado para detectar y registrar movimientos en los tres ejes (x, y, z). El objetivo era encender LEDs de diferentes colores al detectar el movimiento que realizaba el Arduino: un LED rojo al dibujar un círculo, un LED azul al dibujar el número 3 y un LED verde al dibujar el número 1. Sin embargo, los resultados obtenidos no fueron los esperados debido a los siguientes inconvenientes:

### Falla en el procesamiento de la información:
Aunque, luego de varios cambios en el código y otros percances, logramos que los resultados del giroscopio fueran detectados correctamente, consiguiendo que se encendieran los LEDs correspondientes al realizar los movimientos de círculo y uno, no logramos hacer que el sistema detectara el movimiento del número 3 para encender el LED azul.

Resultados:
![IMG-20240911-WA0012 1](https://github.com/user-attachments/assets/3520e0e9-4222-4bb5-a3c9-c90f4ba5676c)

![Imagen de WhatsApp 2024-09-11 a las 23 24 58_e09d6a94](https://github.com/user-attachments/assets/2f28b441-7869-4a8f-b5cb-fe726aafe25b)


## Referencias
International Centro for Theoretical Physics ICTP (2024) [Online]. Disponible: https://www.ictp.it/news/2021/11/tiny-machine-learning

Edge Impulse, "Documentation," Edge Impulse, 2024. [En línea]. Disponible: https://docs.edgeimpulse.com/. [Accedido: 12-sep-2024].

Arduino, "Arduino Nano 33 BLE Sense," Arduino Store, 2024. [En línea]. Disponible: https://store.arduino.cc/products/arduino-nano-33-ble-sense. [Accedido: 12-sep-2024].


