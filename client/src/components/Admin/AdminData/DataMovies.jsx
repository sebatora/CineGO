import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getMoviesByName, putMovie } from "../../../redux/actions";
import Spinner from "../../Spinner/Spinner";
import CreateMovie from "../AdminCreate/CreateMovie";
import { Switch } from "@headlessui/react";
import EditMovie from "../AdminEdit/EditMovie";

const DataMovies = () => {
  const [loading, setLoading] = useState(true);
  const [activeForm, setActiveForm] = useState(false);
  const [activeEdit, setActiveEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [movieName, setMovieName] = useState("");
  const [movieFound, setMovieFound] = useState({});
  const [countPage, setCountPage] = useState(1);
  const allMovies = useSelector((state) => state.allMovies);

  const dispatch = useDispatch();

  const handleEdit = (movieId) => {
    const searchMovie = allMovies.find((movie) => movie.id === movieId);
    setMovieFound(searchMovie);
    setActiveEdit(true);
  };

  const handleToggle = (movieId, activeMovie) => {
    setTimeout(() => {
      dispatch(getMovies());
    }, 100);
    dispatch(putMovie(movieId, { activeMovie: `${!activeMovie}` }));
  };

  const pagination = () => {
    return allMovies.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    if (allMovies.length > currentPage + 8) {
      setCurrentPage(currentPage + 8);
      setCountPage(countPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 8);
      setCountPage(countPage - 1);
    }
  };

  const handleChangeName = (event) => {
    setMovieName(event.target.value);
  };

  useEffect(() => {
    dispatch(getMovies());
    setLoading(false);
  }, []);

  useEffect(() => {
    dispatch(getMoviesByName(movieName));
  }, [dispatch, movieName]);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 via-pink-400 to-red-400">
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full">
          <h3 className="dark:text-black p-4">Películas</h3>
          <div className="absolute right-0 top-0 m-4">
            <button
              className="flex items-center bg-light-200 rounded-md p-2"
              onClick={() => setActiveForm(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-6 h-6 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p className="text-sm dark:text-black">Añadir</p>
            </button>
          </div>
          <div className="w-full p-2 border">
            <div className="w-full flex items-center mb-2">
              <input
                className="w-full rounded appearance-none bg-slate-100 py-1 px-2 focus:outline-slate-400"
                type="text"
                onChange={handleChangeName}
                placeholder="Buscar película"
              />
              <span className="absolute right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="w-6 h-6 stroke-light-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div>
            <table className="w-full text-center bg-slate-400 rounded-sm">
              <thead>
                <tr className="h-10 font-bold text-md">
                  <th>Imagen</th>
                  <th>Título</th>
                  <th>Duración</th>
                  <th>Estreno</th>
                  <th>Clasificación</th>
                  <th></th>
                  <th className="w-24 pr-2">Habilitado</th>
                </tr>
              </thead>
              <tbody>
                {pagination().map((movie, index) => (
                  <tr
                    className={`h-12 ${
                      index % 2 === 0 ? "bg-slate-100" : "bg-slate-300"
                    }`}
                    key={index}
                  >
                    <td className="flex justify-center">
                      <img
                        className="w-11 h-14"
                        src={movie.image}
                        alt={movie.title}
                      />
                    </td>
                    <td>{movie.title}</td>
                    <td>{movie.duration}</td>
                    <td>{movie.release_date}</td>
                    <td>{movie.clasification}</td>
                    <td>
                      <button onClick={() => handleEdit(movie.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          className="w-6 h-6 stroke-light-900"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    </td>
                    <td>
                      <Switch
                        className={`relative inline-flex h-5 w-10 items-center rounded-full ${
                          movie.activeMovie ? "bg-green-500" : "bg-red-500"
                        }`}
                        checked={movie.activeMovie}
                        onChange={() =>
                          handleToggle(movie.id, movie.activeMovie)
                        }
                      >
                        <span
                          aria-hidden="true"
                          className={`${
                            movie.activeMovie
                              ? "translate-x-5"
                              : "translate-x-0"
                          }
                            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full flex justify-center items-center pt-4">
              <button
                onClick={prevPage}
                className="bg-light-200 rounded-md p-1 mx-2"
                type="text"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="w-5 h-5 stroke-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <span className="dark:text-black">{countPage}</span>
              <button
                onClick={nextPage}
                className="bg-light-200 rounded-md p-1 mx-2"
                type="text"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="w-5 h-5 stroke-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          {activeForm && <CreateMovie setActiveForm={setActiveForm} />}
          {activeEdit && (
            <EditMovie movieFound={movieFound} setActiveEdit={setActiveEdit} />
          )}
        </div>
      )}
    </div>
  );
};

export default DataMovies;
