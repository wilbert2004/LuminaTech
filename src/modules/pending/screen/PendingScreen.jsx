import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

//importamos lo usecontext para obtener el estado del usuario
import { useContext } from 'react';
//importamos el contexto de autenticacion para obtener el estado del usuario
import { AuthContext } from '../../../context/AuthContext';
import { estilosPending } from '../style/Pendingstyle';

export const PendingScreen = () => {
    const { logout } = useContext(AuthContext);

    return (
        <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={estilosPending.contenedor}>
            <View style={estilosPending.brilloSuperior} />
            <View style={estilosPending.brilloInferior} />

            <View style={estilosPending.contenido}>
                <View style={estilosPending.cuerpo}>
                    <View style={estilosPending.tarjetaPrincipal}>
                        <View style={estilosPending.etiqueta}>
                            <Ionicons name="shield-outline" size={14} color="#FFD76A" style={estilosPending.iconoEtiqueta} />
                            <Text style={estilosPending.textoEtiqueta}>Acceso restringido</Text>
                        </View>

                        <Text style={estilosPending.titulo}>Cuenta pendiente</Text>
                        <Text style={estilosPending.subtitulo}>
                            Tu cuenta está esperando aprobación por parte del administrador.
                        </Text>

                        <View style={estilosPending.alerta}>
                            <Text style={estilosPending.alertaTitulo}>Sigue en revisión</Text>
                            <Text style={estilosPending.alertaTexto}>
                                Cuando tu perfil sea aprobado podrás entrar al panel principal y ver tus módulos.
                            </Text>
                        </View>

                        <TouchableOpacity onPress={logout} style={estilosPending.botonCerrarSesion}>
                            <Ionicons name="log-out-outline" size={18} color="#06131F" style={estilosPending.iconoBoton} />
                            <Text style={estilosPending.textoBoton}>Cerrar sesión</Text>
                        </TouchableOpacity>

                        <Text style={estilosPending.nota}>
                            El acceso se habilita únicamente después de la aprobación.
                        </Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};