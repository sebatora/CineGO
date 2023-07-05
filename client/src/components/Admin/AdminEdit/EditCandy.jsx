import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import cloudinary from "cloudinary-core";
import { toast } from "react-toastify";
import { getCandy, putCandy } from "../../../redux/actions";

const EditCandy = ({ setActiveEdit, candyFound }) => {
  const dispatch = useDispatch();
  const [uploadedPhoto, setUploadedPhoto] = useState(candyFound.image);
  const cl = new cloudinary.Cloudinary({ cloud_name: "dhyqgl7ie" });
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      name: candyFound.name,
      price: candyFound.price,
      description: candyFound.description,
      image: candyFound.image,
      category: candyFound.category,
    },
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
          setUploadedPhoto(photoUrl);
          toast("Imagen subida con éxito");
        }
      }
    );

    widget_cloudinary.open();
  };

  const onSubmit = (data) => {
    try {
      dispatch(putCandy(candyFound.id, data));
      setTimeout(() => {
        dispatch(getCandy());
      }, 500);
      setActiveEdit(false);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const boton_photo = document.querySelector("#btn-photo-edit");
    boton_photo.addEventListener("click", handleUploadPhoto);
  }, []);

  return (
    <>
      <div
        className="w-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-black/80"
        onClick={() => setActiveEdit(false)}
      ></div>
      <div className="w-full h-full flex justify-center p-8">
        <form
          className="w-[35%] fixed top-0 left-0 bottom-0 right-0 z-20 flex flex-col bg-slate-600 p-6 mx-auto my-10 rounded-md"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <button
            type="button"
            className="absolute right-0 top-0 m-4"
            onClick={() => setActiveEdit(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-red-600"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h1 className="pb-4 ml-3">Editar producto</h1>
          <div className="flex flex-col my-2 items-center">
            <h3>Categoria</h3>
            <select
              className="border rounded-md p-1 w-96"
              name="category"
              {...register("category")}
            >
              <option value="category" disabled>
                Categoría
              </option>
              <option value="combos">Combos</option>
              <option value="pochoclos">Pochoclos</option>
              <option value="bebidas">Bebidas</option>
              <option value="snacks">Snacks</option>
              <option value="cafeteria">Cafetería</option>
              <option value="golosinas">Golosinas</option>
            </select>
          </div>
          <div className="flex flex-col my-2 items-center">
            <h3>Producto</h3>
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
          <div className="flex flex-col my-2 items-center">
            <h3>Precio</h3>
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
          <div className="flex flex-col my-2 items-center">
            <h3>Descripción</h3>
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
              id="btn-photo-edit"
            >
              Cambiar foto
            </button>
          </div>

          <button
            className="bg-primary-600 hover:bg-primary-500 p-4 my-6 text-white font-semibold rounded-md"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};

export default EditCandy;
