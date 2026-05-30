import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//impormamos nuestro home screen
import { HomeScreen } from '../modules/home/screen/HomeScreen';
//imporamos nuestro devices screen
import { DevicesScreen } from '../modules/devices/Screen/DevicesScreen';
//importamos nuestro sensors screen
import { SensorsScreen } from '../modules/sensors/screen/SensorsScreen';
//usaremos el analytics screen 
import { AnalyticsScreen } from '../modules/analytics/screen/AnalyticsScreen';
import { ProfileScreen } from '../modules/perfiles/screen/ProfileScreen';
//importamos el screen de acciones
import { ActionsScreen } from '../modules/actions/screen/ActionsScreen';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#07111E',
                    borderTopColor: 'rgba(132, 196, 255, 0.12)',
                    height: 64,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarActiveTintColor: '#00FF9C',
                tabBarInactiveTintColor: '#73829B',
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '700',
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName = 'ellipse-outline';

                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'Sensores') iconName = 'pulse-outline';
                    else if (route.name === 'Historial de Lecturas') iconName = 'reader-outline';
                    else if (route.name === 'Acciones') iconName = 'flash-outline';
                    else if (route.name === 'Perfil') iconName = 'person-outline';


                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >

            <Tab.Screen name="Home" component={HomeScreen} />
            {/* <Tab.Screen name="Dispositivos" component={DevicesScreen} />*/}
            <Tab.Screen name="Sensores" component={SensorsScreen} />
            <Tab.Screen name="Historial de Lecturas" component={AnalyticsScreen} />
            <Tab.Screen name="Acciones" component={ActionsScreen} />
            <Tab.Screen name="Aulas" component={DevicesScreen} />
            <Tab.Screen name="Perfil" component={ProfileScreen} />

            {/* próximamente */}
            {/* <Tab.Screen name="Sensores" component={SensorsScreen} /> */}

        </Tab.Navigator>
    );
};

export default AppNavigator;