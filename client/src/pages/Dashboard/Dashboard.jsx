import React, { useState } from "react";
import SaleGeneral from "../../components/Admin/AdminVentas/SaleGeneral";
import SaleTickets from "../../components/Admin/AdminVentas/SaleTicket";
import SaleCandy from "../../components/Admin/AdminVentas/SaleCandy";
import SaleSubscription from "../../components/Admin/AdminVentas/SaleSubscription";
import SubscriptionNumber from "../../components/Admin/AdminSubscription/SubscriptionNumber";
import SubscriptionDivision from "../../components/Admin/AdminSubscription/SubscriptionDivision";
import MovieScores from "../../components/Admin/AdminVisitas/MovieScores";
import WebVisits from "../../components/Admin/AdminVisitas/WebVisits";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("adminVentas");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="w-full flex">
      <div className="w-1/5 bg-light-300 dark:bg-slate-900">
        <h1 className="w-full mt-5 ml-5">Bienvenido</h1>
        <div className="w-3/4 p-4 flex flex-col">
          <span
            className={` w-24 my-4 text-start font-bold border-b-2 border-light-700 dark:border-dark-700 ml-2 scale-105 ${
              activeComponent === "adminVisitas" && "text-light-700"
            }`}
          >
            Suscripciones
          </span>

          <button
            className={`w-24 my-4 text-start ${
              activeComponent === "subscriptionNumber" &&
              "font-bold border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("subscriptionNumber")}
            disabled={activeComponent === "subscriptionNumber"}
          >
            <h6
              className={
                activeComponent === "subscriptionNumber" && "text-light-700"
              }
            >
              Suscriptores
            </h6>
          </button>
          <button
            className={`w-24 my-4 text-start ${
              activeComponent === "subscriptionDivision" &&
              "font-bold border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("subscriptionDivision")}
            disabled={activeComponent === "subscriptionDivision"}
          >
            <h6
              className={
                activeComponent === "subscriptionDivision" && "text-light-700"
              }
            >
              Tipo de suscripciones
            </h6>
          </button>

          <span
            className={` w-24 my-4 text-start font-bold border-b-2 border-light-700 dark:border-dark-700 ml-2 scale-105 ${
              activeComponent === "adminVisitas" && "text-light-700"
            }`}
          >
            Ventas
          </span>
          <button
            className={`w-24 my-4 text-start ${
              activeComponent === "saleGeneral" &&
              "font-bold border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("saleGeneral")}
            disabled={activeComponent === "saleGeneral"}
          >
            <h6
              className={activeComponent === "saleGeneral" && "text-light-700"}
            >
              Compras
            </h6>
          </button>
          <button
            className={`w-24 my-4 text-start ${
              activeComponent === "saleTicket" &&
              "font-bold border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("saleTicket")}
            disabled={activeComponent === "saleTicket"}
          >
            <h6
              className={activeComponent === "saleTicket" && "text-light-700"}
            >
              Entradas
            </h6>
          </button>
          <button
            className={`w-24 my-4 text-start ${
              activeComponent === "saleCandy" &&
              "font-bold border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("saleCandy")}
            disabled={activeComponent === "saleCandy"}
          >
            <h6 className={activeComponent === "saleCandy" && "text-light-700"}>
              Candy
            </h6>
          </button>

          <button
            className={`w-24 my-4 text-start ${
              activeComponent === "saleSubscription" &&
              "font-bold border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("saleSubscription")}
            disabled={activeComponent === "saleSubscription"}
          >
            <h6
              className={
                activeComponent === "saleSubscription" && "text-light-700"
              }
            >
              Suscripciones
            </h6>
          </button>

          <span
            className={` w-28 my-4 text-start font-bold border-b-2 border-light-700 dark:border-dark-700 ml-2 scale-105 ${
              activeComponent === "adminVisitas" && "text-light-700"
            }`}
          >
            Visitas web
          </span>
          <button
            className={`w-24 my-4 text-start ${
              activeComponent === "movieScores" &&
              "font-bold border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("movieScores")}
            disabled={activeComponent === "movieScores"}
          >
            <h6
              className={activeComponent === "movieScores" && "text-light-700"}
            >
              Puntuacion de peliculas
            </h6>
          </button>
          <button
            className={`w-24 my-4 text-start ${
              activeComponent === "webVisits" &&
              "font-bold border-light-700 dark:border-dark-700 ml-2 scale-105"
            }`}
            onClick={() => handleButtonClick("webVisits")}
            disabled={activeComponent === "webVisits"}
          >
            <h6 className={activeComponent === "webVisits" && "text-light-700"}>
              Visitas web
            </h6>
          </button>
        </div>
      </div>
      <div className="w-4/5 ml-auto">
        {activeComponent === "saleGeneral" && <SaleGeneral />}
        {activeComponent === "saleTicket" && <SaleTickets />}
        {activeComponent === "saleCandy" && <SaleCandy />}
        {activeComponent === "saleSubscription" && <SaleSubscription />}
        {activeComponent === "subscriptionNumber" && <SubscriptionNumber />}
        {activeComponent === "subscriptionDivision" && <SubscriptionDivision />}
        {activeComponent === "movieScores" && <MovieScores />}
        {activeComponent === "webVisits" && <WebVisits />}
      </div>
    </div>
  );
};

export default Dashboard;
