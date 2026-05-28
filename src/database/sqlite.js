import { Platform } from "react-native";

let db = null;

if (Platform.OS !== "web") {

    const SQLite = require("expo-sqlite");

    db = SQLite.openDatabaseSync("smartlight.db");

}

export const initDatabase = async () => {

    if (Platform.OS === "web") {

        console.log("SQLite no disponible en Web");

        return;

    }

    try {

        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS dispositivos (
                id TEXT PRIMARY KEY NOT NULL,
                nombre TEXT,
                ubicacion TEXT,
                estado INTEGER
            );
        `);

        console.log("Base de datos creada correctamente");

    } catch (error) {

        console.error("Error al crear la base de datos:", error);

    }

};

export default db;