import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import "../style.css";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  //useEffect 1er parametro es una function y al final se pasa arreglo vacio
  useEffect(() => {
    getImages();
  }, []);

  return (
    <Fragment>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </Fragment>
  );
};
