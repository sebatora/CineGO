import React from "react";
import style from "./ProfileActions.module.css";
function ProfileActions() {
  return (
    <div className={style.container}>
      <h2>Acciones</h2>
      <section className={style.containerButton}>
        <div className={style.boxButton}>
          <button>Cambiar email</button>
        </div>
        <div className={style.boxButton}>
          <button>Ultimas operaciones/movimientos</button>
        </div>
      </section>
    </div>
  );
}

export default ProfileActions;
