import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import FormProducto from '../components/FormProducto'
import Tabla from '../components/Tabla'
import { axiosInstance } from '../config/axiosInstance'
import { getProducts, getUsers } from '../context/UserActions'
import { UserContext } from '../context/UserContext'

const Dashboard = () => {
  const {state, dispatch} = useContext(UserContext);
  console.log(state)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getUsers())
  }, [])
  
  return (
    <div className='dashboard_container'>
      <div><FormProducto /></div>
      <div><Tabla productos={state?.productos} /> </div>
    </div>
  )
}

export default Dashboard