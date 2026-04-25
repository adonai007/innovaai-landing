# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual marketing landing for **InnovaAI**, an AI consultancy + product studio in Bolivia. Dark, futuristic "Neural Green" aesthetic. Built as a static Astro site, deployed on Render. Hosts the company landing plus a dedicated sub-landing for the DiarioMed product and a standalone pitch deck.

**Live**: https://innovaai-landing.onrender.com

## Commands

```bash
npm run dev      # dev server on http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
```

There is **no test runner** and **no linter/formatter** configured. Don't add ESLint/Prettier configs unless asked; the project relies on `npm run build` (and Astro's compile-time type checks) to gate correctness.

## Routes

| Path | Source | Notes |
|------|--------|-------|
| `/` | `src/pages/index.astro` | Redirects to `/es/` |
| `/es/` | `src/pages/es/index.astro` | Main landing, Spanish (default locale) |
| `/en/` | `src/pages/en/index.astro` | Main landing, English |
| `/es/diariomed/` | `src/pages/es/diariomed/index.astro` | DiarioMed product sub-landing, Spanish |
| `/en/diariomed/` | `src/pages/en/diariomed/index.astro` | DiarioMed product sub-landing, English |
| `/deck/` | `public/deck/index.html` | Standalone pitch deck (8 slides, web component, NOT an Astro page) |

The deck is a static asset under `public/`, copied verbatim to `dist/deck/` on build. It uses its own `colors_and_type.css` (mirrors the design tokens but lives independently) and `deck-stage.js` web component for keyboard nav and print-to-PDF.

## Architecture

- **Framework**: Astro 5.x — static, zero-JS by default. Components are single-file `.astro`.
- **Language**: TypeScript. Strict-leaning; declare `interface Props` for every component that accepts data.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. **Design tokens live inside `@theme {}` in `src/styles/global.css`** — there is **no `tailwind.config.*` file and none should be added.**
- **Animations**: GSAP 3 + ScrollTrigger, wired in `src/scripts/animations.ts`. Components opt in with `data-animate="fade-up"` and optional `data-delay={n * 0.15}`.
- **Particles**: `@tsparticles/slim` as a client-side island in `src/components/ParticleBackground.astro`. Used **only on the hero** of the main landing.
- **Fonts**: `@fontsource/space-grotesk` (headings), `@fontsource/inter` (body). No webfont CDN at runtime.
- **i18n**: Astro native. `defaultLocale: 'es'`, `locales: ['es','en']`, `prefixDefaultLocale: true`, `redirectToDefaultLocale: true`. See `astro.config.mjs`.

## Key directories

```
src/
├── components/                 # top-level section components, one per landing section
│   └── diariomed/              # DiarioMed sub-landing components, prefixed Dm*
├── data/
│   ├── es/                     # Spanish copy (hero, services, products, process, stats, cta, trust, navigation, diariomed)
│   └── en/                     # English copy — every es/*.ts MUST have an en/*.ts twin
├── layouts/Layout.astro        # base HTML: meta, Open Graph, hreflang, canonical
├── pages/                      # one .astro per route
├── scripts/animations.ts       # GSAP + ScrollTrigger setup; imported from page <script>
└── styles/
    ├── global.css              # @theme tokens + Tailwind entry + utility classes
    └── animations.css          # shared keyframes (float, glow-pulse, whatsapp-pulse, etc.)
public/
├── deck/                       # standalone pitch deck (HTML + JS + CSS)
├── downloads/                  # product binaries (e.g. Dicta installer)
└── images/                     # static image assets served at /images/*
media/                          # source logos not served directly — copy into public/ when needed
```

## i18n contract

- Components are **pure presentation** — they never embed hardcoded ES/EN strings. Copy flows in as props from `src/data/{locale}/*.ts`.
- **Bilingual parity**: every `src/data/es/X.ts` MUST have a `src/data/en/X.ts` with the same export shape. When you add a field on one side, add it on the other.
- Page files (`src/pages/{es,en}/…`) import the locale-specific data and pass it down. Pass `lang="es"` / `lang="en"` to components that need locale-aware links (e.g. `DmNavbar`).
- Anchor IDs (`#servicios`, `#productos`, `#problema`, etc.) stay in Spanish across both locales — they're DOM IDs, not user-visible.
- WhatsApp number is the same across locales; only the pre-filled message text translates.

## Design tokens & utilities

All in `src/styles/global.css` `@theme {}`:

| Purpose | Token | Value |
|---------|-------|-------|
| Primary | `--color-primary` | `#22C55E` (Neural Green) |
| Secondary | `--color-secondary` | `#3B82F6` (Tech Blue) |
| Backgrounds | `--color-bg-primary/secondary/tertiary` | `#0A0F1A → #0F1629 → #162036` |
| Text ramp | `--color-text-primary/secondary/tertiary` | `#E2E8F0 → #94A3B8 → #64748B` |
| Dicta accent | `--color-dicta` | `#34D399` (mint) |
| DiarioMed accent | `--color-diariomed` | `#10B981` (emerald) |

