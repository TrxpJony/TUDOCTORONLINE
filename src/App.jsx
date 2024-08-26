import './App.css';
import Login from './pages/login';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Registro from './pages/registro';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./pages/AcmeLogo";
import Inicio from './pages/inicio';
import Servicios from './pages/servicios';
import Agendar from './pages/Citas/agendar';
import Cookies from "universal-cookie";
import Citas from './pages/citas';
import Agendadas from './pages/Citas/agendadas';
import Historico from './pages/Citas/historico';
import Cancelar from './pages/Citas/cancelar';
import CitaDetalles from './pages/Citas/CitaDetalles';
import AgendaDetalles from './pages/AgendaDetalles';
import Agenda from './pages/agenda';

// Obtener cookies
const cookies = new Cookies();

// Mostrar cookies en la consola
console.log("ID del usuario: " + cookies.get("id"));
console.log("Correo del usuario: " + cookies.get("correo"));
console.log("Nombre de usuario: " + cookies.get("usuario"));
console.log("Rol del usuario: " + cookies.get("rol")); // Obtener y mostrar el rol

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const userLoggedIn = !!cookies.get("id");
  const userRole = cookies.get("rol"); // Obtener el rol del usuario

  const handleLogout = () => {
    cookies.remove("id");
    cookies.remove("correo");
    cookies.remove("usuario");
    cookies.remove("rol"); // Elimina el rol al cerrar sesión
    navigate("/login");
  };

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <AcmeLogo />
          <Link href="/inicio" color='foreground'>
            <p className="font-bold text-inherit">TuDoctorOnline</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link 
              color='foreground'
              href="/inicio" 
              className={location.pathname === "/inicio" ? "active-link" : ""}
            >
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              color='foreground'
              href="/servicios" 
              className={location.pathname === "/servicios" ? "active-link" : ""}
            >
              Servicios
            </Link>
          </NavbarItem>
          {userLoggedIn && userRole === "doctor" && (
            <NavbarItem>
              <Link 
                color='foreground'
                href="/agenda" 
                className={location.pathname === "/agenda" ? "active-link" : ""}
              >
                Agenda
              </Link>
            </NavbarItem>
          )}
          {userLoggedIn && userRole !== "doctor" && (
            <NavbarItem>
              <Link 
                color='foreground'
                href="/citas" 
                className={location.pathname === "/citas" ? "active-link" : ""}
              >
                Citas
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarContent justify="end">
          {userLoggedIn ? (
            <>
              <NavbarItem>
                <Button color="error" onClick={handleLogout}>
                  Cerrar Sesión
                </Button>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem className="hidden lg:flex">
                <Link href="/login">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="foreground" href="/registro" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </Navbar>
      <div className='text-white h-[120vh] flex justify-center bg-cover' style={{ backgroundImage: "url('/src/assets/img/fondo.jpg')"}}>
      <Routes>
          <Route path='login' element={<Login />} />
          <Route path='registro' element={<Registro />} />
          <Route path='inicio' element={<Inicio />} />
          <Route path='servicios' element={<Servicios />} />
          <Route path='Agendar' element={<Agendar />} />
          {userRole === "doctor" && (
            <>
              <Route path='agenda' element={<Agenda/>} />
              <Route path="/agenda/:id" element={<AgendaDetalles />} />
            </>
          )}
          {userLoggedIn && userRole !== "doctor" && (
            <>
              <Route path='citas' element={<Citas />} />
              <Route path='agendadas' element={<Agendadas />} />
              <Route path='historico' element={<Historico/>} />
              <Route path="/citas/:id" element={<CitaDetalles />} />
              <Route path="cancelar" element={<Cancelar/>} />
            </>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
