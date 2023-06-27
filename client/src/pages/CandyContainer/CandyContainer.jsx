import React, { useEffect, useState } from "react";
import CandyCard from "../../components/CandyCard/CandyCard";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addCartCandy, getCandy } from "../../redux/actions";
import CandyCarrito from "../../components/CandyCarrito/CandyCarrito";
import { Toaster, toast } from "react-hot-toast";

function CandyContainer() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.allCandy);
  const [productCount, setProductCount] = useState(0);

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

  const addCart = (name) => {
    if (productCount >= 5) {
      toast.error("Has alcanzado el límite de 5 productos en tu carrito.", {
        duration: 3000
      });
      return;
    }
    dispatch(addCartCandy(name));
    toast.success("Producto agregado al carrito", {
      duration: 2000
    });
    setProductCount(productCount + 1);
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
          <Toaster />
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
                  addCart={() => addCart(name)}
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
                  addCart={() => addCart(name)}
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
                  addCart={() => addCart(name)}
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
                  addCart={() => addCart(name)}
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
                  addCart={() => addCart(name)}
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
                  addCart={() => addCart(name)}
                />
              ))}
            </div>
          </div>

          <CandyCarrito addCart={addCart} productCount={productCount} setProductCount={setProductCount} />
        </div>
      )}
    </>
  );
}

export default CandyContainer;
