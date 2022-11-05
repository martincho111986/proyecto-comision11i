import React, { useState, useEffect } from 'react'
import FormProducto from '../components/FormProducto'
import Tabla from '../components/Tabla'
import { axiosInstance } from '../config/axiosInstance'

const Dashboard = () => {
  const [productos, setProductos] = useState([]);

  const getProducts = async () => {
    const prod = await axiosInstance.get("/products");
    setProductos(prod.data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])
  

  
  return (
    <div className='dashboard_container'>
      <div><FormProducto /></div>
      <div><Tabla productos={productos} /> </div>
    </div>
  )
}

export default Dashboard