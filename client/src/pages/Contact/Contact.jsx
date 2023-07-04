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
  popupAnchor:  [-0, -0],
  iconSize: [20,30],     
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
        className="w-[40%] flex flex-col bg-light-300 dark:bg-slate-900 p-6 rounded-l-lg"
        ref={form}
        onSubmit={handleSubmit(sendMessage)}
      >
        <h2 className="pb-3">Contacto</h2>
        <div className={`flex flex-col ${errors.name ? "mb-0" : "mb-2"}`}>
          <label htmlFor="name">Nombre</label>
          <input
            className="border rounded-sm p-2"
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
            <span className="text-red-600 dark:text-red-600">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className={`flex flex-col ${errors.email ? "mb-0" : "mb-2"}`}>
          <label htmlFor="email">Email</label>
          <input
            className="border rounded-sm p-2"
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
            <span className="text-red-600 dark:text-red-600">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className={`flex flex-col ${errors.message ? "mb-0" : "mb-2"}`}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            className="resize-none overflow-auto p-2 rounded-sm"
            name="message"
            rows={8}
            placeholder="Déjanos tu mensaje..."
            {...register("message", {
              required: "El mensaje es requerido",
            })}
          ></textarea>
          {errors.message && (
            <span className="text-red-600 dark:text-red-600">
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          className="bg-primary-600 hover:bg-primary-500 p-4 mt-2 text-white font-semibold"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <MapContainer
        className="w-2/3 h-[570px] z-10"
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
  );
};

export default Contact;
