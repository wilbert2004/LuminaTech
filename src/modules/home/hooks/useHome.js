//importamos los usestate y useeffect para manejar el estado y los efectos secundarios
import { useState, useEffect } from 'react';
//importamos el servicio para obtener el perfil
import { getPerfil } from '../service/homeService';
//creamos una funcion para manejar la logica de la pantalla de home
import { getResumenDispositivos } from '../service/homeService';


//creamos una funcion para manejar la logica de la pantalla de home
export const UseHome = (user) => {
    //definimos los estados para el perfil y el error
    const [perfil, setPerfil] = useState('');
    const [loading, setLoading] = useState(true);

    //agregamos estados para nuestro resumen de dispositivos
    const [resumen, setResumen] = useState({
        dispositivos: 0,
        sensores: 0,
        activos: 0
    });

    //definimos un efecto para obtener el perfil del usuario
    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const data = await getPerfil(user.id);
                setPerfil(data.nombre);
            } catch (error) {
                console.error('Error al obtener el perfil:', error);
            } finally {
                setLoading(false);
            }
        };
        if (user) {
            fetchPerfil();
        } else {
            setLoading(false);
        }


        //obtenemos el resumen de dispositivos
        const fetchResumen = async () => {
            try {
                const data = await getResumenDispositivos();
                setResumen(data);
            } catch (error) {
                console.error('Error al obtener el resumen de dispositivos:', error);
            }
        };

        if (user) {
            fetchResumen();
        }
    }, [user]);

    //retornamos el perfil y el estado de carga
    return { nombre: perfil, loading, resumen };
}