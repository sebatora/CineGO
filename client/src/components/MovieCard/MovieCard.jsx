import React from "react";
import style from "./MovieCard.module.css";
import { Link } from "react-router-dom";

function MovieCard({ id, title, image }) {
  return (
    <div className={style.containerMovie}>
      <Link to={`/detail/${id}`}>
        <img className={style.img} src={image} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

export default MovieCard;
