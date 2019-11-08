"use strict";
class CalculadoraArrow {
    constructor() {
        this.suma = (param1, param2, param3) => {
            //si el parametro 3 existe
            let resultado = param1 + param2;
            let funcion = "suma";
            if (param3) {
                this.imprimir(funcion, resultado * 3, ",y multiplicado por 3");
                return;
            }
            this.imprimir(funcion, resultado);
        };
        this.resta = (param1, param2, param3) => {
            //si el parametro 3 existe
            let resultado = param1 - param2;
            let funcion = "resta";
            if (param3) {
                this.imprimir(funcion, resultado * 3, ",y multiplicado por 3");
                return;
            }
            this.imprimir(funcion, resultado);
        };
        this.divicion = (param1, param2, param3) => {
            //si el parametro 3 existe
            let resultado = param1 / param2;
            let funcion = "divicion";
            if (param3) {
                this.imprimir(funcion, resultado * 3, ",y multiplicado por 3");
                return;
            }
            this.imprimir(funcion, resultado);
        };
        this.multiplicacion = (param1, param2, param3) => {
            //si el parametro 3 existe
            let resultado = param1 * param2;
            let funcion = "Multiplicación";
            if (param3) {
                this.imprimir(funcion, resultado * 3, ",y multiplicado por 3");
                return;
            }
            this.imprimir(funcion, resultado);
        };
        this.imprimir = (texto, resultado, extra) => {
            if (extra) {
                console.log(`El resultado de la ${texto}${extra} es: ${resultado}`);
                return;
            }
            console.log(`El resultado de la ${texto} es: ${resultado}`);
        };
    }
}
let calculadora = new CalculadoraArrow();
calculadora.suma(1, 2, 3);
calculadora.suma(3, 3);
calculadora.resta(2, 1, 3);
calculadora.resta(3, 3);
calculadora.divicion(2, 1, 3);
calculadora.divicion(3, 3);
calculadora.multiplicacion(2, 1, 3);
calculadora.multiplicacion(3, 3);
