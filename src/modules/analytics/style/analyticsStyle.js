//importar syle
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    //el contenedor principal de la pantalla de analytics
    contenedor: {
        //el flex es 1 para ocupar toda la pantalla
        flex: 1,
        //el background es oscuro para el modo oscuro
        backgroundColor: '#121212',
        //el padding es de 20 para separar el contenido del borde
        padding: 20,
    },
    //el titulo de la pantalla de analytics
    titulo: {
        //el color de nuestro titulo es blanco para el modo oscuro
        color: '#fff',
        //el tamaño de la fuente es de 24 para destacar el titulo
        fontSize: 28,
        //el fontWeight es bold para resaltar el titulo
        fontWeight: 'bold',
        //el marginBottom es de 20 para separar el titulo del contenido
        marginBottom: 20,
    },
    //las tarjetas de cada lectura en la pantalla de analytics
    tarjetas: {
        //el background es un gris oscuro para el modo oscuro
        backgroundColor: '#1e1e1e',
        //el padding es de 15 para separar el contenido del borde
        padding: 15,
        //el borderRadius es de 10 para redondear las esquinas de las tarjetas
        borderRadius: 10,
        //el marginBottom es de 15 para separar las tarjetas entre si
        marginBottom: 15,
    },
    //sensores de cada lectura en la pantalla de analytics
    sensores: {
        //el color de los sensores es un verde claro para destacar la información
        color: '#00FF9C',
        //el fontSize es de 18 para resaltar los sensores
        fontSize: 18,
        //el fontWeight es bold para enfatizar los sensores
        fontWeight: 'bold',
    },

    //el texto de cada lectura en la pantalla de analytics
    texto: {
        //el color del texto es blanco para el modo oscuro
        color: '#fff',
        //el marginTop es de 5 para separar el texto del sensor
        marginTop: 5,
    },

    //fecha de cada lectura en la pantalla de analytics
    fecha: {
        //el color de la fecha es un gris claro para diferenciarlo del texto principal
        color: '#9CA3AF',
        //el marginTop es de 5 para separar la fecha del texto
        marginTop: 10,
        //el fontSize es de 12 para hacer la fecha menos prominente
        fontSize: 12,
    },

});