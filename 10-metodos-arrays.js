//METODOS ARRAYS
let array1 = ["juan","camilo","andres"];

//TRANSFORMADORES --> Modifican el array principal
//pop() - elimina el ultimo elemento del array y lo devuelve
let resultado1 = array1.pop();

//shift() - elimina el primer elemento del array y lo devuelve
let resultado2 = array1.shift();

//push() - agrega un elemento al final de la lista
let resultado3 = array1.push("new","new2");

//reverse() - inivierte el orden de los elementos de un array
let resultado4 = array1.reverse();

//unShift() -agrega elementos al inicio del array y devuelve su longitud
let resultado5 = array1.unshift("inicio1","inicio2");

//sort() - ordena elementos localmente y devuelve arreglo ordenado
let resultado6 = array1.sort();

//splice - agrega y elimina elementos
let resultado7 = array1.splice(1,0,"splice1");





//ACCESORES --> NO MODIDICAN EL ARRAY ORIGINAL
let array2 = ["amarillo","azul","verde","rojo"];

//join() - crea una cadena de texto del array, damos el separador
let resultado8 = array2.join(" - ");

//slice() -devuelve una parte del array dentro de un nuevo array
let resultado9 = array2.slice(0,2); //2 no incluido

//includes() - busca elemento dentro del array, devuelve true o false
//indexOf()-busca y devuelve el index del elemento buscado
//lastIndexOf() -muestra el ultimo index(elemento) que coincide





//DE REPETICION
let array3 = ["juan","camilo","andres","edinson"]

//filter()
array3.filter((nombre)=>console.log(nombre));
//nombre va a ser igual a cada elemto del array en cada vuelta
let resultado10 = array3.filter((nombre)=> nombre.length > 4);
//filter a difeerencia de forEach puede llevar condicion

//forEach()
array3.forEach((nombre)=>console.log(nombre));
//nombre va a ser igual a cada elemto del array en cada vuelta

 console.log(resultado10);