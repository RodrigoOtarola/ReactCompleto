import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import "../style.css";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  //Custom hooks
  const {images, isLoading} = useFetchGifs ( category);

  console.log(isLoading);

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
