class Animal{
    constructor(especie,edad,color){
        this.especie = especie,
        this.edad = edad,
        this.color = color,
        this.info = `hola soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color}`
    }
    verInfo(){
        console.log(this.info + "<br>")
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        console.log("waw")
    }
}

const animal1 = new Animal("perro",15,"blanco");
const perro = new Perro("perro",15,"gris","doberman");
console.log(animal1)
animal1.verInfo();
perro.ladrar()