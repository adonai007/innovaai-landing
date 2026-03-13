import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Respect prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Hero animations timeline
  const heroTl = gsap.timeline({ delay: 0.3 });

  heroTl
    .to('.hero-word', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
    })
    .to('[data-animate="hero-sub"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.2')
    .to('[data-animate="hero-ctas"]', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.3')
    .to('[data-animate="hero-badges"]', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.2')
    .to('[data-animate="hero-scroll"]', {
      opacity: 1,
      duration: 0.5,
    }, '-=0.1');

  // Scroll-triggered fade-up animations
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || '0');
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      delay,
      ease: 'power2.out',
    });
  });

  // Process timeline line animation
  const processLine = document.querySelector('.process-line') as HTMLElement;
  if (processLine) {
    ScrollTrigger.create({
      trigger: '#proceso',
      start: 'top 60%',
      end: 'bottom 40%',
      scrub: 1,
      onUpdate: (self) => {
        processLine.style.width = `${self.progress * 100}%`;
      },
    });
  }
} else {
  // If reduced motion, just show everything
  gsap.set('.hero-word, [data-animate]', { opacity: 1, y: 0 });
  const processLine = document.querySelector('.process-line') as HTMLElement;
  if (processLine) processLine.style.width = '100%';
}
