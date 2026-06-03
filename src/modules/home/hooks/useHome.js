//importamos los usestate y useeffect para manejar el estado y los efectos secundarios
import { useState, useEffect } from 'react';
//importamos el servicio para obtener el perfil
import { getPerfil } from '../service/homeService';
//creamos una funcion para manejar la logica de la pantalla de home
import { getResumenDispositivos } from '../service/homeService';
//importamos el servicio para obtener la ultima actividad
import { getUltimaActividad } from '../service/homeService';


//creamos una funcion para manejar la logica de la pantalla de home
export const UseHome = (user) => {
    //definimos los estados para el perfil y el error
    const [perfil, setPerfil] = useState('');
    const [loading, setLoading] = useState(true);
    //usaremos estados para manejar el resumen de dispositivos, sensores y activos
    const [ultimaActividad, setUltimaActividad] = useState(null);
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
                const data = await getResumenDispositivos(user.id);
                setResumen(data);
            } catch (error) {
                console.error('Error al obtener el resumen de dispositivos:', error);
            }
        };



        //obtenemos la ultima actividad
        const fetchUltimaActividad = async () => {
            try {
                const data = await getUltimaActividad(user.id);
                setUltimaActividad(data);
            } catch (error) {
                console.error('Error al obtener la última actividad:', error);
            }
        };

        if (user) {
            fetchResumen();
            fetchUltimaActividad();
            fetchPerfil();
        }
    }, [user]);

    //retornamos el perfil y el estado de carga
    return { nombre: perfil, loading, resumen, ultimaActividad };
}