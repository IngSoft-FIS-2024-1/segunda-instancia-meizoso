# Informe de testing 
Proyecto asignado: [https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-patri-brum.git]

## Test de sistema
### Diseño de casos de prueba
-->Alcance1  
**Nombre de Caso de Prueba:** -->Creación de usuarios  

**-Descripcion:** suponemos que podremos crear nuestro usuario sin errores o fallos en el sistema y que el sisitema verifique los distintos datos que pondremos  
si son correctos o si no podemos ingresar ese tipo de dato o en ese intervalo.  

[comment:] <> (En este punto hablamos de como se ve la pagina antes de ejecutar caso de prueba)  
**-Precondiciones:** El sistema tiene distintos campo a completar como Mail, Contraseña, Fecha de Nacimiento, Nombre de Usuario, otro campo para repetir la contraseña y Telefono; todos estos  campos estan vacios y el la pagina en esa parte no muestra nada mas interesante.  

**Pasos a Seguir:**  
-->Verificar Campos Requeridos:  
-Paso 1.1: Vamos a verificar que campos son requeridos y cuales no y testear esos campos en conjunto con otros.  
-Paso 1.2: intentar enviar el formulario con los campos requeridos vacios  
-->Verificar Tipos de Datos:
-Paso 2.1: Introducir datos validos y invalidos para luego verificar y validarlos.  
-Paso 2.2: Verificamos que tipo de datos debe entrar en cada input y probaremos distintos tipos de datos, intervalos, casos bordes  
--Repeticion de Contraseña:
-Paso 3.1: Vimos que los compañeros agregaron un input para repetir la contraseña tambien testearemos de forma exhaustiva ese campo, validando si salta  
    algun error si ponemos contraseñas diferentes  
-Paso 3.2: verificar si ponemos las contraseñas iguales de distintas formas se valida correctamente y no salta ningun error    
-Paso 4: clickearemos en el boton para ver si se agrega correctamente el usuario  
-Paso 5: Testearemos si los usuarios que se crean se proyectan en la tabla de integrantes correctamente.  

**Prioridad:** creemos que este punto tendria una prioridad altisima porque sin esta parte de la pagina  
no se podria proseguir en ninguna otroa parte de la pagina.  

**Datos de Entrada:** Probaremos muchos datos de entrada distintos y relacionando inputs entre si para detectar errores o mejoras en el proyecto, los datos de entrada los agregamos en la  
 ejecucion de los casos de prueba  

**Resultado esperado:** que se cree el usuario correctamente con todos sus datos validos, los campos deben ser validados correctamente, mostrando errores adecuados para datos inválidos y  
El nuevo usuario debe aparecer en la tabla.  

-->Alcance 2
**Nombre de Caso de Prueba:** -->Creación del proyecto 

**-Descripcion:** Suponemos que creara un proyecto con todos sus datos validos al clickear en el boton crear Proyecto

**-Precondiciones:** Sin hacer los testings a esta seccion de la pagina hay inputs vacios como Nombre del Proyecto, descripcion, presupuesto, fecha Limite y una tabla  
de integrantes  

**Pasos a Seguir:**
-->Verificar campos Requeridos:  
Paso 1.1: verifico si hay campos obligaotorios  
Paso 1.2: Verifico si esos campo requeridos de verdad estan siendo requeridos para validar el formulario  
-->Validar inputs de formulario:  
Paso 2.1: Veo que tipo de dato admite cada campo  
Paso 2.2: Verifico que para tipos de datos no admititdos en esos campos haya un mensaje de error con la descripcion de como hacer para llegar a validar correctamente el formulario   
-->Verificacion de boton  
Paso 3.1: Verifico que el boton cree el proyecto sin datos incorrectos y verificando que se agregue a la tabla de proyectos.  

**Prioridad:** le damos un prioridad alta a esta seccion porque sin hacer el formulario de esta secccion no podrias hacer la parte sigueinte de la pagina y nos parece  
un punto fundamental ya que es una pagina dedicada a la gestion de proyectos. 

**Datos de Entrada:** verificariamos con muchos datos de entrada que se valide correctamente el formulario de la creacion de proyectos, los datos de entrada los agregamos en la  
 ejecucion de los casos de prueba  

**Resultado esperado:** esperamos que al clickear el boton se cree el proyectos y que podamos utilizar ese proyecto en otra seccion de la pagina para hacer otra cosa

-->Alcance 3  
**Nombre de Caso de Prueba:** -->Creación y división de tareas  

**-Descripcion:** suponemos que esta seccion de la pagina crea un tarea validando correctamente cada input que tiene tambien las tablas que tiene sabe bien que objetos tiene y de que tipo  
para que al validar no haya ningun error y po ultimo que los botones funcionen correctamente y validen el formulario.  

**-Precondiciones:** sin haer testing en esta seccion de la pagina se presentan varios inputs, tablas y botones; los inputs estan blancos y sin datos y las tablas tambien  

**Pasos a Seguir:**  
-->Verificar si hay campos requeridos o obligaotrios  
Paso 1.1: verifico si hay campos obligaotorios  
Paso 1.2: Verifico si esos campo requeridos de verdad estan siendo requeridos para validar el formulario  
-->Validar inputs de formulario crear Tabla:  
Paso 2.1: Veo que tipo de dato admite cada campo  
Paso 2.2: Verifico que para tipos de datos no admititdos en esos campos haya un mensaje de error con la descripcion de como hacer para llegar a validar correctamente el formulario   
-->Verificacion de boton crear Tarea
Paso 3.1: Verifico que el boton cree el proyecto sin datos incorrectos y verificando que se agregue a la tabla de proyectos
-->Verificacion de boton buscar proyecto
Paso 4.1: ver forma de buscar el proyecto que quiero y ver si funciona correctamente  

