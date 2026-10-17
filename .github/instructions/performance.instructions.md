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

- Static CSS transitions and keyframes handle hover/focus/simple entrance effects. GSAP is reserved for scroll-scrubbed sequences that genuinely require timelines or ScrollTrigger
- `src/scripts/main.ts` always loads and must stay at most 6 kB gzip (no GSAP). GSAP, ScrollTrigger and Lenis are dynamically imported from `src/scripts/motion/index.ts` only under `html.motion`; that chunk stays at most 60 kB gzip
- Entrance reveals use `data-reveal` and an IntersectionObserver, not GSAP
- There are no particles, marquees or looping ambient animations; do not add them

## Assets

- Serve images through `astro:assets` (`<Picture>` with AVIF and WebP) and include width/height to avoid CLS. Only the hero image is eager with `fetchpriority="high"`; everything else is lazy
- Self-host fonts via `@fontsource-variable/outfit` and `@fontsource-variable/inter`; preload only the Outfit latin file
- CSS is inlined (`build.inlineStylesheets: 'always'`), so there is no render-blocking stylesheet
- Audit `dist/` after non-trivial changes; a sudden bundle increase is usually an unintended framework import

## Build and deploy

- Render auto-deploys on push to `main`; keep builds under a few minutes by avoiding heavy post-processing steps
- Do not introduce tooling (image pipelines, prebuild scripts) without confirming the performance/maintenance trade-off is worth it
