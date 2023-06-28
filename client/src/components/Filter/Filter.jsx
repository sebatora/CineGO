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

  const handleReset = () => {
    dispatch(getMovies());
  }

  useEffect(() => {
    dispatch(filterOrder(orderData));
  }, [orderData]);

  return (
    <div className="w-2/3 flex justify-between space-x-4 ml-36">
      <select
        className="w-48 bg-transparent dark:text-white border border-light-500 rounded-xl p-2"
        name="order"
        onChange={handleChangeOrder}
        defaultValue="order"
      >
        <option value="order" disabled>Orden</option>
        <option className="dark:text-black" value="ascending">A to Z</option>
        <option className="dark:text-black" value="descending">Z to A</option>
        <option className="dark:text-black" value="most recent">Más Reciente</option>
        <option className="dark:text-black" value="oldest">Más Antiguo</option>
      </select>
      <select
        className="w-48 bg-transparent dark:text-white border border-light-500 rounded-xl p-2"
        name="filterClasification"
        onChange={handleChangeClasification}
        defaultValue="clasification"
      >
        <option value="clasification" disabled>
          Clasificación
        </option>
        <option className="dark:text-black" value="ATP">ATP</option>
        <option className="dark:text-black" value="+13">+13</option>
        <option className="dark:text-black" value="+16">+16</option>
      </select>
      <select
        className="w-48 bg-transparent dark:text-white border border-light-500 rounded-xl p-2"
        name="filterGenre"
        onChange={handleChangeGenre}
        defaultValue="genre"
      >
        <option value="genre" disabled>
          Género
        </option>
        {allGenres.map((genre) => (
          <option className="dark:text-black" key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
      <button onClick={handleReset}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6  stroke-black dark:stroke-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </button>
    </div>
  );
};

export default Filter;