**Prioridad:** prioridad alta ya que es una seccion donde se crea una tarea para un proyecto en concreto tambien proque se va a utilizar en otras secciones y  
sin ella no podria funcionar otras secciones  

**Datos de Entrada:** verificamos con varios dato para abarcar todo lo que queremos verificar y poder ver errores y mejorar el proyecto, los datos de entrada los agregamos en la  
 ejecucion de los casos de prueba  

**Resultado esperado:** Que se cree correctamente una tarea para el proyecto de la tabla y los in

-->Alcance 4
**Nombre de Caso de Prueba:** -->Visualización de progreso  

**-Descripcion:** Esta seccion ve el progreso de trabajo y presupuesto de cada proyecto y tambien se puede poner que tareas fueron realizadas de cada proyecto y el presupuesto restante al haber  
realizado una tarea 

**-Precondiciones:** En esta seccion de la pagina se ven varias tablas que muestran datos de los formularios anteriores de la pagina todas las tablas sin nada precargado y  
ademas un input que muestra el presupuesto del proyecto.

**Pasos a Seguir:**  
-->verificar que las tablas muestren los datos correspondientes  
paso 1.1: Cada vez que agrego o un usuario o un proyecto o una tarea verifico que se este agregando a la tabla correspodniente y veo si hay algun error  
-->Verifico que el presupuesto se reste del proyecto seleccionado correctamente  
Paso 2.1: Verifico que tipo de datos admite el input del presupuesto  
Paso 2.2: testeo para ver si agregaron errores para datos que no admite el campo  
Paso 2.3: Verificar que se reste el presupuesto de cada proyecto con cada tarea realizada  
-->Botones de Buscar Proyecto y Tareas Realizadas  
Paso 2.2: Verificar que las actividades que pongas que fueron realizadas se agreguen a la tabla de actividades realizadas sin errores  
Paso 2.1: Verificar que las actividades que salen en en la tabla son del proyecto que esta en la tabla de proyectos  

**Prioridad:** Prioridad Alta ya que sirve para gestionar cada proyecto y poder realizar cosas dentro del proyecto y es una seccion de la pagina que hace que cada  
objeto que se creo se relacione con otros  

**Datos de Entrada:** vamos a testear con varios datos de entrada para abordar bastantes casos de prueba, los datos de entrada los agregamos en la  
 ejecucion de los casos de prueba  

**Resultado esperado:** lo que esperamos es poder seleccionar los proyectos que queramos y poder asignarle tareas que fueron relaizadas a cada proyecto que se muestren correctamente las  actividades realizadas sin errores y mostrando el presupuesto restante del proyecto seleccionado  

[comment:] <> (este punto es mencionado en la tabla que se nos dio)  
## Definición de ambientes de testing
Testing  
-->Tomas Fugassa:  
- Pc de escritorio  
- Sistema operativo: Windows  
- con acceso a todo el proyecto  
- utlizando el navegador google  
- la computadora tiene antivirus  

-->Santiago Meizoso  
- PC de escritorio
- Sistema operativo: Linux Mint 21.3 Cinnamon
- acceso total al proyecto
- Navegador firefox 
- Sin antivirus

