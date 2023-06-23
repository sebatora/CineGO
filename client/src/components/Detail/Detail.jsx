import React, { useEffect} from "react";
import style from './Detail.module.css';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getMovieById } from "../../redux/actions";
import Error404 from '../Error404/Error404';

function Detail() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector(state => state.movieById)

  useEffect(() => {
    dispatch(getMovieById(id));
    return () => dispatch(cleanDetail())
  }, [id, dispatch]);

  return (
    <div className="w-4/5 h-full relative mt-20 flex justify-center items-center">
      {
        !detail.id ? (
          <Error404 />
        ) : (
          <div className="flex flex-wrap">
            <div className="w-2/3 flex flex-col px-4">
              <figure className={style.figure}>
                <img src={detail.image} alt={detail.title} className={style.movieImage} />
              </figure>
              <ul className="list-none p-0 m-0 bg-white dark:bg-black dark:text-white">
                <li>
                  <strong>Título Original:  </strong>  {detail.title}
                </li>
                <li>
                  <strong>Género:  </strong> {detail.genres?.map(genre => genre.name).join(', ')}
                </li>
                <li>
                  <strong>Director:  </strong>   {detail.director}
                </li>
                <li>
                  <strong>Actores:  </strong>   {detail.actors}
                </li>
                <li>
                  <strong>Clasificación:  </strong>  {detail.clasification}
                </li>
                <li>
                  <strong>Duración:  </strong>   {detail.duration} min
                </li>
              </ul>
            </div>
            <div className={style.infoBox}>
              <h2 className={style.name}>
                <strong>{detail.title}</strong>
              </h2>
              <p className={style.description}> {detail.description} </p>
              <div className="mt-8 mb-10 flex justify-center">
                <Link to='/ticket'>
                  <button className="btn-blue text-white border-none px-4 py-2 text-center text-base rounded cursor-pointer" type="submit">¡Comprar entradas!</button>
                </Link>
              </div>
              <iframe width="727" height="375" src={detail.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Detail;