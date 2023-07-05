import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Ticket from "../../components/Ticket/Ticket";
import Cart from "../../components/Cart/Cart";
import {
  addCart,
  postAllTickets,
  removeAllCart,
  removeOneCart,
  saveCart,
} from "../../redux/actions";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const TicketContainer = () => {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const storedMovie = JSON.parse(window.localStorage.getItem("movie"));
  const tickets = [
    {
      id: storedMovie.id,
      showId: storedMovie.showId.id,
      idTicket: 1,
      name: "Entrada General",
      image:
        "https://static.cinemarkhoyts.com.ar/Images/TicketTypeImage/1687.png",
      price: 200,
      description:
        "Entrada Promocional No acumulable con otras promociones. Lunes y martes.",
      type: "show",
    },
    {
      id: storedMovie.id,
      showId: storedMovie.showId.id,
      idTicket: 2,
      name: "Entrada CineFan",
      image:
        "https://static.cinemarkhoyts.com.ar/Images/TicketTypeImage/1667.png",
      price: 290,
      description: "Incluye 2 entradas + Tarjeta Virtual.",
      type: "show",
    },
  ];

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [productCount, setProductCount] = useState(0);
  const navigate = useNavigate();

  const cinefan = tickets.filter((ticket) => ticket.name === "Entrada CineFan");
  const general = tickets.filter((ticket) => ticket.name === "Entrada General");

  const addToCard = (name) => {
    if (productCount >= 10) {
      toast.dismiss();
      toast.error("Has alcanzado el límite de 10 productos en tu carrito.", {
        duration: 3000,
      });
      return;
    }
    dispatch(addCart(name));
    toast.dismiss();
    toast.success("Producto agregado al carrito", {
      duration: 2000,
    });
    localStorage.setItem("productCount", productCount + 1);
    setProductCount(productCount + 1);
  };

  const delRemoveCart = (name, all = false) => {
    if (all) {
      let nombre = cart.find((product) => product.name === name);

      dispatch(removeAllCart(name));
      window.localStorage.removeItem("cart");
      setProductCount(productCount - nombre.count);
      localStorage.setItem("productCount", productCount - nombre.count);
    } else {
      dispatch(removeOneCart(name));
      window.localStorage.removeItem("cart");
      setProductCount(productCount - 1);
      localStorage.setItem("productCount", productCount - 1);
    }
  };

  const handleClick = () => {
    if (!userData) {
      navigate("/login");
    }
    if (!cart.length) {
      toast.error("Agrega elementos al carrito");
    } else {
      navigate("/candy");
    }
  };

  const subtotal = cart.reduce((acc, el) => acc + parseFloat(el.price), 0);
  const servicio = subtotal * 0.1;
  const total = subtotal + servicio;

  useEffect(() => {
    dispatch(postAllTickets(tickets));
    const storedCart = window.localStorage.getItem("cart");
    if (storedCart) {
      dispatch(saveCart(JSON.parse(storedCart)));
    }
  }, []);

  useEffect(() => {
    const storeProductCount = localStorage.getItem("productCount");

    if (storeProductCount) {
      setProductCount(Number(storeProductCount));
    }
  }, []);
  useEffect(() => {
    if (cart.length) {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <div className="mt-16 flex">
      <Toaster />
      <div className="w-2/3 flex flex-col">
        <div className="flex items-center justify-center mt-20">
          <div className="w-full flex flex-col items-center">
            <h4 className="mb-4">Sumate a cineFan</h4>
            {cinefan?.map(({ idTicket, name, description, price, image }) => (
              <Ticket
                key={idTicket}
                idTicket={idTicket}
                name={name}
                description={description}
                price={price}
                image={image}
                addToCard={() => addToCard(name)}
              />
            ))}
          </div>
          <div className="w-full flex flex-col items-center">
            <h4 className="mb-4">General</h4>
            {general?.map(({ idTicket, name, description, price, image }) => (
              <Ticket
                key={idTicket}
                idTicket={idTicket}
                name={name}
                description={description}
                price={price}
                image={image}
                addToCard={() => addToCard(name)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/3 mt-6 mb-10 flex flex-col items-center">
        <div className="w-80 mx-auto rounded shadow-lg bg-primary-50 dark:bg-dark-950 dark:shadow-gray-700 flex flex-col ">
          {storedMovie && (
            <div className="w-full flex flex-col items-center py-2">
              <img
                src={storedMovie.image}
                alt={storedMovie.title}
                className="h-72 rounded"
              />
              <p className=" px-2 py-1 font-bold text-base mb-1 mt-1 text-gray-700 dark:text-white">
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
                productCount={productCount}
                setProductCount={setProductCount}
              />
            ))}
          </div>

          <div>
            <div className="px-2 pt-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">
              Subtotal: $ {subtotal.toLocaleString("en-US")}
            </div>
            <div className="px-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">
              Cargo por servicio candy: $ {servicio.toLocaleString("en-US")}
            </div>
            <div className="px-2 font-bold text-lg mb-1 text-gray-700 dark:text-white">
              <p>TOTAL: $ {total.toLocaleString("en-US")}</p>
            </div>
          </div>
          <div className="px-4 py-3 mb-2 flex justify-center items-center">
            <button
              className="w-80 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-10 rounded text-xs"
              onClick={handleClick}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketContainer;
