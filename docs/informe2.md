# Informe académico (entrega 2)

## Construcción
### Implementación de funciones principales
-Al principio el trabajo nos vino con las carpetas domain y interface que son para tener el trabajo bien origanizado y no mezclar los archivos que son para cada cosa, nosotros  
seguimos ese camino para siempre tner el trabajo bien estructurado y organizado.  
-Este trabajo se centró sobre el uso de objetos, por tanto, fueron claves las funciones get y set, los setters, son funciones usadas para asignar valores a  
variables del constructor de un objeto, por ejemplo, para las apuestas teniamos un partido asignado, cada vez que creabamos una apuesta, le asignabamos un partido  
mediante el comando setPartido(), de esta forma, cada vez que invoquemos al objeto apuesta, tendremos dentro el partido que le corresponde.  
Por otro lado, los getter son funciones usadas para recuperar los valores de las variables de apuesta, cada setter debe tener su getter, un ejemplo  
es el getter para el setPartido, este seria getPartido() el cual cada vez que es llamado, devuelve el partido correspondiente a la apuesta.  
-Como mencionamos anteriormente, estas funciones se usan en clases y objetos, las clases las creamos con class, seguido de las variables que queremos asignarle  
y si deseamos que estas sean de tipo privado, insertamos el caracter "#" antes de cada una. Debemos tener un constructor, donde asignaremos valores default a cada  
variable acompañado de los get y set.  
-Tambien usamos los archivos **{nombre + list + .js}** que serian como una base de datos de el archivo **{nombre}** ahi tenemos los datos que va cargando el  
usuario a mediad que va usando la pagina o los datos que cargamos nosotros cuando la pagina empieza o cuando hace una cosa especifica el usuario.

-Tenemos 4 funciones que tienen una prioridad altisima que son las que le dan ese juego a la pagina y son funciones muy importantes:  
**-->Funcion partidos3AlInicio()**  
Esta funcion lo que hace es generar 3 partidos aleatoriamente de 30 partidos que ya estan precargados, los genera sin repetirlos y los mete en un array para despues utilizar los  
elementos del HTML para ingresarlos en la pagina ahi utilizamos todos los datos de la clase partido para que se muestren en la pagina.  

**-->Funcion crearApuesta()**  
Esta funcion la funcion mas compleja de todo el proyecto y tiene un monto de funcionalidades una de ellas es crear todo el conteiner para hacer la apuesta creando elementos html y  
agregando todos los datos del partido que elige el usuario, por otro lado tambien tine la funcionalidad del boton de borrar para borrar esa apuesta que eligio el usaurio  
por si se equivoco, Tambien tuvimos que hacer la funcionalidad cuando se apreta el boton de hecho que seria que ya esta pronta la apuesta lo que tuvimos que hacer  
es crear todo ese objeto apuesta con todos los datos de esa apuesta y despues tuvimos que agregar un nuevo partido que no estuviera entre las 3 apuestas que  
salen e el menu y que no haya estado antes sino se repetirian y ahi la agregamos al conteiner que eligio el usuario.  
por utlimo tuvimos que agregar esas apuestas que hizo el usuario en la seccion del historial y lo hicimos creando los elementos HTML con JS y y poniendole  
estilos CSS. Tambien le agregamos a la pagina que si quiere agregar una apuesta que ya esta para apostar que se resalte no que salga un mesnaje  
porque pensamos que seria una forma que queda mucho mas linda la pagina.  

**-->Funcion elegirResultadoRandomSegunGanancia()**  
Esta funcion es la que le da mucha vida a la pagina lo que hace es elgir el equipo que gana segun la ganancia que tenga, el equipo que tenga mas ganancia es el que va a ser  
mas dificil de que salga como ganador, lo que hacemos es dividir la ganancia por 1 para intentar que el resultado este entre 0 y 1 pero hay numeros grande que puede  
ser que sean mas grandes que 1 entonces lo que hacemos es normalizar la probabilidad que es dividiendola entre un valor que tiene en comun las 3 probabilidades con esto aseguramos  
que esten entre 0 y 1 las probabilidades despues genramos un numero rando entre 0 y 1 y vemos entre que rango salio ese numero si sale en un rango menor a la  
probablidad del equipo1 que salga como ganandor el equipo1 si esta entre medio de la probabildiad del equipo1 y la probabilidad del equipo1 + la de que empatan  
que salga empatan y sino que slga visitante osea que el valor sea mas grande que la suma entre equipo1 y empatan y menor a 1.  

