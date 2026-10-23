# InnovaAI Landing Page — Copilot Instructions

## Project Overview

Bilingual (ES / EN) static marketing site for **InnovaAI**, an AI product studio from Latin America (founded in La Paz by Adonai Callejas) and the maker of two products that live on their own sites:

- **DentiMed** (https://dentimed.app): assistant for dentists. The dentist dictates when the visit ends and DentiMed drafts the chart for the dentist to confirm
- **Dicta** (https://dicta-web.onrender.com): voice dictation desktop app for Windows and Linux

The page follows Apple's design language and writing style and puts the products first: DentiMed is the first fold, then Dicta, then the studio chapter (the scroll-scrubbed film, everyday-work tools, how we work, FAQ, closing). The canvas is neutral (white, `#f5f5f7`, black) with one action blue (`#0a62d0`). The old `/es|en/dentimed/` and `/es|en/diariomed/` pages are `noindex` redirect stubs to https://dentimed.app/. Primary locale is Spanish (`es`). The site deploys as a Render static site; pushes to `main` trigger an auto-deploy to https://innovai.click. `CLAUDE.md` is the canonical, more detailed reference.

## Tech Stack

- **Framework**: Astro 5.x (static, zero JS by default, single-file `.astro` components)
- **Language**: TypeScript (strict-leaning; keep types explicit)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. Design tokens live in the `@theme` block inside `src/styles/global.css` — there is **no** `tailwind.config.*` file and none should be added
- **Scripts**: three small modules and native scrolling, no animation or smooth-scroll library. `src/scripts/main.ts` always loads (nav theme switching and the dialog menu from `header.ts`, reveals from `reveals.ts`); `src/scripts/cinema.ts` is imported by `CinematicStory.astro`; `src/scripts/dicta-demo.ts` is imported by `Dicta.astro`
- **Motion modes**: `Layout.astro` sets `html.js` plus `html.motion` or `html.still` (reduced motion or Save-Data), `html.slow-net` on 2G and `html.sf` on Apple platforms, before first paint. The default markup is the final static state; script-only controls (the film's pause button) ship with the `hidden` attribute and the script reveals them
- **Fonts**: one family. Apple devices render SF Pro from the system stack and download nothing; everyone else gets self-hosted Inter Variable with the `opsz` axis (`@fontsource-variable/inter`), one latin woff2 preloaded by the mode script. Weights 400 and 600 only. No mono, no italics
- **Icons**: Phosphor (`@phosphor-icons/core`) through `src/components/ui/Icon.astro`
- **i18n**: Astro native, `defaultLocale: 'es'`, `locales: ['es','en']`, `prefixDefaultLocale: true`. Translated strings live in `src/data/{es,en}/*.ts` and are passed to components as props
- **Deploy**: Render static site (auto-deploy on push to `main`, build `npm run build`, output `dist/`)
- **CI**: `.github/workflows/ci.yml` runs `npm ci && npm run build` on push and PR

## Conventions

### File layout

- `src/components/` — one Astro component per landing section, `PascalCase.astro`: `Header`, `Ribbon`, `Dicta`, `CinematicStory`, `EverydayWork`, `HowWeWork`, `FAQ`, `Closing`, `Footer`
- `src/components/dentimed/` — the DentiMed first fold and bento (`DentimedHero`, `DentimedFeatures`) plus the HTML phone (`DentimedPhone`) and one app card (`DmCard`)
- `src/components/ui/` — shared primitives: `Icon`, `Logo`, `Button`, `ChevronLink`, `SectionHead`, `Lines`, `Highlight`
- `src/data/types.ts` — one type per data bundle; every `src/data/{es,en}/*.ts` ends with `satisfies <Type>` (tuples enforce ES/EN parity)
- `src/data/{es,en}/*.ts` — localized content: `site`, `navigation`, `footer`, `seo`, `dentimed`, `dicta`, `cinema`, `everyday-work`, `how-we-work`, `faq`, `closing`
- `src/data/links.ts` (locale-neutral URLs) and `src/data/dentimed-app.ts` (DentiMed's Spanish app UI and its demo patient, used only by `src/components/dentimed/*`)
- `src/pages/{es,en}/index.astro` — main landing per locale, including the page JSON-LD; `src/pages/{es,en}/{dentimed,diariomed}/index.astro` — redirect stubs
- `src/layouts/Layout.astro` — base HTML, SEO meta, Open Graph, hreflang, the Organization JSON-LD and the mode script
- `src/styles/global.css` — design tokens (`@theme` block), Tailwind v4 entry, base layer and components layer; `src/styles/dentimed-app.css` — DentiMed's app UI, every rule under `.dm-app`, sized in em
- `src/scripts/` — `main.ts`, `header.ts`, `reveals.ts`, `cinema.ts`, `dicta-demo.ts`

### Component authoring

- Every `.astro` component that accepts data declares an `interface Props` at the top of its frontmatter
- **Never embed hardcoded ES/EN strings** inside a component. Copy flows in as props from `src/data/{locale}/*.ts`. The exceptions are the brand names and DentiMed's own Spanish UI inside `src/components/dentimed/*`
- Components are presentational units; wiring lives in `src/pages/*`
- Use `SectionHead` for section headers; every `<section>` has an `id` and `aria-labelledby` pointing at its h2. Dark sections use `.on-night` and `data-nav-theme="dark"` so the nav switches theme over them
- For entrance motion, add `data-reveal` (optionally `style="--reveal-delay:80ms"`) and let `src/scripts/reveals.ts` handle it. Never on the DentiMed first fold, the Dicta visual or anywhere in the film chapter (`#historia`)

### Styling

- Use Tailwind v4 utilities plus the design tokens exposed via `@theme` in `global.css`:
  - Neutrals: `canvas` (white), `canvas-alt` (`#f5f5f7`), `night` (black), `night-2`, `night-3`, `ink`, `ink-2`, `ink-3` (large text only), `on-night`, `on-night-2`, `hairline`, `hairline-on-night`
  - `action` (`#0a62d0`) fills pills and colours links on light; `link-on-night` (`#4da3ff`) colours links and focus rings on black
  - Product accents only inside their sections: `dm-accent`, `dm-teal` (DentiMed), `dicta` (emerald, on black only)
  - Type scale: `text-display`, `text-hero`, `text-tile`, `text-section`, `text-eyebrow`, `text-label`, `text-subhead`, `text-card`, `text-question`, `text-intro`, `text-kicker`, `text-body`, `text-caption`, `text-legal`
- Prefer the components-layer classes `.wrap`, `.wrap-text`, `.section`, `.on-night`, `.seam`, `.btn` with `.btn-primary` / `.btn-secondary` and a size, `.link-chevron`, `.text-link` over re-implementing them
- Buttons: the blue pill for the main action, the outline pill for a second action beside it, chevron links (`ChevronLink`) for everything else. No icons inside pills
- Cards: 28px radius (`rounded-card`), no borders, no shadows; separation comes from fill contrast only. The only shadow is the DentiMed phone device. Glass (`backdrop-blur-[20px] backdrop-saturate-[1.8]`) only on the nav, the mobile menu and the film's pause button. No gradients except the film's image scrims
- Breakpoints are `md` (735px), `nav` (834px) and `lg` (1069px), defined in em; no other breakpoints exist
- Do **not** hardcode hex values in components; go through tokens (DentiMed's app palette lives only in `dentimed-app.css`)
- No `@apply` in component styles; component `<style>` blocks use plain CSS with `var(--color-*)`

### Icons

- Phosphor SVGs through `src/components/ui/Icon.astro` only. No icon font, no sprite sheet, **no emoji**, ever. This is a brand rule that applies to source code, comments, commit messages, and PR descriptions

### Voice

- Apple's writing style: headlines of two to six words ending in a period. Sentence case for every heading, button, label and nav item (CSS never uppercases text)
- No em or en dashes inside sentences, no exclamation marks, `tú` for the visitor, "solo" without an accent
- Global positioning ("Desde Latinoamérica, para el mundo."). Bolivia appears only in the footer location line, FAQ answer 1 and the SEO organization description
- No invented numbers, clients, testimonials, duration promises or prices. No fictitious people or businesses and no demo captions or disclaimers in InnovaAI's sections; the only demo data is DentiMed's own, inside `src/data/dentimed-app.ts` and `src/components/dentimed/*`
- DentiMed and Dicta claims follow their verified facts (see `CLAUDE.md`): no odontogram, autonomy, automatic WhatsApp or live transcription for DentiMed; no speed, translation, Android, offline or price for Dicta

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
