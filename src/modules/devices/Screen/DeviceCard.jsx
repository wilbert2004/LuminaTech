//importamos view , text 
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
//importamos nuestro style 
import { Devicesstyle } from '../style/Devicesstyles';


export const DeviceCard = ({ dispositivo, toggleEstadoDispositivo, loading }) => {
    //obtenemos el nombre del dispositivo y su estado

    //si no hay dispositivo
    if (!dispositivo) {
        return null;
    }
    return (
        <View style={Devicesstyle.tarjetaDispositivo}>
            <View style={Devicesstyle.encabezadoDispositivo}>
                <View style={Devicesstyle.iconoDispositivo}>
                    <Ionicons name="flash-outline" size={18} color="#00FF9C" />
                </View>

                <View style={Devicesstyle.bloqueTexto}>
                    <Text style={Devicesstyle.nombreDispositivo}>{dispositivo.nombre}</Text>
                    <Text style={Devicesstyle.estadoDispositivo}>
                        {dispositivo.estado ? 'Encendido' : 'Apagado'}
                    </Text>
                </View>
            </View>

            <View style={Devicesstyle.filaInformacion}>
                {dispositivo.ubicacion ? (
                    <View style={Devicesstyle.chipUbicacion}>
                        <Ionicons name="location-outline" size={12} color="#7FB3FF" style={Devicesstyle.iconoChip} />
                        <Text style={Devicesstyle.textoUbicacion}>{dispositivo.ubicacion}</Text>
                    </View>
                ) : null}
            </View>

            <TouchableOpacity
                style={Devicesstyle.botonEstado}
                onPress={() => toggleEstadoDispositivo(dispositivo)}
                disabled={loading}
            >
                <Ionicons
                    name={dispositivo.estado ? 'power-outline' : 'flash-outline'}
                    size={18}
                    color="#06131F"
                    style={Devicesstyle.iconoBoton}
                />
                <Text style={Devicesstyle.textoBoton}>
                    {dispositivo.estado ? 'APAGAR' : 'ENCENDER'}
                </Text>
            </TouchableOpacity>

        </View>
    )
}