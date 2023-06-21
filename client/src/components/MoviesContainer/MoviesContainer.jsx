import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMovies } from "../../redux/actions";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";
import { ErrorSearch404 } from "../Error404/Error404";

function MoviesContainer({ theme }) {
  const [loading, setLoading] = useState(true);
  const allMovies = useSelector((state) => state.allMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getGenres());
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-3/4">
          <div className="w-full flex">
            <Filter />
            <SearchBar />
          </div>
          <div className="w-full flex flex-wrap justify-center">
            {allMovies.length? allMovies.map(
              ({ id, title, description, image, release_date }) => (
                <MovieCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  image={image}
                  release_date={release_date}
                  theme={theme}
                />
              )
            ): <ErrorSearch404/>}
          </div>
        </div>
      )}
    </>
  );
}

export default MoviesContainer;
