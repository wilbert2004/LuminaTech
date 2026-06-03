//importamos los useauth 
import { useAuth, } from '../hooks/useAuth'
//importamos los usestate para manejar el estado de los inputs
import { useState } from 'react'
//coomponente de pantalla de login
import { KeyboardAvoidingView, Platform, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
//importamos el style de nuestro login
import { loginStyle } from '../styles/Loginstyle';

//importaremos el logo de nuestra app
import logo from '../../../assets/logo1.png';

export const LoginScreen = ({ goToRegister }) => {
    //importamos los estadi 
    const { login, loading } = useAuth();

    //creamos un estado para el email y password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //crearemos el hadle 
    const handleLogin = async () => {
        // Validar que los campos no estén vacíos
        if (!email.trim() || !password.trim()) {
            alert("Por favor completa todos los campos");
            return;
        }
        try {
            await login(email, password);
            alert("Inicio de sesion exitoso");

        } catch (error) {
            alert(error.message);
        }

    }

    //agregamos los ui de cada componenten
    return (
        <LinearGradient
            colors={['#07111E', '#0B1A2C', '#08111E']}
            style={loginStyle.contenedor}
        >
            <KeyboardAvoidingView
                style={loginStyle.keyboardWrapper}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <SafeAreaView style={loginStyle.safeArea}>
                    <View style={loginStyle.screenBody}>
                    <View style={loginStyle.glowTop} />
                    <View style={loginStyle.glowBottom} />

                    <View style={loginStyle.tarjeta}>
                        <View style={loginStyle.badge}>
                            <Text style={loginStyle.badgeText}>IoT Lighting Control</Text>
                        </View>

                        <Image source={logo} style={loginStyle.logo} />

                        <Text style={loginStyle.titulo}>Controla tu iluminación</Text>
                        <Text style={loginStyle.subtitulo}>Accede al panel inteligente para gestionar tus dispositivos y escenas.</Text>

                        <Text style={loginStyle.texto}>Correo electrónico</Text>
                        <TextInput
                            placeholder='Email'
                            placeholderTextColor='#6F7F9B'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                            style={loginStyle.inputL}
                        />

                        <Text style={loginStyle.texto}>Contraseña</Text>
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor='#6F7F9B'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={loginStyle.inputL}
                        />

                        <TouchableOpacity style={loginStyle.boton} onPress={handleLogin} disabled={loading}>
                            <Text style={loginStyle.botonTexto}>{loading ? 'Iniciando sesión...' : 'Iniciar sesión'}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={loginStyle.botonSecundario} onPress={goToRegister} disabled={loading}>
                            <Text style={loginStyle.botonTextoSecundario}>No tengo una cuenta</Text>
                        </TouchableOpacity>

                        <Text style={loginStyle.footerText}>Diseñado para un sistema de iluminación automática con enfoque IoT.</Text>
                    </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )

}


//exportamos la funcion de nuestro componente de login
export default LoginScreen;