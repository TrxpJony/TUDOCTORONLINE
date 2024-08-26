const links = [
    { name: 'Angenda tu Cita', href: '/agendar' },
    { name: 'Historico de Citas', href: '/Historico' },
    { name: 'Citas Agendadas', href: '/Agendadas' },
    { name: 'Cancelar Citas', href: '/cancelar' },
  ]

  
  export default function Citas() {
    return (
    <div className="">
    <div className="mx-auto max-w-7xl ">  
    <div className="py-20 sm:py-20 relative isolate overflow-hidden px-6 pt-10 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-10 lg:flex lg:gap-x-20 lg:px-60 lg:pt-10">
      <div className="relative isolate overflow-hidden py-20 sm:py-32">

        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr  opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Bienvenido a TuDoctorOnline</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Gestiona tus citas de manera sencilla y eficiente. Accede al historial de tus citas anteriores, consulta las citas que tienes agendadas y realiza cambios con facilidad: cancela o agenda nuevas citas según tus necesidades. ¡Simplifica tu vida y mantén el control de tu tiempo con nuestra plataforma!
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
  }
  