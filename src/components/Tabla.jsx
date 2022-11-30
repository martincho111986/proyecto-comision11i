import React, { useState } from "react";
import { Table } from "reactstrap";
import { axiosInstance } from "../config/axiosInstance";
import { FaEdit } from 'react-icons/fa';
import {RiDeleteBin2Line} from 'react-icons/ri'
import ModalEdit from "./Modal/ModalEdit";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { deleteProduct } from "../context/UserActions";


const Tabla = ({productos}) => {
    const [modal, setModal] = useState(false);
    const [productSelected, setProductSelected] = useState()
    const { dispatch } = useContext(UserContext)

    const toggle = (producto) => {
        setModal(!modal)
        setProductSelected(producto)
        return 
    };

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
                    <button onClick={() => deleteProduct(producto._id, dispatch)}><RiDeleteBin2Line/></button>
                    <button onClick={() => toggle(producto)}><FaEdit/></button>
                </td>
                
          </tr>
            ))}
          
        </tbody>
      </Table>
      <ModalEdit modal={modal} setModal={setModal} toggle={toggle} producto={productSelected} />
    </div>
  );
};

export default Tabla;
