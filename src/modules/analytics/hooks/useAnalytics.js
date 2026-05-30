import { useState, useEffect } from 'react';
import { obtenerHistorialLecturas } from '../services/analyticsService';
//usecontext para obtener el usuario autenticado y su perfil, para jalar el historial de lecturas de su perfil
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';


export const useHistorialLecturas = () => {
    const [historialLecturas, setHistorialLecturas] = useState([]);
    const [cargando, setCargando] = useState(false);

    const { user } = useContext(AuthContext);

    const cargarHistorial = async () => {
        //proteccion
        if (!user) {
            return;
        }
        try {
            setCargando(true);
            const datos = await obtenerHistorialLecturas(user.id);
            setHistorialLecturas(datos ?? []);
        } catch (error) {
            console.error('Error al obtener el historial de lecturas:', error);
        } finally {
            setCargando(false);
        }

    }

    useEffect(() => {
        cargarHistorial();
    }, [user])


    return { historialLecturas, cargando, cargarHistorial };

}

export const useAnalytics = useHistorialLecturas;