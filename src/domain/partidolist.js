import {Partido} from './partido.js';
export class PartidoList {
  #partidos;

  constructor() {
    this.#partidos = [];
  }

  add(partido) {
    this.#partidos.push(partido);
  }

  getlistaPartidos() {
    return this.#partidos;
  }

  metodoRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  metodoRandomConComa(min, max) {
    const numRand = Math.random() * (max - min) + min;
    return parseFloat(numRand.toFixed(2));
  }

  cargaDePartidos() {
    const partido1 = new Partido(1,
        'Real Madrid',
        'Barcelona',
        '01-06-2024');
    partido1.setGolesEquipo1(0);
    partido1.setGolesEquipo2(0);
    partido1.setGananciaEquipo1(
        this.metodoRandomConComa(0.4, 2.9));
    partido1.setGananciaEmpate(
        this.metodoRandomConComa(0.6, 1.2));
    partido1.setGananciaEquipo2(
        this.metodoRandomConComa(0.4, 3.0));
    this.#partidos.push(partido1);
    const partido2 = new Partido(2,
        'Liverpool',
        'Man. United',
        '06-06-2024');
    partido2.setGolesEquipo1(0);
    partido2.setGolesEquipo2(0);
    partido2.setGananciaEquipo1(
        this.metodoRandomConComa(1, 1.9));
    partido2.setGananciaEmpate(
        this.metodoRandomConComa(1, 1.2));
    partido2.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 5.0));
    this.#partidos.push(partido2);
    const partido3 = new Partido(3,
        'Bayern Munich',
        'B.Dortmund',
        '14-06-2024');
    partido3.setGolesEquipo1(0);
    partido3.setGolesEquipo2(0);
    partido3.setGananciaEquipo1(
        this.metodoRandomConComa(1.0, 2.9));
    partido3.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido3.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 3.0));
    this.#partidos.push(partido3);
    const partido4 = new Partido(4,
        'PSG',
        'Olympique Lyon',
        '12-06-2024');
    partido4.setGolesEquipo1(0);
    partido4.setGolesEquipo2(0);
    partido4.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 3.9));
    partido4.setGananciaEmpate(
        this.metodoRandomConComa(1, 1.2));
    partido4.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 3.0));
    this.#partidos.push(partido4);
    const partido5 = new Partido(5,
        'Juventus',
        'Inter Milan',
        '22-06-2024');
    partido5.setGolesEquipo1(0);
    partido5.setGolesEquipo2(0);
    partido5.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.9));
    partido5.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido5.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 3));
    this.#partidos.push(partido5);
    const partido6 = new Partido(
        6,
        'Chelsea',
        'Arsenal',
        '11-06-2024');
    partido6.setGolesEquipo1(0);
    partido6.setGolesEquipo2(0);
    partido6.setGananciaEquipo1(
        this.metodoRandomConComa(1, 2.9));
    partido6.setGananciaEmpate(
        this.metodoRandomConComa(1.3, 1.5));
    partido6.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 3.0));
    this.#partidos.push(partido6);
    const partido7 = new Partido(7,
        'Man. United',
        'Tot. Hotspur',
        '23-06-2024');
    partido7.setGolesEquipo1(0);
    partido7.setGolesEquipo2(0);
    partido7.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 3.2));
    partido7.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido7.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 1.4));
    this.#partidos.push(partido7);
    const partido8 = new Partido(8,
        'AC Milan',
        'Napoli',
        '03-08-2024');
    partido8.setGolesEquipo1(0);
    partido8.setGolesEquipo2(0);
    partido8.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 0.8));
    partido8.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido8.setGananciaEquipo2(
        this.metodoRandomConComa(1, 3.0));
    this.#partidos.push(partido8);
    const partido9 = new Partido(9,
        'Atl. Madrid',
        'Sevilla',
        '04-07-2024');
    partido9.setGolesEquipo1(0);
    partido9.setGolesEquipo2(0);
    partido9.setGananciaEquipo1(
        this.metodoRandomConComa(1.9, 2.9));
    partido9.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido9.setGananciaEquipo2(
        this.metodoRandomConComa(1.7, 3.0));
    this.#partidos.push(partido9);
    const partido10 = new Partido(10,
        'Ajax',
        'PSV Eindhoven',
        '01-06-2024');
    partido10.setGolesEquipo1(0);
    partido10.setGolesEquipo2(0);
    partido10.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 1.4));
    partido10.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido10.setGananciaEquipo2(
        this.metodoRandomConComa(2.4, 3.0));
    this.#partidos.push(partido10);
    const partido11 = new Partido(11,
        'Porto',
        'Benfica',
        '11-07-2024');
    partido11.setGolesEquipo1(0);
    partido11.setGolesEquipo2(0);
    partido11.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.9));
    partido11.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido11.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 2.4));
    this.#partidos.push(partido11);
    const partido12 = new Partido(12,
        'Celtic',
        'Rangers',
        '01-06-2024');
    partido12.setGolesEquipo1(0);
    partido12.setGolesEquipo2(0);
    partido12.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.9));
    partido12.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido12.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 3));
    this.#partidos.push(partido12);
    const partido13 = new Partido(13,
        'Flamengo',
        'Palmeiras',
        '14-07-2024');
    partido13.setGolesEquipo1(0);
    partido13.setGolesEquipo2(0);
    partido13.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.3));
    partido13.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido13.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 1.3));
    this.#partidos.push(partido13);
    const partido14 = new Partido(14,
        'River Plate',
        'Boca Juniors',
        '25-07-2024');
    partido14.setGolesEquipo1(0);
    partido14.setGolesEquipo2(0);
    partido14.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.3));
    partido14.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido14.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 2.3));
    this.#partidos.push(partido4);
    const partido15 = new Partido(15,
        'Club America',
        'Guadalajara',
        '21-06-2024');
    partido15.setGolesEquipo1(0);
    partido15.setGolesEquipo2(0);
    partido15.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 1.2));
    partido15.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido15.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 2.3));
    this.#partidos.push(partido15);
    const partido16 = new Partido(16,
        'Tot. Hotspur',
        'Everton',
        '30-06-2024');
    partido16.setGolesEquipo1(0);
    partido16.setGolesEquipo2(0);
    partido16.setGananciaEquipo1(
        this.metodoRandomConComa(1.7, 2));
    partido16.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido16.setGananciaEquipo2(
        this.metodoRandomConComa(1.8, 2.3));
    this.#partidos.push(partido16);
    const partido17 = new Partido(17,
        'Atalanta',
        'Lazio',
        '03-07-2024');
    partido17.setGolesEquipo1(0);
    partido17.setGolesEquipo2(0);
    partido17.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.9));
    partido17.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido17.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 3.0));
    this.#partidos.push(partido17);
    const partido18 = new Partido(18,
        'AS Roma',
        'Fiorentina',
        '01-06-2024');
    partido18.setGolesEquipo1(0);
    partido18.setGolesEquipo2(0);
    partido18.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.9));
    partido18.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido18.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 3.0));
    this.#partidos.push(partido18);
    const partido19 = new Partido(19,
        'Lille',
        'Monaco',
        '01-08-2024');
    partido19.setGolesEquipo1(0);
    partido19.setGolesEquipo2(0);
    partido19.setGananciaEquipo1(
        this.metodoRandomConComa(1.7, 2));
    partido19.setGananciaEmpate(
        this.metodoRandomConComa(1, 3));
    partido19.setGananciaEquipo2(
        this.metodoRandomConComa(1.3, 3.0));
    this.#partidos.push(partido19);
    const partido20 = new Partido(20,
        'RB Leipzig',
        'Eint. Frankfurt',
        '20-07-2024');
    partido20.setGolesEquipo1(0);
    partido20.setGolesEquipo2(0);
    partido20.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.9));
    partido20.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido20.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 2.2));
    this.#partidos.push(partido20);
    const partido21 = new Partido(21,
        'Sporting CP',
        'Braga',
        '09-07-2024');
    partido21.setGolesEquipo1(0);
    partido21.setGolesEquipo2(0);
    partido21.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.2));
    partido21.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido21.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 2.6));
    this.#partidos.push(partido21);
    const partido22 = new Partido(22,
        'Galatasaray',
        'Fenerbahce',
        '01-06-2024');
    partido22.setGolesEquipo1(0);
    partido22.setGolesEquipo2(0);
    partido22.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.9));
    partido22.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.2));
    partido22.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 3.0));
    this.#partidos.push(partido22);
    const partido23 = new Partido(23,
        'Olympiakos',
        'Panathinaikos',
        '08-07-2024');
    partido23.setGolesEquipo1(0);
    partido23.setGolesEquipo2(0);
    partido23.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.9));
    partido23.setGananciaEmpate(
        this.metodoRandomConComa(1.1, 1.4));
    partido23.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 3.0));
    this.#partidos.push(partido23);
    const partido24 = new Partido(24,
        'Cruz Azul',
        'Pumas UNAM',
        '02-06-2024');
    partido24.setGolesEquipo1(0);
    partido24.setGolesEquipo2(0);
    partido24.setGananciaEquipo1(
        this.metodoRandomConComa(1.1, 2.9));
    partido24.setGananciaEmpate(
        this.metodoRandomConComa(1.6, 1.2));
    partido24.setGananciaEquipo2(
        this.metodoRandomConComa(1.1, 3.0));
    this.#partidos.push(partido24);
    const partido25 = new Partido(25,
        'Al Hilal',
        'Al Nassr',
        '07-07-2024');
    partido25.setGolesEquipo1(0);
    partido25.setGolesEquipo2(0);
    partido25.setGananciaEquipo1(
        this.metodoRandomConComa(3.2, 5));
    partido25.setGananciaEmpate(
        this.metodoRandomConComa(1.3, 1.5));
    partido25.setGananciaEquipo2(
        this.metodoRandomConComa(1.7, 2.0));
    this.#partidos.push(partido25);
  }
  elegirResultadoRandomSegunGanancia(local, visitante, empatan, ganancia1, ganancia2, gananciaE){
    let probLocal = 1 / ganancia1;
    let probVisitante = 1 / ganancia2;
    let probEmpatan = 1 / gananciaE;
  
    const probTotal = probLocal + probVisitante + probEmpatan;
  
    const probLocalMenor1 = probLocal / probTotal;
    const probVisitanteMenor1 = probVisitante / probTotal;
    const probEmpatanMenor1 = probEmpatan / probTotal;
  
    let num = Math.random();
  
    if(num < probLocalMenor1){
      return local;
    }else if(num < probLocalMenor1 + probEmpatanMenor1){
      return empatan;
    }else{
      return visitante;
    }
  }
  metodoRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
}
