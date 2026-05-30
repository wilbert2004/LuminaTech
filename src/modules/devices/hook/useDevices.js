//usesstate y useefect para manejar el estado y los efectos secundarios
import { useState, useEffect } from 'react';
//importamos el servicio para obtener el resumen de dispositivos
import { getResumenDispositivos } from '../service/devicesService';
//importaomos updatar estado de dispositivo
import { actualizarEstadoDispositivo } from '../service/devicesService';
//importamos supabase para crear un canal de suscripcion a cambios en la tabla de dispositivos
import { supabase } from '../../../lib/supebase';
//importamos la base dqlite para mostrar dispositvos ofline 
import { getDevicesLocal } from '../../../database/deviceLocalService';
//use context para obtener el usuario autenticado
import { useContext } from 'react';
//auth context para obtener el usuario autenticado
import { AuthContext } from '../../../context/AuthContext';

//creamos una funcion para manejar la logica de la pantalla de dispositivos
export const UseDevices = () => {
    const [dispositivos, setDispositivos] = useState([]);
    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    //llamamos la funcion 
    useEffect(() => {
        fetchDispositivos();


        //vamos a crea r un intervalo para refrescar la lista de dispositivos cada 5 segundos, esto es para simular una actualizacion en tiempo real
        const channel = supabase
            .channel('public:dispositivos')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'dispositivos' }, (payload) => {
                fetchDispositivos();//refrescar 
            }).subscribe();

        return () => {
            supabase.removeChannel(channel);
        }
    }, [user?.id]);

    //crearemos l funcion de useeffect para obtener los dispositivos de la base de datos
    const fetchDispositivos = async () => {
        //proteccion
        if (!user) return;
        try {
            setLoading(true);
            const data = await getResumenDispositivos(user.id);
            setDispositivos(data);

        } catch (error) {
            console.log("usaremos sql sin internet para obtener los dispositivos");
            const localData = await getDevicesLocal(user.id);
            setDispositivos(localData);
        } finally {
            setLoading(false);
        }
    }

    //creamos una funcion para actualizar el estado de un dispositivo, esta funcion recibira el id del dispositivo y el nuevo estado
    const toggleEstadoDispositivo = async (dispositivo) => {
        try {
            await actualizarEstadoDispositivo(dispositivo.id, !dispositivo.estado);
            //refrescamos la lista de dispositivos despues de actualizar el estado
            fetchDispositivos();
        } catch (error) {
            console.log(error.message);
        }
    }

    return { dispositivos, toggleEstadoDispositivo, loading };
}