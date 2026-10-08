export type SiteLink = {
  label: string;
  href: string;
  icon: 'whatsapp' | 'instagram' | 'facebook' | 'review' | 'location' | 'team' | 'contact';
  isPrimary?: boolean;
  isDisabled?: boolean;
};

export type InfoHighlight = {
  id: string;
  icon?: 'location' | 'scissors' | 'calendar' | 'flower' | 'schedule' | 'payments';
  label: string;
  value: string;
};

export type BarberMember = {
  name: string;
  role: string;
  avatar: string;
  href: string;
  badge?: string;
};

export type TransferDetails = {
  text: string;
  note?: string;
};

export type SiteProfile = {
  name: string;
  tagline: string;
  description: string;
  theme?: 'barber' | 'floral' | string;
  logo?: string;
  logoAlt?: string;
  monogram?: string;
  favicon: string;
  footer?: string;
  whatsappNumber?: string;
  bookingMessage?: string;
  highlights: readonly InfoHighlight[] | InfoHighlight[];
  links: readonly SiteLink[] | SiteLink[];
  barbers?: readonly BarberMember[];
  transfer?: TransferDetails;
};

// Alias de compatibilidad
export type LinkPageData = SiteProfile;

const BARBER_WHATSAPP_NUMBER = '56957422166';
const BARBER_BOOKING_MESSAGE = 'Hola, quisiera agendar una cita en 7E Barber Shop 💈✂️';
const BARBER_WHATSAPP_URL = `https://wa.me/${BARBER_WHATSAPP_NUMBER}?text=${encodeURIComponent(BARBER_BOOKING_MESSAGE)}`;

export const site: SiteProfile = {
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
};

const FLORIST_WHATSAPP_NUMBER = '56936870591';
const FLORIST_MESSAGE = 'Hola, quisiera hacer una consulta en Flores de Frida 🌸';
const FLORIST_WHATSAPP_URL = `https://wa.me/${FLORIST_WHATSAPP_NUMBER}?text=${encodeURIComponent(FLORIST_MESSAGE)}`;

export const floresDeFridaSite: SiteProfile = {
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
};

const DINASTIA_WHATSAPP_NUMBER = '56945668297';
const DINASTIA_MESSAGE = 'Hola, quisiera hacer un pedido en La Dinastía China 🥡';
const DINASTIA_WHATSAPP_URL = `https://wa.me/${DINASTIA_WHATSAPP_NUMBER}?text=${encodeURIComponent(DINASTIA_MESSAGE)}`;

export const laDinastiaChinaSite: SiteProfile = {
  name: 'La Dinastía China',
  tagline: 'Comida china · Pedidos por WhatsApp',
  description:
    'La Dinastía China: sabores de la cocina china para disfrutar en casa. Haz tu pedido directamente por WhatsApp.',
  theme: 'china',
  logo: '/logo-la-dinastia-china.png',
  logoAlt: 'Logo de La Dinastía China',
  favicon: '/logo-la-dinastia-china.png',
  footer: 'Sabores que reúnen a la familia.',
  whatsappNumber: DINASTIA_WHATSAPP_NUMBER,
  bookingMessage: DINASTIA_MESSAGE,
  highlights: [
    {
      id: 'orders',
      icon: 'payments',
      label: 'Pedidos',
      value: 'Encarga directamente por WhatsApp',
    },
    {
      id: 'specialty',
      icon: 'flower',
      label: 'Nuestra cocina',
      value: 'Sabores de la cocina china para compartir',
    },
  ],
  links: [
    {
      label: 'Hacer un pedido por WhatsApp',
      href: DINASTIA_WHATSAPP_URL,
      icon: 'whatsapp',
      isPrimary: true,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/la_dinastia_china/?hl=es-la',
      icon: 'instagram',
    },
    {
      label: 'Escribir una reseña',
      href: 'https://search.google.com/local/writereview?placeid=ChIJ_fFzTsi1aZYRiCLQE5g2p2E',
      icon: 'review',
    },
    {
      label: 'Menú',
      href: '/menu',
      icon: 'contact',
      isDisabled: true,
    },
  ],
};
