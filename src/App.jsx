import './App.css'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'
import Registro from './pages/registro'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./pages/AcmeLogo";
import Inicio from './pages/inicio';
import Servicios from './pages/servicios';
import Agendar from './pages/agendar';



function App() {
  
  return (
    <>
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">TuDoctorOnline</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/inicio">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/servicios" aria-current="page">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/agendar">
            Agenda tu cita
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/registro" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ backgroundImage: "url('/src/assets/img/fondo.jpg')"}}>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='registro' element={<Registro/>}/>
        <Route path='inicio' element={<Inicio/>}/>
        <Route path='servicios' element={<Servicios/>}/>
        <Route path='Agendar' element={<Agendar/>}/>
      </Routes>
    </div>
      
    </>
  )
}

export default App




