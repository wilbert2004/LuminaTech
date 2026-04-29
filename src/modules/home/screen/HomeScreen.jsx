//importamos view y text de react native
import { View, Text } from 'react-native'
//importamos usecontext
import { useContext } from 'react';
//importamos auth context
import { AuthContext } from '../../../context/AuthContext';
//importamos el hook para manejar la logica de la pantalla de home
import { UseHome } from '../hooks/useHome';
//importamos el style de la pantalla de home
import { styles } from '../style/Homestyle';
export const HomeScreen = () => {

    //obtenemos el usuario 
    const { user } = useContext(AuthContext);
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
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a tu Home : {nombre}</Text>
            <Text style={styles.resumenItem}>{user.email}</Text>
            <Text style={styles.resumen}>Resumen</Text>
            <Text style={styles.resumenItem}>Dispositivos: {resumen.dispositivos}</Text>
            <Text style={styles.resumenItem}>Sensores: {resumen.sensores}</Text>
            <Text style={styles.resumenItem}>Activos: {resumen.activos}</Text>
        </View>
    )
}