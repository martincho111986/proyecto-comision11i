import React, { useRef, useState } from "react";
import { useForm } from 'react-hook-form'
import { axiosInstance } from "../config/axiosInstance";

const RegistroForm = () => {
  //const [datosForm, setDatosForm] = useState({});
  const { register, handleSubmit, formState: {errors} } = useForm();
  //const [nombre, setNombre] = useState('');
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  //const nombreRef = useRef();
  //const emailRef = useRef();
  //const passwordRef = useRef();



  const enviarFormulario = async (data) => {
   try {
    const registro = await axiosInstance.post('/users/registro', data);
    console.log(registro.data);
   } catch (error) {
    console.log(error.response.data)
   }
  };
  //const handleChange = (e) => {
  //  setDatosForm({
  //      ...datosForm,
  //      [e.target.name] : e.target.value
  //  }
  //  );
  //};

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit(enviarFormulario)}>
        <div>
          <input
          {...register('name', {required: "el campo es requerido"})}
            type="text"
            name="name"
            placeholder="ingrese su nombre"
            //onChange={handleChange}
          />
          {errors?.nombre?.message}
        </div>
        <div>
          <input
          {...register('username')}
            type="email"
            name="username"
            placeholder="ingrese su correo electronico"
            //onChange={handleChange}
          />
        </div>
        <div>
          <input
          {...register('password')}
            type="password"
            name="password"
            placeholder="ingrese su contraseña"
            //onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default RegistroForm;
