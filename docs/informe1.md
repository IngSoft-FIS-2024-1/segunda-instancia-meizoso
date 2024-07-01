# Informe académico (entrega 1)
Tomas Fugassa 273230
Santiago Meizoso 273286

## Repositorio Git

### Repositorios locales y remotos   
-->Nosotros armamos un plan de trabajo que iba a ser de crear un total de 6 ramas para trabajar en cada punto y tener toda la informacion de cada tema en esa rama y hasta no terminar el punto no haciamos **git merge** que seria para fusionar 2 ramas en nuestro caso seria de pasar todo lo de esa rama a la rama main.      
1.0-->Cada uno de los integrantes clono el repositorio con **git clone** para tener el repositorio local y poder trabajar cada uno en lo suyo y sin molestar al   otro integrante.  
1.1-->Despues de haber trabajado cada uno en su rama se hacia un **git push origin** con los cambios y toda la inforamcion que puso en ese punto y se mostraban en  el repositorio remoto para que el otro integrante lo vea y pueda tener esos cambios tambien en su repositorio local.  
  
### Aplicación de Git
Explicacion siguiendo el plan de trabajo y contando mas de los comandos usados:  
    1.2-->Siguiendo con los pasos que hacemos, despues de usar git clone pensamos los 2 la informacion en general que ibamos a poner y creamos cada uno la rama a  trabajar, ingresabamos la informacion de ese punto y cuando terminamos hacemos un **git add .** que seria para subir todos los cambios de todos los archivos a la **stagging area**     
    1.3-->despues hacemos el **git commit -m "un mensaje"** para subir los cambios y hacer como una version nueva del trabajo en esa rama, luego haciamos un **git  push origin** para subir todos los cambios al repositorio remoto y que el 2 integrante lo pueda ver y pueda hacer un **git pull** que seria para traer todos  los cambios que se hicieron y que el otro integrante no los tenga en su repositorio local.  
    1.4-->los 2 agregamos informacion en cada punto a trabajar y trabajamos en todas la ramas hechas haciendo buenas practicas de git y practicando todos los  comandos aprendidos en clase.  
    -->Otros Comandos Usados:  
        -**git branch <Nombre Rama>** : este comando lo que hace es crear una rama para poder trabajar temas en concreto y sin modificar la rama principal **main**  que subiamos los cambios cuando ya el punto estaba terminado.  
        -**git branch -D <Nombre Rama>** : este comando seria para borrar una de las ramas hechas y lo usabamaos al terminar y completar un punto borrabamos la rama porque ya no la ibamos a neceitar.  
        -**git switch + rama** o **git checkout + rama** : esto lo aplicabamos para cambiar entre ramas.  
        -**git log** : lo usabamos para verificar que se hallan hecho los commits y ver los commits en general.  
        -**git status** : esto lo usabamos para ver si los cambios se habian hecho, cuales eran losa rchivos modificados.   
        -**ls**: este comando se utiliza para ver las carpetas disponibles en el directorio actual, la aplicacion de este comando en nuestro proyecto se baso en la solución  
        de errores, ya que facilita el entender donde estamos parados y que otras carpetas tenemos disponibles desde donde estamos.
        -**cd**: *change directory*, este comando es muy utilizado en el comienzo de cada sesion de trabajo, lo utilizamos como el nombre indica, para movernos  
        de directorio, en nuestro caso, de desktop a la carpeta del repositorio local  
        -**git push origin <Nombre Rama>**: en nuestro caso, trabajamos por ramas, creamos la rama, hacemos cambios, hacemos commit, y luego pusheamos la rama, al trabajar  
        asi, preferimos un push de rama en vez de un push total, ya que de esta manera nos organizamos mejor y solo hacemos cambios que sabemos que no van a perjudicar al compañero.  
    --

