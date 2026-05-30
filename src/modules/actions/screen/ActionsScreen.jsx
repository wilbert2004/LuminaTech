import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useAcciones } from '../hooks/useActions';
import { formatearFecha } from '../../../utils/formatearFecha';
import { estilosAcciones } from '../style/actionsStyle';

export const ActionsScreen = () => {
    // Obtenemos las acciones y las funciones de control desde el hook.
    const {
        acciones,
        dispositivos,
        dispositivoSeleccionado,
        setDispositivoSeleccionado,
        encenderDispositivo,
        apagarDispositivo,
        cargando
    } = useAcciones();
    const dispositivoActual = acciones?.[0]?.dispositivos ?? null;
    const dispositivoId = dispositivoSeleccionado?.id;
    const nombreDispositivo = dispositivoSeleccionado?.nombre ?? 'Sin dispositivo asignado';

    // Mientras cargan las acciones mostramos una vista mínima.
    if (cargando) {
        return (
            <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosAcciones.contenedor}>
                <View style={estilosAcciones.brilloSuperior} />
                <View style={estilosAcciones.brilloInferior} />
                <View style={estilosAcciones.contenido}>
                    <Text style={estilosAcciones.loadingText}>Cargando acciones...</Text>
                </View>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosAcciones.contenedor}>
            <View style={estilosAcciones.brilloSuperior} />
            <View style={estilosAcciones.brilloInferior} />

            <FlatList
                data={acciones}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={estilosAcciones.contenido}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <View style={estilosAcciones.cuerpo}>
                        <View style={estilosAcciones.tarjetaPrincipal}>
                            <View style={estilosAcciones.etiqueta}>
                                <Ionicons name="flash-outline" size={14} color="#7BFFD1" style={estilosAcciones.iconoEtiqueta} />
                                <Text style={estilosAcciones.textoEtiqueta}>Acciones manuales</Text>
                            </View>

                            <Text style={estilosAcciones.titulo}>{nombreDispositivo}</Text>
                            <Text style={estilosAcciones.subtitulo}>
                                Desde aquí puedes encender o apagar el dispositivo y revisar el registro de acciones realizadas.
                            </Text>

                            <View style={estilosAcciones.filaDeEstado}>
                                <View style={estilosAcciones.chip}>
                                    <Ionicons name="power-outline" size={14} color="#00FF9C" style={estilosAcciones.iconoChip} />
                                    <Text style={estilosAcciones.textoChip}>Control directo</Text>
                                </View>

                                <View style={estilosAcciones.chip}>
                                    <Ionicons name="time-outline" size={14} color="#7FB3FF" style={estilosAcciones.iconoChip} />
                                    <Text style={estilosAcciones.textoChip}>Historial reciente</Text>
                                </View>
                            </View>
                        </View>

                        <View style={estilosAcciones.tarjetaControl}>
                            <Text style={estilosAcciones.titulo}>Control del dispositivo</Text>
                            <Text style={estilosAcciones.subtitulo}>Usa los botones para enviar una acción manual al sistema.</Text>

                            <View style={estilosAcciones.filaBotones}>
                                <TouchableOpacity
                                    style={[estilosAcciones.boton, estilosAcciones.botonEncender]}
                                    onPress={() => dispositivoId && encenderDispositivo(dispositivoId)}
                                    disabled={!dispositivoId}
                                >
                                    <Ionicons name="flash-outline" size={18} color="#06131F" style={estilosAcciones.iconoBoton} />
                                    <Text style={estilosAcciones.textoBotonEncender}>Encender</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[estilosAcciones.boton, estilosAcciones.botonApagar]}
                                    onPress={() => dispositivoId && apagarDispositivo(dispositivoId)}
                                    disabled={!dispositivoId}
                                >
                                    <Ionicons name="power-outline" size={18} color="#EDF4FF" style={estilosAcciones.iconoBoton} />
                                    <Text style={estilosAcciones.textoBotonApagar}>Apagar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={estilosAcciones.tarjetaLista}>
                            <Text style={estilosAcciones.titulo}>Registro de acciones</Text>
                        </View>
                    </View>
                )}
                ListEmptyComponent={(
                    <View style={estilosAcciones.cuerpo}>
                        <Text style={estilosAcciones.estadoVacio}>No hay acciones registradas por ahora.</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <View style={estilosAcciones.cuerpo}>
                        <View style={estilosAcciones.tarjetaAccion}>
                            <Text style={estilosAcciones.tituloAccion}>Acción: {item.accion}</Text>
                            <Text style={estilosAcciones.texto}>Origen: {item.origen}</Text>
                            <Text style={estilosAcciones.texto}>Fecha: {formatearFecha(item.fecha)}</Text>
                            <Text style={estilosAcciones.texto}>Dispositivo: {item.dispositivos?.nombre ?? 'Sin nombre'}</Text>
                        </View>
                    </View>
                )}
            />
        </LinearGradient>
    );
}
