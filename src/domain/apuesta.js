// import { PartidoList } from "../domain/partidolist.js";
// const partidoList = new PartidoList();
export class Apuesta {
  #cantApuesta;
  #numPartido;
  #partido;
  #mostrada;
  // #tipoApuestaCantGoles;
  // #cantGolesEquipo1;
  // #cantGolesEquipo2;
  // #tipoApuestaEquipo;
  #equipoSeleccionado;
  #equipoGanador;
  // #estadoApuesta;
  #porcentaje;
  constructor(cantApuesta,
      partido,
      numPartido,
      // estadoApuesta
      /* tipoApuesta = ''*/) {
    this.#mostrada = false;
    this.#cantApuesta = cantApuesta;
    this.#numPartido = numPartido;
    this.#partido = partido;
    // this.#estadoApuesta = estadoApuesta;
    // this.#tipoApuestaCantGoles = tipoApuesta === 'cantGoles';
    // this.#tipoApuestaEquipo = tipoApuesta === 'equipoGanador';
    // if (this.#tipoApuestaCantGoles) {
    // this.#cantGolesEquipo1 = 0;
    // this.#cantGolesEquipo2 = 0;
    // } else if (this.#tipoApuestaEquipo) {
    // this.#equipoGanador = '';
  }
  setMostrada(bool) {
    return this.#mostrada = bool;
  }

  getMostrada() {
    return this.#mostrada;
  }

  getEquipoSeleccionado() {
    return this.#equipoSeleccionado;
  }

  setEquipoSeleccionado(equipoS) {
    return this.#equipoSeleccionado = equipoS;
  }

  getCantApuesta() {
    return this.#cantApuesta;
  }

  setCantApuesta(monto) {
    return this.#cantApuesta = monto;
  }

  getNumPartido() {
    return this.#numPartido;
  }

  setNumPartido(numero) {
    return this.#numPartido = numero;
  }

  getPartido() {
    return this.#partido;
  }

  setPartido(partido1) {
    return this.#partido = partido1;
  }

  getEquipoGanador() {
    return this.#equipoGanador;
  }

  setEquipoGanador(equipo) {
    return this.#equipoGanador = equipo;
  }

  getPorcentaje() {
    return this.#porcentaje;
  }

  setPorcentaje(porcentaje) {
    return this.#porcentaje = porcentaje;
  }

  // getEstadoApuesta() {
  // return this.#estadoApuesta;
  // }

  // setEstadoApuesta(estado) {
  // return this.#estadoApuesta = estado;
  // }

  // getCantGolesEquipo1() {
  // return this.#cantGolesEquipo1;
  // }

  // getCantGolesEquipo2() {
  // return this.#cantGolesEquipo2;
  // }

  // setCantGolesEquipo1(cantGolesEquipo1) {
  // this.#cantGolesEquipo1 = cantGolesEquipo1;
  // }

  // setCantGolesEquipo2(cantGolesEquipo2) {
  // this.#cantGolesEquipo2 = cantGolesEquipo2;
  // }
  
}
