import React from 'react';
import style from './Error404.module.css'
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <main className="bg-${modoOscuro ? 'gray' : 'white'} text-black flex items-center justify-center h-screen overflow-hidden">
      <article className={style.content}>
        <p className='text-base mt-0 mb-6 leading-tight tracking-wide text-gray-600 dark:text-gray-600'>Damnit stranger,</p>
        <p className='text-base mt-0 mb-0.6 leading-tight tracking-wide text-gray-600 dark:text-gray-600'>You got lost in the <strong>404</strong> galaxy.</p>
        <p>
          <Link to="/">
            <button>Go back to earth.</button>
          </Link>
        </p>
      </article>
    </main>
  );
}
export function ErrorSearch404(){
  return (
    <main className="bg-${modoOscuro ? 'gray' : 'white'} text-black flex items-center justify-center h-screen overflow-hidden">
      <article className={style.content}>
        <p className='text-base mt-0 mb-6 leading-tight tracking-wide text-gray-600 dark:text-gray-600'>the movie you are looking for does not exist,</p>
        <p className='text-base mt-0 mb-0.6 leading-tight tracking-wide text-gray-600 dark:text-gray-600'>You got lost in the <strong>404</strong> galaxy.</p>
      </article>
    </main>
  );
}
export default Error404;
