//importamos bd de supabase
import { supabase } from '../../../lib/supebase'

//creamos una funcion de email , password para iniciar sesion
export const signInWithEmail = async (email, password) => {

    //usamos la funcion asicrona de supabase para iniciar sesion con email y password
    email = email.trim().toLowerCase();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) throw new Error(error.message);
    return data;

};


//creamos una funcion de email , password y nombre para registrar usuarios
export const signUpWithEmail = async (email, password, nombre) => {
    ///limpiamos el email para evitar errores de formato
    email = email.trim().toLowerCase();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        if (error.status === 429) {
            throw new Error('Supabase está limitando los registros por ahora. Espera unos minutos e inténtalo otra vez, o revisa los rate limits y el email provider en Supabase.');
        }
        throw new Error(error.message);
    }

    const userId = data?.user?.id;
    if (!userId) {
        throw new Error("No se pudo obtener el usuario registrado.");
    }

    const { error: profileError } = await supabase.from("perfiles").insert([
        { id: userId, nombre }
    ]);
    if (profileError) throw new Error(profileError.message);
};

