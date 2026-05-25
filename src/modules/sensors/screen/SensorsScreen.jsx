import { View, Text, FlatList } from 'react-native';
import { useSensores } from '../hooks/useSensors';

// ✅ Corregido: 'sensors' en lugar de 'sensores'
import { styles } from '../style/sensors';

export const SensorsScreen = () => {
    const { sensores, loading } = useSensores();

    if (loading) {
        return (
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Sensores</Text>
                <Text style={styles.texto}>Cargando sensores...</Text>
            </View>
        );
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Sensores</Text>
            <FlatList
                data={sensores}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.tarjetas}>
                        <Text style={styles.sensores}>Tipo: {item.tipo}</Text>
                        <Text style={styles.texto}>Unidad: {item.unidad}</Text>
                        <Text style={styles.fecha}>
                            Última lectura:{' '}
                            {item.lecturas?.length > 0
                                ? item.lecturas[item.lecturas.length - 1].valor
                                : 'Sin datos'}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};