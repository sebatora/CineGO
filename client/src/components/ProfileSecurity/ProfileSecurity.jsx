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
    e.preventDefault();
    if (!user.password) {
      Swal.fire("Contraseña Vacia");
    } else {
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
    <form className="w-full h-screen flex flex-col items-center justify-center" onSubmit={handleSubmit}>
      <h1 className="mb-4">Cambiar contraseña</h1>
      {/* <div>
        <label>Contraseña anterior: </label>
        <input type="password" value={1231112112} disabled />
      </div> */}
      <div className="w-80 flex flex-col mb-4">
        <label htmlFor="password">Nueva contraseña: </label>
        <input
          className="p-2 rounded-lg"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div className="w-80 flex flex-col mb-4">
        <label htmlFor="confirmPassword">Confirma tu nueva contraseña: </label>
        <input
          className="p-2 rounded-lg"
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button className="w-40 py-2 mt-4 rounded-md font-bold bg-green-600 hover:bg-green-500" type="submit">Guardar</button>
    </form>
  );
}

export default ProfileSecurity;
