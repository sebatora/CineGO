import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./MoviesContainer.module.css";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";

import { useSelector } from "react-redux";

function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const { allMovies } = useSelector(state => state)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/movies");
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);
const Movies = allMovies? allMovies: movies;
  return (
    <div className={style.containerMovies}>
      {loading ? (
        <Spinner />
      ) : (
        <div className={style.containerCardMovie}>
          {Movies.map(({ id, title, description, image, release_date }) => (
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
      )}
    </div>
  );
}

export default MoviesContainer;
