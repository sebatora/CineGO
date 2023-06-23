import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOrder, getMovies } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  const [orderData, setOrderData] = useState({
    order: "",
    filterGenre: "",
    filterClasification: "",
  });

  const handleChangeOrder = (event) => {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleChangeClasification = (event) => {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleChangeGenre = (event) => {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: value });
  };

  useEffect(() => {
    dispatch(filterOrder(orderData));
  }, [orderData]);

  return (
    <div className="w-2/3 flex justify-between space-x-4">
      <select
        className="bg-transparent dark:text-white border rounded-xl p-2"
        name="order"
        onChange={handleChangeOrder}
        defaultValue="order"
      >
        <option value="order" disabled>
          Orden
        </option>
        <option className="dark:text-black" value="ascending">A to Z</option>
        <option className="dark:text-black" value="descending">Z to A</option>
        <option className="dark:text-black" value="most recent">Más Reciente</option>
        <option className="dark:text-black" value="oldest">Más Antiguo</option>
      </select>
      <select
        className="bg-transparent dark:text-white border rounded-xl p-2"
        name="filterClasification"
        onChange={handleChangeClasification}
        defaultValue="clasification"
      >
        <option value="clasification" disabled>
          Clasificación
        </option>
        <option className="dark:text-black" value="allClasification">Todas las clasificaciones</option>
        <option className="dark:text-black" value="ATP">ATP</option>
        <option className="dark:text-black" value="+13">+13</option>
        <option className="dark:text-black" value="+16">+16</option>
      </select>
      <select
        className="bg-transparent dark:text-white border rounded-xl p-2"
        name="filterGenre"
        onChange={handleChangeGenre}
        defaultValue="genre"
      >
        <option value="genre" disabled>
          Género
        </option>
        <option className="dark:text-black" value="allGenres">Todos los géneros</option>
        {allGenres.map((genre) => (
          <option className="dark:text-black" key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
      {/* <button
        className="bg-transparent rounded-lg border border-black dark:border-white dark:text-white"
        onClick={handleReset}
      >
        Todas las películas
      </button> */}
    </div>
  );
};

export default Filter;
