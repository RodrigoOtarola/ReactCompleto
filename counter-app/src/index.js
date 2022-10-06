import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import CounterApp from './counter-app.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp value={10}/>
  </React.StrictMode>
);

