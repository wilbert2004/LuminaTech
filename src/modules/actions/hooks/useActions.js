import { useState, useEffect } from 'react';
import { obtenerAcciones, crearAccion, obtenerDispositivosUsuario } from '../services/actionsService';
//usecontext para obtener el usuario autenticado y su perfil, para jalar el historial de lecturas de su perfil
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

export const useAcciones = () => {
    const [acciones, setAcciones] = useState([]);
    const [cargando, setCargando] = useState(false);
    const { user } = useContext(AuthContext);
    const [dispositivos, setDispositivos] = useState([]);
    const [dispositivoSeleccionado, setDispositivoSeleccionado] = useState(null);

    const cargarAcciones = async () => {
        //proteccion
        if (!user) {
            return;
        }
        try {
            setCargando(true);
            const datos = await obtenerAcciones(user.id);
            setAcciones(datos ?? []);
        } catch (error) {
            console.error('Error al obtener las acciones:', error);
        } finally {
            setCargando(false);
        }
    }
    const encenderDispositivo = async (id) => {

        //proteccion
        if (!user) {
            return;
        }
        try {
            await crearAccion(id, 'on', 'manual', user.id);
            await cargarAcciones();
        } catch (error) {
            console.error(error.message);
            alert(error.message);
        }
    }

    const apagarDispositivo = async (id) => {
        //proteccion

        if (!user) {
            return;
        }
        try {
            await crearAccion(id, 'off', 'manual', user.id);
            await cargarAcciones();
        } catch (error) {
            console.error(error.message);

            alert(error.message);
        }
    }

    //cargar dispositivos del usuario para mostrar en el historial de acciones
    const cargarDispositivos = async () => {
        //proteccion
        if (!user) return;

        try {
            const data = await obtenerDispositivosUsuario(user.id);

            setDispositivos(data ?? []);

            if (data?.length > 0 && !dispositivoSeleccionado) {
                setDispositivoSeleccionado(data[0]);
            }
        } catch (error) {
            console.error('Error al obtener dispositivos:', error.message);
        }
    }

    useEffect(() => {
        cargarDispositivos();
        cargarAcciones();
    }, [user]);



    return {
        acciones,
        cargarAcciones,
        encenderDispositivo,
        apagarDispositivo,
        cargando,
        dispositivos,
        dispositivoSeleccionado,
        setDispositivoSeleccionado,
    }
}

export const useActions = useAcciones;