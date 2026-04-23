//importamos el css 
import { StyleSheet } from "react-native";

export const Loginstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9c9c9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        //centrar el texto
        textAlign: 'center',
    },
    //vamos a hacer un textinput con un fondo blanco y un borde redondeado
    inputL: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 12,
        width: '40%',
    },
    //creamos un boton con un fondo azul y un borde redondeado
    buttonL: {
        backgroundColor: '#949ba1',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 10,
        width: '30%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    textParrafo: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
    },

});