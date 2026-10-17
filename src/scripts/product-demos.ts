/**
 * Product card demos (motion mode only, no GSAP; main.ts calls this only under html.motion).
 * The default DOM is the final state: DentiMed chip "Aprobado", Dicta full text with the pill idle.
 * Each demo runs once per page view.
 *  - DentiMed: the chip turns "Borrador" before it is seen, then back to "Aprobado" 1200ms after
 *    the overlay is on screen (300ms crossfade in CSS).
 *  - Dicta: the email body is emptied before it is seen, then types itself at 35ms per character
 *    while the pill reads "Escuchando... (F9)". The caret blinks only while the card is on screen.
 */

const CHIP_DELAY = 1200;
const LISTEN_LEAD = 400;
const CHAR_MS = 35;

/** Calls `fn` the first time `el` intersects at `threshold`, then stops observing. */
function onceVisible(el: Element, threshold: number, fn: () => void) {
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        fn();
      }
    },
    { threshold },
  );
  io.observe(el);
}

function initDentimed() {
  const card = document.querySelector<HTMLElement>('[data-dm-card]');
  const chip = card?.querySelector<HTMLElement>('[data-dm-chip]');
  const overlay = card?.querySelector<HTMLElement>('[data-dm-chip-card]');
  if (!card || !chip || !overlay) return;

  let done = false;
  // Observer 1: as soon as any part of the card shows (it is still hidden by its reveal), switch to draft.
  onceVisible(card, 0, () => {
    if (!done) chip.dataset.state = 'draft';
  });
  // Observer 2: once the overlay itself is mostly on screen, approve after a beat.
  // (Observing the overlay, not the whole card, keeps this working on short landscape viewports.)
  onceVisible(overlay, 0.6, () => {
    window.setTimeout(() => {
      done = true;
      chip.dataset.state = 'approved';
    }, CHIP_DELAY);
  });
}

function initDicta() {
  const card = document.querySelector<HTMLElement>('[data-dicta-card]');
  const typed = card?.querySelector<HTMLElement>('[data-typed]');
  const visual = card?.querySelector<HTMLElement>('[data-dicta-visual]');
  if (!card || !typed || !visual) return;

  const full = typed.textContent ?? '';
  let started = false;

  // Observer 1: empty the body before it can be seen.
  onceVisible(card, 0, () => {
    if (!started) typed.textContent = '';
  });

  // Observer 2: when half of the mock is on screen, listen and type once.
  onceVisible(visual, 0.5, () => {
    started = true;
    typed.textContent = '';
    card.dataset.state = 'listening';
    let t0 = 0;
    let shown = 0;
    const step = (now: number) => {
      if (!t0) t0 = now + LISTEN_LEAD;
      const n = Math.min(full.length, Math.max(0, Math.floor((now - t0) / CHAR_MS)));
      if (n !== shown) {
        shown = n;
        typed.textContent = full.slice(0, n);
      }
      if (n < full.length) requestAnimationFrame(step);
      else card.dataset.state = 'idle';
    };
    requestAnimationFrame(step);
  });

  // The caret blinks only while the card is on screen (CSS reads .is-live under html.motion).
  const live = new IntersectionObserver((entries) => {
    for (const e of entries) card.classList.toggle('is-live', e.isIntersecting);
  });
  live.observe(card);
}

export function initProductDemos() {
  if (!('IntersectionObserver' in window)) return;
  initDentimed();
  initDicta();
}
