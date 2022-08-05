function saludar(nombre){
    return `Hola, ${nombre}`;
}

//funcion de flecha
const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) =>`Hola, ${nombre}`;

console.log(saludar2('Andres'));
console.log(saludar3('Sofia'));

//cuando el return es un objeto.
const getUser = ()=>
    ({
        uid:'abc123',
        username:'prueba_1234'
    });

console.log(getUser())

function getUsuarioActivo(nombre){
    return{
        uid: 'ABC567',
        username: nombre
    }
};
const usuarioActivo = getUsuarioActivo('Tania');
console.log(usuarioActivo);

//con función flecha.

const getUserActive = (nombre) =>({
    uid: 'dsa123',
    username:nombre
});

console.log(getUserActive('Rodrigo'));