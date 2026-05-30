import { supabase } from '../../../lib/supebase'

export const obtenerAcciones = async (userId) => {
    const { data, error } = await supabase
        .from('acciones')
        .select(`
            *,
            dispositivos!inner (
                id,
                nombre,
                perfil_id
            )
        `)
        .eq('dispositivos.perfil_id', userId)
        .order('fecha', { ascending: false });

    if (error) throw error;

    return data;
}

export const crearAccion = async (dispositivo_id, accion, origen, userId) => {

    const { data: dispositivo, error: dispositivoError } = await supabase
        .from('dispositivos')
        .select('id, perfil_id')
        .eq('id', dispositivo_id)
        .eq('perfil_id', userId)
        .maybeSingle();

    if (dispositivoError) throw dispositivoError;

    if (!dispositivo) {
        throw new Error('No tienes permiso para controlar este dispositivo o no tienes dispositivos asignados.');
    }
    const { data, error } = await supabase
        .from('acciones')
        .insert({
            dispositivo_id,
            accion,
            origen
        })
        .select();

    if (error) throw error;

    return data;

}

//obtenert dispossitivos del usuario para el admin
export const obtenerDispositivosUsuario = async (userId) => {
    const { data, error } = await supabase
        .from('dispositivos')
        .select('id, nombre, ubicacion, estado')
        .eq('perfil_id', userId)

    if (error) throw error;
    return data;
}

export const getAcciones = obtenerAcciones;