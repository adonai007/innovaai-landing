# InnovaAI Landing Page — Copilot Instructions

## Project Overview

Bilingual (ES / EN) static marketing site for **InnovaAI**, an AI consultancy. The site also hosts sub-landings for two internal products:

- **Dicta** — voice dictation + translation desktop app
- **DiarioMed** — medical notes in FHIR format (sub-landing at `/es/diariomed/`, currently Spanish only)

Primary locale is Spanish (`es`). Content is concise, brand-first, and designed around a dark "Neural Green" aesthetic. The site deploys as a Render static site; pushes to `main` trigger an auto-deploy to https://innovaai-landing.onrender.com.

## Tech Stack

- **Framework**: Astro 5.x (static, zero JS by default, single-file `.astro` components)
- **Language**: TypeScript (strict-leaning; keep types explicit)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. Design tokens live in the `@theme` block inside `src/styles/global.css` — there is **no** `tailwind.config.*` file and none should be added
- **Animations**: GSAP 3 + ScrollTrigger, wired in `src/scripts/animations.ts` via `data-animate="fade-up"` hooks
- **Particles**: `@tsparticles/slim` as a client-side island in `ParticleBackground.astro` (hero only)
- **Fonts**: `@fontsource/space-grotesk` (headings), `@fontsource/inter` (body)
- **i18n**: Astro native, `defaultLocale: 'es'`, `locales: ['es','en']`, `prefixDefaultLocale: true`. Translated strings live in `src/data/{es,en}/*.ts` and are passed to components as props
- **Deploy**: Render static site (auto-deploy on push to `main`, build `npm run build`, output `dist/`)
- **CI**: `.github/workflows/ci.yml` runs `npm ci && npm run build` on push and PR

## Conventions

### File layout

- `src/components/` — one Astro component per landing section, `PascalCase.astro`
- `src/components/diariomed/` — DiarioMed sub-landing components, **prefixed `Dm`** (e.g. `DmHero.astro`)
- `src/data/{es,en}/*.ts` — localized content; components import nothing from here directly, they receive translated data as props from a page
- `src/pages/{es,en}/index.astro` — main landing per locale; `src/pages/es/diariomed/index.astro` — DiarioMed sub-landing
- `src/layouts/Layout.astro` — base HTML, SEO meta, Open Graph, hreflang
- `src/styles/global.css` — design tokens (`@theme` block) and Tailwind v4 entry
- `src/styles/animations.css` — shared keyframes
- `src/scripts/` — client-side TypeScript (animations, particle config)

### Component authoring

- Every `.astro` component that accepts data declares an `interface Props` at the top of its frontmatter
- **Never embed hardcoded ES/EN strings** inside a component. Copy flows in as props from `src/data/{locale}/*.ts`
- Components are dumb presentational units; wiring lives in `src/pages/*`
- For animations, add `data-animate="fade-up"` (or the equivalent hook) to the target element and let `src/scripts/animations.ts` register the ScrollTrigger

### Styling

- Use Tailwind v4 utilities plus the design tokens exposed via `@theme` in `global.css`:
  - Brand colors: `--color-primary` (`#22C55E`), `--color-secondary` (`#3B82F6`)
  - Product colors: `--color-dicta` (green menta), `--color-diariomed` (emerald)
- Prefer the prebuilt utility helpers `.glass`, `.glass-strong`, `.gradient-text`, `.glow-green`, `.section-padding` over re-implementing them
- Do **not** hardcode hex values in components; go through tokens or Tailwind arbitrary values referencing the CSS variable (e.g. `bg-[var(--color-primary)]`)
- `@apply` is reserved for the shared utility classes already defined in `global.css`; avoid sprinkling it across components

### Icons

- Inline Lucide SVGs only. No icon font, no sprite sheet, **no emoji** — ever. This is a brand rule that applies to source code, comments, commit messages, and PR descriptions

### i18n parity

- Every file in `src/data/es/` must have a matching file in `src/data/en/` with the same keys
- Exception: `src/data/es/diariomed.ts` is currently ES-only (the sub-landing has not been translated yet)
- When adding new copy, update both locales in the same change

## Workflow

- Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `perf:`
- The default branch is `main`; direct pushes trigger a Render deploy, so prefer PRs for non-trivial changes
- CI must pass (`npm run build`) before merging
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
