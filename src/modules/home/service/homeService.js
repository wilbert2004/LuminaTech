//importamos supabase para obtener el usuario autenticado
import { supabase } from '../../../lib/supebase'

//creamos una funciona asycrona para jalar de la bd e
export const getPerfil = async (userId) => {
    const { data, error } = await supabase
        .from('perfiles')
        .select('nombre')
        .eq('id', userId)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    //retornamos el nombre del perfil
    return data;
}

//trabajaremos en el resumen de cada dispositivo, para eso crearemos una funcion que jale los datos de cada dispositivo y los resuma en un solo objeto
export const getResumenDispositivos = async (userId) => {

    //dispositivos
    const { count: dispositivos } = await supabase
        .from('dispositivos')
        .select('*', { count: 'exact' })
        .eq('perfil_id', userId);

    //sensores
    const { count: sensores } = await supabase
        .from('sensores')
        .select(`
            *,
            dispositivos!inner (
                perfil_id
            )
        `, { count: 'exact', head: true })
        .eq('dispositivos.perfil_id', userId);

    // luces encendidas
    const { count: activos } = await supabase
        .from('dispositivos')
        .select('*', { count: 'exact', head: true })
        .eq('estado', true)
        .eq('perfil_id', userId);


    return { dispositivos, sensores, activos };


}