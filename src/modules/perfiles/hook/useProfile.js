import { useEffect, useState } from 'react';
import { obtenerPerfilUsuario } from '../services/profileService';

export const usePerfil = (user) => {
    const [perfil, setPerfil] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return {
        perfil,
        loading,
    }
}

export const useProfile = usePerfil;