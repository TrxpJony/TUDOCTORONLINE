export default function Inicio() {
    return (
    
      <div className="">
        <div className="mx-auto max-w-7xl ">
          <div className="relative isolate overflow-hidden     px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >

            </svg>  
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                TuDoctorOnline.
                <br />
                Agenda tu cita hoy.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              TuDoctorOnline es una plataforma diseñada para simplificar el proceso de agendamiento de citas médicas en instituciones prestadoras de servicios (IPS). A diferencia del método tradicional de fila y turno presencial, TuDoctorOnline ofrece una interfaz intuitiva que permite a los pacientes consultar y seleccionar fechas y horarios disponibles para sus consultas médicas. Los usuarios pueden adjuntar el número de autorización del servicio para su validación. Una vez que la IPS verifica los datos, se aprueba el agendamiento y se asignan los turnos tanto a los médicos disponibles como a los pacientes, optimizando así la gestión de citas médicas.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Agenda tu cita
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Mas Informacion <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative pt-20 mt-16 h-80 lg:mt-50">
              <img
                alt="App screenshot"
                src="./src/assets/img/lado.jpg"
                width={300}
                height={300}
                className="-w-none rounded-md "
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  