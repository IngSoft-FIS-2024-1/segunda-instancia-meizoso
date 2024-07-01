import {ApuestaList} from '../domain/apuestalist.js';
import {Apuesta} from '../domain/apuesta.js';
import {Partido} from '../domain/partido.js';
let listaPartido;
let apuesta;

beforeEach(() => {
  listaPartido = new ApuestaList();
  const partido = new Partido(1, 'Real Madrid', 'Barcelona', '01-06-2024');
  apuesta = new Apuesta(100, 1, partido, 1);
});

test('test funcion add', () => {
  listaPartido.add(apuesta);
  expect(listaPartido.getlistaApuestas()).toContain(apuesta);
});

test('test getlistaApuestas', () => {
  expect(listaPartido.getlistaApuestas()).toEqual([]);
});
