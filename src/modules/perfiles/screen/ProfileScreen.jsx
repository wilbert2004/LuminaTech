import { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { usePerfil } from '../hook/useProfile';
import { AuthContext } from '../../../context/AuthContext';
import { formatearFecha } from '../../../utils/formatearFecha';
import { estilosPerfil } from '../style/Profilestyle';

export const ProfileScreen = () => {
    // Obtenemos el usuario y la acción de cerrar sesión.
    const { user, logout } = useContext(AuthContext);
    // Cargamos el perfil desde el hook en español.
    const { perfil, loading } = usePerfil(user);

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
                            <Text style={estilosPerfil.valorDato}>{perfil?.nombre ?? 'Sin nombre'}</Text>
                        </View>

                        <View style={estilosPerfil.filaDato}>
                            <Text style={estilosPerfil.etiquetaDato}>Correo</Text>
                            <Text style={estilosPerfil.valorDato}>{user?.email ?? 'Sin correo'}</Text>
                        </View>

                        <View style={estilosPerfil.filaDato}>
                            <Text style={estilosPerfil.etiquetaDato}>Fecha de alta</Text>
                            <Text style={estilosPerfil.valorDato}>{formatearFecha(perfil?.created_at)}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={estilosPerfil.botonCerrarSesion} onPress={logout}>
                        <Ionicons name="log-out-outline" size={18} color="#06131F" style={estilosPerfil.iconoBoton} />
                        <Text style={estilosPerfil.textoBoton}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};