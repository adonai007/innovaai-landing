# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual marketing landing for **InnovaAI**, an applied AI studio in Bolivia and the parent brand of DentiMed and Dicta. Calm, light design that reads as the family of dentimed.app: soft background with night sections, a floating dark glass pill header, real people and readable HTML mockups. Built as a static Astro site, deployed on Render. Hosts the company landing and a standalone pitch deck.

**Live**: https://innovai.click

## Commands

```bash
npm run dev      # dev server on http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
npx --no-install tsc --noEmit -p tsconfig.json   # type gate for src/**/*.ts (data files, scripts)
```

There is **no test runner** and **no linter/formatter** configured. Don't add ESLint/Prettier configs unless asked. The build does not type-check. Run `npx --no-install tsc --noEmit -p tsconfig.json` (it does not check `.astro` templates) and `npm run build` before merging.

## Routes

| Path | Source | Notes |
|------|--------|-------|
| `/` | `src/pages/index.astro` | Redirects to `/es/` (meta refresh plus `location.replace`) |
| `/es/` | `src/pages/es/index.astro` | Main landing, Spanish (default locale) |
| `/en/` | `src/pages/en/index.astro` | Main landing, English |
| `/es/dentimed/`, `/en/dentimed/`, `/es/diariomed/`, `/en/diariomed/` | `src/pages/{es,en}/{dentimed,diariomed}/index.astro` | `noindex` redirect stubs straight to https://dentimed.app/ (excluded from the sitemap) |
| `/deck/` | `public/deck/index.html` | Standalone pitch deck (8 slides, web component, NOT an Astro page) |

The deck is a static asset under `public/`, copied verbatim to `dist/deck/` on build. It uses its own `colors_and_type.css` (mirrors the old design tokens but lives independently) and `deck-stage.js` web component for keyboard nav and print-to-PDF. The landing does not link to it (its copy predates the redesign and still carries old product claims); share the URL directly. `public/favicon.svg` stays because the deck uses it.

## Architecture

- **Framework**: Astro 5.x, static, zero-JS by default. Components are single-file `.astro`.
- **Language**: TypeScript. Declare `interface Props` for every component that accepts data.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. **Design tokens live inside `@theme {}` in `src/styles/global.css`**. There is **no `tailwind.config.*` file and none should be added.** CSS is inlined (`build.inlineStylesheets: 'always'`).
- **Fonts**: `@fontsource-variable/outfit` (display: h1 to h3, tagline, nav, buttons, eyebrows, wordmark; weights 500 and 600) and `@fontsource-variable/inter` (text, lists, captions and all mockup UI; 400 to 600). Only the Outfit latin file is preloaded. No mono, no italics, no 700+ weights.
- **Icons**: Phosphor via `src/components/ui/Icon.astro` (reads `@phosphor-icons/core` SVGs at build time; names typed as `IconName` in `src/data/types.ts`).
- **Shared primitives** in `src/components/ui/`: `Icon`, `Logo` (dark surfaces only), `WhatsAppCta`, `LinkArrow`, `SectionHead`.
- **Data**: per-section files in `src/data/{es,en}/*.ts`, each typed in `src/data/types.ts` and ending with `satisfies <Type>`. Tuples enforce ES/EN parity. Locale-neutral URLs live in `src/data/links.ts`.
- **Scripts**: `src/scripts/main.ts` always loads (header CTA, dialog menu, hero card, reveals, product demos). GSAP, ScrollTrigger and Lenis are dynamically imported from `src/scripts/motion/index.ts` only under `html.motion`. **No particles.**
- **Motion modes**: an inline script in `Layout.astro` swaps `no-js` for `js` and adds `motion` or `still` (reduced motion or Save-Data). The default markup is the final static state; hidden or initial states exist only under `html.motion`, `html.motion.reveal-ready` and `html.motion [data-story].is-ready`.
- **i18n**: Astro native. `defaultLocale: 'es'`, `locales: ['es','en']`, `prefixDefaultLocale: true`, `redirectToDefaultLocale: false` (`src/pages/index.astro` does the instant redirect to `/es/`). See `astro.config.mjs`.

## Key directories

```
src/
├── assets/brand/               # innovaai-mark.png, dicta-icon.png, dentimed-icon.svg (astro:assets)
├── assets/photos/              # hero and DentiMed photos (served as AVIF/WebP through <Picture>)
├── components/                 # one component per landing section (Hero, Example, UseCases, Products, ...)
│   └── ui/                     # shared primitives (Icon, Logo, WhatsAppCta, LinkArrow, SectionHead)
├── data/
│   ├── types.ts, links.ts      # shared types and locale-neutral URLs
│   ├── es/                     # Spanish copy, one file per section plus site, navigation, footer, seo
│   └── en/                     # English copy: every es/*.ts MUST have an en/*.ts twin
├── layouts/Layout.astro        # base HTML: meta, Open Graph, hreflang, canonical, JSON-LD graph, mode script
├── pages/                      # /es/, /en/, redirect stubs, robots.txt
├── scripts/                    # main.ts entry, header, reveals, hero card, product demos
│   └── motion/                 # dynamic chunk: GSAP, ScrollTrigger, Lenis, hero, example, tagline
└── styles/global.css           # @theme tokens + Tailwind entry + components layer
public/
├── deck/                       # standalone pitch deck (HTML + JS + CSS)
├── downloads/                  # product binaries (unlinked)
├── images/                     # OG image, logo files, favicons
└── llms.txt, llms-full.txt     # summaries for LLMs (keep in sync with the copy)
```

