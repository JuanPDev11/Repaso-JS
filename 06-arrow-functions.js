const ladrar = function(){
    console.log("guau guau!!");
}

ladrar();

//arrow function
//const ladrar2 =()=>{console.log("guau guau guau!!")};
const ladrar2 =()=>console.log("guau guau guau!!");
//cuando es una sola linea puede ir sin corchetes
ladrar2();

//const saludar3 =(nombre)=>console.log(`hola ${nombre}`);
const saludar3 =nombre=>console.log(`hola ${nombre}`);
//cuando es un solo parametro puede ir sin parentesis,si no tiene ningun parametro o es mas de uno si lleva
saludar3("claudia");

function objeto(){
    console.log(this);
    //en este caso en una funcion el objeto this hace referencia al objeto window
}
objeto();

const persona={
    nombre:"juan",
    edad: 22,
    gritar(){
        console.log(this);
        //en este caso this hace referencia al objeto contenedor
    }
}
persona.gritar();

const persona2={
    nombre:"juan",
    edad: 22,
    gritar:()=>{
        console.log(this);
        //en este caso this hace referencia al objeto window por ser en funcion flecha
    }
}
persona2.gritar();