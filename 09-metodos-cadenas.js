let cadena = "cadena de prueba";
let cadena2 = "cadena"

//concat() - juntar cadenas 2 o mas
let resultado1 = cadena.concat(cadena2); //concat(" hola")

//startsWith() - verifica si empieza con ...
let resultado2 = cadena.startsWith("c"); //startsWith(cadena2)

//endsWith() - verifica si termina con ...
let resultado3 = cadena.endsWith("a"); //endsWith(cadena2)

//includes() - busca una cadena dentro de otra
let resultado4 = cadena.includes("de"); //includes(cadena2)

//indexOf() - muestra el index de la busqueda
let resultado5 = cadena.indexOf("a");

//lastIndexOf() - muestra el ultimo index que coincide
let resultado6 = cadena.lastIndexOf("a");





//padStart() - pone caracteres al inicio segun cantidad deseada
let resultado7 = cadena2.padStart(10,"a");

//padEnd() - pone caracteres al final segun cantidad deseada
let resultado8 = cadena2.padEnd(10,"a");

//repeat() - repite la cadena la cantidad de veces indicada
let resultado9 = cadena2.repeat(4);





//split() - divide la cadena como le pidamos
let cadena3 = "hola,como,estas"
let resultado10 = cadena3.split(",") //divide cada ","
let resultado11 = cadena3.split("como") //divide en "como"

//substring() - crea un nuevo string del anterior
let cadena4 = "ABCDFG ABC EFG"
let resultado12 = cadena4.substring(0,10);

//toLowerCase() - convierte a minuscula
let resultado13 = cadena4.toLowerCase();

//toUpperCase() - convierte a mayuscula
let cadena5 = "asd asd asd";
let resultado14 = cadena5.toUpperCase();

//toString() - convierte a string
let cadena6 = 123;
let resultado15 = cadena6.toString();
let tipo = typeof(resultado15);

//trim() - quita espacios de una cadena de texto
let cadena7 = "   asd   " //.lenght -> 9
let resultado16 = cadena7.trim(); //.lenght -> 3

//trimEnd()- quita espacios al final 
//trimStart() - quita espacios al inicio

console.log(); // ---->> comprobador
