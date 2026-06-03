import { useContext } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView, TextInput,
    Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { usePerfil } from '../hook/useProfile';
import { AuthContext } from '../../../context/AuthContext';
import { formatearFecha } from '../../../utils/formatearFecha';
import { estilosPerfil } from '../style/Profilestyle';
//importamos el hook de estados
import { useState } from 'react';


export const ProfileScreen = () => {
    // Obtenemos el usuario y la acción de cerrar sesión.
    const { user, logout } = useContext(AuthContext);
    const navigation = useNavigation();
    // Cargamos el perfil desde el hook en español.
    const { perfil, loading, actualizarNombre } = usePerfil(user);
    // Mientras se carga el perfil, mostramos una vista de carga.
    const { rol, estado } = useContext(AuthContext);
    // Estado para el input de edición del nombre
    const [editarNombre, setEditarNombre] = useState(false);
    const [nombreTemporal, setNombreTemporal] = useState('');

    if (loading) {
        return (
            <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosPerfil.contenedor}>
                <View style={estilosPerfil.brilloSuperior} />
                <View style={estilosPerfil.brilloInferior} />

                <View style={estilosPerfil.contenido}>
                    <Text style={estilosPerfil.loadingText}>Cargando perfil...</Text>
                </View>
            </LinearGradient>
        );
    }
    //crearemos una funcion para validar si el nombre este vacio o no 
    const guardarNombre = async () => {
        if (!nombreTemporal.trim()) {
            Alert.alert('Nombre inválido', 'El nombre no puede estar vacío.');
            return false;
        }
        const ok = await actualizarNombre(nombreTemporal);
        if (ok) {
            Alert.alert('Éxito', 'Nombre actualizado correctamente.');
            setEditarNombre(false);
            //limpiar el estado temporal del nombre
            setNombreTemporal('');
        } else {
            Alert.alert('Error', 'No se pudo actualizar el nombre. Inténtalo de nuevo.');
        }
    }

    return (
        <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosPerfil.contenedor}>
            <View style={estilosPerfil.brilloSuperior} />
            <View style={estilosPerfil.brilloInferior} />

            <ScrollView contentContainerStyle={estilosPerfil.contenido} showsVerticalScrollIndicator={false}>
                <View style={estilosPerfil.cuerpo}>
                    <View style={estilosPerfil.tarjetaPrincipal}>
                        <View style={estilosPerfil.etiqueta}>
                            <Ionicons name="person-outline" size={14} color="#7BFFD1" style={estilosPerfil.iconoEtiqueta} />
                            <Text style={estilosPerfil.textoEtiqueta}>Mi perfil</Text>
                        </View>

                        <Text style={estilosPerfil.titulo}>Perfil de usuario</Text>
                        <Text style={estilosPerfil.subtitulo}>
                            Aquí puedes revisar la información básica de tu cuenta dentro del sistema.
                        </Text>
                    </View>

                    <View style={estilosPerfil.tarjetaDatos}>
                        <View style={estilosPerfil.filaDato}>
                            <Text style={estilosPerfil.etiquetaDato}>Nombre</Text>

                            {editarNombre ? (
                                <>
                                    <TextInput
                                        value={nombreTemporal}
                                        onChangeText={setNombreTemporal}
                                        placeholder="Nuevo nombre"
                                        placeholderTextColor="#73829B"
                                        style={{
                                            backgroundColor: '#0A1626',
                                            color: '#fff',
                                            padding: 12,
                                            borderRadius: 10,
                                            marginTop: 8,
                                            borderWidth: 1,
                                            borderColor: '#1E3556'
                                        }}
                                    />

                                    <TouchableOpacity
                                        onPress={guardarNombre}
                                        style={{
                                            marginTop: 10,
                                            backgroundColor: '#00FF9C',
                                            padding: 12,
                                            borderRadius: 10,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Text style={{ color: '#06131F', fontWeight: '800' }}>
                                            Guardar nombre
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setEditarNombre(false);
                                            setNombreTemporal('');
                                        }}
                                        style={{
                                            marginTop: 8,
                                            padding: 10,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Text style={{ color: '#A9B9D3', fontWeight: '700' }}>
                                            Cancelar
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <>
                                    <Text style={estilosPerfil.valorDato}>
                                        {perfil?.nombre ?? 'Sin nombre'}
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setNombreTemporal(perfil?.nombre ?? '');
                                            setEditarNombre(true);
                                        }}
                                        style={{
                                            marginTop: 8,
                                            alignSelf: 'flex-start'
                                        }}
                                    >
                                        <Text style={{ color: '#00FF9C', fontWeight: '800' }}>
                                            Editar nombre
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>

                        <View style={estilosPerfil.filaDato}>
                            <Text style={estilosPerfil.etiquetaDato}>Correo</Text>
                            <Text style={estilosPerfil.valorDato}>{user?.email ?? 'Sin correo'}</Text>
                        </View>

                        <View style={estilosPerfil.filaDato}>
                            <Text style={estilosPerfil.etiquetaDato}>Rol</Text>
                            <Text style={estilosPerfil.valorDato}>{rol ?? 'Sin rol'}</Text>
                        </View>

                        <View style={estilosPerfil.filaDato}>
                            <Text style={estilosPerfil.etiquetaDato}>Estado</Text>
                            <Text style={estilosPerfil.valorDato}>{estado ?? 'Sin estado'}</Text>
                        </View>

                        <View style={estilosPerfil.filaDato}>
                            <Text style={estilosPerfil.etiquetaDato}>Fecha de alta</Text>
                            <Text style={estilosPerfil.valorDato}>{formatearFecha(perfil?.created_at)}</Text>
                        </View>
                    </View>

                    {rol === 'admin' && (
                        <TouchableOpacity
                            style={estilosPerfil.botonAdministrarUsuarios}
                            onPress={() => navigation.navigate('AdminUsuarios')}
                        >
                            <Ionicons name="people-outline" size={18} color="#7BFFD1" style={estilosPerfil.iconoBotonAdministrar} />
                            <Text style={estilosPerfil.textoBotonAdministrar}>Administrar Usuarios</Text>
                        </TouchableOpacity>


                    )}

                    {
                        rol === 'admin' && (
                            <TouchableOpacity
                                style={estilosPerfil.botonAdmin}
                                onPress={() => navigation.navigate('AdminDispositivos')}
                            >
                                <Ionicons
                                    name="hardware-chip-outline"
                                    size={20}
                                    color="#06131F"
                                    style={estilosPerfil.iconoBotonAdmin}
                                />

                                <Text style={estilosPerfil.textoBotonAdmin}>
                                    Crear dispositivo
                                </Text>
                            </TouchableOpacity>
                        )
                    }

                    <TouchableOpacity style={estilosPerfil.botonCerrarSesion} onPress={logout}>
                        <Ionicons name="log-out-outline" size={18} color="#06131F" style={estilosPerfil.iconoBoton} />
                        <Text style={estilosPerfil.textoBoton}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};