**Utility classes** (defined in `global.css`, prefer over re-implementing): `.glass`, `.glass-strong`, `.gradient-text`, `.glow-green`, `.glow-blue`, `.section-padding`.

**Gradients**: `--gradient-hero` (135°, green→blue→cyan), `--gradient-text` (90°, green→blue). Apply to a span with `.gradient-text` to make a word stand out — done extensively in headlines.

## Adding a new landing section

1. Add a typed object to both `src/data/es/<section>.ts` and `src/data/en/<section>.ts` (same shape).
2. Create `src/components/<Section>.astro` with `interface Props` matching the data shape. Take all copy as props.
3. Add the `data-animate="fade-up"` hook on a wrapping element so the GSAP timeline picks it up.
4. Import and render in both `src/pages/es/index.astro` and `src/pages/en/index.astro`, passing the locale-specific data.

For a new DiarioMed section: prefix the component `Dm`, place it under `src/components/diariomed/`, and wire it into both `src/pages/{es,en}/diariomed/index.astro`.

## Brand voice rules

- **No emoji, ever.** The brand reads as technical/enterprise.
- **Spanish-first.** EN is a translation of ES, not a parallel rewrite. The voice should feel like a senior LATAM consultant — confident, regional, anti-abstraction ("IA Aplicada, No Teórica").
- **Pronoun**: `tú` (informal) for the visitor, `nosotros` for the company.
- **Title Case** in headings (intentional, even in Spanish — stylistic).
- **UPPERCASE** wide-tracking eyebrows above section headers.
- **Numeric specificity** beats vague claims (`100% Latinoamericano`, `Día 1`, not `muchos clientes`).
- Sparing use of exclamation marks. Em dashes (—) are encouraged for sharpening.
- Headlines render 1–2 key words inside a `<span class="gradient-text">` (e.g. *"Transformamos tu negocio con **Inteligencia Artificial**"*).

## Animation hooks

- Wrap any element you want to fade in on scroll with `data-animate="fade-up"`.
- Stagger children with `data-delay={i * 0.15}`.
- The hero word-stagger is wired via `data-animate="hero-headline"` plus `.hero-word` spans — don't reuse this pattern elsewhere; it's bespoke.
- Reduced motion is respected globally in `src/styles/animations.css` (`@media (prefers-reduced-motion: reduce)`); don't author animations that bypass it.

## Deploy pipeline

- `main` is the deploy branch.
- Render service `innovaai-landing` (id `srv-d6po70ia214c73e8vj50`) auto-deploys on every push to `main`. Build command: `npm run build`. Publish dir: `dist`. Typical build time: 30–45 seconds.
- `.github/workflows/ci.yml` runs `npm ci && npm run build` on push and PR — gate before merging.
- `.github/workflows/copilot-setup-steps.yml` exists for the Copilot coding-agent environment; it does not gate normal CI.

## Conventions

- **Commits**: conventional-commit-ish prefixes are common (`feat:`, `chore:`, `fix:`, `docs:`). Recent history is the best style guide — `git log --oneline` before authoring.
- **Branches**: feature work goes on a topic branch (e.g. `redesign/claude-design`); `main` stays deployable.
- **Two-locale changes** ship in the same commit when possible — keeps ES/EN parity reviewable.
- **CRLF/LF warnings** during `git add` on Windows are cosmetic; ignore.

## Anti-patterns to avoid

- ❌ Adding a `tailwind.config.js/.ts/.mjs` — tokens live in the CSS `@theme` block.
- ❌ Hardcoding ES or EN strings inside a component — pass them as props.
- ❌ Adding a route under `/es/` without the matching `/en/` (or vice versa) unless explicitly scoped as locale-only.
- ❌ Importing locale data inside a component — components are locale-agnostic.
- ❌ Using emoji in copy, code comments, or commit messages.
- ❌ Adding ESLint/Prettier/test configs without an explicit ask — the project deliberately keeps tooling minimal.
- ❌ Committing `bash.exe.stackdump`, `.env*`, `.mcp.json`, `.atl/`, `.claude/` (all gitignored).
- ❌ Touching the deck files in `public/deck/` to "match" the rest of the site — the deck is intentionally standalone with its own CSS copy.

## Products

- **Dicta** — voice dictation + real-time translation desktop app (Windows/Android). Hotkey-driven, Spanish-first. Subscription. Installer in `public/downloads/`.
- **DiarioMed** — structured medical-record system emitting FHIR R4, with NLP for dental clinics (BioBERT + SapBERT, FDI odontogram). Primary market: dental clinics in LATAM. Sub-landing at `/{es,en}/diariomed/`.

## Where to find more

- `.github/copilot-instructions.md` — Copilot-specific conventions (overlap with this file is intentional).
- `.github/instructions/*.md` — per-domain rules (Astro, TypeScript, Tailwind, i18n, security, performance, code-review).
- `.github/skills/*/SKILL.md` — reusable Copilot Chat skills (setup-component, write-tests, code-review, refactor-code, generate-docs, debug-issue).
- Recent commit history (`git log --oneline -20`) is the most reliable record of how the codebase has actually evolved.
