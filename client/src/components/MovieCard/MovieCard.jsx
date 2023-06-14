import React from "react";
import style from "./MovieCard.module.css";

function MovieCard({ id, title, description, image, release_date }) {
  return (
    <div className={style.containerMovie}>
      {/*       <h2>Película: {title}</h2>
      <h2>Descripción: {description}</h2>
      <h2>Fecha: {release_date}</h2> */}
      <img className={style.img} src={image} />
    </div>
  );
}

export default MovieCard;
