const dialog = document.querySelector('#contact-dialog');
let returnFocus;
document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => {
  returnFocus = button;
  const product = button.dataset.contact;
  document.querySelector('#selected-product').textContent = product;
  document.querySelector('#whatsapp-contact').href = `https://wa.me/56961610609?text=${encodeURIComponent(`Hola ClickTap, me interesa ${product}. ¿Me cuentan el precio y cómo pedirlo?`)}`;
  document.querySelector('#contact-status').textContent = '';
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => returnFocus?.focus());

async function copyText(text, status, success, isCurrent = () => true) {
  try { await navigator.clipboard.writeText(text); if (isCurrent()) status.textContent = success; }
  catch { if (isCurrent()) status.textContent = `Puedes copiarlo manualmente: ${text}`; }
}
document.querySelector('#copy-inquiry').addEventListener('click', () => copyText(`Hola ClickTap, me interesa ${document.querySelector('#selected-product').textContent}. ¿Me cuentan el precio y cómo pedirlo?`, document.querySelector('#contact-status'), 'Mensaje copiado. Pégalo en Instagram para consultarnos.'));
const features = {
  reviews: { kicker: 'RESEÑAS DE GOOGLE', icon: '★', title: 'Convierte una buena atención en una reseña', description: 'Lleva al cliente directamente al perfil de Google del negocio para que pueda dejar su opinión con menos pasos.', result: 'Ideal para: facilitar que más clientes recuerden dejar su reseña.', status: 'Esta opción llevaría a las reseñas de Google del negocio.' },
  transfer: { kicker: 'DATOS DE TRANSFERENCIA', icon: '⇄', title: 'Copia los datos sin anotarlos ni dictarlos', description: 'Muestra el banco, tipo de cuenta, número, nombre, RUT y correo. El cliente puede copiar la información para pegarla en su banco.', result: 'Ideal para: agilizar los pagos y evitar errores al escribir.', status: '¡Datos de ejemplo copiados! En la página real se usarían los datos del negocio.' },
  whatsapp: { kicker: 'WHATSAPP', icon: '●', title: 'Empieza una conversación directamente', description: 'Abre WhatsApp con el número del negocio y puede incluir un mensaje inicial para que el cliente consulte de inmediato.', result: 'Ideal para: reservas, cotizaciones y preguntas rápidas.', status: 'Esta opción abriría una conversación de WhatsApp con el negocio.' },
  instagram: { kicker: 'REDES SOCIALES', icon: '◎', title: 'Lleva al cliente a tus redes sociales', description: 'Conecta con Instagram, TikTok, Facebook u otra red para que conozcan tus trabajos, novedades y contenido.', result: 'Ideal para: seguir presente después de la visita.', status: 'Esta opción abriría el perfil de Instagram del negocio.' },
  location: { kicker: 'UBICACIÓN', icon: '⌖', title: 'Ayuda a tus clientes a encontrar el local', description: 'Abre la ubicación del negocio en el mapa para que el cliente pueda revisar la dirección e iniciar una ruta.', result: 'Ideal para: locales con atención presencial.', status: 'Esta opción abriría la ubicación del negocio en el mapa.' }
};
const featureButtons = [...document.querySelectorAll('.business-link')];
const featureExplainer = document.querySelector('#feature-explainer');
const explainerHome = document.createComment('Desktop explanation position');
featureExplainer.before(explainerHome);
const mobileDemo = matchMedia('(max-width: 760px)');
const featureFields = Object.fromEntries(['kicker', 'icon', 'title', 'description', 'result', 'status'].map(key => [key, document.getElementById(`feature-${key}`)]));
function placeExplanation() {
  const selected = featureButtons.find(button => button.classList.contains('active'));
  if (mobileDemo.matches) selected.after(featureExplainer);
  else explainerHome.after(featureExplainer);
}
mobileDemo.addEventListener('change', placeExplanation);
placeExplanation();
function explainFeature(button) {
  const feature = features[button.dataset.feature];
  featureButtons.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  for (const [key, element] of Object.entries(featureFields)) element.textContent = feature[key];
  placeExplanation();
  featureExplainer.classList.remove('feature-changed');
  requestAnimationFrame(() => {
    featureExplainer.classList.add('feature-changed');
    if (mobileDemo.matches) featureExplainer.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  });
  if (button.dataset.feature === 'transfer') {
    featureFields.status.textContent = 'Copiando datos de ejemplo…';
    copyText('DEMO — Datos ficticios, no usar para transferir. Café Central · Banco de ejemplo · Cuenta 00000000 · RUT XX.XXX.XXX-X', featureFields.status, feature.status, () => button.classList.contains('active'));
  }
}
featureButtons.forEach(button => {
  button.setAttribute('aria-controls', 'feature-explainer');
  button.addEventListener('click', () => explainFeature(button));
});

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reducedMotion) {
  const staggerGroups = ['.strip-inner > *', '.business-link', '.order-list li', '.faqs details'];
  staggerGroups.forEach(selector => document.querySelectorAll(selector).forEach((element, index) => {
    element.classList.add('scroll-item');
    element.style.setProperty('--reveal-delay', `${(index % 5) * 70}ms`);
  }));

  document.querySelectorAll('.experience-copy, .faq-section > div:first-child').forEach(element => element.classList.add('reveal-left'));
  document.querySelectorAll('.phone-scene, .faqs').forEach(element => element.classList.add('reveal-right'));

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

  document.querySelectorAll('.reveal, .scroll-item').forEach(element => {
    element.classList.add('will-reveal');
    observer.observe(element);
  });
}

// Suspend decorative loops when their section is outside the viewport.
if ('IntersectionObserver' in window) {
  const motionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    entry.target.classList.toggle('motion-paused', !entry.isIntersecting);
  }));
  document.querySelectorAll('.hero-stage, .product-visual, .step-art').forEach(element => {
    element.classList.add('motion-paused');
    motionObserver.observe(element);
  });
}
const syncVisibility = () => document.documentElement.classList.toggle('page-hidden', document.hidden);
document.addEventListener('visibilitychange', syncVisibility);
syncVisibility();

if (!reducedMotion) {
  const root = document.documentElement;
  const hero = document.querySelector('.hero-stage');
  const progressBar = document.querySelector('.scroll-progress > span');
  let previousShift = -1;
  let maxScroll = Math.max(root.scrollHeight - innerHeight, 1);
  let scrollFrame = 0;
  function updateScrollMotion() {
    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    progressBar.style.transform = `scaleX(${progress})`;
    const shift = Math.min(scrollY * 0.035, 18);
    if (shift !== previousShift) {
      hero.style.setProperty('--hero-shift', `${shift}px`);
      previousShift = shift;
    }
    scrollFrame = 0;
  }
  function requestScrollMotion() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollMotion);
  }
  addEventListener('scroll', requestScrollMotion, { passive: true });
  function measurePage() {
    maxScroll = Math.max(root.scrollHeight - innerHeight, 1);
    requestScrollMotion();
  }
  addEventListener('resize', measurePage, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(measurePage).observe(document.body);
  else addEventListener('load', measurePage, { once: true });
  updateScrollMotion();
}
