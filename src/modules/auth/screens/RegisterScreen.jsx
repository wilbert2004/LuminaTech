//integramos el servicio de autenticacion para el registro de usuarios
import { useState } from 'react'
import { signUpWithEmail } from '../services/authService'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
//implemenntamos nuestro style de login para el registro
import { registerStyle } from '../styles/Registerstyle';
//importaremos el componente de imagen 
import { Image } from 'react-native';
//importaremos el logo de nuestra app 
import logo from '../../../assets/logo1.png';

export const RegisterScreen = ({ goToLogin }) => {
    //crearemos estados para nuestro signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [loading, setLoading] = useState(false);

    //crearemos un funcion para manejar el registro de usuarios
    const handleRegister = async () => {
        // Validar que los campos no estén vacíos
        if (!nombre.trim() || !email.trim() || !password.trim()) {
            alert("Por favor completa todos los campos");
            return;
        }
        try {
            setLoading(true);
            await signUpWithEmail(email, password, nombre);
            alert("Registro exitoso");
            goToLogin();
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <LinearGradient
            colors={['#07111E', '#0B1A2C', '#08111E']}
            style={registerStyle.contenedor}
        >
            <View style={registerStyle.glowTop} />
            <View style={registerStyle.glowBottom} />

            <View style={registerStyle.tarjeta}>
                <View style={registerStyle.badge}>
                    <Text style={registerStyle.badgeText}>Crear cuenta</Text>
                </View>

                <Image source={logo} style={registerStyle.logo} />
                <Text style={registerStyle.titulo}>Únete al sistema</Text>
                <Text style={registerStyle.subtitulo}>Crea tu acceso para controlar luces, automatizaciones y estados desde un solo panel.</Text>

                <Text style={registerStyle.texto}>Nombre completo</Text>
                <TextInput
                    placeholder='Nombre'
                    placeholderTextColor='#6F7F9B'
                    value={nombre}
                    onChangeText={setNombre}
                    style={registerStyle.inputL}
                />

                <Text style={registerStyle.texto}>Correo electrónico</Text>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor='#6F7F9B'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                    style={registerStyle.inputL}
                />

                <Text style={registerStyle.texto}>Contraseña</Text>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#6F7F9B'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={registerStyle.inputL}
                />

                <TouchableOpacity style={registerStyle.boton} onPress={handleRegister} disabled={loading}>
                    <Text style={registerStyle.botonTexto}>{loading ? 'Registrando...' : 'Registrarse'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={registerStyle.botonSecundario} onPress={goToLogin}>
                    <Text style={registerStyle.botonTextoSecundario}>Ya tengo una cuenta</Text>
                </TouchableOpacity>

                <Text style={registerStyle.footerText}>Tu cuenta queda lista para el ecosistema de iluminación automatizada.</Text>
            </View>
        </LinearGradient>
    );
}