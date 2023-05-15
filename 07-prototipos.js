//FUNCION CONSTRUCTORA
function Estudiante (nombre,apellido){
    this.nombre = nombre,
    this.apellido = apellido;
}

//ASIGNAMOS METODOS AL PROTOTYPE
Estudiante.prototype.saludar=function(){
    console.log(`Hola soy un estudiante y mi nombre es ${this.nombre} ${this.apellido}`)
}

Estudiante.prototype.cantar=function(){
    console.log("lallalalalal")
}

//CREAMOS INSTANCIAS DE LA FUNCION CONTRUCTORA
const est1 = new Estudiante("Juan","Lucumi"),
    est2 = new Estudiante("Andres","lucumi");

console.log(est1)
console.log(est2)
est1.saludar();
est1.cantar();
est2.saludar();
est2.cantar();