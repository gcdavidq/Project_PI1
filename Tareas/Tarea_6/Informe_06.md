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
Una vez modelada la estructura, creamos un proyecto en Simscale, importamos el Assembly de nuestro modelo y creamos la simulación.

  <img src="https://github.com/user-attachments/assets/623c5932-552a-4d46-b1e9-81b6cfa333cd" alt="Mesh" width="500">

## 3. Resultados

## 4. Discusiones

## 5. Conclusiones

## Referencias
[1] SimScale. Structural Analysis (FEA) in SimScale https://www.simscale.com/docs/tutorials/structural-analysis/

[2] Onshape Inc. Collaborative Cloud CAD Software https://www.onshape.com/en/

[3] W. D. Callister and D. G. Rethwisch, Materials Science and Engineering: An Introduction, 9th ed. John Wiley & Sons, 2018.

[4] T. Belytschko, W. K. Liu, B. Moran, and K. Elkhodary, Nonlinear Finite Elements for Continua and Structures. Wiley, 2014.

[5] R. C. Hibbeler, Engineering Mechanics: Statics & Dynamics, 14th ed. Pearson Education, 2015.

[6] SimScale Community, Mechanical Stress Analysis Documentation https://www.simscale.com/community/project/
