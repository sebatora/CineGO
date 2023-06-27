import React, { useState } from "react";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { logoutUser, putUser } from "../../redux/actions";
import ProfileBoxHelp from "../ProfileBoxHelp/ProfileBoxHelp";
import style from "./ProfileChange.module.css";
import { validateField } from "./validate";

function ProfileChange() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [error, setError] = useState({});
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

    setError((prevError) => ({
      ...prevError,
      [name]: validateField(name, value),
    }));
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
      <div className={style.containerProfileAndInfo}>
        <form className={style.containerForm} onSubmit={handleSubmit}>
          <div className={style.containerImage}>
            <div className={style.boxImage}>
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
            <ProfileBoxHelp />
          </div>
          <div className={style.containerInfo}>
            <div className={style.containerEditProfile}>
              <div className={style.box}>
                <div className={style.boxLabelAndInput}>
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
                  {!error.firstName && (
                    <BiCheckCircle className={style.iconCheck} />
                  )}
                </div>
                <div className={style.containerError}>
                  {error.firstName && (
                    <div className={style.boxError}>
                      <BiErrorCircle className={style.iconError} />
                      <span className={style.paragraph}>{error.firstName}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={style.containerEditProfile}>
              <div className={style.box}>
                <div className={style.boxLabelAndInput}>
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
                  {!error.lastName && (
                    <BiCheckCircle className={style.iconCheck} />
                  )}
                </div>
                <div className={style.containerError}>
                  {error.lastName && (
                    <div className={style.boxError}>
                      <BiErrorCircle className={style.iconError} />
                      <span className={style.paragraph}>{error.lastName}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={style.containerEditProfile}>
              <div className={style.box}>
                <div className={style.boxLabelAndInput}>
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
                  {!error.email && (
                    <BiCheckCircle className={style.iconCheck} />
                  )}
                </div>
                <div className={style.containerError}>
                  {error.email && error.email !== "" && (
                    <div className={style.boxError}>
                      <BiErrorCircle className={style.iconError} />
                      <span className={style.paragraph}>{error.email}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={style.containerEditProfile}>
              <div className={style.box}>
                <div className={style.boxLabelAndInput}>
                  <label className={style.labelBox} htmlFor="cinePlus">
                    CinePlus:
                  </label>
                  <input
                    className={style.inputBox}
                    type="text"
                    name="cinePlus"
                    value={user.cinePlus}
                    placeholder={userData.cinePlus}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </div>
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
