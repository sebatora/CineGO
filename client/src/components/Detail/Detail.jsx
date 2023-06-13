import React from "react";
import style from './Detail.module.css'

function Detail() {
  return (
    <div className={style.detailContainer}>
      <div className={style.leftContainer}>
        <img src="https://pics.filmaffinity.com/Spider_Man_Cruzando_el_Multiverso-611174657-large.jpg" alt="Ilustracion" />
        <h3 className={style.textWrapper}> +13 </h3>
        <div>
          <h5> Gender: Animacion </h5>
          <h5> Duration: 140 min</h5>
          <h5> Actors: </h5>
          <h5> Director: Joaquim Dos Santos, Justin K. Thompson, Kemp Powers </h5>
        </div>
      </div>
      <div className={style.rightContainer}>
        <img src="https://i.ytimg.com/vi/yEYuRScVB8c/hqdefault.jpg" alt="Video trailer" />
        <h5>Después de reunirse con Gwen Stacy, Spider-Man, el amigable vecino de Brooklyn, es transportado a través del Multiverso, donde se encuentra con un equipo de Spider-Gente encargado de proteger su existencia. Pero cuando los héroes difieren acerca de cómo manejar una nueva amenaza, Miles se enfrenta a las otros Spiders y debe redefinir lo que significa ser un héroe para poder salvar a las personas que más ama.</h5>
      </div>
      <div>
        <button className={style.boton} type="submit">Comprar entradas!</button>
      </div>
    </div>
  );
}

export default Detail;