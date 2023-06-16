import React from "react";
import style from './Footer.module.css';
import cinego_negro from "../../assets/cinego_negro.png"
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedin, faInstagramSquare, faGithub, faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faGitAlt, faTrello, faFigma } from '@fortawesome/free-brands-svg-icons';

// Agrega los íconos al library
library.add(faFacebookSquare, faTwitterSquare, faLinkedin, faInstagramSquare, faGithub, faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faGitAlt, faTrello);


function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.box__copyright}>
        <hr />
      </div>
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
          <h2>Opciones</h2>
          <Link to="/">Cartelera</Link>
          <Link to="/">Candy</Link>
          <Link to="/cinePlus">CinePlus</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className={style.box__footer}>
            <h2>¿Quienes somos?</h2>
            <Link to="/about">Programadores</Link>
            <Link to="https://github.com/sebatora/CineGO" target="_blank"><FontAwesomeIcon icon={faGithub} /> Repositorio</Link>
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
