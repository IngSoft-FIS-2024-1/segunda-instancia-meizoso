# Solucion de bugs.  
  
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
(!isNaN) es false que no es un numero, además de que montoUsuario sea mayor igual a 0.  
