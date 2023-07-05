import React, { useEffect, useState, useRef } from "react";
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

  const orderSelectRef = useRef(null);
  const classificationSelectRef = useRef(null);
  const genreSelectRef = useRef(null);

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
    setOrderData({
      order: "",
      filterGenre: "",
      filterClasification: "",
    });

    if (orderSelectRef.current) {
      orderSelectRef.current.value = "order";
    }

    if (classificationSelectRef.current) {
      classificationSelectRef.current.value = "clasification";
    }

    if (genreSelectRef.current) {
      genreSelectRef.current.value = "genre";
    }

    dispatch(getMovies());
  };

  useEffect(() => {
    dispatch(filterOrder(orderData));
  }, [orderData]);

  return (
    <div className="w-full flex justify-center space-x-4 ml-20">
      <select
        ref={orderSelectRef}
        className="w-48 bg-transparent dark:text-white border border-light-500 rounded-xl p-2"
        name="order"
        onChange={handleChangeOrder}
        defaultValue="order"
      >
        <option value="order" disabled>
          Orden
        </option>
        <option className="dark:text-black" value="ascending">
          A to Z
        </option>
        <option className="dark:text-black" value="descending">
          Z to A
        </option>
        <option className="dark:text-black" value="most recent">
          Más Reciente
        </option>
        <option className="dark:text-black" value="oldest">
          Más Antiguo
        </option>
      </select>
      <select
        ref={classificationSelectRef}
        className="w-48 bg-transparent dark:text-white border border-light-500 rounded-xl p-2"
        name="filterClasification"
        onChange={handleChangeClasification}
        defaultValue="clasification"
      >
        <option value="clasification" disabled>
          Clasificación
        </option>
        <option className="dark:text-black" value="ATP">
          ATP
        </option>
        <option className="dark:text-black" value="+13">
          +13
        </option>
        <option className="dark:text-black" value="+16">
          +16
        </option>
      </select>
      <select
        ref={genreSelectRef}
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
    </div>
  );
};

export default Filter;
