import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
   // const navigate = useNavigate();
   // const location = useLocation();


    const handleNavigate = () => {
        //ejecutar alguna accion
        //navegar a otra ruta
        //navigate('/', {state: {nombre: 'Martin'}})
    }
  return (
    <div className='navigation'>
        {/* <NavLink to="/" className='brand-name'>Logo</NavLink> */}
        <button onClick={handleNavigate}>mover</button>
        <button onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }} className='hamburger'>icono</button>
        <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'clicked' : 'link' } to='/'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'clicked' : 'link' } to="/contacto">Contacto</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'clicked' : 'link' } to="/registro">Registro</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'clicked' : 'link' } to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'clicked' : 'link' } to="/productos">Productos</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar