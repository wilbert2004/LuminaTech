//importamos los useauth 
import { useAuth, } from '../hooks/useAuth'
//importamos los usestate para manejar el estado de los inputs
import { useState } from 'react'
//coomponente de pantalla de login
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
//importamos el style de nuestro login
import { loginStyle } from '../styles/Loginstyle';

//importaremos el logo de nuestra app
import logo from '../../../assets/logo1.png';

export const loginScreen = ({ goToRegister }) => {
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
        <View style={loginStyle.contenedor} >

            <View style={loginStyle.tarjeta} >
                <Image source={logo} style={loginStyle.logo} />

                <Text style={loginStyle.titulo} >Bienvenido a tu login</Text>
                <Text></Text>

                <Text style={loginStyle.texto} >ingrese su correo electrónico</Text>
                <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={loginStyle.inputL} />

                <Text style={loginStyle.texto} >ingrese su contraseña</Text>
                <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={loginStyle.inputL} />

                <TouchableOpacity onPress={handleLogin} disabled={loading}>
                    <Text style={loginStyle.boton}>{loading ? 'Iniciando sesion' : 'Iniciar Sesion'}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToRegister} disabled={loading}>
                    <Text style={loginStyle.boton}>No tengo una cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}


//exportamos la funcion de nuestro componente de login
export default loginScreen;