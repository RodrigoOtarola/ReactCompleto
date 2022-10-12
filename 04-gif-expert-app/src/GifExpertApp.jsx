import { Fragment, useState } from "react";
import React from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //Inicializar el useState no se recomienda dejarlo vacio
  const [categories, setCategories] = useState(['goku']);

  //Agregar categories
  const onAddCategory = (newCategory) => {
    //Mutar el estado, ya que no se puede ocupar push

    //console.log(newCategory);

    //Validación para que no se repitan las categorias, ocupa el CaseSensitive, para que sean iguales se debería ocupar lowercase o upperCase.
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <Fragment>
      {/*titulo */}
      <h1>GifExpertApp</h1>

      {/*AddCategory, mandando property adicional*/}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      <button onClick={onAddCategory}>Agregar</button>

      {/*map sirve para barrer los elementos del arreglo y colocar algo nuevo, Se debe pasar la key y la category*/}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

    </Fragment>
  );
};
