---
applyTo: "**/*.astro,**/*.css"
description: "Tailwind CSS v4 conventions for the InnovaAI design system"
---

# Tailwind CSS v4 Guidelines

Apply the repository-wide guidance from `../copilot-instructions.md` to all styling.

## Configuration model

- Tailwind v4 is wired through `@tailwindcss/vite`. There is **no** `tailwind.config.js|ts|mjs` file and none should be introduced
- Design tokens live in the `@theme` block inside `src/styles/global.css`; extend the palette or typography there, not in component styles
- The stylesheet is imported via `@import "tailwindcss";`. Do not switch to the legacy `@tailwind base/components/utilities` directives

## Design tokens

- Use the colors exposed by `@theme`: `canvas` (white), `canvas-alt` (`#f5f5f7`), `night` (black), `night-2` and `night-3` (cards, windows and the dark nav on black), `ink`, `ink-2` (grey text at any size), `ink-3` (only 21px/600 and up on light), `on-night`, `on-night-2`, `hairline`, `hairline-on-night`, `fill`, `action` (pill fill and link colour on light), `link-on-night` (links and focus rings on black) and the product-only `dm-accent`, `dm-teal` and `dicta`
- Type scale tokens (fluid, Apple's measured sizes): `text-display`, `text-hero`, `text-tile`, `text-section`, `text-eyebrow`, `text-label`, `text-subhead`, `text-card`, `text-question`, `text-intro`, `text-kicker`, `text-body`, `text-caption`, `text-legal`. One family, `font-sans` (SF Pro on Apple devices, Inter elsewhere), weights 400 and 600 only. Tracking comes from the `--tr-*` variables, which `html.sf` switches to Apple's values
- Use the utilities (`bg-night`, `text-muted`), not hex values; in component `<style>` blocks use `var(--color-*)`
- Add new tokens to `@theme` once and reuse them everywhere; avoid per-component variables

## Utilities and helpers

- Prefer utility-first Tailwind classes in the template
- The components layer in `global.css` defines `.wrap`, `.wrap-text`, `.section`, `.on-night`, `.seam`, `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-l`, `.btn-s`, `.btn-nav`, `.btn-auto`, `.link-chevron`, `.text-link` and `.br-lg`; reuse them verbatim (through `Button` and `ChevronLink` in templates)
- Buttons: blue pill (`btn-primary`) for the main action, outline pill (`btn-secondary`) for a second action beside it, chevron links for everything else. No icons inside pills
- No gradients except the film's true-black image scrims. No glows, particles, text gradients or neon. Cards have a 28px radius (`rounded-card`), no borders and no shadows; separation comes only from fill contrast. The only shadow is the DentiMed phone device
- Glass: `backdrop-blur-[20px] backdrop-saturate-[1.8]`, only on the global nav, the mobile menu and the film's pause button; never hand-write `backdrop-filter`
- Do not use `@apply` in component scoped styles; motion selectors are written `:global(html.motion) .x`

## Responsive and light theme

- The page is light first (`canvas` and `canvas-alt`) with two black tiles (Dicta and the film) marked `.on-night` and `data-nav-theme="dark"`; on them links and focus rings use `link-on-night`. Do not add a theme toggle
- DentiMed teal and Dicta emerald are never text on a light surface; text on black uses `on-night` and `on-night-2`
- Sentence case everywhere; never uppercase text with CSS
- Mobile-first: unprefixed utilities first, then `md:` (735px), `nav:` (834px) and `lg:` (1069px). These are the only breakpoints (defined in em in `@theme`); do not add others

## Animations

- Two curves: `ease-standard` for UI colour transitions (320ms) and `--ease-out` for reveals and transforms (reveals 800ms with a 1.5rem rise)
- Hidden or initial states exist only under `html.motion` (and `html.motion.reveal-ready` for `data-reveal`, `html.motion:not(.slow-net) .cinema:not(.is-static)` for the film tracks), so no-JS and reduced motion always show the final state. Script-only controls (the film's pause button) ship with the `hidden` attribute and the script reveals them
- Static CSS transitions handle hovers and focus states. There is no animation library: the film clips are scrubbed by `src/scripts/cinema.ts` and the Dicta demo types in `src/scripts/dicta-demo.ts`
