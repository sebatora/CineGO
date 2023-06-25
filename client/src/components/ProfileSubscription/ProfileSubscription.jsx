import React from "react";
import { useSelector } from "react-redux";
import CinePlusBlack from "../CinePlusBlack/CinePlusBlack";
import CinePlusGold from "../CinePlusGold/CinePlusGold";
import style from "./ProfileSubscription.module.css";

function ProfileSubscription() {
  const userData = useSelector((state) => state.userData);

  return (
    <div className={style.subscription}>
      <div>
        <h2>Suscripción actual: </h2>
        <p>{userData.cinePlus}</p>
      </div>
      <div className={style.containerSubscription}>
        <h2>Pasate a: </h2>
        <div className={style.boxSunscription}>
          <CinePlusBlack />
          <CinePlusGold />
        </div>
      </div>
    </div>
  );
}

export default ProfileSubscription;
