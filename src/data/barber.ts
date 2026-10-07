import type { LinkPageData, SiteLink, TransferDetails } from './site';

// Completar si Ignacio habilita WhatsApp. Nunca usar un número de ejemplo.
const WHATSAPP_NUMBER = '';
const BOOKING_MESSAGE = 'Hola Ignacio, quiero agendar un corte contigo. ¿Qué horarios tienes disponibles?';
// Enlace a reseñas de Barbería CJ en Google Maps.
const SHOP_REVIEWS_URL = 'https://www.google.com/maps/search/?api=1&query=Barber%C3%ADa%20CJ%2C%20Janequeo%201501%2C%20Concepci%C3%B3n%2C%20Chile';

// RUT facilitado por el usuario exclusivamente para demostrar la copia.
// Reemplazar por los datos reales de Ignacio antes de publicar esta página.
const TRANSFER_DETAILS: TransferDetails = {
  text: '21.586.890-7',
  note: 'Toca el botón para copiar datos bancarios o propina.',
};

const links: SiteLink[] = [
  ...(WHATSAPP_NUMBER ? [{
    label: 'Agendar por WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE)}`,
    icon: 'whatsapp' as const,
    isPrimary: true,
  }] : []),
  {
    label: 'Agendar por Instagram',
    href: 'https://www.instagram.com/ignaciobarberoo0/',
    icon: 'instagram',
    isPrimary: !WHATSAPP_NUMBER,
  },
  ...(SHOP_REVIEWS_URL ? [{
    label: 'Reseñas de Barbería CJ',
    href: SHOP_REVIEWS_URL,
    icon: 'review' as const,
  }] : []),
  {
    label: 'Cómo llegar a la Barbería',
    href: 'https://www.google.com/maps/search/?api=1&query=Barber%C3%ADa%20CJ%2C%20Janequeo%201501%2C%20Concepci%C3%B3n%2C%20Chile',
    icon: 'location',
  },
];

export const barber: LinkPageData = {
  name: 'Ignacio Parada',
  tagline: 'Barbero profesional · Concepción',
  description: 'Ignacio Parada, barbero profesional en Barbería CJ, Janequeo 1501, segundo piso, Concepción. Agenda por DM en Instagram. Débito, crédito y efectivo.',
  logo: '/ignacio-barbero.jpg',
  logoAlt: 'Foto de perfil de Ignacio Parada en la barbería',
  favicon: '/ignacio-parada.svg',
  highlights: [
    {
      id: 'location',
      label: 'Ubicación',
      value: 'Barbería CJ · Janequeo 1501, 2do piso, Concepción',
    },
    {
      id: 'booking',
      label: 'Atención personalizada',
      value: 'Previa agenda por DM en Instagram. La hora se confirma por mensaje.',
    },
    {
      id: 'payments',
      label: 'Medios de pago',
      value: 'Débito, crédito y efectivo',
    },
  ],
  links,
  transfer: TRANSFER_DETAILS,
  footer: 'Tu estilo es mi prioridad.',
};
