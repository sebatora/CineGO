import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./CreateUser.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { registerLocale } from "react-datepicker";


const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  
  const es = registerLocale();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setValue("date", date)
  }; 
  
  const onSubmit = (data) => {
    // Aquí puedes realizar la lógica para enviar los datos del formulario
  };

  return (
    <div className={style.containerForm}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={style.h1}>Registrate y crea una cuenta nueva</h1>
        <div className={style.inputWrapper}>
          <label className={style.label}>Nombre:</label>
          <input className={style.input} type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
          {errors.nombre && <p className={style.p}>Campo requerido</p>}
        </div>
        <div className={style.inputWrapper}>
          <label className={style.label}>Apellido:</label>
          <input className={style.input} type="text" placeholder="Apellido" {...register("apellido", { required: true })} />
          {errors.apellido && <p className={style.p}>Campo requerido</p>}
        </div>

        <div className={style.inputWrapper}>
          <label className={style.label}>Email:</label>
          <input className={style.input} type="text" placeholder="Email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
          {errors.email && <p className={style.p}>Campo requerido</p>}
          {errors.email?.type === 'pattern' && <p className={style.p}>Formato de email incorrecto</p>}
        </div>

        <div className={style.inputWrapper}>
          <label className={style.label}>Contraseña:</label>
          <input className={style.input} type="password" placeholder="Contraseña" {...register("contraseña", { required: true })} />
          {errors.contraseña && <p className={style.p}>Campo requerido</p>}
        </div>

        <div className={style.inputWrapper}>
          <label className={style.label}>Confirmar Contraseña:</label>
          <input className={style.input} type="password" placeholder="Confirmar Contraseña" {...register("confirmarContraseña", { required: true })} />
          {errors.confirmarContraseña && <p className={style.p}>Campo requerido</p>}
        </div>

        <div className={style.inputWrapper}>
          <label className={style.label}>Fecha de nacimiento</label>
          <DatePicker
            className={style.input}
            type="date"
            placeholderText="dd/mm/aaaa"
            dateFormat="dd/MM/yyyy"
            locale="es"
            selected={selectedDate}
            onChange={handleDateChange}
            {...register("date", { required: true })}
          />
          {errors.date && <p className={style.p}>Campo requerido</p>}
        </div>

        <div className={style.inputWrapper}>
          <label className={style.label}>Género:</label>
          <Select
            className={style.selectInput}
            placeholder="Género"
            options={[
              { value: "femenino", label: "Femenino" },
              { value: "masculino", label: "Masculino" },
              { value: "otro", label: "Otro" },
              { value: "prefieroNoEspecificar", label: "Prefiero no especificar" },
            ]}
            {...register("género", { required: true })}
          />
          {errors.género && <p className={style.p}>Campo requerido</p>}
        </div>

        <button className={style.button} type="submit">
          Registrarse
        </button>  
      </form>
    </div>
  );
};

export default CreateUser;


