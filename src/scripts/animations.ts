// Content is visible by default. Motion adds a small entrance offset only.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      if (!reducedMotion.matches) {
        entry.target.animate([{ transform: 'translateY(18px)' }, { transform: 'translateY(0)' }], {
          duration: 550, easing: 'cubic-bezier(.16,1,.3,1)',
        });
      }
      observer.unobserve(entry.target);
    }
  }, { threshold: .1 });
  document.querySelectorAll('[data-animate="fade-up"]').forEach(element => observer.observe(element));
}
