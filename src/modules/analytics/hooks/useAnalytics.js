//importa estado sy useffect
import { useState, useEffect } from 'react';
//importamos nuestro servicio de analytics
import { getHistorialLecturas } from '../services/analyticsService';

export const useAnalytics = () => {
    //crearemos estado yo de carga
    const [analytics, setAnalytics] = useState([]);
    const [loading, setLoading] = useState(false);

    //useeffect para jalar los analytics al iniciar el componente
    useEffect(() => {
        //jalamos los analytics al iniciar el componente
        fetchAnalytics();
    }, [])

    //crearemos una funcion para jalar los analytics de un dispositivo
    const fetchAnalytics = async () => {
        try {
            setLoading(true);
            const data = await getHistorialLecturas();
            setAnalytics(data ?? []);
        } catch (error) {
            console.error("Error al obtener los analytics:", error);
        } finally {
            setLoading(false);
        }

    }
    return { analytics, loading, fetchAnalytics };

}