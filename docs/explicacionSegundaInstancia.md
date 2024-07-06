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
  
    queda solucionar el bug de que las cartas de nueva apuesta se queden en el navbar.  

# Agregar elementos bootstrap.  
  
    El obligatorio carecía de elementos bootstrap, fue minimo el uso de la herramienta, por ende implementé distintas secciones   
de la página usando bootsrap, para empezar, modifiqué la sección de noticias, ya que esta no tiene ninguna función en javaScript   
y esto facilita el cambiar la estructura del html y las clases.  
Con el uso de row y col, logré conseguir una mejor estética de la sección, creando eficientementelos contenedores de noticias  
uno encima de otro. Este primer paso ya solucionó el problema de la falta de responsividad de la página, ahora cuando  
el tamaño de la ventana cambia, los elementos cambian sus propiedades respectivamente.  
Posteriormente, me moví a la sección de nuevaApuesta, esta es donde se crean una especie de "cartas" pequeñas donde el usuario  
ingresa el monto de apuesta y la información correspondiente. Ésta sección significó mayores problemas debido a que los  
elementos de html son creados en javaScript, y el manejo de clases fue un poco confuso, sin embargo, aplicando la misma  
estructura de filas y columnas logré implementar estos elementos con bootstrap, ahora se puede agrandar y achicar la ventana  
sin tener problemas mayores.  