**-->Funcion cargaDePartidos()**  
Esta funcion precarga partidos cuando se inicia la pagina asi el usuario puede tener los partidos ya para apostar cuando inicia la pagina la precarga con todos los datos del partido  
y sus respectivas ganancias.  

## Librerías externas  
Version Jest: 29.7.0  
Version Eslint: 8.57.0  
Version Eslint Configuracion Google: 0.14.0  

-Lo innovador de este proyecto fue el testing, en este código implementamos el testing unitario, mediante la herramienta Jest, de esta forma, para cada función  
que realizamos en javascript, corrimos pruebas verificando de manera automatica varios casos con distintas entradas y salidas esperadas, un ejemplo sencillo seria  
verificar que si "seteamos" un valor a un objeto, el get deberia dar exactamente ese valor.  
Para ello hicimos uso de las funciones test, acompañado de las funciones expect y los "matchers" como toBe y sus variantes.  
-Para comenzar, configuramos Jest en nuestro entorno de desarrollo utilizando Node Package Manager (NPM). La instalación y configuración iniciales fueron sencillas, permitiendo  
integrar Jest en nuestro flujo de trabajo sin problemas.  

-Al principio organizamos nuestras pruebas en un directorio específico **tests** que despues lo terminamos borrando y los pusismos todos donde estaban todos los archivos,  
seguimos las mejores prácticas para mantener el código limpio y estructurado. Lo que hicimos fue cada vez que ingresabamos al archivo .test una nueva funcion la  
verificabamos con el comando **npm run test** ahi nos salian las pruebas que habiamos hecho de una manera incorrecta y tambien en una tabla nos decian varios datos  
entre ellos uno muy importante que es la **coberura** que seria a cuanto codigo de tu archivo .js le estas haciendo un test de jest un ejemplo seria si tenes un if y un  
else vas a tener que hacer un caso de test para el if y otro para el else asi cubris todo el codigo porque el sistema va a entrar a uno o a otro.  

-Por otro lado usamos **npm run lint**, de la herramienta eslint, este comando nos mostraba los errores que tuvieramos en los archivos de js para verificar  
la calidad del codigo y garantizar una calidad estandar en el código javascript, busca errores de sintáxis y procura que el código cumpla con los  
estándares de escritura como las mayúsculas.  

## Interfaz de usuario
### Buenas prácticas  
-Fue importante para el trabajo valorar la legibilidad de texto y facil entendimiento de la página para usuarios nuevos, con ayuda de la herramienta wave, nos  
aseguramos de que en todo momento sea legible el contenido de la página, dicha herramienta verifica errores de html y de contraste (colores) entre otros pero los mas  
importantes fueron esos.  
Además, intentamos crear una interfaz amigable, creemos que la página no necesita de explicación para su uso y que cualquier usuario puede ser capaz de entender  
y darle el uso que intencionamos.  
-Creemos que una pagina accesible y facil de uar es fundamental para proporcionar una experiencia positiva a nuestros usuarios. se podria continuar mejorando  
si se sigue avanzando mas en el proyecto para garantizar que todos los usuarios puedan disfrutar de una experiencia inclusiva y agradable.  

### Usabilidad
Como mencionamos en el anterior punto, nos centramos en que sea una página sencilla de usar, sin previa explicación y para los usuarios a los que está  
dirigida. La interfaz contiene pocos elementos "clickeables" y un uso bastante lineal (primero ingresa monto, luego apuestas a su deseo y al final va a la seccion  
de historial) lo cual asegura que el usuario no se pierda entre funcionalidades y accesos a distintas secciones.  
Una buena práctica que utilizamos para garantizar que esto se cumpla fue el tener usuarios invitados para probar el código, tuvimos a familiares probando  
la página y jugando con las apuestas, de este modo se realiza una especie de testing de usuario, con la ventaja que no esta sesgado por los autores del código,  
a lo que nos referimos con esto es que por lo general, quien escribe el código suele ir a probar directamente funcionalidades que sabe que pueden fallar, cosa que  
un usuario común y ajeno a la programación no realiza. Consideramos esta práctica como altamente útil e imprescindible dado que un error en el uso por el usuario  
común es mucho más grave que muchos de los casos que probamos como programadores ya que etos afectan directamente a la experiencia de usuario y muchas veces al  
funcionamiento base del programa. Por ejemplo, si en el campo de monto se pueden agregar numeros negativos, es algo a arreglar, no obstante el usuario común raramente pondria  
numeros negativos si no es para hacer testing, por otro lado en cuanto a errores que el usuario ajeno al código encontraría, si el usuario quiere agregar dos apuestas y solo se  
agrega una, ese ya es un error grave y que afecta al funcionamiento de la página.  

