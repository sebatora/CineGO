import React, { useEffect, useState } from "react";
import style from './Footer.module.css';
import cinego_blanco from "../../assets/cinego_blanco.png"
import cinego_negro from "../../assets/cinego_negro.png"
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedin, faInstagramSquare, faGithub, faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faGitAlt, faTrello, faFigma } from '@fortawesome/free-brands-svg-icons';

// Agrega los íconos al library
library.add(faFacebookSquare, faTwitterSquare, faLinkedin, faInstagramSquare, faGithub, faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faGitAlt, faTrello);


function Footer() {

  const theme = localStorage.getItem("color-theme");
  useEffect(() => {
    const theme = localStorage.getItem("color-theme");
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("color-theme", theme);
  }, [theme]);


  return (
    <footer className="w-full py-16 ">
      <div className="text-center px-40">
        <hr />
      </div>
      <div className="flex flex-wrap justify-between mx-36 mt-20">
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
          <div className={style.terms}>
            <p>Tecnologías utilizadas</p>
            <div className={style.iconContainer}>
                <Link to="https://es.react.dev" target="_blank"><FontAwesomeIcon icon={faReact} className={style.icon} /> </Link>
                <Link to="https://nodejs.org/es" target="_blank"><FontAwesomeIcon icon={faNodeJs} className={style.icon} /> </Link>
                <Link to="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank"><FontAwesomeIcon icon={faHtml5} className={style.icon} /> </Link>
                <Link to="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank"><FontAwesomeIcon icon={faCss3Alt} className={style.icon} /> </Link>
                <Link to="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank"><FontAwesomeIcon icon={faJs} className={style.icon} /> </Link>
                <Link to="https://git-scm.com" target="_blank"><FontAwesomeIcon icon={faGitAlt} className={style.icon}/> </Link>
                <Link to="https://github.com" target="_blank"><FontAwesomeIcon icon={faGithub} className={style.icon}/> </Link>
                <Link to="https://trello.com" target="_blank"><FontAwesomeIcon icon={faTrello} className={style.icon}/> </Link>
                <Link to="https://www.figma.com/" target="_blank"><FontAwesomeIcon icon={faFigma} className={style.icon}/> </Link>
            </div>
          </div>
        </div>

        <div className={style.box__footer}>
          <h2 className="mb-24 text-black font-bold text-2xl">Opciones</h2>
          <Link to="/">Cartelera</Link>
          <Link to="/">Candy</Link>
          <Link to="/cinePlus">CinePlus</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className={style.box__footer}>
            <h2 className="mb-24 text-black font-bold text-2xl">¿Quienes somos?</h2>
            <Link to="/about">Programadores</Link>
            <Link to="https://github.com/sebatora/CineGO" target="_blank"><FontAwesomeIcon icon={faGithub} /> Repositorio</Link>
        </div>
      </div>

      <div className="max-w-1200 mx-auto text-center px-40">
        <hr />
        <p className="mt-20 text-gray-500">Todos los derechos reservados © 2023 <b>| CineGo</b></p>
      </div>
    </footer>
  )
}

export default Footer;
