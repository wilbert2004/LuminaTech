//importamos bd de supabase
import { supabase } from '../../../lib/supebase'

//creamos una funcion para obtener el perfil del usuario, esta funcion recibira el id del usuario
export const getPerfilUsuario = async (userId) => {

    const { data, error } = await supabase
        //que vamos a obtener de la tabla perfiles
        .from('perfiles')
        //seleccionamos todo
        .select('*')
        //donde el id sea igual al id del usuario
        .eq('id', userId)
        //obtenemos un solo registro
        .single();

    //en dado caso que hay error lo lanzamos
    if (error)
        throw error;

    //si no hay devolvemos todo lo obtenido
    return data;
}