### Accesibilidad  
Uno de nuestros objetivos a lo largo del proyecto fue que la pagina sea totalemte accesible con ayuda de la herramienta Wave (Web Accesibility Evaluation Tool) siempre llevamos a ser  
accesible cada seccion de la pagina cada vez que terminabamos una aprte de la apgina verificabamos que esa seccion fuera totalemte accesible, Por eso verificamos con pruebas a diferentes  
familiares que ellos vean bien las letras que puedan distinguirlas y que puedan usar la pgina correctamente sin ningun tipo de problema.  
Aprendimos que la accesibilidad on es un objetivo que se alcanza una solo vez sino todo tiempo duarante el transcurso del proyecto por ello despues de este proyecto y a lo largo de el  
adoptamos una mentalidad de mejora continua.  

## Codificación  
### Configuración de entorno de desarrollo  
**-->Usamos distintas herramientas:**  
-Npm y Nodejs: los utilizamos para gestionar los paquetes y dependencias que ibamos agregando al trabajo  
-Git y Github: lo utilizamos para el control de versiones para tener organizacion y colaboracion con los compañeros del proyecto  
-Jest: jest lo utilizamos para el testing unitario de todas las funciones de la seccion domain del trabajo.  
-Visual Studio Code: lo usamos para editar el codigo del proyecto ya que es la herramienta principal del proyecto y justamente es muy flexible tiene un muy buen soporte de extensiones  
-Eslint: fue usado para ver y quitar errores en js poara mantener la caldad del codigo y que siga un estandar.  
-Package.json: lo utilizamos para configurar de la manera que queriamos las dependencias y todo el entorno de trabajo.  

**-->Configuraciones de las herramientas:**  
-Npm y Nodejs: ejecutamos npm install o i para instalar todas las dependencias listadas en el package.json  
-Git y Github: lo que hicimos fue crear ramas para todos los puntos del trabajo como una rama para domain otra para interface y asi con todo ya que nos parecia un buen sistema de trabajo y  
nos hacia enteneder mas github utilizando muchisimos comandos de la herramienta siempre mantuvimos el proyecto actualizado en github para cuando el otro  
compañero viniera a trabajar ya tuviera la parte actualizada de el.  
-Jest: lo configuramos en el package.json con un script personalizado y el script necesario para usarlo y despues lo suabamos con **npm run test**  
-Visual Studio Code: en visual configuramos el server live para siempre ver la pagina como iba quedando a tiempo real y tambien teniamos unas pocas extensiones para  
colores de visual entre otras.  
-Eslint: Estaba todo configrado en un archivo **.Eslintrc.cjs** en ese archivo estaba toda la configurtracion de como deberia actuar Eslint en nuestro trabajo.  

### Estándares de codificación  
-Para las variables y funciones siempre en este trabajo y todos los que venimos haciedo utilizamos un estilo camelCase para que las variables sean mas  
legibles y a los compañeros se les haga mas facil leer el codigo  
-Utilizamos clases para dividir el codigo cada clse tiene susu funciones dentro que se pueden hacer de muchas formas y despues las utilizamos en el trabajo principal  
-Dividimos el trabajo en varios modulos y lo tuvimos asi todo el proyecto para si teniamos una buena organizacion y no habia confusiones y mejorabamos la reutilizacion del codigo  
-Cada archivo de la carpeta domain contenia un archvio con una clase y su **list** dividiendolas todas.  
-Tambien a cada funcion del main que son funciones mas complejas que las de una clase le poniamos comentarios dando una explicacion concisa de que hacia y  
comentando las partes del codigo de esa funcion.  
-Habia varios estandares que tuvimos en el desarollo del proyecto que nos los hacia cumplir la herramienta Eslint uno de ellos la longitud de las lineas para una mayor  
legibilidad y que no tengas que ir hacia la derecha con la barra.  
-Siempre en cada proyecto que hacemos duarante la carrera hacemos que el codigo este indentado pero tambvien en este caso si nos habia faltado alguna linea teniamos al  
herramineta Eslint para cumplir ese estandar de codificacion  
-Tambein por la parte de jest siempre para cada funcion de test le poniamos una descripcion clara y concisa para que se sepa para que es esa funcion, tambien siempre  
hicimos las funciones para una funcion en concreto para saber si habia algun error de que funcion era ese error.  
-Por otro lado siempre dejabamos un espacio despues de cada funcion para una mayor legibilidad del codigo y que no haya confusiones como que creer que la funcion  
siga porque esta el codigo todo conectado.  
-Por ultimo usamos ramas descriptivas para dada caracterstica del proyecto.  

