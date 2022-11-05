import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from "reactstrap";

const ModalEdit = ({modal, setModal, toggle, producto}) => {
  console.log(producto)
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form className="form_producto" >
        <FormGroup>
          <Label for="exampleEmail">Nombre</Label>
          <Input
            name="nombre"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Precio</Label>
          <Input
            name="precio"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Descripcion</Label>
          <Input
            name="descripcion"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Foto del producto</Label>
          <Input
            name="imagen"
            type="file"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Categoria</Label>
          <Input
            name="categoria"
            type="select"
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
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalEdit;
