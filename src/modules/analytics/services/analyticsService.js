import { supabase } from '../../../lib/supebase'

export const obtenerHistorialLecturas = async () => {
    const { data, error } = await supabase
        .from('lecturas')
        .select('*,sensores (tipo , unidad)')
        .order('fecha', { ascending: false })

    if (error) {
        throw new Error('Error al obtener el historial de lecturas: ' + error.message);
    }

    return data;
}

export const getHistorialLecturas = obtenerHistorialLecturas;