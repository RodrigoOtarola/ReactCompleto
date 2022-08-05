const arreglo = [1,2,3,4];

//metodo spread
let arreglo2 = [...arreglo,5];

//Para multiplicar cada valor del arreglo por dos
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);