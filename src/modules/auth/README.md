# Módulo de autenticación

## Qué hace

Este módulo concentra el inicio de sesión, el registro y la documentación del flujo de acceso de la app.

## Estructura

- `hooks/useAuth.js`: lógica reutilizable de autenticación.
- `screens/LoginScreen.jsx`: pantalla de acceso.
- `screens/RegisterScreen.jsx`: pantalla de registro.
- `services/authService.js`: operaciones de autenticación.
- `styles/Loginstyle.js`: estilos de login.
- `styles/Registerstyle.js`: estilos de registro.
- `Inicio_Registro.md`: notas del flujo de autenticación.

## Trabajo realizado

- Se organizó el módulo por capas: pantalla, hook, servicio y estilos.
- Se mantuvo el patrón de nombres en español donde aplica.
- Se conservó la documentación del flujo en `Inicio_Registro.md`.

## Notas

- Revisar consistencia exacta entre imports y exports de estilos.
- Mantener el módulo compatible con el resto de la navegación.
