import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logoBlanco from "../../assets/cinego_blanco_logo.png";
import logoNegro from "../../assets/cinego_negro_logo.png";
import { forgotPassUser } from "../../redux/actions";
import Spinner from "../../components/Spinner/Spinner";

const Resetpassword = ({ theme }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await dispatch(forgotPassUser(data));

      if (typeof response === "string") {
        toast.error("Los datos son incorrectos. Por favor, intenta nuevamente.");
      } else {
        reset();
        navigate("/");
        toast.success("Su nueva contraseña fue enviada", {
          duration: 2000
        });
      }
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
            className="w-[500px] h-[550px] flex flex-col justify-center items-center p-10 border border-black dark:border-white rounded"
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: "100px" }}
          >
            {theme === "dark" ? (
              <img className="w-40" src={logoBlanco} alt="CineGO" />
            ) : (
              <img className="w-40" src={logoNegro} alt="CineGO" />
            )}
            <h1 className="mt-2 mb-4">Ingresá tus datos</h1>
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
              <input
                className="border rounded-sm p-4 w-96"
                type="firstName"
                placeholder="Ingresa tu nombre"
                {...register("firstName", {
                  required: "El nombre es requerido",
                })}
              />
              {errors.firstName && (
                <span className="text-red-600 dark:text-red-600 text-base mt-2">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <button
              className="bg-primary-600 hover:bg-primary-500 py-4 px-10 w-96 text-white font-semibold"
              type="submit"
            >
              Resetear contraseña
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Resetpassword;
