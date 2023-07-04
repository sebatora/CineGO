import React from "react";
import style from "./Error404.module.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <main className=" text-black flex items-center justify-center h-screen overflow-hidden">
      <article
        className={`${style.content} bg-slate-900/20 dark:shadow-lg dark:shadow-red-600`}
      >
        <p className="text-base mt-0 mb-6 leading-tight tracking-wide text-gray-600 dark:text-white">
          Ups!
        </p>
        <p className="text-base mt-0 mb-0.6 leading-tight tracking-wide text-gray-600 dark:text-white">
          Creo que te perdiste en la galaxia <strong>404</strong>
        </p>
        <p>
          <Link to="/" className="">
            <button className="dark:text-white dark:border-6 font-bold dark:border-white">
              Volver a la tierra
            </button>
          </Link>
        </p>
      </article>
    </main>
  );
}

export default Error404;
