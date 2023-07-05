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
    <div className="w-full  h-[90vh]">
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
        <div className="w-full h-full flex flex-col justify-center">
          <div className="flex flex-col items-center mt-2">
            <h3 className="mb-4 font-bold">Tu plan: </h3>
            <TextAnimation word={userData.cinePlus.toUpperCase()} />
          </div>
          <div className="w-full py-8">
            <CinePlusGold />
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={handleSubmit}
              className="p-4 bg-dark-500 mb-6 rounded-md text-xl mx-2 font-bold"
            >
              Cancelar suscripción
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center">
          <div className="flex flex-col items-center mt-2">
            <h3 className="mb-4 font-bold">Tu plan: </h3>
            <TextAnimation word={userData.cinePlus.toUpperCase()} />
          </div>
          <div className="w-full py-8">
            <CinePlusBlack />
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={handleSubmit}
              className="p-4 bg-dark-500 mb-6 rounded-md text-xl mx-2 font-bold"
            >
              Cancelar suscripción
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileSubscription;
