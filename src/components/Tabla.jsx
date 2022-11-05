import React, { useState } from "react";
import { Table } from "reactstrap";
import { axiosInstance } from "../config/axiosInstance";
import { FaEdit } from 'react-icons/fa';
import {RiDeleteBin2Line} from 'react-icons/ri'
import ModalEdit from "./Modal/ModalEdit";


const Tabla = ({productos}) => {
    const [modal, setModal] = useState(false);

    const toggle = (producto) => {
        setModal(!modal)
        return <ModalEdit modal={modal} setModal={setModal} toggle={toggle} producto={producto} />
    };
  

    const borrarProducto = async (id) => {
        console.log(id)
        try {
            await axiosInstance.delete(`/products/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Stock</th>
            <th> Categoria</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {productos.map((producto) => (
                <tr key={producto._id}>
                <th scope="row">{producto._id}</th>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.stock}</td>
                <td>{producto.categoria}</td>
                <td>{producto.precio}</td>
                <td><img src={producto.imagen} width="50" alt="" /></td>
                <td>
                    <button onClick={() => borrarProducto(producto._id)}><RiDeleteBin2Line/></button>
                    <button onClick={() => toggle(producto)}><FaEdit/></button>
                </td>
                
          </tr>
            ))}
          
        </tbody>
      </Table>
      
    </div>
  );
};

export default Tabla;
