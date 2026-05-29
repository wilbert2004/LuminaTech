// Importamos StyleSheet para definir estilos aislados del módulo.
import { StyleSheet } from 'react-native';

export const estilosSensores = StyleSheet.create({
    // Contenedor principal con fondo oscuro y espacio lateral.
    contenedor: {
        flex: 1,
        backgroundColor: '#06101C',
    },
    // Fondo decorativo superior para dar profundidad visual.
    brilloSuperior: {
        position: 'absolute',
        top: -70,
        right: -50,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(0, 255, 156, 0.08)',
    },
    // Fondo decorativo inferior para balancear la composición.
    brilloInferior: {
        position: 'absolute',
        bottom: -70,
        left: -60,
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: 'rgba(127, 179, 255, 0.08)',
    },
    // Área desplazable del contenido.
    contenido: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 28,
    },
    // Cuerpo centrado para evitar que el contenido use todo el ancho en desktop.
    pageBody: {
        width: '100%',
        maxWidth: 980,
        alignSelf: 'center',
    },
    // Tarjeta superior del módulo.
    tarjetaPrincipal: {
        borderRadius: 30,
        padding: 22,
        marginBottom: 18,
        backgroundColor: 'rgba(10, 19, 35, 0.96)',
        borderWidth: 1,
        borderColor: 'rgba(132, 196, 255, 0.12)',
        shadowColor: '#000',
        shadowOpacity: 0.22,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 12 },
        elevation: 7,
    },
    // Etiqueta pequeña que identifica el módulo.
    etiqueta: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 999,
        backgroundColor: 'rgba(0, 255, 156, 0.10)',
        marginBottom: 14,
    },
    // Texto de la etiqueta del módulo.
    textoEtiqueta: {
        color: '#7BFFD1',
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 0.7,
        textTransform: 'uppercase',
    },
    // Título principal del módulo de sensores.
    titulo: {
        color: '#F6F9FF',
        fontSize: 28,
        fontWeight: '900',
        lineHeight: 34,
        marginBottom: 10,
    },
    // Descripción breve para explicar el contenido.
    subtitulo: {
        color: '#9AA8C4',
        fontSize: 15,
        lineHeight: 22,
    },
    // Fila con chips informativos.
    filaDeEstado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
    },
    // Chip informativo reutilizable.
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 999,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.08)',
        marginRight: 10,
        marginBottom: 10,
    },
    // Separación del icono dentro del chip.
    iconoChip: {
        marginRight: 6,
    },
    // Texto del chip informativo.
    textoChip: {
        color: '#DDE7F6',
        fontSize: 12,
        fontWeight: '700',
    },
    // Título de la lista de sensores.
    tituloSeccion: {
        color: '#DCE7F7',
        fontSize: 18,
        fontWeight: '800',
        marginTop: 4,
        marginBottom: 14,
    },
    // Tarjeta individual de cada sensor.
    tarjetaSensor: {
        width: '100%',
        borderRadius: 24,
        padding: 18,
        marginBottom: 14,
        backgroundColor: 'rgba(10, 19, 35, 0.94)',
        borderWidth: 1,
        borderColor: 'rgba(0, 255, 156, 0.12)',
        shadowColor: '#000',
        shadowOpacity: 0.16,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 8 },
        elevation: 5,
    },
    // Encabezado de la tarjeta con icono y texto.
    encabezadoSensor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    // Círculo del icono del sensor.
    iconoSensor: {
        width: 42,
        height: 42,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 255, 156, 0.10)',
        marginRight: 12,
    },
    // Contenedor del texto del sensor.
    bloqueTexto: {
        flex: 1,
    },
    // Nombre del sensor.
    tipoSensor: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '800',
        marginBottom: 4,
    },
    // Unidad de medida o descripción secundaria.
    unidadSensor: {
        color: '#9AA8C4',
        fontSize: 13,
    },
    // Texto general del módulo.
    texto: {
        color: '#DDE7F6',
        fontSize: 13,
        marginTop: 4,
    },
    // Línea de la última lectura.
    ultimaLectura: {
        color: '#7FB3FF',
        fontSize: 13,
        marginTop: 10,
        fontWeight: '600',
    },
    // Texto mostrado cuando no hay datos o se está cargando.
    estadoVacio: {
        color: '#A9B9D3',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 18,
    },
});