/**
 * Dicta tile demo (imported by Dicta.astro). Runs only under html.motion, once per page view:
 * when the window first enters the viewport its text is emptied; once it is half visible the F9 key presses,
 * the pill listens, and after 400ms the text types itself at 35ms per character. Then the pill returns to idle
 * and the caret blinks three times before it stays solid. Every other mode keeps the static final markup.
 */
const TYPE_MS = 35;
const LISTEN_DELAY_MS = 400;

function initDictaDemo() {
  const root = document.querySelector<HTMLElement>('[data-dicta]');
  const win = root?.querySelector<HTMLElement>('[data-dicta-window]');
  const textEl = root?.querySelector<HTMLElement>('[data-dicta-text]');
  if (!root || !win || !textEl) return;
  if (!document.documentElement.classList.contains('motion') || !('IntersectionObserver' in window)) return;

  const full = textEl.textContent ?? '';
  const chars = Array.from(full);
  let emptied = false;
  let started = false;

  const wait = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms));

  async function play() {
    root!.dataset.state = 'listening';
    await wait(LISTEN_DELAY_MS);
    for (let i = 1; i <= chars.length; i++) {
      textEl!.textContent = chars.slice(0, i).join('');
      await wait(TYPE_MS);
    }
    root!.dataset.state = 'idle';
    root!.classList.add('is-blink');
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!emptied) {
          emptied = true;
          textEl.textContent = '';
        }
        if (!started && entry.intersectionRatio >= 0.5) {
          started = true;
          io.disconnect();
          void play();
        }
      }
    },
    { threshold: [0, 0.5] },
  );
  io.observe(win);
}

initDictaDemo();
