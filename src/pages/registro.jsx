import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // Nuevo estado para nombre de usuario
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validación simple
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
  
    const newUser = {
      correo: email,
      contraseña: password,
      usuario: username, // Usar el nombre de usuario ingresado
      rol: "paciente", // Asignar automáticamente el rol de "paciente"
    };
  
    try {
      const response = await fetch("http://localhost:3001/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
  
      if (response.ok) {
        alert("Registro exitoso"); // Ventana emergente de confirmación
        navigate("/login"); // Redirigir al login
      } else {
        console.log("Error al registrar el usuario");
      }
    } catch (error) {
      console.error("Error en la conexión con la API", error);
    }
  };
  
  return (
    <div className="">
      <div className="mx-auto max-w-7xl ">
        <div className="py-24 sm:py-20 relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-60 lg:pt-10">
          <div className="contenedor pt-10">
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
              <h1 className="text-4xl text-white-bold text-center mb-6">Sign Up</h1>
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="relative my-8">
                  <input
                    type="text"
                    className="input block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer"
                    placeholder=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label
                    htmlFor=""
                    className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y--2 peer-focus:scale-75"
                  >
                    Nombre de usuario
                  </label>
                  <CiUser className="absolute top-0 right-4" />
                </div>
                <div className="relative my-8">
                  <input
                    type="email"
                    className="input block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label
                    htmlFor=""
                    className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y--2 peer-focus:scale-75"
                  >
                    Correo
                  </label>
                  <CiUser className="absolute top-0 right-4" />
                </div>
                <div className="relative my-8">
                  <input
                    type="password"
                    className="input block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor=""
                    className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y--2 peer-focus:scale-75"
                  >
                    Contraseña
                  </label>
                  <RiLockPasswordLine className="absolute top-0 right-4" />
                </div>
                <div className="relative my-8">
                  <input
                    type="password"
                    className="input block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer"
                    placeholder=""
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor=""
                    className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y--2 peer-focus:scale-75"
                  >
                    Confirmar contraseña
                  </label>
                  <RiLockPasswordLine className="absolute top-0 right-4" />
                </div>
                <button
                  className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-500 hover:bg-blue-400 hover:text-white py-2 transition-colors duration-300"
                  type="submit"
                >
                  Sign Up
                </button>
                <div>
                  <span className="m-4">
                    ¿Ya estás registrado?{" "}
                    <Link className="text-blue-950" to="/login">
                      Iniciar sesión
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
