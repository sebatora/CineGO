import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOrder, getMovies } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  const [active, setActive] = useState(false);
  const [order, setOrder] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [filterClasification, setFilterClasification] = useState("");

  const handleFilter = (event) => {
    event.preventDefault();
    const orderData = {
      order,
      filterGenre,
      filterClasification,
    };
    dispatch(filterOrder(orderData));
    setActive(false);
  };

  const handleReset = () => {
    dispatch(getMovies());
  };

  return (
    <div className="w-full flex">
      <button
        className="bg-transparent rounded-lg border border-black dark:border-white px-4 ml-10 dark:text-white"
        onClick={() => setActive(true)}
      >
        Filter
      </button>

      {active && (
        <div className="fixed inset-0 m-48 overflow-hidden bg-black z-10 flex">
          <button
            className="bg-red-500 absolute right-0 rounded-full px-2 m-2"
            onClick={() => setActive(false)}
          >
            X
          </button>
          <select
            className="w-3/4 h-10 my-16 mx-6"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option disabled value="">
              Orden
            </option>
            <option value="ascending">A to Z</option>
            <option value="descending">Z to A</option>
            <option value="most recent">Más Reciente</option>
            <option value="oldest">Más Antiguo</option>
          </select>
          <select
            className="w-3/4 h-10 my-16 mx-6"
            value={filterClasification}
            onChange={(e) => setFilterClasification(e.target.value)}
          >
            <option disabled value="">
              Clasificación
            </option>
            <option value="ATP">ATP</option>
            <option value="+13">+13</option>
            <option value="+16">+16</option>
          </select>
          <select
            className="w-3/4 h-10 my-16 mx-6"
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
          >
            <option disabled value="">
              Género
            </option>
            <option value="allGenres">Todos los géneros</option>
            {allGenres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
          <button
            className="bg-green-600 absolute bottom-4 right-1/2 rounded-sm p-2"
            onClick={handleFilter}
          >
            Filtrar
          </button>
        </div>
      )}
      <button className="bg-white rounded-md px-4 ml-10" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default Filter;