### Ejecución de casos de prueba
**-->Seccion Crear Usuario**  
| Mail | Nombre Usuario | Contraseña | Fecha Nacimiento | Repetir Contraseña | Teléfono | Resultado |  
| :--- | :------------: | :--------: | :--------------: | :----------------: | :------: | :-------: |  
| 256  | 232            | .          | 06/07/2024       | ,                  | tomas    | Pop Up formato de mail invalido |  
| 256@gmail.com  | 232            | .          | 06/07/2024       | ,                  | tomas    | Pop Up la fecha no puede ser en el futuro |  
| ´{}@gmail.com  | 232            | .          | 20/06/2024       | ,                  | tomas    | Pop Up numero de telefono invalido debe tener 9 digitos |  
| ,-@gmail.com  | 232            | .          | 20/06/2024       | ,                  | tomas3457    | Pop Up numero de telefono invalido debe tener 9 digitos |  
| ,-@juk.net  | 232            | .          | 20/06/2024       | ,                  | 999087654    | Pop Up las contraseñas no son iguales |  
| ,-@gmail.com  | 232            | ?''          | 20/06/2024       | ?``                 | 999087654    | Pop Up las contraseñas no son iguales |  
| emilio@gmail.com  | 232            | Tom          | 20/06/2024       | tom                 | 999087654    | Pop Up las contraseñas no son iguales |  
| ?''@gmail.com  | 232            | ?''          | 20/06/2024       | ?``                 | 999087654    | Pop Up las contraseñas no son iguales |  
| ?''@hj.com  | º-sant/*          | ttyyu          | 02/02/1847       | ttyyu                 | 453456456    | Crea el Usuario |  
|   | {}``?º        | .,         | 26/12/1869       | .,               | 453456456    | Pop Up completa todos los campos |  
| jhy?¡¡¡¡¡{}¨*@""false.º!gm  | (if()).toExpect().toBe{}        | .,         | 26/12/1869       | .,               | 2222222222    | Crea El Usuario |  
| ytio@julio23.silvio  | (if()).toExpect().toBe{}        | Sulivan        | 25/12/0890       | Sulivan              | 763091256    | Crea El Usuario |  
|   ,-@56§.net   | º-sant/*       |    ç     | 09/12/1890       |        ç       | 763091256    | Crea El Usuario |  
|   ,-@56§.net   | º-sant/*       |    ç     | 09/12/1890       |        ç       | 763091256    | El mail ya esta registrado |  
|   ,-@56§.nep   | º-sant/*       |    ç     | 09/12/1890       |        ç       | 763091256    | No funciona el boton |  
| ffgdfgd@gmail.com  | (if)""{}        | gmeate56         | 26/12/1869       | gmeate56               | 678235489    | Crea El Usuario |  
| tomas@gh.co  | tomas        | -         | 02/11/2021       | -               | 094511293    | Crea El Usuario |  
| ddfgdfg@jh.by  | tomas        | -         | 02/11/2021       | -               | 094511293    | No funciona el boton |  

**-->Seccion Crear Proyecto**  
| Nombre Proyecto | Fecha limite | descripcion | Presupuesto | Tabla Integrantes | Resultado |  
| :-------------: | :----------: | :---------: | :---------: | :---------------: | :-------: |  
| toExpect().toBe{} | 05/04/1245 | .,-- | -23 | Sin seleccionar | Pop Up completa todos los campos |  
| toExpect().toBe{} | 05/04/1245 | .,-- | -23 | (if()).toExpect().toBe{} | Se crea el proyecto |  
| ´'12 | 06/05/6000 | jytmyui | 01 | 2 | Se crea el proyecto |  
| ´'12 | 06/05/6000 | jytmyui | 0.01 | Seleccionando | Error |  
| ´'123 | 06/05/3250 | proyecto 123 | 0.01 | º-sant/*, º-sant/* | Se crea Proyecto |  
| p☺▬○ | 06/05/3250 | proyecto 123 | -0.01 | 2 | Se crea Proyecto |  
| ''? | 06/12/2025 | proyecto flow | 2500 | (if)"{} | Se crea Proyecto |  

**-->seccion Crear Tarea**  
| Nombre Proyecto | Fecha limite | descripcion | Presupuesto | Tabla Integrantes | Proyecto | Resultado |  
| :-------------: | :----------: | :---------: | :---------: | :---------------: | :------: | :-------: |  
| ''?.forEch45 | 07/05/3250 | .,--45""34 | -45 | Sin seleccionar | p☺▬○ | Pop Up fecha debe ser menor o igual que la fecha limite del proyecto |  
| fugmei | 20/05/1870 | gmail com | ++ | 2 | ´'123 | Pop Up complete todos los campos |  
| fugmei | 20/05/1870 | gmail com | 250 | 2, º-sant/* | ´'123 | Pop Up complete todos los campos |  
| saltolar | 20/07/2024 | gmail.com | 250 | (if()).toExpect().toBe{} | toExpect().toBe{} | Tarea Creada |  
| saltolar | 23/07/1244 | gmail.com | -22 | (if()).toExpect().toBe{} | toExpect().toBe{} | Pop Up completar todos los campos |  
| uruburru | 23/07/1244 | tarea proyecto | 22 | (if()).toExpect().toBe{} | toExpect().toBe{} | Pop Up completar todos los campos |  
| uruguay | 05/04/3250 | esuatini | -22 | (if()).toExpect().toBe{} | (if()).toExpect().toBe{} | Crea La Tarea |  
| canada | 05/04/2025 | bolicjulo | -20 | (if)"{} | "? | Crea La Tarea |  
| dfgdfg | 31/04/3245 | 3453 | 20 | 2, (if)"{} | p☺▬○ | Pop Up completa todos los campos |  

**-->Seccion Progreso** 
| Seleccionar Proyecto | Actividades por Realizar | Actividades Realizadas | Presupuesto Restante | Presupuesto Restante despues de Ejecutar | Barra Progreso | Resultado |  
| :------------------: | :----------------------: | :--------------------: | :------------------: | :--------------------------------------: | :------------: | :-------: |  
| "? | canada | canada | 2230 | 2230 | 50% | Ejecuta |  
| p☺▬○ | ''?.forEch45 | ''?.forEch45 | 66.99 | 66.99 | 50% | Ejecuta |  
| "? | saltolar | canada, saltolar | 2230 | 2230 | 100% | Ejecuta |  
| p☺▬○ | uruguay | ''?.forEch45, uruguay | 66.99 | 66.99 | 100% | Ejecuta |  

### Sesiones de pruebas exploratorias  
**-->Sesion De Prueba Exploratoria Hecha Por Tomas Fugassa**  

### **Explicacion de trabajo en esta prueba:**  
-Lo que hice en esta prueba es con los datos que ya tenia y algnos mas para ver mas a fondo probe las distintas funcionalidades de la pagina como sus formularios con sus inputs y tablas todo  
esto para lograr detectar errores, comportaminetos que tiene la pagina que el equipo capaz que no queria que sea asi y mejoras que se le puede agregar.  
-Esta es una prueba exploratoria de caja negra y por eso voy a evalular la pagina sin conocer nada de la implmentacion del proyecto.  

### **Duracion de la sesion:**  
20 minutos  

### **Objetivos de la sesion:**  
El objetivo seria evaluar totalemte la funcionalidad de la pagina osea la seccion de creacion de usarios, proyectos, tareas y progreso, tambien descubrir comportamientos  
inesperados, errores en el proyecto y por ultimo detectar mejoras en la validacion de campos, los mensajes de error, las tablas y el estilo de la pagina  

### **Resultados Generales:**
**-->Seccion Crear Usuario**
-Detecte al hacer la sesion exploratoria 4 errores fucionales o comportamiento inesperados con los campos del formulario, falta cubrir errores que puede  
tener el usuario al poner el mail, tambien el otro error rompe la pagina deja de funcionar el boton y esto es un error que hay que solucionarlo rapidamente.    
-Por otro lado hubieron funciones bien hechas y muy bien cubiertas para lograr el mejor funcionamiento de la pagina.  
-Por ultimo detecte lugares que puede haber una mejora para lograr que la pagina evite errores y mayor accesibilidad a ella.  

**-->Seccion Crear Proyecto**  
-En esta seccion encontre un error al agregar 2 proyectos con el mismo nombre y tambien encontre un error grave que puede dar lugar a fallas a nivel funcional en la pagina que seria  
poder poner montos en el presupuesto negativos por este erorr puede ser que varias funcionalidades de ams adelante en la pagina no funcionasen.  
-Por ultimo detecte que faltan varios mensajes para que el usuario se sienta mas guiado y no se pierda al gestionar su proyecto.  

**-->Seccion Crear Tarea**  
-En esta seccion fue la que encontre mas errores uno de ellos no sabia ni porque no funcionaba el boton simplemente no podia hacer nada y no podia seguir gestionando mi proyecto, por otro  
lado otra vez el error de dejar poner presupuestos menores a 0, tambien comportamientos inesperados como el de si queres agregar una tarea con un presupuesto ms alto que el  
presupuesto del proyecto salta un mensaje que complete todo los campos y esto me parece un error gravisimo porque me quedo sin saber que hacer gestionando mi proyecto y  
por ultimo deje algunas mejoras para que el proyecto sea mas accesible y mejore un poco.  

**-->Seccion Progreso**  
-->Esta seccion estaba mucho mejor hecha que la anterirores y solo detecte un comportamiento inesperado o un error el formato de los elementos de la pagina, Tambien me gusto  
mucho una funcionalidad que le agregaron que seria la de una barra de progreso.  

### **Informe de Resultados de la prueba:**  
**-->Seccion Crear Usuario**  
*Errores o comportamientos inesperados:*  
--> Si intentas crear un usuario con el mismo nombre de usaurio no funciona el boton ni salta ninguna alerta y como usuario no sabes que hacer  
--> Al campo mail le podes agregar cualquier cosa siempre y le agregues un @ y un . despues, entonces esto deja que le puedas poner cualquier dato en vez de "gmail o hotmail" y  
lo mismo pasa con el .com 
--> con el campo nombre de usuaro pasa lo mismo que en el punto anterior si pones dos nombres de usaurio iguales deja de funcionar el boton
-->Un comportamineto inesperado es que en la fecha se puede agregar usuario con una edad muy por encima de la edad a la que llega un humano a vivir o a trabajar, ejemplo: 04/09/1280

*Funcionalidades que me parecieron muy bien hechas:*
--> Me gusto como hcieron la parte de la fecha ya que se ahorran mucho trabajo de validacion y el formato que tiene es muy bueno y intuitivo.  
--> La verificacion del campo Telefono los mensajes de excepciones estan bien explicados  
--> El Campo Contraseña verifica correctamente que esten iguales sin ningun error.  

*Mejoras:*  
--> Estaria bueno que le agreguen un foramto para el campo de nombre de usuario para que no quede tan feo en las tablas y se puedan ver bien, ejemplo: º`´+-?.++`.  
--> En el campo de contraseña estaria bueno que le agregaran un formato que tiene que tener obligatoriamente.  

**-->Seccion Crear Proyecto**  
*Errores o comportamientos inesperados:*  
-->Excepcion cuando se ingresan 2 nombres de proyectos iguales sin importar ningun campo mas, el boton deja de funcionar no agrega el proyecto o salta un menaje de error  
-->Se puede Agregar un proyecto con presupuesto menor a 0 esto para mi es un error porque un presupuesto significa una estimacion de los gastos a futuro, que el proyecto tenga presupuesto  
negativo no es coherente con la mayoria de modelos financieros siempre se empieza teniendo algo de presupuesto en la mayoria de empresas o proyectos, tambien un presupuesto financiero negativo  podria indicar una deuda pero si dejan pasar ese dato por eso tendrian que haber hecho una parte para aumentar el monto ya que no hay marcha atras cuando el  
presupuesto esta en un valor 0 o menor.  

*Funcionalidades que me parecieron muy bien hechas:*  
-->el campo de fecha me gusta como lo hicieron al igual que en la seccion de crear usuario es un formato que queda mejor, es mas facil de poner la fecha y da lugar a  
no hacer tanta validacion de datos  

*Mejoras:*  
-->Se podria agregar mas mensajes de error para que el usuario no se quede sin saber que esta pasando.  

**-->Seccion Crear Tarea**  
*Errores o comportamientos inesperados:*  
-->Se puede agregar una tarea con presupuesto menor a 0 esto puede dar lugar a fallos en la pagina y no es coherente con la gran mayoria de modelos financieros de negocios que existen  
siempre se tiene un presupuesto mayor a 0  
-->tambien detecte un error con la tabla y el campo que podes elegir el proyecto, lo que pasa es que si vos en el input pones un proyecto, clickeas en el boton de buscar  
y despues cambias en el input el proyecto sin apretar el boton la tarea se agrega al proyecto que pusiste por ultimo en el einput sin apretar el boton de buscar esto puede  
dar lugar a errores y que el usuario mismo se mezcle y no sepa bien adonde esta agregando cada cosa y termine gestionando mal su propio proyecto.  
-->tambien falta agregar mensajes de errores para que el usuario vaya guiandose por ellos sin los mensajes de errores el usuario no sabe bien que esta pasando en la pagina.  
-->cree una tarea y al agregar otra dejo de funcionar el boton no podia agregar ninguna otra tarea aun cambiandole los datos en los campos, no se podia seguir utilizando la pagina.  
-->cree una tarea para el mismo proyecto o otro diferente con el mismo nombre de otra que ya habia creado y el boton no funciona o no aparece un mensaje.  
-->detecte un comportamiento inesperado si queres agregar una tarea con un presupuesto mas alto que el del proyecto salta un mensaje que complete todos los campos.  

*Funcionalidades bien hechas:*  
-->como ya lo mencone la estructura de campo de fecha es una muy buena opcion para agregar la fecha.  

*Mejoras:*  
--> Se podrian agregar mas mensajes cuando el usuario comete algun erorr con el ingreso de datos en los campos para que el usuario no se pierda al gestionar su proyecto  
--> La parte de el input del proyecto y de la tabla se podria hacer de otra manera sin boton para evitar errores y comportaminetos no esperados.  

**-->Seccion Progreso**  
*Errores o comportamientos inesperados:*  
-->Detecte solamente un error de estructuracion que seria con el input de "seleccionar el proyecto" y la tabla de tareas lo que pasa es que seleccionas un proyecto con el  
 boton y podes cambiarlo de vuelta sin clickear el boton y no se bien que pasa pero como que todo se mezcla y el usuario no termina de saber bien en que  
 proyecto se termino haciendo esa tarea  

*Funcionalidades bien hechas:*  
-->El presupuesto se resta bien cuando el presupuesto de la tarea es mayor a 0 y el presupuesto restante es mayor que el de esa tarea. 
-->Esta muy bien agregado la barra de progreso de las tareas para una visualizacion mas facil del progreso total de las tareas del proyecto y aparte funciona excelente.  

*Mejoras:*  
-->Podrian cambiar la forma en que aparecen las tareas para cada proyecto para evitar que el usuario se mezqle como ya dije antes. 

**Conclusion Final:**
-Mi conculusion final de este proyecto seria que es un buen proyecto pero tiene muchisimos errores, falto validar muchas cosas de cada campo y varios errores graves que puede  
ser que por esos errores no funcionen varias cosas de la pagina, sin lugar a duda es un proyecto que va bien encaminado pero se deja muchas coasas en ese  
camino que necesitan arreglarse y tambien mejorarse para que el usuario este mas comodo, no se pierda y siempre este guiado; con eso se va a lograr una pagina  
mejor diseñada con funcionalidades mas complejas y mas satisfaccion para los usuarios.  

**Mejoras en General para la pagina**
-->Podrian agregarle un boton borrar para la tabla de integrantes de la seccion de proyectos porque el usuario se puede equivocar en algun dato al crearlo y estaria  
bueno le agregaria otro funcionalidad y mas complejidad. 
-->Podrian agregarle un boton borrar para la tabla de tareas en la seccion de progreso por el tema que si el usuario se quivoca creando una tarea la podria borrar y no habria ningun problema  

**-->Sesion De Prueba Exploratoria Hecha Por Santiago Meizoso**  
### **Explicacion de trabajo en esta prueba:**  
-Realicé una prueba exploratoria centrandome en la variedad de inputs que ofrece, probando combinaciones de datos, omición de valores y caracteres que no   
deberían ser aceptados en los formularios de la interfaz.  

### **Duracion de la sesion:**  
35 minutos

### **Objetivos de la sesion:**  
Evalué este proyecto con el fin de detectar errores y brindar otro punto de vista para los autores del código. Tomé como prioridad la experiencia de usuario  
aunque tambien me enfoque en errores no tan fundamentales que pueden influir en la calidad de código.  
Primero tomé un borrador donde escribí las distintas combinaciones de inputs que podría insertar en el programa (ingresar contraseña vacia, ingresar  
contraseña distinta a la confirmación, telefono en letras, entre otros). También corrí la herramienta WAVE que evalúa errores de contraste con respecto a los colores  y legibilidad del texto.  

### **Resultados Generales:**

**-->Seccion de inicio**
Lo primero que hice al entrar a la página fue abrir la consola y buscar conflictos de código que se reflejan en la misma, encontre un par de alertas y un error  
al intentar cargar un módulo del HTML.  
Considero que la interfaz no es muy amigable para usuarios nuevos aunque entendible. Una mejora que propongo es agregar un titulo.  
Un punto a destacar es el lograr tener todas las secciones en una misma página, toda la interfaz es vista en un a misma secciòn lo que facilita el uso  
y permite cambiar varios campos de texto a la vez.  
  
**-->Seccion Crear Usuario**
En esta sección econtre fallas al agregar valores a los campos, no se manejaron casos limites como en la fecha donde se puede agregar cualquier valor ni se  
especificò un largo minimo para la contraseña lo cual no es una buena practica.  
Tampoco se maneja el caso donde el nombre de usuario sea vacio, algo que traería problemas si se olvida de ingresar nombre.  
Como algo que excede el funcionamiento en sí, no creo que los campos de contraseña deban existir, se trata de una página de gestión de proyectos donde se da a  
entender que quien la maneja es un gerente o un lider de grupo, en este caso, el lider del grupo deberia ingresar su propia contraseña pero no la contraseña de los  
demás ya que esto no tiene sentido. Este aspecto resulta en algo tedioso para el usuario, ya que obligatoriamente debe llenar un campo que no tiene utilidad  
sumando tiempo frente a la página.  
  
**-->Seccion Crear Proyecto**  
En esta sección encontré un problema con el manejo de proyectos y campos repetidos, en caso de agregar un proyecto repetido este no debería agregarse (tal como  
se realizó) pero además debería mostrar alguna alerta o mensaje de error para guiar al usuario, es posible que el usuario confunda un dato, crea que agregó  
un proyecto pero luego no lo encuentre en la lista de proyectos, lo que dificultaría el trabajo y podria llevar a problemas serios para un equipo profesional.  
Considero también que se debería poder manejar el presupuesto del proyecto una vez creado, es decir, si comenzamos un proyecto y en su avance conseguimos más  
presupuesto para el mismo se debería poder aumentar para llevar un mejor registro de la economía.
Una mejora que puedo proponer sería agregar los botones de editar y borrar, si un campo cambia de valor como el presupuesto, un integrante ya no forma parte  
del grupo o se quiere borrar un proyecto, creo que es necesario brindar las herramientas correspondientes.  
  
**-->Seccion Crear Tarea**  
Encontré severos errores en el manejo de las tareas y sobretodo de los botones, al crear varias tareas para mismos proyectos los botones quedaban inutilizables.  
Esto trae muchos conflictos en la gestión de proyectos, a mi entender el uso de esta página es atacar la necesidad de agregar muchos proyectos y tareas en simultaneo, desde la gerencia de equipos o mismo desde equipos con divisiones de trabajo, no obstante, esto no es permitido por los errores de la página y carencia  
de alertas que muestren donde pudiste haber cometido un error o como deberías manejar el ingreso de valores.  
Sugiero el agregado de alerts y/o mensajes emergentes de los campos de texto facilmente agregables con bootstrap o css y agregar los conflictos con el manejo  
de informacion simultanea.

**-->Seccion Progreso**   
No encontrè errores de funcionalidad además del mencionado por mi compañero donde al cambiar los valores de proyecto seleccionado, considero que la interfaz es la  
adecuada y los campos y botones realizan lo que el usuario entiende que hacen.  
  
**Revision final:**  
**Informe para interfaz**  
-Ingresar un titulo o texto que guie al usuario en el uso de la página.   

**Informe para seccion usuario**  
-Revisar los conflictos hallados en el test y realizar las condiciones correspondientes en javaScript.  
-Eliminar o justificar campos de contraseña sin aparente funcionalidad.  
-En caso de que la contraseña sea necesaria, definir limites de caracteres tanto minimo como máximo, y si se cree necesario agregar restricciones de caracteres tales  
como agregar un numero como minimo o un caracter especial.
  
**Informe para secion proyecto**  
-Manejar el uso de la informacion repetida.  
-Agregar alertas a errores del usuario como inputs repetidos o no validos.  
-Agregar botones para realizar cambios en los objetos ya creados.  
  
**Informe para secion tarea**  
-Solucionar los errores con los botones inutilizables.  
-Crear alerts correspondientes a los problemas para guiar al usuario.  
-Revisar los problemas de informaciòn repetida.    

**Informe para seccion progreso**  
-Nada que agregar

**Conclusion Final:**  
Desde mi punto de vista, revisando los puntos mencionados y realizando los cambios pertinentes, este proyecto está bien realizado, los errores que encontré  
son errores comunes que pueden ser solucionados facilmente desde que se tuvieron en cuenta.  
El mayor problema al que me enfrenté fue la poca cantidad de mensajes de ayuda para los campos solicitados, creo que se debería guiar mas al usuario en el uso  
de la página ya que este mismo no tiene por que saber como funciona y que realiza.  
Un consejo para este proyecto y los que realicen mas adelante es que presten su página a un familiar o conocido ajeno a la programación, este probará los campos como  
lo haría un usuario común y sería de mucha ayuda para encontrar esos errores que el programador, sesgado por ser el creador no encuentre.  
A menudo pasamos por alto errores comunes como agregar fechas futuras o campos vaciós pero no se deberían dejar de lado errores mas fundamentales como que  
el usuario entienda realmente lo que la página realiza, como debe usarla y que debe hacer en caso de que ingrese algo mal.  
Revisando estos problemas e implementando las soluciones el proyecto quedaría muy bien realizado y sería util para quienes lo quieran usar, tanto usuarios nuevos  
en la página como usuarios recurrentes en la misma.  

## Reporte de issues  
### Buenas prácticas
**-->Issue de Error**  
-Lo que hicimos fue usar las secciones que ya te daba github que se entienden y le muestran informacion importante y de ayuda al developer pero tambien le agregamos algunas  
secciones para completar cada issue y agregarle algo mas de informacion siempre agregamos capturas de patalla porque creemos que da muchisima informacion fundamental  
al developer tambien los pasos apra llegar al error o al comportamiento inesperado que nos aprece una muy buena opcion ya qe el developer puede  
empezar a seguir esos pasaos y lograr ver mas rapdio el error y resolverlo y tambien siempre intentabamos ponerle un titulo que sea  
descriptivo de cada problema asi al developer se le hace mas facil saber cual error habla sobre que cuando los este intentando resolver.  

**-->Issue de Mejora**  
-Lo que hicimos fue poner un titulo descriptivo y conciso como en los issue de errores para que el developer sepa de que se va hablar en ese issue tambien le agregamos 3 secciones que serian  
la descripcion de la posible mejora, notas de una posible solucion y notas adicionales.  
-En la descripcion de la psoible mejora intentabamos describir la mejora de la mejor forma posible para que le quedara claro al developer  
-En las notas de la posible solucion le agregabmaos info sobre distintos formatos para la solucion asi ellos lo podian socuionar as rapido el error y no  
tenian que andar pensando en indeas para la solucion  
-En las notas Adiconales le agrabamos informacion para los developer para que no se olviden de cosas y les dejabamos herramientas que pueden usar para solucionar el error y tambien tips para  
hacerlo de la mejor forma.  

### Clasificación
-->**Issue** problema en la seccion progreso con la tabla de tareas y el campo de proyectos:  
-Tipo de Issue: Error o comportamiento inesperado  

-Prioridad: **Alta**, ya que el el sistema se mezcla y termina poniendo datos donde no tiene que poner y el usuario termina confundiendose con que area esta  
asignada para cada proyecto y si se realizo o no.  

Estado: Abierta  

-->**Issue** Comportamiento inesperado con presupuesto:  
-Tipo de Issue: Error o comportamiento inesperado  

-Prioridad: **Media**, ya que no es un error que rompa el sistema, pero deja al usuario sin saber bien que hacer caundo est ahaciendo el formulario de crear tarea, si el  
mismo no se da cuanta la el usuario no puede continuar con la agregacion de esa tarea.  

Estado: Abierta  

-->**Issue** problema crear tarea con el mismo nombre:  
-Tipo de Issue: Error o comportamineto inesperado  

-Prioridad: **Alta**, le ponemos prioridad alta porque no tiene un mensaje de error caundo intenta agregar una tarea con el mismo nombre al mismo proyecto pero tambien  
el sistema no deja agregar una tarea con el mismo nombre que otra pero para un proyecto diferente y eso nos aprece que hay que darle una prioridad alta ya que  
el deja al usaurio sin saber que hacer y que para nosotros se tendria que dejar hacer eso.  

Estado: Abierta  

-->**Issue** Error con input para elegir el proyecto y la tabla de integrantes:  
-Tipo de Issue: Error o comportamiento inesperado  

-Prioridad: **Alta**, nos parece que tiene que tener una prioridad alta porque este error hace que el usuario no sepa bien a que proyecto le esta agregando cada integrante, puede dar lugar  
a confusiones y errores poniendo integrantes de otro proyecto a trabajar en una tarea en otro proyecto que el no esta.  

Estado: Abierta  

-->**Issue** Agregar mas Alerts para los datos incorrectos:  
-Tipo de Issue: Posible mejora para el proyecto  

-Prioridad: **Baja**, decidimos hacer este issue de mejora para que el usuario este mas guiado cuando navega en la pagina y los datos de cada usuario se vean mas claros y que las validaciones  
sean un poco mas rigurosas, pero esto no quiere decir que los developers lo tengan ue hacer por eso le ponemos una prioridad baja.  

Estado: Abierta  

-->**Issue** campo presupuesto con monto menor a 0:  
-Tipo de Issue: Error o Comportamiento inesperado  

-Prioridad: Nos parece que la prioridad depende de lo que intentaron hacer los developers por 2 simples motivos si ellos no dejan pasar  
datos negativos pasaria a ser de prioridad **Media** pero si dejan pasar datos negativos tednrian que hacer una seccion  
nueva que sea para agregar dinero al proyecto porque sino la pagina deja de ser  
util ahi si le pondriamos prioridad **Alta**.  

Estado: Abierta  

-->**Issue** Error con campo Nombre de Proyecto:  
-Tipo de Issue: Error o comportamiento inesperado  

-Prioridad: **Alta**, porque la pagina deja de tener funcionamiento o no sabes que esta pasando como usuario no sabes si no se puede  
agregar un usario repetido o la pagina dejo de funcionar  

Estado: Abierta  

-->**Issue** Mejora en la validacion de campo Nombre de usuario y el de la contraseña:  
-Tipo de Issue: Posible mejora para el proyecto  

-Prioridad: **Media**, le damos una prioridad media porque pensamos que a la pagina le faltan esas validaciones  
mas rigurosas para que todo sea mas discriptivo y concreto  

Estado: Abierta  

-->**Issue** Comportamiento inesperado fecha:  
-Tipo de Issue: Error o comportamiento inesperado  

-Prioridad: **Baja**, Creemos que es una validacion extra que se le puede dar a la pagina, como esta ahora el campo no afecta en nada la funcionalidad de la pagina pero estaria bueno agregarla  
 
Estado: Abierta  

-->**Issue** Error en Campo Mail:  
-Tipo de Issue: Error o comportamiento inesperado  

-Prioridad: en este issue pensamos que depende un poco, en este trabajo que no tiene una base de datos por atras tendria una prioridad **Baja**, porque nunca se  
van a usar esos mails para nada y no afecta en nada que se ingresen asi, pero si hubiera una base de datos por atras de la pagina tendria una  
priordad **Alta** ya que no se podria usar ningun mail que se ingrese sin el formato de mails y seria inutilizables.  

Estado: Abierta  

-->**Issue** Problema Mismo Nombre de Usuario:  
-Tipo de Issue: Error o comportamiento inesperado  

-Prioridad: **Alta**, porque el usuario termina sin saber que hacer ya que no le aparece nada para saber que hacer.  

Estado: Abierta  

-->**Issue** Mejora para Agregar Botones de borrar:  
-Tipo de Issue: Posible mejora para el proyecto

-Prioridad: **Alta**, ya que el usuario podria tener un error al ingresar el usuario o una tarea y ahi no habria vuelta atras entonces no parece que unboton de borrado para borrar al  
el usuario creado seria una buena amplicacion de funcionalidad para la pagina.  

Estado: Abierta  

## Informe de calidad del sistema  
### Resumen de issues  
**-->Total issues:**  

Error o comportamiento inesperado: 9  

Mejoras para la pagina: 3  

**-->Prioridad de los issues:**  

Alta: 8  

Media: 3  

Baja: 3  

**-->Estado de los issues:**  
 
Abierta: 12  

Cerrada: 0  

### Evaluación global de calidad  
**-->Estado en General**  
- Diseño  
En la parte de diseño nos precio excelente con un diseño muy profesional, los colores muy bien elegidos cada seccion de la pagina muy bien estructurada con agregados  
muy profesionales como la barra de progreso, El fondo de la pagina con ese borrado nos parecio que quedo muy bueno contrasta excelente con los colores de los titulos, inputs, botones.  
La verdad a nivel de diseño sentimos que es su punto fuerte esta a muy buen nivel y nos parece que no hay nada que agregarle.  

- Funcionalidades  
En el tema de funcionalidades sentimos que le faltan varias cosas como agregar botones para que el usaurio pueda resolver errores que tenga el, tambien  
agregar varias **Alertas** para que el usuario sepa que hacer en cada caso que este utilizando la pagina y por ultimo tiene varios errores  
graves que puede hacer que el usuario se confunda cuando este gestionando su proyecto o que algunos  
elementos de la pagina dejen de tener funcionalidad.  

**-->Errores**  
En general detectamos varios errores graves y otros no tan graves como el agregar mensajes de alertas que nos paree esencial en la pagina para saber en todo momento que esta pasando y  
no de lugar a confusiones, tambien funciones con botones innecesarios que se podrian haber hecho de otra forma sin esos botones y demas problemas ya contados anteriormente  

**-->Mejoras**  
A nivel de mejoras pusimos algunas para que puedan agregarlas y el usuario se sienta mas comodo, tenga una experiencia mas ameno y pueda saber en todo momentos lo que pasa en la pagina  
y lo que se puede hacer o no pusimos múltiples issues relacionados con la falta de validación adecuada en los formularios, lo que permite la entrada de datos incorrectos o inconsistentes,  
y tambien los mensajes de error son insuficientes o poco claros, lo que puede causar confusión entre los usuarios.  

**-->Conclusion**  
Como conclusion final es una pagina con un diseño excepcional muy profesional y muy bien pensado, los coloresque se eligieron combinan en todo momento se hizo un muy buen trabajo, pero  
por otro lado las funcionalidades de la pagina no terminan de quedar del todo bien, hay algunas que dejan de funcionar y tambien hay otras que son muy buenas por eso detectamos varios errores  
que se pueden corregir y mejoras para que los developers puedan tener una pagina todavia mas profesional y compleja. 

## Reflexión
### Trabajo individual
**-->Reflexion Tomas Fugassa:**  
-Este trabajo me parecio un excelente trabajo me gusto mucho hacer testing a otro proyecto intentar detectar errores y mejoras aplicando tipos de pruebas de testing  
fue sumamente enriquecedora y formativa. Me parece fundamental el testing puede llegar a solucionar un monton de errores y hacerle mas facil el trabajo  
a los developers, aprendi que  a traves del testing se podria identificar no solo erroers tecnicos como hicimos en este trabajo sino tambien se pueden detectar errores  
relacionados con la usabilidad, la eficiencia o la seguridad.  
-El testing resalta la importancia de trabajar en equipo, en este caso trabajamos mas individual en las pruebas exploratorias pero si se hace en equipo se pueden llegar a detectar hasta  
mas errores dejando lo que encuentra un testear a otro tester para que verifique esos errores  
-Sinceramente este trabajo me gusto muchisimo, me daba mucha satifaccion encontrar errores o agregarle mejoras al proyecto lo unico malo que me parecio es la aprte  
del informe un poco largo y en varios puntos se repetia la misma informacion.  

**-->Reflexion Santiago Meizoso**  
-Trabajar en testing me pareció una propuesta interesante e innovadora para la carrera, creo que las herramientas presentadas para realizar el obligatorio son de   
suma importancia y sin lugar a duda, las usaré en el futuro.  
-Aprendí también sobre los distintos tipos de testing y como trabajar en ellos, realizar testing de caja negra y aplicaer las tecnicas de testing exploratorio  
por mi cuenta fue una experiencia positiva y que disfruté realizar.  
-Creo que el testing sobre otro código fue fundamental tanto para mejorar el código ajeno como para tener en cuenta cosas para nuestros futuros códigos,  
el haber brindado otro punto de vista al trabajo de nuestros compañeros de clase considero que fue constructivo y de gran ayuda para ellos.  
-Por mi parte, me enfoqué mas en la experiencia de usuario, dado que mi compañero ya había destacado los problemas principales con los campos de texto,  
y lo que para mi fue facil de detectar y cosas que me di cuenta rápido, quizas para los compañeros no era tan facil dado que al escribir el código uno se  
centra más en otros aspectos más funcionales, además, quien crea el programa sabe claramente para que sirve y como se usa, haciendo mas dificil el ponerse  
en el lugar del usuario común de la página y ver errores esenciales.  

### Técnicas aplicadas y aprendizajes
-->Aplicamos tecnicas de testing expoloratorio que lo que hicimos fue una exploracion libre de la pagina, buscando comportamientos  
inesperados o errores no detectados por los developers.  
-El testing exploratorio nos parecio una tecnica muy buena y muy valisa para detectar erroes graves que puedan llevar a que la pagina deje de funcionar o errores mas leves, fomenta  
una mentalidad critica y detallista ya que nosostros intentamos buscar los maximos errores posibles y explicarlos de la mejor forma para que los developers puedan trabajar tranquilos y  
puedan trabajar en esos errores de la forma mas correcta.  

-->Por otro lado hicimos testing de caja negra donde se verificaron funcionalidades sin conocer su codigo, estas pruebas llas hicimos con datos que ya habiamos  
predefinidos y le agregamos algunos mas para detectar mas errores.  
-Las pruebas de caja negra permitieron identificar de la mejor forma errores en el flujo de trabajo del usuario examinando a fondo los formularios, las distintas  
validaciones que se hicieron y las diferentes mejoras que se podrian llegar hacer. Nos enseño tambien que estas pruebas son esenciales y fundamentales para verificar  
los requisitos especificados como lo hicimos en el anterior obligatorio.  
  
-->Por ultimo, nos ayudamos de herramientas como WAVE para detectar errores de contraste, además de buscar errores de uso.  
Nos enfocamos en que la página sea amigable para usuarios nuevos y sugerimos cambios que creemos importantes para mejorar la página. 
