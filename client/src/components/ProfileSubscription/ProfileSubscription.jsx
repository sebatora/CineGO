import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
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
    <div className={style.container}>
      <div className={style.containerH2}>
        <h2 className={style.h2}>Suscripción actual: {userData.cinePlus} </h2>
      </div>
      {userData.cinePlus === "Estandar" ? (
        <div className={style.containerSubscription}>
          <div className={style.boxSubscription}>
            <CinePlusGold />
            <CinePlusBlack />
          </div>
        </div>
      ) : userData.cinePlus === "Gold" ? (
        <div className={style.containerSubscription}>
          <h2>Pasate a: </h2>
          <div className={style.boxSubscription}>
            <CinePlusBlack />
          </div>
        </div>
      ) : (
        <div className={style.containerSubscription}>
          <h3 className={style.h3}>Tenes el plan mas tocho de todos</h3>
          <TextAnimation word={userData.cinePlus.toUpperCase()} />
          <button className={style.buttonCancelBlack} onClick={handleSubmit}>
            Cancelar suscripción
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileSubscription;
