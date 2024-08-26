import Cookies from "universal-cookie";
import { Card, CardFooter } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

const cookies = new Cookies();

export default function Historico() {
    const [citas, setCitas] = useState([]);
    const userId = cookies.get("id"); // Obtener el id del usuario desde las cookies
    const navigate = useNavigate(); // Inicializa el hook useNavigate

    useEffect(() => {
        // Obtener datos desde el servidor JSON
        fetch('http://localhost:3001/citas') // Cambia esta ruta si es necesario
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Filtrar las citas por id del usuario, solo si el usuario_id es una cadena
                if (typeof userId === 'string') {
                    const filteredCitas = data.filter(cita => typeof cita.usuario_id === 'string' && cita.usuario_id === userId);
                    setCitas(filteredCitas);
                } else {
                    // Si userId no es una cadena, no se filtran citas
                    setCitas([]);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [userId]);

    const handleCardPress = (citaId) => {
        navigate(`/citas/${citaId}`);
    };
    

    return (
        <div className="py-20 sm:py-20 relative isolate overflow-hidden px-10 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-200  lg:pt-10">
        <div className="relative isolate overflow-hidden px-6 py-8 shadow-2xl sm:rounded-3xl sm:px-12 md:py-12 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-2xl lg:text-center">
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Historial de Citas
                </p>
            </div> <div className="mt-6 gap-2 grid grid-cols-2 sm:grid-cols-4">
                        {citas.map((cita, index) => (
                            <Card 
                                shadow="sm" 
                                key={index} 
                                isPressable 
                                onPress={() => handleCardPress(cita.id)} // Usa el nuevo manejador
                            >
                                <CardFooter className="text-small justify-between">
                                    <b>{`${cita.tipo_cita}`}</b>
                                    <p className="text-default-500">{`${cita.fecha} a las ${cita.hora}`}</p>
                                    <p>{`${cita.nombre_usu} ${cita.apellido_usu}`}</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
            <button
                onClick={() => navigate(-1)}
                className="mt-10 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Volver
            </button>
                </div>
            </div>
    );
}
