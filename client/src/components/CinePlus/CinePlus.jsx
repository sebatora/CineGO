import React from "react";
import style from "./CinePlus.module.css";
import pochoclo from "../../assets/pochoclo.png";
import { FaCheck, FaTimes } from "react-icons/fa";

const cinePlus = () => {
  return (
    <div className={style.CinePlusContainer}>
      <div className={style.CinePlusitem}>
        <div className={style.boxPopGold}>
          <img src={pochoclo} className={style.imgPopCorn} />
          <img src={pochoclo} className={style.imgPopCorn} />
          <img src={pochoclo} className={style.imgPopCorn} />
        </div>
        <div className={style.CinePlusrectangle}>
          <div className={style.boxHeaderGold}>
            <h2 className={style.CinePlusheading}>Cine Plus Gold</h2>
          </div>
          <div className={style.boxBottomGold}>
            <ul>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>
                    2 Entradas Mensuales CinePlus
                  </h3>
                  <p className={style.boxLiP}>GRATIS!</p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>Regalo de bienvenida</h3>
                  <p className={style.boxLiP}>
                    Combo Mega o combo Nachos *Por única vez.
                  </p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>25% Off en Combos</h3>
                  <p className={style.boxLiP}>Seleccionados del Candy</p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>Suma Puntos</h3>
                  <p className={style.boxLiP}>Con todas tus compras</p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>Canje de Puntos</h3>
                  <p className={style.boxLiP}>Por entradas y combos</p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>Funciones y concursos</h3>
                  <p className={style.boxLiP}>Exclusivos</p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>50% Off en Entradas</h3>
                  <p className={style.boxLiP}>1 vez al mes!</p>
                </div>
                <FaCheck />
              </li>
            </ul>
            <button className={style.CinePlusbutton}>
              ¡Quiero suscribirme!
            </button>
          </div>
        </div>
      </div>
      <div className={style.CinePlusitem}>
        <div className={style.CinePlusrectangle}>
          <div className={style.boxHeaderPlatinum}>
            <h2 className={style.CinePlusheading}>Cine Plus Platinum</h2>
          </div>
          <div className={style.boxBottomPlatinum}>
            <ul>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>
                    2 Entradas Mensuales CinePlus
                  </h3>
                  <p className={style.boxLiP}>GRATIS!</p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>Regalo de bienvenida</h3>
                  <p className={style.boxLiP}>
                    Combo Mega o combo Nachos *Por única vez.
                  </p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>25% Off en Combos</h3>
                  <p className={style.boxLiP}>Seleccionados del Candy</p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>Suma Puntos</h3>
                  <p className={style.boxLiP}>Con todas tus compras</p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>Canje de Puntos</h3>
                  <p className={style.boxLiP}>Por entradas y combos</p>
                </div>
                <FaCheck />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>Funciones y concursos</h3>
                  <p className={style.boxLiP}>Exclusivos</p>
                </div>
                <FaTimes />
              </li>
              <li className={style.containerLi}>
                <div className={style.boxLi}>
                  <h3 className={style.boxLiH3}>50% Off en Entradas</h3>
                  <p className={style.boxLiP}>1 vez al mes!</p>
                </div>
                <FaTimes />
              </li>
            </ul>
            <button
              className={`${style.CinePlusbutton} ${style.CinePlusbuttonPlatinum}`}
            >
              ¡Quiero suscribirme!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cinePlus;
