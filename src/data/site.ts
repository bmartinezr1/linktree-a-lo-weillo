export type SiteLink = {
  label: string;
  href: string;
  icon: 'whatsapp' | 'instagram' | 'facebook' | 'review' | 'location' | 'team' | 'contact' | 'promotions' | 'calendar';
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

export type ProductShowcase = {
  heading: string;
  items: string[];
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
  highlights: readonly InfoHighlight[] | InfoHighlight[];
  links: readonly SiteLink[] | SiteLink[];
  barbers?: readonly BarberMember[];
  transfer?: TransferDetails;
  productShowcase?: ProductShowcase;
};

// Alias de compatibilidad
export type LinkPageData = SiteProfile;

export const site: SiteProfile = {
  name: '7E Barber Shop',
  tagline: 'Barbería · Concepción',
  description:
    'Barbería en Ejército 1282, Concepción, especializada en cortes modernos y clásicos, fades y arreglo de barba. Atención personalizada solo con agenda.',
  theme: 'barber',
  logo: '/logo-7e-barber-shop.webp',
  favicon: '/favicon.png',
  footer: 'Tu estilo es nuestra prioridad.',
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
      label: 'agenda tu hora aqui',
      href: 'https://7ebarbershop.setmore.com/',
      icon: 'calendar',
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
  transfer: {
    text: [
      'Barbero Studio Eisler',
      '78264147-6',
      'BancoEstado',
      'Cuenta Vista',
      '90279983075',
    ].join('\n'),
  },
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
      href: '/la-dinastia-china/menu',
      icon: 'contact',
    },
  ],
};

const FULL_DRINK_INSTAGRAM = 'https://www.instagram.com/fulldrink.licores/';
const FULL_DRINK_REVIEWS_URL = 'https://search.google.com/local/writereview?placeid=ChIJQQP_Y_W1aZYRJLhvrcY8_h0';
const FULL_DRINK_SAN_PEDRO_REVIEWS_URL = 'https://search.google.com/local/writereview?placeid=ChIJk3_OHADJaZYRQeRKKtVx7v8';

export const fullDrinkSite: SiteProfile = {
  name: 'Full Drink',
  tagline: '',
  description:
    'Full Drink, tienda de vinos, cervezas y licores con sucursales en Concepción y San Pedro de la Paz. Encuentra direcciones y horarios en esta página.',
  theme: 'fulldrink',
  logo: '/full-drink.jpg',
  logoAlt: 'Logo de Full Drink',
  favicon: '/full-drink.jpg',
  footer: 'Full Drink · Vinos, cervezas y licores.',
  highlights: [
    {
      id: 'location',
      label: 'Sucursal Concepción',
      value: 'Juan de Dios Rivera 1235\nHorario: Martes a sábado 12:00–22:00 · domingo y lunes cerrado',
    },
    {
      id: 'san-pedro',
      icon: 'location',
      label: 'Sucursal San Pedro de la Paz',
      value: 'Los Aromos #1465\nHorario: 12:00–01:00 hrs.',
    },
  ],
  links: [
    {
      label: 'Consultar por Instagram',
      href: FULL_DRINK_INSTAGRAM,
      icon: 'instagram',
    },
    {
      label: 'Reseña Google · Sucursal Concepción',
      href: FULL_DRINK_REVIEWS_URL,
      icon: 'review',
    },
    {
      label: 'Reseña Google · Sucursal San Pedro de la Paz',
      href: FULL_DRINK_SAN_PEDRO_REVIEWS_URL,
      icon: 'review',
    },
  ],
  transfer: {
    text: [
      'Inversiones DYV SPA',
      'RUT: 77.306.791-0',
      'Banco Santander',
      'Cuenta Corriente',
      'N°83900997',
      'ventas@fulldrink.cl',
    ].join('\n'),
  },
  productShowcase: {
    heading: 'Encuentra en Full Drink',
    items: ['Vinos', 'Cervezas', 'Licores'],
  },
};

