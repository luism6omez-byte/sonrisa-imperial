# Sonrisa Imperial

Landing page de la clínica dental Sonrisa Imperial. Objetivo único: que el visitante agende una cita de valoración.

Sitio estático, sin build ni dependencias.

| Archivo | Contenido |
| --- | --- |
| `index.html` | Estructura y contenido |
| `styles.css` | Diseño y responsive |
| `script.js` | Validación del formulario |

## Desarrollo

Abre `index.html` en el navegador. No hace falta servidor ni instalar nada.

## Despliegue

Proyecto estático en Vercel. Framework Preset: **Other**, sin comando de build y con el directorio raíz como output. Cada push a `main` genera un despliegue nuevo.

## Pendientes antes de producción

- [ ] **Conectar el formulario.** Hoy valida y muestra la confirmación, pero no envía nada. El punto de integración está marcado en `script.js` (busca el comentario `Sin backend`).
- [ ] Sustituir los datos de contacto de ejemplo: teléfono `+52 55 0000 0000`, dirección y horarios.
- [ ] Sustituir las cifras del hero (`+12 años`, `4.9 ★`) por datos reales.
- [ ] Sustituir el testimonio de «María G.» por uno real y autorizado por el paciente.
