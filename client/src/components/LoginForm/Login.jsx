import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions";
import LogoGoogle from "../../assets/google_logo.png";
import { useAuth } from "../../context/authContext";
import Spinner from "../Spinner/Spinner";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
  try {
    setLoading(true);
    const response = await dispatch(loginUser(data));
    
    if (typeof response === "string") {
      toast.error(response);
    } else {
      reset();
      navigate("/");
      toast.success("Inicio de sesión exitoso");
    }
  } catch (error) {
    toast.error("Ocurrió un error al iniciar sesión. Por favor, intenta nuevamente.");
  } finally {
    setLoading(false);
  }
};

  const handleLoginGoogle = async () => {
    try {
      setLoading(true);
      await loginWithGoogle();
      toast.success("Inicio de sesión exitoso");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Toaster />
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full h-full flex justify-center p-20">
          <button type="button" className="bg-gray-300 absolute left-0 top-0 m-6 p-3 rounded-lg" onClick={() => navigate("/")}>Volver</button>
          <form className="w-[500px] flex flex-col justify-center items-center p-10 border border-black dark:border-white rounded" onSubmit={handleSubmit(onSubmit)}>
            <h1>Ingresa a tu cuenta</h1>

            <div className="flex flex-col mt-6">
              <label className="mb-2" htmlFor="email">Email:</label>
              <input className="border border-black p-2 rounded-lg w-96" type="text" placeholder="Ingresa tu email..." {...register("email", { required: "El email del usuario es requerido" })} />
              {errors.email && <span className="text-red-600 dark:text-red-600">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col my-6">
              <label className="mb-2" htmlFor="password">Contraseña:</label>
              <input className="border border-black p-2 rounded-lg w-96" type="password" placeholder="Ingresa tu contraseña..." {...register("password", { required: "La contraseña es requerida" })} />
              {errors.password && <span className="text-red-600 dark:text-red-600">{errors.password.message}</span>}
            </div>

            <button className="bg-green-600 py-3 px-10 rounded-lg text-white font-semibold" type="submit">Iniciar Sesión</button>
            <p>o</p>
            <button type="button" className="w-72 flex justify-center items-center text-white font-bold bg-blue-600 p-2 rounded-xl" onClick={handleLoginGoogle}>
              <img className="w-10" src={LogoGoogle} alt="Logo Google" />
              Iniciar sesión con Google
            </button>
            <div className="w-full mt-4 flex flex-col">
              <h3 className="mb-2">¿No tenés cuenta?</h3>
              <Link className="w-48" to="/createUser">
                <button type="button" className="w-48 bg-gray-500 rounded-lg p-3">Crear cuenta</button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;

