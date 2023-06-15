import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";
import Filter from "../Filter/Filter";

function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/movies");
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="MoviesContainer">
      <Filter movies={movies} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full flex flex-wrap justify-center">
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
