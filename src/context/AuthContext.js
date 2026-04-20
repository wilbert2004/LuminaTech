//importamos supabase de clientcreate 
import { supabase } from '../lib/supebase'

//importamos usestate , useseffect, createcontext 
import { useState, useEffect, createContext } from 'react'

//creamos un contexto de autenticacion para compartir el estado de autenticacion en toda la aplicacion
export const AuthContext = createContext();

//creamos una funcion para el provedos de nuestro contexto de autenticacion
export const AuthProvidrer = ({ children }) => {

    //creamos un estado para almacenar el usuario autenticado
    const [user, setUser] = useState(null);

    //creamos un efecto para verificar si el usuario esta autenticado al cargar la aplicacion
    useEffect(() => {
        getSession();

        //creamos un listener para verificar si el usuario cambia su estado de autenticacion, para esto usaremos la funcion de supabase para escuchar los cambios 
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        //limpiamos el listener cuando el componente se desmonte
        return () => listener.subscription.unsubscribe();

    }, [])

    //verificamos si el usuario esta autenticado o no, para esto usaremos la funcion de supebase para obtener la sesion actual
    const getSession = async () => {
        const { data } = await supabase.auth.getSession();
        setUser(data.session?.user || null);
    }

    //vericamos el login 
    const logout = async () => {
        await supabase.auth.signOut();

    }

    //luego queremos que nos devuelva el valor de cada estad y envolviendo nuestro children 
    return (<AuthContext.Provider value={{ user, logout }}>
        {children}
    </AuthContext.Provider>
    );


};