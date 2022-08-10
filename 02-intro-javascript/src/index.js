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

// const persona = {
//     nombre:'Rodrigo',
//     edad:29,
//     clave: '1234',
//     rango:'Soldado'
// };
// //Asignacion desestructurante
// // const {nombre,edad} = persona;
// // console.log(nombre);
// // console.log(edad);
//
// const useContext = ({clave,nombre,edad,rango})=>{
//     // console.log(nombre,edad,rango);
//     return {
//         nombreClave: clave,
//         anios: edad,
//         lating:{
//             lat:14.123,
//             lng:39.523
//         }
//     }
// }
// //Para lating tenga constantes de lat y lng
// const {nombreClave,anios,lating:{lat,lng}} = useContext(persona);
// console.log(nombreClave,anios,lat,lng);

// //Desestructuracion de arreglos.
// const personajes = ['Goku','Vegeta','Trunks'];
//
// const [,p2] = personajes;
//
// console.log(p2);
//
// const retornarArreglo = ()=>{
//     return ['ABC',123];
// }
//
// const [letras,numeros]=retornarArreglo();
// console.log(letras,numeros);
//
// const State = (valor)=>{
//     return[valor,()=>{console.log('Hola Mundo')}];
// }
//
// const arr = State('Goku');
// arr[1]()
//
// //Tarea 1er valor nombre, 2do valor setNombre
// const name = (nombre)=>{
//     return[nombre, ()=>{console.log('Andrés')}];
// }
// const [nombre,setNombre] = name('Rodrigo',);
// setNombre();

// //Para poder ver archivo se debe exportar desde la data, se da el nombre que una quiera.
// //import heroes from './data/heroes';
//
// //importacion individual
// import heroes,{owner} from './data/heroes';
//
// console.log(owner);
//
// //Usan find
// const getHeroeById = (id)=>heroes.find((heroe)=>heroe.id === id);
//
// console.log(getHeroeById(4));
//
// //Usando filter
// const getHeroesByOwner = (owner)=>heroes.filter ((heroe)=>heroe.owner === owner);
//
// console.log(getHeroesByOwner('Marvel'));

// import {getHeroeById} from "./respaldo/08-mult-imp-exp";
//
// //resolve para cuando promesa es exitosa, rejact cuando la promesa falla.
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve();
//         const p1 = getHeroeById(2);
//         resolve(p1);
//
//         //Imprimir error
//         //reject('no se pudo encontrar el heroe');
//
//     }, 2000)//Tiempo en milisengundos
// });
//
// // then es exitosa, catch es error, finally después del then y catch
// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// }).catch(e =>console.warn(e));//Para impresion del error sin matar el programa
//
// const getHeroeByIdAsync = (id) => {
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //resolve();
//             const p1 = getHeroeById(id);
//             if (p1) {
//                 resolve(p1);
//             } else
//                 //Imprimir error
//                 reject('no se pudo encontrar el heroe');
//
//         }, 2000)//Tiempo en milisengundos
//     });
// }
//
// getHeroeByIdAsync(10)
//     .then(console.log)
//     .catch(console.warn);

// //Sacada desde giphy
// const apiKey= 'Y96RP1YAwBhEGfnqruzkBjc21wnX4G65';
//
// //peticion fetch api
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//
// //respuesta encadenada
// peticion.then(resp=>resp.json()
// )
//     //Recuperar url de la imagen
//     .then(({data})=>{
//         const {url} = data.images.original;
//         console.log(url);
//
//         //guarda url de imagen en memoria
//         const img = document.createElement('img');
//         img.src = url;
//
//         //Mostrar imagen en el html
//         document.body.append(img);
//     })
//     .catch(console.warn);

// //async, transformar una solicitud en un promesa
// const getImagen = async () => {
//     try {
//
//
//         const apiKey = 'Y96RP1YAwBhEGfnqruzkBjc21wnX4G65';
//
//         //peticion de tipo response, espera que promesa ejecute antes de ejecutar la otra iteracion
//         //await tiene que ir si o si dentro de un async
//         const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//         const {data} = await resp.json();
//
//         const {url} = data.images.original;
//
//         //guarda url de imagen en memoria
//         const img = document.createElement('img');
//         img.src = url;
//
//         //Mostrar imagen en el html
//         document.body.append(img);
//     } catch (e) {
//         console.log('error');
//     }
// }
// getImagen();

