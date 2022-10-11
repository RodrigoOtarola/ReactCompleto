import { Fragment, useState } from "react";
import React from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  //Inicializar el useState no se recomienda dejarlo vacio
  const [categories, setCategories] = useState(["One Punch", "Prueba"]);

  //Agregar categories
  const onAddCategory = () => {
    //Mutar el estado, ya que no se puede ocupar push
    //
    setCategories(["prueba", ...categories]);
  };

  return (
    <>
      {/*titulo */}
      <h1>GifExpertApp</h1>

      {/*AddCategory*/}
      <AddCategory />

      {/*lista*/}

      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {/*map sirve para barrer los elementos del arreglo y colocar algo nuevo*/}
        {categories.map((category) => {
          return <li key={category}>{category}</li>
        })}
      </ol>
    </>
  );
};
