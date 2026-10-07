# Linktree espejo

Primera página pública para 7E Barber Shop, construida con Astro y TypeScript.

## Desarrollo local

```bash
npm install
npm run dev
```

## Comprobación de producción

```bash
npm run build
npm run preview
```

El contenido de la página vive en `src/data/site.ts`. La imagen del logo está en `public/logo-7e-barber-shop.png`.

## Página de Barbería CJ

La página principal de Barbería CJ está disponible en `/barberia-cj` (con acceso rápido en `/cj`).
Sus datos se gestionan en `src/data/barberia-cj.ts`.

- **Horarios detallados**: Lun-Vie (10:30 a 19:30), Sábado (11:00 a 19:00), Domingo (11:30 a 17:30).
- **Medios de pago**: Efectivo, débito y transferencia.
- **Canales oficiales**: WhatsApp directo con mensaje predefinido, Instagram oficial y Facebook oficial.
- **Reseñas y Cómo llegar**: Enlaces directos a Google Maps para Janequeo 1501, 2do piso, Concepción.
- **Sección de Barberos (Equipo)**: Muestra las tarjetas interactivas de los barberos asociados (como Ignacio Parada) permitiendo a los clientes acceder directamente a su perfil personal.

## Página personal de un barbero

La página de Ignacio Parada está disponible en `/ignacio-parada` y `/barbero`. Sus datos se editan en
`src/data/barber.ts`. Reutiliza el componente `LinkPage.astro` y los estilos
`global.css`. `/barbero` redirige a `/ignacio-parada/`.

- WhatsApp abre un chat con un mensaje para consultar horarios. No crea ni confirma reservas.
- Instagram es el canal activo y abre el perfil `ignaciobarberoo0` para enviarle un DM desde el botón Mensaje.
- La ubicación y las reseñas corresponden a la barbería, con enlaces independientes.
- Botón de transferencia bancaria / propina configurable en `TRANSFER_DETAILS`.
