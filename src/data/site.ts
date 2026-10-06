export type SiteLink = {
  label: string;
  href: string;
  icon: 'whatsapp' | 'instagram' | 'review' | 'location';
  isPrimary?: boolean;
};

export type InfoHighlight = {
  id: 'location' | 'cuts' | 'booking';
  label: string;
  value: string;
};

// 📞 Teléfono / WhatsApp del Barbero para agendar citas
// Reemplazar este número de prueba cuando tengas el número real (formato internacional sin "+", ej: "56912345678")
const WHATSAPP_NUMBER = '56900000000';
const BOOKING_MESSAGE = 'Hola, quisiera agendar una cita en 7E Barber Shop 💈✂️';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE)}`;

export const site = {
  name: '7E Barber Shop',
  tagline: 'Barbería · Concepción',
  description:
    'Barbería en Ejército 1282, Concepción, especializada en cortes modernos y clásicos, fades y arreglo de barba. Atención personalizada solo con agenda.',
  highlights: [
    {
      id: 'location',
      label: 'Ubicación',
      value: 'Ejército 1282, Concepción',
    },
    {
      id: 'cuts',
      label: 'Los Cortes',
      value: 'Cortes modernos y clásicos, fades y arreglo de barba',
    },
    {
      id: 'booking',
      label: 'Atención Personalizada',
      value: 'Atención exclusiva solo con agenda',
    },
  ] satisfies InfoHighlight[],
  logo: '/logo-7e-barber-shop.webp',
  favicon: '/favicon.png',
  whatsappNumber: WHATSAPP_NUMBER,
  bookingMessage: BOOKING_MESSAGE,
  links: [
    {
      label: 'Agendar Cita',
      href: WHATSAPP_URL,
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
  ] satisfies SiteLink[],
} as const;
