export class ApuestaList {
  #apuestas;

  constructor() {
    this.#apuestas = [];
  }

  add(apuesta) {
    this.#apuestas.push(apuesta);
  }

  getlistaApuestas() {
    return this.#apuestas;
  }
}
