import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const source = await readFile(new URL('../public/analytics.js', import.meta.url), 'utf8');

test('GA4 inicia una vez y registra productos y canales sin enviar mensajes ni numeros', () => {
  const listeners = [];
  class Element {
    constructor(matches) { this.matches = matches; }
    closest(selector) { return this.matches[selector] ?? null; }
  }
  const window = {};
  const context = {
    window, Element, URL,
    location: { pathname: '/productos/soporte/', href: 'https://clicktap.app/productos/soporte/', origin: 'https://clicktap.app' },
    document: {
      title: 'Soporte ClickTap',
      addEventListener: (type, listener) => listeners.push(listener),
      querySelector: () => ({ textContent: 'Personalizado' }),
    },
  };
  runInNewContext(source, context);
  runInNewContext(source, context);
  assert.equal(listeners.length, 1);
  assert.equal(window.dataLayer.filter(args => args[0] === 'config').length, 1);
  const click = matches => listeners[0]({ target: new Element(matches) });
  click({ '[data-contact]': { dataset: { contact: 'Personalizado' } } });
  click({ 'a[href]': { href: 'https://wa.me/56912345678?text=privado', id: 'whatsapp-contact' } });
  click({ 'a[href]': { href: 'https://www.instagram.com/clicktap.cl/' } });
  click({ 'a[href]': { href: 'https://example.com/?text=privado' } });
  const events = window.dataLayer.filter(args => args[0] === 'event');
  assert.deepEqual(Array.from(events, args => args[1]), ['view_item', 'select_item', 'click_whatsapp', 'click_instagram']);
  assert.equal(events[2][2].product_name, 'Personalizado');
  assert.doesNotMatch(JSON.stringify(events), /privado|56912345678/);
});
