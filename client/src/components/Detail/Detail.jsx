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
    <div className="flex justify-center items-center h-screen mt-16 mb-32">
      <div className="w-4/5 h-full relative mt-36">
        <div className={style.row}>
          <div className={style.movieInfo}>
            <figure className={style.figure}>
              <img src={image} alt={title} className={style.movieImage} />
            </figure>
            <ul className="list-none p-0 m-0 bg-white dark:bg-black dark:text-white">
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
              </li>
              <li>
                <strong>Clasificación:  </strong>  {clasification}
              </li>
              <li>
                <strong>Duración:  </strong>   {duration} min
              </li>
            </ul>
          </div>
          <div className={style.infoBox}>
            <h2 className={style.name}>
              <strong>{title}</strong>
            </h2>
            <p className={style.description}> {description} </p>
            <div className="mt-8 mb-10 flex justify-center">
              <Link to='/login'>
                <button className="bg-red-500 text-white border-none px-4 py-2 text-center text-base rounded cursor-pointer" type="submit">¡Comprar entradas!</button>
              </Link>
            </div>
            <iframe width="727" height="375" src={trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;