
const nombre = 'Rodrigo';
const apellido = 'Otárola';

//Para insertar variables de js
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombreCompleto){
    return 'Hola ' + nombreCompleto;
}
//Se debe pasar el nombre como parametro
console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)