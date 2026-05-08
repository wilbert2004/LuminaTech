//importamos view , text 
import { View, Text, Button } from 'react-native'

export const DeviceCard = ({ dispositivo, toggleEstadoDispositivo, loading }) => {
    //obtenemos el nombre del dispositivo y su estado

    //si no hay dispositivo
    if (!dispositivo) {
        return null;
    }
    return (
        <View>
            <Text>{dispositivo.nombre}</Text>
            <Text>{dispositivo.estado ? 'Encendido' : 'Apagado'}</Text>
            <Button
                title={dispositivo.estado ? 'Apagar' : 'Encender'}
                onPress={() => toggleEstadoDispositivo(dispositivo)}
                disabled={loading}
            />

        </View>
    )
}