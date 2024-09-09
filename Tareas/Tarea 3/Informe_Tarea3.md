# INFORME N°3 - TinyML  - PI1

## INTEGRANTES: 
- Arquiño Cerna, Noemi Salomina
- Aybar Escobar, Edithson Ricardo
- Colla Cervantes, Marelly Massiel
- Quezada Marceliano, Gian Carlos
- Salazar Cobian, Arny Eliu

## Introducción
En el presente informe se aborda el concepto de TinyML; una nueva tecnología que permite que los modelos de aprendizaje automático se ejecuten en microcontroladores de bajo costo y bajo consumo (ICTP, 2024). Para esta actividad, se utilizó una placa Arduino Nano 33 BLE Sense en conjunto con la plataforma Edge Impulse para la captura de datos, entrenamiento del modelo de clasificación y despliegue del modelo entrenado. 

El objetivo de esta tarea consistió en recolectar datos mediante la grabación de movimientos que formaban figuras específicas, como un círculo, el número "1" y el número "3", utilizando el acelerómetro integrado en el Arduino. A partir de los datos obtenidos, se entrenó un modelo de clasificación con Edge Impulse, que posteriormente fue cargado en el Arduino Nano 33 BLE Sense para realizar la predicción de las formas dibujadas en tiempo real.

## Metodología
- Subida de Datos a Edge Impulse: Explicar cómo subiste los datos capturados a Edge Impulse. Incluir detalles sobre cómo etiquetaste las muestras y los pasos seguidos en la plataforma.
  ![image](https://github.com/user-attachments/assets/8129bab5-8f62-4d73-a57d-c05b2f172943)
- Preprocesamiento: Describir cualquier preprocesamiento realizado, como filtrado de ruido, normalización, o segmentación de los datos.

- Configuración del Modelo: Explicar el modelo que utilizaste (por ejemplo, una red neuronal simple), la arquitectura, los hiperparámetros (como número de capas, neuronas, función de activación), y la razón detrás de estas decisiones
![image](https://github.com/user-attachments/assets/df447bde-6b7d-4238-9564-ed267f6978f9)

- Entrenamiento y Validación: Incluir detalles sobre el proceso de entrenamiento, como la cantidad de épocas, tasa de aprendizaje, y el porcentaje de datos utilizados para entrenamiento y validación. Mencionar los resultados obtenidos en términos de precisión, pérdida, etc.
![image](https://github.com/user-attachments/assets/62369d4a-0d86-44d8-b7fc-b1a1e0cd2580)

![image](https://github.com/user-attachments/assets/4866b885-086b-4e71-9e27-bce8cfc7cee3)

## Resultados
Durante el experimento, se utilizó un Arduino Nano 33 BLE con un giroscopio integrado para detectar y registrar movimientos en los tres ejes (x, y, z). El objetivo era encender un LED al detectar un movimiento circular del dispositivo. Sin embargo, los resultados obtenidos no fueron los esperados debido a los siguientes inconvenientes:

Lectura Constante del Giroscopio:
Al realizar la lectura de los datos proporcionados por el giroscopio, únicamente se obtenía un valor constante. Esto indicaba que el giroscopio no estaba actualizando correctamente sus lecturas a través del código implementado. Durante múltiples intentos, el dispositivo no capturó los cambios en los valores de rotación esperados en los tres ejes.

Falla en la Detección del Sensor:
A pesar de la correcta conexión y carga del código en el Arduino, la inicialización del giroscopio (IMU.begin()) no fue exitosa en varias ocasiones. Esto sugiere una posible falla en la detección del sensor o un error en la comunicación entre el microcontrolador y el giroscopio integrado.

Ausencia de Datos en Ejes Específicos:
Aunque se esperaba la lectura de los tres ejes (gx, gy, gz), solo se obtuvo un valor para uno de ellos. Este valor no fluctuaba en respuesta al movimiento del dispositivo, lo cual indica una incorrecta configuración del código o la librería utilizada para acceder a los datos del giroscopio.

LED no Activado:
Como consecuencia de los errores en la detección del movimiento, el LED no se encendió al realizar el movimiento circular con el dispositivo. Esto se debe a la ausencia de cambios en los valores de los ejes, que eran necesarios para ejecutar la condición programada para encender el LED.

![image](https://github.com/user-attachments/assets/e93eceb1-d831-4699-b68d-a22d7e2d019a)
Resultados

En resumen, los resultados preliminares indicaron problemas tanto en la inicialización del sensor como en la adquisición de datos, lo que impidió cumplir con el objetivo de encender el LED al detectar un movimiento circular. Estos resultados sugieren la necesidad de revisar la configuración del giroscopio y el código implementado para asegurar una correcta detección y procesamiento de los datos de movimiento.

## Referencias
International Centro for Theoretical Physics ICTP (2024) [Online]. Disponible: https://www.ictp.it/news/2021/11/tiny-machine-learning
