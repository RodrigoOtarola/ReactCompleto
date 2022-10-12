import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  const [counter, setCounter] = useState(10);

  //useEffect 1er parametro es una function y al final se pasa arreglo vacio
  useEffect(()=>{
    getGifs(category);
  },[])
  
  getGifs(category);

  return (
    <Fragment>
      <h3>{category}</h3>
      <p>Hola mundo</p>
      <h5>{counter}</h5>
      <button onClick={()=>setCounter(counter +1)}>+1</button>
    </Fragment>
  );
};