##  Versionado
### Buenas prácticas de versionado
-->Mantenemos todo el rato un repositorio centralizado que va toda la inforamcion que se pushee desde los 2 repositorios locales, esto facilita la gestion de  
cambios y contribuciones que hagamos al proyecto, uno de los integrantes pushea informacion y al segunda el otro integrante puede ver toda esa  
infoamcion y con solo hacer un pull ya la tiene en su repositorio para trabajarla.  
-->Gestionamos nuestro trabajo con ramas, estructurando la información, haciendo más facil el manejo de la creacion del documento y el trabajo cooperativo.
De esta forma logramos no "superponernos" y trabajar en lo mismo desde los distintos repositorios. Si compañero A trabaja en rama versionado, compañero B trabaja en rama Elicitación.
-->Creemos que es fundamental la comunicacion para el equipo y asegurar la organizacion del repositorio centralizado, comunicar cuando y sobre que trabajaremos, ya que no podemos ver en que está trabajando el otro compañero en el momento, es sumamente importante avisarnos, incluso trabajando en llamada para debatir sobre que parte del documento ir avanzando y ayudarnos entre nosotros.
-->En la segunda parte del obligatorio usaremos comentarios porque nos parece que facilita la busqueda de funciones la comprension de cambios en el proyecto y  
ayuda a seguir el progreso, en esta parte no nos parece necesario porque es todo teorico.  
-->Revisar el codigo nos parece una buena practica cada integrante revisa la inforamcion puesta por el otro estudiante para que haya menos margen de error, una  
buena calidad de codigo y de informacion en este caso y identificar posibles problemas antes de que se incorporen en el repositorio principal.  
-->Tambien lo que intentamos hacer es tener como un respaldo otro archivo en el que tenemos toda la informacion puesta para si prevenimos la perdida de  
inforamcion en caso de un error de un integrante del proyecto.  
-->intentamos poner mensajes claro y concisos sobre lo que se estuvo trabajando y introduciendo informacion en los commits asi sabemos bien los cambios que se  
fueron haciendo en cada una de las ramas y ademas mantenemos un historial claro y comprensible. intentamos que sean descriptivos, que referencien bien la tarea  
en la que se trabajo, que sean cortos y coherentes.

### Evolución del proyecto
-Empezamos clonanado el repositorio despues creamos las ramas para trabajar en ellas y poner la informacion correspondiente.  
-Lo primero que hicimos fue ingresar inforamcion sobre los repositorios de git, las bunas practicas de versionado que ibamos teniendo a lo largo del proyecto, luego empezamos a poner inforamacion en la parte elicitacion aprendiendo y disctiendo que poner, esta parte nos tomo su tiempo ya que teniamos que pensar nuestro cliente ideal y las actividades de investigacion que ibamos haciendo como las entrevista y la encuesta.  
-Luego seguimos por la parte mas larga del proyecto la que nos tomo mas tiempo porque teniamos que tener en cuenta y saber de muchos mas temas como los diferentes tipos de requerimientos que teniamos que ver que no quedaran ambiguos y con las diferentes carracteristicas que los profes habian dicho, en esa parte dejamos sin hacer por ese momento los bocetos de ui para despues hacerla a lo ultimo.
-Despues empezamos con la parte de verificacion y validacion que teniamos que saber la diferencia entre las 2 y al final nos quedaron muy claras las dos y por ultimo hicimos las respectivas reflexiones junto a los bocetos de ui y en ellas explicamos como nos sentimos haciendo el trabajo y lo que  aprendimos y como referzamos nuestros conocimientos.  

## Elicitación
### Actividades de investigación
investigacion del mercado y la competencia de las apuestas online:   
    ->Hay muchas paginas de casinos online.     
    ->Pocas paginas de apuestas de deportes.  
    ->La gente hace bastantes apuestas deportivas presenciales, entonces nos parecio que van a apostar mas si lo pueden hacer desde su celular o computadora.  
    ->El futbol en el uruguay es el deporte mas visto y con muchisimos fans de varios equipos, esos fans capaz que estarian dispuestos hacer apuestas online.  
    ->Tuvo un gran impulso estos ultimos años principalemnte por el uso de celulares.  
    ->Ya que hay menos competencia podemos ofrecer tipos de apuestas nuevas o innovadoras, bonificaciones especiales, una interfaz intuitiva, etc.  
    ->La mayoria de las marcas se centra solo en las apuestas, nosotros porias ofrecer noticias y analisis de los equipo, etc.  
    ->Haciendo un anlisis hay cumplimientos legales y regulaciones que hay que cumplir, como obtener las licencias necesarias, cumplir con las leyes de proteccion al consumidor por poner un ejemplo y por otro lado garantizar la proteccion de los datos de todos los clientes.  
