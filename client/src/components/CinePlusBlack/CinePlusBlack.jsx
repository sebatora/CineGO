import React from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import pochoclo from "../../assets/pochoclo.png";
import { logoutUser, putUserSubscription } from "../../redux/actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CinePlusBlack() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subBlack = {
    type: "Cine Plus Black",
    price: 999,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userData) {
      navigate("/login");
    } else {
      const { data } = await axios.post("/subscription", {
        subscription: subBlack,
        userData,
      });
      window.location.href = data.init_point;
      dispatch(putUserSubscription({ id: userData.id, cinePlus: "Black" }));
      dispatch(logoutUser());
    }
  };
  return (
    <div className="w-4/5 flex justify-around  mx-auto">
      <div className="w-96 mt-14 rounded-lg relative">
        {/*         <div className="w-96 absolute -top-14 flex justify-around">
          <img
            src={pochoclo}
            alt="Pochoclo"
            className="w-14 animate-tambaleo"
          />
          <img
            src={pochoclo}
            alt="Pochoclo"
            className="w-14 animate-tambaleo"
          />
          <img
            src={pochoclo}
            alt="Pochoclo"
            className="w-14 animate-tambaleo"
          />
        </div> */}
        <div className="">
          <div className="h-20 grid items-center bg-black dark:bg-white border-2 border-black dark:border-white rounded-t-xl">
            <h2 className="font-bold mx-auto text-white dark:text-black">
              Cine Plus Black
            </h2>
            <span className="font-bold mx-auto text-white dark:text-black">
              ${subBlack.price} por mes
            </span>
          </div>
          <div className="h-[480px] flex flex-col justify-between p-4 border-2 border-black dark:border-white rounded-b-xl">
            <ul className="m-0 p-0">
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">
                    4 Entradas Mensuales CinePlus
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
                  <h3 className="m-0 text-sm font-bold">Avant premiere</h3>
                  <p className="m-0 text-xs font-normal">Acceso exclusivo</p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">50% Off</h3>
                  <p className="m-0 text-xs font-normal">
                    en todas las compras!
                  </p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
            </ul>
            <button
              onClick={handleSubmit}
              className="bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 text-white dark:text-black w-7/12 mx-auto my-2 p-2 rounded-xl text-base font-bold"
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
