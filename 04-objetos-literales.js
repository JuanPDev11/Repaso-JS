let nombre="juan",
    edad=22;

//Forma antigua de sintaxis
const persona = {
    nombre:nombre,
    edad:edad,
    gritar:function(){
        console.log("ahhhhhhh!!")
    }
}
console.log(persona)
persona.gritar();

//Forma nueva de sintaxis, cuando el nombre de la caracteristica es igual al de la variable
const persona2 = {
    nombre,
    edad,
    gritar2(){
        console.log("ahhh ahhh")
    }
}
persona2.gritar2();