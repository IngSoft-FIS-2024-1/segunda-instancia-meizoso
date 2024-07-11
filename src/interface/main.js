import { PartidoList } from "../domain/partidolist.js";
import { Apuesta } from "../domain/apuesta.js";
import { ApuestaList } from "../domain/apuestalist.js";

const partidoList = new PartidoList();
const listaPartidos = partidoList.getlistaPartidos();
const apuestaList = new ApuestaList();
const listaApuestas = apuestaList.getlistaApuestas();
//import { Usuario } from "../domain/usuario.js";

//esta funcion asegura que el codigo se la funcion 
//inicio se ejecute solo cuando el documento html 
//se haya cargado todo y ademas que haya sido parseado por google,
//esta funcion la hago porque hicimos un modal 
//que se ejecuta antes que todo lo de la pagina
document.addEventListener("DOMContentLoaded", function () {
  inicio();
})
let numLista = 0;
//esta funcion la hacemos para no repetir 
//codigo y mostrar las secciones que quieramos 
//mostrar de la pagina
function mostrar(el) {
  el.style.display = "block";
}

//esta funcion tambien la hacemos para no 
//repetir codigo y es para esconder secciones de la pagina
function esconder(el) {
  el.style.display = "none";
}
let apuestasGanadas = [];
//fuincion de inicio que se ejecuta al principio de toda la pagina
function inicio() {
  mostrar(document.querySelector(".seccionMenu"));
  esconder(document.querySelector("#nuevaApuesta"));
  esconder(document.querySelector(".apuestas"));
  esconder(document.querySelector(".seccionNoticias"));
  esconder(document.querySelector(".seccionHistorial"));

  partidoList.cargaDePartidos();
  partidos3AlInicio();
  mostrarIngresoMonto()

  document.querySelector("#btnApuestas").addEventListener("click", irApuestas);
  document.querySelector("#btnHistorial").addEventListener("click", irHistorial);
  document.querySelector("#btnNoticias").addEventListener("click", irNoticias);
  document.querySelector("#guardarMontoBtn").addEventListener("click", agregarMontoaInput);
  document.querySelector("#idHome").addEventListener("click", volverHome);
}

//funciones para mostrar y esconder secciones de la pagina
function irApuestas(event) {
  event.preventDefault();
  esconder(document.querySelector(".seccionMenu"));
  esconder(document.querySelector(".seccionNoticias"));
  esconder(document.querySelector(".seccionHistorial"));
  mostrar(document.querySelector(".apuestas"));
}

function irHistorial(event) {
  event.preventDefault();
  esconder(document.querySelector(".seccionMenu"));
  esconder(document.querySelector(".apuestas"));
  esconder(document.querySelector(".seccionNoticias"));
  mostrar(document.querySelector(".seccionHistorial"));
}

function irNoticias(event) {
  event.preventDefault();
  esconder(document.querySelector(".seccionMenu"));
  esconder(document.querySelector(".apuestas"));
  esconder(document.querySelector(".seccionHistorial"));
  mostrar(document.querySelector(".seccionNoticias"));
}

function volverHome(event){
  event.preventDefault();
  mostrar(document.querySelector(".seccionMenu"));
  esconder(document.querySelector(".apuestas"));
  esconder(document.querySelector(".seccionNoticias"));
  esconder(document.querySelector(".seccionHistorial"));
  
}

function mostrarIngresoMonto(){
  const ingresoMonto = new bootstrap.Modal(document.getElementById('ingresoMontoModal'), {
    backdrop: 'static',
    keyboard: false
  });
  ingresoMonto.show();
}

function agregarMontoaInput(){
  let monto = 50;
  const inputMonto = document.getElementById("monto");
  const montoModal = document.getElementById("montoInput").value;
  if(!isNaN(montoModal) && montoModal.toString().indexOf('e') != 1){
    if (montoModal <= 3){
      alert("Ingresa un monto superior a 3 dolares");
    }else if(montoModal > 200){
      alert("Ingresa un monto inferior a 200 dolares");
    }
    else{
      inputMonto.value = montoModal;
      ocultarIngresoMonto();
    }
  }
  else{
    alert('El monto debe ser numérico')
  }
}

function ocultarIngresoMonto() {
  const ingresoMonto = bootstrap.Modal.getInstance(document.getElementById('ingresoMontoModal'))
  if(ingresoMonto){
    ingresoMonto.hide();
  }
}

