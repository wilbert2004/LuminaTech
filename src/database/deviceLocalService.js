//importamos db de nuestro sqlite
import db from './sqlite';
//condicion depende que usemos wbe o movil para usar la base de datos local o no
import { Platform } from 'react-native';

//crearemos una funciona asincrona para agregar un dispositivo a la base de datos
export const saveDeviceLocal = async (device, perfilId) => {
    if (Platform.OS === 'web') return;
    try {
        await db.runAsync(
            `
      INSERT OR REPLACE INTO dispositivos
      (id, nombre, ubicacion, estado, perfil_id)
      VALUES (?, ?, ?, ?, ?)
      `,
            [
                device.id,
                device.nombre,
                device.ubicacion,
                device.estado ? 1 : 0,
                perfilId
            ]
        );

        console.log("dispositivo guardado localmente");
    } catch (error) {
        console.log("error al guardar el dispositivo localmente", error);
    }
}

//USAREMOS UNA FUNCION PARA OBTENER LOS DISPOSITIVOS GUARDADOS LOCALMENTE, ASYNCRONA
export const getDevicesLocal = async (perfilId) => {
    try {
        const result = await db.getAllAsync(
            `SELECT * FROM dispositivos WHERE perfil_id = ?`,
            [perfilId]
        );
        console.log("dispositivos obtenidos localmente");
        return result;
    } catch (error) {
        console.log("error al obtener los dispositivos localmente", error);
        return [];

    }
}
