import React, { useEffect} from "react";
import style from './Detail.module.css';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getMovieById } from "../../redux/actions";

function Detail() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { title, description, image, actors, director, duration, trailer, clasification, genres } = useSelector(state => state.movieById);

  useEffect(() => {
    dispatch(getMovieById(id));
    return () => dispatch(cleanDetail())

  }, [id]);


  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.movieInfo}>
          <figure className={style.figure}>
            <img src={image} alt={title} className={style.movieImage} />
          </figure>
          <ul>
            <li>
              <strong>Título Original:  </strong>  {title}
            </li>
            <li>
              <strong>Género:  </strong> {genres?.map(genre => genre.name).join(', ')}
            </li>
            <li>
              <strong>Director:  </strong>   {director}
            </li>
            <li>
              <strong>Actores:  </strong>   {actors}
            <li>
              <strong>Clasificación:  </strong>  {clasification}
            </li>
            </li>
            <li>
              <strong>Duración:  </strong>   {duration} min
            </li>
          </ul>
        </div>
        <div className={style.infoBox}>
          {/* <img src="https://img.freepik.com/vector-gratis/mancha-acuarela-abstracta-colorida_1035-18218.jpg?w=2000" alt="fondo" className={style.imagenFondo}></img> */}
          <h2 className={style.name}>
            <strong>{title}</strong>
          </h2>
          <p className={style.description}> {description} </p>
          <div className={style.buttonContainer}>
            <Link to='/login'>
              <button className={style.button} type="submit">¡Comprar entradas!</button>
            </Link>
          </div>
          <iframe width="560" height="315" src={trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Detail;