import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postUser } from '../../redux/actions';
import { Toaster, toast } from "react-hot-toast";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit = (data) => {
    try {
        dispatch(postUser(data));
        reset();
        navigate("/login");
        toast("Usuario creado correctamente");
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div className="w-full h-full flex justify-center p-20">
      <Toaster />
      <button type="button" className="bg-gray-300 absolute left-0 top-0 m-6 p-3 rounded-lg" onClick={() => navigate("/login")}>Volver</button>
      <form className="w-[720px] flex flex-col justify-center items-center p-10 border border-black dark:border-white rounded" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-6">Regístrate y crea una cuenta nueva</h1>
        <div className="w-full flex justify-center mt-4">
          <div className="flex flex-col mx-6">
            <label className="mb-2">Nombre:</label>
            <input className="border border-black p-2 rounded-lg w-60" type="text" placeholder="Nombre" {...register("firstName", { required: "El nombre es requerido" })} />
            {errors.firstName && <span className="mt-2 text-red-600 dark:text-red-600">{errors.firstName.message}</span>}
          </div>
          <div className="flex flex-col mx-6">
            <label className="mb-2">Apellido:</label>
            <input className="border border-black p-2 rounded-lg w-60" type="text" placeholder="Apellido" {...register("lastName", { required: "El apellido es requerido" })} />
            {errors.lastName && <span className="mt-2 text-red-600 dark:text-red-600">{errors.lastName.message}</span>}
          </div>
        </div>

        <div className="w-full my-4 flex flex-col ml-12 lg:ml-28">
          <label className="mb-2">Email:</label>
          <input className="border border-black p-2 rounded-lg w-60" type="text" placeholder="Email" {...register("email", { required: "El email es requerido", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, message: "Formato de email incorrecto" } })} />
          {errors.email && <span className="mt-2 text-red-600 dark:text-red-600">{errors.email.message}</span>}
        </div>

        <div className="w-full flex justify-center mt-4">
          <div className="flex flex-col mx-6">
            <label className="mb-2">Contraseña:</label>
            <input
              className="border border-black p-2 rounded-lg w-60"
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: "La contraseña es requerida", validate: (value) => value === watch("confirmPassword") })}
            />
            {errors.password && <span className="mt-2 text-red-600 dark:text-red-600">{errors.password.message}</span>}
          </div>

          <div className="flex flex-col mx-6">
            <label className="mb-2">Confirmar Contraseña:</label>
            <input
              className="border border-black p-2 rounded-lg w-60"
              type="password"
              placeholder="Confirmar Contraseña"
              {...register("confirmPassword", {
                required: "Las contraseñas no coinciden",
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden"
              })}
            />
            {errors.confirmPassword && <span className="mt-2 text-red-600 dark:text-red-600">{errors.confirmPassword.message}</span>}
          </div>
        </div>

        <button className="bg-green-600 mt-10 py-3 px-10 rounded-lg text-white font-semibold" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default CreateUser;



