import React, { useState } from 'react'
import axios from "axios";
//import { useLocation } from 'react-router-dom'

const Home = () => {
  const [dataForm, setDataForm] = useState({});

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    await axios.post("http://localhost:4040/algo", dataForm)
  }
  console.log(dataForm)
  //const location = useLocation();
  //console.log(location.state);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Nombre</label>
        <input type="text" name="nombre" onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="">Apellido</label>
        <input type="text" name="apellido" onChange={handleChange}/>
      </div>
      <div>
        <button type='submit'>enviar</button>
      </div>
    </form>
  )
}

export default Home