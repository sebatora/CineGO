import React from 'react';
import style from './Error404.module.css'
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <main className="bg-${modoOscuro ? 'gray' : 'white'} text-black flex items-center justify-center h-screen overflow-hidden">
      <article className={style.content}>
        <p className='text-base mt-0 mb-6 leading-tight tracking-wide text-gray-600 dark:text-gray-600'>
          Ups!
          </p>
        <p className='text-base mt-0 mb-0.6 leading-tight tracking-wide text-gray-600 dark:text-gray-600'>
          Creo que te perdiste en la galaxia <strong>404</strong></p>
        <p>
          <Link to="/">
            <button>Volver a la tierra</button>
          </Link>
        </p>
      </article>
    </main>
  );
}

export default Error404;
