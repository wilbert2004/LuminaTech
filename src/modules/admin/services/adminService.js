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


//crear dispositivos con sensores 
export const crearDispositivoConSensores = async (nombre, ubicacion, perfilId) => {
    const { data: dispositivo, error: dispositivoError } = await supabase
        .from('dispositivos')
        .insert({
            nombre,
            ubicacion,
            estado: false,
            perfil_id: perfilId
        })
        .select()
        .single();

    if (dispositivoError) throw dispositivoError;

    const sensores = [
        {
            dispositivo_id: dispositivo.id,
            tipo: "PIR",
            unidad: "Movimiento",
        }, {
            dispositivo_id: dispositivo.id,
            tipo: "LDR",
            unidad: "LUX",
        }
    ];

    const { error: sensoresError } = await supabase
        .from('sensores')
        .insert(sensores);

    //verificamos los errores
    if (sensoresError) throw sensoresError;

    return dispositivo;
}