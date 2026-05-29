import { useState, useEffect } from 'react';
import { obtenerHistorialLecturas } from '../services/analyticsService';

export const useHistorialLecturas = () => {
    const [historialLecturas, setHistorialLecturas] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        cargarHistorial();
    }, [])

    const cargarHistorial = async () => {
        try {
            setCargando(true);
            const datos = await obtenerHistorialLecturas();
            setHistorialLecturas(datos ?? []);
        } catch (error) {
            console.error('Error al obtener el historial de lecturas:', error);
        } finally {
            setCargando(false);
        }

    }
    return { historialLecturas, cargando, cargarHistorial };

}

export const useAnalytics = useHistorialLecturas;