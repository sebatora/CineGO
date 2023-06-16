import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMovies } from "../../redux/actions";

function UserInfo() {
  const dispatch = useDispatch();

  return (
    <div className="w-full ">
      <h1>Completa tu perfil</h1>
      <section className="w-full flex">
        <article>
          <form>
            <div>
              <label htmlFor="name">Nombre: </label>
              <input className="w-1/2 " type="text" name="name" />
            </div>
            <div>
              <label htmlFor="apellido">Apellido: </label>
              <input className="w-1/2 " type="text" name="apellido" />
            </div>
            <div>
              <label htmlFor="telefono">Telefono: </label>
              <input className="w-1/2 " type="text" name="telefono" />
            </div>
          </form>
        </article>
        <article>
          <form>
            <div>
              <label htmlFor="cinema">Cine habitual: </label>
              <input className="w-1/2 " type="text" name="cinema" />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input className="w-1/2 " type="email" name="email" />
            </div>
            <div>
              <label htmlFor="cineplus">Tipo de socio: </label>
              <input className="w-1/2 " type="text" name="cineplus" />
            </div>
          </form>
          <div>
            <div>
              <button> Pasate a Cine Plus Gold</button>
            </div>
            <div>
              <button> Pasate a Cine Plus Platinum</button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default UserInfo;
