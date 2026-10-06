export type SiteLink = {
  label: string;
  href: string;
  icon: 'whatsapp' | 'instagram' | 'review' | 'location';
  isPrimary?: boolean;
};

export type InfoHighlight = {
  id: string;
  icon: 'location' | 'scissors' | 'calendar' | 'flower';
  label: string;
  value: string;
};

export type SiteProfile = {
  name: string;
  tagline: string;
  description: string;
  theme: 'barber' | 'floral';
  logo?: string;
  monogram?: string;
  favicon: string;
  footer: string;
  whatsappNumber: string;
  bookingMessage: string;
  highlights: InfoHighlight[];
  links: SiteLink[];
};

const BARBER_WHATSAPP_NUMBER = '56957422166';
const BARBER_BOOKING_MESSAGE = 'Hola, quisiera agendar una cita en 7E Barber Shop 💈✂️';
const BARBER_WHATSAPP_URL = `https://wa.me/${BARBER_WHATSAPP_NUMBER}?text=${encodeURIComponent(BARBER_BOOKING_MESSAGE)}`;

export const site = {
  name: '7E Barber Shop',
  tagline: 'Barbería · Concepción',
  description:
    'Barbería en Ejército 1282, Concepción, especializada en cortes modernos y clásicos, fades y arreglo de barba. Atención personalizada solo con agenda.',
  theme: 'barber',
  logo: '/logo-7e-barber-shop.webp',
  favicon: '/favicon.png',
  footer: 'Tu estilo es nuestra prioridad.',
  whatsappNumber: BARBER_WHATSAPP_NUMBER,
  bookingMessage: BARBER_BOOKING_MESSAGE,
  highlights: [
    {
      id: 'location',
      icon: 'location',
      label: 'Ubicación',
      value: 'Ejército 1282, Concepción',
    },
    {
      id: 'cuts',
      icon: 'scissors',
      label: 'Los Cortes',
      value: 'Cortes modernos y clásicos, fades y arreglo de barba',
    },
    {
      id: 'booking',
      icon: 'calendar',
      label: 'Atención Personalizada',
      value: 'Atención exclusiva solo con agenda',
    },
  ],
  links: [
    {
      label: 'Agendar Cita',
      href: BARBER_WHATSAPP_URL,
      icon: 'whatsapp',
      isPrimary: true,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/7ebarber.shop/',
      icon: 'instagram',
    },
    {
      label: 'Escribir una reseña',
      href: 'https://search.google.com/local/writereview?placeid=ChIJXUBOt-W1aZYRSAx0tUT21_8',
      icon: 'review',
    },
    {
      label: 'Cómo llegar',
      href: 'https://share.google/c8CL7NE4vXPv9ftCl',
      icon: 'location',
    },
  ],
} satisfies SiteProfile;

const FLORIST_WHATSAPP_NUMBER = '56936870591';
const FLORIST_MESSAGE = 'Hola, quisiera hacer una consulta en Flores de Frida 🌸';
const FLORIST_WHATSAPP_URL = `https://wa.me/${FLORIST_WHATSAPP_NUMBER}?text=${encodeURIComponent(FLORIST_MESSAGE)}`;

export const floresDeFridaSite = {
  name: 'Flores de Frida',
  tagline: 'Florería · Concepción',
  description:
    'Florería ubicada en Ejército 1286, Concepción. Consulta por disponibilidad, pedidos y arreglos florales a través de WhatsApp.',
  theme: 'floral',
  logo: '/logo-flores-de-frida.jpg',
  favicon: '/logo-flores-de-frida.jpg',
  footer: 'Detalles que florecen con cariño.',
  whatsappNumber: FLORIST_WHATSAPP_NUMBER,
  bookingMessage: FLORIST_MESSAGE,
  highlights: [
    {
      id: 'location',
      icon: 'location',
      label: 'Ubicación',
      value: 'Ejército 1286, Concepción',
    },
    {
      id: 'flowers',
      icon: 'flower',
      label: 'Flores y detalles',
      value: 'Ramos, arreglos florales y pedidos personalizados',
    },
    {
      id: 'booking',
      icon: 'calendar',
      label: 'Consultas y pedidos',
      value: 'Atención directa a través de WhatsApp',
    },
  ],
  links: [
    {
      label: 'Consultar por WhatsApp',
      href: FLORIST_WHATSAPP_URL,
      icon: 'whatsapp',
      isPrimary: true,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/floreria.floresdefrida.cl/',
      icon: 'instagram',
    },
    {
      label: 'Escribir una reseña',
      href: 'https://search.google.com/local/writereview?placeid=ChIJWSCZJEa1aZYREZ_DalijKGE',
      icon: 'review',
    },
    {
      label: 'Cómo llegar',
      href: 'https://www.google.com/maps/search/?api=1&query=Ej%C3%A9rcito%201286%2C%20Concepci%C3%B3n',
      icon: 'location',
    },
  ],
} satisfies SiteProfile;
