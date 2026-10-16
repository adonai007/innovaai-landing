# InnovaAI Landing Page — Copilot Instructions

## Project Overview

Bilingual (ES / EN) static marketing site for **InnovaAI**, an applied AI studio in Bolivia and the parent brand of two products that live on their own sites:

- **DentiMed** (https://dentimed.app): assistant for dentists that prepares the clinical note for the dentist to confirm
- **Dicta** (https://dicta-web.onrender.com): voice dictation desktop app for Windows and Linux

The old `/es|en/dentimed/` and `/es|en/diariomed/` pages are `noindex` redirect stubs to https://dentimed.app/. Primary locale is Spanish (`es`). The design is light and calm (soft `#fafbf9` with night `#071628` sections) and reads as the family of dentimed.app. The master line is "La IA prepara el trabajo. Tu equipo decide." The site deploys as a Render static site; pushes to `main` trigger an auto-deploy to https://innovai.click.

## Tech Stack

- **Framework**: Astro 5.x (static, zero JS by default, single-file `.astro` components)
- **Language**: TypeScript (strict-leaning; keep types explicit)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. Design tokens live in the `@theme` block inside `src/styles/global.css` — there is **no** `tailwind.config.*` file and none should be added
- **Scripts**: `src/scripts/main.ts` always loads (no GSAP). GSAP 3, ScrollTrigger and Lenis are dynamically imported from `src/scripts/motion/index.ts` only under `html.motion`. Reveals use `data-reveal`. No particles
- **Motion modes**: `Layout.astro` sets `html.js` plus `html.motion` or `html.still` (reduced motion or Save-Data) before first paint. The default markup is the final static state
- **Fonts**: `@fontsource-variable/outfit` (display: headings, nav, buttons, eyebrows; 500 and 600) and `@fontsource-variable/inter` (text and mockup UI). No mono, no italics
- **Icons**: Phosphor (`@phosphor-icons/core`) through `src/components/ui/Icon.astro`
- **i18n**: Astro native, `defaultLocale: 'es'`, `locales: ['es','en']`, `prefixDefaultLocale: true`. Translated strings live in `src/data/{es,en}/*.ts` and are passed to components as props
- **Deploy**: Render static site (auto-deploy on push to `main`, build `npm run build`, output `dist/`)
- **CI**: `.github/workflows/ci.yml` runs `npm ci && npm run build` on push and PR

## Conventions

### File layout

- `src/components/` — one Astro component per landing section, `PascalCase.astro`
- `src/components/ui/` — shared primitives: `Icon`, `Logo`, `WhatsAppCta`, `LinkArrow`, `SectionHead`
- `src/data/types.ts` — one type per data bundle; every `src/data/{es,en}/*.ts` ends with `satisfies <Type>` (tuples enforce ES/EN parity)
- `src/data/{es,en}/*.ts` — localized content; components import only types from `src/data/`, they receive translated data as props from a page
- `src/pages/{es,en}/index.astro` — main landing per locale, including the page JSON-LD; `src/pages/{es,en}/{dentimed,diariomed}/index.astro` — redirect stubs
- `src/layouts/Layout.astro` — base HTML, SEO meta, Open Graph, hreflang, mode script
- `src/styles/global.css` — design tokens (`@theme` block), Tailwind v4 entry and the components layer
- `src/scripts/` — client-side TypeScript (`main.ts` entry, header, reveals, hero card, product demos; `motion/` for the GSAP chunk)

### Component authoring

- Every `.astro` component that accepts data declares an `interface Props` at the top of its frontmatter
- **Never embed hardcoded ES/EN strings** inside a component. Copy flows in as props from `src/data/{locale}/*.ts`
- Components are dumb presentational units; wiring lives in `src/pages/*`
- For entrance motion, add `data-reveal` (optionally `style="--reveal-delay:120ms"`) and let `src/scripts/reveals.ts` handle it. Never on the hero or inside the sticky Ejemplo stage

### Styling

- Use Tailwind v4 utilities plus the design tokens exposed via `@theme` in `global.css`:
  - Neutrals: `soft` (page), `night` (dark sections), `ink`, `muted`, `line`, `sky`
  - `action` (`#0a62d0`) is the only CTA fill and the link color on light; `electric` (`#0976f7`, logo blue) is for graphics only; `teal` (`#2de6d4`) appears only on dark surfaces
  - Product colors: `dm-*` (DentiMed card) and `dicta-*` (Dicta card) only
- Prefer the components-layer classes `.wrap`, `.section`, `.eyebrow`, `.btn btn-primary`, `.link-arrow`, `.chip`, `.on-dark`, `.wm-ai` over re-implementing them
- One button style (blue `btn-primary`, always the WhatsApp CTA); every secondary action is a `.link-arrow`
- Gradients only in three places: the wordmark "AI", the Ejemplo progress rail and the "Preparando borrador" bar. No glows, particles, text gradients or neon
- Do **not** hardcode hex values in components; go through tokens
- No `@apply` in component styles; component `<style>` blocks use plain CSS with `var(--color-*)`

### Icons

- Phosphor SVGs through `src/components/ui/Icon.astro` only. No icon font, no sprite sheet, **no emoji**, ever. This is a brand rule that applies to source code, comments, commit messages, and PR descriptions

### Voice

- Sentence case for every heading, button, eyebrow and nav item (CSS never uppercases text)
- No em or en dashes inside sentences, no exclamation marks, `tú` for the visitor
- No invented numbers, clients, testimonials, duration promises or prices; demo data carries a "Datos de demostración." caption

### i18n parity

- Every file in `src/data/es/` must have a matching file in `src/data/en/` with the same keys, and both satisfy the same type from `src/data/types.ts`
- When adding new copy, update both locales in the same change

## Workflow

- Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `perf:`
- The default branch is `main`; direct pushes trigger a Render deploy, so prefer PRs for non-trivial changes
- CI must pass (`npm run build`) before merging; also run the type gate `npx --no-install tsc --noEmit -p tsconfig.json` (the build does not type-check)
- There is no linter, formatter, or test runner configured; do not add ESLint, Prettier, Vitest, etc. without a real need discussed with the maintainer

## Related instruction files

- [Astro](instructions/astro.instructions.md)
- [TypeScript](instructions/typescript.instructions.md)
- [Tailwind CSS v4](instructions/tailwind.instructions.md)
- [i18n](instructions/i18n.instructions.md)
- [Testing](instructions/testing.instructions.md)
- [Documentation](instructions/documentation.instructions.md)
- [Security](instructions/security.instructions.md)
- [Performance](instructions/performance.instructions.md)
- [Code review](instructions/code-review.instructions.md)
