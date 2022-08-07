//Desestructuracion de arreglos.
const personajes = ['Goku','Vegeta','Trunks'];

const [,p2] = personajes;

console.log(p2);

const retornarArreglo = ()=>{
    return ['ABC',123];
}

const [letras,numeros]=retornarArreglo();
console.log(letras,numeros);

const State = (valor)=>{
    return[valor,()=>{console.log('Hola Mundo')}];
}

const arr = State('Goku');
arr[1]()

//Tarea 1er valor nombre, 2do valor setNombre
const name = (nombre)=>{
    return[nombre, ()=>{console.log('Andrés')}];
}
const [nombre,setNombre] = name('Rodrigo',);
setNombre();