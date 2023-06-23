import React from "react";
import style from "./changeMail.module.css";
import { Link } from "react-router-dom";

function ChangeMail() {
  return (
    <div className={style.container}>
      <div className={style.containerInfo}>
        <div className={style.boxInfo}>
          <label className={style.label}>Email anterior</label>
          <input className={style.input} />
        </div>
        <div className={style.boxInfo}>
          <label className={style.label}>Contraseña</label>
          <input className={style.input} />
        </div>
        <div className={style.boxInfo}>
          <label className={style.label}>Nuevo Email</label>
          <input className={style.input} />
        </div>
      </div>
      <div className={style.containerButton}>
        <Link className={style.button}>MODIFICAR</Link>
        <Link className={style.button} to={"/"}>
          Ir al Home
        </Link>
      </div>
    </div>
  );
}

export default ChangeMail;
