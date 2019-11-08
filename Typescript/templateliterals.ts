let nombre:string = "jorge";
let apellidopaterno:string = "miramontes";
let apellidoMaterno:string = "Amezcua";

console.log(nombre + " " + apellidopaterno + " " + apellidoMaterno);

let tl = `${nombre} ${apellidopaterno} ${apellidoMaterno}`;

console.log(tl);

function suma(numero1: number, numero2:number){
  return numero1 + numero2;
}

let sumaDirecta = `${1+2}`;
let sumaFuncion = `${suma(1,2)}`;

console.log(sumaDirecta);
console.log(sumaFuncion);
