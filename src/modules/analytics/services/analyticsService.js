//lib de  supabase para jalar datos de la base de datos
import { supabase } from '../../../lib/supebase'

//funcion asincrona de obtener historial de lecturas de un sensor
export const getHistorialLecturas = async () => {
    const { data, error } = await supabase
        .from('lecturas')
        .select('*,sensores (tipo , unidad)') //jalar el tipo y unidad del sensor relacionado
        .order('fecha', { ascending: false }) //ordenar por fecha descendente

    if (error) {
        throw new Error("Error al obtener el historial de lecturas: " + error.message);
    }

    return data;
}