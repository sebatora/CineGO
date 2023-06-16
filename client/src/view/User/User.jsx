import React from "react";
import UserInfo from "../../components/UserInfo/UserInfo";
import UserActions from "../../components/UserActions/UserActions";
import style from "./User.module.css";

function User() {
  return (
    <div className={style.containerUser}>
      <UserInfo />
      <UserActions />
    </div>
  );
}

export default User;
