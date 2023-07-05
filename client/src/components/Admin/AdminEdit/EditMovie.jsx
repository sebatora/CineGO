import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import cloudinary from "cloudinary-core";
import { toast } from "react-toastify";
import { getMovies, putMovie, getGenres } from "../../../redux/actions";
import { useSelector } from "react-redux";

const EditMovie = ({ setActiveEdit, movieFound }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.allGenres);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [uploadedPhoto, setUploadedPhoto] = useState(movieFound.image);
  const cl = new cloudinary.Cloudinary({ cloud_name: "dhyqgl7ie" });
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      title: movieFound.title,
      image: movieFound.image,
      actors: movieFound.actors,
      director: movieFound.director,
      duration: movieFound.duration,
      release_date: movieFound.release_date,
      trailer: movieFound.trailer,
      clasification: movieFound.clasification,
      description: movieFound.description,
      genres: movieFound.genres,
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
      dispatch(putMovie(movieFound.id, data));
      setTimeout(() => {
        dispatch(getMovies());
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

  const handleSelect = (e) => {
    const newGenre = e.target.value;
    if (selectedGenres.includes(newGenre)) {
      alert("Ya has seleccionado este género");
      return;
    }
    setSelectedGenres([...selectedGenres, newGenre]);
  };

  const handleDelete = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g !== genre));
  };

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <>
      <div
        className="w-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-black/80"
        onClick={() => setActiveEdit(false)}
      ></div>
      <div className="w-full h-full flex justify-center p-8">
        <form
          className="w-[40%] fixed top-0 left-0 bottom-0 right-0 z-20 flex flex-col bg-slate-600 p-6 mx-auto my-10 rounded-md"
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
          <h1 className="pb-1 ml-3 mb-6">Editar película</h1>
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col mb-6">
              <label className="">Nombre</label>
              <input
                className="border rounded-md p-1 w-full"
                type="text"
                placeholder="Ingresar título de la película"
                {...register("title", {
                  maxLength: 30,
                })}
              />
              {errors.title && errors.title.type === "maxLength" && (
                <span className="text-red-600 dark:text-red-600 text-sm">
                  El título no puede exceder los 30 caracteres.
                </span>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <label className="">Trailer</label>

              <input
                className="border rounded-md p-1 w-full"
                type="text"
                placeholder="Ingresar trailer"
                {...register("trailer", {
                  pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                })}
              />
              {errors.trailer && errors.trailer.type === "pattern" && (
                <span className="text-red-600 dark:text-red-600 text-sm">
                  Ingrese una URL válida para el tráiler.
                </span>
              )}
            </div>
            <div className="flex justify-around mb-6">
              <div className="flex flex-col w-72">
                <label className="">Actores</label>

                <input
                  className="border rounded-md p-1"
                  type="text"
                  placeholder="Ingresar actores"
                  {...register("actors", {
                    pattern: /^[\w\s.,]{1,140}$/,
                  })}
                />
                {errors.actors && errors.actors.type === "pattern" && (
                  <span className="text-red-600 dark:text-red-600 text-sm">
                    Máx 140 caracteres.
                  </span>
                )}
              </div>
              <div className="flex flex-col w-72">
                <label className="">Director</label>

                <input
                  className="border rounded-md p-1"
                  type="text"
                  placeholder="Ingresar director"
                  {...register("director", {
                    pattern: /^[\w\s.,]{1,18}$/,
                  })}
                />
                {errors.director && errors.director.type === "pattern" && (
                  <span className="text-red-600 dark:text-red-600 text-sm">
                    Máx 18 caracteres.
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-around mb-6">
              <div className="flex flex-col w-72">
                <label className="">Duración</label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  placeholder="Ingresar duracion"
                  {...register("duration", {
                    pattern: /^[0-9]+$/,
                  })}
                />

                {errors.duration && errors.duration.type === "pattern" && (
                  <span className="text-red-600 dark:text-red-600 text-sm">
                    Solo números.
                  </span>
                )}
              </div>
              <div className="flex flex-col w-72">
                <label className="">Estreno</label>

                <input
                  className="border rounded-md p-1"
                  type="text"
                  placeholder="Ingresar fecha de estreno"
                  {...register("release_date", {
                    pattern: /^\d{4}[-\/]\d{2}[-\/]\d{2}$/,
                  })}
                />

                {errors.release_date &&
                  errors.release_date.type === "pattern" && (
                    <span className="text-red-600 dark:text-red-600 text-sm">
                      El formato: aaaa/mm/dd
                    </span>
                  )}
              </div>
            </div>
            <div className="flex justify-around mb-6">
              <div className="flex flex-col w-72">
                <select
                  className="border rounded-md p-1"
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
                  <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                    {errors.clasification.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col w-72">
                <div className="relative">
                  <select
                    {...register("genres")}
                    className="border rounded-sm p-1 w-72 mb-2 flex flex-col"
                    onChange={(e) => handleSelect(e)}
                    value={selectedGenres}
                  >
                    <option value="genres">Géneros</option>
                    {genres.map((genre) => (
                      <option key={genre.id} value={genre.name}>
                        {genre.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <div className="">
                    {selectedGenres.map((genre) => (
                      <span
                        key={genre}
                        className="bg-gray-200 text-gray-700 font-semibold py-1 px-1 ml-1 rounded-md mr-2 dark:text-gray-700 text-xs"
                      >
                        {genre}
                        <button
                          className="text-red-500 hover:text-red-700 ml-2 "
                          onClick={() => handleDelete(genre)}
                        >
                          X
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full justify-center my-6 flex flex-row items-center">
              <div className="w-[100px] h-[100px] flex justify-center items-start rounded-md border-[3px] border-gray-500">
                {uploadedPhoto ? (
                  <img
                    src={uploadedPhoto}
                    alt="Movie Poster"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  watch("photoUser") && (
                    <img
                      src={photoUser}
                      alt="Movie Poster"
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
          </div>

          <button
            className="bg-primary-600 hover:bg-primary-500 p-4 text-white font-semibold rounded-md"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};

export default EditMovie;
