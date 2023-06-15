import React from 'react';
import style from './Error404.module.css'
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <main className={style.container}>
      <article className={style.content}>
        <p>Damnit stranger,</p>
        <p>You got lost in the <strong>404</strong> galaxy.</p>
        <p>
          <Link to="/">
            <button>Go back to earth.</button>
          </Link>
        </p>
      </article>
    </main>
  );
}

export default Error404;
