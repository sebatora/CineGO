import React from "react";
import style from "./ErrorSearch404.module.css";

function ErrorSearch404() {
  return (
    <main className="text-black flex items-center justify-center h-screen overflow-hidden ">
      <article
        className={`${style.content}  bg-slate-900/20 dark:shadow-lg dark:shadow-red-600`}
      >
        <p className="mt-0 mb-6 leading-tight tracking-wide text-gray-600 dark:text-white">
          Lo siento, no pudimos encontrar peliculas en esta busqueda
        </p>
      </article>
    </main>
  );
}
export default ErrorSearch404;
