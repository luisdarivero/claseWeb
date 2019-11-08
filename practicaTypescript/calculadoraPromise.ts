class CalculadoraArrow{

  suma = function(param1: number, param2:number, param3?:number){
    return new Promise(function(resolve,reject){
      setTimeout(()=>{

        let resultado = param1 + param2;
        let funcion = "suma";
          if(param3){
          console.log(`El resultado de la ${funcion},y multiplicado por 3 es: ${resultado}`);
          resolve();
          return;
          }
          console.log(`El resultado de la ${funcion} es: ${resultado}`);
          resolve();

      },3000)
    });
  }

  resta = function(param1: number, param2:number, param3?:number){
    return new Promise(function(resolve,reject){
      setTimeout(()=>{

        let resultado = param1 - param2;
        let funcion = "resta";
          if(param3){
          console.log(`El resultado de la ${funcion},y multiplicado por 3 es: ${resultado}`);
          resolve();
          return;
          }
          console.log(`El resultado de la ${funcion} es: ${resultado}`);
          resolve();

      },4000)
    });
  }

  multiplicacion = function(param1: number, param2:number, param3?:number){
    return new Promise(function(resolve,reject){
      setTimeout(()=>{

        let resultado = param1 * param2;
        let funcion = "multiplicacion";
          if(param3){
          console.log(`El resultado de la ${funcion},y multiplicado por 3 es: ${resultado}`);
          resolve();
          return;
          }
          console.log(`El resultado de la ${funcion} es: ${resultado}`);
          resolve();

      },2000)
    });
  }

  divicion = function(param1: number, param2:number, param3?:number){
    return new Promise(function(resolve,reject){
      setTimeout(()=>{

        let resultado = param1 / param2;
        let funcion = "divicion";
          if(param3){
          console.log(`El resultado de la ${funcion},y multiplicado por 3 es: ${resultado}`);
          resolve();
          return;
          }
          console.log(`El resultado de la ${funcion} es: ${resultado}`);
          resolve();

      },1000)
    });
  }



}

let calculadora = new CalculadoraArrow();

let funcionE = function(){
  console.log("Éxito en la ejecución Asincrona");
}

let funcionF = function(){
  console.log("Falla en la ejecución Asincrona");
}

calculadora.suma(1,2,3).then(funcionE,funcionF);
calculadora.suma(3,3).then(funcionE,funcionF);
calculadora.resta(2,1,3).then(funcionE,funcionF);
calculadora.resta(3,3).then(funcionE,funcionF);
calculadora.divicion(2,1,3).then(funcionE,funcionF);
calculadora.divicion(3,3).then(funcionE,funcionF);
calculadora.multiplicacion(2,1,3).then(funcionE,funcionF);
calculadora.multiplicacion(3,3).then(funcionE,funcionF);
