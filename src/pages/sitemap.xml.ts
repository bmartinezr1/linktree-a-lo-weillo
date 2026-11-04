import type { APIRoute } from 'astro';
import { generatedPages } from '../data/public-pages';

const commercialPaths = [
  '/',
  '/soluciones/resenas-google/',
  '/productos/soporte-acrilico-nfc-qr/',
  '/concepcion/tarjetas-nfc-concepcion/',
];

const canonicalOverrides: Record<string, string> = {
  '7e-barber-shop': '/7E-barber-shop/',
};

const clientPaths = generatedPages.flatMap((site) => {
  const slug = site.slug?.trim();
  if (!slug || !site.description?.trim()) return [];
  return [canonicalOverrides[slug] ?? `/${slug}/`];
});

const paths = [...new Set([...commercialPaths, ...clientPaths])].sort();

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://clicktap.app');
  const urls = paths
    .map((path) => `  <url><loc>${escapeXml(new URL(path, baseUrl).toString())}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
