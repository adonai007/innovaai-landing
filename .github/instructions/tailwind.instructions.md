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

- Use the colors exposed by `@theme`: `soft` (page), `night` (dark sections), `ink`, `muted`, `line`, `sky`, `action` (the only CTA fill and the link color on light), `electric` (logo blue, graphics only), `teal` (dark surfaces only), the chip pairs `draft`/`ok`, and the product-only `dm-*` and `dicta-*` colors
- Type scale tokens: `text-display`, `text-h2`, `text-h3-lg`, `text-lead`, `text-ui`; fonts `font-display` (Outfit) and `font-sans` (Inter, the default)
- Use the utilities (`bg-night`, `text-muted`), not hex values; in component `<style>` blocks use `var(--color-*)`
- Add new tokens to `@theme` once and reuse them everywhere; avoid per-component variables

## Utilities and helpers

- Prefer utility-first Tailwind classes in the template
- The components layer in `global.css` defines `.wrap`, `.section`, `.section-lg`, `.eyebrow`, `.section-intro`, `.on-dark`, `.btn`, `.btn-primary`, `.btn-sm`, `.btn-lg`, `.link-arrow`, `.text-link`, `.chip-*` and `.wm-ai`; reuse them verbatim
- One button style (`btn-primary`); every secondary action is a `.link-arrow`
- Gradients only for the wordmark "AI", the Ejemplo progress rail and the "Preparando borrador" bar. The night scrims over the cinematic photos are image scrims for legibility, not decorative gradients. No glows, particles, text gradients or neon. Shadows only on the header and floating mock UI
- Glass: use `backdrop-blur-lg backdrop-saturate-150`; never hand-write `backdrop-filter`
- Do not use `@apply` in component scoped styles; motion selectors are written `:global(html.motion) .x`

## Responsive and light theme

- The site is light first (`soft` background) with night sections marked `.on-dark`, which switches eyebrows to teal and focus rings to teal. Do not add a theme toggle
- Teal never appears on a light surface; text on dark uses white with opacity steps, never below `white/60`
- Sentence case everywhere; never uppercase text with CSS
- Mobile-first: reach for unprefixed utilities first, then `md:`, `lg:` breakpoints
- Keep breakpoints consistent with Tailwind defaults; do not override them in `@theme` without a concrete reason

## Animations

- One curve (`ease-brand`) and three durations: 300ms (hover, chips), 400 to 500ms (menu, burger, FAQ), 900ms (reveals)
- Hidden or initial states exist only under `html.motion` (and `html.motion.reveal-ready` for `data-reveal`, `html.motion:not(.slow-net) .cinema:not(.is-static)` for the cinematic tracks), so no-JS and reduced motion always show the final state. Script-only controls (the cinematic chapter bar) ship with the `hidden` attribute and the script reveals them
- Static CSS transitions handle hovers and focus states; GSAP is reserved for the scroll-scrubbed modules in `src/scripts/motion/` (the cinematic clips are scrubbed by `src/scripts/cinema.ts` without GSAP)
