import { axiosInstance } from "../config/axiosInstance";
import { GET_PRODUCTS, GET_USERS, LOGIN_USER } from "./types";

import Swal from 'sweetalert2';

export const getUsers = async () => {
  let users;
  try {
    users = await axiosInstance.get("/users");
  } catch (error) {
    console.log(error);
  }
  return {
    type: GET_USERS,
    payload: users.data.users,
  };
};

export const getProducts = async () => {
    let productos;
    try {
        productos = await axiosInstance.get("/products");
    } catch (error) {
        console.log(error)
    }

    return {
        type: GET_PRODUCTS,
        payload: productos.data.products
    }

}

export const loginUser = async (data, navigate) => {
  try {
    const login = await axiosInstance.post("/users/login", data);
    localStorage.setItem("token", login.data.token);
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }

  return {
    type: LOGIN_USER,
    payload: true,
  };
};

export const createProducts = async (formData, dispatch) => {
    try {
        await axiosInstance.post("/products", formData, {
            headers:{
                "Content-Type":"multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
         })
         Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    } catch (error) {
        console.log(error)
    } finally {
        dispatch(getProducts())
    }
}

export const updateProduct = async (id, formData, dispatch) => {
    console.log(id)
    try {
        await axiosInstance.put(`/products/${ id }`, formData, {
            headers: {
                "Content-Type":"multipart/form-data"
            }
        })
    } catch (error) {
        console.log(error)
    } finally{
        dispatch(getProducts())
    }
}


export const deleteProduct = async (id, dispatch) => {
    try {
        await axiosInstance.delete(`/products/${id}`)
    } catch (error) {
        console.log(error)
    } finally{
        dispatch(getProducts())
    }
}