//importamos supabase lib
import { supabase } from '../../../lib/supebase'

//funciona  asincrona para obtener los sensores de un dispositivo
export const getSensores = async (userId) => {
    const { data, error } = await supabase

        ///jalar los sensores de un dispositivo, junto con sus lecturas mas recientes
        .from('sensores')
        //seleccionamos los campos del sensor, junto con las lecturas mas recientes y la informacion del dispositivo al que pertenecen
        .select(`
            *,
            lecturas (
                valor,
                fecha
            ),
            dispositivos!inner (
                id,
                nombre,
                ubicacion,
                perfil_id
            )
        `)
        .eq('dispositivos.perfil_id', userId);
    if (error) {
        throw new Error("Error al obtener los sensores: " + error.message);

    }

    return data;
}

