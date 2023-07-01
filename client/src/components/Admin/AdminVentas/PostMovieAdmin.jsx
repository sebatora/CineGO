import React, { useState, useEffect } from 'react';
import { postMovie, getGenres } from '../../../redux/actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const schema = yup.object().shape({
  title: yup
    .string()
    .matches(/^([A-Za-z]+\s?){1,18}$/, 'Solo letras máx 18 caracteres')
    .required('El título es requerido'),
  description: yup
    .string()
    .matches(/^([A-Za-z,:;.]+\s?){1,140}$/, 'máx 140 caracteres')
    .required('La descripción es requerida'),
  actors: yup
    .string()
    .matches(/^([A-Za-z,:;.]+\s?){1,140}$/, 'máx 140 caracteres')
    .required('Los actores son requeridos'),
  director: yup
    .string()
    .matches(/^([A-Za-z]+\s?){1,18}$/, 'Solo letras máx 18 caracteres')
    .required('El director es requerido'),
  duration: yup
    .string()
    .matches(/^[0-9]+$/, 'Solo números')
    .required('Duración requerida'),
  release_date: yup
    .string()
    .required('Fecha de estreno requerida'),
  trailer: yup
    .string()
    .url('Ingrese una URL válida para el tráiler')
    .required('Tráiler requerido'),
  clasification: yup
    .string()
    .required('Clasificacion requerida'),
});

const PostMovieAdmin = () => {
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
  }, []);

  const onSubmit = async (data) => {
    try {
      // Agregar la URL de la foto al objeto de datos antes de enviarlo
      const movieData = {
        ...data,
        image: uploadedPhoto,
        genres: input.genres, // Agrega los géneros seleccionados al objeto de datos
      };

      const handleReset = () => {
        setUploadedPhoto("");
        reset();
        setSelectedGenres([]); // Reiniciar los géneros seleccionados
        setInput((prevInput) => ({
          ...prevInput,
          genres: [], // Reiniciar los géneros en el input
        }));
      };

      await dispatch(postMovie(movieData));
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
    setValue('genres', [...input.genres, newGenre]); // Actualiza el valor del campo 'genres' en el formulario
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
    <div className="w-full h-full flex justify-center pb-8"> 
      <form
        className="w-[720px] flex flex-col justify-center items-center p-10 border border-black dark:border-white rounded"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        style={{ marginTop: "100px" }}
      >
        <h1 className="mb-6">Crear Película</h1>

        <div className="w-full flex justify-center mt-4 py-3">
          <div className="flex flex-col mx-6">
            <input
              className="border rounded-sm p-3 w-60"
              type="text"
              placeholder="Título"
              {...register("title")}
            />
            {errors.title && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.title.message}
              </span>
            )}
          </div>
      
          <div className="flex flex-col mx-6">
            <input
              className="border rounded-sm p-3 w-60"
              type="text"
              placeholder="Actores"
              {...register("actors")}
            />
            {errors.actors && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.actors.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex justify-center mt-4 py-3">
          <div className="flex flex-col mx-6">
            <input
              className="border rounded-sm p-3 w-60"
              type="text"
              placeholder="Clasificación"
              {...register("clasification")}
            />
            {errors.clasification && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.clasification.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mx-6">
            <input
              className="border rounded-sm p-3 w-60"
              type="text"
              placeholder="Director"
              {...register("director")}
              />
            {errors.director && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.director.message}
              </span>
            )}
            </div>
          </div>
        

        <div className="w-full flex justify-center mt-4 py-3">
          <div className="flex flex-col mx-6">
            <input
              className="border rounded-sm p-3 w-60"
              type="text"
              placeholder="Duración"
              {...register("duration")}
            />
            {errors.duration && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.duration.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mx-6">
            <input
              className="border rounded-sm p-3 w-60"
              type="text"
              placeholder="Fecha de estreno"
              {...register("release_date")}
              />
            {errors.release_date && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.release_date.message}
              </span>
            )}
          </div>
            </div> 
      

        <div className="w-full flex justify-center mt-4 py-3">
          <div className="flex flex-col mx-6">
            <input
              className="border rounded-sm p-3 w-60"
              type="text"
              placeholder="Trailer"
              {...register("trailer")}
            />
            {errors.trailer && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.trailer.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mx-6">
          <textarea
            className="border rounded-sm p-11 w-60"
            type="text"
            placeholder="Descripción"
            {...register("description")}
          />
            {errors.description && (
              <span className="mt-2 text-red-600 dark:text-red-600 text-base">
                {errors.description.message}
              </span>
            )}
          </div>
        </div> 
        
        <div className="w-full flex -mt-11 ml-6 py-1">
          <div className="flex flex-col mx-6 ">
          <select
            className='border rounded-sm p-4 w-60 -mt-6 ml-5 flex flex-col'
            onChange={(e) => handleSelect(e)}
            name="genres"
            value={watch("genres")}
          >
            <option className='flex flex-col' value="">Géneros</option>
            {genres?.map((t) => (
              <option className='flex flex-col ' key={t.id} name="genres" value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        <div className="flex flex-wrap mt-3 ml-7" style={{ maxWidth: '500px' }}>
          {selectedGenres.map((genre) => (
            <div className="flex items-center" key={genre}>
              <h6 className='flex flex-col'>{genre}</h6>
              <button className=" text-black px-2 py-1 ml-1 mr-5" onClick={() => handleDelete(genre)}>
                <FontAwesomeIcon icon={faTimes} />
               </button>
            </div>
              ))}
              </div>
            </div>
            </div>
    
      
        <div className="w-full justify-center mt-4 flex flex-col items-center">
          <div className="w-[200px] h-[200px] flex justify-center items-start  border-[8px] border-gray-400">
            {uploadedPhoto ? (
              <img
                src={uploadedPhoto}
                alt="User Photo"
                className="w-full h-full object-cover"
              />
            ) : (
              watch("photoUser") && (
                <img
                  src={photoUser}
                  alt="User Photo"
                  className="w-full h-full object-cover"
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
            Crear película
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostMovieAdmin;