##-Entrevista Tomas Fugassa:  
  ###Preguntas:  
    ->¿Con que frecuencia utiliza su celular o computadora?  
    ![Captura de pantalla 2024-05-12 123525](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/b556ede8-0de9-48ff-94af-16d8d71107ab)  
    ->¿Frecuentas paginas de apuestas online?  
    ![Captura de pantalla 2024-05-12 123740](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/040cd873-caed-4718-b14e-7c2da7b45e6f)  
    ->¿Si apuestas lo haces con responsabilidad?  
    ![Captura de pantalla 2024-05-12 123850](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/046c0abe-d836-4ae7-887e-ddfcce544f7e)  
    ->¿Estaria comodo apostando en una pagina web de apuestas depotivas?  
    ![Captura de pantalla 2024-05-12 123941](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/3cb8c0a8-5b84-40f4-80f6-3a75fab2a911)  
        ###Si dice que no:  
            ->¿Que caracteristicas te gustaria ver en la pagina para sentirete mas seguro apostando? 
            ![Captura de pantalla 2024-05-12 124117](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/d1df56e1-5cc6-468d-af4d-9bd8e4e229c8)  
    ->¿Tiene horarios flexibles que le permita dedicar tiempo a las apuestas deportivas online? 
    ![Captura de pantalla 2024-05-12 124218](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/19a1b27d-805c-4fa7-a6e1-1b97fde0b254)  
    ->¿Si apuesta lo hace para tener una experiencia llena de adrenalina y emocion?  
    ![Captura de pantalla 2024-05-12 124310](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/fa65452e-f169-4cc6-bcc3-9fe1ee0973e7)  
    ->¿Que aspectos valoran mas al elegir una pagina de apuestas deportivas?  
    ![Captura de pantalla 2024-05-12 124415](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/e764a10e-2e0d-4b79-85ca-ee6a4253204d)  
    ->¿Consideras importante tener estadisticas y analisis de los partidos anteriores de equipos que vas apostar?  
    ![Captura de pantalla 2024-05-12 124516](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/db018db9-a62f-414a-8657-fc0c09a8e533)  
    ->¿Te gustaria que haya grupos o foros de discusion en linea con otros apostadores?
    ![Captura de pantalla 2024-05-12 124615](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/81d5731f-5b68-420c-a63b-d1c955c2aeda)
      
    ##Entrevista Santiago Meizoso:  
    ###Preguntas:  
    ->¿Frecuentas casinos? De ser asi, cuanto tiempo le dedicas?  
    ![pr1](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/blob/elicitacion/1.jpg)  
    ->¿Alguna vez probaste las apuestas Online?  
    ![pr2](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/blob/elicitacion/2.jpg)  
    ->¿Sentis que las paginas online de casino son seguras?  
    ![pr3](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/blob/elicitacion/3.jpg)  
    ->¿Frecuentas esas paginas online?  
    ![pr4](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/blob/elicitacion/4.jpg)  
    ->¿Si le dieramos una bonificacion por registrarse, lo motivaria a empezar?  
    ![pr5](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/blob/elicitacion/5.jpg)  

##Encuesta breve de 5 preguntas:  
    ###->¿Frecuentan paginas de apuestas deportivas online?
        ![Captura de pantalla 2024-05-11 133437](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/0a7d2a68-a30b-4eb6-b7b1-5b0910da77c7)  
        Si dice que si:  
            ###->¿Cuanto tiempo usas tu celular a la semana?
            ![Captura de pantalla 2024-05-11 133600](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/5923260d-28ac-4c8c-98f2-f16aefbcc39a)  
            ###->¿Si apuestas lo hacen por tener una experiencia emocionante o llena de adrenalina?  
            ![Captura de pantalla 2024-05-11 133653](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/68b96db0-9e3f-4156-ad2e-2c9789fe22ce)  
            ###->¿Cuanto tiempo a la semana dedicas a las apuestas deportivas online?
            ![Captura de pantalla 2024-05-11 133826](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/376ff674-d567-4fbc-b96d-7b6f850b77a0)  
            ###->¿Usan dinero importante para apostar?
            (https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/5b8dfc60-5f9e-4fcc-a76c-0308a2f11339)  
        Si dice que no:  
            ###->¿Te gustaria apostar en una pagina de apuestas deportivas online?
            ![Captura de pantalla 2024-05-11 134048](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/79033ce8-a8a8-47ed-ad1d-2abe606b0cd3)  
            ###->¿Te parece poco confiables o poco seguras?  
            ![Captura de pantalla 2024-05-11 134215](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/063e3b00-06ab-43dc-bb46-087110108619)  
            ###->¿Que caracteristicas te gustaria que tenga para que te parezca confiable y segura? 
            ![Captura de pantalla 2024-05-11 134256](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/549ebc73-2326-4442-8081-2401e94aa6be)  
            ###->¿Te gustria una bonificacion para motivarte a registrarte y empezar a realizar apuestas?
            ![Captura de pantalla 2024-05-11 134401](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/db55b80c-f962-4c1c-b911-20d93a65d05b)  
