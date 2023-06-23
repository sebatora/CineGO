import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./ProfileSubscription.module.css";
import CinePlusBlack from "../CinePlusBlack";
import CinePlusGold from "../CinePlusGold";

function ProfileSubscription() {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
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
