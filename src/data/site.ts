export type SiteLink = {
  label: string;
  href: string;
  icon: 'whatsapp' | 'instagram' | 'facebook' | 'review' | 'location' | 'team' | 'contact' | 'promotions';
  isPrimary?: boolean;
  isDisabled?: boolean;
};

export type InfoHighlight = {
  id: string;
  icon?: 'location' | 'scissors' | 'calendar' | 'flower' | 'schedule' | 'payments' | 'wrench';
  label: string;
  value: string;
  items?: readonly string[];
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
  label?: string;
  logo?: string;
  note?: string;
};

export type ProductShowcase = {
  heading: string;
  items: string[];
};

export type ContactDetail = {
  label: string;
  href: string;
};

export type BranchInfo = {
  id: string;
  name: string;
  image?: string;
  imageAlt?: string;
  address: string;
  schedule: string;
  locationUrl: string;
  reviewUrl: string;
};

export type SiteProfile = {
  name: string;
  tagline: string;
  description: string;
  theme?: 'barber' | 'floral' | string;
  logo?: string;
  logoAlt?: string;
  logoLayout?: 'round' | 'poster';
  logoWidth?: number;
  logoHeight?: number;
  heroBanner?: string;
  heroBannerAlt?: string;
  monogram?: string;
  favicon: string;
  footer?: string;
  whatsappNumber?: string;
  bookingMessage?: string;
  highlights: readonly InfoHighlight[] | InfoHighlight[];
  links: readonly SiteLink[] | SiteLink[];
  barbers?: readonly BarberMember[];
  branches?: readonly BranchInfo[];
  transfer?: TransferDetails | readonly TransferDetails[];
  productShowcase?: ProductShowcase;
  contactDetails?: readonly ContactDetail[];
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
      href: '/la-dinastia-china/menu',
      icon: 'contact',
    },
  ],
};

const FULL_DRINK_INSTAGRAM = 'https://www.instagram.com/fulldrink.licores/';
const FULL_DRINK_REVIEWS_URL = 'https://search.google.com/local/writereview?placeid=ChIJQQP_Y_W1aZYRJLhvrcY8_h0';
const FULL_DRINK_SAN_PEDRO_REVIEWS_URL = 'https://search.google.com/local/writereview?placeid=ChIJk3_OHADJaZYRQeRKKtVx7v8';
const FULL_DRINK_CONCEPCION_LOCATION_URL = 'https://www.google.com/maps/search/?api=1&query=Juan+de+Dios+Rivera+1235%2C+Concepci%C3%B3n';
const FULL_DRINK_SAN_PEDRO_LOCATION_URL = 'https://www.google.com/maps/search/?api=1&query=Los+Aromos+1465%2C+San+Pedro+de+la+Paz';

