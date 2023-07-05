import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function CinePlusBlack() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const subBlack = {
    type: "Black",
    price: 1199,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userData) {
      navigate("/login");
    } else if (userData.cinePlus !== "Estandar") {
      toast.dismiss();
      toast.error("Ya estas suscripto a un plan. Chekea tu perfil!");
      return;
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
            price: 1199
          },
        ],
        totalPrice: subBlack.price,
      };
      window.localStorage.setItem(
        "orderPurchase",
        JSON.stringify(orderPurchase)
      );
      window.location.href = data.init_point;
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
            {pathname !== "/profile" ? (
              <span className="font-bold mx-auto text-white dark:text-black">
                ${subBlack.price} por mes
              </span>
            ) : userData.cinePlus === "Estandar" ? (
              <span className="font-bold mx-auto text-white dark:text-black">
                ${subBlack.price} por mes
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="h-80 flex flex-col justify-between p-4 border-2 border-black dark:border-white rounded-b-xl">
            <ul className="m-0 p-0">
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">
                    4 Entradas Mensuales
                  </h3>
                  <p className="m-0 text-xs font-normal">
                    *Se retira en mesa de entrada.
                  </p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">
                    Regalo de bienvenida
                  </h3>
                  <p className="m-0 text-xs font-normal">*Por única vez.</p>
                  <p className="m-0 text-xs font-normal">
                    *Se retira en mesa de entrada.
                  </p>
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
                    *En todas tus compras en los locales
                  </p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
            </ul>
            {pathname !== "/profile" ? (
              <button
                onClick={handleSubmit}
                className="h-1/4 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 text-white dark:text-black w-7/12 mx-auto -mb-10 p-2 rounded-xl text-base font-bold"
              >
                ¡Quiero suscribirme!
              </button>
            ) : userData.cinePlus === "Estandar" ? (
              <button
                onClick={handleSubmit}
                className="h-1/4 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 text-white dark:text-black w-7/12 mx-auto -mb-10 p-2 rounded-xl text-base font-bold"
              >
                ¡Quiero suscribirme!
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinePlusBlack;