### Buenas prácticas de OOP  
Entre varias de las buenas practicas de la programacion orientada a objetos, cumplimos con la fragmentación del código en funciones con usos conscisos, si queremos  
recuperar un valor, no hacemos la codificación correspondiente cada vez, simplemente llamamos a funciones que harán eso por nosotros invocandolas, de este modo  
acortamos el código y lo hacemos mas entendible.  
Cada valor que quisimos asignar a los objetos fue guardado dentro de los mismos mediante los setters y usamos listas dentro del constructor correspondiente.  
Por otra parte, aunque este programa no se encuentre online, nos aseguramos de cumplir con el uso correspondiente de la accesibilidad a las variables, hicimos de tipo privado cada   
constructor de los objetos para que no sean accesibles desde cualquier parte y solo se llamen cuando los invocamos, esto es sumamente importante en todo  
código de objetos, más cuando tenemos un programa donde es tan importante la seguridad y tener cuidado con la accesibilidad de los usuarios a variables que queremos ocultar.  

### Análisis estático de código  
Utilizamos eslint, esta herramienta trabaja sobre el código fuente buscando errores y posibles conflictos, favoreciendo la calidad del código y el cumplimiento de ciertos  
estándares personalizables, en nuestro caso, usamos los estandares por defecto ya que no tuvimos necesidad de alterarlos, el uso de eslint es importante para  
mantener el cumplimiento de reglas establecidas en todo el código y por todo compañero de equipo de trabajo.  
La herramienta se asegura de que el uso de sintáxis sea el adecuado y consistente durante todo el código. Aunque esto no parezca muy util, lo es, para todo proyecto  
de programación se deben seguir reglas establecidas. No es tan importante que reglas, si se usan mayúsculas para las variables o no, lo realmente imprescindible es  
que todo integrante del equipo de desarrollo siga las mismas reglas.  

## Test unitario  
### Buenas prácticas  
-Usamos en cada prueba una buena descripcion que decribiera sencillamente para que funcion iba esa funcion de test  
-Siempe cada funcion que haciamos de test era para una funcion sola ya que si hay algun error no sabriamos bin de que funcion es.  
-Siempre que terminabamos de hacer una funcion de test Corriamos las pruebas para ir teniendo todas las pruebas organizadas.  
-Se utilizaron expectativas y matchers adecuados para vertificar los resultados esperados de cada funcion. esto asegura que las pruebas sean concisas y claras  

### Informe de coberturaf  
La cobertura en el proyecto nos parecio fundamental ya que nos permitio medir que parte del codigo estaba siendo totalemnte probada mediante nuestros tests unitarios, siempre que  
agregabamos una funcion mirrabamos que este cubierto por los test pára asi tener una cobertura de 100% en el proyecto.  

**-->Resumen de cobertura**  
Archivo Apuesta.js:  
    Cobertura de lineas - 100%  
    Cobertura de funciones - 100%  
Archivo Apuestalist.js:  
    Cobertura de lineas - 100%  
    Cobertura de funciones - 100%  
Archivo Partido.js:  
    Cobertura de lineas - 100%  
    Cobertura de funciones - 100%  
Archivo Partidolist.js:  
    Cobertura de lineas - 100%  
    Cobertura de funciones - 100%  

-Al finalizar el proyecto tuvimos una cobertura del 100% esto es algo muy importante porque sabemos que todas las funciones de domain no tienen ningun fallo con repsecto al proyecto  
y que todas las funciones y métodos críticos están probados para comportarse según lo esperado en todas las circunstancias, ademas cada requisito funcional del proyecto ha sido validado y  verificado mediante pruebas unitarias.  
-Otra cosa que es muy buena de tener el 100% de cobertua de test es que si nosotros seguimos este proyecto si le agregamos mas cosas a la pagina se nos va hacer mas facil  
es identificar errores y corregir problemas potenciales y ademas facilita la mantenibilidad si lo hacemos mucho mas grande al proyecto.  

