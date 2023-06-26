import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser, putUser } from "../../redux/actions";
import style from "./ProfileChange.module.css";
import Swal from "sweetalert2";

function ProfileChange() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  /*   const userData = JSON.parse(window.localStorage.getItem("user")); */

  const [user, setUser] = useState({
    id: userData.id,
    firstName: "",
    lastName: "",
    email: "",
    image: "",
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
    if (user.firstName || user.lastName || user.email) {
      Swal.fire({
        title: "Vas a modificar tus datos. Estas seguro?",
        text: "Tendras que volver a iniciar sesion",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(putUser(user));
          dispatch(logoutUser());
          window.localStorage.removeItem("user");
          setUser({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            image: "",
          });
          Swal.fire(
            "Listo!",
            "Modificaste tus datos. Volve a iniciar sesion",
            "success"
          );
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hiciste ninguna modificación!",
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.containerH2}>
        <h2 className={style.h2}>Editar perfil</h2>
      </div>
      <div>
        <form className={style.containerForm} onSubmit={handleSubmit}>
          <div className={style.containerImage}>
            <img className={style.image} src={userData.image} />
            <div className={style.boxButton}>
              <button
                type="button"
                className={`${style.buttonChange} ${style.buttonImg}`}
              >
                Cambiar
              </button>
              <button
                type="button"
                className={`${style.buttonDelete} ${style.buttonImg}`}
              >
                Borrar
              </button>
            </div>
          </div>
          <div className={style.containerEditProfile}>
            <div className={style.box}>
              <label className={style.labelBox} htmlFor="firstName">
                Nombre:
              </label>
              <input
                className={style.inputBox}
                type="text"
                name="firstName"
                value={user.firstName}
                placeholder={userData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={style.box}>
              <label className={style.labelBox} htmlFor="lastName">
                Apellido:
              </label>
              <input
                className={style.inputBox}
                type="text"
                name="lastName"
                value={user.lastName}
                placeholder={userData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className={style.box}>
              <label className={style.labelBox} htmlFor="email">
                Email:
              </label>
              <input
                className={style.inputBox}
                type="text"
                name="email"
                value={user.email}
                placeholder={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className={style.box}>
              <label className={style.labelBox} htmlFor="cinePlus">
                Suscripción:
              </label>
              <input
                className={style.inputBox}
                type="text"
                name="cinePlus"
                placeholder={userData.cinePlus}
                disabled
              />
            </div>
          </div>
          <div className={style.containerButtonSave}>
            <button className={style.buttonSave} type="submit">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileChange;
