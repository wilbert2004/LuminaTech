//componentes 
import {
    View,
    Text,
    FlatList,
    Button,
} from 'react-native';

//hook
import { useActions } from '../hooks/useActions';
import { formatearFecha } from '../../../utils/formatearFecha';

//FUNCION PRINCIPAL
export const ActionsScreen = () => {
    //obtenemos las acciones, las funciones para encender y apagar y el loading
    const { acciones, encender, apagar, loading } = useActions();
    const dispositivoId = "87ff4bad-366d-4fec-bc90-65856ad1ab02";
    //loading
    if (loading) {
        return (
            <View>
                <Text>Cargando acciones...</Text>
            </View>
        );
    }
    //render
    return (
        <View>
            <Text>Control Aula A</Text>

            <Button
                title="Encender"
                onPress={() => encender(dispositivoId)}
            />

            <Button
                title="Apagar"
                onPress={() => apagar(dispositivoId)}
            />

            <FlatList
                data={acciones}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>Accion: {item.accion}</Text>
                            <Text>Origen: {item.origen}</Text>
                            <Text>Fecha: {formatearFecha(item.fecha)}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
}
