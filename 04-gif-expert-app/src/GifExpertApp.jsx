import { useState } from "react";
import React from "react";

export const GifExpertApp = () => {
  //Inicializar el useState no se recomienda dejarlo vacio
  const [categories, setCategories] = useState(["One Punch","Prueba"]);

  return (
    <>
      {/*titulo */}
      <h1>GifExpertApp</h1>

      {/*lista*/}
      <ol>
        {/*map sirve para barrer los elementos del arreglo y colocar algo nuevo*/}
        {categories.map(category =>{
            return(<li key={category}>{category}</li>)
        })}

      </ol>
    </>
  );
};
