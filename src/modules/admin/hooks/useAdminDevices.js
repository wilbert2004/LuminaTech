//usaremos los useeffect y useState para manejar el estado de los dispositivos y su carga
import { useState, useEffect } from 'react';


//importamos los servicios para obtener los usuarios activos,  y crear dispositivos con sensores
import { obtenerUsuariosActivos, crearDispositivoConSensores } from '../services/adminService';

//funcion de nuestro hook de admin devices
export const useAdminDevices = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [guardando, setGuardando] = useState(false);

    //funcion para cargar los usuarios activos
    const cargarUsuarios = async () => {
        try {
            setCargando(true);
            const data = await obtenerUsuariosActivos();
            setUsuarios(data ?? []);
        } catch (error) {
            console.error('Error al obtener los usuarios activos:', error);
        } finally {
            setCargando(false);
        }
    }

    //crear dispositivo con sensores
    const crearDispositivo = async (nombre, ubicacion, perfilId) => {
        try {
            setGuardando(true);
            await crearDispositivoConSensores(nombre, ubicacion, perfilId);
            return true;
        } catch (error) {
            console.error('Error al crear el dispositivo:', error);
            return false;
        } finally {
            setGuardando(false);
        }
    }

    //useeffect para cargar los usuarios al iniciar el componente
    useEffect(() => {
        cargarUsuarios();
    }, [])

    //retornamos los usuarios, el estado de carga, el estado de guardado y la funcion para crear dispositivos
    return { usuarios, cargando, guardando, cargarUsuarios, crearDispositivo };
}