//importamos View, Text, FlatList
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

//importamos hook
import { UseDevices } from '../hook/useDevices';

//importamos estilos
import { Devicesstyle } from '../style/Devicesstyles';
import { DeviceCard } from './DeviceCard';

//pantalla principal
export const DevicesScreen = () => {

    //obtenemos dispositivos
    const {
        dispositivos,
        toggleEstadoDispositivo,
        loading
    } = UseDevices();

    //loading
    if (loading) {

        return (

            <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={Devicesstyle.contenedor}>
                <View style={Devicesstyle.brilloSuperior} />
                <View style={Devicesstyle.brilloInferior} />

                <View style={Devicesstyle.contenido}>
                    <View style={Devicesstyle.cuerpo}>
                        <View style={Devicesstyle.tarjetaPrincipal}>
                            <ActivityIndicator size="large" color="#00FF9C" />
                            <Text style={Devicesstyle.estadoVacio}>Cargando dispositivos...</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }

    //render
    return (

        <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={Devicesstyle.contenedor}>
            <View style={Devicesstyle.brilloSuperior} />
            <View style={Devicesstyle.brilloInferior} />

            <FlatList
                data={dispositivos}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={Devicesstyle.contenido}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <View style={Devicesstyle.cuerpo}>
                        <View style={Devicesstyle.tarjetaPrincipal}>
                            <View style={Devicesstyle.etiqueta}>
                                <Ionicons name="hardware-chip-outline" size={14} color="#7BFFD1" style={Devicesstyle.iconoEtiqueta} />
                                <Text style={Devicesstyle.textoEtiqueta}>Panel de dispositivos</Text>
                            </View>

                            <Text style={Devicesstyle.titulo}>Dispositivos</Text>
                            <Text style={Devicesstyle.subtitulo}>
                                Aquí revisas y controlas los dispositivos asignados a tu perfil dentro del sistema.
                            </Text>

                            <View style={Devicesstyle.filaMeta}>
                                <View style={Devicesstyle.chip}>
                                    <Ionicons name="shield-checkmark-outline" size={14} color="#00FF9C" style={Devicesstyle.iconoChip} />
                                    <Text style={Devicesstyle.textoChip}>Filtrado por usuario</Text>
                                </View>

                                <View style={Devicesstyle.chip}>
                                    <Ionicons name="radio-outline" size={14} color="#7FB3FF" style={Devicesstyle.iconoChip} />
                                    <Text style={Devicesstyle.textoChip}>Control en tiempo real</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={Devicesstyle.tituloSeccion}>Lista asignada</Text>
                    </View>
                )}
                ListEmptyComponent={(
                    <View style={Devicesstyle.cuerpo}>
                        <View style={Devicesstyle.tarjetaPrincipal}>
                            <Text style={Devicesstyle.estadoVacio}>No hay dispositivos asignados a este perfil.</Text>
                        </View>
                    </View>
                )}
                renderItem={({ item }) => (
                    <View style={Devicesstyle.cuerpo}>
                        <DeviceCard dispositivo={item} toggleEstadoDispositivo={toggleEstadoDispositivo} />
                    </View>
                )}
            />

        </LinearGradient>
    );
};