import React, { useEffect, useState } from "react";
import CandyCard from "../../components/CandyCard/CandyCard";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addCartCandy, getCandy, getUserById } from "../../redux/actions";
import CandyCarrito from "../../components/CandyCarrito/CandyCarrito";
import { Toaster, toast } from "react-hot-toast";

function CandyContainer() {
  const storeProductCount = window.localStorage.getItem("productCount");
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.allCandy);
  const [productCount, setProductCount] = useState(0);

  const candyProduct = products.filter((active) => active.activeCandy === true);

  const combos = candyProduct.filter(
    (product) => product.category === "combos"
  );
  const pochoclos = candyProduct.filter(
    (product) => product.category === "pochoclos"
  );
  const bebidas = candyProduct.filter(
    (product) => product.category === "bebidas"
  );
  const snacks = candyProduct.filter(
    (product) => product.category === "snacks"
  );
  const cafeteria = candyProduct.filter(
    (product) => product.category === "cafeteria"
  );
  const golosinas = candyProduct.filter(
    (product) => product.category === "golosinas"
  );

  const addCart = (name) => {
    if (productCount >= 10) {
      toast.dismiss(); // Limpiar la alerta existente si hay alguna
      toast.error("Has alcanzado el límite de 10 productos en tu carrito.", {
        duration: 3000,
      });
      return;
    }
    dispatch(addCartCandy(name));
    toast.dismiss(); // Limpiar la alerta existente si hay alguna
    toast.success("Producto agregado al carrito", {
      duration: 2000,
    });

    localStorage.setItem("productCount", productCount + 1);
    setProductCount(productCount + 1);
  };

  useEffect(() => {
    if (userData?.id) {
      dispatch(getUserById(userData.id));
    }
    dispatch(getCandy()).then(() => {
      setLoading(false);
    });
    if (storeProductCount) {
      setProductCount(Number(storeProductCount));
    }
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full flex">
          <Toaster />
          <div className="w-2/3 mt-20 flex flex-col items-center px-14 pb-14">
            {combos.length ? (
              <>
                <h2>Combos</h2>
                <div className="flex flex-wrap justify-center">
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
              </>
            ) : null}

            {pochoclos.length ? (
              <>
                <h2 className="mt-4">Pochoclos</h2>
                <div className="flex flex-wrap justify-center">
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
              </>
            ) : null}

            {bebidas.length ? (
              <>
                <h2 className="mt-4">Bebidas</h2>
                <div className="flex flex-wrap justify-center">
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
              </>
            ) : null}

            {snacks.length ? (
              <>
                <h2 className="mt-4">Snacks</h2>
                <div className="flex flex-wrap justify-center">
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
              </>
            ) : null}

            {cafeteria.length ? (
              <>
                <h2 className="mt-4">Cafeteria</h2>
                <div className="flex flex-wrap justify-center">
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
              </>
            ) : null}

            {golosinas.length ? (
              <>
                <h2 className="mt-4">Golosinas</h2>
                <div className="flex flex-wrap justify-center mb-12">
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
              </>
            ) : null}
          </div>

          <CandyCarrito
            addCart={addCart}
            productCount={productCount}
            setProductCount={setProductCount}
          />
        </div>
      )}
    </>
  );
}

export default CandyContainer;
