import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

export const GraficaLecturas = ({ data = [] }) => {
    // Preparamos la serie para la gráfica desde el valor de cada lectura.
    const datosGrafica = data.map((lectura, index) => ({
        value: Number(lectura.valor),
        label: `${index + 1}`
    }));

    return (
        <View>
            <LineChart
                data={datosGrafica}
                spacing={32}
                thickness={3}
                hideDataPoints={false}
                color="#00FF9C"
                startFillColor="rgba(0,255,156,0.3)"
                endFillColor="rgba(0,255,156,0.01)"
                initialSpacing={10}
                noOfSections={5}
                animateOnDataChange
                areaChart
            />
        </View>
    )
}

export const graficaLecturas = GraficaLecturas;
export const LecturasChart = GraficaLecturas;