import { useContext, useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../../context/AuthContext';
import { UseHome } from '../hooks/useHome';
import { homestyle } from '../style/Homestyle';

export const HomeScreen = () => {
    // Obtenemos el usuario autenticado y la acción para cerrar sesión.
    const { user, logout } = useContext(AuthContext);
    // Guardamos el estado del botón para evitar múltiples pulsaciones seguidas.
    const [loggingOut, setLoggingOut] = useState(false);
    // Obtenemos el nombre del perfil, el estado de carga y el resumen del dashboard.
    const { nombre, loading, resumen } = UseHome(user);

    // Mientras no exista usuario o aún se carguen los datos, mostramos una vista mínima.
    if (!user || loading) {
        return (
            <View style={homestyle.contenedor}>
                <Text style={homestyle.loadingText}>Cargando panel...</Text>
            </View>
        );
    }

    // Ejecutamos el cierre de sesión de forma directa para evitar que el flujo quede detenido en el alert.
    const handleLogout = async () => {
        if (loggingOut) {
            return;
        }

        try {
            setLoggingOut(true);
            await logout();
        } catch (error) {
            Alert.alert('Error', 'No se pudo cerrar la sesión.');
        } finally {
            setLoggingOut(false);
        }
    };

    return (
        <LinearGradient colors={['#06101C', '#0A1626', '#06101C']} style={homestyle.contenedor}>
            {/* Fondo decorativo suave para dar profundidad sin recargar la vista. */}
            <View style={homestyle.glowTop} />
            {/* Segunda luz ambiental para equilibrar el fondo. */}
            <View style={homestyle.glowBottom} />

            <ScrollView contentContainerStyle={homestyle.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={homestyle.pageBody}>
                    {/* Encabezado principal del dashboard. */}
                    <View style={homestyle.heroCard}>
                        <View style={homestyle.badge}>
                            <Ionicons name="sunny-outline" size={14} color="#7BFFD1" style={homestyle.badgeIcon} />
                            <Text style={homestyle.badgeText}>Smart Lighting</Text>
                        </View>

                        <Text style={homestyle.title}>Hola, {nombre}</Text>
                        <Text style={homestyle.subtitle}>
                            Este es tu panel de control para revisar iluminación, sensores y actividad del sistema desde una sola vista.
                        </Text>

                        <View style={homestyle.heroMetaRow}>
                            <View style={[homestyle.metaChip, homestyle.metaChipSpacing]}>
                                <Ionicons name="shield-checkmark-outline" size={14} color="#00FF9C" style={homestyle.metaChipIcon} />
                                <Text style={homestyle.metaChipText}>Sesión activa</Text>
                            </View>

                            <View style={homestyle.metaChip}>
                                <Ionicons name="layers-outline" size={14} color="#7FB3FF" style={homestyle.metaChipIcon} />
                                <Text style={homestyle.metaChipText}>Vista modular</Text>
                            </View>
                        </View>
                    </View>

                    {/* Título de la sección de métricas. */}
                    <Text style={homestyle.sectionTitle}>Resumen general</Text>

                    {/* Cuadrícula con métricas rápidas del sistema. */}
                    <View style={homestyle.statsGrid}>
                        <View style={homestyle.statCard}>
                            <View style={[homestyle.statIcon, homestyle.statIconGreen]}>
                                <Ionicons name="flash-outline" size={18} color="#00FF9C" />
                            </View>
                            <Text style={homestyle.statLabel}>Dispositivos</Text>
                            <Text style={homestyle.statValue}>{resumen.dispositivos}</Text>
                            <Text style={homestyle.statHint}>Conectados al sistema</Text>
                        </View>

                        <View style={homestyle.statCard}>
                            <View style={[homestyle.statIcon, homestyle.statIconBlue]}>
                                <Ionicons name="analytics-outline" size={18} color="#7FB3FF" />
                            </View>
                            <Text style={homestyle.statLabel}>Sensores</Text>
                            <Text style={homestyle.statValue}>{resumen.sensores}</Text>
                            <Text style={homestyle.statHint}>Lecturas activas</Text>
                        </View>

                        <View style={homestyle.statCard}>
                            <View style={[homestyle.statIcon, homestyle.statIconGreen]}>
                                <Ionicons name="radio-outline" size={18} color="#00FF9C" />
                            </View>
                            <Text style={homestyle.statLabel}>Activos</Text>
                            <Text style={homestyle.statValue}>{resumen.activos}</Text>
                            <Text style={homestyle.statHint}>En funcionamiento</Text>
                        </View>

                        <View style={homestyle.statCard}>
                            <View style={[homestyle.statIcon, homestyle.statIconBlue]}>
                                <Ionicons name="time-outline" size={18} color="#7FB3FF" />
                            </View>
                            <Text style={homestyle.statLabel}>Estado</Text>
                            <Text style={homestyle.statValue}>Live</Text>
                            <Text style={homestyle.statHint}>Monitoreo continuo</Text>
                        </View>
                    </View>

                    {/* Bloque de acción directa para una salida clara y ordenada. */}
                    <View style={homestyle.actionCard}>
                        <View style={homestyle.actionHeader}>
                            <Ionicons name="flash-outline" size={18} color="#00FF9C" style={homestyle.actionIcon} />
                            <Text style={homestyle.actionTitle}>Acción rápida</Text>
                        </View>

                        <Text style={homestyle.actionText}>
                            Cierra tu sesión cuando termines de revisar el panel de iluminación.
                        </Text>

                        <TouchableOpacity style={homestyle.logoutButton} onPress={handleLogout} disabled={loggingOut}>
                            <Ionicons name="log-out-outline" size={18} color="#06131F" style={homestyle.logoutIcon} />
                            <Text style={homestyle.logoutButtonText}>{loggingOut ? 'Cerrando sesión...' : 'Cerrar sesión'}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Pie pequeño para reforzar la identidad modular del proyecto. */}
                    <Text style={homestyle.footerText}>Cada módulo conserva su propio estilo y su propia pantalla.</Text>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};