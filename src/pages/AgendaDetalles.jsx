import { useParams, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useState, useEffect } from 'react';

export default function AgendaDetalles() {
    const { id } = useParams(); // Obtén el ID de la cita desde la URL
    const [cita, setCita] = useState(null);
    const navigate = useNavigate(); // Inicializa el hook useNavigate

    useEffect(() => {
        fetch(`http://localhost:3001/citas/${id}`) // Asegúrate de tener esta ruta en tu servidor
            .then(response => response.json())
            .then(data => setCita(data))
            .catch(error => console.error('Error fetching cita details:', error));
    }, [id]);

    if (!cita) return <p>Cargando...</p>;

    return (
        <div className="p-6">
            <div className="mx-auto max-w-full">
                <div className="flex flex-col gap-6 p-6 shadow-2xl sm:rounded-3xl lg:flex-row lg:gap-12 lg:p-12">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-white tracking-tight sm:text-4xl">Detalles de la Cita</h2>
                        <p><strong>Tipo de cita:</strong> {cita.tipo_cita}</p>
                        <p><strong>Fecha:</strong> {cita.fecha}</p>
                        <p><strong>Hora:</strong> {cita.hora}</p>
                        <p><strong>Nombre:</strong> {cita.nombre_usu} {cita.apellido_usu}</p>
                        <p><strong>Correo:</strong> {cita.correo}</p>
                        <p><strong>Número de autorización:</strong> {cita.numero_autorizacion}</p>
                        <p><strong>Ciudad:</strong> {cita.ciudad}</p>
                        <p><strong>Estado:</strong> {cita.estado}</p>
                        <button
                            onClick={() => navigate(-1)}
                            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-500 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Volver
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}


