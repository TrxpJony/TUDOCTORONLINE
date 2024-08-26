import { DateInput } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export default function Agendar() {
  const cookies = new Cookies();
  const userId = cookies.get("id"); 
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({});
  const [isConfirming, setIsConfirming] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const fetchAvailableTimes = () => {
    const mockTimes = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"];
    setAvailableTimes(mockTimes);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchAvailableTimes(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirming(true);
  };

  const handleConfirm = async () => {
    const citaData = {
      usuario_id: userId,
      nombre_usu: formData['first-name'],
      apellido_usu: formData['last-name'],
      correo: formData['email'],
      tipo_cita: formData['type-cite'],
      numero_autorizacion: formData['auth-number'],
      fecha: selectedDate ? selectedDate.toString() : 'No seleccionada',
      hora: selectedTime,
      ciudad: formData['city'],
      estado: "Activo"
    };
  
    try {
      const response = await fetch('http://localhost:3001/citas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(citaData),
      });
  
      if (response.ok) {
        setShowAlert(true); // Mostrar alerta
        setTimeout(() => {
          navigate('/citas'); // Redirigir a citas agendadas después de 2 segundos
        }, 2000);
      } else {
        console.error('Error al agendar la cita');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (showAlert) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-xl  text-black font-semibold">Cita Agendada</h2>
          <p className="mt-2 text-black">Tu cita ha sido agendada exitosamente.</p>
        </div>
      </div>
    );
  }

  if (isConfirming) {
    return (
      <div className="py-20 sm:py-20 relative isolate overflow-hidden px-10 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-200 lg:px-60 lg:pt-20">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white tracking-tight sm:text-4xl">Confirmación de cita</h2>
          <p className="mt-1 text-sm leading-6 text-gray-300">Por favor, confirma los detalles de tu cita:</p>
          <div className="mt-10">
            <p><strong>Nombre:</strong> {formData['first-name']}</p>
            <p><strong>Apellido:</strong> {formData['last-name']}</p>
            <p><strong>Correo:</strong> {formData['email']}</p>
            <p><strong>Tipo de cita:</strong> {formData['type-cite']}</p>
            <p><strong>Número de Autorización:</strong> {formData['auth-number']}</p>
            <p><strong>Fecha de cita:</strong> {selectedDate ? selectedDate.toString() : 'No seleccionada'}</p>
            <p><strong>Horario disponible:</strong> {selectedTime}</p>
            <p><strong>Ciudad:</strong> {formData['city']}</p>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" onClick={handleBack} className="text-sm font-semibold leading-6 text-gray-900">
              Regresar
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-500 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 sm:py-20 relative isolate overflow-hidden px-6 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-60 lg:pt-10">
      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pt-10 ">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white  tracking-tight sm:text-4xl">Agenda tu cita</h2>
            <p className="mt-1 text-sm leading-6 text-gray-300">Proporciona tu información.</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">Nombre</label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">Apellido</label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Correo</label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="type-cite" className="block text-sm font-medium leading-6 text-white">Tipo de cita</label>
                <div className="mt-2">
                  <select
                    id="type-cite"
                    name="type-cite"
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:max-w-xs sm:text-sm sm:leading-6"
                  > 
                    <option value="seleccionar">seleccionar</option>
                    <option value="Consulta General">Consulta General</option>
                    <option value="Especialidad Médica">Especialidad Médica</option>
                    <option value="Consulta de Seguimiento">Consulta de Seguimiento</option>
                    <option value="Servicio de Diagnóstico">Servicio de Diagnóstico</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="auth-number" className="block text-sm font-medium leading-6 text-white">Número de Autorización</label>
                <div className="mt-2">
                  <input
                    id="auth-number"
                    name="auth-number"
                    type="text"
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="appointment-date" className="block text-sm font-medium leading-6 text-white">Fecha de cita</label>
                <div className="mt-1">
                  <DateInput
                    value={selectedDate}
                    onChange={handleDateChange}
                    placeholderValue={new CalendarDate(2024, 11, 6)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="time" className="block text-sm font-medium leading-6 text-white">Horarios Disponibles</label>
                <div className="mt-2">
                  <select
                    id="time"
                    name="time"
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {availableTimes.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-white">Ciudad</label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-500 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Regresar
          </button>
        </div>
      </form>
    </div>
  );
}
