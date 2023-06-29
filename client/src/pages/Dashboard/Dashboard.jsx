import React, { useState } from "react";
import AdminVentas from "../../components/Admin/AdminVentas/AdminVentas";
import AdminVisitas from "../../components/Admin/AdminVisitas/AdminVisitas";
import AdminSubscription from "../../components/Admin/AdminSubscription/AdminSubscription";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("adminVentas");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="w-full flex">
      <div className="w-1/5 bg-light-300 dark:bg-slate-900">
        <h1 className="w-full mt-5 ml-5">Bienvenido</h1>
        <div className="w-3/4 p-4">
          <button
            className={`w-16 my-4 text-start ${
              activeComponent === "adminVentas" &&
              "font-bold border-b-4 border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("adminVentas")}
            disabled={activeComponent === "adminVentas"}
          >
            <span
              className={activeComponent === "adminVentas" && "text-light-700"}
            >
              Ventas
            </span>
          </button>
          <button
            className={`w-28 my-4 text-start ${
              activeComponent === "adminSubscription" &&
              "font-bold border-b-4 border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("adminSubscription")}
            disabled={activeComponent === "adminSubscription"}
          >
            <span
              className={
                activeComponent === "adminSubscription" && "text-light-700"
              }
            >
              Suscripción
            </span>
          </button>
          <button
            className={`w-24 my-4 text-start ${
              activeComponent === "adminVisitas" &&
              "font-bold border-b-4 border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("adminVisitas")}
            disabled={activeComponent === "adminVisitas"}
          >
            <span
              className={activeComponent === "adminVisitas" && "text-light-700"}
            >
              Visitas
            </span>
          </button>
        </div>
      </div>
      <div className="w-4/5 ml-auto">
        {activeComponent === "adminVentas" && <AdminVentas />}
        {activeComponent === "adminSubscription" && <AdminSubscription />}
        {activeComponent === "adminVisitas" && <AdminVisitas />}
      </div>
    </div>
  );
};

export default Dashboard;
