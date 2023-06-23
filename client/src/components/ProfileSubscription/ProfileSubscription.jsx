import React from "react";
import style from "./ProfileSubscription.module.css";
function ProfileSubscription() {
  return (
    <div className={style.container}>
      <h2>Pasate a </h2>
      <div className={style.boxButton}>
        <button className={`${style.buttonSubscription} ${style.black}`}>
          CinePlus Black
        </button>
      </div>
      <div className={style.boxButton}>
        <button className={`${style.buttonSubscription} ${style.gold}`}>
          CinePlus Gold
        </button>
      </div>
    </div>
  );
}

export default ProfileSubscription;
