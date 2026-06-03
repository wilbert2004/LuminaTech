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


//crear una fución para actualizar el perfil del usuario
export const actualizarNombrePerfil = async (userId, nuevoNombre) => {
    const { data, error } = await supabase
        .from('perfiles')
        .update({ nombre: nuevoNombre })
        .eq('id', userId)
        .select()
        .single();

    //error
    if (error) {
        throw error;
    }
    return data;
}

