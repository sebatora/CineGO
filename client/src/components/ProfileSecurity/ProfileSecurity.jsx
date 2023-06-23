import React from "react";
import style from "./ProfileSecurity.module.css";

function ProfileSecurity() {
  return (
    <div className={style.container}>
      <h2>Cambiar contraseña</h2>
      <form>
        <div>
          <label>Contraseña anterior: </label>
          <input type="password" value={1231112112} disabled />
        </div>
        <div>
          <label>Nueva contraseña: </label>
          <input type="password" />
        </div>
      </form>
    </div>
  );
}

export default ProfileSecurity;
