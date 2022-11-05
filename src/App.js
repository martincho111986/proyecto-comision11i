import './App.css';
import Navbar from './components/Navbar/Navbar';
//import Registro from './components/Registro';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Registro from './pages/Registro';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import RutasPrivadas from './Routes/RutasPrivadas';
import Dashboard from './pages/Dashboard';
import Productos from './pages/Productos';


function App() {
  return (
    <div className="App">
      {/* <Registro /> */}
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registro' element={<Registro string={"hola mundo"} />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/login' element={<Login />} />
          <Route path='/productos' element={<Productos />} />
          <Route element={<RutasPrivadas/>}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
//SPA Single Page Application