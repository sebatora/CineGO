import React from "react";
import style from './Footer.module.css';
import { Link } from "react-router-dom";
import cinego_blanco from "../../assets/cinego_blanco.png"
import cinego_negro from "../../assets/cinego_negro.png"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SiTailwindcss, SiRedux, SiVite, SiFirebase, SiMercadopago, SiReact, SiHtml5, SiCss3, SiJavascript, SiGit, SiGithub, SiTrello, SiFigma, SiNodedotjs, SiPostgresql, SiSequelize } from "react-icons/si";


function Footer({ theme }) {
  return (
    <footer className="w-full py-16 ">
      <div className="text-center px-40">
        <hr />
      </div>
      <div className="flex flex-wrap justify-between mx-36 mt-8 mb-8">
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
                <Link to="https://es.react.dev" target="_blank"><SiReact className={style.icon} /> </Link>
                <Link to="https://es.react.dev" target="_blank"><SiRedux className={style.icon} /> </Link>
                <Link to="https://nodejs.org/es" target="_blank"><SiNodedotjs className={style.icon} /> </Link>
                <Link to="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank"><SiHtml5 className={style.icon} /> </Link>
                <Link to="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank"><SiCss3 className={style.icon} /> </Link>
                <Link to="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank"><SiJavascript className={style.icon} /> </Link>
                <Link to="https://git-scm.com" target="_blank"><SiGit className={style.icon}/> </Link>
                <Link to="https://www.postgresql.org" target="_blank"><SiPostgresql className={style.icon}/> </Link>
            </div>
            <div className={style.iconContainer}>
                <Link to="https://sequelize.org" target="_blank"><SiSequelize className={style.icon}/> </Link>
                <Link to="https://github.com" target="_blank"><SiGithub className={style.icon}/> </Link>
                <Link to="https://vitejs.dev" target="_blank"><SiVite className={style.icon}/> </Link>
                <Link to="https://firebase.google.com/?hl=es" target="_blank"><SiFirebase className={style.icon}/> </Link>
                <Link to="https://tailwindcss.com" target="_blank"><SiTailwindcss className={style.icon}/> </Link>
                <Link to="https://trello.com" target="_blank"><SiTrello className={style.icon}/> </Link>
                <Link to="https://www.figma.com/" target="_blank"><SiFigma className={style.icon}/> </Link>
                <Link to="https://www.mercadopago.com.ar" target="_blank"><SiMercadopago className={style.icon}/> </Link>
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
