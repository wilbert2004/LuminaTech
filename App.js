//importamos nuestro login screen
import LoginScreen from './src/modules/auth/screens/LoginScreen';
//auth context
import { AuthProvider, AuthContext } from './src/context/AuthContext';
//implemento el useccontext para manejar el estado de autenticacion
import { useContext, useEffect } from 'react';
//importamos el register screen
import { RegisterScreen } from './src/modules/auth/screens/RegisterScreen';
//definimos usestate para manejar el estado de la pantalla
import { useState } from 'react';
//importanmos nuestro home 
import { HomeScreen } from './src/modules/home/screen/HomeScreen';

//importamos los navogation
import AppNavigator from './src/navigation/AppNavigator';

//naviagtion containe
import { NavigationContainer } from '@react-navigation/native';
//conexion de sqlite 
import { initDatabase } from './src/database/sqlite';

//importar los LogBox para depurar la base de datos
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'onPressIn',
  'onPressOut',
  'TouchableMixin',
]);
const MainApp = () => {
  const { user, loading } = useContext(AuthContext);
  const [screen, setScreen] = useState('login');

  // Cuando ya no hay usuario autenticado, forzamos el regreso a la pantalla de login.
  useEffect(() => {
    if (!user) {
      setScreen('login');
    }
  }, [user]);

  if (loading) return null;

  if (user) {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
  }

  return screen === 'login' ? (
    <LoginScreen goToRegister={() => setScreen('register')} />
  ) : (
    <RegisterScreen goToLogin={() => setScreen('login')} />
  );
};




export default function App() {
  useEffect(() => {
    initDatabase();

  }, []);
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}


