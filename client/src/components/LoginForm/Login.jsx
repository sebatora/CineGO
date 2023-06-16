import React from "react";
import { useForm } from "react-hook-form";
import style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = "example@example.com";
    const password = "password123";

    if (data.username === email && data.password === password) {
     alert("Inicio de sesión exitoso");
     navigate("/")
    
    } else {
      alert("Correo electrónico o contraseña incorrectos");
      // Muestra un mensaje de error o realiza alguna otra acción
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-2 gap-4 mt-20">
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={style.h1} >Ingresa a tu cuenta</h1>

      <label htmlFor="" className={style.label}>Usuario:</label>
      <input className={style.input} type="text" placeholder="Usuario" {...register("username", { required: true })} />
      {errors.username && <p className={style.p}>El nombre de usuario es requerido</p>}

      <label htmlFor="" className={style.label}>Contraseña:</label>
      <input className={style.input} type="password" placeholder="Contraseña" {...register("password", { required: true })} />
      {errors.password && <p className={style.p}>La contraseña es requerida</p>}

      <button className={style.button} type="submit">Entrar</button>
    </form>
    <div>
    <h1 className={style.h1}>¿No tenés cuenta?</h1>
    <Link to={`/createUser`} className={style.linkButton}>
        <button type="submit" className={style.button}>Crear cuenta</button>
    </Link>
      </div>
    </div>
    
  );
}

export default Login;
