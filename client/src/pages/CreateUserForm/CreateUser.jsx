import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUser } from "../../redux/actions";
import { toast } from "react-hot-toast";
import photoUser from "../../assets/userPhoto.png";
import cloudinary from "cloudinary-core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateUser = ({ theme }) => {
  const dispatch = useDispatch();
  const [uploadedPhoto, setUploadedPhoto] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showPwds, setShowPwds] = useState(false);
  const cl = new cloudinary.Cloudinary({ cloud_name: "dhyqgl7ie" });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
    },
    resolver: yupResolver(schema),
  });

  const handleUploadPhoto = () => {
    const widget_cloudinary = window.cloudinary.createUploadWidget(
      {
        cloudName: "dhyqgl7ie",
        uploadPreset: "a2i0wk5f",
        sources: ["local"],
        resourceType: ["image"],
        clientAllowedFormats: ["image"],
      },
      (err, result) => {
        if (!err && result && result.event === "success") {
          const photoUrl = result.info.secure_url;
          setUploadedPhoto(photoUrl); // Almacenar la URL de la foto subida
          toast("Imagen subida con éxito");
        }
      }
    );

    widget_cloudinary.open();
  };

  useEffect(() => {
    const boton_photo = document.querySelector("#btn-photo");
    boton_photo.addEventListener("click", handleUploadPhoto);
  }, []);

  const onSubmit = async (data) => {
    try {
      // Agregar la URL de la foto al objeto de datos antes de enviarlo
      const userData = {
        ...data,
        image: uploadedPhoto,
      };

      dispatch(postUser(userData));
      reset();
      toast("Usuario creado correctamente");
      navigate("/login");
    } catch (error) {
      toast.error(error, {
        duration: 1000,
      });
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center p-20 pb-16">
      <form
        className="w-[600px] h-full relative flex flex-col p-4 bg-light-50 dark:bg-transparent dark:shadow-[0_0_10px_0px_#fff] rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="w-full flex justify-center mb-4 mt-2">
          Regístrate y crea una cuenta nueva
        </h2>
        <div className="w-full flex justify-between p-4 py-3">
          <div className="flex flex-col px-4">
            <input
              className="py-2 px-3 rounded w-full"
              type="text"
              placeholder="Nombre"
              {...register("firstName", { required: "El nombre es requerido" })}
            />
            {errors.firstName && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.firstName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col px-4">
            <input
              className="py-2 px-3 rounded w-full"
              type="text"
              placeholder="Apellido"
              {...register("lastName", {
                required: "El apellido es requerido",
              })}
            />
            {errors.lastName && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col my-4 px-8">
          <input
            className="py-2 px-3 rounded w-full"
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                message: "Formato de email incorrecto",
              },
            })}
          />
          {errors.email && (
            <span className="mt-2 text-red-600 dark:text-red-600 text-base">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="w-full flex px-8">
          <div className="w-full flex flex-col m-4 ml-0">
            <div className="relative">
              <input
                className="py-2 px-3 rounded w-full"
                type={showPwd ? "text" : "password"}
                placeholder="Contraseña"
                {...register("password", {
                  required: "La contraseña es requerida",
                  validate: (value) => value === watch("confirmPassword"),
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
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col m-4 mr-0">
            <div className="relative">
              <input
                className="py-2 px-3 rounded w-full"
                type={showPwds ? "text" : "password"}
                placeholder="Confirmar Contraseña"
                {...register("confirmPassword", {
                  required: "Las contraseñas no coinciden",
                  validate: (value) =>
                    value === watch("password") ||
                    "Las contraseñas no coinciden",
                })}
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                onClick={() => setShowPwds(!showPwds)}
              >
                {showPwds ? (
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
            {errors.confirmPassword && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex items-center justify-center space-x-12 my-4">
          <div className="w-40 h-40 flex items-center rounded-full border-8 border-gray-400">
            {uploadedPhoto ? (
              <img
                src={uploadedPhoto}
                alt="User Photo"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              watch("photoUser") && (
                <img
                  src={photoUser}
                  alt="User Photo"
                  className="w-full h-full object-cover rounded-full"
                />
              )
            )}
          </div>
          <div className="flex justify-center mt-4 mb-6">
            <button
              className="rounded px-3 py-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold"
              type="button"
              id="btn-photo"
            >
              {" "}
              Subir foto
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <button
            className="w-full rounded py-2 px-3 m-6 mb-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold"
            type="submit"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([A-Za-z]+\s?){1,18}$/, "Solo letras máx 18 caracteres")
    .required("El nombre es requerido"),
  lastName: yup
    .string()
    .matches(/^([A-Za-z]+\s?){1,18}$/, "Solo letras máx 18 caracteres")
    .required("El apellido es requerido"),
  email: yup
    .string()
    .required("El email es requerido")
    .email("Formato de email incorrecto"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .min(6, "Mínimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Confirmación requerida"),
});

export default CreateUser;
