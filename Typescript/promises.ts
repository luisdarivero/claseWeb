let asincrono = new Promise(function (resolve,reject){

  setTimeout(()=>{
    console.log("Ejecusion asincrona finalizada...");
    reject();//marcada  como no exitosa
    resolve();//marcada como exitosa
  },3000)

})

console.log("simulando alguna operación 1....");

asincrono.then(
  function () {
      console.log("Ejecucion asincrona exitosa...");
  },
  function(){
    console.log("ejecusion asincrona con error...");
  }
)

console.log("simulando alguna operacion 2...")
console.log("simulando una operacion 3...");