const elementosPartidos = [
  {
    fecha: document.querySelector(".fecha1"),
    equipo1: document.querySelector(".equipo1Partido1"),
    equipo2: document.querySelector(".equipo2Partido1"),
    Local: document.querySelector("#ganancia1LabelPartido1"),
    empate: document.querySelector("#gananciaLabelEmpatePartido1"),
    Visitante: document.querySelector("#ganancia2LabelPartido1"),
  },
  {
    fecha: document.querySelector(".fecha2"),
    equipo1: document.querySelector(".equipo1Partido2"),
    equipo2: document.querySelector(".equipo2Partido2"),
    Local: document.querySelector("#ganancia1LabelPartido2"),
    empate: document.querySelector("#gananciaLabelEmpatePartido2"),
    Visitante: document.querySelector("#ganancia2LabelPartido2"),
  },
  {
    fecha: document.querySelector(".fecha3"),
    equipo1: document.querySelector(".equipo1Partido3"),
    equipo2: document.querySelector(".equipo2Partido3"),
    Local: document.querySelector("#ganancia1LabelPartido3"),
    empate: document.querySelector("#gananciaLabelEmpatePartido3"),
    Visitante: document.querySelector("#ganancia2LabelPartido3"),
  }
];

//funcion para mostrar en las apuestas 3 partidos aleatoriamente 
const partidosSeleccionados = [];
const todosLosPartidos = [];
function partidos3AlInicio() {
  const indicesSeleccionados = [];

  while(indicesSeleccionados.length < 3){
    let indice = Math.floor(Math.random() * listaPartidos.length);

    if(!indicesSeleccionados.includes(indice)){
      indicesSeleccionados.push(indice);
    }
  }

  indicesSeleccionados.forEach(indice => {
    partidosSeleccionados.push(listaPartidos[indice]);
    todosLosPartidos.push(listaPartidos[indice]);
  });

  
  partidosSeleccionados.forEach((partido, indice) => {
    const elemento = elementosPartidos[indice];
      elemento.fecha.textContent = partido.getFecha();
      elemento.equipo1.textContent = partido.getEquipo1();
      elemento.equipo2.textContent = partido.getEquipo2();
    elemento.Local.textContent = partido.getGananciaEquipo1();
      elemento.empate.textContent = partido.getGananciaEmpate();
      elemento.Visitante.textContent = partido.getGananciaEquipo2();
  });
}

//funciones para desplegar la apuesta en un 
//recuadro para que puedas apostar y elegir el tipo de apuesta
document.getElementById("botonApuesta1").addEventListener("click", function() {
  crearApuesta(document.querySelector(".equipo1Partido1").textContent, document.querySelector(".equipo2Partido1").textContent, document.querySelector(".fecha1").textContent);
});

document.getElementById("botonApuesta2").addEventListener("click", function() {
  crearApuesta(document.querySelector(".equipo1Partido2").textContent, document.querySelector(".equipo2Partido2").textContent, document.querySelector(".fecha2").textContent);
});

document.getElementById("botonApuesta3").addEventListener("click", function() {
  crearApuesta(document.querySelector(".equipo1Partido3").textContent, document.querySelector(".equipo2Partido3").textContent,document.querySelector(".fecha3").textContent);
});


