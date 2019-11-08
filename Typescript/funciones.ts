function (param1:string, param2:string = "inicializado", param3?:string){
  if(param3){
    console.log(`${param1} ${param2} ${param3}` );
  }
  else{
    console.log(`${param1} ${param2});
  }
}

parametros("v1");
parametros("v1", "v2","v3");
parametros("v1","v2", "v3");
