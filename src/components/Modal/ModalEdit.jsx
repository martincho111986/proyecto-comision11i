import React, { useState, useRef, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from "reactstrap";
import { axiosInstance } from "../../config/axiosInstance";
import { updateProduct } from "../../context/UserActions";
import { UserContext } from "../../context/UserContext";

const ModalEdit = ({modal, setModal, toggle, producto}) => {
  const {state, dispatch} = useContext(UserContext)

  const [imgFile, setImgFile] = useState([]);
  const nombreRef = useRef();
  const precioRef = useRef();
  const descripcionRef = useRef();
  const categoriaRef = useRef();
  const stockRef = useRef();
const handleFile = (e) => {
  setImgFile([...e.target.files])
}

const handleSubmit = async (e) => {
  e.preventDefault();
  let formData = new FormData();
  formData.append("nombre", nombreRef.current.value);
  formData.append("precio", precioRef.current.value);
  formData.append('descripcion', descripcionRef.current.value);
  formData.append("imagen", imgFile[0]);
  formData.append("categoria", categoriaRef.current.value);
  formData.append("stock", stockRef.current.value);
  updateProduct(producto._id, formData, dispatch)
}

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form className="form_producto" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Nombre</Label>
          <Input
            innerRef={nombreRef}
            name="nombre"
            type="text"
            defaultValue={producto?.nombre}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Precio</Label>
          <Input
          innerRef={precioRef}
            name="precio"
            type="number"
            defaultValue={producto?.precio}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Descripcion</Label>
          <Input
          innerRef={descripcionRef}
            name="descripcion"
            type="text"
            defaultValue={producto?.descripcion}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Foto del producto</Label>
          <Input
            name="imagen"
            type="file"
            onChange={handleFile}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Categoria</Label>
          <Input
          innerRef={categoriaRef}
            name="categoria"
            type="select"
            defaultValue={producto?.categoria}
          >
            <option>Seleccione una categoria</option>
            <option value="marvel">Marvel</option>
            <option value="dc">DC</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Stock</Label>
          <Input
          innerRef={stockRef}
            name="stock"
            type="number"
            defaultValue={producto?.stock}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalEdit;
