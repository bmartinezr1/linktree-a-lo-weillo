export type SiteLink = {
  label: string;
  href: string;
  icon: 'instagram' | 'review' | 'location';
};

export type InfoHighlight = {
  id: 'location' | 'cuts' | 'booking';
  label: string;
  value: string;
};

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
  // 📞 Teléfono / WhatsApp del Barbero para recibir citas
  // Déjalo vacío o pon el número cuando lo tengas (formato internacional sin "+", ej: "56912345678")
  whatsappNumber: '',
  services: [
    'Corte Tradicional / Clásico',
    'Fade / Degradado Moderno',
    'Perfilado y Arreglo de Barba',
    'Servicio Completo: Corte + Barba',
    'Corte Infantil / Juvenil',
  ],
  links: [
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
