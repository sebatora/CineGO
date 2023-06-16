import React from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileActions from "../../components/ProfileActions/ProfileActions";
import style from "./Profile.module.css";

function Profile() {
  return (
    <div className={style.containerUser}>
      <ProfileInfo />
      <ProfileActions />
    </div>
  );
}

export default Profile;
