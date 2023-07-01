import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import cloudinary from "cloudinary-core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { postCandy } from "../../../redux/actions";
import { toast } from 'react-toastify';
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

function SaleCandy() {
  const dispatch = useDispatch();
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
      price: null,
      description: "",
      image: "",
      category: ""
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
      const candyData = {
        name: data.name,
        price: Number(data.price),
        description: data.description,
        category: data.category,
        image: uploadedPhoto,
      };

      console.log(candyData);

      const handleReset = () => {
        setUploadedPhoto("");
        reset();
      }

      dispatch(postCandy(candyData));
      handleReset();
      toast.success("Producto creado")
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
      <Toaster />
      <div className="w-full h-full flex justify-center p-8">
        <form
          className="w-[40%] flex flex-col bg-light-300 dark:bg-slate-900 p-6 rounded-md"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="pb-4 ml-3">Agregar producto</h1>
					<div className="flex flex-col mb-4 items-center">
						<select className="border rounded-md p-1 w-96" {...register("category")}>
							<option value='none'>Categoría</option>
							<option value='combos'>Combos</option>
							<option value='pochoclos'>Pochoclos</option>
							<option value='bebidas'>Bebidas</option>
							<option value='snacks'>Snacks</option>
							<option value='cafeteria'>Cafetería</option>
							<option value='golosinas'>Golosinas</option>
						</select>
					</div>
          <div className="flex flex-col mb-4 items-center">
            <input
              className="border rounded-md p-1 w-96"
              type="text"
              placeholder="Ingresar nombre del producto"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-600 dark:text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4 items-center">
            <input
              className="border rounded-md p-1 w-96"
              type="number"
              placeholder="Ingresar precio del producto"
              {...register("price")}
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
              {...register("description")}
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
    .matches(/^[A-Za-z\s]+$/, 'Solo letras máx 18 caracteres')
    .required('El nombre es requerido'),
  price: yup
    .string()
    .matches(/^[0-9]{1,18}$/, 'Solo numeros')
    .required('El precio es requerido'),
  description: yup
    .string()
    // .matches(/^([A-Za-z0-9,:;.]+\s?){1,140}$/, 'máx 140 caracteres')
    .required('La descripción es requerida'),
});

export default SaleCandy;
