import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUser } from "../../redux/actions";
import { Toaster, toast } from "react-hot-toast";
import photoUser from "../../assets/userPhoto.png";
import cloudinary from "cloudinary-core";
import logoBlanco from "../../assets/cinego_blanco_logo.png";
import logoNegro from "../../assets/cinego_negro_logo.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateUser = ({ theme }) => {
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
        sources: ['local'],
        resourceType:["image"],
        clientAllowedFormats:["image"]
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

    return () => {
      boton_photo.removeEventListener("click", handleUploadPhoto);
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      // Agregar la URL de la foto al objeto de datos antes de enviarlo
      const userData = {
        ...data,
        image: uploadedPhoto,
      };

      console.log("image", userData);

      await dispatch(postUser(userData));
      reset();
      // toast("Usuario creado correctamente");
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center pb-8">
     
      <form
        className="w-[720px] flex flex-col justify-center items-center p-10 border border-black dark:border-white rounded"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        style={{ marginTop: "100px" }}
      >
        {theme === "dark" ? (
          <img
            className="w-40 mt-[1px] mb-[-1px]"
            src={logoBlanco}
            alt="CineGO"
          />
        ) : (
          <img
            className="w-40 mt-[1px] mb-[-1px]"
            src={logoNegro}
            alt="CineGO"
          />
        )}

        <h1 className="mb-6">Regístrate y crea una cuenta nueva</h1>
        <div className="w-full flex justify-center mt-4 py-3">
          <div className="flex flex-col mx-6">
            <input
              className="border rounded-sm p-3 w-60"
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
          <div className="flex flex-col mx-6 ">
            <input
              className="border rounded-sm p-3 w-60"
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

        <div className="w-full my-4 flex flex-col py-3 ml-12 lg:ml mt-5">
          <input
            className="border rounded-sm p-3 w-96 ml-7"
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
            <input
              className="border rounded-sm p-3 w-60"
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

          <div className="flex flex-col mx-6 mb-6">
            <input
              className="border rounded-sm p-3 w-60"
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

        <div className="w-full justify-center mt-4 flex flex-col items-center">
          <div className="w-[200px] h-[200px] flex justify-center items-start rounded-full border-[8px] border-gray-400">
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
          <div className="w-full flex justify-center mt-4 mb-6">
            <button
              className="bg-primary-600 hover:bg-primary-500 py-4 px-10 w-92 text-white font-semibold"
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
            className="bg-primary-600 hover:bg-primary-500 py-5 px-10 w-96 text-white font-semibold"
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
