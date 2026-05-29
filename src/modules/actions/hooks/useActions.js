import { useState, useEffect } from 'react';
import { obtenerAcciones, crearAccion } from '../services/actionsService';

export const useAcciones = () => {
    const [acciones, setAcciones] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        cargarAcciones();
    }, []);

    const cargarAcciones = async () => {
        try {
            setCargando(true);
            const datos = await obtenerAcciones();
            setAcciones(datos ?? []);
        } catch (error) {
            console.error('Error al obtener las acciones:', error);
        } finally {
            setCargando(false);
        }
    }

    const encenderDispositivo = async (id) => {
        await crearAccion(id, 'on', 'manual');
        await cargarAcciones();
    }

    const apagarDispositivo = async (id) => {
        await crearAccion(id, 'off', 'manual');
        await cargarAcciones();
    }

    return {
        acciones,
        cargarAcciones,
        encenderDispositivo,
        apagarDispositivo,
        cargando,
    }
}

export const useActions = useAcciones;