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
    if (value === "allClasifications") {
      setOrderData({
        order: "",
        filterGenre: "",
        filterClasification: "",
      });
      dispatch(getMovies());
      classificationSelectRef.current.value = "clasification";
    } else {
      setOrderData({ ...orderData, [name]: value });
    }
  };

  const handleChangeGenre = (event) => {
    const { name, value } = event.target;
    if (value === "allGenres") {
      setOrderData({
        order: "",
        filterGenre: "",
        filterClasification: "",
      });
      dispatch(getMovies());
      genreSelectRef.current.value = "genre";
    } else {
      setOrderData({ ...orderData, [name]: value });
    };
  };

  // const handleReset = () => {
  //   setOrderData({
  //     order: "",
  //     filterGenre: "",
  //     filterClasification: "",
  //   });

  //   if (orderSelectRef.current) {
  //     orderSelectRef.current.value = "order";
  //   }

  //   if (classificationSelectRef.current) {
  //     classificationSelectRef.current.value = "clasification";
  //   }

  //   if (genreSelectRef.current) {
  //     genreSelectRef.current.value = "genre";
  //   }

  //   dispatch(getMovies());
  // };

  useEffect(() => {
    dispatch(filterOrder(orderData));
  }, [orderData]);

  return (
    <div className="w-full px-14 lg:p-0 lg:w-2/3 lg:ml-20 lg:order-none flex flex-wrap md:flex-nowrap justify-center md:justify-evenly md:space-x-4 order-1">
      <select
        ref={orderSelectRef}
        className="w-full mb-2 md:mb-0 md:w-48 bg-transparent dark:text-white border border-light-500 rounded-xl p-2"
        name="order"
        onChange={handleChangeOrder}
        defaultValue="order"
      >
        <option value="order" disabled>Orden</option>
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
        className="w-full mb-2 md:mb-0 md:w-48 bg-transparent dark:text-white border border-light-500 rounded-xl p-2"
        name="filterClasification"
        onChange={handleChangeClasification}
        defaultValue="clasification"
      >
        <option value="clasification" disabled>
          Clasificación
        </option>
        <option value="allClasifications">
          Todas las clasificaciones
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
        className="w-full mb-2 md:mb-0 md:w-48 bg-transparent dark:text-white border border-light-500 rounded-xl p-2"
        name="filterGenre"
        onChange={handleChangeGenre}
        defaultValue="genre"
      >
        <option value="genre" disabled>
          Género
        </option>
        <option value="allGenres">
          Todos los géneros
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
