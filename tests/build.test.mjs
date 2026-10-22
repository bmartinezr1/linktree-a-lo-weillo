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