export const fullDrinkSite: SiteProfile = {
  name: 'Full Drink',
  tagline: 'Distribuidora de cervezas, vinos y licores',
  description:
    'Full Drink: distribuidora de cervezas, vinos y licores. Conoce nuestras sucursales en Concepción y San Pedro de la Paz, horarios y promociones.',
  theme: 'fulldrink',
  logo: '/full-drink.jpg',
  logoAlt: 'Logo de Full Drink',
  heroBanner: '/full-drink-concepcion.jpg',
  heroBannerAlt: 'Fachada con letrero de Full Drink sucursal Concepción',
  favicon: '/full-drink.jpg',
  footer: 'Full Drink · Vinos, cervezas y licores.',
  highlights: [],
  branches: [
    {
      id: 'concepcion',
      name: 'Sucursal Concepción',
      address: 'Juan de Dios Rivera 1235',
      schedule: 'Martes a sábado: 12:00–22:00\nDomingo y lunes: cerrado',
      locationUrl: FULL_DRINK_CONCEPCION_LOCATION_URL,
      reviewUrl: FULL_DRINK_REVIEWS_URL,
    },
    {
      id: 'san-pedro',
      name: 'Sucursal San Pedro de la Paz',
      address: 'Los Aromos #1465',
      schedule: '12:00–01:00 hrs.',
      locationUrl: FULL_DRINK_SAN_PEDRO_LOCATION_URL,
      reviewUrl: FULL_DRINK_SAN_PEDRO_REVIEWS_URL,
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
    items: [
      'Vinos',
      'Cervezas',
      'Pisco',
      'Whisky',
      'Gin',
      'Ramazzotti',
      'Tequilas',
      'Ron',
      'Y más...',
    ],
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
  logo: '/logo-dona-flor-supermercado.png',
  logoAlt: 'Logo de Doña Flor Supermercado',
  favicon: '/logo-dona-flor-supermercado.png',
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
      isPrimary: true,
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
  logo: '/logo-el-bajon-del-marley.png',
  logoAlt: 'Logo de El Bajón Del Marley',
  favicon: '/logo-el-bajon-del-marley.png',
  footer: '',
  whatsappNumber: MARLEY_WHATSAPP_NUMBER,
  bookingMessage: MARLEY_MESSAGE,
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
      isPrimary: true,
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
  transfer: [
    {
      label: 'Copiar datos de Banco de Chile',
      logo: '/logo-banco-de-chile.png',
      text: [
        'Bajon Del Marley',
        'RUT: 76.994.773-6',
        'Banco de Chile',
        'Cuenta Corriente',
        'Número de cuenta: 9981109104',
        'MORAM9544@GMAIL.COM',
      ].join('\n'),
    },
    {
      label: 'Copiar datos de Mercado Pago',
      logo: '/logo-mercado-pago.png',
      text: [
        'Bajón del Marley',
        'RUT: 76.994.773-6',
        'Mercado Pago',
        'Cuenta Vista',
        'Número de cuenta: 1085285221',
        'Bajon.redelcom@gmail.com',
      ].join('\n'),
    },
  ],
};

const BRONTO_WHATSAPP_URL = 'https://api.whatsapp.com/message/J464646QPBI2A1?autoload=1&app_absent=0';

export const brontoPizzaSite: SiteProfile = {
  name: 'Bronto Pizza',
  tagline: 'Tradicionales y veganas · Delivery',
  description:
    'Bronto Pizza en Ejército 1238, Local 3, Concepción. Pizzas tradicionales y veganas con delivery y pedidos directos por WhatsApp.',
  theme: 'bronto',
  logo: '/logo-bronto-pizza.png',
  logoAlt: 'Logo de Bronto Pizza',
  favicon: '/logo-bronto-pizza.png',
  footer: '',
  highlights: [
    {
      id: 'location',
      icon: 'location',
      label: 'Ubicación',
      value: 'Ejército 1238, Local 3, Concepción',
    },
    {
      id: 'delivery',
      icon: 'payments',
      label: 'Delivery',
      value: 'Pide directo por WhatsApp',
    },
    {
      id: 'schedule',
      icon: 'schedule',
      label: 'Horario',
      value:
        'Lunes a jueves: 12:30 - 22:45\nViernes: 12:30 - 23:45\nSábado: 12:00 - 23:45\nDomingo: 12:00 - 21:45',
    },
  ],
  links: [
    {
      label: 'Pedir por WhatsApp',
      href: BRONTO_WHATSAPP_URL,
      icon: 'whatsapp',
      isPrimary: true,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/brontopizza/?hl=es',
      icon: 'instagram',
    },
    {
      label: 'Escribir una reseña',
      href: 'https://search.google.com/local/writereview?placeid=ChIJv-K0_M21aZYRhQkY3igQSXg',
      icon: 'review',
    },
  ],
  transfer: {
    text: [
      'LUIS RODRIGO VILUNIR RIVAS',
      '21586890-7',
      'Banco Estado',
      'CuentaRUT',
      '00021586890',
    ].join('\n'),
  },
};

const RECARGAS_AC_WHATSAPP = '56942224861';
const RECARGAS_AC_MESSAGE = 'Hola, quisiera consultar por una recarga de aire acondicionado para mi vehículo a domicilio.';

export const recargasAireAcondicionadoSite: SiteProfile = {
  name: 'Recarga de Aire Acondicionado a domicilio',
  tagline: '',
  description:
    'Recarga de aire acondicionado para vehículos a domicilio, con base en Hualpén, Bío Bío. Consulta por diagnóstico, sanitización y detección de fugas.',
  theme: 'recargas-ac',
  logo: '/recargas-aire-collage.png',
  logoAlt: 'Collage del vehículo de Nuevo Aire y equipo de climatización usado en terreno',
  logoLayout: 'poster',
  logoWidth: 976,
  logoHeight: 688,
  favicon: '/recargas-aire-collage.png',
  footer: 'Consulta por disponibilidad y cobertura a domicilio.',
  whatsappNumber: RECARGAS_AC_WHATSAPP,
  bookingMessage: RECARGAS_AC_MESSAGE,
  highlights: [
    {
      id: 'location',
      icon: 'location',
      label: 'Ubicación',
      value: 'Toulouse, Hualpén, Bío Bío',
    },
    {
      id: 'service',
      icon: 'wrench',
      label: 'Servicio',
      value: '',
      items: [
        'Diagnóstico',
        'Sanitización',
        'Detector de Fugas',
        'Programa Texto',
        'Fase Vacío Programable',
        'Inyección Automatizada',
      ],
    },
  ],
  contactDetails: [
    { label: '9 4222 4861', href: 'tel:+56942224861' },
    { label: 'munos1517@gmail.com', href: 'mailto:munos1517@gmail.com' },
  ],
  links: [
    {
      label: 'Consultar por WhatsApp',
      href: `https://wa.me/${RECARGAS_AC_WHATSAPP}?text=${encodeURIComponent(RECARGAS_AC_MESSAGE)}`,
      icon: 'whatsapp',
      isPrimary: true,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/recargasdeaireRMenconcepcion',
      icon: 'facebook',
    },
    {
      label: 'Cómo llegar',
      href: 'https://www.google.com/maps/search/?api=1&query=Toulouse%2C%20Hualp%C3%A9n%2C%20B%C3%ADo%20B%C3%ADo&query_place_id=ChIJlZRXSmHLaZYR2sjV-smFosQ',
      icon: 'location',
    },
    {
      label: 'Dejar reseña · Aire acondicionado y climatizador',
      href: 'https://search.google.com/local/writereview?placeid=ChIJs_5fuuS1aZYRXTJ5F9OnD44',
      icon: 'review',
    },
    {
      label: 'Dejar reseña · Recarga a domicilio',
      href: 'https://search.google.com/local/writereview?placeid=ChIJlZRXSmHLaZYR2sjV-smFosQ',
      icon: 'review',
    },
  ],
  transfer: {
    label: 'Copiar datos de Tenpo',
    logo: '/logo-tenpo-white.svg',
    text: [
      'RENE JOAQUIN MUNOZ GUERRERO',
      'RUT: 15809117-8',
      'Banco: Banco prepago Tenpo',
      'Tipo de cuenta: Cuenta Vista',
      'Número de cuenta: 111115809117',
      'Correo: munos1517@gmail.com',
    ].join('\n'),
  },
};
