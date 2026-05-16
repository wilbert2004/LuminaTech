import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//impormamos nuestro home screen
import { HomeScreen } from '../modules/home/screen/HomeScreen';
//imporamos nuestro devices screen
import { DevicesScreen } from '../modules/devices/Screen/DevicesScreen';
//importamos nuestro sensors screen
import { SensorsScreen } from '../modules/sensors/screen/SensorsScreen';
//usaremos el analytics screen 
import { AnalyticsScreen } from '../modules/analytics/screen/AnalyticsScreen';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Dispositivos" component={DevicesScreen} />
            <Tab.Screen name="Sensores" component={SensorsScreen} />
            <Tab.Screen name="Historial de Lecturas" component={AnalyticsScreen} />
            {/* próximamente */}
            {/* <Tab.Screen name="Dispositivos" component={DevicesScreen} /> */}
            {/* <Tab.Screen name="Sensores" component={SensorsScreen} /> */}

        </Tab.Navigator>
    );
};

export default AppNavigator;