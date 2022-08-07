//Para poder ver archivo se debe exportar desde la data, se da el nombre que una quiera.
//import heroes from './data/heroes';

//importacion individual
import heroes,{owner} from './data/heroes';

console.log(owner);

//Usan find
const getHeroeById = (id)=>heroes.find((heroe)=>heroe.id === id);

console.log(getHeroeById(4));

//Usando filter
const getHeroesByOwner = (owner)=>heroes.filter ((heroe)=>heroe.owner === owner);

console.log(getHeroesByOwner('Marvel'));