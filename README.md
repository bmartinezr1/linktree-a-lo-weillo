# Linktree espejo

Sitio público de ClickTap y páginas de enlaces para negocios, construido con Astro y TypeScript.

## Desarrollo local

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev
```

## Comprobación de producción

```bash
npm run build
npm run preview
```

La compilación ejecuta las pruebas de datos, la comprobación de tipos y las pruebas de las páginas generadas.
Rechaza títulos vacíos, direcciones inválidas, protocolos distintos de HTTPS, credenciales en enlaces y recursos internos inexistentes.
Para ejecutar solo las pruebas de datos: `npm test`.

El contenido de los negocios vive en `src/data/site.ts`. El logo que usa 7E Barber Shop es `public/logo-7e-barber-shop.webp`.
Los botones de WhatsApp se construyen con las constantes de teléfono y mensaje de cada negocio; los demás destinos se editan en `links`.

La dirección principal de 7E es `/7E-barber-shop`. Cloudflare Pages aplica `public/_redirects` para llevar
`/7e-barber-shop` y `/7e-barber-shop/` a la dirección principal. En desarrollo y en `npm run preview`, usar `/7E-barber-shop`;
las redirecciones de `_redirects` se aplican en Cloudflare. Así la compilación local evita rutas que solo difieren en mayúsculas.

La página 404 evita que Cloudflare muestre la portada para direcciones de negocios inexistentes.
Los logos de Marley y Doña Flor usan WebP y favicons pequeños. El menú de La Dinastía China muestra
versiones livianas; al tocar cada imagen se abre el JPG original en tamaño completo.

Las especificaciones y decisiones del proyecto se mantienen en `C:\Users\murde\Desktop\SecondBrain\Proyectos\Linktree espejo`.

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
