import { Dimensions, StyleSheet } from 'react-native';

const isSmallScreen = Dimensions.get('window').width < 390;

export const estilosAdmin = StyleSheet.create({
    // Contenedor principal de la pantalla de administración.
    contenedor: {
        flex: 1,
        backgroundColor: '#06101C',
    },
    // Brillo superior para darle profundidad al fondo.
    brilloSuperior: {
        position: 'absolute',
        top: -70,
        right: -50,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(0, 255, 156, 0.08)',
    },
    // Brillo inferior para equilibrar la composición visual.
    brilloInferior: {
        position: 'absolute',
        bottom: -70,
        left: -60,
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: 'rgba(127, 179, 255, 0.08)',
    },
    // Contenido con espacio y scroll vertical.
    contenido: {
        flexGrow: 1,
        paddingHorizontal: isSmallScreen ? 16 : 20,
        paddingTop: isSmallScreen ? 16 : 20,
        paddingBottom: 28,
    },
    // Cuerpo centrado para pantallas amplias.
    cuerpo: {
        width: '100%',
        maxWidth: 980,
        alignSelf: 'center',
    },
    // Tarjeta superior de presentación.
    tarjetaPrincipal: {
        borderRadius: 30,
        padding: isSmallScreen ? 18 : 22,
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
    // Etiqueta pequeña del módulo.
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
    // Texto de la etiqueta.
    textoEtiqueta: {
        color: '#7BFFD1',
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 0.7,
        textTransform: 'uppercase',
    },
    // Título principal.
    titulo: {
        color: '#F6F9FF',
        fontSize: isSmallScreen ? 24 : 28,
        fontWeight: '900',
        lineHeight: 34,
        marginBottom: 10,
    },
    // Subtítulo descriptivo.
    subtitulo: {
        color: '#9AA8C4',
        fontSize: isSmallScreen ? 14 : 15,
        lineHeight: 22,
    },
    // Fila de chips informativos.
    filaMeta: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
    },
    // Chip reutilizable.
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
    // Separación del icono del chip.
    iconoChip: {
        marginRight: 6,
    },
    // Texto del chip.
    textoChip: {
        color: '#DDE7F6',
        fontSize: 12,
        fontWeight: '700',
    },
    // Título de la sección de lista.
    tituloSeccion: {
        color: '#DCE7F7',
        fontSize: 18,
        fontWeight: '800',
        marginTop: 4,
        marginBottom: 14,
    },
    // Tarjeta individual de usuario pendiente.
    tarjetaUsuario: {
        borderRadius: 24,
        padding: isSmallScreen ? 16 : 18,
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
    // Encabezado de la tarjeta con nombre y rol.
    encabezadoUsuario: {
        marginBottom: 12,
    },
    // Nombre del usuario.
    nombreUsuario: {
        color: '#F6F9FF',
        fontSize: 18,
        fontWeight: '900',
        marginBottom: 4,
    },
    // Rol o tipo de usuario.
    rolUsuario: {
        color: '#9AA8C4',
        fontSize: 14,
        lineHeight: 20,
    },
    // Bloque informativo adicional.
    bloqueInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 14,
    },
    // Chip de estado.
    chipEstado: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 999,
        backgroundColor: 'rgba(255, 193, 7, 0.10)',
        marginRight: 10,
        marginBottom: 10,
    },
    // Texto del estado.
    textoEstado: {
        color: '#FFD76A',
        fontSize: 12,
        fontWeight: '700',
    },
    // Botón principal para aprobar.
    botonAprobar: {
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
    // Texto para estados vacíos o carga.
    estadoVacio: {
        color: '#A9B9D3',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 18,
        lineHeight: 20,
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
});

export const styles = estilosAdmin;
