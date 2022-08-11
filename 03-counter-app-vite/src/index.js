import React from 'react';
//Para renderizar componentes de react
import ReactDom from 'react-dom/client';
import {createRoot} from 'react-dom/client';
//
// //Componente inicial.
// const saludo =<h1>Hola mundo</h1>;
//
// //Renderizar componente
// const divRoot = createRoot(document.getElementById('root'));
//
// divRoot.render(saludo);

//import {App} from './helloWorldApp';
import {firstApp} from "./firstApp";
import {App} from "./helloWorldApp";
// ReactDom.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         {/*<App />*/}
//         <firstApp />
//     </React.StrictMode>
// );

const root = createRoot(document.getElementById('root'));
root.render(firstApp());