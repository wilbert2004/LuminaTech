import { useEffect, useState } from 'react';
import { obtenerPerfilUsuario } from '../services/profileService';
//importamos nuestro servicio de actualizar el nombre del perfil
import { actualizarNombrePerfil } from '../services/profileService';

export const usePerfil = (user) => {
    const [perfil, setPerfil] = useState(null);
    const [loading, setLoading] = useState(true);
    // Función para actualizar el nombre del perfil del usuario


    useEffect(() => {
        const cargarPerfil = async () => {
            if (!user?.id) {
                setPerfil(null);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const data = await obtenerPerfilUsuario(user.id);
                setPerfil(data);

            } catch (error) {
                console.error('Error al cargar el perfil del usuario:', error);
                setPerfil(null);
            } finally {
                setLoading(false);
            }
        };

        cargarPerfil();
    }, [user?.id])

    // Función para actualizar el nombre del perfil del usuario
    const actualizarNombre = async (nuevoNombre) => {
        try {
            const data = await actualizarNombrePerfil(user.id, nuevoNombre);
            setPerfil(data); // Actualizamos el estado del perfil con los nuevos datos
            return true;
        } catch (error) {
            console.error('Error al actualizar el nombre del perfil:', error);
            return false;
        } finally {
            setLoading(false);
        }

    }

    return {
        perfil,
        loading,
        actualizarNombre, // Exportamos la función para actualizar el nombre del perfil
    }
}

export const useProfile = usePerfil;