//importamos supabase de clientcreate 
import { supabase } from '../lib/supebase'
//importamos authservice
import { signInWithEmail } from '../modules/auth/services/authService'

//importamos usestate , useseffect, createcontext 
import { useState, useEffect, createContext } from 'react'

//creamos un contexto de autenticacion para compartir el estado de autenticacion en toda la aplicacion
export const AuthContext = createContext();

//creamos una funcion para el provedos de nuestro contexto de autenticacion
export const AuthProvidrer = ({ children }) => {

    //creamos un estado para almacenar el usuario autenticado
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //creamos un efecto para verificar si el usuario esta autenticado al cargar la aplicacion
    useEffect(() => {
        const loadSession = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (error || !data?.user) {
                await supabase.auth.signOut();
                setUser(null);
            } else {
                setUser(data.user);
            }

            setLoading(false);
        };

        loadSession();



        //creamos un listener para verificar si el usuario cambia su estado de autenticacion, para esto usaremos la funcion de supabase para escuchar los cambios 
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        //limpiamos el listener cuando el componente se desmonte
        return () => listener.subscription.unsubscribe();

    }, [])

    //creamos la funcion login en el contexto
    const login = async (email, password) => {
        try {
            setLoading(true);
            await signInWithEmail(email, password);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    //vericamos el login 
    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    }

    //luego queremos que nos devuelva el valor de cada estad y envolviendo nuestro children 
    return (<AuthContext.Provider value={{ user, login, logout, loading }}>
        {children}
    </AuthContext.Provider>
    );


};