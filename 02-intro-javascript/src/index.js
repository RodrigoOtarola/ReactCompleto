
// console.log('Hola mundo');
//
// //Variables y constantes
//
// const nombre = 'Rodrigo';
// let apellido = 'Otárola';
//
// let valorDado = 5;
// valorDado = 4;
//
// console.log(nombre,apellido,valorDado);
//
// if(true){
//     let valorDado =6;
//     console.log(valorDado);
// }
// console.log(valorDado);

// const nombre = 'Rodrigo';
// const apellido = 'Otárola';
//
// //Para insertar variables de js
// const nombreCompleto = `${nombre} ${apellido}`;
//
// console.log(nombreCompleto);
//
// function getSaludo(nombreCompleto){
//     return 'Hola ' + nombreCompleto;
// }
// //Se debe pasar el nombre como parametro
// console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)

// const persona = {
//     nombre:'Rodrigo',
//     apellido:'Otárola',
//     edad:29,
//     direccion:{
//         ciudad: 'Santiago',
//         zip: 22922000,
//         lat: 14.3232,
//         lng:34.92222,
//     }
// };
//
// console.log({persona});

// const arreglo = [1,2,3,4];
//
// //metodo spread
// let arreglo2 = [...arreglo,5];
//
// //Para multiplicar cada valor del arreglo por dos
// const arreglo3 = arreglo2.map(function(numero){
//     return numero * 2;
// });
//
// console.log(arreglo);
// console.log(arreglo2);
// console.log(arreglo3);

// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }
//
// //funcion de flecha
// const saludar2 = (nombre)=>{
//     return `Hola, ${nombre}`;
// }
//
// const saludar3 = (nombre) =>`Hola, ${nombre}`;
//
// console.log(saludar2('Andres'));
// console.log(saludar3('Sofia'));
//
// //cuando el return es un objeto.
// const getUser = ()=>
//     ({
//         uid:'abc123',
//         username:'prueba_1234'
//     });
//
// console.log(getUser())
//
// function getUsuarioActivo(nombre){
//     return{
//         uid: 'ABC567',
//         username: nombre
//     }
// };
// const usuarioActivo = getUsuarioActivo('Tania');
// console.log(usuarioActivo);
//
// //con función flecha.
//
// const getUserActive = (nombre) =>({
//     uid: 'dsa123',
//     username:nombre
// });
//
// console.log(getUserActive('Rodrigo'));

const persona = {
    nombre:'Rodrigo',
    edad:29,
    clave: '1234',
    rango:'Soldado'
};
//Asignacion desestructurante
// const {nombre,edad} = persona;
// console.log(nombre);
// console.log(edad);

const useContext = ({clave,nombre,edad,rango})=>{
    // console.log(nombre,edad,rango);
    return {
        nombreClave: clave,
        anios: edad,
        lating:{
            lat:14.123,
            lng:39.523
        }
    }
}
//Para lating tenga constantes de lat y lng
const {nombreClave,anios,lating:{lat,lng}} = useContext(persona);
console.log(nombreClave,anios,lat,lng);