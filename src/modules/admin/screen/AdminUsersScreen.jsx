//componente react native
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

//importamos el hooks de de admin 
import { useAdmin } from '../hooks/usePendingUsers';
import { estilosAdmin } from '../style/Adminstyle';

export const AdminUsersScreen = () => {
    const { usuarios, aprobar, loading } = useAdmin();

    if (loading) {
        return (
            <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosAdmin.contenedor}>
                <View style={estilosAdmin.brilloSuperior} />
                <View style={estilosAdmin.brilloInferior} />

                <View style={estilosAdmin.contenido}>
                    <View style={estilosAdmin.cuerpo}>
                        <View style={estilosAdmin.tarjetaPrincipal}>
                            <ActivityIndicator size="large" color="#00FF9C" />
                            <Text style={estilosAdmin.estadoVacio}>Cargando usuarios pendientes...</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosAdmin.contenedor}>
            <View style={estilosAdmin.brilloSuperior} />
            <View style={estilosAdmin.brilloInferior} />

            <FlatList
                data={usuarios}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={estilosAdmin.contenido}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <View style={estilosAdmin.cuerpo}>
                        <View style={estilosAdmin.tarjetaPrincipal}>
                            <View style={estilosAdmin.etiqueta}>
                                <Ionicons name="people-outline" size={14} color="#7BFFD1" style={estilosAdmin.iconoEtiqueta} />
                                <Text style={estilosAdmin.textoEtiqueta}>Administración</Text>
                            </View>

                            <Text style={estilosAdmin.titulo}>Usuarios Pendientes</Text>
                            <Text style={estilosAdmin.subtitulo}>
                                Revisa los perfiles que esperan aprobación para entrar al sistema.
                            </Text>

                            <View style={estilosAdmin.filaMeta}>
                                <View style={estilosAdmin.chip}>
                                    <Ionicons name="shield-checkmark-outline" size={14} color="#00FF9C" style={estilosAdmin.iconoChip} />
                                    <Text style={estilosAdmin.textoChip}>Control de acceso</Text>
                                </View>

                                <View style={estilosAdmin.chip}>
                                    <Ionicons name="time-outline" size={14} color="#7FB3FF" style={estilosAdmin.iconoChip} />
                                    <Text style={estilosAdmin.textoChip}>Aprobación manual</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={estilosAdmin.tituloSeccion}>Lista de espera</Text>
                    </View>
                )}
                ListEmptyComponent={(
                    <View style={estilosAdmin.cuerpo}>
                        <View style={estilosAdmin.tarjetaPrincipal}>
                            <Text style={estilosAdmin.estadoVacio}>No hay usuarios pendientes en este momento.</Text>
                        </View>
                    </View>
                )}
                renderItem={({ item }) => (
                    <View style={estilosAdmin.cuerpo}>
                        <View style={estilosAdmin.tarjetaUsuario}>
                            <View style={estilosAdmin.encabezadoUsuario}>
                                <Text style={estilosAdmin.nombreUsuario}>{item.nombre}</Text>
                                <Text style={estilosAdmin.rolUsuario}>{item.rol}</Text>
                            </View>

                            <View style={estilosAdmin.bloqueInfo}>
                                <View style={estilosAdmin.chipEstado}>
                                    <Ionicons name="alert-circle-outline" size={12} color="#FFD76A" style={estilosAdmin.iconoChip} />
                                    <Text style={estilosAdmin.textoEstado}>Pendiente</Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={() => aprobar(item.id)}
                                style={estilosAdmin.botonAprobar}
                            >
                                <Ionicons name="checkmark-circle-outline" size={18} color="#06131F" style={estilosAdmin.iconoBoton} />
                                <Text style={estilosAdmin.textoBoton}>Aprobar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

        </LinearGradient>
    )
}
