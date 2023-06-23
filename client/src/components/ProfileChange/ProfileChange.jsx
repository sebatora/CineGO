import React, { useEffect, useState } from "react";
import style from "./ProfileChange.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { putUser, loginUser } from "../../redux/actions";

function ProfileChange() {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: userData.id,
    firstName: "",
    lastName: "",
    phone: "",
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
    dispatch(putUser(user));
    setUser({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      image: "",
    });
  };

  return (
    <div className={style.container}>
      <form className={style.profile} onSubmit={handleSubmit}>
        <div>
          <label>Foto de perfil</label>
          <div>
            <img className={style.img} src={userData.image} />
            <button>Cambiar</button>
          </div>
        </div>
        <div>
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            placeholder={userData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido: </label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            placeholder={userData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Telefono: </label>
          <input
            type="number"
            name="phone"
            value={user.phone}
            placeholder={userData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cinePlus">Suscripción: </label>
          <input
            type="text"
            name="cinePlus"
            placeholder={userData.cinePlus}
            disabled
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default ProfileChange;
