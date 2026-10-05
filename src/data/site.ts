export type SiteLink = {
  label: string;
  href: string;
  icon: 'instagram' | 'review' | 'location';
};

export const site = {
  name: '7E Barber Shop',
  tagline: 'Barbería · Concepción',
  description:
    'Barbería en Ejército 1282, Concepción, especializada en cortes modernos y clásicos, fades y arreglo de barba. Atención personalizada solo con agenda.',
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
      href: 'https://www.google.com/maps?sca_esv=ba26d991ad3ae1a8&output=search&q=7E+Barber+Shop+Concepci%C3%B3n&source=lnms&fbs=ABfTbFUDadgeu2mn4mYJ8iEZ1GUDIYSbg_8HIOW5OUNaSh5T1VzoHI0KTTsB4VNZ5gMkFYjCpAAQMfouK7rIZFeI6DhZhIn80lI1345u-nAvcyGXnN2lxM3V-kmCNO8PgOH5HQnfIonuz2Eb6gk0EiS7RuLs2hLcWCyjaVDTlss7ZJkRRa1l5TQZ6pOV11r2FbVb3B7UrrCRxMN67Wi0rS30CzPWLBSoQUQ9f-ljJgKhr00kWSgu6Ps&entry=mc&ved=1t:200715&ictx=111',
      icon: 'location',
    },
  ] satisfies SiteLink[],
} as const;
