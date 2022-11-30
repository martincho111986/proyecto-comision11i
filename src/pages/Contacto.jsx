import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Contacto = () => {
  const { usuario } = useContext(UserContext);
  console.log(usuario)
  return (
    <div>Contacto</div>
  )
}

export default Contacto