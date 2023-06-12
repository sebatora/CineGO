import React from 'react';
import style from './CinePlus.module.css'

const cinePlus = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <div className={style.rectangle}>
          <h2 className={style.heading}>Gold</h2>
          <ul>
            <li>2 Entradas Mensuales CinePlus 2D-3D-XD-COMFORT</li>
            <li>Regalo de bienvenida *Por única vez.</li>
            <li>25% Off en Combos</li>
            <li>Suma Puntos con todas tus compras</li>
            <li>Canje de Puntos por entradas y combos</li>
            <li>Funciones y concursos exclusivos</li>
            <li>50% Off en Entradas 2D-3D-XD-COMFORT todos los días</li>
            <li>25% Off en Entradas DBOX-4D-PREMIUM de Lunes a Viernes</li>
            <li>Refill - de una gaseosa en la compra de todos los combos</li>
          <button className={style.button}>¡Quiero sumarme!</button>
          </ul>
        </div>
      </div>
      <div className={style.item}>
        <div className={style.rectangle}>
          <h2 className={style.heading}>Platinum</h2>
          <ul>
            <li>2 Entradas Mensuales CinePlus 2D-3D-XD-COMFORT</li>
            <li>Regalo de bienvenida *Por única vez.</li>
            <li>25% Off en Combos seleccionados del Candy</li>
            <li>Suma Puntos con todas tus compras</li>
            <li>Canje de Puntos por entradas y combos</li>
            <li>Funciones y concursos exclusivos</li>
            <li>50% Off en Entradas 2D-3D-XD-COMFORT de Lunes a Viernes</li>
          <button className={style.button}>¡Quiero sumarme!</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default cinePlus;

