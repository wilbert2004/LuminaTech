//estados   
import { useState, useEffect } from 'react';
//componentes de react native
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';

//el hook para obtener los dispositivos
import { useAdminDevices } from '../hooks/useAdminDevices';

//funcion de nuestro componente de admin devices screen
export const AdminDevicesScreen = () => {
    const { usuarios, cargando, guardando, crearDispositivo } = useAdminDevices();

    //estados para el formulario de crear dispositivo
    const [nombre, setNombre] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

    //funcion para manejar la creacion de dispositivos
    const guardar = async () => {
        if (!nombre || !ubicacion || !usuarioSeleccionado) {
            Alert.alert('Faltan datos', 'Por favor completa todos los campos para crear el dispositivo.');
            return;
        }

        const ok = await crearDispositivo(nombre, ubicacion, usuarioSeleccionado.id);

        if (ok) {
            Alert.alert('Dispositivo creado', 'El dispositivo y sus sensores quedaron vinculados correctamente.');
            setNombre('');
            setUbicacion('');
            setUsuarioSeleccionado(null);
        } else {
            Alert.alert('Error', 'No se pudo crear el dispositivo en este momento.');
        }
    }

    if (cargando) {
        return (
            <View style={{ flex: 1, padding: 20, backgroundColor: '#06101C', justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#00FF9C" />
                <Text style={{ color: '#A9B9D3', marginTop: 14 }}>Cargando usuarios activos...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#06101C' }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
                Crear dispositivo
            </Text>

            <TextInput
                placeholder="Nombre del dispositivo"
                placeholderTextColor="#73829B"
                value={nombre}
                onChangeText={setNombre}
                style={{
                    backgroundColor: '#0A1626',
                    color: '#fff',
                    padding: 14,
                    borderRadius: 10,
                    marginBottom: 12
                }}
            />

            <TextInput
                placeholder="Ubicación / Aula"
                placeholderTextColor="#73829B"
                value={ubicacion}
                onChangeText={setUbicacion}
                style={{
                    backgroundColor: '#0A1626',
                    color: '#fff',
                    padding: 14,
                    borderRadius: 10,
                    marginBottom: 20
                }}
            />

            <Text style={{ color: '#7BFFD1', fontWeight: 'bold', marginBottom: 10 }}>
                Asignar a usuario
            </Text>

            {usuarios.length === 0 && (
                <View style={{
                    backgroundColor: '#0A1626',
                    borderRadius: 12,
                    padding: 16,
                    marginBottom: 14,
                    borderWidth: 1,
                    borderColor: 'rgba(132, 196, 255, 0.12)'
                }}>
                    <Text style={{ color: '#F6F9FF', fontWeight: '800', marginBottom: 6 }}>
                        Aún no hay aulas o dispositivos vinculados
                    </Text>
                    <Text style={{ color: '#A9B9D3', lineHeight: 20 }}>
                        Cuando el administrador tenga usuarios activos, podrás asignarles dispositivos desde aquí.
                    </Text>
                </View>
            )}

            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id}
                style={{ maxHeight: 220 }}
                renderItem={({ item }) => {
                    const seleccionado = usuarioSeleccionado?.id === item.id;
                    const yaTieneDispositivo = item.dispositivos?.length > 0;

                    return (
                        <TouchableOpacity
                            disabled={yaTieneDispositivo}
                            onPress={() => {
                                if (!yaTieneDispositivo) {
                                    setUsuarioSeleccionado(item);
                                }
                            }}
                            style={{
                                backgroundColor: yaTieneDispositivo
                                    ? 'rgba(255,255,255,0.05)'
                                    : seleccionado
                                        ? '#00FF9C'
                                        : '#0A1626',
                                padding: 14,
                                borderRadius: 10,
                                marginBottom: 10
                            }}
                        >
                            <Text style={{ color: seleccionado ? '#06101F' : '#fff', fontWeight: 'bold' }}>
                                {item.nombre}
                            </Text>

                            <Text style={{ color: seleccionado ? '#06101F' : '#73829B' }}>
                                {yaTieneDispositivo
                                    ? `Ya tiene aula: ${item.dispositivos[0]?.nombre}`
                                    : `${item.rol} - ${item.estado} - disponible`}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />

            <TouchableOpacity
                onPress={guardar}
                disabled={guardando || usuarios.length === 0 || !usuarioSeleccionado}
                style={{
                    marginTop: 20,
                    backgroundColor: guardando || usuarios.length === 0 || !usuarioSeleccionado ? 'rgba(0, 255, 156, 0.35)' : '#00FF9C',
                    padding: 15,
                    borderRadius: 12,
                    alignItems: 'center'
                }}
            >
                <Text style={{ color: '#06101F', fontWeight: 'bold' }}>
                    {guardando ? 'Guardando...' : 'Crear dispositivo con sensores'}
                </Text>
            </TouchableOpacity>
        </View>
    )

}