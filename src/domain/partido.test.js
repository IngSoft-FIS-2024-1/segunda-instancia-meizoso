import {Partido} from '../domain/partido.js';
let partido;

beforeEach(() => {
  partido = new Partido();
});

test('test getNumPartido', () => {
  expect(partido.getNumPartido()).toBe(undefined);
});

test('test setNumPartido', () => {
  partido.setNumPartido(1234);
  expect(partido.getNumPartido()).toBe(1234);
});

test('test getEquipo1', () => {
  expect(partido.getEquipo1()).toBe(undefined);
});

test('test setEquipo1', () => {
  partido.setEquipo1('benfica');
  expect(partido.getEquipo1()).toBe('benfica');
});

test('test getEquipo2', () => {
  expect(partido.getEquipo2()).toBe(undefined);
});

test('test setEquipo2', () => {
  partido.setEquipo2('bormound');
  expect(partido.getEquipo2()).toBe('bormound');
});

test('test getFecha', () => {
  expect(partido.getFecha()).toBe(undefined);
});

test('test setFecha', () => {
  partido.setFecha('29-06-2004');
  expect(partido.getFecha()).toBe('29-06-2004');
});

test('test getGolesEquipo1', () => {
  expect(partido.getGolesEquipo1()).toBe(0);
});

test('test setGolesEquipo1', () => {
  partido.setGolesEquipo1(5);
  expect(partido.getGolesEquipo1()).toBe(5);
});

test('test getGolesEquipo2', () => {
  expect(partido.getGolesEquipo2()).toBe(0);
});

test('test setGolesEquipo2', () => {
  partido.setGolesEquipo2(5);
  expect(partido.getGolesEquipo2()).toBe(5);
});

test('test getGananciaEquipo1', () => {
  expect(partido.getGananciaEquipo1()).toBe(0);
});

test('test setGananciaEquipo1', () => {
  partido.setGananciaEquipo1(5);
  expect(partido.getGananciaEquipo1()).toBe(5);
});

test('test getGananciaEmpate', () => {
  expect(partido.getGananciaEmpate()).toBe(0);
});

test('test setGananciaEmpate', () => {
  partido.setGananciaEmpate(1.2);
  expect(partido.getGananciaEmpate()).toBe(1.2);
});

test('test getGananciaEquipo2', () => {
  expect(partido.getGananciaEquipo2()).toBe(0);
});

test('test setGananciaEquipo2', () => {
  partido.setGananciaEquipo2(1.2);
  expect(partido.getGananciaEquipo2()).toBe(1.2);
});
