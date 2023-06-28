import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { logoutUser, putUser } from "../../redux/actions";
import style from "./ProfileSecurity.module.css";
import { validateForm } from "./validation";

function ProfileSecurity() {
  const userData = JSON.parse(window.localStorage.getItem("user"));

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: userData.id,
    password: "",
    confirmPassword: "",
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

    if (validateForm(user)) {
      Swal.fire({
        title: "Vas a cambiar tu contraseña. ¿Estás seguro?",
        text: "Tendrás que volver a iniciar sesión",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(putUser(user));
          dispatch(logoutUser());
          window.localStorage.removeItem("user");
          setUser({
            firstName: "",
            lastName: "",
            email: "",
            image: "",
          });
          Swal.fire(
            "¡Listo!",
            "Modificaste tu contraseña. Vuelve a iniciar sesión",
            "success"
          );
        }
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.containerH2}>
        <h2 className={style.h2}>Cambiar contraseña</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className={style.containerFormProfileSecurity}
      >
        <div className={style.boxPass}>
          <div className={style.passOld}>
            <label>Contraseña anterior:</label>
            <input
              className={style.inputSecurity}
              type="password"
              value={1231112112}
              disabled
            />
          </div>
          <div className={style.passNew}>
            <label className={style.labelSecurity} htmlFor="password">
              Nueva contraseña:
            </label>
            <input
              className={style.inputSecurity}
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className={style.passNew}>
            <label className={style.labelSecurity} htmlFor="confirmPassword">
              Confirmar contraseña:
            </label>
            <input
              className={style.inputSecurity}
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-2/4 bg-primary-600 hover:bg-primary-500 h-8 my-6 mx-auto rounded-md font-bold text-white"
          >
            Cambiar contraseña
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSecurity;
