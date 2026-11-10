import type { LinkPageData, SiteLink, InfoHighlight } from './site';

export const barberiaCJ: LinkPageData = {
  name: 'Barbería CJ',
  tagline: 'Barbería · Janequeo 1501, Concepción',
  description: 'Agenda tu hora por WhatsApp o visítanos.',
  logo: '/logo-barberia-cj.png',
  logoAlt: 'Logo oficial de Barbería CJ Concepción',
  favicon: '/logo-barberia-cj.png',
  highlights: [
    {
      id: 'location',
      label: 'Ubicación',
      value: 'Janequeo 1501, 2do piso, Concepción',
    },
    {
      id: 'schedule',
      label: 'Horario de Atención',
      value: 'Lun - Vie: 10:30 a 19:30 hrs\nSábado: 11:00 a 19:00 hrs\nDomingo: 11:30 a 17:30 hrs',
    },
  ] satisfies InfoHighlight[],
  links: [
    {
      label: 'Escribir una reseña en Google',
      href: 'https://search.google.com/local/writereview?placeid=ChIJtbLkBgO1aZYRV61ZwUhdp1A',
      icon: 'review',
    },
    {
      label: 'Agendar Hora por WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=56972082844&text=hola%20buenas%20nesesitas%20agendar%20alguna%20hora%20%3F',
      icon: 'whatsapp',
    },
    {
      label: 'Instagram (@barberia_cj_)',
      href: 'https://www.instagram.com/barberia_cj_/#',
      icon: 'instagram',
    },
    {
      label: 'Facebook Oficial',
      href: 'https://www.facebook.com/barberiamoacj?mibextid=LQQJ4d&utm_source=ig&utm_medium=social&utm_content=link_in_bio',
      icon: 'facebook',
    },
  ] satisfies SiteLink[],
  footer: 'Barbería CJ · Tu estilo es nuestra prioridad.',
};
