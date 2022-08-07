import {getHeroeById} from "./respaldo/08-mult-imp-exp";
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

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve();
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else
                //Imprimir error
                reject('no se pudo encontrar el heroe');

        }, 2000)//Tiempo en milisengundos
    });
}

getHeroeByIdAsync(10)
    .then(console.log)
    .catch(console.warn);