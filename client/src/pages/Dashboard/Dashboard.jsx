import React, { useEffect, useState } from "react";
import SaleGeneral from "../../components/Admin/AdminVentas/SaleGeneral";
import SaleTicket from "../../components/Admin/AdminVentas/SaleTicket";
import SaleCandy from "../../components/Admin/AdminVentas/SaleCandy";
import SaleSubscription from "../../components/Admin/AdminVentas/SaleSubscription";
import WebVisits from "../../components/Admin/AdminVisitas/WebVisits";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import DataMovies from "../../components/Admin/AdminData/DataMovies";
import DataCandy from "../../components/Admin/AdminData/DataCandy";
import DataUsers from "../../components/Admin/AdminData/DataUsers";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("saleGeneral");
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
    <div className="w-full h-full flex">
      <Toaster />
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
          {/* Ventas */}
          <div className="flex flex-col">
            <div className="flex items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-5 h-5 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white uppercase text-xs ml-1">Ventas</span>
            </div>
            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "saleGeneral" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("saleGeneral")}
              disabled={activeComponent === "saleGeneral"}
            >
              <h6 className={`text-white`}>General</h6>
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

          {/* Data */}
          <div className="flex flex-col">
            <div className="flex items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-5 h-5 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
              <span className="text-white dark:text-white uppercase text-xs ml-1">
                Data
              </span>
            </div>
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

            <button
              className={`mx-2 p-1 mb-1 rounded-sm text-start ${
                activeComponent === "dataUsers" &&
                "bg-slate-800 font-bold text-white"
              }`}
              onClick={() => handleButtonClick("dataUsers")}
              disabled={activeComponent === "dataUsers"}
            >
              <h6 className={`text-white`}>Usuarios</h6>
            </button>
          </div>

          {/* Visitas */}
          <div className="flex flex-col">
            <div className="flex items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-5 h-5 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
              <span className="text-white uppercase text-xs ml-1">
                Visitas web
              </span>
            </div>
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
              className="w-6 h-6 stroke-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <span className="text-red-600 dark:text-red-600 text-base">
              Cerrar Sesión
            </span>
          </button>
        </div>
      </div>
      <div className="w-4/5 min-h-screen ml-auto bg-light-100 dark:bg-light-100">
        {activeComponent === "saleGeneral" && <SaleGeneral />}
        {activeComponent === "saleTicket" && <SaleTicket />}
        {activeComponent === "saleCandy" && <SaleCandy />}
        {activeComponent === "saleSubscription" && <SaleSubscription />}
        {activeComponent === "dataMovies" && <DataMovies />}
        {activeComponent === "dataCandy" && <DataCandy />}
        {activeComponent === "dataUsers" && <DataUsers />}
        {activeComponent === "webVisits" && <WebVisits />}
      </div>
    </div>
  );
};

export default Dashboard;
