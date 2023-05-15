//destructuracion en array
const numeros = [0,1,2];
let [one,two,three] = numeros;
console.log(one,two,three)

//destructuracion en objeto
const persona = {
    nombre: "Juan",
    apellido: "lucumi",
    edad: 22
}

let {nombre,apellido,edad} = persona;
//cuando es un objeto, el nombre de las variables debe ser igual al de las props
console.log(nombre,apellido,edad)
