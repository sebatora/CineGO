import React, { useEffect, useState } from "react";
import CandyCard from "../CandyCard/CandyCard";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addCartCandy, getCandy } from "../../redux/actions";
import CandyCarrito from "../CandyCarrito/CandyCarrito";

function CandyContainer() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.allCandy);

  const combos = products.filter((product) => product.category === "combos");
  const pochoclos = products.filter(
    (product) => product.category === "pochoclos"
  );
  const bebidas = products.filter((product) => product.category === "bebidas");
  const snacks = products.filter((product) => product.category === "snacks");
  const cafeteria = products.filter(
    (product) => product.category === "cafeteria"
  );
  const golosinas = products.filter(
    (product) => product.category === "golosinas"
  );

  const handleBuy = (id) => {
    dispatch(addCartCandy(id));
  };

  useEffect(() => {
    dispatch(getCandy());
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full flex">
          <div className="w-2/3 mt-28 flex flex-col items-center ">
            <h2>Combos</h2>
            <div className="flex flex-wrap justify-center mb-10">
              {combos.map(({ id, name, description, price, image }) => (
                <CandyCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                  image={image}
                  handleBuy={() => handleBuy(id)}
                />
              ))}
            </div>

            <h2>Pochoclos</h2>
            <div className="flex flex-wrap justify-center mb-10">
              {pochoclos.map(({ id, name, description, price, image }) => (
                <CandyCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                  image={image}
                  handleBuy={() => handleBuy(id)}
                />
              ))}
            </div>

            <h2>Bebidas</h2>
            <div className="flex flex-wrap justify-center mb-10">
              {bebidas.map(({ id, name, description, price, image }) => (
                <CandyCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                  image={image}
                  handleBuy={() => handleBuy(id)}
                />
              ))}
            </div>

            <h2>Snacks</h2>
            <div className="flex flex-wrap justify-center mb-10">
              {snacks.map(({ id, name, description, price, image }) => (
                <CandyCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                  image={image}
                  handleBuy={() => handleBuy(id)}
                />
              ))}
            </div>

            <h2>Cafeteria</h2>
            <div className="flex flex-wrap justify-center mb-10">
              {cafeteria.map(({ id, name, description, price, image }) => (
                <CandyCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                  image={image}
                  handleBuy={() => handleBuy(id)}
                />
              ))}
            </div>

            <h2>Golosinas</h2>
            <div className="flex flex-wrap justify-center mb-10">
              {golosinas.map(({ id, name, description, price, image }) => (
                <CandyCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                  image={image}
                  handleBuy={() => handleBuy(id)}
                />
              ))}
            </div>
          </div>

          <CandyCarrito />
        </div>
      )}
    </>
  );
}

export default CandyContainer;
