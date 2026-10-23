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
- The site uses no framework islands. Client behaviour lives in plain TypeScript under `src/scripts/`: `main.ts` imported once from `Layout.astro`, `cinema.ts` imported by `CinematicStory.astro` and `dicta-demo.ts` imported by `Dicta.astro`. Native scrolling only; do not add an animation or smooth-scroll library

## Data flow

- Pages load localized data from `src/data/{locale}/*.ts` and pass it down as props; components never reach back up for it
- Use `Astro.currentLocale` or the page path to pick the data bundle; do not duplicate lookup logic across components
- Every data bundle has a type in `src/data/types.ts`; both locale files end with `satisfies <Type>`

## Animations and assets

- Entrance reveals use the `data-reveal` attribute (never on the DentiMed first fold, the Dicta visual or in the film chapter). One motion idea per section, never looped: the DentiMed phones rise once, the Dicta text types once (`dicta-demo.ts`), the film clips are scrubbed from scroll (`cinema.ts`)
- The default markup must be the final static state; hidden or initial states exist only under `html.motion` (reveals under `html.motion.reveal-ready`, the film tracks under `html.motion:not(.slow-net) .cinema:not(.is-static)`, the scene copy under `.cinema.is-live`). Script-only controls, like the film's pause button, ship with the `hidden` attribute and the script reveals them
- Sections over black carry `.on-night` and `data-nav-theme="dark"`; `header.ts` switches the nav theme while one sits under the bar
- DentiMed's own Spanish UI strings and demo patient live in `src/data/dentimed-app.ts` and are used only by `src/components/dentimed/*` (the figure carries `lang="es"`)
- Use Astro's `<Image />` or `<Picture />` with images in `src/assets/`; keep only the OG images, favicons, the film media (`public/cinema/`, read-only) and the deck in `public/`. The first fold requests no image file

## SEO and metadata

- The base layout (`src/layouts/Layout.astro`) owns global meta tags, Open Graph, Twitter Card, and hreflang. Extend it via slots or props; do not duplicate `<head>` logic in pages
- Every page must set a localized title and description; fall back to layout defaults only when intentional
