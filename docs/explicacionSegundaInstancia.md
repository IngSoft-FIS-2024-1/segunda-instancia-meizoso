# Solucion de issues.  
## issues de baja implicancia.  
  
Comencé leyendo todos los issues donde se documentaban problemas sobre el código y clasificandolos por importancia.   
Empecé atacando aquellos issues que no tenian una gran implicancia en el código sino más bien en la interfaz,   
tales como respetar el title case, solucionar errores ortográficos y mejor elección de palabras.   
Luego me movì a aquellos de baja implicancia en el código (issues #7 , #8). Para ellos realicé cambios menores,  
agregando las condiciones respectivas para cada caso límite no analizado originalmente.  
Me aseguré que los montos estuvieran dentro de las restricciones establecidas, y solucioné lo siguiente:  
en el campo de ingresar monto al comienzo de la experiencia de usuario, se podia ingresar "e" como un nùmero   
y se podìan ingresar valores negativos. Para solucionar estos problemas agregué las condiciones de que, monto ingresado  
fuera estrictamente un numero, que no contuviera la "e" (analizandolo como string) y posteriormente, que el valor sea mayor igual a 3.  
También solucioné el error de que se podian crear apuestas con un valor negativo simplemente verificando que el campo sea llenado con un numero  
(!isNaN) es false que no es un numero, además de que montoUsuario sea mayor igual a 0, de no cumplirse, emerge un alert.  
  
## issues de alta implicancia.  
  
Este bug me trajo muchos problemas ya que la posicion de las cartas fue uno de los conflictos principales con el estilo de la web,  
para solucionarlo, tuve la idea de hacer que la posicion de la carta sea relativa a la caja de apuestas, me referí al article que  
engloba todas las apuestas, desde la caja principal hasta las cartas de crear apuesta y le agregué position relative.  
De esta forma, y siendo que las apuestas nuevas tienen position absolute, ahora cuando bajo la navBar, ambas cajas bajan de igual manera.  
  
# Agregar elementos bootstrap.  
  
El obligatorio carecía de elementos bootstrap, fue minimo el uso de la herramienta, por ende implementé distintas secciones   
de la página usando bootsrap, para empezar, modifiqué la sección de noticias, ya que esta no tiene ninguna función en javaScript   
y esto facilita el cambiar la estructura del html y las clases.  
Con el uso de row y col, logré conseguir una mejor estética de la sección, creando eficientementelos contenedores de noticias  
uno encima de otro. Este primer paso ya solucionó el problema de la falta de responsividad de la página, ahora cuando  
el tamaño de la ventana cambia, los elementos cambian sus propiedades respectivamente.  
  
Posteriormente, me moví a la sección de nuevaApuesta, esta es donde se crean una especie de "cartas" pequeñas donde el usuario  
ingresa el monto de apuesta y la información correspondiente. Ésta sección significó mayores problemas debido a que los  
elementos de html son creados en javaScript, el manejo de clases fue un poco confuso, sin embargo, aplicando la misma  
estructura de filas y columnas logré implementar estos elementos con bootstrap, ahora se puede agrandar y achicar la ventana  
sin tener problemas mayores.  
  
Finalmente implementé los elementos de la sección historial como elementos de bootstrap, tuve que informarme más sobre los elementos de tipo card,  
como resultado conseguí rapidamente conseguir la misma estructura que me costó lograr anteriormente con la diferencia que ahora es responsive  
y eso le da una mejor cara a la página.  
  
## Reflexion Bootstrap  
  
Considero que de haber utilizado estos elementos en una etapa temprana del trabajo, habría reducido el tiempo de trabajo  
y se hubiera conseguido un resultado más "prolijo", cumpliendo además con el requisito de ser responsive.  
Aprendí muchisimo sobre las estructuras de la herramienta bootstrap y creo que serán muy utiles a futuro.  
Desde mi punto de vista, el error que tuve fue no confiar en dar el paso a lo desconocido hasta el momento y aferrarme a css,  
al no conocer bootstrap y ver buenos resultados utilizando css, creo que dejé de lado la oportunidad de aprender algo nuevo   
y al final eso se vio reflejado en el trabajo, que si bien en su momento me pareció correcto y quedé contento con el resultado,   
hoy considero que de haber confiado en aprender algo nuevo como bootstrap desde el inicio, habría conseguido mejores resultados   
de forma más rapida ahorrandome varios problemas en el camino.  
También tuve que enfrentarme a problemas debido a cambiar los nombres de las clases y los elementos, reestructuré ciertas funciones  
como resaltar y crearApuesta, además de modificar una buena parte del css debido a que el padding, margin y otros aspectos los implementé   
simplemente con el html o el javascript mediante bootstrap.  
  
# Calculos fuera de interfaz.  
  
En el trabajo original, habiamos hecho los cálculos en main, esto implica que las funciones donde se conseguían valores para el  
funcionamiento de la página estaban en el mismo lugar donde se encontraban las funciones para mostrar elementos visualmente.  
Como buena práctica, removì esas funciones y las llevé a las clases correspondientes en el dominio, por ejemplo,  
ahora la funciòn de elegir resultado se encuentra dentro de partidoList, esto es "más correcto" debido a que si queremos saber  
quén gano un partido, intuitivamente iremos a donde se encuentran los partidos, no a la interfaz.  

