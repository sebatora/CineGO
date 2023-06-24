import React, { useState } from "react";
import style from "./ProfileSecurity.module.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { logoutUser, putUser } from "../../redux/actions";

function ProfileSecurity() {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: userData.id,
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  }
  const handleSubmit = (e) => {
    if (!user.password) {
      Swal.fire("Contraseña Vacia");
    } else {
      e.preventDefault();
      dispatch(putUser(user));
      dispatch(logoutUser());
      setUser({
        id: userData.id,
        password: "",
      });
      Swal.fire("Contraseña cambiada - Inicia sesion nuevamente");
    }
  };

  return (
    <div className={style.container}>
      <h2>Cambiar contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contraseña anterior: </label>
          <input type="password" value={1231112112} disabled />
        </div>
        <div>
          <label htmlFor="password">Nueva contraseña: </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default ProfileSecurity;
