//integramos el servicio de autenticacion para el registro de usuarios
import { useState } from 'react'
import { signUpWithEmail } from '../services/authService'
import { View, Text, TextInput, Button } from 'react-native'

export const RegisterScreen = ({ goToLogin }) => {
    //crearemos estados para nuestro signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');

    //crearemos un funcion para manejar el registro de usuarios
    const handleRegister = async () => {
        try {
            await signUpWithEmail(email, password, nombre);
            alert("Registro exitoso");
            goToLogin();
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <View>
            <Text>Bienvenido a tu registro</Text>

            <Text>Ingresa tu nombre por favor</Text>
            <TextInput placeholder='Nombre' value={nombre} onChangeText={setNombre} />

            <Text>Ingresa tu email por favor</Text>
            <TextInput placeholder='Email' autoCapitalize='none' autoCorrect={false} keyboardType='email-address' value={email} onChangeText={setEmail} />

            <Text>Ingresa tu password por favor</Text>
            <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />

            <Button title='Registrarse' onPress={handleRegister} />
            <Button title='Ya tengo una cuenta' onPress={goToLogin} />
        </View>
    );
}