#  Informe 07: PCB

## 1. Introducción:
El presente informe, tiene como objetivo explicar el circuito de nuestro proyecto, EcoRouteX. En principio, hemos diseñado nuestro sistema empleando el microcontrolador ESP32, varios potenciómetros, un regulador de voltaje LM2596, y capacitores de desacoplo. Además, se ha usado conectores Molex para facilitar la modularidad del diseño y una resistencia pull up. A continuación, presentaremos una explicación detallada de los componentes usados, su función y como interactúan entre si. 

## 2. Componentes Utilizados 

### 1. ESP32 (Microcontrolador Principal) 

El ESP32 es un mictrocontrolador de doble núcleo con capacidades de Wifi y Bluetooth. En este circuito, se utiliza para leer los valores analógicos de los potenciómetros y tomar decisiones basadas en esas lecturas.  
- Pines importantes: 
  - 3.3 V: Se utiliza para alimentar otros componentes del circuito, como los potenciómetros y asegurar que el microcontrolador esté hailitado. 
  - Pin EN (Enable): Utilizado para habilitar o deshabilitar el ESP32. Al conectarlo a 3.3V a través de una resistencia pull-up, el ESP32 permanece habilitado. 
  - Pines IO: Pines utilizados para leer señales analógicas desde los potenciómetros. Estos pines convierten el voltaje variable (entre 0 y 3.3V) en valores digitales para ser procesados.
    
- Interacción con otros componentes
    -  Alimentación del ESP32 proviene del LM2596, el cual entrega 5V.
    - Los potenciómetros están conectados a los pines ADC del ESP32 para permitir la lectura del voltaje variable generado. 

### 2. LM2596 (Regulador de Voltaje) 

El LM2596 es un regulador buck que convierte un voltaje de entrada más alto (en este caso, 7.4V proveniente de baterías) a un voltaje regulado de 5V.
- Características 
  - Tipo: Regulador Buck (reductor de voltaje). 
  - Voltaje de Entrada: 7.4V (baterías). 
  - Voltaje de Salida: 5V, que se usa para alimentar al ESP32.
    
- Interacción con otros componentes  
  - Entrada VIN del LM2596 está conectada a la salida de las baterías (7.4V). La salida OUT del LM2596 se conecta al pin 5V del ESP32 para proveer  alimentación regulada. 

### 3. Potenciometros (Resistencias Variables) 

Los potenciómetros son resistencias variables que permiten ajustar manualmente el voltaje de salida, para que después sea leído por el ESP32. 
- Conexiones Importantes: 
  - Terminal 1 (CCW): Conectado al pin de 3.3V del ESP32, proporcionando una referencia de voltaje. 
  - Terminal 2 (Wiper): Conectado a un pin ADC del ESP32 mediante un conector Molex. Este terminal entrega un voltaje variable que se mide por el ESP32. 
  - Terminal 3 (CW): Conectado a la tierra (GND) del circuito.
    
- Interacción con otros componentes: 
  - El voltaje generado en el wiper del potenciómetro se lee a través de los pines ADC del ESP32 para convertirlo en un valor digital y realizar el control del sistema. 
  - Los potenciómetros se conectan a través de los conectores Molex, lo cual facilita la conexión modular. 

### 4. Capacitores de desacoplo 

Los capacitores de desacoplo de 0.1 µF se conectan entre el wiper del potenciómetro y GND para reducir el ruido de la señal analógica que llega al ESP32. 

- Función: 
  - Filtran las señales de alta frecuencia que podrían causar fluctuaciones en la lectura analógica. 
  - Aseguran una lectura estable y precisa del voltaje variable. 
  - Conexión Importante: 
  - Terminal positivo del capacitor al wiper del potenciómetro. 
  - Terminal negativo al GND.
    
- Interacción con otros componentes: 
  - Trabajan junto con los potenciómetros para asegurar que el ESP32 reciba una señal limpia y estable.
    
### 5. Conectores Molex: 

   Los conectores Molex de 3 pines se utilizan para conectar los potenciómetros al ESP32 de una forma modular. 

- Pines del Molex: 
  - Pin 1: Conectado a 3.3V del ESP32 para alimentar el potenciómetro. 
  - Pin 2: Conectado al wiper del potenciómetro, y luego a un pin ADC del ESP32. 
  - Pin 3: Conectado a GND, proporcionando una referencia de tierra.
  - 
- Función: 
  - Facilitar la desconexión rápida y el reemplazo de potenciómetros en el circuito.
  - Mejorar la organización del diseño al permitir conexiones modulares. 

## 3. Flujo de Comunicación entre los componentes 
### 1. Alimentación y Regulacoin: 
- Baterías proporcionan 7.4V al LM2596, que luego regula a 5V estables. 
- LM2596 entrega 5V al ESP32, lo cual se convierte internamente a 
 3\.3V para alimentar otros componentes. 

### 2. Habilitacion del ESP32: 
- El pin EN del ESP32 está conectado a 3.3V a través de una resistencia pull-up de 10 kΩ para mantener al ESP32 habilitado.
  
### 3. Lectura de potenciómetros 
- Los potenciómetros proporcionan un voltaje variable entre 0V y 3.3V que se mide con los pines ADC del ESP32. 
- El capacitor de desacoplo conectado al wiper del potenciómetro y  GND asegura que el voltaje leído esté libre de ruidos y sea estable. 

### 4. Conexión modular a través del Molex 
- Los potenciómetros se conectan al ESP32 utilizando los conectores Molex, facilitando la conexión y desconexión. 
- El wiper de cada potenciómetro se conecta a un pin ADC del ESP32 para permitir la lectura de la posición del potenciómetro de manera precisa. 

## Conclusión: 

El diseño de este circuito está orientado a permitir la lectura de señales analógicas generadas por potenciómetros, con el objetivo de usar esos datos en el control de un sistema basado en el microcontrolador ESP32. El uso de un regulador LM2596 para proporcionar alimentación estable, junto con capacitores de desacoplo para filtrar señales, asegura la integridad y estabilidad del circuito. 


## Imagenes de lo desarrollado:

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/06a37a7a-3562-4856-a6b7-4659d029aa7d" width="400" height="300">
</div>

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/7e8eee2f-68bb-41cc-a181-89cd9e7780b5" width="400" height="300">
</div>

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/1cf40c0a-cff6-40d5-9dea-99ef56708a46" width="400" height="300">
</div>

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/866036f3-793a-405b-ae56-964df98d9163" width="400" height="300">
</div>

