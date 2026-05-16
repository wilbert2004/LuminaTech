//importamos componentens view 
import { View, Text, StyleSheet } from 'react-native';

//importamos el componente de chart
import { LineChart } from 'react-native-gifted-charts';

//crearemos el componente de lecturas chart
export const LecturasChart = ({ data = [] }) => {

    //prepararemos los datos para el chart
    const chartData = data.map((lectura, index) => ({
        value: Number(lectura.valor),
        label: `${index + 1}`
    }));

    return (
        <View>
            <LineChart
                data={chartData}
                spacing={40}
                thickness={3}
                hideDataPoints={false}
                color="green"
                startFillColor="rgba(0,255,0,0.3)"
                endFillColor="rgba(0,255,0,0.01)"
                initialSpacing={10}
                noOfSections={5}
                animateOnDataChange
                areaChart
            />
        </View>
    )
}