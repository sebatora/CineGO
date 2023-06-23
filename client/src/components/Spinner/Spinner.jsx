import React from "react";
import style from "./Spinner.module.css"

function Spinner() {
  return (
    <div className={style.spinner}>
      <div className={style.dot1}></div>
      <div className={style.dot2}></div>
    </div>
  );
}

export default Spinner;
