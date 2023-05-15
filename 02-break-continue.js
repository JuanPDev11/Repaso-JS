const numeros = [1,2,3,4,5,6,7,8,9,0];
for(let i=0;i<numeros.length;i++){
    if(i===5){
        break;
        //corta en la vuelta numero 5
    }
    console.log(numeros[i]);
}

for(let i=0; i<numeros.length;i++){
    if(i===5){
        continue;
        //se salta la vuelta del indice 5 del array
    }
    console.log(numeros[i]);
}