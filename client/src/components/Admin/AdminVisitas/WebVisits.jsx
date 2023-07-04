import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const WebVisits = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://counter3.optistats.ovh/private/counter.js?c=szg62sd1uazdbrn18fw7e9w57xtyw197&down=async";
    script.async = true;
    const counterElement = document.getElementById("counter");

    counterElement.appendChild(script);

    return () => {
      counterElement.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 via-pink-400 to-red-400">
      <div className="form_main bg-white p-6 rounded-lg shadow relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-300 transform rotate-45 -left-60 bottom-10 z-1 rounded-3xl shadow-md"></div>
        <div id="counter" className="relative z-10">
          <Helmet>
            <script
              src="https://counter3.optistats.ovh/private/counter.js?c=szg62sd1uazdbrn18fw7e9w57xtyw197&down=async"
              async
            />
          </Helmet>
          <h1 className="heading text-3xl font-bold text-gray-800 mb-4 dark:text-gray-800">
            Contador de visitas CineGo
          </h1>
          <button
            className="w-full flex justify-center items-center mb-6"
            title="contador de visitas"
            disabled
          >
            <img
              src="https://counter3.optistats.ovh/private/contadorvisitasgratis.php?c=szg62sd1uazdbrn18fw7e9w57xtyw197"
              border="0"
              title="visitas"
              alt="contador de visitas"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebVisits;
