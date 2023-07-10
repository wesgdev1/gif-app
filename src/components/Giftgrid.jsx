import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const Giftgrid = ({ category }) => {
  //CustomHook para un fetch

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {/* {isLoading ? <h2>Cargando...</h2> : null} */}
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => {
          // return <li key={image.id}>{image.title}</li>;
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
