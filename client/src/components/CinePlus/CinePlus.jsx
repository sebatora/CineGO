import React from "react";
import pochoclo from "../../assets/pochoclo.png";
import { FaCheck, FaTimes } from "react-icons/fa";

const cinePlus = () => {
  return (
    <div className="w-4/5 flex justify-around my-20 mx-auto">
      <div className="w-96 mt-20 rounded-lg relative">
        <div className="w-96 absolute -top-14 flex justify-around">
          <img src={pochoclo} alt="Pochoclo" className="w-14 animate-tambaleo" />
          <img src={pochoclo} alt="Pochoclo" className="w-14 animate-tambaleo" />
          <img src={pochoclo} alt="Pochoclo" className="w-14 animate-tambaleo" />
        </div>
        <div className="">
          <div className="h-12 grid items-center bg-yellow-300 border-2 border-yellow-300 rounded-t-xl">
            <h2 className="font-bold mx-auto">Cine Plus Gold</h2>
          </div>
          <div className="h-full flex flex-col justify-between p-4 border-4 border-yellow-300 rounded-b-xl">
            <ul className="m-0 p-0">
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">
                    2 Entradas Mensuales CinePlus
                  </h3>
                  <p className="m-0 text-xs font-normal">GRATIS!</p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Regalo de bienvenida</h3>
                  <p className="m-0 text-xs font-normal">
                    Combo Mega o combo Nachos *Por única vez.
                  </p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">25% Off en Combos</h3>
                  <p className="m-0 text-xs font-normal">Seleccionados del Candy</p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Suma Puntos</h3>
                  <p className="m-0 text-xs font-normal">Con todas tus compras</p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Canje de Puntos</h3>
                  <p className="m-0 text-xs font-normal">Por entradas y combos</p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Funciones y concursos</h3>
                  <p className="m-0 text-xs font-normal">Exclusivos</p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">50% Off en Entradas</h3>
                  <p className="m-0 text-xs font-normal">1 vez al mes!</p>
                </div>
                <FaCheck />
              </li>
            </ul>
            <button className="w-7/12 mx-auto bg-yellow-300 my-2 p-2 rounded-xl text-base font-bold">
              ¡Quiero suscribirme!
            </button>
          </div>
        </div>
      </div>
      <div className="w-96 mt-20 rounded-lg relative">
        <div className="">
          <div className="h-12 grid items-center bg-slate-400 border-2 border-slate-400 rounded-t-xl">
            <h2 className="font-bold mx-auto">Cine Plus Platinum</h2>
          </div>
          <div className="h-full flex flex-col justify-between p-4 border-4 border-slate-400 rounded-b-xl">
            <ul className="m-0 p-0">
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">
                    2 Entradas Mensuales CinePlus
                  </h3>
                  <p className="m-0 text-xs font-normal">GRATIS!</p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Regalo de bienvenida</h3>
                  <p className="m-0 text-xs font-normal">
                    Combo Mega o combo Nachos *Por única vez.
                  </p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">25% Off en Combos</h3>
                  <p className="m-0 text-xs font-normal">Seleccionados del Candy</p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Suma Puntos</h3>
                  <p className="m-0 text-xs font-normal">Con todas tus compras</p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Canje de Puntos</h3>
                  <p className="m-0 text-xs font-normal">Por entradas y combos</p>
                </div>
                <FaCheck />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">Funciones y concursos</h3>
                  <p className="m-0 text-xs font-normal">Exclusivos</p>
                </div>
                <FaTimes />
              </li>
              <li className="flex justify-around m-2">
                <div className="w-4/5">
                  <h3 className="m-0 text-sm font-bold">50% Off en Entradas</h3>
                  <p className="m-0 text-xs font-normal">1 vez al mes!</p>
                </div>
                <FaTimes />
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
};

export default cinePlus;
