import React from "react";
import style from './Detail.module.css';

function Detail() {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.infoBox}>
          {/* <img src="https://img.freepik.com/vector-gratis/mancha-acuarela-abstracta-colorida_1035-18218.jpg?w=2000" alt="fondo" className={style.imagenFondo}></img> */}
          <h2 className={style.name}>
            <strong>Spiderman a través del universo</strong>
          </h2>
          <p className={style.description}>
            Después de reunirse con Gwen Stacy, Spider-Man, el amigable vecino de Brooklyn, es transportado a través del Multiverso, donde se encuentra con un equipo de Spider-Gente encargado de proteger su existencia. Pero cuando los héroes difieren acerca de cómo manejar una nueva amenaza, Miles se enfrenta a los otros Spiders y debe redefinir lo que significa ser un héroe para poder salvar a las personas que más ama.
          </p>
          <div className={style.buttonContainer}>
            <button className={style.button} type="submit">¡Comprar entradas!</button>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oBmazlyP220" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className={style.movieInfo}>
          <figure className={style.figure}>
            <img src="https://pics.filmaffinity.com/Spider_Man_Cruzando_el_Multiverso-611174657-large.jpg" alt="image" className={style.movieImage} />
          </figure>
          <ul>
            <li>
              <strong>Título Original:  </strong>  Spiderman a través del universo
            </li>
            <li>
              <strong>Género:  </strong>   Animación
            </li>
            <li>
              <strong>Director:  </strong>   Joaquim Dos Santos, Justin K. Thompson, Kemp Powers
            </li>
            <li>
              <strong>Duración:  </strong>   144 minutos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detail;