import React, { useEffect, useState } from "react";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
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
  
  useEffect(() => {
    if(!userData.password){
      setDisabled(true)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstName || user.lastName || user.email) {
      Swal.fire({
        title: "Vas a modificar tus datos. Estas seguro?",
        text: "Tendras que volver a iniciar sesion",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(putUser(user));
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
          );
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
    <div className="w-full">
      <h2 className="w-full flex items-center justify-center h-16 bg-light-200 dark:bg-slate-800">Editar perfil</h2>
      <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col items-center h-44 my-6">
            <img className="w-32 rounded-full" src={userData.image} />
            <button
              type="button"
              className="bg-primary-600 hover:bg-primary-500 text-center px-4 mt-4 py-2 rounded-md font-bold text-white"
            >
              Cambiar
            </button>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col py-4 px-12">
            <div className="w-full h-12 flex items-center mb-2">
              <div className="w-full relative flex flex-col pr-2">
                <label className="mb-2" htmlFor="firstName">
                  Nombre:
                </label>
                <input
                  className={`p-2 rounded-md ${disabled ? "bg-light-200 placeholder:text-light-400" : ""}`}
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  placeholder={userData.firstName}
                  onChange={handleChange}
                  disabled={disabled}
                />
                {!disabled && !error.firstName && (
                  <BiCheckCircle className="absolute text-3xl text-green-500 right-3 top-10" />
                )}
              </div>
              <div className="w-full pt-10">
                {error.firstName && (
                  <div className="flex items-center">
                    <BiErrorCircle className="text-3xl text-red-600" />
                    <span>{error.firstName}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col py-4 px-12">
            <div className="w-full h-12 flex items-center mb-2">
              <div className="w-full relative flex flex-col pr-2">
                <label className="mb-2" htmlFor="lastName">
                  Apellido:
                </label>
                <input
                  className={`p-2 rounded-md ${disabled ? "bg-light-200 placeholder:text-light-400" : ""}`}
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  placeholder={userData.lastName}
                  onChange={handleChange}
                  disabled={disabled}
                />
                {!disabled && !error.lastName && (
                  <BiCheckCircle className="absolute text-3xl text-green-500 right-3 top-10" />
                )}
              </div>
              <div className="w-full pt-10">
                {error.lastName && (
                  <div className="flex items-center">
                    <BiErrorCircle className="text-3xl text-red-600" />
                    <span>{error.lastName}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col py-4 px-12">
            <div className="w-full h-12 flex items-center mb-2">
              <div className="w-full relative flex flex-col pr-2">
                <label className="mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  className={`p-2 rounded-md ${disabled ? "bg-light-200 placeholder:text-light-400" : ""}`}
                  type="text"
                  name="email"
                  value={user.email}
                  placeholder={userData.email}
                  onChange={handleChange}
                  disabled={disabled}
                />
                {!disabled && !error.email && (
                  <BiCheckCircle className="absolute text-3xl text-green-500 right-3 top-10" />
                )}
              </div>
              <div className="w-full pt-10">
                {error.email && error.email !== "" && (
                  <div className="flex items-center">
                    <BiErrorCircle className="text-3xl text-red-600" />
                    <span>{error.email}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col py-4 px-12">
            <div className="w-full h-12 flex items-center mb-2">
              <div className="w-full relative flex flex-col pr-2">
                <label className="mb-2" htmlFor="cinePlus">
                  CinePlus:
                </label>
                <input
                  className="w-1/2 p-2 rounded-md bg-light-200 dark:bg-slate-900 placeholder:text-light-400 placeholder:font-semibold dark:placeholder:text-lig"
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
        </div>
        <button className={`w-40 py-2 ml-12 mt-4 mb-8 rounded-md font-bold ${disabled ? "bg-green-600 opacity-50" : "bg-green-600 hover:bg-green-500"}`} type="submit" disabled={disabled}>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default ProfileChange;
