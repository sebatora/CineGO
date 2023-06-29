import { useState } from "react";
import ProfileChange from "../../components/ProfileChange/ProfileChange";
import ProfileSubscription from "../../components/ProfileSubscription/ProfileSubscription";
import ProfileSecurity from "../../components/ProfileSecurity/ProfileSecurity";
import ProfileRecord from "../../components/ProfileRecord/ProfileRecord";

function Profile() {
  const [activeComponent, setActiveComponent] = useState("profileChange");
  const userData = JSON.parse(window.localStorage.getItem("user"));

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="w-full flex mt-12">
      <div className="w-1/5 bg-light-300 dark:bg-slate-900">
        <h1 className="w-full mt-5 ml-5">Bienvenido</h1>
        <div className="w-3/4 p-4">
          <button
            className={`w-16 my-4 text-start ${
              activeComponent === "profileChange" &&
              "font-bold border-b-4 border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("profileChange")}
            disabled={activeComponent === "profileChange"}
          >
            <span
              className={
                activeComponent === "profileChange" && "text-light-700"
              }
            >
              Perfil
            </span>
          </button>
          <button
            className={`w-28 my-4 text-start ${
              activeComponent === "profileSubscription" &&
              "font-bold border-b-4 border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("profileSubscription")}
            disabled={activeComponent === "profileSubscription"}
          >
            <span
              className={
                activeComponent === "profileSubscription" && "text-light-700"
              }
            >
              Suscripción
            </span>
          </button>
          {userData.password && (
            <button
              className={`w-28 my-4 text-start ${
                activeComponent === "profileSecurity" &&
                "font-bold border-b-4 border-light-700 dark:border-dark-700 ml-2 scale-105"
              }`}
              onClick={() => handleButtonClick("profileSecurity")}
              disabled={activeComponent === "profileSecurity"}
            >
              <span
                className={
                  activeComponent === "profileSecurity" && "text-light-700"
                }
              >
                Seguridad
              </span>
            </button>
          )}
          <button
            className={`w-24 my-4 text-start ${
              activeComponent === "profileRecord" &&
              "font-bold border-b-4 border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("profileRecord")}
            disabled={activeComponent === "profileRecord"}
          >
            <span
              className={
                activeComponent === "profileRecord" && "text-light-700"
              }
            >
              Compras
            </span>
          </button>
        </div>
      </div>
      <div className="w-4/5 ml-auto">
        {activeComponent === "profileChange" && <ProfileChange />}
        {activeComponent === "profileSubscription" && <ProfileSubscription />}
        {activeComponent === "profileSecurity" && <ProfileSecurity />}
        {activeComponent === "profileRecord" && <ProfileRecord />}
      </div>
    </div>
  );
}

export default Profile;
