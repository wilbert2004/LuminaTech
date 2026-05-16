//uso de nuestro servicios 
import { getSensores } from '../services/sensorsService';
//hooks de useState y useEffect
import { useState, useEffect } from 'react';
//meteremos lecturas en tiempo real con useEffect 
import { supabase } from '../../../lib/supebase';


//funcion de nuestro sensore hook 
export const useSensores = () => {
    //manejaremos estados 
    const [sensores, setSensores] = useState([]);
    const [loading, setLoading] = useState(false);

    ///useeffect para jalar los sensores al iniciar el componente
    useEffect(() => {
        fetchSensores();

        //realtime de lecturas de sensores
        const channel = supabase
            .channel('public:lecturas')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'lecturas' }, () => {
                console.log("Nueva lectura, actualizando sensores...");
                fetchSensores();
            })
            .subscribe();
        //limpieza del canal al desmontar el componente
        return () => {
            supabase.removeChannel(channel);
        }
    }, []);

    //funcion para jalar los sensores de un dispositivo
    const fetchSensores = async () => {

        try {
            setLoading(true);
            const data = await getSensores();
            setSensores(data);
        } catch (error) {
            console.log("Error al obtener los sensores: " + error.message);

        } finally {
            setLoading(false);
        }
        //retornamos los sensores y el estado de carga
    }

    return { sensores, loading, fetchSensores };
}