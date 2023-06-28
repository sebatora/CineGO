import axios from "axios";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { putUserSubscription } from "../../redux/actions";
import toast, { Toaster } from "react-hot-toast";

function CinePlusGold() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subGold = {
    type: "Cine Plus Gold",
    price: 499,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userData) {
      navigate("/login");
    } else if (userData.cinePlus === "Gold") {
      toast.error("Ya estas suscripto a esta plan");
    } else {
      const { data } = await axios.post("/subscription", {
        subscription: subGold,
        userData,
      });
      window.location.href = data.init_point;
      dispatch(putUserSubscription({ id: userData.id, cinePlus: "Gold" }));
    }
  };

  return (
    <div className="w-1/4 flex justify-around mx-auto">
      <Toaster />

      <div className="w-96 mt-2 rounded-lg relative">
        <div className="">
          <div className="h-20 grid items-center bg-yellow-300 border-2 border-yellow-300 rounded-t-xl">
            <h2 className="font-bold mx-auto">Cine Plus Gold</h2>
            <span className="font-bold mx-auto text-black dark:text-white">
              ${subGold.price} por mes
            </span>
          </div>
          <div className="h-[280px] flex flex-col justify-between p-4 border-4 border-yellow-300 rounded-b-xl">
            <ul className="m-0 p-0">
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">
                    2 Entradas Mensuales CinePlus
                  </h3>
                  <p className="m-0 text-xs font-normal">GRATIS!</p>
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
                  <h3 className="m-0 text-sm font-bold">20% Off</h3>
                  <p className="m-0 text-xs font-normal">
                    *En todas las compras
                  </p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
            </ul>
            <button
              onClick={handleSubmit}
              className="w-7/12 mx-auto bg-yellow-300 hover:bg-yellow-200 my-2 p-2 rounded-xl text-base font-bold"
            >
              ¡Quiero suscribirme!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinePlusGold;
