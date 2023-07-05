import React, { useEffect, useState } from "react";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { logoutUser, putUser } from "../../redux/actions";
import { validateField } from "../../helpers/validateProfile";

function ProfileChange() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [user, setUser] = useState({
    id: userData.id,
    firstName: "",
    lastName: "",
    email: "",
    image: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState("");

  useEffect(() => {
    if (!userData.password) {
      setDisabled(true);
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });

    setError((prevError) => ({
      ...prevError,
      [name]: validateField(name, value),
    }));
  }

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
          const image = result.info.secure_url;
          setUploadedPhoto(image); // Almacenar la URL de la foto subida
          toast("Imagen subida con éxito");
        }
      }
    );

    widget_cloudinary.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savePic = {
      ...user,
      image: uploadedPhoto,
    };
    if (user.firstName || user.lastName || user.email || savePic.image) {
      Swal.fire({
        title: "Vas a modificar tus datos. ¿Estás seguro?",
        text: "Tendrás que volver a iniciar sesión",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(putUser(savePic));
          dispatch(logoutUser());
          window.localStorage.removeItem("user");
          setUser({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            image: "",
          });
          Swal.fire(
            "Listo!",
            "Modificaste tus datos. Volve a iniciar sesion",
            "success"
          ).then(() => {
            window.location.href = "/login";
          });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hiciste ninguna modificación!",
      });
    }
  };

  return (
    <div className="w-full h-screen">
      <h2 className="w-full flex items-center justify-center h-16 bg-light-200 dark:bg-slate-800">
        Perfil
      </h2>
      <form
        className="w-full flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-col items-center my-6">
          <img
            className="w-32 rounded-full"
            src={uploadedPhoto || userData.image}
            alt="Profile"
          />
          {!disabled && (
            <button
              type="button"
              id="btn-photo"
              onClick={handleUploadPhoto}
              className="bg-primary-600 hover:bg-primary-500 text-center px-4 mt-4 py-2 rounded-md font-bold text-white"
            >
              Cambiar
            </button>
          )}
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex space-x-10 px-16">
            <div className="w-full relative flex flex-col mb-2">
              <label className="mb-2" htmlFor="firstName">
                Nombre:
              </label>
              <input
                className={`p-2 mb-2 rounded-md ${
                  disabled
                    ? "bg-light-200 placeholder:text-light-400 dark:bg-slate-900"
                    : ""
                }`}
                type="text"
                name="firstName"
                value={user.firstName}
                placeholder={userData.firstName}
                onChange={handleChange}
                disabled={disabled}
              />
              {!disabled && !error.firstName && (
                <div className="absolute top-10 right-1">
                  <BiCheckCircle className="text-3xl text-green-500" />
                </div>
              )}
              {error.firstName && (
                <div className="flex items-center">
                  <BiErrorCircle className="text-3xl text-red-600" />
                  <span className="text-base ml-1">{error.firstName}</span>
                </div>
              )}
            </div>
            <div className="w-full relative flex flex-col mb-2">
              <label className="mb-2" htmlFor="lastName">
                Apellido:
              </label>
              <input
                className={`p-2 mb-2 rounded-md ${
                  disabled
                    ? "bg-light-200 placeholder:text-light-400 dark:bg-slate-900"
                    : ""
                }`}
                type="text"
                name="lastName"
                value={user.lastName}
                placeholder={userData.lastName}
                onChange={handleChange}
                disabled={disabled}
              />
              {!disabled && !error.lastName && (
                <div className="absolute top-10 right-1">
                  <BiCheckCircle className="text-3xl text-green-500" />
                </div>
              )}
              {error.lastName && (
                <div className="flex items-center">
                  <BiErrorCircle className="text-3xl text-red-600" />
                  <span className="text-base ml-1">{error.lastName}</span>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex space-x-10 px-16">
            <div className="w-full relative flex flex-col mb-2">
              <label className="mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className={`p-2 mb-2 rounded-md ${
                  disabled
                    ? "bg-light-200 placeholder:text-light-400 dark:bg-slate-900"
                    : ""
                }`}
                type="text"
                name="email"
                value={user.email}
                placeholder={userData.email}
                onChange={handleChange}
                disabled={disabled}
              />
              {!disabled && !error.email && (
                <div className="absolute top-10 right-1">
                  <BiCheckCircle className="text-3xl text-green-500" />
                </div>
              )}
              {error.email && error.email !== "" && (
                <div className="flex items-center">
                  <BiErrorCircle className="text-3xl text-red-600" />
                  <span className="text-base ml-1">{error.email}</span>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col mb-6">
              <label className="mb-2" htmlFor="cinePlus">
                CinePlus:
              </label>
              <input
                className="p-2 rounded-md bg-light-200 dark:bg-slate-900 placeholder:text-light-400 placeholder:font-semibold dark:placeholder:text-lig"
                type="text"
                name="cinePlus"
                value={user.cinePlus}
                placeholder={userData.cinePlus}
                onChange={handleChange}
                disabled
              />
            </div>
          </div>
        </div>
        {!disabled && (
          <button
            className="w-40 mt-10 py-2 rounded-md font-bold bg-green-500 hover:bg-green-600"
            type="submit"
            disabled={disabled}
          >
            Guardar
          </button>
        )}
      </form>
    </div>
  );
}

export default ProfileChange;
