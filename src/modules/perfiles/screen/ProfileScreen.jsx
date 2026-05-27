// componentes necesarios
import { View, Text, TouchableOpacity } from 'react-native';

// hook de perfil
import { useProfile } from '../hook/useProfile';

// auth context
import { useContext } from 'react';

import { AuthContext } from '../../../context/AuthContext';
import { formatearFecha } from '../../../utils/formatearFecha';

export const ProfileScreen = () => {
    const { user, logout } = useContext(AuthContext);
    const { perfil, loading } = useProfile(user);

    if (loading) {
        return (
            <View>
                <Text>Cargando perfil...</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>Perfil Usuario</Text>
            <Text>Nombre: {perfil?.nombre}</Text>
            <Text>Correo: {user?.email}</Text>
            <Text>Fecha: {formatearFecha(perfil?.created_at)}</Text>

            <TouchableOpacity onPress={logout}>
                <Text>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};