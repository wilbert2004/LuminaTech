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
        <SafeAreaView style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 120 }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Bienvenido a tu Home : {nombre}</Text>

                    <View style={styles.emailContainer}>
                        <Text style={styles.emailText}>{user.email}</Text>
                    </View>

                    <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                        <Text style={styles.logoutText}>Cerrar sesión</Text>
                    </TouchableOpacity>

                    <Text style={styles.resumen}>Resumen</Text>

                    <View style={styles.resumenCard}>
                        <Text style={styles.resumenLabel}>Dispositivos</Text>
                        <Text style={styles.resumenNumber}>{resumen.dispositivos}</Text>
                    </View>

                    <View style={styles.resumenCard}>
                        <Text style={styles.resumenLabel}>Sensores</Text>
                        <Text style={styles.resumenNumber}>{resumen.sensores}</Text>
                    </View>

                    <View style={styles.resumenCard}>
                        <Text style={styles.resumenLabel}>Activos</Text>
                        <Text style={styles.resumenNumber}>{resumen.activos}</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}