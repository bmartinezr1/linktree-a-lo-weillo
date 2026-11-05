import type { SiteProfile } from './site';

export const sergioSlug = 'sergio-claramunt-gangas';
export const sergioAssets = '/sergio/';

export function createSergioProfile(panel?: SiteProfile): SiteProfile {
  return {
    ...panel,
    slug: sergioSlug,
    name: 'Sergio Claramunt Gangas',
    tagline: 'Antes de Volver a Vivir',
    description: '',
    theme: 'sergio',
    typography: 'roboto',
    logo: `${sergioAssets}charla.jpeg`,
    logoAlt: 'Sergio junto a los asistentes a una charla',
    favicon: '/favicon.png',
    heroBanner: undefined,
    footer: '',
    highlights: [],
    branches: undefined,
    barbers: undefined,
    productShowcase: undefined,
    colors: { background: '#f5f0e9', text: '#302421', button: '#542723', buttonText: '#ffffff', accent: '#9a7547' },
    transfer: undefined,
    links: [
      {
        label: 'Consulta sobre el libro',
        href: 'https://wa.me/56993468945?text=' + encodeURIComponent('Hola Sergio, te escribo para consultar sobre tu libro.'),
        icon: 'whatsapp',
      },
      {
        label: 'Consulta sobre charlas',
        href: 'mailto:sergioclaramuntg@gmail.com?subject=' + encodeURIComponent('Consulta sobre charlas'),
        icon: 'gmail',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/sergio.claramunt13',
        icon: 'instagram',
      },
      {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@sergio.claramunt',
        icon: 'tiktok',
      },
      {
        label: 'Copiar datos · BancoEstado',
        icon: 'contact',
        logo: '/bank-logos/bancoestado.png',
        copyText: 'Sergio Claramunt\n20.277.490-3\nBanco Estado\nCuenta RUT\nN° 20277490\nsergioclaramuntg@gmail.com',
      },
      {
        label: 'Copiar datos · Banco de Chile',
        icon: 'contact',
        logo: '/bank-logos/banco-de-chile.png',
        copyText: 'Sergio Claramunt\n20.277.490-3\nBanco de Chile\nCuenta Corriente\nN° 00-159-64058-10\nsergioclaramuntg@gmail.com',
      },
    ],
  };
}

export function getSergioTransfers(_panel?: SiteProfile) {
  return [];
}
