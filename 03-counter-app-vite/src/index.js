//Para renderizar componentes de react
import React from 'react';
import ReactDOM from 'react-dom/client';


//
// //Componente inicial.
// const saludo =<h1>Hola mundo</h1>;
//
// //Renderizar componente
// const divRoot = createRoot(document.getElementById('root'));
//
// divRoot.render(saludo);

//import {App} from './helloWorldApp';
/*import {firstApp} from "./firstApp";
import {App} from "./helloWorldApp";*/
import {CounterApp} from "./counter-app.jsx";

import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp value="0" />
  </React.StrictMode>
);