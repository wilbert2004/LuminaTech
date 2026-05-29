import { supabase } from '../../../lib/supebase'

export const obtenerPerfilUsuario = async (userId) => {

    const { data, error } = await supabase
        .from('perfiles')
        .select('*')
        .eq('id', userId)
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export const getPerfilUsuario = obtenerPerfilUsuario;

