//importamos view y text de react native
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
//importamos usecontext
import { useContext } from 'react';
//importamos auth context
import { AuthContext } from '../../../context/AuthContext';
//importamos el hook para manejar la logica de la pantalla de home
import { UseHome } from '../hooks/useHome';
//agregamos un opcion de confirmacion 
import { Alert } from 'react-native';
//importamos el estilo de la pantalla de home
import { homestyle } from '../style/Homestyle';

export const HomeScreen = () => {

    //obtenemos el usuario 
    const { user, logout } = useContext(AuthContext);
    //obtenemos el perfil y el estado de carga del hook
    const { nombre, loading, resumen } = UseHome(user);

    //validamos que el usuario exista 
    if (!user || loading) {
        return (
            <View>
                <Text>
                    cargando usuario...
                </Text>
            </View>
        )
    }

    const handleLogout = () => {
        Alert.alert(
            'Cerrar sesión',
            '¿Seguro que quieres salir?',
            [
                { text: 'Cancelar' },
                { text: 'Salir', onPress: logout }
            ]
        );
    };

    return (
        <View style={homestyle.contenedor}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 120 }}>
                <View >
                    <Text></Text>
                    <View style={homestyle.tarjeta}>
                        <Text style={homestyle.titulo} >Bienvenido a tu Home : {nombre}</Text>
                    </View>

                    <Text style={homestyle.titulo} >Resumen</Text>

                    <View style={homestyle.tarjeta}>
                        <Text style={homestyle.texto} >Dispositivos</Text>
                        <Text style={homestyle.titulo} >{resumen.dispositivos}</Text>
                    </View>

                    <View style={homestyle.tarjeta}>
                        <Text style={homestyle.texto} >Sensores</Text>
                        <Text style={homestyle.titulo} >{resumen.sensores}</Text>
                    </View>

                    <View style={homestyle.tarjeta}>
                        <Text style={homestyle.texto} >Activos</Text>
                        <Text style={homestyle.titulo} >{resumen.activos}</Text>
                    </View>

                </View>
                <View style={homestyle.tarjeta}>
                    <TouchableOpacity onPress={logout}>
                        <Text style={homestyle.titulo} >Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}