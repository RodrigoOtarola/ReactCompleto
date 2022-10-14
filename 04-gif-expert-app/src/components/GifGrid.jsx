import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import "../style.css";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //Custom hooks
  const { images, isLoading } = useFetchGifs(category);

  //console.log(isLoading);

  //isLoading && es un si logico, que ejecuta solo si es true, false no lo ejecuta

  return (
    <Fragment>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando....</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </Fragment>
  );
};