let listadoApuestas = []
let apuestasVigentes = 0;
//funcion para que se cree el recuadro de la apuesta donde el 
//usuario va a a poder apostar el monto que quiera y elegir 
//el tipo de apuesta
function crearApuesta(local, visitante, fecha) {
  let titulo = document.createElement("h5");
  titulo.textContent = local + " VS " + visitante;
  if (apuestasVigentes == 3 && !listadoApuestas.includes(titulo.textContent)) {
    alert("no puede crear mas apuestas");
  }
  else if (!listadoApuestas.includes(titulo.textContent)) {
    apuestasVigentes++;
    let listado = document.querySelector("#nuevaApuesta");
    listadoApuestas.push(titulo.textContent);
    let divApuesta = document.createElement("div");
    divApuesta.classList.add("nuevaApuesta"+apuestasVigentes); 
    divApuesta.classList.add("nuevaApuesta"); 
    divApuesta.setAttribute("id", (local + " VS "+visitante).split(" ").join("").split(".").join(""));
    titulo.classList.add("tituloListado")
    divApuesta.append(titulo)
    let data = document.createElement("h6");
    data.textContent = fecha;
    data.classList.add("fechaListado", "mb-1"); 
    divApuesta.appendChild(data);
    let monto = document.createElement("input");
    monto.classList.add("form-control", "montoListado");
    monto.placeholder = "$0000";
    divApuesta.appendChild(monto);
    
    let pApuestaListado = document.createElement("label");
    pApuestaListado.textContent = "Coloque su Apuesta:";
    pApuestaListado.classList.add("pApuestaListado", "mb-2");
    divApuesta.appendChild(pApuestaListado);
    
    let divMonto = document.createElement("div");
    divMonto.classList.add("form-group", "m-0"); 
    divMonto.appendChild(pApuestaListado);
    divMonto.appendChild(monto);
    divApuesta.appendChild(divMonto);
    
    let eleccion = document.createElement("h6");
    eleccion.textContent = "Seleccione Resultado";
    eleccion.classList.add("eleccionListado", "mb-4"); 
    divApuesta.appendChild(eleccion);
    
    //funcion para crear los input, explicado abajo
    function crearCheckbox(id, labelTexto, clase, claseLabel) {
        let checkbox = document.createElement("input");
        checkbox.classList.add("form-check-input", clase);
        checkbox.type = "checkbox";
        checkbox.id = id;
    
        let label = document.createElement("label");
        label.textContent = labelTexto;
        label.classList.add("form-check-label","mt-0" ,claseLabel);
        //esto es para que no tenga que tocar estrictamente la checkbox que es chiquita.
        label.htmlFor = id
        return { checkbox, label };
    }
    //lo hice asi informandome en stackoverflock ya que de otra forma me quedaba muy largo el codigo, teniendo que crear 3 veces el mismo elemento.
    let { checkbox: lista1, label: equipo1 } = crearCheckbox("idLocal", "Gana " + local, "lista1Listado", "localListado");
    let { checkbox: lista2, label: equipo2 } = crearCheckbox("idVisitante", "Gana " + visitante, "lista2Listado", "visitanteListado");
    let { checkbox: lista3, label: equipo3 } = crearCheckbox("idEmpate", "Empatan", "lista3Listado", "empateListado");
    let divCheckboxes = document.createElement("div");
    divCheckboxes.classList.add("form-check", "mb-3"); 
    divCheckboxes.appendChild(equipo1);
    divCheckboxes.appendChild(lista1);
    divApuesta.appendChild(divCheckboxes);
    
    divCheckboxes = document.createElement("div");
    divCheckboxes.classList.add("form-check", "mb-3"); 
    divCheckboxes.appendChild(equipo2);
    divCheckboxes.appendChild(lista2);
    divApuesta.appendChild(divCheckboxes);
    
    divCheckboxes = document.createElement("div");
    divCheckboxes.classList.add("form-check", "mb-3"); 
    divCheckboxes.appendChild(equipo3);
    divCheckboxes.appendChild(lista3);
    divApuesta.appendChild(divCheckboxes);
    
    let divRow = document.createElement("div");
    divRow.classList.add("row", "mb-3");

    let divCol = document.createElement("div");
    divCol.classList.add("col");
    
    let boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = "Hecho";
    boton.classList.add("btn", "btn-primary", "mr-2", "botonListado"); 
    divCol.appendChild(boton);
    
    let botonBorrar = document.createElement("button");
    botonBorrar.type = "button";
    botonBorrar.textContent = "Cerrar";
    botonBorrar.classList.add("btn", "btn-secondary", "botonBorrar", "ms-3"); 
    divCol.appendChild(botonBorrar);
    
    divRow.appendChild(divCol);
    divApuesta.appendChild(divRow);
    
    listado.appendChild(divApuesta);
    

    botonBorrar.addEventListener("click", function () {
      listado.removeChild(divApuesta);
      apuestasVigentes--;
      let index = listadoApuestas.indexOf(titulo.textContent);
      if (index > -1) {
        listadoApuestas.splice(index, 2);
      }
    });

    lista1.addEventListener("change", function () {
      if (this.checked) {
        lista2.checked = false;
        lista3.checked = false;
      }
    });

    lista2.addEventListener("change", function () {
      if (this.checked) {
        lista1.checked = false;
        lista3.checked = false;
      }
    })

    lista3.addEventListener("change", function () {
      if (this.checked) {
        lista1.checked = false;
        lista2.checked = false;
      }
    })

    //funcion para crear objeto apuesta y despues ponerlo en historial 
    boton.addEventListener("click", function () {
      const apuestaNueva = new Apuesta();
      const montoUsuario = parseFloat(document.querySelector("#monto").value);
      const montoApuesta = parseFloat(monto.value);
      // agregue la verificacion para que el monto solo admita positivos.
      if (!isNaN(montoApuesta) && montoApuesta >= 0) {
        if (montoApuesta <= montoUsuario) {
          if (lista1.checked || lista2.checked || lista3.checked) {
            apuestaNueva.setCantApuesta(monto.value);
            let indice = encontrarNumPartido(local, visitante);
            apuestaNueva.setPartido(listaPartidos[indice - 1]);

            const partidoSeleccionado = apuestaNueva.getPartido();
            const empatan = "empatan";

            if (lista1.checked) {
              apuestaNueva.setEquipoSeleccionado(local);
              apuestaNueva.setPorcentaje(partidoSeleccionado.getGananciaEquipo1());
            } else if (lista2.checked) {
              apuestaNueva.setEquipoSeleccionado(visitante);
              apuestaNueva.setPorcentaje(partidoSeleccionado.getGananciaEquipo2());
            } else {
              apuestaNueva.setEquipoSeleccionado(empatan);
              apuestaNueva.setPorcentaje(partidoSeleccionado.getGananciaEmpate());
            }

            const res = partidoList.elegirResultadoRandomSegunGanancia(local, visitante, empatan, partidoSeleccionado.getGananciaEquipo1(), partidoSeleccionado.getGananciaEquipo2(), partidoSeleccionado.getGananciaEmpate());

            if (res == partidoSeleccionado.getEquipo1()) {
              apuestaNueva.setEquipoGanador(partidoSeleccionado.getEquipo1());
              while (partidoSeleccionado.getGolesEquipo1() <= partidoSeleccionado.getGolesEquipo2()) {
                partidoSeleccionado.setGolesEquipo1(partidoList.metodoRandom(0, 4));
                partidoSeleccionado.setGolesEquipo2(partidoList.metodoRandom(0, 4));
              }
            } else if (res == partidoSeleccionado.getEquipo2()) {
              apuestaNueva.setEquipoGanador(partidoSeleccionado.getEquipo2());
              while (partidoSeleccionado.getGolesEquipo2() <= partidoSeleccionado.getGolesEquipo1()) {
                partidoSeleccionado.setGolesEquipo1(partidoList.metodoRandom(0, 4));
                partidoSeleccionado.setGolesEquipo2(partidoList.metodoRandom(0, 4));
              }
            } else {
              apuestaNueva.setEquipoGanador("empatan");
              let numRandom = partidoList.metodoRandom(0, 5);
              partidoSeleccionado.setGolesEquipo1(numRandom);
              partidoSeleccionado.setGolesEquipo2(numRandom);
            }

            document.querySelector("#monto").value = (montoUsuario - montoApuesta);
            if (!apuestaNueva.getMostrada()) {
              listaApuestas.push(apuestaNueva);
            }
            let nuevoPartido = [];
            for (let i = 0; i < listaPartidos.length; i++) {
              if (!partidosSeleccionados.includes(listaPartidos[i]) && !todosLosPartidos.includes(listaPartidos[i])) {
                nuevoPartido = listaPartidos[i];
                todosLosPartidos.push(nuevoPartido);
                break;
              }
            }

            let indiceSelec = 0;
            for (let i = 0; i < partidosSeleccionados.length; i++) {
              if (partidosSeleccionados[i].getEquipo1() == partidoSeleccionado.getEquipo1() && partidosSeleccionados[i].getEquipo2() == partidoSeleccionado.getEquipo2()) {
                indiceSelec = i;
                partidosSeleccionados[indiceSelec] = nuevoPartido;
                break;
              }
            }

            for (let j = 0; j < elementosPartidos.length; j++) {
              if (j == indiceSelec) {
                const elemento = elementosPartidos[j];
                elemento.fecha.textContent = nuevoPartido.getFecha();
                elemento.equipo1.textContent = nuevoPartido.getEquipo1();
                elemento.equipo2.textContent = nuevoPartido.getEquipo2();
                elemento.Local.textContent = nuevoPartido.getGananciaEquipo1();
                elemento.empate.textContent = nuevoPartido.getGananciaEmpate();
                elemento.Visitante.textContent = nuevoPartido.getGananciaEquipo2();
              }
            }

            // SECCION HISTORIAL:
            let historial = document.querySelector(".seccionHistorial");
            let numLista = 0;
            listaApuestas.forEach((a, index) => {
                if (!a.getMostrada()) {
                    let listaHistorial = document.createElement("article");
                    listaHistorial.classList.add("card", "mb-3");
                    let carta = document.createElement("div");
                    carta.classList.add("card-body");
                    let fechaHistorial = document.createElement("p");
                    fechaHistorial.textContent = a.getPartido().getFecha();
                    fechaHistorial.classList.add("card-text", "fechaHistorial");
                    carta.appendChild(fechaHistorial);
                    let tuApuesta = document.createElement("p");
                    tuApuesta.classList.add("card-text", "tuApuesta");
                    tuApuesta.textContent = "Apostaste: " + a.getEquipoSeleccionado();
                    carta.appendChild(tuApuesta);
                    let aEquipo1 = document.createElement("p");
                    aEquipo1.classList.add("card-text", "equipo1Historial");
                    aEquipo1.textContent = a.getPartido().getEquipo1() + " Goles: " + a.getPartido().getGolesEquipo1();
                    carta.appendChild(aEquipo1);
                    let aEquipo2 = document.createElement("p");
                    aEquipo2.classList.add("card-text", "equipo2Historial");
                    aEquipo2.textContent = a.getPartido().getEquipo2() + " Goles: " + a.getPartido().getGolesEquipo2();
                    carta.appendChild(aEquipo2);
                    let mensajeResultado = document.createElement("p");
                    mensajeResultado.classList.add("card-text", "mensajeResultado");
                    if (a.getEquipoGanador() == a.getEquipoSeleccionado()) {
                        mensajeResultado.textContent = "¡Felicidades, has ganado!";
                        let botonReclamar = document.createElement("button");
                        botonReclamar.type = "button";
                        botonReclamar.classList.add("reclamarBtn");
                        botonReclamar.textContent = "Reclamar";
                        botonReclamar.dataset.index = index;
                        botonReclamar.addEventListener("click", function() {
                        });
                        mensajeResultado.appendChild(botonReclamar);
                    } else {
                        mensajeResultado.textContent = "¡Perdiste! Más suerte la próxima.";
                        let btnBorrarLista = document.createElement("button");
                        btnBorrarLista.type = "button";
                        btnBorrarLista.classList.add("reclamarBtn");
                        btnBorrarLista.textContent = "Borrar";
                        btnBorrarLista.dataset.index = index;
                        btnBorrarLista.addEventListener("click", function() {
                        });
                        mensajeResultado.appendChild(btnBorrarLista);
                    }
                    carta.appendChild(mensajeResultado);
                    listaHistorial.appendChild(carta);
                    historial.appendChild(listaHistorial);
                }
            });
            apuestaNueva.setMostrada(true);

            listado.removeChild(divApuesta);
            apuestasVigentes--;
            let index = listadoApuestas.indexOf(titulo.textContent);
            if (index > -1) {
              listadoApuestas.splice(index, 2);
            }
          }
        } else {
          let resalt = document.querySelector("#monto");
          resaltar2(resalt);
        }
      } else {
        alert("el monto debe ser un numero positivo");
      }
    });

    // Event listener para los botones Reclamar
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("reclamarBtn")) {
        const index = event.target.dataset.index;
        const apuesta = listaApuestas[index];

        const montoUsuario = parseFloat(document.querySelector("#monto").value);
        const montoGanado = parseFloat(apuesta.getCantApuesta()) * parseFloat(apuesta.getPorcentaje());
        document.querySelector("#monto").value = (montoUsuario + montoGanado);
        event.target.closest("article").remove();
        apuestasGanadas = apuestasGanadas.filter(a => a !== apuesta);
      }
    });
    document.querySelector("#nuevaApuesta").style.display = "block";
  }
  else {
    for (let apuesta = 0; apuesta < listadoApuestas.length; apuesta ++) {
      if (listadoApuestas[apuesta] == titulo.textContent) {
        let resalte = document.getElementById(listadoApuestas[apuesta].split(" ").join("").split(".").join(""));
        resaltar(resalte);
        break;
      }
    }
  }
}

