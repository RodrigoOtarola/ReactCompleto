import React from 'react';
//Para renderizar componentes de react
import {createRoot} from 'react-dom/client';

//Componente inicial.
const saludo =<h1>Hola mundo</h1>;

//Renderizar componente
const divRoot = createRoot(document.getElementById('root'));

divRoot.render(saludo);