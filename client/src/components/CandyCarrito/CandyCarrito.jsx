import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCartCandy, removeAllCartCandy, removeOneCartCandy, saveCart } from "../../redux/actions";
import { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { Toaster, toast } from "react-hot-toast";

function CandyCarrito() {
  const cart = useSelector((state) => state.cart);
  const userData = useSelector((state) => state.userData);
  const [productCount, setProductCount] = useState(0);
  const dispatch = useDispatch();

  const subtotal = cart.reduce((acc, el) => acc + parseFloat(el.price), 0);
  const servicio = subtotal * 0.10;
  const total = subtotal + servicio;

  const addCart = (name) => {
    if (productCount >= 5) {
      toast.error("Has alcanzado el límite de 6 productos en tu carrito.", {
        duration: 3000
      });
      return;
    }
    dispatch(addCartCandy(name));
    setProductCount(productCount + 1);
  };
  

  const delRemoveCart = (name, all = false) => {
    if (all) {
      dispatch(removeAllCartCandy(name));
      window.localStorage.removeItem("cart");
      setProductCount(0);
    } else {
      dispatch(removeOneCartCandy(name));
      window.localStorage.removeItem("cart");
      setProductCount(productCount - 1);
    }
  };
  
  const handlePay = async () => {
    try {
      const { data } = await axios.post("/payment", { cart, userData });
      window.location.href = data.init_point;
      window.localStorage.removeItem("cart");
      window.localStorage.removeItem("movie");
    } catch (error) {
      console.error(error);
      toast.error("Debes seleccionar un producto", {
        duration: 3000
      });
    }
  };

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
    <div className="w-1/3 fixed right-0 mt-44 flex flex-col items-center">
      <Toaster />
      <div className="w-96 mx-auto rounded overflow-hidden shadow-lg bg-primary-50 dark:bg-dark-950 dark:shadow-gray-700 flex flex-col">
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
                <p className="mr-1 mt-2 text-sm font-bold text-gray-700 dark:text-white">$ {item.price.toLocaleString('es-Us')}</p>
                <button
                  onClick={() => delRemoveCart(item.name)}
                  className="rounded-full h-6 w-6 ml-1 mr-2 mt-2 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold transition-colors duration-300"
                >
                  -
                </button>
                <button
                  onClick={() => {
                    addCart(item.name);
                    toast.success("Producto agregado al carrito", {
                      duration: 2000
                    });
                  }}
                  className="rounded-full h-6 w-6 ml-1 mr-2 mt-2 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold transition-colors duration-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="px-2 pt-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">
          Subtotal: $ {subtotal.toLocaleString('en-US')}
        </div>
        <div className="px-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">
          Cargo por servicio candy: $ {servicio.toLocaleString('en-US')}
        </div>
        <div className="px-2 font-bold text-lg mb-1 text-gray-700 dark:text-white">
          <strong>TOTAL: $ {total.toLocaleString('en-US')} </strong>
        </div>
        <div className="px-4 py-3 mb-2 flex justify-center items-center">
          <button
            className="bg-primary-600 text-white font-bold py-2 px-36  rounded text-xs"
            onClick={handlePay}
          >
            Comprar
          </button>
        </div>

      </div>
    </div>
  );
}

export default CandyCarrito;
