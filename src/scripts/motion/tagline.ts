// Tagline word scrub (SPEC 4.7): each word goes from 20% opacity to full as the block scrolls through.
// Loaded only under html.motion (dynamic chunk). Still mode and no-JS keep every word at full opacity.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initTagline() {
  const el = document.querySelector<HTMLElement>('[data-tagline]');
  if (!el || !document.documentElement.classList.contains('motion')) return;
  const words = el.querySelectorAll<HTMLElement>('[data-word]');
  if (!words.length) return;
  gsap.registerPlugin(ScrollTrigger);
  // The dim state is set inline first and the tween only animates *to* full opacity. A fromTo would
  // lose its "from" on words past the playhead whenever ScrollTrigger.refresh() reverts the tween
  // (seen at 390px): those words jumped to full opacity before their turn.
  gsap.set(words, { opacity: 0.2 });
  gsap.to(words, {
    opacity: 1,
    ease: 'none',
    stagger: 0.5,
    scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
  });
}
