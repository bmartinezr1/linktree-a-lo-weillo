import assert from 'node:assert/strict';
import test from 'node:test';
import * as profiles from '../src/data/site.ts';
import { barber } from '../src/data/barber.ts';
import { barberiaCJ } from '../src/data/barberia-cj.ts';
import { validateSite } from '../src/data/validate-site.ts';

test('todos los negocios actuales tienen enlaces válidos', () => {
  for (const profile of [...Object.values(profiles), barber, barberiaCJ]) {
    assert.doesNotThrow(() => validateSite(profile));
  }
});

test('acepta HTTPS y rutas internas, incluyendo consultas y fragmentos', () => {
  for (const href of ['https://example.com/?text=Hola%20mundo#contacto', '/la-dinastia-china/menu', '/?consulta=1#contacto']) {
    assert.doesNotThrow(() => validateSite({ ...profiles.site, links: [{ label: 'Contacto', href }] }));
  }
});

test('rechaza direcciones ejecutables, incompletas, credenciales y falsos enlaces internos', () => {
  for (const href of ['', 'https://', 'javascript:alert(1)', 'data:text/html,test', 'file:///tmp/test',
    'http://example.com', '//example.com', '/\\example.com', 'https://user:pass@example.com',
    'https://example.com/a b', 'https://example.com/\n', 'example.com']) {
    assert.throws(() => validateSite({ ...profiles.site, links: [{ label: 'Contacto', href }] }), Error, href);
  }
});

test('rechaza títulos vacíos y valida también los enlaces deshabilitados', () => {
  assert.throws(() => validateSite({ ...profiles.site, links: [{ label: '  ', href: '/barberia-cj' }] }));
  assert.throws(() => validateSite({ ...profiles.site, links: [{ label: 'Oculto', href: 'javascript:alert(1)', isDisabled: true }] }));
  assert.throws(() => validateSite({ ...profiles.site, name: '  ' }));
});

test('valida los enlaces del equipo y los recursos de la página', () => {
  assert.throws(() => validateSite({ ...barberiaCJ, barbers: [{ ...barberiaCJ.barbers[0], href: '//example.com' }] }));
  assert.throws(() => validateSite({ ...barberiaCJ, barbers: [{ ...barberiaCJ.barbers[0], avatar: 'javascript:alert(1)' }] }));
  assert.throws(() => validateSite({ ...profiles.site, logo: '//example.com/logo.png' }));
  assert.throws(() => validateSite({ ...profiles.site, favicon: '' }));
});
