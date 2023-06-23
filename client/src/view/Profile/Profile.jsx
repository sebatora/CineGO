import React, { useState } from "react";
import ProfileChange from "../../components/ProfileChange";
import style from "./Profile.module.css";
import ProfileSubscription from "../../components/ProfileSubscription";
import ProfileSecurity from "../../components/ProfileSecurity";
import ProfileRecord from "../../components/ProfileRecord";

function Profile() {
  const [activeComponent, setActiveComponent] = useState("profileChange");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className={style.container}>
      <div className={style.containerProfile}>
        <h1 className={style.h1}>Profile</h1>
        <div className={style.containerButton}>
          <button
            className={style.button}
            onClick={() => handleButtonClick("profileChange")}
            disabled={activeComponent === "profileChange"}
          >
            Modificar Perfil
          </button>
          <button
            className={style.button}
            onClick={() => handleButtonClick("profileSubscription")}
            disabled={activeComponent === "profileSubscription"}
          >
            Modificar Suscripcion
          </button>
          <button
            className={style.button}
            onClick={() => handleButtonClick("profileSecurity")}
            disabled={activeComponent === "profileSecurity"}
          >
            Seguridad
          </button>
          <button
            className={style.button}
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
