import React from "react";
import { useForm } from "react-hook-form";
import Registro from "./Registro";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/axiosInstance";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const sendLogin = async (data) => {
    console.log(data);
    try {
      const login = await axiosInstance.post(
        "/users/login",
        data
      );
      localStorage.setItem("token", login.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(sendLogin)}>
      <div>
        <label htmlFor="">Email</label>
        <input {...register("username")} type="email" name="username" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input {...register("password")} type="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
