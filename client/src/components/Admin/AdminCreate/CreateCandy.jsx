import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import cloudinary from "cloudinary-core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function CreateCandy() {
  const [uploadedPhoto, setUploadedPhoto] = useState("");
  const cl = new cloudinary.Cloudinary({ cloud_name: "dhyqgl7ie" });

  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
		watch
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      message: "",
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

  const onSubmit = async (data) => {
    try {
      // Agregar la URL de la foto al objeto de datos antes de enviarlo
      const userData = {
        ...data,
        image: uploadedPhoto,
      };

      await dispatch(postUser(userData));
      reset();
      // toast("Usuario creado correctamente");
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const boton_photo = document.querySelector("#btn-photo");
    boton_photo.addEventListener("click", handleUploadPhoto);
  }, []);

  return (
    <div>
      <div className="w-full h-full flex justify-center p-8">
        <form
          className="w-[40%] flex flex-col bg-light-300 dark:bg-slate-900 p-6 rounded-md"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="pb-4 ml-3">Agregar producto</h1>
          <div className="flex flex-col mb-4 items-center">
            <input
              className="border rounded-md p-2 w-96"
              type="text"
              placeholder="Ingresar nombre del producto"
              {...register("name", {
                required: "El nombre es requerido",
                maxLength: {
                  value: 20,
                  message: "El nombre no puede tener más de 20 caracteres",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-600 dark:text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4 items-center">
            <input
              className="border rounded-md p-2 w-96"
              type="text"
              placeholder="Ingresar precio del producto"
              {...register("price", {
                required: "El precio es requerido",
                maxLength: {
                  value: 20,
                  message: "El precio debe tener sólo letras",
                },
              })}
            />
            {errors.price && (
              <span className="text-red-600 dark:text-red-600">
                {errors.price.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4 items-center">
            <textarea
              className="w-96 resize-none overflow-auto p-2 rounded-md"
              name="description"
              rows={3}
              placeholder="Descripción del producto..."
              {...register("description", {
                required: "La descripción es requerida",
              })}
            />
            {errors.description && (
              <span className="text-red-600 dark:text-red-600">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="w-full justify-center my-6 flex flex-row items-center">
						<div className="w-[100px] h-[100px] flex justify-center items-start rounded-md border-[3px] border-gray-500">
							{uploadedPhoto ? (
								<img
									src={uploadedPhoto}
									alt="User Photo"
									className="w-full h-full object-cover rounded-md"
								/>
							) : (
								watch("photoUser") && (
									<img
										src={photoUser}
										alt="User Photo"
										className="w-full h-full object-cover rounded-md"
									/>
								)
							)}
						</div>
						<button
							className="bg-primary-600 hover:bg-primary-500 py-2 px-6 w-92 ml-12 text-white font-semibold rounded-md"
							type="button"
							id="btn-photo"
						>
							{" "}
							Subir foto
						</button>
					</div>

          <button
            className=" bg-primary-600 hover:bg-primary-500 p-4 mt-2 text-white font-semibold rounded-md"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z]{1,20}$/, 'Solo letras máx 20 caracteres')
    .required('El nombre es requerido'),
  price: yup
    .string()
    .matches(/^[A-Za-z]{1,20}$/, 'Solo letras máx 20 caracteres')
    .required('El apellido es requerido'),
  description: yup
    .string()
		.matches(/^[A-Za-z0-9\s]+$/g, 'Debes de ingresar todos los campos')
    .required('El email es requerido'),
});

export default CreateCandy;