### Caracterización de usuarios
Tipos de clientes:  
    ->Creemos que nuestro principal tipo de cliente va a ser el que es recurrente a casinos  
Edad:  
    ->Edad: 25 o mas, nos parece lo mejor a esa edad hay mucha probabilidad de que este trabajando y generando su propio dinero.  
Intereses deportivos:  
    ->Podriamos hacer una pagina de apuestas con muchos deportes, pero en uruguay el deporte mas visto y al que le gusta mas la gente es el futbol queremos atraer a esas personas fanaticas de los equipos de futbol.  
Nivel de ingresos:  
    ->Buscamos clientes con ingresos medios o altos ya que capaz que hay una probablidad mas alta que puedan permitirse gastar dinero en apuestas  
Nivel de interaccion o uso con la tecnologia:  
    ->Apuntamos a un publico que sepa usar de manera efectiva el celular o la computadora y que se adapten rapido a las paginas web ya que no va haber ningun tutorial  
Motivacion para apostar:  
    ->Apuntamos a clientes que su motivacion sea que a el le guste apostar y que lo disfrute  
Responsabilidad frente a apuestas:  
    ->Sin duda nuestro cliente objetivo va a ser uno que sea responsable apostando, que nosostros veamos que no ponga grandes cantidades de dinero reiteradas veces en una solo dia.      
Tiempo con apuestas:  
    ->Apostamos a un tipo de cliente que tenga tiempo para invetirle a las apuestas online y que no sea algo de unos minutos.  
### Modelo conceptual del problema
![Captura de pantalla 2024-05-12 133859](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/c609fdcc-a433-4862-9035-a052be3129c1)

## Especificación
### Requerimientos funcionales y no funcionales
Requerimientos funcionales:  
    -->El usuario podra realizar multiples apuestas a la vez  
    -->El usuario podra agregar balance a su cuenta siempre que este supere 3usd   
    -->El sistema dejara elegir al usuario el monto que se quiera poner  
    -->El sistema debe mostrar correctamente todos loas partidos que se pueden apostar  
    -->El sistema debe permitir apostar lo que quiera el usuario y el tipo de apuesta que quiera  
    -->El usuario podra ver un resumen del partido al que aposto  
    -->El usuario despues de realizar una apuesta podra ver el partido con comentarios que le iran diciendo lo que pasa en el.  
Requerimientos no funcionales:    
    -->Debe ser posible el ingreso a la plataforma desde telefono celular    
    -->La interfaz de la pagina debe ser intuitiva y facil de usar incluso para los que usan poco la tecnologia  
    -->El sistema debe ser escalable para que asi le podemos agregar nuevas funciones en el tiempo entre otras.  
    -->El log in tendra que ser temporal hasta que el cliente recargue o cierre la pagina  
    -->El sistema tendra docuemntacionm detalla sobre todos los aspectos relevantes para su desarollo.  
### User stories  
--Como Apostador  
    Quiero agregar balance Para tener acceso a las apuestas   
    Para poder divertirme y generar dinero  
    Criterios de Aceptacion:  
    -cada partido sera un recuadro en el cual te va a salir los 2 equipos y en cuanto comienza la apuesta para que el apostador   
    haga click en la apuesta y pueda apostar su dinero.  
--Como Apostador  
    Quiero realizar multiples apuestas a la vez   
    Para no perderme ningun partido y generar mas ganancias  
    Criterios de Aceptacion:  
    -el usuario podra navegar libremente entre apuestas entrar a una y fijarse el porcentaje que ganara por cada tipo de apuestas, etc.   
--Como administrador   
    Quiero acceder a una interfaz exclusiva   
    Para actualizar los partidos, los porcentajes de los diferentes tipos de apuestas, el tiempo faltante para cada partido, actualizar funciones de la pagina,etc.  
--Como Apostador:  
    Quiero ver el historial de mis apuestas  
    Para ver cuanto dinero gane y cuanto perdi, en que fue mejor apostar y cuanto dinero aposte en total.  
    Criterios de Aceptacion:  
    -crear una tabla que tenga las apuestas con sus respectivas caracterisitcas para que el usuario este conforme con la informacion y pueda analizar todo para   lograr su objetivos financieros.  
--Como Apostador:  
    Quiero crearme una cuenta (temporal)  
    Para tener mis apuestas, tener mi monto de dinero y mi historial de apuestas con toda la su informacion  
    Criterios de Aceptacion:  
    -una interfaz de login in correcta para que el usuario se pueda logear perfectamnte con su respectivo nombre y contaseña.  
