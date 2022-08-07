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