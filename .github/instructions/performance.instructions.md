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

- Static CSS transitions and keyframes handle hover, focus and entrance effects. There is no animation or smooth-scroll library; scrolling is native
- Page JS is three small modules: `src/scripts/main.ts` (nav theme, menu, reveals; keep it at most 6 kB gzip), `src/scripts/cinema.ts` (the film) and `src/scripts/dicta-demo.ts` (the Dicta demo). Nothing is render-blocking except the inline mode script in `Layout.astro`
- Entrance reveals use `data-reveal` and an IntersectionObserver
- The film clips load as Blobs only after the visitor scrolls, nearest first, and never under `html.still` or `html.slow-net`
- There are no particles, marquees or looping ambient animations; do not add them

## Assets

- Serve images through `astro:assets` (`<Picture>` with AVIF and WebP) and include width/height to avoid CLS. The first fold requests no image file (the DentiMed phones are HTML, its icon is inline SVG); everything below is lazy
- Fonts: Apple devices use SF Pro from the system stack and download no font. Everyone else gets self-hosted Inter Variable (`@fontsource-variable/inter`, `opsz` axis); the mode script preloads its one latin woff2. Do not add another family
- CSS is inlined (`build.inlineStylesheets: 'always'`), so there is no render-blocking stylesheet
- Audit `dist/` after non-trivial changes; a sudden bundle increase is usually an unintended framework import

## Build and deploy

- Render auto-deploys on push to `main`; keep builds under a few minutes by avoiding heavy post-processing steps
- Do not introduce tooling (image pipelines, prebuild scripts) without confirming the performance/maintenance trade-off is worth it
