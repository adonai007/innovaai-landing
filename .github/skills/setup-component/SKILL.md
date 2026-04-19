---
name: setup-component
description: Scaffold a new Astro section component for the InnovaAI landing page with props interface, data wiring, and scroll-animation hook.
---

# Setup Component

Creates a new `.astro` section component under `src/components/` (or `src/components/diariomed/` for the DiarioMed sub-landing), wires it to a localized data bundle, and registers a `data-animate` hook compatible with `src/scripts/animations.ts`.

Ask for the following inputs if not provided:

- **Component name** in PascalCase (e.g. `Testimonials`)
- **Target page(s)**: main landing, DiarioMed sub-landing, or both
- **Data shape**: the fields the section needs (title, subtitle, list of items, etc.)
- **Locales**: `es`, `en`, or both — main landing defaults to both; DiarioMed is currently ES-only

## Requirements

- Create the component under `src/components/` (or `src/components/diariomed/` with the `Dm` prefix when DiarioMed is the target)
- Declare an `interface Props` in the frontmatter; accept already-translated strings, never import from `src/data/**`
- Add matching bundles to `src/data/es/<name>.ts` (and `src/data/en/<name>.ts` unless DiarioMed-only); share shapes through `src/data/types.ts` when a type already exists
- Use design tokens via `@theme` variables and the existing utility helpers (`.glass`, `.gradient-text`, `.glow-green`, `.section-padding`); do not hardcode hex values
- Attach `data-animate="fade-up"` (or the appropriate variant) to the element that should animate on scroll; do not write inline GSAP
- Include `interface Props` TSDoc for any non-obvious field
- Update the relevant page (`src/pages/{locale}/index.astro` or the DiarioMed page) to import the data bundle and render the component
- Follow the repository conventions in `../../copilot-instructions.md`, `../../instructions/astro.instructions.md`, `../../instructions/i18n.instructions.md`, and `../../instructions/tailwind.instructions.md`
