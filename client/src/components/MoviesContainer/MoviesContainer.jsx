import React, { useEffect, useState } from "react";
import style from "./MoviesContainer.module.css";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";


import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions";
import Filter from "../Filter/Filter";

function MoviesContainer() {

  const [loading, setLoading] = useState(true);
  const { allMovies } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    setLoading(false)
  }, [dispatch]);

  return (
    <div className={style.containerMovies}>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Filter />
          <div className={style.containerCardMovie}>
            {allMovies.map(({ id, title, description, image, release_date }) => (
              <MovieCard
                key={id}
                id={id}
                title={title}
                description={description}
                image={image}
                release_date={release_date}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviesContainer;
