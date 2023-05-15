/*try{
console.log("codigo a evaluar");
console.log(noExiste);
}catch(error){
console.log("error dado");
console.log(error)
}finally{
console.log("finally")
}*/

try{
let numero = "r";
if(isNaN(numero)){
    throw new Error("El caracter ingresado no es un numero");
}
console.log(numero*numero);
}catch(error){
console.log(`Se produjo el siguiente error ${error}`)
}
