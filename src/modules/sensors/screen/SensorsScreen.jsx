//importamos los componentes necesarios
import { View, Text, FlatList, StyleSheet } from 'react-native';
//importamos hooks de sensores 
import { useSensores } from '../hooks/useSensors';

//crearemos pantalla 
export const SensorsScreen = () => {
    //usamos nuestro hook de sensores
    const { sensores, loading } = useSensores();

    if (loading) {
        return (
            <View >
                <Text>Cargando sensores...</Text>
            </View>
        );
    }

    return (
        <View >
            <Text >Sensores</Text>
            <FlatList
                data={sensores}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View >
                        <Text >
                            Tipo: {item.tipo}
                        </Text>
                        <Text >
                            Unidad: {item.unidad}
                        </Text>
                        <Text>
                            Última lectura:
                            {
                                item.lecturas?.length > 0
                                    ? item.lecturas[item.lecturas.length - 1].valor
                                    : 'Sin datos'
                            }
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}
