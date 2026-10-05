export type SiteLink = {
  label: string;
  href: string;
  icon: 'instagram' | 'review' | 'location';
};

export const site = {
  name: '7E Barber Shop',
  tagline: 'Barbería · Concepción',
  description:
    'Bienvenido a 7E Barber Shop, ubicada en Ejército 1282, Concepción. Somos una barbería especializada en cortes de cabello modernos y clásicos, fades, perfilado y arreglo de barba, con atención personalizada y un ambiente cómodo y profesional. Trabajamos con productos de calidad para garantizar los mejores resultados en cada servicio. Atendemos exclusivamente con agenda para ofrecer puntualidad y una experiencia personalizada a cada cliente. Reserva tu cita y descubre por qué en 7E Barber Shop tu estilo es nuestra prioridad.',
  logo: '/logo-7e-barber-shop.png',
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
      href: 'https://www.google.com/maps/place/7E+Barber+Shop/data=!4m2!3m1!1s0x0:0xffd7f644b5740c48?sa=X&ved=1t:2428&ictx=111',
      icon: 'location',
    },
  ] satisfies SiteLink[],
} as const;
