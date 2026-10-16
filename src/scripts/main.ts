// Always-loaded entry (no GSAP). Motion-only code is dynamically imported under html.motion.
import { initHeaderCta, initMenu } from './header';
import { initReveals } from './reveals';
import { initHeroCard } from './hero-card';
import { initProductDemos } from './product-demos';

const motion = document.documentElement.classList.contains('motion');
initHeaderCta();
initMenu();
initHeroCard();
initReveals();
if (motion) {
  initProductDemos();
  import('./motion/index').then((m) => m.initMotion());
}
