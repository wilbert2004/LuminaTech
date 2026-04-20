//importamos bd de supabase
import { supabase } from '../../../lib/supebase'

//creamos una funcion de email , password para iniciar sesion
export const signInWithEmail = async (email, password) => {

    //usamos la funcion asicrona de supabase para iniciar sesion con email y password
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) throw new Error("Error por iniciar sesion ");
    console.log("Inicio sesion correctamente:", data?.user?.email);

    return data;


};