### Use cases  
Actor: Usuario, Apostador    
Seleccion de apuesta  
  
|        Acción de los actores  |                                   Respuesta del sistema                                                               |    
|-------------------------------|-------------------------------------------------------------------------------------------------------------------|   
|1. Ingresa sesion              | 2. Muestra todos los partidos para apostar, con el tiempo que falta para que comience y el resultado                |    
|3. Elige la apuesta            | 4. se muestra todos los tipos de apuestas de ese partido con su respectivo porcentaje de ganancia y goles hechos  hasta el momento.  |  
|                               |                                                                                                                       |    
|5. Selecciona tipo de apuesta  | 6. Se muestra los respectivos datos de el tipo de apuesta, ej: si dice que va a haber un gol y puede poner en que minuto si quiere tambien y obtener mas ganacias  |                                                                   
                                
                                Casos Alternativos:    
1.1: sesion no iniciada, emite mensaje "inicie sesion para ver apuestas" y muestra inicio de sesion    
2.1: Cantidad superior al balance, emite mensaje "balance insuficiente"  
  
Actor: Usuario, Apostador    
Vista de Historial de Apostador   
 

|        Acción de los actores   |                                  Respuesta del sistema   
|--------------------------------|------------------------------------------------------------------------------------------------------------------|   
|1. Selecciona ver historial      | 2. Se muestran todas las apuestas realizadas por el apostador con texto si gano o perdio y de cuanto fue la ganancia o la peridida tambien un boton para analizarla mas a fondo      |                                                    |      
|3. Toca Boton Analizar           | 4. Se muestran a los tipos de apuestas que aposto en esa apuesta, las ganancias o perididas que tuvo en cada tipo de apuesta y mas datos importantes para el analisis         |       
                               
                                Casos Alternativos  
1.1: No hizo ninguna apuesta, en ese caso se mostrara todo vacio y no podra acceder a analizar     
    
### Bocetos de IU
El diseño de esta pagina es de una forma identica a la que nos gustaria que quedara la nuestra nos gusta mucho los partidos que se vean abajo en el medio porque   son una cosa importante despues el log in arriba a la derecha tambien nos gustaria agregarla noticias a lo ultimo de la pagina para que quede con mas inforamacion  
![Captura de pantalla 2024-05-10 155653 PNG](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/05d58589-93a1-4375-beea-5475a5c981d5)

Otra pagina que nos gusto mucho el menu ya que se asemeja mucho a lo queremos hacer
![Captura de pantalla 2024-05-10 160418](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/b6d6c36b-70f8-4664-a1e9-039e4994ce43)

Boceto del menu hecho por nosotros:
![Captura de pantalla 2024-05-11 174806](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-fugassa-meizoso/assets/165679040/deb59a66-7e61-473c-b322-bb087e174dc2)  

## Validación y verificación
### Verificación
-Este proyecto se va a construir sobre las bases de la planificacion, cumpliendo con los requerimientos y  
marcando todo lo realizado y lo que nos quede por realizar con un formato de checklist.  
Es por ello que tenemos la expectativa de crear un producto acorde y correcto respecto a lo planificado.  
-Nos aseguramos de eliminar ambiguedades en los requerimientos, que esten al alcance de nuestro nivel de programacion  
y que puedamos cumplir con ellos en el tiempo solicitado, ademas, tienen la caracteristica de ser verificables, son aspectos  
del programa que se pueden probar, testear, basados en la experiencia del usuario  
-Como segunda fase, plantearemos pruebas del programa, verificaremos casos base priorizando que siempre se cumplan los requerimientos  
-Realizadas las pruebas, veremos que aspectos son necesarios para el programa y enriquecen la experiencia del usuario y cuales no.  
-A lo largo del proceso de trabajo cada vez que ingresamos inforamacion a una rama vamos verificando que estemos redactando bien los puntos poniendo la  informacion que se nos pide en ese punto del obligatorio, por eso tenemos este sistema de trabajo de ramas explicando en el primer punto para no mezclarnos y  siempre tener la informacion de cada punto en una rama.  
### Validación  
-El aspecto principal en el cual basaremos nuestra validación es en la prueba por otros usuarios, nuestra idea es enriquecer el programa  
desde la retroalimentacion de mostrar nuestro programa a distintas personas que actuen de testers.  
-Nos parece la mejor forma de que un proyecto grande se valide de forma correcta con los propios stakeholder y los clientes asi nos pueden decir que  
cosas corregir o que no les gusta tanto y poder mejorarlas o corregilas de la mejor forma tambien nos ayudara a comprender mejor las necesidades  
y preferencias de los clientes.  
-Al utilizar como testers a los propios clientes obtendremos muchas opiniones y perspectivas que nos ayudaran mucho a los largo del proyecto, ademas  
nos ayudara a no perder tiempo en funciones que estemos haciendo mal y al validar con el usuario mejoraremos el margen de error y no perederemos  
nada de tiempo.  
-Antes de presentarselo a los clientes nos parece importante recopilar toda la informacin que nos dice el cliente de manera estructurada y organizada  
haciendo uso de los metodos mencionadaos en clase como entrevistas, encuestas, focus groups, etc.  
-Haciendo estas cosas creemos que obtendremos una excelente validacion y mejoraremos todos los aspectos del proyecto.  

