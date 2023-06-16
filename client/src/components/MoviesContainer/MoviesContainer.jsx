import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";

function MoviesContainer() {

  const [loading, setLoading] = useState(true);
  const { allMovies } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    setLoading(false)
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="MoviesContainer">
          <div className="w-full flex">
            <Filter />
            <SearchBar />
          </div>
          <div className="w-full flex flex-wrap justify-center">
            {allMovies.map(({ id, title, description, image, release_date }) => (
              <MovieCard
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
    </>
  );
}

export default MoviesContainer;
