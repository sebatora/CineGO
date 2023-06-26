import React, { useState } from "react";
import ProfileChange from "../../components/ProfileChange/ProfileChange";
import style from "./Profile.module.css";
import ProfileSubscription from "../../components/ProfileSubscription/ProfileSubscription";
import ProfileSecurity from "../../components/ProfileSecurity/ProfileSecurity";
import ProfileRecord from "../../components/ProfileRecord/ProfileRecord";

function Profile() {
  const [activeComponent, setActiveComponent] = useState("profileChange");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className={style.container}>
      <div className={style.containerProfile}>
        <div className={style.boxTittle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user-circle"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
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
