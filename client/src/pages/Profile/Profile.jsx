import React, { useEffect, useState } from "react";
import ProfileChange from "../../components/ProfileChange/ProfileChange";
import style from "./Profile.module.css";
import ProfileSubscription from "../../components/ProfileSubscription/ProfileSubscription";
import ProfileSecurity from "../../components/ProfileSecurity/ProfileSecurity";
import ProfileRecord from "../../components/ProfileRecord/ProfileRecord";
import { Navigate } from "react-router-dom";

function Profile() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const [activeComponent, setActiveComponent] = useState("profileChange");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  if (!userData) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={style.container}>
      <div className={style.containerProfile}>
        <div className={style.boxTittle}>
          <h1 className={style.h1}>Perfil</h1>
        </div>
        <div className={style.containerButton}>
          <button
            className={`${style.button} ${
              activeComponent === "profileChange"
                ? style.active
                : style.inactive
            }`}
            onClick={() => handleButtonClick("profileChange")}
            disabled={activeComponent === "profileChange"}
          >
            Modificar Perfil
          </button>
          <button
            className={`${style.button} ${
              activeComponent === "profileSubscription"
                ? style.active
                : style.inactive
            }`}
            onClick={() => handleButtonClick("profileSubscription")}
            disabled={activeComponent === "profileSubscription"}
          >
            Modificar Suscripcion
          </button>
          <button
            className={`${style.button} ${
              activeComponent === "profileSecurity"
                ? style.active
                : style.inactive
            }`}
            onClick={() => handleButtonClick("profileSecurity")}
            disabled={activeComponent === "profileSecurity"}
          >
            Seguridad
          </button>
          <button
            className={`${style.button} ${
              activeComponent === "profileRecord"
                ? style.active
                : style.inactive
            }`}
            onClick={() => handleButtonClick("profileRecord")}
            disabled={activeComponent === "profileRecord"}
          >
            Historial de compras
          </button>
        </div>
      </div>
      <div className={style.containerItems}>
        {activeComponent === "profileChange" && <ProfileChange />}
        {activeComponent === "profileSubscription" && <ProfileSubscription />}
        {activeComponent === "profileSecurity" && <ProfileSecurity />}
        {activeComponent === "profileRecord" && <ProfileRecord />}
      </div>
    </div>
  );
}

export default Profile;
