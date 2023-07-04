import { useRef } from "react";
import email from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../../assets/location_icon.png";

const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [20, 30],
});

const Contact = () => {
  const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta
    .env;
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendMessage = (data) => {
    try {
      email.sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        form.current,
        VITE_PUBLIC_KEY
      );
      reset();
      toast.success("Su mensaje se envió correctamente");
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al enviar su mensaje");
    }
  };

  return (
    <div className="my-20 mx-10 px-10 py-4 flex">
      <Toaster />
      <form
        className="w-[600px] min-h-[500px] h-full relative flex flex-col p-4 bg-light-50 dark:bg-transparent dark:shadow-[0_0_10px_0px_#fff] rounded"
        ref={form}
        onSubmit={handleSubmit(sendMessage)}
      >
        <h2 className="pb-3">Contacto</h2>
        <div className={`flex flex-col ${errors.name ? "mb-0" : "mb-2"}`}>
          <label htmlFor="name">Nombre</label>
          <input
            className="py-2 px-3 rounded w-full"
            name="name"
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("name", {
              required: "El nombre es requerido",
              maxLength: {
                value: 40,
                message: "El nombre no puede tener más de 40 caracteres",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-600 dark:text-red-600 text-base">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className={`flex flex-col ${errors.email ? "mb-0" : "mb-2"}`}>
          <label htmlFor="email">Email</label>
          <input
            className="py-2 px-3 rounded w-full"
            name="email"
            type="email"
            placeholder="Ingresa tu email"
            {...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Debe ser un email válido",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-600 dark:text-red-600 text-base">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className={`flex flex-col ${errors.message ? "mb-0" : "mb-2"}`}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            className="resize-none overflow-auto py-2 px-3 rounded w-full"
            name="message"
            rows={7}
            placeholder="Déjanos tu mensaje..."
            {...register("message", {
              required: "El mensaje es requerido",
            })}
          ></textarea>
          {errors.message && (
            <span className="text-red-600 dark:text-red-600 text-base">
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          className="w-full rounded py-2 px-3 mt-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <div className="w-full h-full flex items-center justify-center">
        <MapContainer
          className="w-[600px] h-[500px] z-10"
          center={[-34.61315, -58.37723]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-34.61315, -58.37723]} icon={myIcon}></Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