## i18n contract

- Components are **pure presentation**: they never embed hardcoded ES/EN strings. Copy flows in as props from `src/data/{locale}/*.ts`. The only fixed strings allowed in components are the brand names "InnovaAI", "DentiMed" and "Dicta".
- **Bilingual parity**: every `src/data/es/X.ts` MUST have a `src/data/en/X.ts` with the same export shape. Both satisfy the same type from `src/data/types.ts`.
- Page files (`src/pages/{es,en}/index.astro`) import the locale-specific data and pass it down. They also build the page JSON-LD (Service with offers, two SoftwareApplication nodes without offers, FAQPage).
- Anchor IDs (`#que-construimos`, `#productos`, `#como-trabajamos`, `#preguntas`, `#contacto`, ...) stay in Spanish across both locales.
- WhatsApp number is the same across locales; only the pre-filled message text translates.

## Design system

All tokens are in `src/styles/global.css` `@theme {}`:

| Purpose | Token | Value |
|---------|-------|-------|
| Page background | `--color-soft` | `#fafbf9` (same as DentiMed) |
| Dark sections, header glass, menu | `--color-night` | `#071628` |
| Text on light | `--color-ink` / `--color-muted` | `#13283d` / `#4f6476` |
| The only CTA fill, links and eyebrows on light | `--color-action` (hover `--color-action-hover`) | `#0a62d0` (`#0851ad`) |
| Logo blue, graphics only (focus ring on light, cursor, sparkle) | `--color-electric` | `#0976f7` |
| Dark surfaces only (eyebrows, numbers, focus ring on dark) | `--color-teal` | `#2de6d4` |
| Tinted sections and tiles / borders | `--color-sky` / `--color-line` | `#eaf2fd` / `#d8e1ea` |
| Status chips | `--color-draft(-bg)`, `--color-ok(-bg)` | amber / green |
| Product cards only | `--color-dm-*`, `--color-dicta-*` | DentiMed mint, Dicta black and emerald |

**Rules:**
- One button style: `.btn.btn-primary` (blue), always the WhatsApp CTA with one label ("Conversemos por WhatsApp" / "Let's talk on WhatsApp"). Every secondary action is a `.link-arrow`.
- Teal appears only on dark surfaces. Text on dark uses white with opacity steps, never below `white/60`.
- Gradients exist in only three places: the wordmark "AI" (`.wm-ai`), the Ejemplo progress rail and the "Preparando borrador" bar.
- Flat and calm: no glows, particles, grids, neon or text gradients. Shadows (`shadow-pill`, `shadow-window`, `shadow-float`) only on the header and floating mock UI; section cards never get a shadow.
- Glass uses the Tailwind utilities `backdrop-blur-lg backdrop-saturate-150`; never hand-write `backdrop-filter`.
- Radii: `rounded-full` buttons and chips, `rounded-island` (40px) hero photo on lg, `rounded-[2rem]` product cards, `rounded-3xl` cards, `rounded-2xl` tiles and mock cards, `rounded-[28%]` logo tile.

**Component layer classes** (prefer over re-implementing): `.wrap`, `.section`, `.section-lg`, `.eyebrow`, `.section-intro`, `.on-dark`, `.btn`, `.btn-primary`, `.btn-sm`, `.btn-lg`, `.link-arrow`, `.text-link`, `.chip` (`-new`, `-draft`, `-ok`, `-info`), `.wm-ai`.

## Adding a new landing section

1. Add the type to `src/data/types.ts`, then `src/data/es/<section>.ts` and `src/data/en/<section>.ts` ending with `satisfies <Type>`.
2. Create `src/components/<Section>.astro` with `interface Props` that imports the type only. Take all copy as props.
3. Use `SectionHead` for the eyebrow, h2 and intro, and give the `<section>` an `id` plus `aria-labelledby="{id}-title"`. Dark sections add `.on-dark`.
4. Add `data-reveal` to the heading block and cards (stagger with `style="--reveal-delay:…"`). Never on the hero or inside the sticky Ejemplo stage.
5. Import and render it in both `src/pages/es/index.astro` and `src/pages/en/index.astro`. Keep two identical backgrounds from sitting next to each other.

## Brand voice rules

