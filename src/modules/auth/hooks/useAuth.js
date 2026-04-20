//importamo react de usestate 
import { useState } from 'react'
//importamos la funcion de authservice para iniciar sesion
import { signInWithEmail } from '../services/authService'

//creamos una funcion de hook para usar la autenticacion
export const useAuth = () => {
    //crearemos estadopara verificar 
    const [loading, setloading] = useState(false);

    //crearemos una funcio para iniciar sesion con email y password
    const login = async (email, password) => {
        try {
            setloading(true);
            await signInWithEmail(email, password);
        } catch (error) {
            //debugeando el error
            console.error(error.message);

        } finally {
            setloading(false);
        };
    }
    //luego quiero que me devuelva el valor de cada estado 
    return { login, loading };

};