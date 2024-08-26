import {  RectangleStackIcon, InboxArrowDownIcon,  CloudIcon, CheckIcon } from '@heroicons/react/24/outline'



const features = [
  {
    name: 'Consulta General',
    description:
      'Cita con un médico general para evaluación inicial, chequeos de rutina y tratamiento de afecciones comunes.',
    icon: RectangleStackIcon,
  },
  {
    name: 'Especialidad Médica',
    description:
      'Citas con médicos especialistas como cardiólogos, dermatólogos, ortopedistas, entre otros, para atención específica según la necesidad del paciente.',
    icon: InboxArrowDownIcon,
  },
  {
    name: 'Consultas de Seguimientos',
    description:
      'Programación de citas de seguimiento para continuar con tratamientos o monitorear el progreso de alguna enfermedad o condición.',
    icon: CloudIcon,
  },
  {
    name: 'Servicios de Diagnóstico',
    description:
      'Agendamiento de citas para pruebas diagnósticas como radiografías, análisis de sangre, ultrasonidos, etc.',
    icon: CheckIcon,
  },
]

const Servicios = () => {
  return (
    <div className="">
    <div className="mx-auto max-w-7xl ">
    <div className=" py-24 sm:py-32 relative isolate overflow-hidden     px-6 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto pt-20 max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nuestros servicios
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            TuDoctorOnline es una plataforma de agendamiento de citas médicas diseñada para optimizar el proceso de programación en las IPS. Con el objetivo de modernizar y simplificar el agendamiento de citas, la plataforma ofrece una interfaz fácil de usar tanto para pacientes como para los administradores de salud. En TuDoctorOnline te ofrecemos distintos tipos de citas:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-blue-500"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Servicios