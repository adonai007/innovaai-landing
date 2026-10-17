import { getLenis } from './state';

/**
 * Header CTA: visible only while no [data-primary-cta] (hero, closing) intersects the viewport.
 * Without JS (no html.js) the CTA is always visible. With JS its slot collapses while it is hidden.
 */
export function initHeaderCta() {
  const cta = document.querySelector<HTMLElement>('[data-header-cta]');
  if (!cta) return;
  const slot = cta.closest<HTMLElement>('[data-header-cta-slot]');
  const show = (on: boolean) => {
    cta.classList.toggle('is-shown', on);
    slot?.classList.toggle('is-shown', on);
  };
  const targets = document.querySelectorAll<HTMLElement>('[data-primary-cta]');
  if (!targets.length || !('IntersectionObserver' in window)) {
    show(true);
    return;
  }
  // A primary CTA that slides under the header pill no longer counts as visible, so the header CTA takes
  // over as soon as it is covered (the pill's bottom edge moves with the safe area).
  const pill = document.querySelector<HTMLElement>('.header-pill');
  const top = Math.round((pill?.getBoundingClientRect().bottom ?? 68) + 4);
  const inView = new Set<Element>();
  const io = new IntersectionObserver(
    (entries) => {
      // "in view" = at least half of it shows below the pill, so a sliver never leaves the page without a CTA
      for (const e of entries) {
        if (e.isIntersecting && e.intersectionRatio >= 0.5) inView.add(e.target);
        else inView.delete(e.target);
      }
      show(inView.size === 0);
    },
    { threshold: [0, 0.5, 1], rootMargin: `-${top}px 0px 0px 0px` },
  );
  targets.forEach((t) => io.observe(t));
}

/** Mobile menu: native <dialog> opened with showModal() (focus trap, Escape, inert page). */
export function initMenu() {
  const dialog = document.getElementById('site-menu') as HTMLDialogElement | null;
  const burger = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  if (!dialog || !burger || typeof dialog.showModal !== 'function') return;
  const root = document.documentElement;

  const teardown = () => {
    getLenis()?.start();
    root.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
  };
  const close = () => {
    if (dialog.open) dialog.close();
    teardown();
  };

  burger.addEventListener('click', () => {
    if (dialog.open) return;
    dialog.showModal();
    getLenis()?.stop();
    root.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true');
  });

  dialog.querySelectorAll('[data-menu-close]').forEach((b) => b.addEventListener('click', close));
  dialog.addEventListener('cancel', () => close());
  // Escape and the close button return focus to the burger; a menu link moves focus to its section instead.
  let navigating = false;
  dialog.addEventListener('close', () => {
    teardown();
    if (navigating) navigating = false;
    else burger.focus({ preventScroll: true });
  });

  dialog.querySelectorAll<HTMLAnchorElement>('a[data-menu-link]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href');
      if (!hash || !hash.startsWith('#')) return;
      const section = document.querySelector<HTMLElement>(hash);
      if (!section) return;
      e.preventDefault();
      navigating = true;
      close();
      const lenis = getLenis();
      // time-based, so it always completes (a lerped scroll to a half-pixel target never settles)
      if (lenis) lenis.scrollTo(section, { duration: 1.1 });
      else section.scrollIntoView();
      history.replaceState(null, '', hash);
      // keyboard and screen reader users continue from the section, not from the burger at the top
      const labelId = section.getAttribute('aria-labelledby');
      const heading = (labelId && document.getElementById(labelId)) || section;
      if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }),
  );

  const mq = window.matchMedia('(min-width: 1024px)');
  mq.addEventListener('change', (e) => {
    if (e.matches) close();
  });
}
