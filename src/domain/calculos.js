function agregarMontoaInput(){
    let monto = 50;
    const inputMonto = document.getElementById("monto");
    const montoModal = document.getElementById("montoInput").value;
  
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
  //motodo para generar numeros randoms entre un min y un max
function metodoRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //este metodo calcula el ganador asegurandose que sea coherente con la probabilidad
  function elegirResultadoRandomSegunGanancia(local, visitante, empatan, ganancia1, ganancia2, gananciaE){
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
  