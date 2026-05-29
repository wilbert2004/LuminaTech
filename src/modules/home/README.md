# Módulo Home

## Qué hace

Este módulo muestra la pantalla principal con el resumen general de la aplicación.

## Estructura

- `hooks/useHome.js`: lógica de datos del home.
- `screen/HomeScreen.jsx`: pantalla principal.
- `service/homeService.js`: acceso a datos del módulo.
- `style/Homestyle.js`: estilos del home.

## Trabajo realizado

- Se ajustó el layout para pantallas anchas con un contenedor centrado.
- Se limitaron tarjetas y bloques para evitar que se estiren demasiado en desktop.
- Se mantuvo el patrón modular con hook, servicio y estilos separados.

## Notas

- Si crecen más widgets, conviene seguir usando el mismo contenedor `pageBody`.
