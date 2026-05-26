//importamos view , text 
import { View, Text, Button } from 'react-native'
//importamos nuestro style 
import { Devicesstyle } from '../style/Devicesstyles';


export const DeviceCard = ({ dispositivo, toggleEstadoDispositivo, loading }) => {
    //obtenemos el nombre del dispositivo y su estado

    //si no hay dispositivo
    if (!dispositivo) {
        return null;
    }
    return (
        <View style={Devicesstyle.tarjeta}>
            <Text style={{ color: '#00FF9C', fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>{dispositivo.nombre}</Text>
            <Text style={{ color: '#ffffff', marginBottom: 15 }}>{dispositivo.estado ? 'Encendido' : 'Apagado'}</Text>
            <Button
                title={dispositivo.estado ? 'Apagar' : 'Encender'}
                onPress={() => toggleEstadoDispositivo(dispositivo)}
                disabled={loading}
            />

        </View>
    )
}