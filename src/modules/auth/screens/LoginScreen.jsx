//importamos los useauth 
import { useAuth, } from '../hooks/useAuth'
//importamos los usestate para manejar el estado de los inputs
import { useState } from 'react'
//coomponente de pantalla de login
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
//importamos el style de nuestro login
import { Loginstyle } from '../styles/Loginstyle';

export const loginScreen = ({ goToRegister }) => {
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
        <View style={Loginstyle.container}>
            <Text style={Loginstyle.texto}>Bienvenido a tu login</Text>
            <Text><br></br></Text>
            <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={Loginstyle.inputL} />

            <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={Loginstyle.inputL} />

            <TouchableOpacity style={Loginstyle.buttonL} onPress={handleLogin}>
                <Text style={Loginstyle.buttonText}>{loading ? 'Iniciando sesion' : 'Iniciar Sesion'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Loginstyle.buttonL} onPress={goToRegister}>
                <Text style={Loginstyle.buttonText}>No tengo una cuenta</Text>
            </TouchableOpacity>
        </View>
    )

}


//exportamos la funcion de nuestro componente de login
export default loginScreen;