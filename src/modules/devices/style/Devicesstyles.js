import { StyleSheet } from 'react-native';

export const Devicesstyle = StyleSheet.create({

    contenedor: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },

    titulo: {
        color: '#00FF9C',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },

    tarjeta: {
        backgroundColor: '#1e1e1e',

        borderRadius: 20,

        padding: 30,

        marginBottom: 25,

        borderWidth: 1.5,
        borderColor: '#00FF9C',

        alignItems: 'center',
        justifyContent: 'center',

        minHeight: 180,

        shadowColor: '#00FF9C',

        shadowOffset: {
            width: 0,
            height: 0,
        },

        shadowOpacity: 0.25,
        shadowRadius: 6,

        elevation: 5,
    },

    sensor: {
        color: '#00FF9C',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    texto: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 25,
    },

    boton: {

        backgroundColor: '#2196F3',

        paddingVertical: 14,
        paddingHorizontal: 28,

        borderRadius: 10,
    },

    textoBoton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

});