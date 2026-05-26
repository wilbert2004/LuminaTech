//importaremos el servicio para obtener el perfil del usuario
import { getPerfilUsuario } from '../services/profileService';

//importaremos useefect y useState de react para manejar el estado del perfil y cargarlo al iniciar el componente
import { useEffect, useState } from 'react';

//funcion donde usaremos el servicio para obtener el perfil del usuario y manejar el estado del perfil
export const useProfile = (user) => {

    //manejaremso estamods de perfil y getperfil donde empezaron con 0 
    const [perfil, setPerfil] = useState(null);

    //usaremos un estado para cargar  el perfil del usuario al iniciar el componente
    const [loading, setLoading] = useState(true);


    //usaremos el useefect para mostrar todo 
    useEffect(() => {
        const cargarPerfil = async () => {
            if (!user?.id) {
                setPerfil(null);
                setLoading(false);
                return;
            }

            //usaremos un try catch para manejar los errores al cargar el perfil del usuario
            try {
                setLoading(true);
                //obtenemos el perfil del usuario usando el servicio y el id del usuario
                const data = await getPerfilUsuario(user.id);

                //guardamos el perfil del usuario en el estado de perfil
                setPerfil(data);

            } catch (error) {
                //en dado caso que haya error lo mostramos en consola
                console.error("Error al cargar el perfil del usuario:", error);
                setPerfil(null);
            } finally {
                setLoading(false);
            }
        };

        //llamamos la funcion 
        cargarPerfil();
    }, [user?.id])

    return {
        perfil,
        loading,
    }
}