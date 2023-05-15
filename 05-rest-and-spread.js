//REST

function sumar(a,b,...c){
//crea un array de los elementos desde c
let resultado = a + b ;
c.forEach((n)=>{
    resultado +=n
})
console.log(c);

return resultado;

}

console.log(sumar(1,2,3,4,5,6,7))

//SPREAD OPERATOR

const arr1 = ["a","b","c","d","f"],
    arr2 = ["g","h","i","k","l"];

console.log(arr1,arr2)
const arr3 = [...arr1,...arr2];
//une los dos arrays en un solo array
console.log(arr3)