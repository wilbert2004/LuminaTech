//importamos view y text de react native
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
//importamos usecontext
import { useContext } from 'react';
//importamos auth context
import { AuthContext } from '../../../context/AuthContext';
//importamos el hook para manejar la logica de la pantalla de home
import { UseHome } from '../hooks/useHome';
//importamos el style de la pantalla de home
import { styles } from '../style/Homestyle';
//agregamos un opcion de confirmacion 
import { Alert } from 'react-native';

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
        <View>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 120 }}>
                <View >
                    <Text >Bienvenido a tu Home : {nombre}</Text>

                    <TouchableOpacity onPress={logout}>
                        <Text >Cerrar sesión</Text>
                    </TouchableOpacity>

                    <Text >Resumen</Text>

                    <View >
                        <Text >Dispositivos</Text>
                        <Text >{resumen.dispositivos}</Text>
                    </View>

                    <View >
                        <Text >Sensores</Text>
                        <Text >{resumen.sensores}</Text>
                    </View>

                    <View >
                        <Text >Activos</Text>
                        <Text >{resumen.activos}</Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}