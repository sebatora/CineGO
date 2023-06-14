import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./MoviesContainer.module.css";
import MovieCard from "../MovieCard/MovieCard";


function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className={style.containerMovies}>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <div className={style.containerCardMovie}>
          {movies.map(({ id, title, description, image, release_date }) => (
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
