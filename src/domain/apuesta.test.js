import {Apuesta} from '../domain/apuesta.js';
let apuesta;
import {Partido} from './partido.js';
let partido;

beforeEach(() => {
  apuesta = new Apuesta();
  partido = new Partido();
});

test('test getMostrada', () => {
  expect(apuesta.getMostrada()).toBe(false);
});

test('test setMostrada', () => {
  apuesta.setMostrada(true);
  expect(apuesta.getMostrada()).toBe(true);
});

test('test getEquipoSeleccionado', () => {
  expect(apuesta.getEquipoSeleccionado()).toBe(undefined);
});

test('test setEquipoSeleccionado', () => {
  apuesta.setEquipoSeleccionado('real madrid');
  expect(apuesta.getEquipoSeleccionado()).toBe('real madrid');
});

test('test getCantApuesta', () => {
  expect(apuesta.getCantApuesta()).toBe(undefined);
});

test('test setCantApuesta', () => {
  apuesta.setCantApuesta(200);
  expect(apuesta.getCantApuesta()).toBe(200);
});

test('test getNumPartido', () => {
  expect(apuesta.getNumPartido()).toBe(undefined);
});

test('test setNumPartido', () => {
  apuesta.setNumPartido(2);
  expect(apuesta.getNumPartido()).toBe(2);
});

test('test getPartido', () => {
  expect(apuesta.getPartido()).toBe(undefined);
});

test('test setPartido', () => {
  apuesta.setPartido(partido);
  expect(apuesta.getPartido()).toBe(partido);
});

test('test getEquipoGanador', () => {
  expect(apuesta.getEquipoGanador()).toBe(undefined);
});

test('test setEquipoGanador', () => {
  apuesta.setEquipoGanador('nacional');
  expect(apuesta.getEquipoGanador()).toBe('nacional');
});

test('test getPorcentaje', () => {
  expect(apuesta.getPorcentaje()).toBe(undefined);
});

test('test setPorcentaje', () => {
  apuesta.setPorcentaje(1.5);
  expect(apuesta.getPorcentaje()).toBe(1.5);
});
