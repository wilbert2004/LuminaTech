//imprtamos un stylesheet
import { StyleSheet } from 'react-native';

//crearemos un sistema de estilo login 
export const loginStyle = StyleSheet.create({

    //nuestro contenedor principal 
    contenedor: {
        //usaremos un flex para ocupador todo el  espacio 
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

    titulo: {
        //el color de nuestro titulo es blanco para el modo oscuro
        color: '#fff',
        //el tamaño de la fuente es de 24 para destacar el titulo
        fontSize: 26,
        //el fontWeight es bold para resaltar el titulo
        fontWeight: 'bold',
        //el marginBottom es de 20 para separar el titulo del contenido
        marginBottom: 20,
    },

    logo: {
        width: 170,
        height: 170,
        marginBottom: 12,
        resizeMode: 'contain',
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
        width: '50%',
        //centraremos el contenido de la tarjeta horizontalmente
        alignSelf: 'center',
        //tarjeta centro de la pantalla 
        justifyContent: 'center',
        //vamos a ponerle el borde de color verde claro para destacar la tarjeta
        borderWidth: 2,
        borderColor: '#023114',

    },

    texto: {
        //el color del texto es blanco para el modo oscuro
        color: '#00FF9C',
        //el marginTop es de 5 para separar el texto del sensor
        marginTop: 5,
        //agregamos un tamani 
        fontSize: 16
    },

    inputL: {
        //el width es de 100% para ocupar todo el ancho disponible
        width: '60%',
        //el padding es de 10 para separar el texto del borde
        padding: 10,
        //el background es un gris oscuro para el modo oscuro
        backgroundColor: '#023114',
        //el color del texto es blanco para el modo oscuro
        color: '#fff',
        //el borderRadius es de 5 para redondear las esquinas del input
        borderRadius: 5,
        //el marginBottom es de 15 para separar los inputs entre si
        marginBottom: 15,
    },

    boton: {
        //el background es un verde claro para destacar el boton
        backgroundColor: '#00FF9C',
        //el padding es de 10 para separar el texto del borde
        padding: 10,
        //el borderRadius es de 5 para redondear las esquinas del boton
        borderRadius: 5,
        //el marginTop es de 10 para separar el boton del ultimo input
        marginTop: 10,
    }
    ,
})