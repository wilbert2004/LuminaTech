import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useHistorialLecturas } from '../hooks/useAnalytics';
import { formatearFecha } from '../../../utils/formatearFecha';
import { GraficaLecturas } from '../components/LecturasChart';
import { estilosHistorial } from '../style/analyticsStyle';

export const AnalyticsScreen = () => {
    // Obtenemos el historial y el estado de carga desde el hook.
    const { historialLecturas, cargando } = useHistorialLecturas();

    // Mientras llegan los datos mostramos una vista simple.
    if (cargando) {
        return (
            <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosHistorial.contenedor}>
                <View style={estilosHistorial.brilloSuperior} />
                <View style={estilosHistorial.brilloInferior} />

                <View style={estilosHistorial.contenido}>
                    <Text style={estilosHistorial.estadoVacio}>Cargando historial de lecturas...</Text>
                </View>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosHistorial.contenedor}>
            <View style={estilosHistorial.brilloSuperior} />
            <View style={estilosHistorial.brilloInferior} />

            <FlatList
                data={historialLecturas}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={estilosHistorial.contenido}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <View style={estilosHistorial.cuerpo}>
                        <View style={estilosHistorial.tarjetaPrincipal}>
                            <View style={estilosHistorial.etiqueta}>
                                <Ionicons name="reader-outline" size={14} color="#7BFFD1" style={estilosHistorial.iconoEtiqueta} />
                                <Text style={estilosHistorial.textoEtiqueta}>Historial de lecturas</Text>
                            </View>

                            <Text style={estilosHistorial.titulo}>Lecturas recientes</Text>
                            <Text style={estilosHistorial.subtitulo}>
                                Aquí puedes revisar el registro de valores que llegan desde cada sensor conectado al sistema.
                            </Text>

                            <View style={estilosHistorial.filaDeEstado}>
                                <View style={estilosHistorial.chip}>
                                    <Ionicons name="pulse-outline" size={14} color="#00FF9C" style={estilosHistorial.iconoChip} />
                                    <Text style={estilosHistorial.textoChip}>Datos en tiempo real</Text>
                                </View>

                                <View style={estilosHistorial.chip}>
                                    <Ionicons name="analytics-outline" size={14} color="#7FB3FF" style={estilosHistorial.iconoChip} />
                                    <Text style={estilosHistorial.textoChip}>Vista de monitoreo</Text>
                                </View>
                            </View>
                        </View>

                        <View style={estilosHistorial.tarjetaGrafica}>
                            <Text style={estilosHistorial.tituloGrafica}>Tendencia general</Text>
                            <GraficaLecturas data={historialLecturas} />
                        </View>
                    </View>
                )}
                ListEmptyComponent={(
                    <View style={estilosHistorial.cuerpo}>
                        <Text style={estilosHistorial.estadoVacio}>No hay lecturas registradas por ahora.</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <View style={estilosHistorial.cuerpo}>
                        <View style={estilosHistorial.tarjetaLectura}>
                            <Text style={estilosHistorial.sensores}>Sensor: {item.sensores?.tipo}</Text>
                            <Text style={estilosHistorial.texto}>Valor: {item.valor}</Text>
                            <Text style={estilosHistorial.texto}>Unidad: {item.sensores?.unidad}</Text>
                            <Text style={estilosHistorial.fecha}>Fecha: {formatearFecha(item.fecha)}</Text>
                        </View>
                    </View>
                )}
            />
        </LinearGradient>
    );
};