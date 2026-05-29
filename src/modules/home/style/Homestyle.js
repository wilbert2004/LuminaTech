import { StyleSheet } from 'react-native';

export const homestyle = StyleSheet.create({
    // Contenedor base del home para sostener el fondo general.
    contenedor: {
        flex: 1,
        backgroundColor: '#06101C',
    },
    // Desplazamiento vertical del contenido principal.
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 28,
    },
    // Cuerpo centrado para evitar que el contenido use todo el ancho en pantallas grandes.
    pageBody: {
        width: '100%',
        maxWidth: 980,
        alignSelf: 'center',
    },
    // Luz decorativa superior para dar volumen al fondo.
    glowTop: {
        position: 'absolute',
        top: -70,
        right: -60,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(0, 255, 156, 0.08)',
    },
    // Luz decorativa inferior para equilibrar la composición.
    glowBottom: {
        position: 'absolute',
        bottom: -80,
        left: -70,
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: 'rgba(73, 140, 255, 0.08)',
    },
    // Tarjeta principal del dashboard.
    heroCard: {
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
    // Etiqueta pequeña para identificar el sistema.
    badge: {
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
    badgeIcon: {
        marginRight: 6,
    },
    // Texto de la etiqueta principal.
    badgeText: {
        color: '#7BFFD1',
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 0.7,
        textTransform: 'uppercase',
    },
    // Título principal de bienvenida.
    title: {
        color: '#F6F9FF',
        fontSize: 28,
        fontWeight: '900',
        lineHeight: 34,
        marginBottom: 10,
    },
    // Descripción breve del panel.
    subtitle: {
        color: '#9AA8C4',
        fontSize: 15,
        lineHeight: 22,
    },
    // Fila de chips informativos dentro del hero.
    heroMetaRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
    },
    // Chip general reutilizable.
    metaChip: {
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
    // Espacio extra para el primer chip del header.
    metaChipSpacing: {
        marginRight: 10,
    },
    // Separación del icono dentro del chip.
    metaChipIcon: {
        marginRight: 6,
    },
    // Texto interno del chip.
    metaChipText: {
        color: '#DDE7F6',
        fontSize: 12,
        fontWeight: '700',
    },
    // Título de sección.
    sectionTitle: {
        color: '#DCE7F7',
        fontSize: 18,
        fontWeight: '800',
        marginTop: 4,
        marginBottom: 14,
    },
    // Contenedor de tarjetas estadísticas.
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    // Tarjeta de estadística individual.
    statCard: {
        width: '48%',
        maxWidth: 470,
        minHeight: 128,
        borderRadius: 24,
        padding: 18,
        marginBottom: 14,
        backgroundColor: 'rgba(10, 19, 35, 0.94)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.08)',
    },
    // Círculo del icono de la tarjeta.
    statIcon: {
        width: 42,
        height: 42,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
    },
    // Variación verde del icono.
    statIconGreen: {
        backgroundColor: 'rgba(0, 255, 156, 0.10)',
    },
    // Variación azul del icono.
    statIconBlue: {
        backgroundColor: 'rgba(127, 179, 255, 0.10)',
    },
    // Etiqueta pequeña del dato.
    statLabel: {
        color: '#A9B9D3',
        fontSize: 13,
        fontWeight: '700',
        marginBottom: 6,
    },
    // Valor principal de la métrica.
    statValue: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '900',
    },
    // Nota secundaria de la métrica.
    statHint: {
        color: '#7F8BA3',
        fontSize: 12,
        marginTop: 4,
        lineHeight: 16,
    },
    // Tarjeta de acción rápida.
    actionCard: {
        borderRadius: 24,
        padding: 18,
        marginTop: 4,
        marginBottom: 14,
        backgroundColor: 'rgba(10, 19, 35, 0.96)',
        borderWidth: 1,
        borderColor: 'rgba(73, 140, 255, 0.16)',
        width: '100%',
    },
    // Encabezado del bloque de acción.
    actionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    // Separación del icono de la acción rápida.
    actionIcon: {
        marginRight: 8,
    },
    // Título del bloque de acción.
    actionTitle: {
        color: '#EDF4FF',
        fontSize: 16,
        fontWeight: '800',
    },
    // Texto descriptivo del bloque de acción.
    actionText: {
        color: '#EDF4FF',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 14,
    },
    // Botón principal para cerrar sesión.
    logoutButton: {
        minHeight: 52,
        borderRadius: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00FF9C',
    },
    // Espacio entre el icono y el texto del botón.
    logoutIcon: {
        marginRight: 8,
    },
    // Texto del botón de cierre.
    logoutButtonText: {
        color: '#06131F',
        fontSize: 15,
        fontWeight: '900',
    },
    // Texto de carga en espera.
    loadingText: {
        color: '#A9B9D3',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
    },
    // Pie de pantalla con nota de organización.
    footerText: {
        color: '#73829B',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 6,
        lineHeight: 18,
    },
});