function encontrarNumPartido(local, visitante){
  for (let i = 0; i < listaPartidos.length; i++) {
    if (listaPartidos[i].getEquipo1() === local && listaPartidos[i].getEquipo2() === visitante) {
      return listaPartidos[i].getNumPartido();
    }
  }
}


//funcion hecha para resaltar si una apuesta ya fue agregada a la columna de apuestas
function resaltar(resalte) {
  let opacity = 1;
  let interval = setInterval(function() {
    resalte.style.border = `2px solid rgba(255, 0, 0, ${opacity})`;
    opacity -= 0.05; 
    if (opacity <= 0.3) {
      clearInterval(interval);
      resalte.style.border = "3px double #b2b2b2"
      resalte.style.borderLeft = "0px"
    }
  }, 70); 
}

function resaltar2(resaltar) {
  let bgopacity = 1.0;
  const colorInicial = "rgb(255, 255, 255)";
  const colorResaltar = "rgba(95, 158, 160, 1.0)";

  resaltar.style.backgroundColor = colorResaltar;

  let intervalo = setInterval(function () {
    bgopacity -= 0.02;
    resaltar.style.backgroundColor = `rgba(95, 158, 160, ${bgopacity})`;
    if (bgopacity <= 0.2) {
      clearInterval(intervalo);
      resaltar.style.backgroundColor = colorInicial;
    }
  }, 20);
}


