// All positions are SVG coordinates, so the hand and card stay aligned on mobile.
function checkoutFrame(seconds) {
  const ease = (a, b) => {
    const v = Math.max(0, Math.min(1, (seconds - a) / (b - a)));
    return v * v * (3 - 2 * v);
  };
  const walk = ease(.3, 3);
  const reach = ease(3.4, 4.5) * (1 - ease(5.6, 6.5));
  const stride = seconds > .3 && seconds < 3 ? Math.sin((seconds - .3) * Math.PI * 3) * Math.sin(Math.PI * walk) : 0;
  // The phone starts upright and tilts over the plaque as the customer scans it.
  // Keeping the wrist closer to the body avoids the stretched/rubber-arm look.
  const handX = -44 - 21 * reach;
  const handY = 266 - 10 * reach;
  // Two fixed-length segments: the elbow bends instead of stretching the arm.
  const dx = handX + 18, dy = handY - 211, distance = Math.hypot(dx, dy);
  const along = (40 * 40 - 43 * 43 + distance * distance) / (2 * distance);
  const bend = Math.sqrt(Math.max(0, 40 * 40 - along * along));
  return {
    x: 565 - 183 * walk,
    bob: -Math.abs(stride) * 2,
    stride: stride * 13,
    elbowX: -18 + dx / distance * along + dy / distance * bend,
    elbowY: 211 + dy / distance * along - dx / distance * bend,
    handX, handY, wristAngle: -58 * reach,
    signal: seconds >= 4.6 && seconds < 5.5 ? Math.sin((seconds - 4.6) / .9 * Math.PI) : 0,
    notification: ease(5.1, 5.4) * (1 - ease(6.5, 6.8)),
    page: ease(6.8, 7.4),
    caption: seconds < 3.3 ? 'El cliente llega a caja' : seconds < 4.6 ? 'Acerca la parte superior del celular al ClickTap' : seconds < 5.5 ? 'El celular detecta el NFC' : seconds < 6.8 ? 'Toca el enlace para abrirlo' : 'La página del negocio, lista para usar'
  };
}

(() => {
  const scene = document.querySelector('#checkout-animation');
  if (!scene) return;
  const byId = id => document.getElementById(id);
  const person = byId('checkout-customer'), arm = byId('checkout-arm'), handset = byId('checkout-handset');
  const sleeve = byId('checkout-sleeve'), farArm = byId('checkout-far-arm');
  const front = byId('checkout-leg-front'), back = byId('checkout-leg-back');
  const page = byId('checkout-page'), world = byId('checkout-world'), signal = byId('checkout-signal');
  const notification = byId('checkout-notification'), phoneLink = byId('checkout-phone-link');
  const caption = byId('checkout-caption'), progress = byId('checkout-progress-fill');
  const pause = byId('scan-pause'), replay = byId('scan-replay');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const playbackRate = 1.2;
  let elapsed = reduced.matches ? 8 : 0, paused = reduced.matches, visible = false, previous = 0, frameId = 0;
  const attributeCache = new WeakMap();
  function setAttribute(element, name, value) {
    const values = attributeCache.get(element) || {};
    const next = String(value);
    if (values[name] === next) return;
    element.setAttribute(name, next);
    values[name] = next;
    attributeCache.set(element, values);
  }
  function render() {
    const f = checkoutFrame(elapsed);
    if (f.page < 1) {
      setAttribute(person, 'transform', `translate(${f.x} ${f.bob})`);
      setAttribute(arm, 'd', `M-18 211 L${f.elbowX} ${f.elbowY} L${f.handX} ${f.handY}`);
      setAttribute(sleeve, 'd', `M-18 211 L${-18 + (f.elbowX + 18) * .4} ${211 + (f.elbowY - 211) * .4}`);
      setAttribute(farArm, 'transform', `rotate(${-f.stride * .6} 18 211)`);
      setAttribute(handset, 'transform', `translate(${f.handX} ${f.handY}) rotate(${f.wristAngle})`);
      setAttribute(front, 'd', `M-12 278 Q${-15 + f.stride} 326 ${-16 + f.stride} 368`);
      setAttribute(back, 'd', `M14 278 Q${21 - f.stride} 326 ${20 - f.stride} 368`);
      setAttribute(signal, 'opacity', f.signal);
      setAttribute(notification, 'opacity', f.notification);
      setAttribute(phoneLink, 'opacity', elapsed >= 5.1 ? 1 : 0);
    }
    setAttribute(page, 'opacity', f.page);
    setAttribute(world, 'opacity', 1 - f.page);
    if (caption.textContent !== f.caption) caption.textContent = f.caption;
    progress.style.transform = `scaleX(${elapsed / 11})`;
    const label = paused ? 'Reproducir' : 'Pausar';
    if (pause.textContent !== label) pause.textContent = label;
  }
  function tick(now) {
    frameId = 0;
    if (paused || !visible || document.hidden) { previous = 0; return; }
    if (previous) elapsed = (elapsed + Math.min((now - previous) / 1000, .05) * playbackRate) % 11;
    previous = now;
    render();
    frameId = requestAnimationFrame(tick);
  }
  function start() {
    if (!frameId && !paused && visible && !document.hidden) frameId = requestAnimationFrame(tick);
  }
  function stop() {
    cancelAnimationFrame(frameId);
    frameId = 0;
    previous = 0;
  }
  pause.addEventListener('click', () => { paused = !paused; stop(); render(); start(); });
  replay.addEventListener('click', () => { elapsed = 0; paused = false; previous = 0; render(); start(); });
  document.addEventListener('visibilitychange', () => { stop(); start(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; if (paused) elapsed = 8; stop(); render(); start(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .15;
      stop();
      start();
    }, { threshold: .15 }).observe(scene);
  } else { visible = true; start(); }
  render();
})();
