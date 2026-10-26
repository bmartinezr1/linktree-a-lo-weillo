import type { SiteProfile } from './site';

function validateUrl(href: string, field: string): void {
  const internal = href.startsWith('/') && !href.startsWith('//');
  if (/[\u0000-\u0020\u007f\\]/.test(href) || (!internal && !/^https:\/\//i.test(href))) {
    throw new Error(`${field}: usa una dirección HTTPS completa o una ruta interna desde /.`);
  }

  let url: URL;
  try {
    url = new URL(href, 'https://clicktap.app');
  } catch {
    throw new Error(`${field}: dirección inválida.`);
  }
  if (url.protocol !== 'https:' || !url.hostname || url.username || url.password ||
      (internal && url.origin !== 'https://clicktap.app')) {
    throw new Error(`${field}: la dirección debe ser HTTPS y no contener credenciales.`);
  }
}

export function validateSite(site: SiteProfile): void {
  if (!site.name.trim()) throw new Error('La página necesita un nombre.');
  for (const [name, value] of Object.entries(site.colors ?? {})) {
    if (!/^#[0-9a-f]{6}$/i.test(value)) throw new Error(`${site.name}: el color ${name} no es válido.`);
  }
  for (const link of site.links) {
    if (!link.label.trim()) throw new Error(`${site.name}: un enlace no tiene título.`);
    if (!link.href) {
      if (link.isDisabled || link.copyText || link.type === 'transferencia') continue;
      throw new Error(`${site.name} / ${link.label}: falta la dirección.`);
    }
    validateUrl(link.href, `${site.name} / ${link.label}`);
  }
  for (const barber of site.barbers ?? []) {
    if (!barber.name.trim()) throw new Error(`${site.name}: un barbero no tiene nombre.`);
    validateUrl(barber.href, `${site.name} / ${barber.name}`);
    validateUrl(barber.avatar, `${site.name} / foto de ${barber.name}`);
  }
  if (site.logo) validateUrl(site.logo, `${site.name} / logo`);
  validateUrl(site.favicon, `${site.name} / favicon`);
}
