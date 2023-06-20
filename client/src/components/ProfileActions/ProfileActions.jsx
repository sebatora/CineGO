import React from "react";
import style from "./ProfileActions.module.css";
import { Link } from "react-router-dom";
function ProfileActions() {
  return (
    <div className={style.container}>
      <h2>Acciones</h2>
      <section className={style.containerButton}>
        <Link className={style.boxButton} to={"/changemail"}>
          <button>Cambiar email</button>
        </Link>
        <Link className={style.boxButton} to={"/record"}>
          <button>Ultimas operaciones/movimientos</button>
        </Link>
      </section>
    </div>
  );
}

export default ProfileActions;
