export class Partido {
  #numPartido;
  #equipo1;
  #equipo2;
  #fecha;
  #golesEquipo1;
  #golesEquipo2;
  #gananciaEquipo1;
  #gananciaEmpate;
  #gananciaEquipo2;
  constructor(numPartido, equipo1, equipo2, fecha) {
    this.#numPartido = numPartido;
    this.#equipo1 = equipo1;
    this.#equipo2 = equipo2;
    this.#fecha = fecha;
    this.#golesEquipo1 = 0;
    this.#golesEquipo2 = 0;
    this.#gananciaEquipo1 = 0;
    this.#gananciaEmpate = 0;
    this.#gananciaEquipo2 = 0;
  }

  getNumPartido() {
    return this.#numPartido;
  }

  setNumPartido(numero) {
    return this.#numPartido = numero;
  }

  getEquipo1() {
    return this.#equipo1;
  }

  setEquipo1(nombre) {
    return this.#equipo1 = nombre;
  }

  getEquipo2() {
    return this.#equipo2;
  }

  setEquipo2(nombre) {
    return this.#equipo2 = nombre;
  }

  getFecha() {
    return this.#fecha;
  }

  setFecha(fecha) {
    return this.#fecha = fecha;
  }

  getGolesEquipo1() {
    return this.#golesEquipo1;
  }

  setGolesEquipo1(cantGoles) {
    return this.#golesEquipo1 = cantGoles;
  }

  getGolesEquipo2() {
    return this.#golesEquipo2;
  }

  setGolesEquipo2(cantGoles) {
    return this.#golesEquipo2 = cantGoles;
  }

  getGananciaEquipo1() {
    return this.#gananciaEquipo1;
  }

  setGananciaEquipo1(ganancia) {
    return this.#gananciaEquipo1 = ganancia;
  }

  getGananciaEmpate() {
    return this.#gananciaEmpate;
  }

  setGananciaEmpate(ganancia) {
    return this.#gananciaEmpate = ganancia;
  }

  getGananciaEquipo2() {
    return this.#gananciaEquipo2;
  }

  setGananciaEquipo2(ganancia) {
    return this.#gananciaEquipo2 = ganancia;
  }
}
