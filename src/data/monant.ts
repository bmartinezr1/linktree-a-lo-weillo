import type { SiteProfile } from './site';

export const monantSlug = 'monant-studio';
export const monantAssets = '/monant/';

export type MonantService = { name: string; price?: string; note?: string };
export type MonantServiceGroup = { title: string; items: MonantService[] };

export const monantServices: MonantServiceGroup[] = [
  {
    title: 'Manicura',
    items: [
      { name: 'Esmaltado permanente', price: '$10.000', note: 'Incluye un diseño' },
      { name: 'Softgel', price: '$16.000' },
      { name: 'Polygel', price: '$20.000' },
      { name: 'Kapping gel', price: '$12.000' },
      { name: 'Kapping polygel', price: '$14.000' },
      { name: 'Diseños', price: 'desde $1.000' },
      { name: 'Charms', price: '$500' },
    ],
  },
  {
    title: 'Retiros',
    items: [
      { name: 'Retiro esmaltado o kapping', price: '$3.000' },
      { name: 'Retiro extensión', price: '$6.000' },
    ],
  },
  {
    title: 'Pedicura',
    items: [{ name: 'Pedicura', price: '$12.000', note: 'Incluye un diseño' }],
  },
  {
    title: 'Cejas',
    items: [
      { name: 'Perfilado de cejas', price: '$6.000' },
      { name: 'Laminado de cejas', price: '$13.000' },
    ],
  },
  {
    title: 'También',
    items: [{ name: 'Peluquería' }, { name: 'Pestañas' }],
  },
];

export const monantPhotos = Array.from({ length: 14 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `${monantAssets}trabajo-${n}.webp`,
    thumb: `${monantAssets}trabajo-${n}-thumb.webp`,
    alt: `Trabajo de Monant Studio ${i + 1}`,
    width: n === '04' ? 546 : 600,
    height: 800,
  };
});

export const monantColors = {
  background: '#fbe6ee',
  text: '#7a1c46',
  button: '#a8336a',
  buttonText: '#ffffff',
  accent: '#d9a39b',
};

export const monantWhatsappNumber = '56951723132';
export const monantWhatsapp = `https://wa.me/${monantWhatsappNumber}`;
export const monantReviewUrl = 'https://g.page/r/CVGWVOZUOTMdEBI/review';

export function getMonantWhatsapp(_panel?: SiteProfile) {
  return monantWhatsapp;
}

const monantLinkOrder: Record<string, number> = { instagram: 1, tiktok: 2 };

function buildMonantLinks(panel?: SiteProfile): SiteProfile['links'] {
  const panelLinks = (panel?.links ?? [])
    .filter((link) => link.icon !== 'whatsapp' && link.icon !== 'review')
    .map((link, index) => ({ link, index }))
    .sort((a, b) => (monantLinkOrder[a.link.icon] ?? 3) - (monantLinkOrder[b.link.icon] ?? 3) || a.index - b.index)
    .map(({ link }) => link);
  return [
    {
      label: 'Agenda por WhatsApp',
      href: `${monantWhatsapp}?text=${encodeURIComponent('Hola, quisiera agendar una hora 💅')}`,
      icon: 'whatsapp',
    },
    ...panelLinks,
  ];
}

export function createMonantProfile(panel?: SiteProfile): SiteProfile {
  return {
    name: 'Monant Studio',
    description: 'Manicura con estilo: diseños, cuidado y belleza.',
    highlights: [],
    ...panel,
    slug: monantSlug,
    theme: 'monant',
    typography: 'poppins',
    logo: `${monantAssets}logo-480.webp`,
    logoAlt: panel?.logoAlt ?? 'Logo de Monant Studio',
    logoLayout: 'round',
    logoWidth: 200,
    logoHeight: 200,
    favicon: `${monantAssets}logo-240.webp`,
    colors: monantColors,
    links: buildMonantLinks(panel),
  };
}
