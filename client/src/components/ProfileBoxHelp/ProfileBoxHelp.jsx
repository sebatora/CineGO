import React from "react";
import style from "./ProfileBoxHelp.module.css";
import { Link } from "react-router-dom";

function ProfileBoxHelp() {
  return (
    <div className={style.container}>
      <Link className={style.boxH4}>
        <h4 className={style.h4}>Contacto</h4>
      </Link>
      <Link className={style.boxH4} to={"/faq"}>
        <h4 className={style.h4}>FAQ</h4>
      </Link>
    </div>
  );
}

export default ProfileBoxHelp;
