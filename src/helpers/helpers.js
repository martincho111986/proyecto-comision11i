//import { axiosInstance } from "../config/axiosInstance"
//import Swal from 'sweetalert2';
//
//export const crearProducto = async (formData) => {
//    try {
//        await axiosInstance.post("/products", formData, {
//            headers:{
//                "Content-Type":"multipart/form-data"
//            }
//         })
//         Swal.fire({
//            position: 'top-end',
//            icon: 'success',
//            title: 'Your work has been saved',
//            showConfirmButton: false,
//            timer: 1500
//          })
//    } catch (error) {
//        console.log(error)
//    }
//}