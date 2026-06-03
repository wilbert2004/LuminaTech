import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import { Devicesstyle } from '../style/Devicesstyles';

export const DeviceCard = ({ dispositivo }) => {

    if (!dispositivo) {
        return null;
    }

    const sensorMovimiento = dispositivo.sensores?.find(
        (sensor) => sensor.tipo === 'PIR'
    );

    const sensorLuz = dispositivo.sensores?.find(
        (sensor) => sensor.tipo === 'LDR'
    );

    const copiarTexto = async (texto, nombre) => {

        await Clipboard.setStringAsync(texto);

        Alert.alert(
            'Copiado',
            `${nombre} copiado al portapapeles`
        );
    };

    const configuracionCompleta = `
String sensorMovimiento = "${sensorMovimiento?.id}";
String sensorLuz = "${sensorLuz?.id}";
String dispositivoId = "${dispositivo.id}";
`;

    return (
        <View style={Devicesstyle.tarjetaDispositivo}>

            <View style={Devicesstyle.encabezadoDispositivo}>
                <View style={Devicesstyle.iconoDispositivo}>
                    <Ionicons
                        name="flash-outline"
                        size={18}
                        color="#00FF9C"
                    />
                </View>

                <View style={Devicesstyle.bloqueTexto}>
                    <Text style={Devicesstyle.nombreDispositivo}>
                        {dispositivo.nombre}
                    </Text>

                    <Text style={Devicesstyle.estadoDispositivo}>
                        {dispositivo.estado
                            ? 'Encendido'
                            : 'Apagado'}
                    </Text>
                </View>
            </View>

            <View style={Devicesstyle.filaInformacion}>
                {dispositivo.ubicacion ? (
                    <View style={Devicesstyle.chipUbicacion}>
                        <Ionicons
                            name="location-outline"
                            size={12}
                            color="#7FB3FF"
                            style={Devicesstyle.iconoChip}
                        />

                        <Text style={Devicesstyle.textoUbicacion}>
                            {dispositivo.ubicacion}
                        </Text>
                    </View>
                ) : null}
            </View>

            <View style={Devicesstyle.configArduino}>

                <View style={Devicesstyle.configHeader}>
                    <Ionicons
                        name="terminal-outline"
                        size={16}
                        color="#00FF9C"
                    />

                    <Text style={Devicesstyle.configTitulo}>
                        Configuración Arduino
                    </Text>
                </View>

                <Text style={Devicesstyle.configDescripcion}>
                    Copia estos IDs y pégalos en tu archivo
                    Arduino (.ino) para conectar el ESP8266.
                </Text>

                <TouchableOpacity
                    style={Devicesstyle.botonCopiar}
                    onPress={() =>
                        copiarTexto(
                            sensorMovimiento?.id ?? '',
                            'Sensor PIR'
                        )
                    }
                >
                    <Text style={Devicesstyle.labelId}>
                        Sensor Movimiento (PIR)
                    </Text>

                    <Text style={Devicesstyle.idTexto}>
                        {sensorMovimiento?.id}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Devicesstyle.botonCopiar}
                    onPress={() =>
                        copiarTexto(
                            sensorLuz?.id ?? '',
                            'Sensor LDR'
                        )
                    }
                >
                    <Text style={Devicesstyle.labelId}>
                        Sensor Luz (LDR)
                    </Text>

                    <Text style={Devicesstyle.idTexto}>
                        {sensorLuz?.id}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Devicesstyle.botonCopiar}
                    onPress={() =>
                        copiarTexto(
                            dispositivo.id,
                            'Dispositivo ID'
                        )
                    }
                >
                    <Text style={Devicesstyle.labelId}>
                        Dispositivo ID
                    </Text>

                    <Text style={Devicesstyle.idTexto}>
                        {dispositivo.id}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Devicesstyle.botonCopiarTodo}
                    onPress={() =>
                        copiarTexto(
                            configuracionCompleta,
                            'Configuración Arduino'
                        )
                    }
                >
                    <Ionicons
                        name="copy-outline"
                        size={18}
                        color="#06131F"
                    />

                    <Text style={Devicesstyle.textoBotonCopiarTodo}>
                        Copiar configuración completa
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};