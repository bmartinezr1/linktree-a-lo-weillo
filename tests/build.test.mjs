import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const dist = new URL('../dist/', import.meta.url);
const entries = await readdir(dist, { recursive: true, withFileTypes: true });
const files = new Set(entries.filter(entry => entry.isFile()).map(entry =>
  '/' + relative(fileURLToPath(dist), join(entry.parentPath, entry.name)).replaceAll('\\', '/')));
const redirects = new Map((await readFile(new URL('_redirects', dist), 'utf8')).trim().split(/\r?\n/).map(line => line.split(/\s+/)));
const hasPage = path => files.has(path) || files.has(path.replace(/\/$/, '') + '/index.html');
const resolves = path => hasPage(redirects.get(path) ?? path);
const commercialPages = [
  '/index.html',
  '/soluciones/resenas-google/index.html',
  '/productos/tarjeta-nfc/index.html',
  '/productos/tarjeta-nfc-qr/index.html',
  '/productos/soporte-acrilico-nfc-qr/index.html',
  '/concepcion/tarjetas-nfc-concepcion/index.html',
];

test('GA4 aparece una sola vez en cada pagina de contenido', async () => {
  for (const path of files) {
    if (!path.endsWith('.html') || path === '/404.html') continue;
    const html = await readFile(new URL(path.slice(1), dist), 'utf8');
    if (html.includes('http-equiv="refresh"')) continue;
    assert.equal((html.match(/googletagmanager\.com\/gtag\/js\?id=G-Y3D0K1612Y/g) ?? []).length, 1, path);
    assert.equal((html.match(/src="\/analytics\.js"/g) ?? []).length, 1, path);
  }
});

test('conserva las páginas anteriores e incluye las nuevas rutas', () => {
  const htmlFiles = [...files].filter(path => path.endsWith('.html'));
  assert.ok(htmlFiles.length >= 97, `Solo se generaron ${htmlFiles.length} páginas.`);
  for (const path of commercialPages) assert.ok(files.has(path), path);
  assert.ok(files.has('/strato-beer-house/index.html'));
});

test('las direcciones originales y sus alias funcionan con nombres de archivo exactos', () => {
  for (const path of ['/7E-barber-shop', '/7E-barber-shop/', '/7e-barber-shop', '/7e-barber-shop/']) {
    assert.ok(resolves(path), `La dirección ${path} no tiene página ni redirección válida.`);
  }
  for (const destination of redirects.values()) assert.ok(hasPage(destination), destination);
  const names = [...files].filter(path => path.endsWith('.html')).map(path => path.toLowerCase());
  assert.equal(new Set(names).size, names.length, 'Hay páginas que colisionan al compilar en Windows.');
});

test('incluye una página 404 para desactivar la portada como respuesta a rutas inexistentes', async () => {
  assert.ok(files.has('/404.html'));
  const html = await readFile(new URL('404.html', dist), 'utf8');
  assert.match(html, /Página no encontrada/);
  assert.match(html, /name="robots" content="noindex"/);
});

test('publica robots.txt y un sitemap solo con direcciones canónicas seleccionadas', async () => {
  assert.ok(files.has('/robots.txt'));
  assert.ok(files.has('/sitemap.xml'));
  const robots = await readFile(new URL('robots.txt', dist), 'utf8');
  const sitemap = await readFile(new URL('sitemap.xml', dist), 'utf8');
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Sitemap: https:\/\/clicktap\.app\/sitemap\.xml/);
  for (const path of ['/', '/soluciones/resenas-google/', '/productos/tarjeta-nfc/', '/productos/tarjeta-nfc-qr/', '/productos/soporte-acrilico-nfc-qr/', '/concepcion/tarjetas-nfc-concepcion/']) {
    assert.match(sitemap, new RegExp(`<loc>https://clicktap\\.app${path.replaceAll('/', '\\/')}</loc>`));
  }
  assert.doesNotMatch(sitemap, /\/404/);
  assert.doesNotMatch(sitemap, /el_bajon_del_marley/);
  assert.doesNotMatch(sitemap, /7e-barber-shop/);
  assert.match(sitemap, /https:\/\/clicktap\.app\/7E-barber-shop\//);
});

test('las páginas comerciales tienen metadatos sociales, canonical y datos estructurados', async () => {
  for (const path of commercialPages) {
    const html = await readFile(new URL(path.slice(1), dist), 'utf8');
    assert.match(html, /<title>[^<]+ClickTap<\/title>/, path);
    assert.match(html, /<meta name="description" content="[^"]+"/, path);
    assert.match(html, /<link rel="canonical" href="https:\/\/clicktap\.app\//, path);
    assert.match(html, /property="og:title" content="[^"]+"/, path);
    assert.match(html, /property="og:description" content="[^"]+"/, path);
    assert.match(html, /property="og:image" content="https:\/\/clicktap\.app\/clicktap-social\.png"/, path);
    assert.match(html, /name="twitter:card" content="summary_large_image"/, path);
    const jsonLd = html.match(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)?.[1];
    assert.ok(jsonLd, `${path}: faltan datos estructurados`);
    assert.doesNotThrow(() => JSON.parse(jsonLd), `${path}: JSON-LD inválido`);
  }
});

test('todos los enlaces y recursos internos publicados existen', async () => {
  for (const path of files) {
    if (!path.endsWith('.html')) continue;
    const html = await readFile(new URL(path.slice(1), dist), 'utf8');
    for (const [, href] of html.matchAll(/(?:href|src)="(\/[^\"]*)"/g)) {
      const destination = new URL(href, 'https://clicktap.app').pathname;
      assert.ok(resolves(destination), `${path} apunta a un recurso inexistente: ${href}`);
    }
  }
});

test('las páginas de contenido incluyen direcciones completas al compartir en redes', async () => {
  for (const path of files) {
    if (!path.endsWith('.html')) continue;
    const html = await readFile(new URL(path.slice(1), dist), 'utf8');
    if (path === '/404.html' || html.includes('http-equiv="refresh"')) continue;
    assert.match(html, /property="og:url" content="https:\/\/clicktap\.app\//, path);
    for (const [, href] of html.matchAll(/property="og:(?:url|image)" content="([^\"]*)"/g)) {
      const url = new URL(href);
      assert.equal(url.protocol, 'https:', `${path}: ${href}`);
      if (url.origin === 'https://clicktap.app') assert.ok(resolves(url.pathname), `${path}: ${href}`);
    }
  }
});

test('la prueba visual de Comercio solo se activa en Saez Hidalgo', async () => {
  const pilotPath = '/panaderia-y-pasteleria-saez-hidalgo/index.html';
  assert.ok(files.has(pilotPath));
  for (const path of files) {
    if (!path.endsWith('.html')) continue;
    const html = await readFile(new URL(path.slice(1), dist), 'utf8');
    const bodyClass = html.match(/<body[^>]*class="([^"]*)"/)?.[1] ?? '';
    assert.equal(bodyClass.split(/\s+/).includes('comercio-panel'), path === pilotPath, path);
    if (path === pilotPath) {
      assert.match(html, /class="profile-description"[^>]*>Pastelería y panadería familiar de la ciudad de Concepción</);
    }
  }
});
