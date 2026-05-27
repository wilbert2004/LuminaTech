//importamos supabase de la carpeta lib
import { supabase } from '../../../lib/supebase'

//funcion para obtener acciones
export const getAcciones = async () => {
    const { data, error } = await supabase
        .from('acciones')
        .select('* , dispositivos (nombre)')
        .order('fecha', { ascending: false });

    //verificamos si hay error
    if (error) throw error;

    return data;
}


//vamos a crear una funcion para crear una accion, esta funcion recibira el id del dispositivo, el tipo de accion y la fecha
export const crearAccion = async (dispositivo_id, accion, origen) => {
    const { data, error } = await supabase
        .from('acciones')
        .insert({ dispositivo_id: dispositivo_id, accion, origen })
        .select();

    //vericamos si hay error
    if (error) throw error;

    return data;

}