//importamos componentes necesarios
import { View, Text, FlatList, StyleSheet } from 'react-native';
//omportamos los hooks de analytics
import { useAnalytics } from '../hooks/useAnalytics';
import { formatearFecha } from '../../../utils/formatearFecha';

//importamos el componente de lecturas 
import { LecturasChart } from '../components/LecturasChart';
//importaremos el analyticsStyle 
import { styles } from '../style/analyticsStyle';

//crearemos una funcion para mostrar los analytics de cada dispositivo
export const AnalyticsScreen = () => {

    //manejaremos los estados de nuestro hook de analytics
    const { analytics, loading } = useAnalytics();
    if (loading) {
        return (
            <View>
                <Text>Cargando historial de lecturas...</Text>
            </View>
        );
    }

    //view con return 
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>historial de lecturas</Text>
            <LecturasChart data={analytics} />
            <FlatList
                data={analytics}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (

                    <View style={styles.tarjetas}>
                        <Text style={styles.sensores}>
                            Sensor: {item.sensores?.tipo}
                        </Text>

                        <Text style={styles.texto}>
                            Valor: {item.valor}
                        </Text>

                        <Text style={styles.texto}>
                            Unidad: {item.sensores?.unidad}
                        </Text>

                        <Text style={styles.fecha}>
                            Fecha: {formatearFecha(item.fecha)}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}