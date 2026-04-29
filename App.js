//importamos nuestro login screen
import LoginScreen from './src/modules/auth/screens/LoginScreen';
//auth context
import { AuthProvidrer, AuthContext } from './src/context/AuthContext';
//implemento el useccontext para manejar el estado de autenticacion
import { useContext } from 'react';
//importamos el register screen
import { RegisterScreen } from './src/modules/auth/screens/RegisterScreen';
//definimos usestate para manejar el estado de la pantalla
import { useState } from 'react';
//importanmos nuestro home 
import { HomeScreen } from './src/modules/home/screen/HomeScreen';

export const MainApp = () => {
  const { user, loading } = useContext(AuthContext);
  const [screen, setScreen] = useState('login');

  if (loading) return null; // o splash screen

  if (user) return <HomeScreen />;

  return screen === 'login' ? (
    <LoginScreen goToRegister={() => setScreen('register')} />
  ) : (
    <RegisterScreen goToLogin={() => setScreen('login')} />
  );

}


export default function App() {
  return (
    <AuthProvidrer>
      <MainApp />
    </AuthProvidrer>
  );
}


