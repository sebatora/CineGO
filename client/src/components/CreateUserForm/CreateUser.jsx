import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUser } from "../../redux/actions";
import { Toaster, toast } from "react-hot-toast";
import photoUser from "../../assets/userPhoto.png";
import cloudinary from "cloudinary-core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateUser = ({ onPhotoUpload }) => {
  const dispatch = useDispatch();
  const [uploadedPhoto, setUploadedPhoto] = useState("");
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
      },
      (err, result) => {
        if (!err && result && result.event === "success") {
          const photoUrl = result.info.secure_url;
          console.log("Image URL:", photoUrl); // Obtener la URL de la foto subida
          setUploadedPhoto(photoUrl); // Almacenar la URL de la foto subida
          onPhotoUpload(photoUrl); // Pasar la URL de la foto al componente padre (ModalProfile)
          toast("Imagen subida con éxito");
        }
      }
    );

    widget_cloudinary.open();
  };

  useEffect(() => {
    const boton_photo = document.querySelector("#btn-photo");
    boton_photo.addEventListener("click", handleUploadPhoto);

    return () => {
      boton_photo.removeEventListener("click", handleUploadPhoto);
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      // Agregar la URL de la foto al objeto de datos antes de enviarlo
      const userData = {
        ...data,
        photoUrl: uploadedPhoto,
      };

      await dispatch(postUser(userData))
      reset();
      toast("Usuario creado correctamente");
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center p-20">
      <Toaster />
      <button
        type="button"
        className="bg-gray-300 absolute left-0 top-0 m-6 p-3 rounded-lg"
        onClick={() => navigate("/login")}
      >
        Volver
      </button>
      <form
        className="w-[720px] flex flex-col justify-center items-center p-10 border border-black dark:border-white rounded"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <h1 className="mb-6">Regístrate y crea una cuenta nueva</h1>
        <div className="w-full flex justify-center mt-4">
          <div className="flex flex-col mx-6">
            <label className="mb-2">Nombre:</label>
            <input
              className="border border-black p-2 rounded-lg w-60"
              type="text"
              placeholder="Nombre"
              {...register("firstName", { required: "El nombre es requerido" })}
            />
            {errors.firstName && (
              <span className="mt-2 text-red-600 dark:text-red-600">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mx-6">
            <label className="mb-2">Apellido:</label>
            <input
              className="border border-black p-2 rounded-lg w-60"
              type="text"
              placeholder="Apellido"
              {...register("lastName", {
                required: "El apellido es requerido",
              })}
            />
            {errors.lastName && (
              <span className="mt-2 text-red-600 dark:text-red-600">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full my-4 flex flex-col ml-12 lg:ml-28 mt-5">
          <label className="mb-2 ml-8">Email:</label>
          <input
            className="border border-black p-2 rounded-lg w-80 ml-8"
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
            <span className="mt-2 text-red-600 dark:text-red-600">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="w-full flex justify-center mt-4">
          <div className="flex flex-col mx-6">
            <label className="mb-2">Contraseña:</label>
            <input
              className="border border-black p-2 rounded-lg w-60"
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es requerida",
                validate: (value) => value === watch("confirmPassword"),
              })}
            />
            {errors.password && (
              <span className="mt-2 text-red-600 dark:text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col mx-6">
            <label className="mb-2">Confirmar Contraseña:</label>
            <input
              className="border border-black p-2 rounded-lg w-60"
              type="password"
              placeholder="Confirmar Contraseña"
              {...register("confirmPassword", {
                required: "Las contraseñas no coinciden",
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden",
              })}
            />
            {errors.confirmPassword && (
              <span className="mt-2 text-red-600 dark:text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex justify-start mt-4 ml-8">
          <div className="flex flex-col mx-6">
            <label className="mb-2 ml-4">Foto:</label>

            <div className="w-[200px] h-[200px] flex justify-start items-start rounded-full border-[8px] border-gray-1000">
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
            <button
              className="bg-black mt-10 py-3 px-8 rounded-lg text-white font-semibold ml-4"
              type="button"
              id="btn-photo"
            >
              {" "}
              Subir foto
            </button>
          </div>
        </div>
        <button
          className="h-[50px] ml-80 justify-end bg-black mt-10 py-4 px-20 rounded-lg text-white font-semibold flex flex-col mx-5"
          type="submit"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

const schema = yup.object().shape({
  firstName: yup.string().required("El nombre es requerido"),
  lastName: yup.string().required("El apellido es requerido"),
  email: yup
    .string()
    .required("El email es requerido")
    .email("Formato de email incorrecto"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("La confirmación de contraseña es requerida"),
});

export default CreateUser;
