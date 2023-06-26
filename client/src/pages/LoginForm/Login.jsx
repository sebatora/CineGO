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
            className="w-[500px] h-[750px] flex flex-col justify-center items-center p-10 border border-black dark:border-white rounded"
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: "100px" }}
          >
            {theme === "dark" ? (
              <img
                className="w-40 mt-[-80px] mb-[-10px]"
                src={logoBlanco}
                alt="CineGO"
              />
            ) : (
              <img
                className="w-40 mt-[-80px] mb-[-20px]"
                src={logoNegro}
                alt="CineGO"
              />
            )}
            <h1 className="flex flex-col mb-12">Ingresá a tu cuenta</h1>
            <div className="flex flex-col mb-6">
              <input
                className="border rounded-sm p-4 w-96"
                type="text"
                placeholder="Ingresa tu email..."
                {...register("email", {
                  required: "El email del usuario es requerido",
                })}
              />
              {errors.email && (
                <span className="text-red-600 dark:text-red-600">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mb-6">
              <input
                className="border rounded-sm p-4 w-96"
                type="password"
                placeholder="Ingresa tu contraseña..."
                {...register("password", {
                  required: "La contraseña es requerida",
                })}
              />
              {errors.password && (
                <span className="text-red-600 dark:text-red-600">
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
              className="w-96 flex justify-center items-center text-white font-bold bg-blue-600 hover:bg-blue-500 py-2 px-8"
              onClick={handleLoginGoogle}
            >
              <img className="w-10 " src={LogoGoogle} alt="Logo Google" />
              Iniciar sesión con Google
            </button>
            <div className="w-full mt-10 flex flex-col ml-10">
              <h4 className="mb-5">¿No tenés cuenta?</h4>
              <Link className="w-48" to="/createUser">
                <button
                  type="button"
                  className="bg-primary-600 hover:bg-primary-500 py-4 px-10 w-96 text-white font-semibold"
                >
                  Crear cuenta
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
