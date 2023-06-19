import React from "react";
import style from "./ProfileSuscription.module.css";
function ProfileSuscription() {
  return (
    <div className={style.container}>
      <h2>Pasate a </h2>
      <div className={style.boxButtom}>
        <button className={`${style.buttonSuscription} ${style.black}`}>
          CinePlus Black
        </button>
      </div>
      <div className={style.boxButtom}>
        <button className={`${style.buttonSuscription} ${style.gold}`}>
          CinePlus Gold
        </button>
      </div>
    </div>
  );
}

export default ProfileSuscription;
