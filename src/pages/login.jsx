import { Link } from "react-router-dom";
import "../css/login.css"
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
const Login = () => {
  return(
      <div className="contenedor">
        <div className= "bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
          <h1 className="text-4xl text-white-bold text-center mb-6">Login</h1>
          <form action="">  
          <div className="relative my-8">
            <input type="email" className="input block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer"placeholder=""/>
            <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y--2 peer-focus:scale-75">Correo</label>
            <CiUser className="absolute top-0 right-4"/>
          </div>
          <div className="relative my-8">
            <input type="password" className="input block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer"placeholder=""/>
            <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y--2 peer-focus:scale-75">Contraseña</label>
            <RiLockPasswordLine className="absolute top-0 right-4"/>
          </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remember Me">Recuerdame</label>
              </div>
              <Link to="" className="text-blue-950">Olvidaste la contraseña?</Link>
            </div>
            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-500 hover:bg-blue-400 hover:text-white py-2 transition-colors duration-300" type="submit">Login</button>
              <div>
                <span className="m-4">¿Eres nuevo? <Link className="text-blue-950" to="/registro">Crear cuenta</Link></span>
            </div>
          </form>
          </div>
      </div>
  )
}
export default Login;