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

- Use CSS variables exposed by `@theme` for brand colors: `--color-primary`, `--color-secondary`, `--color-dicta`, `--color-diariomed`
- Reference tokens via arbitrary values when a utility does not yet exist (e.g. `text-[var(--color-primary)]`), instead of hardcoding hex values
- Add new tokens to `@theme` once and reuse them everywhere; avoid per-component variables

## Utilities and helpers

- Prefer utility-first Tailwind classes in the template
- The shared helpers `.glass`, `.glass-strong`, `.gradient-text`, `.glow-green`, `.section-padding` are defined in `global.css` — reuse them verbatim for the Neural Green look
- `@apply` is acceptable inside `global.css` to build named helpers; avoid `@apply` inside component scoped styles

## Responsive and dark theme

- The site ships with a dark theme by default. Do not add a light-mode toggle unless the product requires one
- Mobile-first: reach for unprefixed utilities first, then `md:`, `lg:` breakpoints
- Keep breakpoints consistent with Tailwind defaults; do not override them in `@theme` without a concrete reason

## Animations

- Use the existing keyframes in `src/styles/animations.css` for reusable motion
- Static CSS transitions handle hovers and focus states; GSAP is reserved for scroll-triggered sequences
