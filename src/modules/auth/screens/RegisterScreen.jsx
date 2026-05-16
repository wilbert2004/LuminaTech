//integramos el servicio de autenticacion para el registro de usuarios
import { useState } from 'react'
import { signUpWithEmail } from '../services/authService'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
//implemenntamos nuestro style de login para el registro
import { loginStyle } from '../styles/Loginstyle';
//importaremos el componente de imagen 
import { Image } from 'react-native';
//importaremos el logo de nuestra app 
import logo from '../../../assets/logo1.png';

export const RegisterScreen = ({ goToLogin }) => {
    //crearemos estados para nuestro signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [error, setError] = useState('');
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
        <View style={loginStyle.contenedor} >

            <View style={loginStyle.tarjeta} >
                <Image source={logo} style={loginStyle.logo} />
                <Text style={loginStyle.titulo} >Bienvenido a tu registro</Text>

                <Text style={loginStyle.texto} >Ingresa tu nombre por favor</Text>
                <TextInput placeholder='Nombre' value={nombre} onChangeText={setNombre} style={loginStyle.inputL} />

                <Text style={loginStyle.texto} >Ingresa tu email por favor</Text>
                <TextInput placeholder='Email' autoCapitalize='none' autoCorrect={false} keyboardType='email-address' value={email} onChangeText={setEmail} style={loginStyle.inputL} />

                <Text style={loginStyle.texto} >Ingresa tu password por favor</Text>
                <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={loginStyle.inputL} />

                <View style={loginStyle.botonesContainer} >

                    <TouchableOpacity onPress={handleRegister} disabled={loading}>
                        <Text style={loginStyle.boton} >
                            {loading ? 'Registrando...' : 'Registrarse'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToLogin}>
                        <Text style={loginStyle.boton}>Ya tengo una cuenta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}