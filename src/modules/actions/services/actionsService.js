import { supabase } from '../../../lib/supebase'

export const obtenerAcciones = async () => {
    const { data, error } = await supabase
        .from('acciones')
        .select('*, dispositivos (nombre)')
        .order('fecha', { ascending: false });

    if (error) throw error;

    return data;
}

export const crearAccion = async (dispositivo_id, accion, origen) => {
    const { data, error } = await supabase
        .from('acciones')
        .insert({ dispositivo_id, accion, origen })
        .select();

    if (error) throw error;

    return data;

}

export const getAcciones = obtenerAcciones;