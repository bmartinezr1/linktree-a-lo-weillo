(() => {
  if (window.clicktapAnalyticsLoaded) return;
  window.clicktapAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-Y3D0K1612Y');

  const track = (name, params = {}) => window.gtag('event', name, {
    page_path: location.pathname,
    transport_type: 'beacon',
    ...params,
  });

  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest('[data-contact]');
    if (button) track('select_item', {
      items: [{ item_name: button.dataset.contact }],
    });

    const link = event.target.closest('a[href]');
    if (!link) return;
    const url = new URL(link.href, location.href);
    const product = link.id === 'whatsapp-contact'
      ? document.querySelector('#selected-product')?.textContent : undefined;
    if (['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname)) {
      track('click_whatsapp', { product_name: product });
    } else if (url.hostname === 'instagram.com' || url.hostname === 'www.instagram.com') {
      track('click_instagram');
    } else if (url.origin === location.origin && url.pathname.startsWith('/productos/')) {
      track('select_item', { items: [{ item_id: url.pathname, item_name: link.textContent.trim() }] });
    }
  });

  if (location.pathname.startsWith('/productos/')) {
    track('view_item', { items: [{ item_id: location.pathname }] });
  }
})();
