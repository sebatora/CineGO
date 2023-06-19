import React from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileActions from "../../components/ProfileActions/ProfileActions";
import style from "./Profile.module.css";
import ProfileSuscription from "../../components/ProfileSuscription/ProfileSuscription";

function Profile() {
  return (
    <div className={style.containerUser}>
      <ProfileInfo />
      <ProfileSuscription />
      <ProfileActions />
    </div>
  );
}

export default Profile;
