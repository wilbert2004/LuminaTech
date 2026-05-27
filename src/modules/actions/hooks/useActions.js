//importamos los hooks necesarios
import { useState, useEffect } from 'react';
//importamos el servicio de dispositivos
import { getAcciones, crearAccion } from '../services/actionsService';

//crearemos las funciones necesarias para obtener las acciones y crear una accion
export const useActions = () => {
    const [acciones, setAcciones] = useState([]);
    const [loading, setLoading] = useState(false);


    //los useEffect se ejecutaran cada vez que se cargue el componente, en este caso el screen de acciones, para obtener las acciones
    useEffect(() => {
        fetchAcciones();
    }, []);
    //funcion para obtener las acciones
    const fetchAcciones = async () => {
        try {
            setLoading(true);
            const data = await getAcciones();

            setAcciones(data);
        } finally {
            setLoading(false);
        }
    }

    //funcion para crear una accion
    const encender = async (id) => {
        await crearAccion(id, 'on', 'manual');
        fetchAcciones();
    }

    //funcion para apagar una accion
    const apagar = async (id) => {
        await crearAccion(id, 'off', 'manual');
        fetchAcciones();
    }

    //retornamos las acciones, la funcion para encender, apagar y el loading
    return {
        acciones,
        encender,
        apagar,
        loading,
    }
}