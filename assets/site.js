(() => {
  'use strict';
  const config = window.SAW_CONFIG || {};
  document.querySelectorAll('[data-store]').forEach(link => {
    const address = config[link.dataset.store];
    if (!address) return;
    try {
      const url = new URL(address);
      if (url.protocol === 'https:') link.href = url.href;
    } catch { /* Preserve the working HTML fallback. */ }
  });

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#main-navigation');
  if (menuButton && menu) {
    const closeMenu = (returnFocus = false) => {
      menuButton.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      if (returnFocus) menuButton.focus();
    };
    menuButton.hidden = false;
    menu.classList.add('enhanced');
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) closeMenu(true);
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    const desktop = window.matchMedia('(min-width: 901px)');
    desktop.addEventListener('change', () => closeMenu());
  }

  const copyButton = document.querySelector('[data-copy-email]');
  const copyStatus = document.querySelector('#copy-status');
  if (copyButton && navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('superiorappworks@gmail.com');
        copyStatus.textContent = 'E-posta adresi kopyalandı.';
      } catch {
        copyStatus.textContent = 'Kopyalanamadı. E-posta adresini seçerek kopyalayabilirsiniz.';
      }
    });
  }

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach(element => {
      element.classList.add('reveal-ready');
      observer.observe(element);
    });
  }
})();
