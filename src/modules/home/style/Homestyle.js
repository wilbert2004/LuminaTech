//importar stylesheet 
import { StyleSheet } from 'react-native';

//crearemos la funcion para jalarlo en screen 
export const homestyle = StyleSheet.create({
    //crearemos nuestro contenedor principal
    contenedor: {
        //un flex para ocupar todo el espacio
        flex: 1,
        //el background es oscuro para el modo oscuro
        backgroundColor: '#121212',
        //el padding es de 20 para separar el contenido del borde
        padding: 20,
        //vamos a centrar el contenido del contenedor
        justifyContent: 'center',
        //vamos a alinear el contenido del contenedor al centro horizontalmente
        alignItems: 'center',
    },

    tarjeta: {
        //el background es un gris oscuro para el modo oscuro
        backgroundColor: '#1e1e1e',
        //el padding es de 15 para separar el contenido del borde
        padding: 15,
        //el borderRadius es de 10 para redondear las esquinas de las tarjetas
        borderRadius: 10,
        //el marginBottom es de 15 para separar las tarjetas entre si
        marginBottom: 15,
        //vamos a centrar el contenido de la tarjeta
        alignItems: 'center',
        //daremos un tamanio especifico a la tarjeta para que no ocupe todo el ancho de la pantalla
        width: '100%',
        //centraremos el contenido de la tarjeta horizontalmente    
        alignSelf: 'center',
        //tarjeta centro de la pantalla 
        justifyContent: 'center',
        //vamos a ponerle el borde de color verde claro para destacar la tarjeta
        borderWidth: 2,
        borderColor: '#023114',
    },

    titulo: {
        //el color de nuestro texto es blanco para el modo oscuro
        color: '#fff',
        //el tamaño de la fuente es de 18 para destacar el texto
        fontSize: 18,
        //el fontWeight es bold para resaltar el texto
        fontWeight: 'bold',
    },

    //boton cerrar sesion
    botonCerrarSesion: {
        //el background es un gris oscuro para el modo oscuro
        backgroundColor: '#1e1e1e',
        //el padding es de 10 para separar el contenido del borde
        padding: 10,
        //el borderRadius es de 5 para redondear las esquinas del boton
        borderRadius: 5,
        //el marginTop es de 20 para separar el boton del contenido
        marginTop: 20,
        //vamos a centrar el contenido del boton
        alignItems: 'center',
        //daremos un tamanio especifico al boton para que no ocupe todo el ancho de la pantalla
        width: '50%',
        //centraremos el contenido del boton horizontalmente
        alignSelf: 'center',
    },
    texto: {
        //el color del texto es blanco para el modo oscuro
        color: '#00FF9C',
        //el marginTop es de 5 para separar el texto del sensor
        marginTop: 5,
        //agregamos un tamani 
        fontSize: 16
    },

})