//importar style
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    //el contenedor principal de la pantalla de sensores
    contenedor: {

        //el flex es 1 para ocupar toda la pantalla
        flex: 1,

        //el fondo oscuro para el modo oscuro
        backgroundColor: '#121212',

        //padding general de la pantalla
        padding: 20,
    },

    //titulo principal de la pantalla
    titulo: {

        //color blanco del titulo
        color: '#fff',

        //tamaño del texto
        fontSize: 28,

        //texto en negrita
        fontWeight: 'bold',

        //separación inferior
        marginBottom: 20,
    },

    //tarjetas de sensores
    tarjetas: {

        //fondo oscuro de la tarjeta
        backgroundColor: '#1e1e1e',

        //espaciado interno
        padding: 15,

        //bordes redondeados
        borderRadius: 15,

        //borde verde elegante
        borderWidth: 1.5,

        //color del borde
        borderColor: '#00FF9C',

        //separación entre tarjetas
        marginBottom: 15,

        //centrar contenido horizontalmente
        alignItems: 'center',

        //centrar contenido verticalmente
        justifyContent: 'center',

        //altura parecida al home
        minHeight: 100,

        //ancho completo
        width: '100%',

        //sombra verde elegante
        shadowColor: '#00FF9C',

        //posición de la sombra
        shadowOffset: {
            width: 0,
            height: 0,
        },

        //intensidad de la sombra
        shadowOpacity: 0.2,

        //difuminado de la sombra
        shadowRadius: 4,

        //sombra en android
        elevation: 4,
    },

    //nombre del sensor
    sensores: {

        //color verde neón
        color: '#00FF9C',

        //tamaño del texto
        fontSize: 18,

        //texto en negrita
        fontWeight: 'bold',

        //separación inferior
        marginBottom: 5,
    },

    //texto normal
    texto: {

        //color blanco
        color: '#fff',

        //separación superior
        marginTop: 5,
    },

    //fecha o última lectura
    fecha: {

        //color gris claro
        color: '#9CA3AF',

        //separación superior
        marginTop: 10,

        //tamaño pequeño
        fontSize: 12,
    },

});