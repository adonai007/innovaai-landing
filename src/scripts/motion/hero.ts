// Hero image parallax (lg only, scrubbed). Loaded inside the motion chunk, so html.motion is already true.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initHeroMotion() {
  const img = document.querySelector<HTMLImageElement>('.hero-photo img');
  if (!img) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.matchMedia().add('(min-width: 1024px)', () => {
    // Origin at 25% keeps the scaled image covering the frame for the whole 0 to -6% travel
    // (8% of headroom: 2% above, 6% below), so the night underlay never shows at the bottom edge.
    gsap.set(img, { scale: 1.08, transformOrigin: '50% 25%' });
    gsap.to(img, {
      yPercent: -6,
      ease: 'none',
      scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: true },
    });
  });
}
