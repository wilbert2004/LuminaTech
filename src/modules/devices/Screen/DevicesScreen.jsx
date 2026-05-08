//importamo view , Text , Flatlist
import { View, Text, FlatList } from 'react-native'
import { ActivityIndicator } from 'react-native';
//importamos el hook para manejar la logica de la pantalla de dispositivos
import { UseDevices } from '../hook/useDevices';
//importamo devicecar
import { DeviceCard } from './DeviceCard';
//importamos nuestro fech de dispositivos

export const DevicesScreen = () => {
    //importamos dispositovs de hooks
    const { dispositivos, toggleEstadoDispositivo, loading } = UseDevices();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
                <Text>Cargando dispositivos...</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>Dispositivos</Text>

            <FlatList
                data={dispositivos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <DeviceCard dispositivo={item} toggleEstadoDispositivo={toggleEstadoDispositivo} loading={loading} />
                )}
            />
        </View>
    )
}