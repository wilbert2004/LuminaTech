//crearemos un stack navigator para manejar la navegacion entre pantallas
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importar nuestro app navigator para manejar la navegacion entre pantallas
import AppNavigator from './AppNavigator';

//importamos el modulo de screen de admin para manejar la pantalla de admin
import { AdminUsersScreen } from '../modules/admin/screen/AdminUsersScreen';

//agregamos el admin devices screen
import { AdminDevicesScreen } from '../modules/admin/screen/AdminDevicesScreen';
//crearemos una variable para manejar el stack navigator
const Stack = createNativeStackNavigator();

//crearemos una funcion para manejar la navegacion entre pantallas
export default function RootNavigator() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Tabs"
                component={AppNavigator}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="AdminUsuarios"
                component={AdminUsersScreen}
                options={{
                    title: 'Administrar Usuarios'
                }}
            />

            <Stack.Screen
                name="AdminDispositivos"
                component={AdminDevicesScreen}
                options={{
                    title: 'crear Dispositivos'
                }}
            />

        </Stack.Navigator>
    );
}