//importamos supabse
import { supabase } from '../../../lib/supebase'

//creamos una funcion para obtener el resumen de los dispositivos, sensores y luces encendidas
export const getResumenDispositivos = async () => {
    const { data, error } = await supabase
        .from('dispositivos')
        .select('*');

    if (error) throw error;
    //devolvemos los datos 
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