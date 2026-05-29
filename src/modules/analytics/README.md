# Módulo de historial / analytics

## Qué hace

Este módulo muestra el historial de lecturas y su visualización gráfica.

## Estructura

- `hooks/useAnalytics.js`: hook de historial de lecturas.
- `screen/AnalyticsScreen.jsx`: pantalla principal del historial.
- `services/analyticsService.js`: consulta de lecturas.
- `components/LecturasChart.jsx`: gráfica de lecturas.
- `style/analyticsStyle.js`: estilos del módulo.

## Trabajo realizado

- Se reescribió la pantalla con nombres en español y estructura más clara.
- Se separó la gráfica como componente reutilizable.
- Se conservaron alias de compatibilidad para no romper imports viejos.

## Notas

- Mantener la lógica de datos fuera de la pantalla para facilitar cambios futuros.
