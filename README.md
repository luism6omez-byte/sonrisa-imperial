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
- [ ] **Sustituir los precios del presupuesto de ejemplo** (sección `#presupuesto`, bloque `.doc`). Hoy muestra un caso de ortodoncia con importes de referencia en dólares que suman `$1,750 USD`. Si se publican como están, la clínica queda expuesta a que un paciente los reclame como precio ofertado. Ojo también con la moneda: la dirección es de CDMX y el presupuesto cotiza en USD, así que conviene decidir si esa es la intención (turismo dental) o si debe ir en pesos.
- [ ] Sustituir las cifras del hero (`12 años`, `4.9`) por datos reales.
- [ ] Sustituir el testimonio de «María G.» por uno real y autorizado por el paciente.

## Reglas de diseño

Dos decisiones que conviene no romper sin querer:

- **Sin letra pequeña.** Ningún texto baja de `--t-min` (15px), ni el aviso legal ni los pies de foto. La marca vende «cero letra pequeña» y el diseño lo cumple literalmente. Si añades texto, no le pongas un tamaño menor.
- **El hueso es solo del presupuesto.** `--bone` está reservado a la pieza del presupuesto, para que se lea como un papel dentro de una sala verde. Usarlo en otro sitio deshace el efecto.