- Master line: **"La IA prepara el trabajo. Tu equipo decide."** / "AI prepares the work. Your team decides."
- **No emoji, ever.** No exclamation marks.
- **Sentence case** for every heading, button, eyebrow and nav item. CSS never uppercases text.
- **No em or en dashes inside sentences**, and no spaced hyphens as punctuation. The "·" separator is fine in microcopy.
- **Spanish-first**, neutral Latin American Spanish. EN is a translation of ES, not a parallel rewrite. `tú` for the visitor, `nosotros` for the studio. "solo" never takes an accent.
- **Show, don't claim**: no invented numbers, metrics, clients, testimonials, duration promises or prices. Demo data uses people's names only and every mockup has a "Datos de demostración." caption nearby.
- Banned filler includes "transformar tu negocio", "potenciar", "de vanguardia", "soluciones a medida", "en tiempo real", "IA aplicada, no teórica" and their English equivalents.

## Animation hooks

- `data-reveal` fades and rises elements in once (IntersectionObserver in `src/scripts/reveals.ts`, gated by `html.motion.reveal-ready`).
- Scroll-scrubbed motion lives in `src/scripts/motion/` (hero parallax, the Ejemplo sticky timeline, the tagline words). Each module imports `gsap` and `ScrollTrigger` itself. Scrubbed tweens use `ease: 'none'`.
- One easing curve everywhere (`--ease-brand`, `ease-brand`) and three durations: 300ms (hover, chips, header CTA), 400 to 500ms (menu, burger, FAQ plus), 900ms (reveals).
- Reduced motion and Save-Data get `html.still`: no GSAP or Lenis chunk loads and everything renders in its final state. Don't author animations that bypass the mode classes.

## Deploy pipeline

- `main` is the deploy branch.
- Render service `innovaai-landing` (id `srv-d6po70ia214c73e8vj50`) auto-deploys on every push to `main`. Build command: `npm run build`. Publish dir: `dist`. Typical build time: 30–45 seconds.
- `.github/workflows/ci.yml` runs `npm ci && npm run build` on push and PR. Gate before merging.
- `.github/workflows/copilot-setup-steps.yml` exists for the Copilot coding-agent environment; it does not gate normal CI.
- The old `/es/dentimed/`, `/en/dentimed/`, `/es/diariomed/` and `/en/diariomed/` URLs should also get 301 rules to https://dentimed.app/ in the Render dashboard.

## Conventions

- **Commits**: conventional-commit-ish prefixes are common (`feat:`, `chore:`, `fix:`, `docs:`). Recent history is the best style guide; run `git log --oneline` before authoring.
- **Branches**: feature work goes on a topic branch (e.g. `redesign/parent-brand`); `main` stays deployable.
- **Two-locale changes** ship in the same commit when possible, which keeps ES/EN parity reviewable.
- **CRLF/LF warnings** during `git add` on Windows are cosmetic; ignore.

## Anti-patterns to avoid

- Adding a `tailwind.config.js/.ts/.mjs`: tokens live in the CSS `@theme` block.
- Hardcoding ES or EN strings inside a component: pass them as props.
- Adding a route under `/es/` without the matching `/en/` (or vice versa) unless explicitly scoped as locale-only.
- Importing locale data inside a component: components are locale-agnostic.
- A second button style, a floating WhatsApp button, teal on a light surface, or a gradient outside the three allowed places.
- Particles, glows, text gradients, Title Case headings or uppercase eyebrows (all part of the retired "Neural Green" look).
- Using emoji in copy, code comments, or commit messages.
- Adding ESLint/Prettier/test configs without an explicit ask; the project deliberately keeps tooling minimal.
- Committing `bash.exe.stackdump`, `.env*`, `.mcp.json`, `.atl/`, `.claude/` (all gitignored).
- Touching the deck files in `public/deck/` to "match" the rest of the site: the deck is intentionally standalone with its own CSS copy.

## Products

- **DentiMed** (https://dentimed.app): assistant for dentists. The dentist dictates when the visit ends and DentiMed prepares the draft of the clinical note, procedures by tooth, payment, treatment estimate and next appointment; nothing is saved without approval. WhatsApp messages are left ready and the dentist sends them. Used from the phone's browser; founders pilot. dentimed.app is the source of truth; follow the DentiMed content rules (no odontogram, FHIR, automatic WhatsApp, prices or numbers).
- **Dicta** (https://dicta-web.onrender.com): voice dictation desktop app for Windows and Linux. Hold F9 to talk or double tap for hands-free; the text appears where the cursor is. Removes filler words; Spanish and English; free to start. Do not mention speed, translation, Android, offline or price.

## Where to find more

- `.github/copilot-instructions.md`: Copilot-specific conventions (overlap with this file is intentional).
- `.github/instructions/*.md`: per-domain rules (Astro, TypeScript, Tailwind, i18n, security, performance, code-review).
- `.github/skills/*/SKILL.md`: reusable Copilot Chat skills (setup-component, write-tests, code-review, refactor-code, generate-docs, debug-issue).
- Recent commit history (`git log --oneline -20`) is the most reliable record of how the codebase has actually evolved.
