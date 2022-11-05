import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import './generalStyles.css'

import { crearProducto } from "../helpers/helpers";

const FormProducto = () => {
const [dataForm, setDataForm] = useState({})
const [imgFile, setImgFile] = useState([]);

const handleChange = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
}
const handleFiles = (e) => {
    setImgFile([...e.target.files])
}

const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("nombre", dataForm.nombre);
    formData.append('precio', dataForm.precio);
    formData.append("descripcion", dataForm.descripcion);
    formData.append('imagen', imgFile[0]);
    formData.append("categoria", dataForm.categoria);
    formData.append("stock", dataForm.stock);
    crearProducto(formData)
}

  return (
    <div className="form_product_container">
      <Form className="form_producto" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Nombre</Label>
          <Input
            name="nombre"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Precio</Label>
          <Input
            name="precio"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Descripcion</Label>
          <Input
            name="descripcion"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Foto del producto</Label>
          <Input
            name="imagen"
            type="file"
            onChange={handleFiles}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Categoria</Label>
          <Input
            name="categoria"
            type="select"
            onChange={handleChange}
          >
            <option>Seleccione una categoria</option>
            <option value="marvel">Marvel</option>
            <option value="dc">DC</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Stock</Label>
          <Input
            name="stock"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default FormProducto;
