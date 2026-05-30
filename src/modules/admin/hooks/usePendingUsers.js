//usar useefect , estados 
import { useEffect, useState } from 'react';

//importas los funciones de service
import { obtenerUsuarios, aprobarUsuario } from '../services/adminService';

//funcion para darlo en uso 
export const useAdmin = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    const cargarUsuarios = async () => {
        try {
            setLoading(true);
            const data = await obtenerUsuarios();
            setUsuarios(data);
        } catch (error) {
            console.error("Error al cargar usuarios pendientes:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        cargarUsuarios();
    }, []);

    //funcion para aprobar usuario
    const aprobar = async (userId) => {
        try {
            await aprobarUsuario(userId);
            // Luego de aprobar, recargamos la lista de usuarios pendientes
            cargarUsuarios();
        } catch (error) {
            console.error("Error al aprobar usuario:", error);
        }
    }

    //luego queremos que nos devuelva el valor de cada estado
    return { usuarios, loading, aprobar };

}