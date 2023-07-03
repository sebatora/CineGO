import React, { useEffect } from 'react';

const WebVisits = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://counter3.optistats.ovh/private/counter.js?c=szg62sd1uazdbrn18fw7e9w57xtyw197&down=async';
    script.async = true;
    document.getElementById('counter').appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.getElementById('counter').removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 via-pink-500 to-red-500">
    <div className="form_main bg-white p-6 rounded-lg shadow relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-300 transform rotate-45 -left-60 bottom-10 z-1 rounded-3xl shadow-md"></div>
        <div id="counter" className="relative z-10">
          <h1 className="heading text-3xl font-bold text-gray-800 mb-4">Contador de visitas CineGo</h1>
          <a className="flex justify-center items-center mb-6" href="https://www.contadorvisitasgratis.com" title="contador de visitas">
            <img src="https://counter3.optistats.ovh/private/contadorvisitasgratis.php?c=szg62sd1uazdbrn18fw7e9w57xtyw197" border="0" title="visitas" alt="contador de visitas" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebVisits;


