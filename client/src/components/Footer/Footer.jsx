import React from "react";
import style from './Footer.module.css';
import cinego_negro from "../../assets/cinego_negro.png"
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedin, faInstagramSquare, faGithub, faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faGitAlt, faTrello } from '@fortawesome/free-brands-svg-icons';

// Agrega los íconos al library
library.add(faFacebookSquare, faTwitterSquare, faLinkedin, faInstagramSquare, faGithub, faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faGitAlt, faTrello);


function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container__footer}>
        <div className={style.box__footer}>
          <div className={style.logo}>
            <Link to="/">
                <img src={cinego_negro} alt="CineGO" />
            </Link>
          </div>
          <div className={style.terms}>
            <p>Tecnologías utilizadas</p>
            <div className={style.iconContainer}>
                <a href="https://es.react.dev"><FontAwesomeIcon icon={faReact} className={style.icon} /> </a>
                <a href="https://nodejs.org/es"><FontAwesomeIcon icon={faNodeJs} className={style.icon} /> </a>
                <a href="https://developer.mozilla.org/es/docs/Web/HTML"><FontAwesomeIcon icon={faHtml5} className={style.icon} /> </a>
                <a href="https://developer.mozilla.org/es/docs/Web/CSS"><FontAwesomeIcon icon={faCss3Alt} className={style.icon} /> </a>
                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript"><FontAwesomeIcon icon={faJs} className={style.icon} /> </a>
                <a href="https://git-scm.com"><FontAwesomeIcon icon={faGitAlt} className={style.icon}/> </a>
                <a href="https://github.com"><FontAwesomeIcon icon={faGithub} className={style.icon}/> </a>
                <a href="https://trello.com"><FontAwesomeIcon icon={faTrello} className={style.icon}/> </a>
            </div>
          </div>
        </div>

        <div className={style.box__footer}>
          <h2>Opciones</h2>
          <a href="/about">Cartelera</a>
          <a href="/about">Candy</a>
          <a href="/cinePlus">CinePlus</a>
          <a href="/login">LogIn</a>
        </div>
        <div className={style.box__footer}>
            <h2>¿Quienes somos?</h2>
            <a href="/about">Programadores</a>
            <a href="https://github.com/sebatora/CineGO"><FontAwesomeIcon icon={faGithub} /> Repositorio</a>
        </div>
      </div>

      <div className={style.box__copyright}>
        <hr />
        <p>Todos los derechos reservados © 2023 <b>| CineGo</b></p>
      </div>
    </footer>
  )
}

export default Footer;
