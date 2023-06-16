import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import style from "./login.module.css";
import { Link, redirect, useNavigate } from "react-router-dom";
import { app } from "../../firebase/firebaseConfig";
import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithRedirect, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions";

const Login = () => {
  const userData = useSelector(state => state.userData);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(userData);

  const email = "example@example.com";
  const password = "password123";

  const onSubmit = (data) => {
    if (data.username !== email || data.password !== password) {
      alert("Correo electrónico o contraseña incorrecto");
    } else {
      dispatch(loginUser(data));
    }
  };

  const handleLoginGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if(userData.email){
      navigate("/");
      alert("Inicio de sesión exitoso");
    }
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if(user && user.accessToken){
        navigate("/")
      }
    })
  }, []);

  // const handleLoginGoogle = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     console.log(result);
  //     window.close();
  //   } catch (error) {
  //     if (error.code === 'auth/popup-closed-by-user') {
  //       console.log('La ventana emergente fue cerrada por el usuario');
  //     } else {
  //       console.error(error);
  //     }
  //   }
  // }

  return (
    <div className="w-full h-screen grid grid-cols-2 gap-4">
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
      <button className="bg-orange-600 p-3 rounded-2xl" onClick={handleLoginGoogle}>Google</button>
      </div>
    </div>
    
  );
}

export default Login;
