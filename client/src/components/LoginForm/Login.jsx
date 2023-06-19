import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions";
import LogoGoogle from "../../assets/google_logo.png";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const email = "example@example.com";
  // const password = "password123";

  const onSubmit = (data) => {
    try {
      dispatch(loginUser(data));
      reset();
      navigate("/");
      alert("Inicio de sesión exitoso");
    } catch (error) {
      console.log(error);
    }
  };


  const handleLoginGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full h-full flex justify-center p-20">
      <form className="w-[500px] flex flex-col justify-center items-center p-10 border border-black dark:border-white rounded" onSubmit={handleSubmit(onSubmit)}>
        <h1>Ingresa a tu cuenta</h1>

        <div className="flex flex-col mt-6">
          <label className="mb-2" htmlFor="email">Email:</label>
          <input className="border p-2 rounded-lg w-96" type="text" placeholder="Enter your email..." {...register("email", { required: "El email del usuario es requerido" })} />
          {errors.email && <span className="text-red-600 dark:text-red-600">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col my-6">
          <label className="mb-2" htmlFor="password">Contraseña:</label>
          <input className="border p-2 rounded-lg w-96" type="password" placeholder="Enter your password..." {...register("password", { required: "La contraseña es requerida" })} />
          {errors.password && <span className="text-red-600 dark:text-red-600">{errors.password.message}</span>}
        </div>

        <button className="bg-green-600 py-3 px-10 rounded-lg text-white font-semibold" type="submit">Iniciar Sesión</button>
        <div className="w-full mt-4 flex flex-col">
          <h3 className="mb-2">¿No tenés cuenta?</h3>
          <Link to="/createUser">
            <button type="button" className="bg-gray-500 rounded-lg p-3">Crear cuenta</button>
          </Link>
          <button type="button" className="w-60 flex justify-center items-center text-white font-bold bg-blue-600 mt-4 p-2 rounded-xl" onClick={handleLoginGoogle}>
            <img className="w-10" src={LogoGoogle} alt="Logo Google" />
            Sign up with Google
          </button>
        </div>
      </form>
    </div>

  );
}

export default Login;
