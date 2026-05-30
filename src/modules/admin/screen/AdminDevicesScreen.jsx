//estados   
import { useState, useEffect } from 'react';
//componentes de react native
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    TextInput
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
            alert('Por favor completa todos los campos');
            return;
        }

        const ok = await crearDispositivo(nombre, ubicacion, usuarioSeleccionado.id);

        if (ok) {
            alert('Dispositivo creado con éxito');
            setNombre('');
            setUbicacion('');
            setUsuarioSeleccionado(null);
        }
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

            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id}
                style={{ maxHeight: 220 }}
                renderItem={({ item }) => {
                    const seleccionado = usuarioSeleccionado?.id === item.id;

                    return (
                        <TouchableOpacity
                            onPress={() => setUsuarioSeleccionado(item)}
                            style={{
                                backgroundColor: seleccionado ? '#00FF9C' : '#0A1626',
                                padding: 14,
                                borderRadius: 10,
                                marginBottom: 10
                            }}
                        >
                            <Text style={{ color: seleccionado ? '#06101F' : '#fff', fontWeight: 'bold' }}>
                                {item.nombre}
                            </Text>

                            <Text style={{ color: seleccionado ? '#06101F' : '#73829B' }}>
                                {item.rol} - {item.estado}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />

            <TouchableOpacity
                onPress={guardar}
                disabled={guardando}
                style={{
                    marginTop: 20,
                    backgroundColor: '#00FF9C',
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