## Reflexión  
### Trabajo individual  
**-->Reflexion hecha por Santaigo Meizoso**  
-En cuanto al trabajo individual, nos enfocamos en nuestras areas mas fuertes y luego nos juntabamos para explicar los avances hasta el momento,  
mientras uno trabajaba en la interfaz y la creacion de elementos centrandose en la experiencia de usuario, el otro trabajaba en el uso de objetos y clases  
para el funcionamiento de la pagina.  
-Ambos coincidimos en que nuestro aprendizaje sobre el uso de git en la primera parte del proyecto nos facilitó el desarrollo del código, no tuvimos conflictos con  
comandos y pudimos trabajar remotamente y al mismo tiempo de manera óptima.  

**-->Reflexion hecha por Tomas Fugassa**  
-Esta parte del trabajo me gusto mas que la anterior la parte de codigo me gusto muchisismo como podemos reflejar lo que en el anterior obligaotrio pensamos y genramos ideas en este  
lo llevamosa a que se haga realidad ese proyecto y ver como funciona todo al final es una sensacion muy satisfactoria.  
-Sinceramente me encanto la parte del testing unitario verificar que cada funcon este funcionando correctamente y los datos que le esten entrando sean los que  
queremos, por otro lado aprendi muchas configuracion de las distintas dependencias que fuimos viendo y usando tambien lo fundamental que es el archivo package.json y  
lo importante que es hacer informes sobre todo el proyecto  
aunque no sea una parte que me guste mucho.  
-Creo que elegimos una idea linda de hacer y que aparte tenia mucho probabilidad que eso me encanta, Hicimos un buen trabajo al final con mi compañero siento que se  
hizo algo largo este segundo obligatorio y que se necesitaba mucho tiempo para hacer las cosas ya que aparte tuvimos 4 obligatorios mas para hacer.  
-Fue una parte muy buena del proyecto, muy enriquecedora, con un monto de aprendisajes, trabajo en equipo y sobre todo para mejorar como licenciados en sistemas.  
-Tuvimos varios momentos que tuvimos que pensar la mejor forma para hacer una funcion entre los 2 y siempre teniendo en cuenta el tiempo que teniamos para entregar  
el trabajo, esa parte del trabajo nos enseño a siempre estar organizados y que siempre es bueno pensar en equipo.  

### Técnicas aplicadas y aprendizajes  
En cuanto a las tecnicas aplicadas, trabajamos con un repositorio central en gitHub, haciendo uso de los comandos basicos de git como branch, switch, add,  
commit y/o  push/pull. Nos aseguramos de dividir las areas de trabajo para evitar conflictos de merge, teniendo cada uno un objetivo definido y claro en el proyecto.  
En cuanto aprendizajes, destacamos la profundización en los lenguajes ya conocidos, tuvimos que resolver conflictos y sobrepasar obstáculos que nos llevaron  
a adquirir nuevas herramientas para el futuro, el uso de clases y objetos fue clave para manejar el código y hacerlo más sencillo.  
En cuanto a la interfaz, hicimos uso de bootstrap, herramienta totalmente nueva para ambos, nos hizo más fácil la implementación de elementos visuales que de otro  
modo serían más difíciles de realizar.  
También estuvimos abiertos a usar herramientas nuevas para realizar un mejor trabajo, por ejemplo el uso de coolors.co que nos brinda una paleta de colores  
para seguir cierta estética.  
Tambien el uso de google fonts que ya lo conociamos de usarlo en otros proyectos dentro y fuera de la facultad, google fonts nos brindo unas fuentes que son muy buenas y llevo a que la  
pagina se vea mas coqueta.
Aprendimos a testear funciones con jest una dependecia de npm o un framework de testing, aprendimos que es fundamental y muy necesario testear las diferentes  
funciones de tu trabajo par verificar que le esten llegando los datos que el developer quiere.  
Luego tambien aprendimos a llevar estandares de codificacion con lint y lo importantes que es tenerlos en un proyecto y que cada integrante del grupo lo utilice.  
Adquirimos mas conocimiento sobre todos los atributos de la programcion, en mi caso aprendi mas osbre css que no sabia tanto pero mi compañero si y de  
eso se trato un gran parte del proyecto que lo que uno sabia se lo transimitia al otro y lo que el otro sabia se la daba el, fue un proyecto en  
conjunto aprendimos que en grupo a veces es mas facil hacer las cosas siempre dependiendo del grupo y que trabajar con un mismo objetivo es fundamental.  
