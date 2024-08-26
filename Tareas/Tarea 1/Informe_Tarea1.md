# INFORME N°1 - REGRESIÓN LINEAL - PI1

## INTEGRANTES: 
- Arquiño Cerna, Noemi Salomina
- Aybar Escobar, Edithson Ricardo
- Colla Cervantes, Marelly Massiel
- Quezada Marceliano, Gian Carlos
- Salazar Cobian, Arny Eliu

## INTRODUCCIÓN: 
En el presente informe se aborda de manera detallada el proceso metodológico para trabajar con modelos de aprendizaje automático, con un enfoque particular en la aplicación de la regresión lineal múltiple. Este modelo ha sido seleccionado debido a su capacidad para modelar la relación entre múltiples variables independientes y una variable dependiente continua. El estudio parte de la recolección y análisis de datos proporcionados por la Agencia de Protección Ambiental de Estados Unidos (EPA, por sus siglas en inglés) [1]. La EPA ofrece un vasto repositorio de datos ambientales, entre los cuales se encuentran estadísticas diarias sobre la calidad del aire para diversos contaminantes monitoreados en ciudades, condados y estados de Estados Unidos [2].

Para este análisis, se han seleccionado datos referentes a la contaminación por dióxido de carbono (CO2) en el estado de California, abarcando un periodo de cinco años (2019-2023). La elección de este conjunto de datos responde a la necesidad de entender y predecir las concentraciones de CO2 en función del índice diario de calidad del aire. Este enfoque permite no solo observar tendencias históricas sino también generar predicciones que pueden ser críticas para la toma de decisiones en políticas ambientales y de salud pública.

El informe presenta una comparación inicial entre dos enfoques comunes en el aprendizaje automático: la clasificación y la regresión. Dado que nuestro objetivo es predecir valores numéricos continuos, la regresión se establece como el modelo adecuado, descartando así la clasificación, que se orienta a la predicción de categorías discretas. Dentro del ámbito de la regresión, se opta por la regresión lineal debido a su capacidad para modelar de manera directa la relación lineal entre las variables. Este modelo no solo facilita la comprensión de cómo las concentraciones de CO2 varían en función de diversos factores, sino que también permite realizar predicciones precisas y basadas en datos empíricos [3]. 

El enfoque principal de este informe será la implementación de la regresión lineal múltiple, donde se modela la relación entre una variable dependiente, en este caso, la concentración de CO2, y múltiples variables independientes, como las mediciones diarias de calidad del aire. Este método ofrece la ventaja de considerar varios factores simultáneamente, proporcionando un modelo más robusto y preciso para predecir las concentraciones futuras de CO2 [4]. 

Siendo así, con este informe se pretende demostrar la aplicación práctica de la regresión lineal múltiple en el contexto de la predicción de contaminantes ambientales. La metodología y los resultados aquí expuestos buscan no solo evidenciar la eficacia de este modelo, sino también ofrecer una herramienta analítica valiosa para la comprensión y gestión de la calidad del aire en California. A través de este análisis, se espera contribuir al desarrollo de estrategias más informadas y efectivas en la mitigación del impacto ambiental de la contaminación por CO2.


## METODOLOGÍA:

## RESULTADOS:
Para evaluar nuestro modelo se usaron 2 métricas: el coeficiente de determinación (R²) cuyo resultado fue de 0.988 lo cual muestra que nuestro modelo se ajusta bien a nuestros datos. Mientras que el error absoluto medio (MAE) fue de 0.023, que indica que la diferencia entre los valores predichos por nuestro modelo y los valores reales es baja. 

En la gráfica mostrada a continuación se visualiza una gráfica de dispersión entre los valores predichos por nuestro modelo y los valores reales de la “Concentración máxima diaria de CO en 8 horas”.

![Gráfica de dispersión entre Valores Reales y Predichos del Daily Max 8-hour CO Concentration](https://github.com/user-attachments/assets/ca62e15d-c582-452b-b4e0-e610fb4ae755)

## DISCUSIÓN:
En nuestro análisis grupal, utilizamos la regresión lineal para examinar cómo la concentración diaria de monóxido de carbono (CO) impacta el Índice de Calidad del Aire (AQI) en California durante varios años. Esta técnica fue elegida porque nos permitió, de manera sencilla, explorar la relación entre estas dos variables.
Primero, como grupo, recopilamos datos de la web de diferentes años, asegurándonos de que fueran consistentes y completos para poder entrenar un modelo robusto. Este paso fue crucial, ya que contar con un conjunto de datos adecuado es esencial para obtener resultados confiables.

Luego, aplicamos la regresión lineal simple para crear un modelo que predijera el AQI en función de las concentraciones de CO. A través de este modelo, pudimos visualizar cómo el AQI se comporta en relación con el CO, lo cual nos dio una visión clara de la tendencia general. Sin embargo, notamos que el modelo no siempre predijo con total precisión los valores reales, lo cual era esperado, ya que el AQI está influenciado por múltiples factores.

Para medir la efectividad del modelo, calculamos el Error Absoluto Medio (MAE) y el (R cuadrado) R**2. Estas métricas nos permitieron evaluar qué tan bien el modelo se ajustó a los datos reales. Aunque los resultados fueron alentadores, como grupo reconocimos que el análisis podría mejorarse incluyendo más variables, como otros contaminantes o condiciones meteorológicas, lo que podría hacer las predicciones más precisas y útiles.

## REFERENCIAS:
[[1]] U.S. Environmental Protection Agency. "EPA Environmental Datasets." [Online]. Available: https://www.epa.gov/environmental-datasets

[[2]] U.S. Environmental Protection Agency. "Air Quality Statistics." [Online]. Available: https://www.epa.gov/outdoor-air-quality-data/air-quality-statistics

[[3]] G. James, D. Witten, T. Hastie, and R. Tibshirani, An Introduction to Statistical Learning, 7th ed., Springer, 2013, pp. 59-70.

[[4]] J. Acevedo y L. Ponce, "Análisis de regresión lineal simple y múltiple," Sociedad de Anestesiología de Chile. [En línea]. Disponible en: https://www.sachile.cl/upfiles/revistas/54e63943b5d69_14_regresion-2-2014_edit.pdf.





