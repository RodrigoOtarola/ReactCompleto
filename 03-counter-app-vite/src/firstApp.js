// Para tener dos elementos en la raiz del functional component
//import {Fragment} from "react";

// export const firstApp = () => {
//     return (
//         <>
//             <h2>Nombre: Rodrigo</h2>
//             <p>Soy un subtitulo</p>
//         </>
//     );
// }

const newMessage ={
    message: 'Hola mundo',
    title: 'Rodrigo'
}

export const firstApp = () => {



    return (
        <>
            {/*<h2>{JSON.stringify(newMessage)}</h2>*/}
            <h2>{newMessage.message}</h2>
            <p>mi nombre es: {newMessage.title}</p>
        </>
    );
}