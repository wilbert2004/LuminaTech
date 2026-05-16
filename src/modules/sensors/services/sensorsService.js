//importamos supabase lib
import { supabase } from '../../../lib/supebase'

//funciona  asincrona para obtener los sensores de un dispositivo
export const getSensores = async (dispositivoId) => {
    const { data, error } = await supabase

        ///jalar los sensores de un dispositivo, junto con sus lecturas mas recientes
        .from('sensores')
        .select('* ,lecturas (valor, fecha)')
    if (error) {
        throw new Error("Error al obtener los sensores: " + error.message);

    }

    return data;
}