const DONA_FLOR_INSTAGRAM = 'https://www.instagram.com/donaflor.supermercado/';
const DONA_FLOR_REVIEWS_URL = 'https://search.google.com/local/writereview?placeid=ChIJAQgpIwC1aZYR8bhIeN5ohSs';

export const donaFlorSite: SiteProfile = {
  name: 'Doña Flor Supermercado',
  tagline: 'Supermercado · Concepción',
  description:
    'Doña Flor Supermercado en Concepción. Encuentra su ubicación, horarios, Instagram y enlace para dejar una reseña en Google.',
  theme: 'dona-flor',
  logo: '/logo-dona-flor-supermercado.webp',
  logoAlt: 'Logo de Doña Flor Supermercado',
  favicon: '/favicon-dona-flor-supermercado.png',
  footer: 'Doña Flor Supermercado · Concepción.',
  highlights: [
    {
      id: 'bandera',
      icon: 'location',
      label: 'Sucursal Bandera',
      value: 'Bandera #1321, Concepción',
    },
    {
      id: 'schedule',
      icon: 'schedule',
      label: 'Horarios',
      value: 'Lunes a jueves: 19:00 - 01:00\nViernes a sábado: hasta las 03:00\nDomingos y festivos: 20:00 - 00:00',
    },
  ],
  links: [
    {
      label: 'Instagram',
      href: DONA_FLOR_INSTAGRAM,
      icon: 'instagram',
    },
    {
      label: 'Escribir una reseña',
      href: DONA_FLOR_REVIEWS_URL,
      icon: 'review',
    },
  ],
  transfer: {
    text: [
      'Doña Flor SPA',
      'RUT: 77.912.132-1',
      'Banco Santander',
      'Cuenta Corriente',
      'N° 94053447',
    ].join('\n'),
  },
};

const MARLEY_WHATSAPP_NUMBER = '56990238871';
const MARLEY_MESSAGE = 'Hola, quiero hacer un pedido en El Bajón del Marley 🍔🍟';
const MARLEY_WHATSAPP_URL = `https://wa.me/${MARLEY_WHATSAPP_NUMBER}?text=${encodeURIComponent(MARLEY_MESSAGE)}`;

export const elBajonDelMarleySite: SiteProfile = {
  name: 'El Bajón Del Marley',
  tagline: 'Restaurante · Concepción',
  description:
    'El Bajón Del Marley en Ejército 1238, Concepción. Comida rápida, reparto a domicilio y pedidos directos por WhatsApp.',
  theme: 'marley',
  logo: '/logo-el-bajon-del-marley.webp',
  logoAlt: 'Logo de El Bajón Del Marley',
  favicon: '/favicon-el-bajon-del-marley.png',
  footer: '',
  highlights: [
    {
      id: 'location',
      icon: 'location',
      label: 'Ubicación',
      value: 'Ejército #1238, entre Ongolmo y Paicaví, Concepción',
    },
    {
      id: 'delivery',
      icon: 'payments',
      label: 'Reparto',
      value: 'Pedidos con reparto a domicilio',
    },
    {
      id: 'schedule',
      icon: 'schedule',
      label: 'Horario',
      value:
        'Lunes a jueves: 09:00 - 23:30\nViernes: 09:00 - 00:30\nSábado: 10:00 - 00:30\nDomingo: 12:00 - 20:30',
    },
  ],
  links: [
    {
      label: 'Pedir por WhatsApp',
      href: MARLEY_WHATSAPP_URL,
      icon: 'whatsapp',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/el_bajon_del_marley/?hl=es',
      icon: 'instagram',
    },
    {
      label: 'Escribir una reseña',
      href: 'https://search.google.com/local/writereview?placeid=ChIJm755RgC1aZYRkD0An946IvE',
      icon: 'review',
    },
  ],
  transfer: {
    text: '',
  },
};
