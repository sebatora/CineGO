import React from "react";
import style from './Footer.module.css';
import { Link } from "react-router-dom";
import cinego_blanco from "../../assets/cinego_blanco.png"
import cinego_negro from "../../assets/cinego_negro.png"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer({ theme }) {
  return (
    <footer className="w-full py-16 ">
      <div className="text-center px-40">
        <hr />
      </div>
      <div className="flex flex-wrap justify-around mx-48 mt-1 mb-1">
        <div className={style.box__footer}>
          <div className={style.logo}>
          <Link to="/">
            {theme === "dark" ? (
              <img className="w-40" src={cinego_blanco} alt="CineGO" />
            ) : (
              <img className="w-40" src={cinego_negro} alt="CineGO" />
            )}
          </Link>
          </div>
        </div>

        <div className={style.box__footer}>
          {/* <h2 className="mb-24 text-black font-bold text-2xl">Opciones</h2> */}
          <Link to="/">Cartelera</Link>
          <Link to="/">Candy</Link>
          <Link to="/cinePlus">CinePlus</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className={style.box__footer}>
            {/* <h2 className="mb-24 text-black font-bold text-2xl">¿Quienes somos?</h2> */}
            <Link to="/about">Programadores</Link>
            <Link to="https://github.com/sebatora/CineGO" target="_blank"><FontAwesomeIcon icon={faGithub} /> Repositorio</Link>
        </div>
      </div>

      <div className="max-w-1200 mx-auto text-center px-40">
        <hr />
        <p className="mt-2 mb-2 text-gray-500">Todos los derechos reservados © 2023 <b>| CineGo</b></p>
      </div>
    </footer>
  )
}

export default Footer;
