import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logoBlanco from "../../assets/cinego_blanco_logo.png";
import logoNegro from "../../assets/cinego_negro_logo.png";
import LogoGoogle from "../../assets/google_logo.png";
import { useAuth } from "../../context/authContext";
import { loginUser } from "../../redux/actions";
import Spinner from "../../components/Spinner/Spinner";

const Login = ({ theme }) => {
  const [showPwd, setShowPwd] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
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
      toast.error(
        "Ocurrió un error al iniciar sesión. Por favor, intenta nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      setLoading(true);
      navigate("/");
      await loginWithGoogle();
      toast.success("Inicio de sesión exitoso");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full h-full flex justify-center p-10">
          <form
            className="w-[500px] h-[700px] flex flex-col justify-center items-center px-12 border border-black dark:border-white rounded"
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: "100px" }}
          >
            {theme === "dark" ? (
              <img
                className="w-40"
                src={logoBlanco}
                alt="CineGO"
              />
            ) : (
              <img
                className="w-40"
                src={logoNegro}
                alt="CineGO"
              />
            )}
            <h1 className="mt-2 mb-4">Ingresá a tu cuenta</h1>
            <div className="flex flex-col mb-4 items-center">
              <input
                className="border rounded-sm p-4 w-96"
                type="text"
                placeholder="Ingresa tu email"
                {...register("email", {
                  required: "El email es requerido",
                })}
              />
              {errors.email && (
                <span className="text-red-600 dark:text-red-600 text-base mt-2">
                  {errors.email.message}
                </span>
              )}
            </div>



            <div className="flex flex-col mb-4 items-center">
  <div className="relative">
    <input
      className={`border rounded-sm p-4 pr-12 w-96 ${errors.password ? 'border-red-500' : ''}`}
      type={showPwd ? "text" : "password"}
      placeholder="Ingresa tu contraseña"
      {...register("password", {
        required: "La contraseña es requerida",
      })}
    />
    <button
      type="button"
      className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
      onClick={() => setShowPwd(!showPwd)}
    >
      {showPwd ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height={"1.5rem"}
          className="eye-icon"
        >
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path
            fillRule="evenodd"
            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height={"1.5rem"}
          className="eye-icon"
        >
          <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
          <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
          <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
        </svg>
      )}
    </button>
  </div>
  {errors.password && (
    <span className="text-red-600 dark:text-red-600 text-base mt-2">
      {errors.password.message}
    </span>
  )}
</div>


            <button
              className="bg-primary-600 hover:bg-primary-500 py-4 px-10 w-96 text-white font-semibold"
              type="submit"
            >
              Iniciar Sesión
            </button>
            <p>o</p>
            <button
              type="button"
              className="w-96 flex justify-center items-center text-white font-bold bg-primary-600 hover:bg-primary-500 py-2 px-8"
              onClick={handleLoginGoogle}
            >
              <img className="w-10 " src={LogoGoogle} alt="Logo Google" />
              Iniciar sesión con Google
            </button>
            <div className="w-full flex flex-row items-center justify-center mt-4 border-t border-black dark:border-white">
            <Link className="items-center m-4 text-gray-600 hover:text-primary-500" to="/createUser">
              <h5>¿No tenés cuenta?</h5>
            </Link>
            <Link className="items-center text-gray-600 hover:text-primary-500" to="/forgotPassword">
              <h5>¿Olvidaste tu contraseña?</h5>
            </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
