import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Ticket from "../../components/Ticket/Ticket";
import Cart from "../../components/Cart/Cart";
import { addCart, removeAllCart, removeOneCart, saveCart } from "../../redux/actions";
import { useEffect } from "react";

const TicketContainer = () => {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const storedMovie = JSON.parse(window.localStorage.getItem("movie"));
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productTicket);
  const cart = useSelector((state) => state.cart);

  const cinefan = product.filter((name) => name.name === "cineFan");
  const general = product.filter((name) => name.name === "general");

  const addToCard = (name) => {
    dispatch(addCart(name));
  };

  const delRemoveCart = (name, all = false) => {
    if (all) {
      dispatch(removeAllCart(name));
      window.localStorage.removeItem("cart");
    } else {
      dispatch(removeOneCart(name));
      window.localStorage.removeItem("cart");
    }
  };

  let subtotal = cart.reduce((acc, el) => acc + el.price, 0);

  let servicio = subtotal * 0.1;

  let total = subtotal + servicio;

  useEffect(() => {
    const storedCart = window.localStorage.getItem("cart");
    if (storedCart) {
      dispatch(saveCart(JSON.parse(storedCart)));
    }
  }, []);

  useEffect(() => {
    if(cart.length) {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <div className="mt-16 flex">
      <div className="w-2/3 flex flex-col">
        <div className="flex items-center justify-center mt-20">
          <div className="w-full flex flex-col items-center">
            <h4 className="mb-4">Sumate a cineFan</h4>
            {cinefan?.map(({ id, name, description, price, image }) => (
              <Ticket
                key={id}
                id={id}
                name={name}
                description={description}
                price={price}
                image={image}
                addToCard={addToCard}
              />
            ))}
          </div>
          <div className="w-full flex flex-col items-center">
            <h4 className="mb-4">General</h4>
            {general?.map(({ id, name, description, price, image }) => (
              <Ticket
                key={id}
                id={id}
                name={name}
                description={description}
                price={price}
                image={image}
                addToCard={addToCard}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/3 mt-6 mb-10 flex flex-col items-center">
        <div className="w-80 mx-auto rounded shadow-lg bg-gray-50 dark:bg-black dark:shadow-gray-700 flex flex-col ">
          {storedMovie && (
            <div className="w-full flex flex-col items-center pt-10">
              <img
                src={storedMovie.image}
                alt={storedMovie.title}
                className="h-80"
              />
              <p className=" px-2 py-1 font-bold text-lg mb-1 text-gray-700 dark:text-white">
                {storedMovie.title}
              </p>
            </div>
          )}
          <div className="px-2 py1">
            <hr />
            {cart?.map((item, index) => (
              <Cart
                key={index}
                id={item.id}
                price={item.price}
                name={item.name}
                count={item.count}
                delRemoveCart={delRemoveCart}
                addToCard={addToCard}
              />
            ))}
          </div>

          <div>
            <div className="px-2 pt-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">
              Subtotal: $ {subtotal}
            </div>
            <div className="px-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">
              Cargos por servicio de entradas: $ {servicio}{" "}
            </div>
            <div className="px-2 font-bold text-lg mb-1 text-gray-700 dark:text-white">
              <p>TOTAL: $ {total}</p>
            </div>
          </div>
          <Link to={`${!userData ? "/login" : "/candy"}`}>
            <button className="w-80 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-10 rounded text-xs">
              Siguiente
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketContainer;
