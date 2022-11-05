import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap";

const ProductCard = ({producto}) => {
  console.log(producto)
  return (
    <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src={producto.imagen}
  />
  <CardBody>
    <CardTitle tag="h5">
      {producto.nombre}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {producto.precio}
    </CardSubtitle>
    {/* <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText> */}
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
  );
};

export default ProductCard;
