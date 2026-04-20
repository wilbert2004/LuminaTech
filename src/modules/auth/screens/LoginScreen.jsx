//importamos los useauth 
import { useAuth, } from '../hooks/useAuth'
//importamos los usestate para manejar el estado de los inputs
import { useState } from 'react'
//coomponente de pantalla de login
import { Text, View, TextInput, Button } from 'react-native'

export const loginScreen = () => {
    //importamos los estadi 
    const { login, loading } = useAuth();

    //creamos un estado para el email y password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //crearemos el hadle 
    const handleLogin = async () => {
        try {
            await login(email, password);
            alert("Inicio de sesion exitoso");

        } catch (error) {
            alert(error.message);
        }

    }

    //agregamos los ui de cada componenten
    return (
        <View>
            <Text>Bienvenido a tu login</Text>
            <TextInput placeholder='Email' value={email} onChangeText={setEmail} />
            <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
            <Button title={loading ? 'Iniciando sesion' : 'Iniciar Sesion'} onPress={handleLogin} />
        </View>
    )

}


//exportamos la funcion de nuestro componente de login
export default loginScreen;