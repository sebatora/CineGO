import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCartCandy, removeAllCartCandy, removeOneCartCandy, saveCart } from "../../redux/actions";
import { useEffect } from "react";
import { GoTrash } from "react-icons/go";
import { Toaster, toast } from "react-hot-toast";

function CandyCarrito() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let subtotal = cart.reduce((acc, el) => acc + el.price, 0);

  let servicio = subtotal * 0.10;

  let total = subtotal + servicio;

  const addCart = (name) => {
    dispatch(addCartCandy(name));
  };

  const delRemoveCart = (name, all = false) => {
    if (all) {
      dispatch(removeAllCartCandy(name));
      window.localStorage.removeItem("cart");
    } else {
      dispatch(removeOneCartCandy(name));
      window.localStorage.removeItem("cart");
    }
  };

  const handlePay = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/payment", cart);
      window.location.href = data.init_point;
      window.localStorage.removeItem("cart");
    } catch (error) {
      console.error(error);
      toast.error("Debes seleccionar un producto", {
        duration: 3000
      })
    }
  }

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
    <div className="w-1/3 mt-36 flex flex-col items-center">
      <Toaster />
      <div className="w-96 mx-auto rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-black dark:shadow-gray-700 flex flex-col">
        <p className="px-2 py-2 font-bold text-center text-3xl text-gray-700 dark:text-gray-300">
          Candy
        </p>
        <div className="px-2 py-1 font-bold text-lg mb-1 text-gray-700 dark:text-white">
          Productos seleccionados: {" "}
        </div>
        <div className="px-2 py1">
          <hr />
          {cart?.map((item, index) => (
            <div key={index} className="flex items-center border-b pb-0">
              <button
                onClick={() => delRemoveCart(item.name, true)}
                className="rounded-full h-6 w-6 mr-3 ml-1 mt-1 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold transition-colors duration-300"
              >
                <GoTrash className="text-xl mx-1" />
              </button>
              <div className="mr-2 mt-2 text-sm font-bold text-gray-700 dark:text-white">
                {item.count}{" "} {item.name}
              </div>
              <div className="flex items-center my-2 ml-auto">
                <p className="mr-1 mt-2 text-sm font-bold text-gray-700 dark:text-white">$ {item.price}</p>
                <button
                  onClick={() => delRemoveCart(item.name)}
                  className="rounded-full h-6 w-6 ml-1 mr-2 mt-2 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold transition-colors duration-300"
                >
                  -
                </button>
                <button
                  onClick={() => addCart(item.name)}
                  className="rounded-full h-6 w-6 ml-1 mr-2 mt-2 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold transition-colors duration-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="px-2 pt-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">
          Subtotal: $ {subtotal}
        </div>
        <div className="px-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">
          Cargo por servicio candy: $ {servicio}
        </div>
        <div className="px-2 font-bold text-lg mb-1 text-gray-700 dark:text-white">
          <strong>TOTAL: $ {total} </strong>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-2 rounded text-xs"
          onClick={handlePay}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default CandyCarrito;
