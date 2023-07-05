import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { logoutUser, putUserSubscription } from "../../redux/actions";
import CinePlusBlack from "../CinePlusBlack/CinePlusBlack";
import CinePlusGold from "../CinePlusGold/CinePlusGold";
import TextAnimation from "./Efecto";
import style from "./ProfileSubscription.module.css";
import { useNavigate } from "react-router-dom";

function ProfileSubscription() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCinePlus = {
    id: userData.id,
    cinePlus: "Estandar",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Vas a eliminar tu suscripción. ¿Estas seguro?",
      text: "Perderas todos tus beneficios",
      icon: "warning",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      denyButtonColor: "#d33",
      denyButtonText: "Cancelar",
      confirmButtonText: "¡Sí!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(putUserSubscription(userCinePlus));
        dispatch(logoutUser());
        navigate("/");

        window.localStorage.removeItem("user");
        Swal.fire(
          "¡Listo!",
          "Eliminaste tu suscripción. Volve a iniciar sesion",
          "success"
        );
      }
    });
  };

  return (
    <div className="h-screen">
      <h2 className="w-full flex items-center justify-center h-16 bg-light-200 dark:bg-slate-800">
        Suscripción
      </h2>
      {userData.cinePlus === "Estandar" ? (
        <div className="">
          <div className="flex flex-col items-center mt-2">
            <h3 className="mb-4 font-bold">Tu plan: </h3>
            <TextAnimation word={userData.cinePlus.toUpperCase()} />
          </div>
          <div className="flex">
            <CinePlusGold />
            <CinePlusBlack />
          </div>
        </div>
      ) : userData.cinePlus === "Gold" ? (
        <div className="">
          <div className="flex flex-col items-center mt-2">
            <h3 className="mb-4 font-bold">Tu plan: </h3>
            <div className="flex">
              <TextAnimation word={userData.cinePlus.toUpperCase()} />
              <button
                onClick={handleSubmit}
                className="w-96 h-20 flex justify-center items-center bg-dark-400 mb-6 rounded-md text-3xl mx-2 font-bold"
              >
                Cancelar suscripción
              </button>
            </div>
          </div>
          <div className="flex">
            <CinePlusBlack />
          </div>
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col items-center mt-2">
            <div className="flex">
              <TextAnimation word={userData.cinePlus.toUpperCase()} />
              <button
                onClick={handleSubmit}
                className="w-96 h-20 flex justify-center items-center bg-dark-400 mb-6 rounded-md text-3xl mx-2 font-bold"
              >
                Cancelar suscripción
              </button>
            </div>
          </div>
          <div className="flex">
              <CinePlusGold />
          </div>
        </div>
      )}
      {/* <h2 className="w-full flex items-center justify-center h-16 bg-light-200 dark:bg-slate-800">Suscripción actual: {userData.cinePlus} </h2>
      {userData.cinePlus === "Estandar" ? (
          
      ) : userData.cinePlus === "Gold" ? (
        <div className="flex items-center">
          <h2>Pasate a: </h2>
            <CinePlusBlack />
        </div>
      ) : ( */}
      {/*       <div className="w-full h-screen flex flex-col justify-center items-center">
        <h3 className="mb-4 font-bold">Tenes el plan mas tocho de todos</h3>
        <TextAnimation word={userData.cinePlus.toUpperCase()} />
        <button
          className="w-80 p-4 rounded-lg bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80"
          onClick={handleSubmit}
        >
          <span className="text-white dark:text-black">
            Cancelar suscripción
          </span>
        </button>
      </div> */}
      {/* )} */}
    </div>
  );
}

export default ProfileSubscription;
