import React from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileActions from "../../components/ProfileActions/ProfileActions";
import style from "./Profile.module.css";
import ProfileSubscription from "../../components/ProfileSubscription/ProfileSubscription";

function Profile() {
  return (
    <div className={style.containerUser}>
      <ProfileInfo />
      <ProfileSubscription />
      <ProfileActions />
    </div>
  );
}

export default Profile;
