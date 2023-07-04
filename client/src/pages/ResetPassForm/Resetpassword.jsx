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
        navigate("/login");
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
        <div className="w-full h-full min-h-screen flex justify-center items-center pt-12">
          <form
            className="w-[400px] h-full relative flex flex-col p-6 bg-light-50 dark:bg-transparent dark:shadow-[0_0_10px_0px_#fff] rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="w-full flex justify-center mb-6 mt-4">Ingresa tus datos</h2>
            <div className="flex flex-col mb-4">
              <input
                className="py-2 px-3 rounded w-full"
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

            <div className="flex flex-col mb-4">
              <input
                className="py-2 px-3 rounded w-full"
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
              className="w-full rounded py-2 px-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold"
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
