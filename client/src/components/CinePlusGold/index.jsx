import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

function CinePlusGold() {
  return (
    <div className="w-4/5 flex justify-around mx-auto">
      <div className="w-96 mt-20 rounded-lg relative">
        <div className="">
          <div className="h-14 grid items-center bg-yellow-300 border-2 border-yellow-300 rounded-t-xl">
            <h2 className="font-bold mx-auto">Cine Plus Gold</h2>
          </div>
          <div className="h-full flex flex-col justify-between p-4 border-4 border-yellow-400 rounded-b-xl">
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
                  <p className="m-0 text-xs font-normal">
                    Combo Mega o combo Nachos *Por única vez.
                  </p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">25% Off en Combos</h3>
                  <p className="m-0 text-xs font-normal">
                    Seleccionados del Candy
                  </p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Suma Puntos</h3>
                  <p className="m-0 text-xs font-normal">
                    Con todas tus compras
                  </p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Canje de Puntos</h3>
                  <p className="m-0 text-xs font-normal">
                    Por entradas y combos
                  </p>
                </div>
                <FaCheck className="dark:text-white" />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">
                    Funciones y concursos
                  </h3>
                  <p className="m-0 text-xs font-normal">Exclusivos</p>
                </div>
                <FaTimes className="dark:text-white" />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">50% Off en Entradas</h3>
                  <p className="m-0 text-xs font-normal">1 vez al mes!</p>
                </div>
                <FaTimes className="dark:text-white" />
              </li>
            </ul>
            <button className="w-7/12 mx-auto bg-slate-400 my-2 p-2 rounded-xl text-base font-bold">
              ¡Quiero suscribirme!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinePlusGold;
