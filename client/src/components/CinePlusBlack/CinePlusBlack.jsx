import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CinePlusBlack() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const navigate = useNavigate();

  const subBlack = {
    type: "Cine Plus Black",
    price: 1199,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userData) {
      navigate("/login");
    } else if (userData.cinePlus === "Black") {
      toast.error("Ya estas suscripto a esta plan");
    } else {
      const { data } = await axios.post("/subscription", {
        subscription: subBlack,
        userData,
      });
      const orderPurchase = {
        userId: userData.id,
        items: [
          {
            cinePlus: "Black",
            quantity: 1,
            type: "subscription",
          },
        ],
        totalPrice: subBlack.price,
      };
      window.location.href = data.init_point;
      window.localStorage.setItem(
        "orderPurchase",
        JSON.stringify(orderPurchase)
      );
    }
  };

  return (
    <div className="w-1/4 flex justify-around mx-auto">
      <Toaster />
      <div className="w-96 mt-2 rounded-lg relative">
        <div className="">
          <div className="h-20 grid items-center bg-black dark:bg-white border-2 border-black dark:border-white rounded-t-xl">
            <h2 className="font-bold mx-auto text-white dark:text-black">
              Cine Plus Black
            </h2>
            <span className="font-bold mx-auto text-white dark:text-black">
              ${subBlack.price} por mes
            </span>
          </div>
          <div className="h-[280px] flex flex-col justify-between p-4 border-2 border-black dark:border-white rounded-b-xl">
            <ul className="m-0 p-0">
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">
                    4 Entradas Mensuales
                  </h3>
                  <p className="m-0 text-xs font-normal">GRATIS</p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">
                    Regalo de bienvenida
                  </h3>
                  <p className="m-0 text-xs font-normal">*Por única vez.</p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>

              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Exclusivos</h3>
                  <p className="m-0 text-xs font-normal">Avant premiere</p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">35% Off</h3>
                  <p className="m-0 text-xs font-normal">
                    *En todas tus compras
                  </p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
            </ul>
            <button
              onClick={handleSubmit}
              className="bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 text-white dark:text-black w-7/12 mx-auto my-8 p-2 rounded-xl text-base font-bold"
            >
              ¡Quiero suscribirme!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinePlusBlack;
