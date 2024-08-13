import {DateInput} from "@nextui-org/react";
import {CalendarDate} from "@internationalized/date";

export default function Agendar() {
return (
  <div className="py-24 sm:py-32 relative isolate overflow-hidden     px-6  shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-60 lg:pt-28">
    <form>
        <div className="border-b border-gray-900/10 pt-10 ">

        <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-white text-3xl font-bold tracking-tight text-white sm:text-4xl">Agenda tu cita</h2>
        <p className="mt-1 text-sm leading-6 text-gray-300">Proporciona tu informacion.</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                Nombre
            </label>
            <div className="mt-2">
                <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-whitr">
                Apellido
            </label>
            <div className="mt-2">
                <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Correo
            </label>
            <div className="mt-2">
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                Tipo de cita
            </label>
            <div className="mt-2">
                <select
                id="type-cite"
                name="type-cite"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                <option value={1}>Consulta General</option>
                <option value={2}>Especialidad Médica</option>
                <option value={3}>Consulta de Seguimiento</option>
                <option value={4}>Servicio de Diagnóstico</option>
                </select>
            </div>
            </div>

            <div className="col-span-full">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

    </div>
    </div>

            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-white">
                Fecha de cita
              </label>
              <div className="mt-2">
              <DateInput placeholderValue={new CalendarDate(2024, 11, 6)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:max-w-xs sm:text-sm sm:leading-6" /> 
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-white">
                Ciudad
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>
                </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-500 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  )
}

