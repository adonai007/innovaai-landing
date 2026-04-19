---
applyTo: "**"
description: "Performance posture: keep the site fast, lean, and mostly zero-JS"
---

# Performance Guidelines

Apply the repository-wide guidance from `../copilot-instructions.md`.

## Default to zero JavaScript

- Astro's strongest lever is shipping no JavaScript by default. Reach for a `client:*` directive only when interactivity cannot be expressed in static HTML and CSS
- Prefer `client:visible` or `client:idle` over `client:load` whenever the component is not critical to first paint
- If a section needs a single small interaction, a tiny inline `<script>` is usually cheaper than hydrating a framework island

## Animations

- Static CSS transitions and keyframes handle hover/focus/simple entrance effects. GSAP is reserved for scroll-triggered sequences that genuinely require timelines or ScrollTrigger
- Register GSAP plugins once in `src/scripts/animations.ts`, not per component
- Tie animations to `data-animate` hooks so they can be globally disabled or tuned in one place

## Particles

- `ParticleBackground.astro` is the only place tsParticles runs. Keep it on the hero only; do not instantiate additional particle systems on other sections or sub-landings
- Tune particle density for mobile; heavy particle configs tank INP on low-powered devices

## Assets

- Serve images in modern formats (WebP, AVIF) and include width/height to avoid CLS
- Self-host fonts via `@fontsource/*` to avoid third-party blocking requests; preload only the font weights actually used above the fold
- Audit `dist/` after non-trivial changes; a sudden bundle increase is usually an unintended framework import

## Build and deploy

- Render auto-deploys on push to `main`; keep builds under a few minutes by avoiding heavy post-processing steps
- Do not introduce tooling (image pipelines, prebuild scripts) without confirming the performance/maintenance trade-off is worth it
