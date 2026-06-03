import { StyleSheet } from 'react-native';

export const estilosDispositivos = StyleSheet.create({
    // Contenedor base de la pantalla de dispositivos.
    contenedor: {
        flex: 1,
        backgroundColor: '#06101C',
    },
    // Brillo superior para mantener la misma atmósfera visual del resto del proyecto.
    brilloSuperior: {
        position: 'absolute',
        top: -70,
        right: -50,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(0, 255, 156, 0.08)',
    },
    // Brillo inferior para equilibrar el fondo oscuro.
    brilloInferior: {
        position: 'absolute',
        bottom: -70,
        left: -60,
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: 'rgba(127, 179, 255, 0.08)',
    },
    // Contenido con espacio interno y desplazamiento vertical.
    contenido: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 28,
    },
    // Cuerpo principal centrado para pantallas anchas.
    cuerpo: {
        width: '100%',
        maxWidth: 980,
        alignSelf: 'center',
    },
    // Tarjeta principal del módulo.
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
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 999,
        backgroundColor: 'rgba(0, 255, 156, 0.10)',
        marginBottom: 14,
    },
    // Separación del icono dentro de la etiqueta.
    iconoEtiqueta: {
        marginRight: 6,
    },
    // Texto de la etiqueta superior.
    textoEtiqueta: {
        color: '#7BFFD1',
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 0.7,
        textTransform: 'uppercase',
    },
    // Título principal de la pantalla.
    titulo: {
        color: '#F6F9FF',
        fontSize: 28,
        fontWeight: '900',
        lineHeight: 34,
        marginBottom: 10,
    },
    // Subtítulo descriptivo del módulo.
    subtitulo: {
        color: '#9AA8C4',
        fontSize: 15,
        lineHeight: 22,
    },
    // Fila donde se muestran las métricas o estado del módulo.
    filaMeta: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
    },
    // Chip reutilizable para mostrar estado rápido.
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
    // Espaciado del icono dentro del chip.
    iconoChip: {
        marginRight: 6,
    },
    // Texto interno del chip.
    textoChip: {
        color: '#DDE7F6',
        fontSize: 12,
        fontWeight: '700',
    },
    // Título de la sección de listado.
    tituloSeccion: {
        color: '#DCE7F7',
        fontSize: 18,
        fontWeight: '800',
        marginTop: 4,
        marginBottom: 14,
    },
    // Tarjeta individual de un dispositivo.
    tarjetaDispositivo: {
        borderRadius: 24,
        padding: 18,
        marginBottom: 14,
        backgroundColor: 'rgba(10, 19, 35, 0.96)',
        borderWidth: 1,
        borderColor: 'rgba(73, 140, 255, 0.16)',
        shadowColor: '#000',
        shadowOpacity: 0.18,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 10 },
        elevation: 5,
    },
    // Encabezado de la tarjeta con icono y texto.
    encabezadoDispositivo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    // Círculo del icono del dispositivo.
    iconoDispositivo: {
        width: 42,
        height: 42,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        backgroundColor: 'rgba(0, 255, 156, 0.10)',
    },
    // Contenedor del texto dentro de la tarjeta.
    bloqueTexto: {
        flex: 1,
    },
    // Nombre del dispositivo.
    nombreDispositivo: {
        color: '#F6F9FF',
        fontSize: 18,
        fontWeight: '900',
        marginBottom: 4,
    },
    // Estado textual del dispositivo.
    estadoDispositivo: {
        color: '#9AA8C4',
        fontSize: 14,
        lineHeight: 20,
    },
    // Fila de información secundaria.
    filaInformacion: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 6,
        marginBottom: 14,
    },
    // Chip pequeño para ubicación.
    chipUbicacion: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 999,
        backgroundColor: 'rgba(127, 179, 255, 0.10)',
        marginRight: 10,
        marginBottom: 10,
    },
    // Texto de ubicación.
    textoUbicacion: {
        color: '#DDE7F6',
        fontSize: 12,
        fontWeight: '700',
    },
    // Botón para cambiar el estado del dispositivo.
    botonEstado: {
        minHeight: 50,
        borderRadius: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00FF9C',
    },
    // Separación del icono del botón.
    iconoBoton: {
        marginRight: 8,
    },
    // Texto del botón.
    textoBoton: {
        color: '#06131F',
        fontSize: 14,
        fontWeight: '900',
        letterSpacing: 0.3,
    },
    // Texto usado en estados vacíos o de carga.
    estadoVacio: {
        color: '#A9B9D3',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 18,
    },
    loadingHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    loadingTitle: {
        color: '#F6F9FF',
        fontSize: 16,
        fontWeight: '800',
        marginLeft: 10,
    },
    emptyStateWrap: {
        alignItems: 'center',
        paddingVertical: 4,
    },
    emptyStateIcon: {
        marginBottom: 10,
    },
    emptyStateTitle: {
        color: '#F6F9FF',
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 6,
    },
    emptyStateText: {
        color: '#9AA8C4',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
    },
    configArduino: {
        marginTop: 16,
        padding: 14,
        borderRadius: 14,
        backgroundColor: 'rgba(0, 255, 156, 0.07)',
        borderWidth: 1,
        borderColor: 'rgba(0, 255, 156, 0.18)',
    },

    configHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 8,
    },

    configTitulo: {
        color: '#00FF9C',
        fontSize: 14,
        fontWeight: '800',
    },

    configTexto: {
        color: '#DDEBFF',
        fontSize: 12,
        fontFamily: 'monospace',
        marginBottom: 6,
    },
    configDescripcion: {
        color: '#A8B6CC',
        fontSize: 13,
        marginBottom: 14,
        lineHeight: 20,
    },

    botonCopiar: {
        backgroundColor: 'rgba(255,255,255,0.04)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
    },

    labelId: {
        color: '#7FB3FF',
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 6,
    },

    idTexto: {
        color: '#DDEBFF',
        fontSize: 12,
        fontFamily: 'monospace',
    },

    botonCopiarTodo: {
        marginTop: 12,
        backgroundColor: '#00FF9C',
        borderRadius: 12,
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },

    textoBotonCopiarTodo: {
        color: '#06131F',
        fontWeight: '800',
        fontSize: 14,
    },
});

export const Devicesstyle = estilosDispositivos;
