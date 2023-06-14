import React, { useEffect } from "react";
import style from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
function MovieCard({ id, title, image }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="zoom-in" className={style.containerMovie}>
      <Link className={style.link} to={`/detail/${id}`}>
        <img className={style.img} src={image} />
        <div className={style.boxH2}>
          <h2 className={style.h2}>{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
