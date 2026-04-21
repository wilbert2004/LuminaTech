//importamos nuestro login screen
import LoginScreen from './src/modules/auth/screens/LoginScreen';
//auth context
import { AuthProvidrer } from './src/context/AuthContext';

//importamos el register screen
import { RegisterScreen } from './src/modules/auth/screens/RegisterScreen';
//definimos usestate para manejar el estado de la pantalla
import { useState } from 'react';


export default function App() {

  //manejamos estados
  const [screen, setScreen] = useState('login');

  return (
    <AuthProvidrer>
      {screen === 'login' ? (
        <LoginScreen goToRegister={() => setScreen('register')} />
      ) : (
        <RegisterScreen goToLogin={() => setScreen('login')} />
      )}
    </AuthProvidrer>
  );
}


