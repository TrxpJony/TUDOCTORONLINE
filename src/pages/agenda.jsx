import Cookies from "universal-cookie";
import { Card, CardFooter } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

const Agenda = () => {
    const [citas, setCitas] = useState([]);
    const navigate = useNavigate(); 
    const userRol = cookies.get("rol"); // Get the role of the user from the cookies

    useEffect(() => {
        // Ensure only doctors can access this page
        if (userRol !== 'doctor') {
            navigate('/inicio'); // Redirect non-doctors to the home page
            return;
        }

        // Fetch all active appointments from the server
        fetch('http://localhost:3001/citas')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Filter active appointments
                const activeCitas = data.filter(cita => cita.estado === 'Activo');
                setCitas(activeCitas);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [userRol, navigate]);

    const handleCardPress = (citaId) => {
        navigate(`/agenda/${citaId}`);
    };    
    
    return (
        <div className="py-20 sm:py-20 relative isolate overflow-hidden px-10 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-200 lg:pt-10">
            <div className="relative isolate overflow-hidden px-6 py-8 shadow-2xl sm:rounded-3xl sm:px-12 md:py-12 lg:px-16 lg:py-16">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Citas Activas de Pacientes
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {citas.map((cita, index) => (
                        <Card 
                            shadow="sm" 
                            key={index} 
                            isPressable 
                            onPress={() => handleCardPress(cita.id)} 
                        >
                            <CardFooter className="text-small justify-between">
                                <b>{`${cita.tipo_cita}`}</b>
                                <p className="text-default-500">{`${cita.fecha} a las ${cita.hora}`}</p>
                                <p>{`${cita.nombre_usu} ${cita.apellido_usu}`}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Agenda;
