/**
 * Global nav behaviour (components/Header.astro).
 * - initNavTheme: the bar turns dark while a [data-nav-theme="dark"] section crosses a 1px line at half its height.
 * - initMenu: the native <dialog> menu below 834px.
 * Without JS the bar stays light and the links show as a scrollable second row (CSS only).
 */

/** Keep in sync with the `nav` breakpoint in global.css (52.125em = 834px at the default text size). */
const DESKTOP_NAV = '(min-width: 52.125em)';

export function initNavTheme() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]');
  if (!nav || !sections.length || !('IntersectionObserver' in window)) return;
  const crossing = new Set<Element>();
  let io: IntersectionObserver | undefined;

  const build = () => {
    io?.disconnect();
    crossing.clear();
    // the root band is a 1px horizontal line at half the bar's height
    const p = Math.round(nav.offsetHeight / 2);
    const bottom = Math.max(0, window.innerHeight - p - 1);
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) crossing.add(e.target);
          else crossing.delete(e.target);
        }
        nav.dataset.theme = crossing.size ? 'dark' : 'light';
      },
      { rootMargin: `-${p}px 0px -${bottom}px 0px` },
    );
    sections.forEach((s) => io!.observe(s));
  };

  build();
  let timer = 0;
  window.addEventListener('resize', () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(build, 150);
  });
}

/** Mobile menu: native <dialog> opened with showModal() (focus trap, Escape, inert page). */
export function initMenu() {
  const dialog = document.getElementById('site-menu') as HTMLDialogElement | null;
  const button = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  if (!dialog || !button || typeof dialog.showModal !== 'function') return;
  const root = document.documentElement;

  const teardown = () => {
    root.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
  };
  const close = () => {
    if (dialog.open) dialog.close();
    teardown();
  };

  button.addEventListener('click', () => {
    if (dialog.open) return;
    // showModal() focuses the close button, which sits in the nav's scroll-padding band: global.css gives nav
    // controls a negative scroll margin, and this keeps the page where it was in browsers that still scroll
    const y = window.scrollY;
    dialog.showModal();
    if (window.scrollY !== y) window.scrollTo({ top: y, behavior: 'instant' });
    root.classList.add('menu-open');
    button.setAttribute('aria-expanded', 'true');
  });

  dialog.querySelectorAll('[data-menu-close]').forEach((b) => b.addEventListener('click', close));
  dialog.addEventListener('cancel', () => close());
  // Escape and the close button return focus to the menu button; a menu link moves focus to its section instead.
  let navigating = false;
  dialog.addEventListener('close', () => {
    teardown();
    if (navigating) navigating = false;
    else button.focus({ preventScroll: true });
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
      section.scrollIntoView();
      history.replaceState(null, '', hash);
      // keyboard and screen reader users continue from the section, not from the menu button at the top
      const labelId = section.getAttribute('aria-labelledby');
      const heading = (labelId && document.getElementById(labelId)) || section;
      if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }),
  );

  window.matchMedia(DESKTOP_NAV).addEventListener('change', (e) => {
    if (e.matches) close();
  });
}
