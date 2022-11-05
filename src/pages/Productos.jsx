import React from 'react';
import ProductCard from '../components/ProductCard';
import { productos } from '../data/dataProductos';


const Productos = () => {
  return (
    <div>
        <h1>Productos</h1>
        {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
        ))}
    </div>
  )
}

export default Productos