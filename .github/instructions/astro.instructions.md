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
- One landing section per `.astro` component; compose the page in `src/pages/{locale}/index.astro`. The `dentimed` and `diariomed` pages are redirect stubs to https://dentimed.app/

## Component authoring

- Put the TypeScript frontmatter block at the top; keep the template below it focused on semantic HTML
- Declare an `interface Props` for every component that accepts data; destructure with sensible defaults
- Accept already-translated strings as props — do not import from `src/data/**` inside components
- Keep components framework-free; do not pull in React, Vue, Svelte, or Solid just for presentational work

## Client directives

- Reach for `client:*` directives only when interactivity cannot be done with plain CSS or a tiny inline script
- Prefer `client:visible` for below-the-fold widgets, `client:idle` for non-critical interactivity, `client:load` only when the component must be ready on first paint
- The site uses no framework islands. Client behaviour lives in plain TypeScript under `src/scripts/` (imported once from `Layout.astro`); motion code is dynamically imported only under `html.motion`

## Data flow

- Pages load localized data from `src/data/{locale}/*.ts` and pass it down as props; components never reach back up for it
- Use `Astro.currentLocale` or the page path to pick the data bundle; do not duplicate lookup logic across components
- Every data bundle has a type in `src/data/types.ts`; both locale files end with `satisfies <Type>`

## Animations and assets

- Entrance reveals use the `data-reveal` attribute. Scroll-scrubbed motion lives in `src/scripts/motion/`; do not inline GSAP calls inside components
- The default markup must be the final static state; hidden or initial states exist only under `html.motion`
- Use Astro's `<Image />` or `<Picture />` with images in `src/assets/`; keep only the OG image, favicons and the deck in `public/`

## SEO and metadata

- The base layout (`src/layouts/Layout.astro`) owns global meta tags, Open Graph, Twitter Card, and hreflang. Extend it via slots or props; do not duplicate `<head>` logic in pages
- Every page must set a localized title and description; fall back to layout defaults only when intentional
