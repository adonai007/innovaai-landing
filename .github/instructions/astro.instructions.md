<!-- Based on: https://github.com/github/awesome-copilot/blob/main/instructions/astro.instructions.md -->
---
applyTo: "**/*.astro"
description: "Astro 5.x conventions for the InnovaAI static landing page"
---

# Astro Guidelines

Apply the repository-wide guidance from `../copilot-instructions.md` to all components.

## Architecture

- This is a content-driven marketing site built on the Islands Architecture. Default to zero JavaScript; server-render everything that does not require interactivity
- Prefer static generation (SSG). Do not introduce SSR, adapters, or server endpoints unless a new requirement explicitly needs them
- One landing section per `.astro` component; compose the page in `src/pages/{locale}/index.astro` or the DiarioMed sub-landing page

## Component authoring

- Put the TypeScript frontmatter block at the top; keep the template below it focused on semantic HTML
- Declare an `interface Props` for every component that accepts data; destructure with sensible defaults
- Accept already-translated strings as props — do not import from `src/data/**` inside components
- Keep components framework-free; do not pull in React, Vue, Svelte, or Solid just for presentational work

## Client directives

- Reach for `client:*` directives only when interactivity cannot be done with plain CSS or a tiny inline script
- Prefer `client:visible` for below-the-fold widgets, `client:idle` for non-critical interactivity, `client:load` only when the component must be ready on first paint
- The particle background is the canonical example: it lives in an island because tsParticles must run on the client

## Data flow

- Pages load localized data from `src/data/{locale}/*.ts` and pass it down as props; components never reach back up for it
- Use `Astro.currentLocale` or the page path to pick the data bundle; do not duplicate lookup logic across components
- For repeated data shapes, define a shared type in `src/data/types.ts` (create it if missing) and import it from both locales

## Animations and assets

- Scroll-triggered animations are wired in `src/scripts/animations.ts`. Surface hooks via `data-animate` attributes; do not inline GSAP calls inside components
- Use Astro's `<Image />` where possible for optimized output; otherwise keep images in `public/` and reference them with absolute paths

## SEO and metadata

- The base layout (`src/layouts/Layout.astro`) owns global meta tags, Open Graph, Twitter Card, and hreflang. Extend it via slots or props; do not duplicate `<head>` logic in pages
- Every page must set a localized title and description; fall back to layout defaults only when intentional
