import { Text } from 'react-native';

//importamos nuestro login screen
import LoginScreen from './src/modules/auth/screens/LoginScreen';
//auth context
import { AuthProvidrer } from './src/context/AuthContext';


export default function App() {
  return (
    <AuthProvidrer>
      <LoginScreen />
    </AuthProvidrer>
  );
}


