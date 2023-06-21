import React from 'react';
import style from './ErrorSearch404.module.css'

function ErrorSearch404(){
  return (
    <main className="bg-${modoOscuro ? 'gray' : 'white'} text-black flex items-center justify-center h-screen overflow-hidden">
      <article className={style.content}>
        <p className='text-base mt-0 mb-6 leading-tight tracking-wide text-gray-600 dark:text-gray-600'>
          Lo siento, no pudimos encontrar peliculas en esta busqueda
        </p>
      </article>
    </main>
  );
}
export default ErrorSearch404;
