/** Entry reveals via IntersectionObserver. The hidden state only exists under html.motion.reveal-ready. */
export function initReveals() {
  const d = document.documentElement;
  if (!d.classList.contains('motion') || !('IntersectionObserver' in window)) return;
  d.classList.add('reveal-ready');
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries)
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
}
