// Dynamic chunk, loaded only under html.motion: GSAP + ScrollTrigger + Lenis and the section motion modules.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { setLenis } from '../state';
import { initHeroMotion } from './hero';
import { initExample } from './example';
import { initTagline } from './tagline';

export function initMotion() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  // Anchor scrolls are time-based: a lerped scroll only completes when the rounded positions match, so a
  // section whose top sits on a half pixel left Lenis stuck in its smooth state (keys and Tab broke).
  const lenis = new Lenis({ autoRaf: false, lerp: 0.1, anchors: { duration: 1.1 } });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  setLenis(lenis);
  // scripts outside this chunk (cinema.ts) announce page height changes after load
  addEventListener('layout:refresh', () => ScrollTrigger.refresh());
  initHeroMotion();
  initExample();
  initTagline();
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}
