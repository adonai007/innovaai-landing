// Always-loaded entry. No GSAP, no Lenis: native scrolling, as on apple.com.
// Section scripts (cinema.ts, dicta-demo.ts) are imported by their own components.
import { initNavTheme, initMenu } from './header';
import { initReveals } from './reveals';

initNavTheme();
initMenu();
initReveals();
