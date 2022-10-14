import React from "react";
import { useState,useEffect } from "react";
import {getGifs} from "../helpers/getGifs";


export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  //useEffect 1er parametro es una function y al final se pasa arreglo vacio
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
