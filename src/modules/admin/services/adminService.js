//importamos la lib de supabase
import { supabase } from '../../../lib/supebase'


//funcion de obetener todos los usuarios para el admin
export const obtenerUsuarios = async () => {
    const { data, error } = await supabase
        .from('perfiles')
        .select("*")
        .eq("estado", "pendiente");

    if (error) throw error;
    return data;
}


//funcion de aprobar usuario para el admin
export const aprobarUsuario = async (userId) => {
    const { error } = await supabase
        .from('perfiles')
        .update({ estado: 'activo' })
        .eq('id', userId);

    if (error) throw error;

}

////obtener usuarios activos para el admin
export const obtenerUsuariosActivos = async () => {
    const { data, error } = await supabase
        .from('perfiles')
        .select("id,nombre,rol,estado")
        .eq("estado", "activo")
        .order('nombre', { ascending: true });

    if (error) throw error;
    return data;
}


//crear dispositivos usando transacciones para asegurar la integridad de los datos
export const crearDispositivoConSensores = async (nombre, ubicacion, perfilId) => {
    const { data, error } = await supabase.rpc('crear_dispositivo_con_sensores', {
        p_nombre: nombre,
        p_ubicacion: ubicacion,
        p_perfil_id: perfilId
    });

    if (error) throw error;

    return data;

}