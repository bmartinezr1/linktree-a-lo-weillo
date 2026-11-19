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

export function getMonantWhatsapp(panel?: SiteProfile) {
  const href = panel?.links.find((link) => link.icon === 'whatsapp' && link.href)?.href ?? '';
  const phone = href.match(/(?:phone=|wa\.me\/)(\d+)/)?.[1];
  return phone ? `https://wa.me/${phone}` : undefined;
}

export function createMonantProfile(panel?: SiteProfile): SiteProfile {
  return {
    name: 'Monant Studio',
    description: 'Manicura con estilo: diseños, cuidado y belleza.',
    highlights: [],
    links: [],
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
  };
}
