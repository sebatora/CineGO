import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import style from "./CreateUser.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { postUser } from '../../redux/actions';

const CreateUser = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
  
      const response = await dispatch(postUser(data));
      console.log("response", response);
      if (response.payload) {
        setSuccessMessage(response.payload);
        reset();
        navigate("/login")
      } else {
        setErrorMessage("El email ya tiene una cuenta");
        setSuccessMessage("");
      }
  };

  return (
    <div className={style.containerForm}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={style.h1}>Registrate y crea una cuenta nueva</h1>
        <div className={style.inputWrapper}>
          <label className={style.label}>Nombre:</label>
          <input className={style.input} type="text" placeholder="Nombre" {...register("firstName", { required: true })} />
          {errors.firstName && <p className={style.p}>Campo requerido</p>}
        </div>
        <div className={style.inputWrapper}>
          <label className={style.label}>Apellido:</label>
          <input className={style.input} type="text" placeholder="Apellido" {...register("lastName", { required: true })} />
          {errors.lastName && <p className={style.p}>Campo requerido</p>}
        </div>

        <div className={style.inputWrapper}>
          <label className={style.label}>Email:</label>
          <input className={style.input} type="text" placeholder="Email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
          {errors.email && <p className={style.p}>Campo requerido</p>}
          {errors.email?.type === 'pattern' && <p className={style.p}>Formato de email incorrecto</p>}
        </div>

        <div className={style.inputWrapper}>
          <label className={style.label}>Contraseña:</label>
          <input
            className={style.input}
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && <p className={style.p}>Campo requerido</p>}
        </div>

        <div className={style.inputWrapper}>
          <label className={style.label}>Confirmar Contraseña:</label>
          <input
            className={style.input}
            type="password"
            placeholder="Confirmar Contraseña"
            {...register("confirmarContraseña", {
              required: true,
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden"
            })}
          />
          {errors.confirmarContraseña && (
            <p className={style.p}>{errors.confirmarContraseña.message}</p>
          )}
        </div>

        <button className={style.button} type="submit">
          Registrarse
        </button>
        {successMessage && <p className={style.success}>{successMessage}</p>}
        {errorMessage && <p className={style.error}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CreateUser;