## Reflexión
### Trabajo individual
Tomas Fugassa: 
    Por mi parte siento que es una primera parte del proyecto que tiene cosas muy buenas como el uso constante del git para la creacion de ramas el   hacer commits, tambien me gusto mucho ya que trabajamos de una manera diferente con mi compañero cada uno por su lado algunas veces en llamada y otras no y   
    ibamos subiendo los cambios que ibamos haciendo.  
    Por otro lado me gustaron los temas que tuvimos que explicar ya que te enseñan lo primero que se hace en un proyecto de creacion de software y los puntos  
    mas importante que tiene que tener el cliente y los programadores.  
    por otro lado git y github me parecieron herramientas fundamentales para ayudar en la creacion de proyectos, son 2 herramientas que pensaba que no iban a ser tan importante pero en el transcurso del proyecto veia lo sencillo y lo intuitivo que iba siendo trabajar.  
    cada vez que iba avanzando mas en el proyecto me iban saliendo los comandos mas fluidos y ya sabia rapidamente que comandos usar para cada cosa que habia que hacer o arreglar.  
    Sin duda esta 1era parte del obligatorio me sirvio para entender mejor todos los temas principales y fundamentales de la ingenieria de software y para entender los comandos basicos y no tan basicos de git.  

Santiago Meizoso:
    Me pareció fundamental el llevar a la practica la herramienta de Git en un trabajo como este, dado que no lleva la complejidad de crear un codigo con todo lo que conllevaria equivocarse con ramas y commits, sin embargo, pudimos aplicar los conceptos aprendidos, creacion de ramas y los fundamentos del trabajo remoto.
    Aprendí sobre la documentación de proyectos, las etapas y las formalidades a tener en cuenta a la hora de redactar los procesos de creacion del proyecto.
    Personalmente, fue mi primera vez usando GitHub y Git, ahora las considero herramientas fundamentales para la creacion de proyectos y no dudo que las usare en un futuro cuando comience mi vida profesional.  
    Considero tambien importante el manejo sin ayudas de git, ya que aunque en clase podamos verlo teoricamente, que comandos usar para que y como funcionan, en la practica la realidad es otra, nos enfrentamos a conflictos y obstaculos inesperados que debemos sortear ya sea a prueba y error o buscando en foros de internet por que se dan esos problemas y como resolverlos.  
    
### Técnicas aplicadas y aprendizajes
En esta primera instancia de trabajo logramos poner en practica lo aprendido en el curso sobre git y repositorios. 
Trabajar con esta herramienta nos dio a entender la importancia de las buenas practicas y el uso por nuestra cuenta nos ayudó a descubrir mas a fondo los usos y comportamientos de git. Al usarlo en el documento, encontramos distintos errores y problemas, lo cual nos llevo a indagar sobre por que suceden y como solucionarlos, tuvimos un acercamiento a los repositorios de manera personal y como funcionan, lo que se diferencia de simplemente verlos en clase como conceptos.
Tuvimos especial cuidado con el versionado e hicimos hincapie en seguir estrictamente las buenas practicas para cuidar el documento final, personalmente creemos que usaremos git muchas veces a lo largo de nuestra carrera y trabajo para hacer codigos en equipo.
Nuestras tecnicas aplicadas se basaron principalmente en comunicarnos para crear ramas ordenadamente y trabajar desde nuestras casas en cada rama por separado, luego de lograr cierto avance, pushear las ramas al repositorio centralizado para intercambiar nuestros avances y que el otro compañero aporte a dichos avances. De esta forma trabajamos los dos en todo el documento sin tener problemas con las versiones.
