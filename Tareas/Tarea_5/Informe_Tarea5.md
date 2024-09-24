# INFORME N°5 

## INTEGRANTES: 
- Arquiño Cerna, Noemi Salomina
- Aybar Escobar, Edithson Ricardo
- Colla Cervantes, Marelly Massiel
- Quezada Marceliano, Gian Carlos
- Salazar Cobian, Arny Eliu

## INTRODUCCIÓN: 
En el presente informe trabajamos con un IoT que significa Internet de las cosas, y hace referencia a los dispositivos que están conectados a internet y que se comunican entre ellos. También hacemos uso de los relés; los cuales permiten usar una placa Arduino para controlar un circuito de mayor potencia que los que la placa Arduino es capaz. Los relés están compuestos por un electroimán que mueve una pequeña plancha metálica, denominada terminal COM, entre dos posiciones diferentes; terminal NC y terminal NO. Podemos decidir en qué posición se conecta el terminal COM activando/desactivando el electroimán mediante la conexión de una señal de baja potencia en los terminales de control del electroimán.

Asimismo, trabajamos con un sensor de humedad es uno de los sensores más básicos, pero potentes, que existen. Tiene dos conductores expuestos y es básicamente una resistencia variable. Cuando se expone al agua, la resistencia disminuye a medida que incrementa la conductividad, mientras que menos agua significa mayor resistencia. Si colocamos este sensor en una maceta recien regada, la resistencia es menor y, si le hacemos una lectura, podemos medir qué tan húmeda está la planta.

## METODOLOGÍA:
Para esta actividad usamos un MKR IoT Carrier, un relé, un LED, una resistencia y un sensor de humedad. Primero conectamos el Led y la resistencia al rele y conectamos el sensor de humedad para poder capturar sus mediciones.

En lo referente al código, usamos sentencias de If/Else. Si activamos el relay_1 desde el panel de control de la nube, primero el relé se activa ON y luego cambia la cadena relayState1 a ON. Si lo ponemos OFF, el relay se apaga y cambia relayState1 a OFF. 

Luego, declaramos variables para obtener las lecturas actuales de los sensores de luz, temperatura y humedad. Cuando se lee un componente analógico, obtenemos un valor entre 0-1023. Dado que este rango de valores no tiene mucho sentido hacemos uso de la función map().
![WhatsApp Image 2024-09-22 at 11 32 51 PM](https://github.com/user-attachments/assets/e0cf9715-97fe-498e-89e5-91aa1675360d)

Finalmente configuramos el panel de control donde podremos visualizar todas nuestras variables y sus respectivas mediciones.
![WhatsApp Image 2024-09-22 at 11 32 45 PM](https://github.com/user-attachments/assets/aa0ce533-7128-457e-8bd6-50fc6b796c0e)


## RESULTADOS:
Probamos el funcionamiento de los sensores y que sus mediciones se muestren en el panel de control y en la pantalla conectada al Carrier. Además vemos la diferencia en las mediciones del sensor de humedad poniendo el sensor en la tierra húmeda. Y con los botones en el panel de control probamos la función de prendido y apagado de los leds.
![WhatsApp Image 2024-09-22 at 11 32 54 PM (1)](https://github.com/user-attachments/assets/b931383c-4232-44bd-bef8-9066c4758fec)

![WhatsApp Image 2024-09-22 at 11 32 49 PM](https://github.com/user-attachments/assets/96f99bcc-4085-4114-922d-27200516386f)

![WhatsApp Image 2024-09-22 at 11 32 44 PM](https://github.com/user-attachments/assets/d26a73e2-dc2e-446d-a801-271addcad7d3)

## DISCUSIÓN:

El uso del Internet de las Cosas (IoT) en este proyecto destaca por su simplicidad y efectividad al integrar sensores con el fin de medir y controlar variables físicas. En este caso, la capacidad de gestionar la humedad de una planta mediante un sensor, junto con un relé y un sistema de control remoto a través de un panel web, es una aplicación práctica que refleja el valor del IoT en la automatización de procesos cotidianos.

Uno de los puntos clave en el experimento es la utilización del sensor de humedad, que, como se explicó en la introducción, mide la resistencia variable según la cantidad de agua presente en el entorno. Este tipo de sensores es extremadamente útil en aplicaciones agrícolas o domésticas, donde se busca optimizar el riego de las plantas y evitar tanto el exceso como la escasez de agua.

El relé, por su parte, se utiliza como un interruptor electrónico que permite la activación o desactivación de dispositivos de mayor potencia, en este caso el LED, a través de señales de baja potencia provenientes de la placa Arduino. Esta metodología es muy común en proyectos que requieren la integración de sistemas de control remoto con dispositivos de potencia superior, como motores o sistemas de iluminación.

Aspectos a considerar

- Eficiencia del Sistema: Un sistema basado en IoT como este permite la automatización eficiente del riego de plantas, reduciendo el desperdicio de agua. Sin embargo, es importante evaluar la respuesta en tiempo real del sistema, especialmente en el entorno web. Un retraso en la activación o desactivación del relé podría comprometer la precisión del riego automático.

- Robustez del Hardware: Si bien el MKR IoT Carrier es adecuado para aplicaciones básicas, la capacidad del relé para manejar cargas más altas podría limitar el tipo de dispositivos que se pueden conectar.

- Seguridad del Sistema IoT: En este tipo de proyectos, la seguridad siempre debe considerarse un aspecto primordial. Al tratarse de un sistema IoT conectado a la nube, es necesario implementar mecanismos de seguridad robustos para evitar vulnerabilidades como accesos no autorizados que puedan comprometer el correcto funcionamiento del sistema.

## REFERENCIAS:
[[1]] Arduino, “Agricultura urbana 101”. [Online]. Disponible en: https://edu-content-preview.arduino.cc/content-preview/high_school/lesson/CONTENTPREVIEW+IOTSK
