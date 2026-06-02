import { View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSensores } from '../hooks/useSensors';

// Importamos los estilos en español para mantener orden entre módulo, pantalla y estilos.
import { estilosSensores } from '../style/sensors';

export const SensorsScreen = () => {
    // Obtenemos la lista de sensores y el estado de carga desde el hook.
    const { sensores, loading } = useSensores();

    // Si la información todavía está cargando, mostramos una vista mínima.
    if (loading) {
        return (
            <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosSensores.contenedor}>
                <View style={estilosSensores.brilloSuperior} />
                <View style={estilosSensores.brilloInferior} />

                <View style={estilosSensores.contenido}>
                    <View style={estilosSensores.pageBody}>
                        <View style={estilosSensores.tarjetaPrincipal}>
                            <View style={estilosSensores.loadingHeader}>
                                <Ionicons name="hourglass-outline" size={18} color="#7BFFD1" style={estilosSensores.loadingIcon} />
                                <Text style={estilosSensores.loadingTitle}>Cargando sensores...</Text>
                            </View>
                            <Text style={estilosSensores.estadoVacio}>
                                Estamos cargando las últimas lecturas disponibles.
                            </Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosSensores.contenedor}>
            {/* Brillos de fondo para darle identidad visual al módulo. */}
            <View style={estilosSensores.brilloSuperior} />
            {/* Segundo brillo para equilibrar el panel. */}
            <View style={estilosSensores.brilloInferior} />

            <FlatList
                data={sensores}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={estilosSensores.contenido}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <View style={estilosSensores.pageBody}>
                        <View style={estilosSensores.tarjetaPrincipal}>
                            <View style={estilosSensores.etiqueta}>
                                <Text style={estilosSensores.textoEtiqueta}>IoT Sensors</Text>
                            </View>

                            <Text style={estilosSensores.titulo}>Panel de sensores</Text>
                            <Text style={estilosSensores.subtitulo}>
                                Aquí puedes revisar la información de cada sensor conectado al sistema de iluminación automatizada.
                            </Text>

                            <View style={estilosSensores.filaDeEstado}>
                                <View style={estilosSensores.chip}>
                                    <Ionicons name="pulse-outline" size={14} color="#00FF9C" style={estilosSensores.iconoChip} />
                                    <Text style={estilosSensores.textoChip}>Monitoreo activo</Text>
                                </View>

                                <View style={estilosSensores.chip}>
                                    <Ionicons name="reader-outline" size={14} color="#7FB3FF" style={estilosSensores.iconoChip} />
                                    <Text style={estilosSensores.textoChip}>Lecturas recientes</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                ListEmptyComponent={(
                    <View style={estilosSensores.pageBody}>
                        <View style={estilosSensores.tarjetaPrincipal}>
                            <View style={estilosSensores.emptyStateWrap}>
                                <Ionicons name="hardware-chip-outline" size={20} color="#7BFFD1" style={estilosSensores.emptyStateIcon} />
                                <Text style={estilosSensores.emptyStateTitle}>No hay sensores registrados</Text>
                                <Text style={estilosSensores.emptyStateText}>
                                    Cuando el administrador vincule sensores a tus dispositivos, aparecerán aquí.
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
                renderItem={({ item }) => {
                    // Buscamos la última lectura del sensor para mostrar el dato más reciente.
                    const ultimaLectura = item.lecturas?.length > 0
                        ? item.lecturas[item.lecturas.length - 1].valor
                        : 'No hay lecturas todavía';

                    return (
                        <View style={estilosSensores.pageBody}>
                            <View style={estilosSensores.tarjetaSensor}>
                                <View style={estilosSensores.encabezadoSensor}>
                                    <View style={estilosSensores.iconoSensor}>
                                        <Ionicons name="hardware-chip-outline" size={18} color="#00FF9C" />
                                    </View>

                                    <View style={estilosSensores.bloqueTexto}>
                                        <Text style={estilosSensores.tipoSensor}>Tipo: {item.tipo}</Text>
                                        <Text style={estilosSensores.unidadSensor}>Unidad: {item.unidad}</Text>
                                    </View>
                                </View>

                                <Text style={estilosSensores.ultimaLectura}>
                                    Última lectura: {ultimaLectura}
                                </Text>
                                <Text style={estilosSensores.texto}>
                                    La tarjeta resume el estado del sensor y su lectura más reciente.
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />
        </LinearGradient>
    );
};