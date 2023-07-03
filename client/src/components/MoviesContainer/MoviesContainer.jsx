import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMovies } from "../../redux/actions";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";
import ErrorSearch404 from "../ErrorSearch404/ErrorSearch404";

function MoviesContainer() {
  const [loading, setLoading] = useState(true);
  const allMovies = useSelector((state) => state.allMovies);

  const moviesActive = allMovies.filter((active) => active.activeMovie === true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getGenres());
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-11/12 mt-8">
          <div className="w-full pl-24">
            <div className="w-4/5 flex justify-items ">
              <Filter />
              <SearchBar />
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center">
            {moviesActive.length ? (
              moviesActive.map(
                ({ id, title, image, genres, clasification, duration, ratings }) => (
                  <MovieCard
                    key={id}
                    id={id}
                    title={title}
                    genres={genres}
                    clasification={clasification}
                    duration={duration}
                    image={image}
                    ratings={ratings}
                  />
                )
              )
            ) : (
              <ErrorSearch404 />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MoviesContainer;
