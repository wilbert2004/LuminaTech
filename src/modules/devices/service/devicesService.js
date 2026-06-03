//importamos supabse
import { supabase } from '../../../lib/supebase'
//importamos la funcion para guardar el dispositivo localmente
import { saveDeviceLocal } from '../../../database/deviceLocalService';
//creamos una funcion para obtener el resumen de los dispositivos, sensores y luces encendidas
export const getResumenDispositivos = async (userId) => {
    const { data, error } = await supabase
        .from('dispositivos')
        .select(`*,
    sensores (
        id,
        tipo,
        unidad
    )
`)
        .eq('perfil_id', userId);

    if (error) throw error;
    //guardamos los dispositivos localmente
    for (const device of data) {
        await saveDeviceLocal(device, userId);
    }
    return data;
}


//crearemos una funcion para actualizar el estado de un dispositivo, esta funcion recibira el id del dispositivo y el nuevo estado
export const actualizarEstadoDispositivo = async (id, estadoActual) => {

    const { data, error } = await supabase
        .from('dispositivos')
        .update({ estado: estadoActual })
        .eq('id', id)
        .select()

    if (error) throw error;

    return data;

}