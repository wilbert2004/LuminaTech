import { supabase } from '../../../lib/supebase'

export const obtenerHistorialLecturas = async (userId) => {
    const { data, error } = await supabase
        .from('lecturas')
        .select(`
            *,
            sensores!inner (
                tipo,
                unidad,
                dispositivos!inner (
                    id,
                    nombre,
                    ubicacion,
                    perfil_id
                )
            )
        `)
        .eq('sensores.dispositivos.perfil_id', userId)
        .order('fecha', { ascending: false })

    if (error) {
        throw new Error('Error al obtener el historial de lecturas: ' + error.message);
    }

    return data;
}

export const getHistorialLecturas = obtenerHistorialLecturas;