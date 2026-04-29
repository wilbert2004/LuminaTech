//integramos el servicio de autenticacion para el registro de usuarios
import { useState } from 'react'
import { signUpWithEmail } from '../services/authService'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
//implemenntamos nuestro style de login para el registro
import { Loginstyle } from '../styles/Loginstyle';

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
        <View style={Loginstyle.container}>
            <Text style={Loginstyle.texto}>Bienvenido a tu registro</Text>

            <Text style={Loginstyle.textParrafo}>Ingresa tu nombre por favor</Text>
            <TextInput placeholder='Nombre' value={nombre} onChangeText={setNombre} style={Loginstyle.inputL} />

            <Text style={Loginstyle.textParrafo}>Ingresa tu email por favor</Text>
            <TextInput placeholder='Email' autoCapitalize='none' autoCorrect={false} keyboardType='email-address' value={email} onChangeText={setEmail} style={Loginstyle.inputL} />

            <Text style={Loginstyle.textParrafo}>Ingresa tu password por favor</Text>
            <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={Loginstyle.inputL} />

            <TouchableOpacity onPress={handleRegister} style={Loginstyle.buttonL} disabled={loading}>
                <Text style={Loginstyle.buttonText}>{loading ? 'Registrando...' : 'Registrarse'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Loginstyle.buttonL} onPress={goToLogin}>
                <Text style={Loginstyle.buttonText}>Ya tengo una cuenta</Text>
            </TouchableOpacity>
        </View>
    );
}