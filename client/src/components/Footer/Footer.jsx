import React from "react";
import { Link } from "react-router-dom";
import cinego_blanco from "../../assets/cinego_blanco.png"
import cinego_negro from "../../assets/cinego_negro.png"
import '@fortawesome/fontawesome-free/css/all.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer({ theme }) {
  return (
    <footer className="w-full border-t border-t-light-200 dark:border-t-light-900 mt-4">
      <div className="w-full flex justify-evenly">
        <div className="w-full flex pl-12 pb-2">
          <Link className="w-48" to="/">
            {theme === "dark" ? (
              <img src={cinego_blanco} alt="CineGO" />
            ) : (
              <img src={cinego_negro} alt="CineGO" />
            )}
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="p-6">
            <Link className="hover:text-light-400" to="/">
              Cartelera
            </Link>
          </span>
          <span className="p-6">
            <Link className="hover:text-light-400" to="/candy">
              Candy
            </Link>
          </span>
          <span className="p-6">
            <Link className="hover:text-light-400" to="/cinePlus">
              CinePlus
            </Link>
          </span>
          <span className="p-6">
            <Link className="hover:text-light-400" to="/faq">
              FAQ
            </Link>
          </span>
          <span className="p-6">
            <Link className="hover:text-light-400" to="/about">
              Desarrolladores
            </Link>
          </span>
          <span className="p-6">
            <Link className="hover:text-light-400" to="https://github.com/sebatora/CineGO" target="_blank">
              Repositorio
            </Link>
          </span>
        </div>
      </div>

      <div className="mx-auto border-t border-t-light-200 dark:border-t-light-900 text-center">
        <p className="mt-2 mb-2 text-sm">Todos los derechos reservados © 2023 <b>| CineGo</b></p>
      </div>
    </footer>
  )
}

export default Footer;
