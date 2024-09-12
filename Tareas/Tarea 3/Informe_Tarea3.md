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
Durante el experimento, se utilizó un Arduino Nano 33 BLE con un giroscopio integrado para detectar y registrar movimientos en los tres ejes (x, y, z). El objetivo era encender LEDs de diferentes colores al detectar el movimiento que realizaba el Arduino: un LED rojo al dibujar un círculo, un LED azul al dibujar el número 3 y un LED verde al dibujar el número 1. Sin embargo, los resultados obtenidos no fueron los esperados debido a los siguientes inconvenientes:

### Falla en el procesamiento de la información:
Aunque, luego de varios cambios en el código y otros percances, logramos que los resultados del giroscopio fueran detectados correctamente, consiguiendo que se encendieran los LEDs correspondientes al realizar los movimientos de círculo y uno, no logramos hacer que el sistema detectara el movimiento del número 3 para encender el LED azul.

Resultados:
![IMG-20240911-WA0012 1](https://github.com/user-attachments/assets/3520e0e9-4222-4bb5-a3c9-c90f4ba5676c)

![Imagen de WhatsApp 2024-09-11 a las 23 24 58_e09d6a94](https://github.com/user-attachments/assets/2f28b441-7869-4a8f-b5cb-fe726aafe25b)


## Referencias
International Centro for Theoretical Physics ICTP (2024) [Online]. Disponible: https://www.ictp.it/news/2021/11/tiny-machine-learning
