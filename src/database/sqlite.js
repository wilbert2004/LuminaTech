//importamos sql 
import * as SQLite from "expo-sqlite";
//importa plactofrm para detectar el sistema operativo
import { Platform } from 'react-native';


//inicializamos el nombre de nuestra bd 
const db = null;


//verificamos el sistema operativo para usar la ruta correcta de la base de datos
if (Platform.OS !== 'web') {
    db = SQLite.openDatabaseSync('smartlight.db');
}


//creamos la funcion para crear la tabla  e inicializamos 
export const initDatabase = async () => {

    //evitamos que se ejcute sin es en web 
    if (Platform.OS === 'web') {
        console.log("sqlite no disponible en web ");
        return;
    }

    try {
        await db.execAsync(
            `CREATE TABLE IF NOT EXISTS dispositivos(
                id TEXT PRIMARY KEY NOT NULL,
                nombre TEXT,
                ubicacion TEXT,
                estado INTEGER
            ); `
        );

        //debugiamos si hubo un error  
        console.log("base de datos creamos correctamente");
    } catch (error) {
        console.error(
            "error de conexion de base de datos", error
        );
    }
}

//exportamos la base de datos para usarla en otros archivos
export default db;