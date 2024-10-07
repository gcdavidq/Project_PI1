# Informe 06: Simulación de esfuerzos mecánicos
## 1. Introducción
En este informe se presenta el análisis de una simulación estructural realizada sobre un ensamble básico utilizando la plataforma SimScale. Esta herramienta basada en la nube nos ha permitido realizar simulaciones complejas sin necesidad de equipos de alto rendimiento, lo que la convierte en una opción accesible y eficiente para llevar a cabo análisis de ingeniería. SimScale es especialmente útil en estudios de simulación estructural, térmica y de fluidos.

El objetivo principal de esta simulación fue predecir cómo se comportaría el modelo del ensamble bajo diversas condiciones de carga. Este tipo de análisis estructural resulta fundamental para garantizar que las estructuras diseñadas sean capaces de soportar las fuerzas que se les aplicarán en situaciones reales. Al conocer las tensiones y deformaciones que se generan en los diferentes componentes, se puede optimizar el diseño y prevenir fallos antes de la implementación o fabricación.

Para este caso, se utilizó un modelo CAD al que se le asignó acero como material, elegido por sus características de alta resistencia y durabilidad. A partir de este modelo, se definieron las condiciones de contorno de cómo el ensamble está fijo o sujeto, y se aplicaron las cargas correspondientes. Esto permitió analizar el comportamiento estructural bajo dichas condiciones, observando las tensiones y deformaciones generadas.

Con esta simulación, se logró obtener una comprensión más detallada del comportamiento del ensamble bajo las condiciones de carga establecidas. Esto garantiza que la estructura puede cumplir con los requisitos de seguridad y funcionalidad esperados. El uso de SimScale permitió realizar este análisis de forma eficiente, ofreciendo resultados confiables que ayudan en la toma de decisiones para el diseño y evaluación de la estructura
## 2. Metodología
### 2.1. Modelado 3D en Onshape
Para realizar la simulación estructural primero hicimos el modelado de una estructura simple en Onshape siguiendo el tutorial presentado en clase. En total se modelaron 2 piezas y 2 soportes que posteriormente pasamos a ensamblaje. Para propósitos del análisis se realizó una partición de 30 mm con la herramienta “split” en la cara superior del modelo.

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/94b47e88-b497-4b31-b1a7-583a2ab1da0a" width="400" height="300">
  <img src="https://github.com/user-attachments/assets/90f4f80d-faea-4fda-8fba-9c796997eed3" width="400" height="300">
</div>

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/94b47e88-b497-4b31-b1a7-583a2ab1da0a" width="400" height="300">
  <img src="https://github.com/user-attachments/assets/ac601697-2cca-4ac5-8199-a38272a12cf2" width="400" height="250">
</div>

### 2.2. Simulación de esfuerzos mecánicos en Simscale
Una vez modelada la estructura, creamos un proyecto en Simscale, importamos el Assembly de nuestro modelo y creamos la simulación. Como en el análisis vamos a considerar desplazamientos y contactos activamos la opción de Análisis no Lineal. En la parte de contactos nos identifica 3: entre capa pieza con su soporte (2) y entre las 2 piezas (1). El tipo de contacto por default es “bonded” que es adecuado para el contacto entre nuestras piezas principales. Sin embardo, para el contacto entre las piezas y los soportes cambiamos a tipo de contacto “Sliding” para permitir el desplazamiento entre las superficies.
Para esta simulación, asignamos acero como el material de todas nuestras piezas. Dependiendo del material cambian las propiedades, para el acero tenemos las siguientes características:

<img src="https://github.com/user-attachments/assets/4a656663-61be-4cb8-b379-9703edeceafb" alt="Mesh" width="500">

Luego, pasamos a fijar los 2 soportes cilíndricos, seleccionamos la partición que hicimos en el modelo y aplicamos una fuerza de -1000 Newton en el eje Z. En el siguiente paso creamos el mallado (Mesh), ajustamos los parámetros para refinar el mallado y finalmente corremos la simulación.

  <img src="https://github.com/user-attachments/assets/623c5932-552a-4d46-b1e9-81b6cfa333cd" alt="Mesh" width="500">

## 3. Resultados

<div style="display: flex; justify-content: space-between;">
Las áreas en rojo y amarillo, que indican las zonas de mayor tensión. Esto es crítico para entender dónde el material está más estresado.


  <img src="https://github.com/user-attachments/assets/9efbbbd2-1b0d-4dc6-bcd0-142ecef6684c" width="400" height="300">
  <img src="https://github.com/user-attachments/assets/fc4e35bf-fc74-482e-9b86-a3517f0614b9" width="400" height="300">
  
  <img src="https://github.com/user-attachments/assets/b2990c64-fde2-49cc-899e-55bee578253e" width="400" height="300">
</div>
Estas vistas permiten ver el modelo desde diferentes ángulos. La comparación entre estas imágenes ayuda a visualizar cómo las tensiones se distribuyen en el ensamble en respuesta a las cargas aplicadas. Al observar diferentes ángulos, se pueden identificar variaciones en el comportamiento estructural.

  

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/072f33f8-dd1a-4ebd-b202-6d5f239857db" width="400" height="300">

	
 En esta imagen, se pueden observar los puntos críticos donde las tensiones son más altas. Las áreas en rojo indican potenciales fallas bajo cargas extremas. Este análisis es crucial para la optimización del diseño.
	
  <img src="https://github.com/user-attachments/assets/45ab73c4-830e-478a-b78d-e07da7cbb50a" width="400" height="300">
  <img src="https://github.com/user-attachments/assets/24281c9c-6ea0-49e8-b22c-43856ebcdf81" width="400" height="300">
</div>

Ayudan a reforzar la identificación de zonas que requieren atención especial en términos de diseño y selección de materiales.

## 4. Discusiones
La presente simulación se hizo en base a un modelo sencillo, para realizar una simulación en una pieza más compleja se deben considerar varios aspectos:
-	El material de las piezas no siempre es el mismo, por lo que se debe seleccionar el material de cada pieza cuidadosamente y verificar que hemos configurado correctamente las propiedades del material.
-	También se debe analizar el lugar donde aplicarán la o las fuerzas para la simulación de acuerdo con el contexto en el que se planee utilizar el objeto modelado.
-	Una vez realizada la simulación podremos ubicar las partes débiles de nuestra estructura y optimizar su diseño.


## 5. Conclusiones

## Referencias
[1] SimScale. Structural Analysis (FEA) in SimScale https://www.simscale.com/docs/tutorials/structural-analysis/

[2] Onshape Inc. Collaborative Cloud CAD Software https://www.onshape.com/en/

[3] W. D. Callister and D. G. Rethwisch, Materials Science and Engineering: An Introduction, 9th ed. John Wiley & Sons, 2018.

[4] T. Belytschko, W. K. Liu, B. Moran, and K. Elkhodary, Nonlinear Finite Elements for Continua and Structures. Wiley, 2014.

[5] R. C. Hibbeler, Engineering Mechanics: Statics & Dynamics, 14th ed. Pearson Education, 2015.

[6] SimScale Community, Mechanical Stress Analysis Documentation https://www.simscale.com/community/project/
