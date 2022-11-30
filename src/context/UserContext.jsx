import React, { createContext, useState } from 'react';
import { axiosInstance } from '../config/axiosInstance';

//creamos un initialState, el cual tendra los estados iniciales de mi aplicacion
export const initialState = {
  productos: [],
  users: [],
  isLogged: false
}

export const UserContext = createContext({
    state: initialState,
    dispatch: (action) => {}
});

//export const UserProvider = ({ children }) => {
//    const [usuario, setUsuario] = useState({
//        nombre: 'Naty',
//        mail: 'naty@gmail.com',
//        contrasena: '123456'
//    })
//
//    const loginUser =  async (data, navigate) => {
//        try {
//            const login = await axiosInstance.post(
//              "/users/login",
//              data
//            );
//            localStorage.setItem("token", login.data.token);
//            navigate("/dashboard");
//          } catch (error) {
//            console.log(error);
//          }
//    }
//
//    return (
//        <UserContext.Provider value={{usuario, loginUser}}>
//            { children }
//        </UserContext.Provider>
//    )
//}