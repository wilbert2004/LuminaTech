//importamos View, Text, FlatList
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

//importamos hook
import { UseDevices } from '../hook/useDevices';

//importamos estilos
import { Devicesstyle } from '../style/Devicesstyles';

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

            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#121212',
                }}
            >

                <ActivityIndicator
                    size="large"
                    color="#00FF9C"
                />

                <Text
                    style={{
                        color: '#fff',
                        marginTop: 15,
                    }}
                >
                    Cargando dispositivos...
                </Text>

            </View>
        );
    }

    //render
    return (

        <View style={Devicesstyle.contenedor}>

            {/* titulo */}
            <Text style={Devicesstyle.titulo}>
                Dispositivos
            </Text>

            {/* lista */}
            <FlatList
                data={dispositivos}

                keyExtractor={(item) => item.id.toString()}

                renderItem={({ item }) => (

                    <View style={Devicesstyle.tarjeta}>

                        {/* nombre */}
                        <Text style={Devicesstyle.sensor}>
                            {item.nombre}
                        </Text>

                        {/* estado */}
                        <Text style={Devicesstyle.texto}>
                            {item.estado ? 'Encendido' : 'Apagado'}
                        </Text>

                        {/* boton */}
                        <TouchableOpacity
                            style={Devicesstyle.boton}
                            onPress={() => toggleEstadoDispositivo(item.id)}
                        >

                            <Text style={Devicesstyle.textoBoton}>
                                {item.estado ? 'APAGAR' : 'ENCENDER'}
                            </Text>

                        </TouchableOpacity>

                    </View>

                )}
            />

        </View>
    );
};