import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { logoutUser, putUserSubscription } from "../../redux/actions";
import CinePlusBlack from "../CinePlusBlack/CinePlusBlack";
import CinePlusGold from "../CinePlusGold/CinePlusGold";
import TextAnimation from "./Efecto";
import style from "./ProfileSubscription.module.css";

function ProfileSubscription() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const userCinePlus = {
    id: userData.id,
    cinePlus: "Estandar",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Vas a eliminar tu suscripción. Estas seguro?",
      text: "Perderas todos tus beneficios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(putUserSubscription(userCinePlus));
        dispatch(logoutUser());
        window.localStorage.removeItem("user");
        Swal.fire(
          "Listo!",
          "Eliminaste tu suscripción. Volve a iniciar sesion",
          "success"
        );
      }
    });
  };

  return (
    <div className="mb-10">
      {/* <h2 className="w-full flex items-center justify-center h-16 bg-light-200 dark:bg-slate-800">Suscripción actual: {userData.cinePlus} </h2>
      {userData.cinePlus === "Estandar" ? (
        <div className="flex items-center">
          <CinePlusGold />
          <CinePlusBlack />
        </div>
      ) : userData.cinePlus === "Gold" ? (
        <div className="flex items-center">
          <h2>Pasate a: </h2>
            <CinePlusBlack />
        </div>
      ) : ( */}
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <h3 className="mb-4 font-bold">Tenes el plan mas tocho de todos</h3>
          <TextAnimation word={userData.cinePlus.toUpperCase()} />
          <button className="w-80 p-4 rounded-lg bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80" onClick={handleSubmit}>
            <span className="text-white dark:text-black">Cancelar suscripción</span>
          </button>
        </div>
      {/* )} */}
    </div>
  );
}

export default ProfileSubscription;
