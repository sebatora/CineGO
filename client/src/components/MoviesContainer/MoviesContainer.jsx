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
        <div className="w-full">
          <div className="w-full pl-24">
            <h1 className="w-full my-4">Cartelera</h1>
            <div className="w-4/5 flex">
              <Filter />
              <SearchBar />
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center">
            {allMovies.length ? (
              allMovies.map(
                ({ id, title, image, genres, clasification }) => (
                  <MovieCard
                    key={id}
                    id={id}
                    title={title}
                    genres={genres}
                    clasification={clasification}
                    image={image}
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
