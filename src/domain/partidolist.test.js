import {PartidoList} from '../domain/partidolist.js';
import {Partido} from '../domain/partido.js';
let partidolist;

beforeEach(() => {
  partidolist = new PartidoList();
});

test('test funcion add', () => {
  const partido = new Partido(1, 'Equipo1', 'Equipo2', '01-01-2024');
  partidolist.add(partido);
  expect(partidolist.getlistaPartidos()).toContain(partido);
});

test('test getListaPartidos', () => {
  expect(partidolist.getlistaPartidos()).toEqual([]);
});

test('test randomMinMax', () => {
  const res = partidolist.metodoRandom(3, 5);
  expect(res).toBeGreaterThanOrEqual(3);
  expect(res).toBeLessThanOrEqual(5);
});

test('test randomMinMaxConComa', () => {
  const res = partidolist.metodoRandomConComa(3.5, 5);
  expect(res).toBeGreaterThanOrEqual(3.5);
  expect(res).toBeLessThanOrEqual(5);
});

test('test funcion carga de partidos', () => {
  partidolist.cargaDePartidos();
  expect(partidolist.getlistaPartidos().length).toBe(25);
});
