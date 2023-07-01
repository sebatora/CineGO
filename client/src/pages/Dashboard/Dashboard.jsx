import React, { useEffect, useState } from "react";
import SaleGeneral from "../../components/Admin/AdminVentas/SaleGeneral";
import SaleTicket from "../../components/Admin/AdminVentas/SaleTicket";
import SaleCandy from "../../components/Admin/AdminVentas/SaleCandy";
import SaleSubscription from "../../components/Admin/AdminVentas/SaleSubscription";
import SubscriptionNumber from "../../components/Admin/AdminSubscription/SubscriptionNumber";
import SubscriptionDivision from "../../components/Admin/AdminSubscription/SubscriptionDivision";
import MovieScores from "../../components/Admin/AdminVisitas/MovieScores";
import WebVisits from "../../components/Admin/AdminVisitas/WebVisits";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import DataMovies from "../../components/Admin/AdminData/DataMovies";
import DataCandy from "../../components/Admin/AdminData/DataCandy";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("adminVentas");
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      await logout();
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("movie");
      window.localStorage.removeItem("cart");
      window.localStorage.removeItem("productCount");
      navigate("/login");
      toast("Se cerró sesión", {
        duration: 3000,
        style: {
          color: "red",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("color-theme", "light");
  }, []);

  return (
    <div className="w-full h-full flex bg-light-100 dark:bg-light-100">
      <div className="w-1/5 fixed h-screen bg-slate-900 dark:bg-slate-900">
        {/* Profile */}
        {userData && (
          <div className="h-1/5 flex flex-col items-center justify-center pt-4">
            <img
              className="w-20 rounded-full"
              src={userData.image}
              alt={userData.firstName}
            />
            <h3 className="mt-2 text-white text">
              {userData.firstName} {userData.lastName}
            </h3>
          </div>
        )}

        <div className="h-4/5 flex flex-col justify-between pt-4">
          {/* Suscripciones */}
          {/* <div className="flex flex-col">
          <span
              className="p-2 text-white uppercase text-xs"
            >
              Suscripciones
            </span>

            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "subscriptionNumber" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("subscriptionNumber")}
              disabled={activeComponent === "subscriptionNumber"}
            >
              <h6
                className={
                  `text-white`
                }
              >
                Suscriptores
              </h6>
            </button>
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "subscriptionDivision" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("subscriptionDivision")}
              disabled={activeComponent === "subscriptionDivision"}
            >
              <h6
                className={
                  `text-white`
                }
              >
                Tipo de suscripciones
              </h6>
            </button>
          </div> */}

          {/* Dashboard */}
          {/* <div className="flex flex-col">
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "dataMovies" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("dataMovies")}
              disabled={activeComponent === "dataMovies"}
            >
              <h6 className={`text-white`}>Dashboard</h6>
            </button>
          </div> */}

          {/* Data */}
          <div className="flex flex-col">
            <span className="p-2 text-white uppercase text-xs">Data</span>
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "dataMovies" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("dataMovies")}
              disabled={activeComponent === "dataMovies"}
            >
              <h6 className={`text-white`}>Películas</h6>
            </button>
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "dataCandy" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("dataCandy")}
              disabled={activeComponent === "dataCandy"}
            >
              <h6 className={`text-white`}>Candy</h6>
            </button>
          </div>

          {/* Ventas */}
          <div className="flex flex-col">
            <span className="p-2 text-white uppercase text-xs">Ventas</span>
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "saleGeneral" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("saleGeneral")}
              disabled={activeComponent === "saleGeneral"}
            >
              <h6 className={`text-white`}>Compras</h6>
            </button>
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "saleTicket" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("saleTicket")}
              disabled={activeComponent === "saleTicket"}
            >
              <h6 className={`text-white`}>Entradas</h6>
            </button>
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "saleCandy" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("saleCandy")}
              disabled={activeComponent === "saleCandy"}
            >
              <h6 className={`text-white`}>Candy</h6>
            </button>
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "saleSubscription" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("saleSubscription")}
              disabled={activeComponent === "saleSubscription"}
            >
              <h6 className={`text-white`}>Suscripciones</h6>
            </button>
          </div>
          {/* Visitas */}
          <div className="flex flex-col">
            <span className="p-2 text-white uppercase text-xs">
              Visitas web
            </span>
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "movieScores" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("movieScores")}
              disabled={activeComponent === "movieScores"}
            >
              <h6 className={`text-white`}>Puntuación de películas</h6>
            </button>
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "webVisits" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("webVisits")}
              disabled={activeComponent === "webVisits"}
            >
              <h6 className={`text-white`}>Visitas web</h6>
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-1 pb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-7 h-7 stroke-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <span className="text-red-600 dark:text-red-600">
              Cerrar Sesión
            </span>
          </button>
        </div>
      </div>
      <div className="w-4/5 ml-auto">
        {activeComponent === "dataMovies" && <DataMovies />}
        {activeComponent === "dataCandy" && <DataCandy />}
        {activeComponent === "saleGeneral" && <SaleGeneral />}
        {activeComponent === "saleTicket" && <SaleTicket />}
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
