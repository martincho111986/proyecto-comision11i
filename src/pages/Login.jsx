import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Registro from "./Registro";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/axiosInstance";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../context/UserActions";


const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const sendLogin = async (data) => {
    dispatch(loginUser(data, navigate))
  
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
