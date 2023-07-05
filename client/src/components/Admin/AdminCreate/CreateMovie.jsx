import React, { useState, useEffect } from "react";
import { postMovie, getGenres } from "../../../redux/actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const schema = yup.object().shape({
  title: yup
    .string()
    .matches(/^([A-Za-z]+\s?){1,30}$/, "Solo letras máx 30 caracteres")
    .required("El título es requerido"),
  description: yup
    .string()
    .matches(/^.{1,140}$/, "máx 140 caracteres")
    .required("La descripción es requerida"),
  actors: yup
    .string()
    .matches(/^.{1,140}$/, "máx 140 caracteres")
    .required("Los actores son requeridos"),
  director: yup
    .string()
    .matches(/^([A-Za-z]+\s?){1,18}$/, "Solo letras máx 18 caracteres")
    .required("El director es requerido"),
  duration: yup
    .string()
    .matches(/^[0-9]+$/, "Solo números")
    .required("Duración requerida"),
  release_date: yup.string().required("Fecha de estreno requerida"),
  trailer: yup
    .string()
    .url("Ingrese una URL válida para el tráiler")
    .required("Tráiler requerido"),
  clasification: yup.string().required("Clasificacion requerida"),
});

const CreateMovie = ({ setActiveForm }) => {
  const dispatch = useDispatch();
  const [uploadedPhoto, setUploadedPhoto] = useState("");
  const genres = useSelector((state) => state.allGenres);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [input, setInput] = useState({
    genres: [],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      actors: "",
      director: "",
      duration: "",
      release_date: "",
      trailer: "",
      clasification: "",
      genres: [], // Agrega el campo 'genres' a los valores predeterminados del formulario
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

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
      const movieData = {
        ...data,
        image: uploadedPhoto,
        genres: input.genres, // Agrega los géneros seleccionados al objeto de datos
      };
      console.log(movieData);

      const handleReset = () => {
        setUploadedPhoto("");
        reset();
        setSelectedGenres([]); // Reiniciar los géneros seleccionados
        setInput((prevInput) => ({
          ...prevInput,
          genres: [], // Reiniciar los géneros en el input
        }));
      };

      dispatch(postMovie(movieData));
      handleReset();
      toast.success("Película creada");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleSelect = (e) => {
    const newGenre = e.target.value;
    if (input.genres.includes(newGenre) || selectedGenres.includes(newGenre)) {
      alert("Ya has seleccionado este género");
      return;
    }
    setSelectedGenres([...selectedGenres, newGenre]);
    setInput((prevInput) => ({
      ...prevInput,
      genres: [...prevInput.genres, newGenre],
    }));
    setValue("genres", [...input.genres, newGenre]); // Actualiza el valor del campo 'genres' en el formulario
    e.target.value = "";
  };

  const handleDelete = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    setInput((prevInput) => ({
      ...prevInput,
      genres: prevInput.genres.filter((g) => g !== genre),
    }));
  };

  return (
    <>
      <div
        className="w-full h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-black/80"
        onClick={() => setActiveForm(false)}
      ></div>
      <form
        className="w-[35%] fixed top-0 left-0 bottom-0 right-0 z-20 flex flex-col  p-10 mx-auto my-10 bg-slate-600 rounded"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <button
          type="button"
          className="absolute right-0 top-0 m-4"
          onClick={() => setActiveForm(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-red-600 text-xs"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="w-full h-28  flex justify-center py-2">
          <div className="flex flex-col mx-6">
            <label className="pb-1">Título</label>
            <input
              className="border rounded-sm p-1 w-60"
              type="text"
              placeholder="Título"
              {...register("title")}
            />
            {errors.title && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-xs">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="flex flex-col mx-6">
            <label className="pb-1">Actores</label>
            <input
              className="border rounded-sm p-1 w-60"
              type="text"
              placeholder="Actores"
              {...register("actors")}
            />
            {errors.actors && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-xs">
                {errors.actors.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full h-28 flex justify-center py-2">
          <div className="flex flex-col mx-6">
            <label className="pb-1">Clasificación</label>
            <select
              className="border rounded-sm p-1 w-60 flex flex-col"
              name="clasification"
              value={watch("clasification")}
              {...register("clasification")}
            >
              <option value="clasification" disabled>
                Clasificación
              </option>
              <option className="dark:text-black" value="ATP">
                ATP
              </option>
              <option className="dark:text-black" value="+13">
                +13
              </option>
              <option className="dark:text-black" value="+16">
                +16
              </option>
            </select>
            {errors.clasification && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-xs">
                {errors.clasification.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mx-6">
            <label className="pb-1">Director</label>
            <input
              className="border rounded-sm p-1 w-60"
              type="text"
              placeholder="Director"
              {...register("director")}
            />
            {errors.director && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-xs">
                {errors.director.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full h-28 flex justify-center py-2">
          <div className="flex flex-col mx-6">
            <label className="pb-1">Duración</label>
            <input
              className="border rounded-sm p-1 w-60"
              type="text"
              placeholder="Duración"
              {...register("duration")}
            />
            {errors.duration && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-xs">
                {errors.duration.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mx-6">
            <label className="pb-1">Fecha de estreno</label>
            <input
              className="border rounded-sm p-1 w-60"
              type="text"
              placeholder="Fecha de estreno"
              {...register("release_date")}
            />
            {errors.release_date && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-xs">
                {errors.release_date.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full h-[250px] flex justify-center py-2">
          <div className="flex flex-col mx-6">
            <label className="pb-1">Trailer</label>
            <input
              className="border rounded-sm p-1 w-60"
              type="text"
              placeholder="Trailer"
              {...register("trailer")}
            />
            {errors.trailer && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-xs">
                {errors.trailer.message}
              </span>
            )}
            <div className="flex flex-col mt-2">
              <label className="pb-1">Géneros</label>
              <select
                className="border rounded-sm p-1 w-60 flex flex-col"
                onChange={(e) => handleSelect(e)}
                name="genres"
                value={watch("genres")}
              >
                {genres?.map((t) => (
                  <option
                    className="flex flex-col "
                    key={t.id}
                    name="genres"
                    value={t.name}
                  >
                    {t.name}
                  </option>
                ))}
              </select>
              <div className="flex flex-wrap mt-2">
                {selectedGenres.map((genre) => (
                  <div className="flex items-center" key={genre}>
                    <h6 className="flex flex-col">{genre}</h6>
                    <button
                      className="text-black p-2"
                      onClick={() => handleDelete(genre)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col mx-6">
            <label className="pb-1">Descripción</label>
            <textarea
              className="border rounded-sm p-1 w-60 resize-none"
              rows={5}
              type="text"
              placeholder="Descripción"
              {...register("description")}
            />
            {errors.description && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-xs">
                {errors.description.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full justify-center my-6 flex items-center">
          <div className="w-[50%] h-[200px] flex justify-center items-start rounded-md border-[3px] border-gray-500 ml-12">
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
          <div className="w-[50%] h-full flex flex-col justify-around items-center mt-4">
            <button
              className="w-[180px]  bg-primary-600 hover:bg-primary-500 py-4 px-10 text-white font-semibold rounded"
              type="button"
              id="btn-photo"
            >
              Subir foto
            </button>
            <button
              className="w-[180px] bg-primary-600 hover:bg-primary-500 py-5 px-10  text-white font-semibold rounded"
              type="submit"
            >
              Crear película
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateMovie;
