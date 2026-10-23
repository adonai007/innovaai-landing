---
name: setup-component
description: Scaffold a new Astro section component for the InnovaAI landing page with props interface, bilingual data wiring and the reveal hook.
---

# Setup Component

Creates a new `.astro` section component under `src/components/`, wires it to a pair of localized data bundles (`src/data/es/<name>.ts` and `src/data/en/<name>.ts`), and renders it on both landing pages in the right place of the page order.

Ask for the following inputs if not provided:

- **Component name** in PascalCase (e.g. `Integrations`)
- **Position** in the page order (DentiMed first fold, DentiMed features, Dicta, film, everyday work, how we work, FAQ, closing) and its surface (`canvas`, `canvas-alt` or black)
- **Data shape**: the fields the section needs (label, title, intro, list of items, etc.)

## Requirements

- Create the component under `src/components/`. Declare an `interface Props` in the frontmatter that imports only types from `src/data/types.ts`; accept already-translated strings, never import from `src/data/**`
- Add the type to `src/data/types.ts` and both bundles, `src/data/es/<name>.ts` and `src/data/en/<name>.ts`, ending with `satisfies <Type>` (tuples for fixed-length lists keep ES/EN parity)
- Render `<section id="<spanish-id>" aria-labelledby="<spanish-id>-title" class="section ...">` with `SectionHead` for the label, the h2 (titles may contain `\n`, rendered by `Lines` as a break from 735px up) and the intro. Use `.wrap` or `.wrap-text`
- Pick the surface so two identical backgrounds never sit side by side. Cards take the other neutral (`canvas-alt` card on `canvas`, or `canvas` card on `canvas-alt`), 28px radius (`rounded-card`), no borders, no shadows
- Black sections add `.on-night` and `data-nav-theme="dark"` so the nav switches theme over them
- Actions: `Button` (blue pill, or outline pill beside it) or `ChevronLink`; external links pass `external` and an sr-only `hint`
- Use design tokens through `@theme` utilities (`text-section`, `text-card`, `text-ink-2`, `bg-canvas-alt`, ...); do not hardcode hex values
- Add `data-reveal` (with `style="--reveal-delay:80ms"` for a stagger) to the heading block and cards that should rise in; the default markup must be the final state for no-JS and reduced motion. Do not add an animation library
- Copy follows the brand voice in `CLAUDE.md`: sentence case, headlines ending in a period, no dashes inside sentences, no exclamation marks, no invented numbers, no fictitious names, no demo captions
- Include `interface Props` TSDoc for any non-obvious field
- Import the data bundle and render the component in both `src/pages/es/index.astro` and `src/pages/en/index.astro`
- Follow the repository conventions in `../../copilot-instructions.md`, `../../instructions/astro.instructions.md`, `../../instructions/i18n.instructions.md`, and `../../instructions/tailwind.instructions.md`
