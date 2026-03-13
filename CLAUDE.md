# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for InnovaAI — AI consultancy startup. Bilingual (ES/EN) with dark theme "Neural Green" design.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:4321)
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

## Architecture

- **Framework**: Astro 5.x (static site, zero JS by default)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` — config is in CSS (`src/styles/global.css` @theme block), NOT in a tailwind.config file
- **Animations**: GSAP + ScrollTrigger (`src/scripts/animations.ts`)
- **Particles**: tsParticles slim in `ParticleBackground.astro` (client-side island)
- **Fonts**: @fontsource packages (Space Grotesk for headings, Inter for body)

## i18n

- Routes: `/es/` (default, Spanish) and `/en/` (English)
- Root `/` redirects to `/es/`
- All text content is in `src/data/es/` and `src/data/en/` — components receive translated props
- Astro i18n config in `astro.config.mjs`

## Key Directories

- `src/components/` — Astro components (one per section)
- `src/data/{es,en}/` — Localized content (hero, services, products, etc.)
- `src/styles/` — `global.css` (design tokens + Tailwind) + `animations.css` (keyframes)
- `src/scripts/` — Client-side JS (GSAP animations, particle config)
- `src/layouts/Layout.astro` — Base HTML with SEO meta, OG tags, hreflang

## Design Tokens

All colors/fonts defined as CSS custom properties in `src/styles/global.css` @theme block:
- Primary: `--color-primary` (#22C55E green)
- Secondary: `--color-secondary` (#3B82F6 blue)
- Product colors: `--color-dicta` (green menta), `--color-diariomed` (emerald)
- Utility classes: `.glass`, `.glass-strong`, `.gradient-text`, `.glow-green`

## Products

- **Dicta**: Voice dictation + translation desktop app
- **DiarioMed**: Medical notes in FHIR format
