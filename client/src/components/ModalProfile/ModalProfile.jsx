import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { logoutUser } from "../../redux/actions";

const ModalProfile = ({ setActiveModal, userData }) => {
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      await logout();
      setActiveModal(false);
      window.localStorage.removeItem("user");
      navigate("/");
      toast("Se cerró sesión", {
        duration: 3000,
        style: {
          color: "red",
          border: "red",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-96 h-40 flex flex-col top-16 right-0 bg-light-100 dark:bg-dark-950 absolute uppercase border border-t-0 border-black dark:border-white dark:border-opacity-70 border-opacity-10 rounded-bl-md">
      <h3 className="my-4 flex justify-center select-none">
        ¡Bienvenido {userData.firstName}!
      </h3>
      <Link
        to="/profile"
        onClick={() => setActiveModal(false)}
        className="flex mb-4 justify-center items-center gap-1"
      >
        {userData.photoUrl ? (
          <img
            src={userData.photoUrl}
            alt="User Photo"
            className="w-7 h-7 rounded-full"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-7 h-7 stroke-black dark:stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
        <span>Mi Cuenta</span>
      </Link>
      <button
        onClick={handleLogout}
        className="flex justify-center items-center gap-1"
      >
        {userData.photoUrl ? (
          <img
            src={userData.photoUrl}
            alt="User Photo"
            className="w-7 h-7 rounded-full"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-7 h-7 stroke-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        )}
        <span className="text-red-600 dark:text-red-600">Cerrar Sesión</span>
      </button>
    </div>
  );
};

export default ModalProfile;
