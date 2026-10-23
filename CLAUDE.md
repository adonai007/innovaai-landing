# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual marketing landing for **InnovaAI**, an AI product studio from Latin America, based in La Paz, and the maker of **DentiMed** and **Dicta**. The page follows Apple's design language and writing style: products first, one type family, neutral canvas (white, `#f5f5f7`, black), one action blue, extreme scale contrast, short confident headlines. DentiMed is the first fold, then Dicta, then the studio chapter (the scroll-scrubbed film and the everyday-work tools). Built as a static Astro site, deployed on Render. Hosts the company landing and a standalone pitch deck.

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
| `/` | `src/pages/index.astro` | Redirects to `/es/` (meta refresh plus `location.replace`; browsers whose language is English go to `/en/`) |
| `/es/` | `src/pages/es/index.astro` | Main landing, Spanish (default locale) |
| `/en/` | `src/pages/en/index.astro` | Main landing, English |
| `/es/dentimed/`, `/en/dentimed/`, `/es/diariomed/`, `/en/diariomed/` | `src/pages/{es,en}/{dentimed,diariomed}/index.astro` | `noindex` redirect stubs straight to https://dentimed.app/ (excluded from the sitemap) |
| `/robots.txt` | `src/pages/robots.txt.ts` | |
| `/deck/` | `public/deck/index.html` | Standalone pitch deck (8 slides, web component, NOT an Astro page) |

The deck is a static asset under `public/`, copied verbatim to `dist/deck/` on build. It uses its own `colors_and_type.css` and `deck-stage.js` web component for keyboard nav and print-to-PDF. The landing does not link to it (its copy predates v2); share the URL directly and never restyle it to match the site. `public/favicon.svg` stays because the deck uses it.

## Page order

`src/pages/{es,en}/index.astro`, top to bottom:

| # | Section | Component | Surface |
|---|---------|-----------|---------|
| 1 | Global nav | `Header.astro` | frosted white, dark over `data-nav-theme="dark"` sections |
| 2 | Visually hidden `<h1>` (`site.h1`) then the one-line ribbon | `Ribbon.astro` | white |
| 3 | `#dentimed`: DentiMed first fold (lockup plus two HTML phones) | `dentimed/DentimedHero.astro` | `canvas-alt` |
| 4 | `#dentimed-funciones`: 2x2 bento | `dentimed/DentimedFeatures.astro` | `canvas` |
| 5 | `#dicta`: Dicta tile (window, F9 keycap, three features) | `Dicta.astro` | black, `data-nav-theme="dark"` |
| 6 | `#historia`: the film, opener of the studio chapter | `CinematicStory.astro` | black plus the 12px white `.seam`, `data-nav-theme="dark"` |
| 7 | `#que-construimos`: everyday work, six cards | `EverydayWork.astro` | `canvas-alt` |
| 8 | `#como-trabajamos`: how we work, three steps | `HowWeWork.astro` | `canvas` |
| 9 | `#preguntas`: FAQ, seven native `<details>` | `FAQ.astro` | `canvas-alt` |
| 10 | `#contacto`: closing, one blue pill | `Closing.astro` | `canvas` |
| 11 | Footer | `Footer.astro` | `canvas-alt` |

Backgrounds never repeat side by side except the two dark tiles (Dicta and the film), which the `.seam` border separates (Apple's home pattern). Every `<section>` has an `id` (Spanish in both locales) and `aria-labelledby` pointing at its h2. There is one h1 (sr-only); h2 per section; h3 for cards, steps, scenes and questions.

## Architecture

- **Framework**: Astro 5.x, static, zero-JS by default. Components are single-file `.astro`.
- **Language**: TypeScript. Declare `interface Props` for every component that accepts data.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. **Design tokens live inside `@theme {}` in `src/styles/global.css`**. There is **no `tailwind.config.*` file and none should be added.** CSS is inlined (`build.inlineStylesheets: 'always'`).
- **Fonts**: one family. The stack starts with `-apple-system, BlinkMacSystemFont`, so Apple devices render SF Pro (with its automatic Text/Display optical sizes) and download no font file; the mode script adds `html.sf`, which switches the tracking variables to Apple's measured values. Everyone else gets self-hosted Inter Variable with the `opsz` axis (`@fontsource-variable/inter/opsz.css`, `font-optical-sizing: auto`); the mode script preloads its one latin woff2. `Inter Fallback` is metric-matched Arial. Two weights: 600 for headlines and labels, 400 for text. No mono, no italics.
- **Icons**: Phosphor via `src/components/ui/Icon.astro` (reads `@phosphor-icons/core` SVGs at build time; names typed as `IconName` in `src/data/types.ts`; `weight: 'regular' | 'fill'`).
- **Shared primitives** in `src/components/ui/`: `Icon`, `Logo` (mark tile plus the text wordmark in `currentColor`, sizes `nav` and `footer`; `eager`, used by the global nav, inlines the mark as a ~1 KB WebP data URI built with `sharp`, so the first fold requests no image file), `Button` (pill: `primary` blue or `secondary` outline; sizes `l`, `s`, `nav`, `auto`; `external` adds `target="_blank" rel="noopener noreferrer"`; `hint` is sr-only text), `ChevronLink` (text link with our own SVG chevron, never a typed ">"; sizes `caption`, `body`, `intro`), `SectionHead` (optional label, h2, optional intro; `size` `section` / `hero` / `display`, `tone` `light` / `dark`, `reveal`), `Lines` (splits a title on `\n`: between two sentences a plain `<br>` that breaks at every width, inside a sentence a `<br class="br-lg">` that only breaks from 735px up), `MetaLine` (a lockup's grey meta line: segments split on ` · ` never break inside, and an optional `small` line replaces it below 735px), `Highlight` (Apple's grey paragraph with a dark lead-in).
- **Data**: per-section files in `src/data/{es,en}/*.ts`, each typed in `src/data/types.ts` and ending with `satisfies <Type>`. Tuples enforce ES/EN parity. Files: `site`, `navigation`, `footer`, `seo`, `dentimed`, `dicta`, `cinema`, `everyday-work`, `how-we-work`, `faq`, `closing`. Locale-neutral: `links.ts` (URLs, WhatsApp number, `waHref`) and `dentimed-app.ts` (see DentiMed below).
- **Scripts** (native scrolling only, no animation library, no smooth-scroll library):
  - `src/scripts/main.ts` always loads: `initNavTheme` and `initMenu` from `header.ts`, `initReveals` from `reveals.ts`.
  - `src/scripts/cinema.ts`: the film, imported by `CinematicStory.astro`.
  - `src/scripts/dicta-demo.ts`: the Dicta typing demo, imported by `Dicta.astro` (runs only under `html.motion`, once per page view).
  - Page JS is these three modules only. Nothing is render-blocking except the inline mode script.
- **Motion modes**: an inline script in `Layout.astro` swaps `no-js` for `js` and adds `motion` or `still` (reduced motion or Save-Data), plus `slow-net` on 2G (the film then stays static) and `sf` on Apple platforms. The default markup is the final static state; hidden or initial states exist only under `html.motion`, `html.motion.reveal-ready`, `.cinema.is-live` and `html.motion:not(.slow-net) .cinema:not(.is-static)` (screens taller than 37.5625em). Controls that only work with the script (the film's pause button) ship with the `hidden` attribute and the script reveals them.
- **i18n**: Astro native. `defaultLocale: 'es'`, `locales: ['es','en']`, `prefixDefaultLocale: true`, `redirectToDefaultLocale: false` (`src/pages/index.astro` does the instant redirect to `/es/`). See `astro.config.mjs`.

## Global nav, ribbon, footer

- **Nav** (`Header.astro`, `src/scripts/header.ts`): sticky, 44px from 834px (48px below), `bg-white/80` glass with no border or shadow. Logo left; five `text-legal` links centred from 834px; language link and the small blue pill (`site.ctaShort`, WhatsApp) on the right; below 834px a 44x44 menu button. The pill is always visible. Nav and menu controls carry a negative `scroll-margin-top` equal to `--nav-h` (global.css), so focusing or tapping them never makes the browser scroll the page to reveal them inside the `scroll-padding-top` band.
- **Nav theme switching**: `initNavTheme` observes every `[data-nav-theme="dark"]` section (`#dicta`, `#historia`) with an IntersectionObserver whose root is a 1px line at half the nav height, and sets `data-theme="dark"` on the header while one crosses it (translucent `#161617`, light text, `#4da3ff` for "AI" and focus rings). It rebuilds on resize (debounced). Without JS the nav stays light.
- **Menu**: a native `<dialog id="site-menu">` opened with `showModal()`: full-screen solid white (no glass, so the page never shows through), its links in the page's 87.5% column, 28px semibold links, language, LinkedIn chevron link and a full-width WhatsApp pill. Esc, a link click and the close button close it; focus returns to the menu button. Under `html.motion` it fades in and the links rise with a stagger. Without JS the menu button is hidden and the links show as a second, horizontally scrollable row below 834px.
- **Ribbon** (`Ribbon.astro`): one centred `text-caption` line under the h1 (in `.wrap`) with a `ChevronLink` to `#historia` that never breaks inside its label.
- **Footer** (`Footer.astro`): `canvas-alt`, 12px grey: tagline, hairline, logo breadcrumb, three link columns (two below 735px), hairline, then copyright with the year, the location line and the language link.

## DentiMed (`#dentimed`, `#dentimed-funciones`)

- **First fold** (`DentimedHero.astro`): centred lockup in `.wrap-text` (inline DentiMed SVG icon plus the name as the h2, the `text-hero` headline, a one-line subhead, the grey `MetaLine` with a shorter `metaSmall` below 735px, blue pill to dentimed.app and outline pill for a WhatsApp demo), then a `role="img"` figure labelled by `phonesLabel` (in the page language) with two HTML phones; the inner `aria-hidden` row carries `lang="es"`. The lockup stays tight (`--tile-pad`, one-line subhead) so the phones take a real share of the fold. The first fold requests no image file.
- **Phones** (`DentimedPhone.astro`, prop `screen: 'dictado' | 'borrador'`): a generic device (not an iPhone: no notch, no island), width `--phone-w` (300px at `lg`, 260px at `md`, 264px small, set in rem), screen font size `--phone-w / 25`, every inner size in em so the UI scales with the device. Dictado sits lower on the left and is hidden below 735px; its waveform sits right under the recording status (as in DentiMed's own screen) and the controls at the bottom. The device shadow is the only shadow on the page. Under `html.motion` the figure rises once on load; every other mode is static.
- **Features bento** (`DentimedFeatures.astro`): `text-section` title, then a 2x2 grid of `canvas-alt` cards (28px radius, no border, no shadow): the dictation photo (`src/assets/photos/dentimed-dictado.webp`, a copy of DentiMed's own still, through `<Picture>`), the Revisión fragment (medication card with the allergy alert, Editar and Confirmar, then the plan and payment cards bleeding off the bottom edge), the Próxima cita fragment (appointment card and the prefilled WhatsApp composer, in flow so the clip never cuts the Enviar button) and the Seguridad card (the four rules as white `rounded-tile` inner tiles with a 40px icon and a semibold label: a 2x2 block that fills the card from 735px, one row per rule on phones). `DmCard.astro` renders one DentiMed draft card for the phones and the fragments.
- **App UI styles**: `src/styles/dentimed-app.css`, every rule scoped under `.dm-app`, sized in em, `var(--font-sans)`, DentiMed's own dark palette (screen `#0b202a`, cards `#123241`, teal `#04b5b2`, blue `#0976f7`, amber draft badge, `#fb7185` alert). This palette exists only inside `.dm-app`.
- **DentiMed demo data and UI strings** (José Pérez, Dra. Mónica, Bs amounts, piezas, the Spanish screen labels) live only in `src/data/dentimed-app.ts` and are used only by `src/components/dentimed/*`. They are Spanish on both locales because DentiMed is a Spanish-language product; the `aria-hidden` wrappers around that UI carry `lang="es"` (never the labelled figure, whose label follows the page language). This is the one allowed exception to "no strings outside locale files".

## Dicta (`#dicta`)

`Dicta.astro` on black: the same lockup as DentiMed (Dicta icon through `astro:assets`, `text-tile` headline, subhead, meta, one blue pill), then an `aria-hidden` visual: a `night-2` note window (40rem) with neutral window glyphs (no coloured traffic lights), three ghost lines standing for an earlier paragraph (shapes only, no words), the dictated sentence at `text-subhead` size with a ghost copy reserving its height and an emerald caret, an F9 keycap and a status pill. Three features below with dark hairlines. `src/scripts/dicta-demo.ts` (html.motion only, once): empties the text when the window first intersects, at 50% visible sets `data-state="listening"` (key pressed, emerald dot), waits 400ms, types at 35ms per character, returns to idle; the caret blinks three times and stays solid. Every other mode shows the full text, the idle pill and a solid caret. "F9" in titles and subheads is preceded by a non-breaking space.

## The film (`#historia`)

The owner's brand film brief is `docs/creative/innovai-brand-film.md` (with `media-files.json`, `media-production.json`, `review-findings.md`, `validation.md`); `docs/creative/**` and `public/cinema/**` are read-only.

- **Assets**: `public/cinema/scene-{1,2,3}-{desktop,mobile}.{mp4,webp}`: three 5s silent H.264 clips with a WebP poster each, desktop 1920x1080 and a portrait crop 768x1024. `opening-{desktop,mobile}.webp` is not rendered.
- **Data**: `src/data/{es,en}/cinema.ts` (`CinemaData`): label, two-line title, Highlight lead-in and body, skip link, pause and resume labels, and a tuple of exactly three scenes (label, two-line title, one line, alt).
- **Component** (`CinematicStory.astro`): a centred intro (`SectionHead size="display" tone="dark" reveal={false}`, the Highlight, a `ChevronLink` that skips to `#que-construimos`), then three scenes. Each scene is an `<article>` with a `<picture>` poster under a `<video>`, a true-black scrim (bottom for the copy, a short top band, plus a 5% bottom edge to pure black so stages join without a line) and the copy at the bottom left in one colour: kicker, `text-tile` h3, one `text-intro` line. The portrait crop (`(max-width: 767px), (max-aspect-ratio: 1/1)`) uses the mobile posters and clips, a taller scrim, and pans `--focus-x` per scene with progress (`PORTRAIT_FOCUS`, start and end in %); that query is repeated in the CSS and passed to the script through `data-portrait`.
- **Layout is CSS-first**: under `html.motion:not(.slow-net)` on screens taller than 37.5625em each scene is a 150svh track with a sticky 100lvh stage and a 100svh frame aligned to the bottom (top padding clears the nav, bottom padding clears the button). Without JS, under `html.still` or `html.slow-net`, on short screens or when the script adds `.is-static` (a preference or network change after load, or copy enlarged beyond its pinned frame), the posters and copy sit in normal flow.
- **Script** (`src/scripts/cinema.ts`): once the visitor scrolls after `load` it fetches the nearest clip within 400px as a Blob (a visitor who never scrolls downloads none; a download is cancelled when its scene ends up more than a viewport away), primes it with a muted play/pause (Safari), and seeks `currentTime` from scroll (it never plays). It adds `.is-live` while the pinned layout runs; each scene's copy gets `.is-in` from 10% of its scene and loses it below 4% (hysteresis), so it fades in after the stage pins. A ResizeObserver checks that the copy fits its pinned frame and falls back to `.is-static` when it does not.
- **Pause button**: one 56px glass circle (`bg-night-2/72`, 20px blur) sticky at the bottom right, shown only while a stage is pinned (`.is-active`) or while it has keyboard focus. An SVG ring fills with `--cinema-progress` (the mean of the three scenes). It toggles between `data-pause` and `data-resume` as its aria-label; paused, the script stops seeking and loading. This satisfies WCAG 2.2.2 for the only motion longer than 5s.
- No `data-reveal` anywhere in the chapter, and no ancestor of a stage may clip overflow (sticky).
- **Verification note**: Playwright's bundled Chromium cannot decode H.264. To screenshot scrubbed frames, copy VP9-in-MP4 stand-ins over the clips inside a private build output only, never in `public/cinema/`. The page sets `scroll-behavior: smooth` under `html.motion`, so scripted screenshots should scroll with `behavior: 'instant'`.

## Studio sections

- **Everyday work** (`EverydayWork.astro`): `SectionHead` plus a bento of white cards on `canvas-alt`. The first item is the lead card (two columns wide, two cards tall from `lg`, `text-section` title, `text-intro` body) with an abstract `aria-hidden` picture: a blue waveform, a chevron, then a `canvas-alt` panel of checked rows of grey bars (shapes only: no words, no names, no data). The other five are compact cards (blue Phosphor icon, title, body); where `grid-template-rows: subgrid` is supported each spans three shared rows so titles and bodies line up across a row (the lead spans three, six from `lg`). A centred `ChevronLink` to WhatsApp below. No photos, no mockups, no names.
- **How we work** (`HowWeWork.astro`): label, two-line `text-hero` headline and Highlight, then an `<ol>` of three steps under hairlines (number, h3, body, "what you get" deliverable). Head and steps share the wide `.wrap`, so the headline starts on the same edge as everyday work above it; the steps use subgrid from 735px.
- **FAQ** (`FAQ.astro`): a centred head (title and WhatsApp line), then seven native `<details>` rows between hairlines in the 980px text column, no script. Under `html.motion`, and only where `::details-content` is supported, the answer grows and fades in (`interpolate-size`, `@starting-style`, scoped in the component); elsewhere it opens instantly. Summaries draw their own inset focus ring (an outline on `::after`) instead of the global ring.
- **Closing** (`Closing.astro`): centred `text-tile` headline, body, one large blue WhatsApp pill, the reassurance caption (wraps only after a ` · ` separator) and a LinkedIn chevron link.

## Design system

All tokens are in `src/styles/global.css` `@theme {}`. Values are measured on apple.com.

| Purpose | Token | Value |
|---------|-------|-------|
| Page and white sections | `--color-canvas` | `#ffffff` |
| Alternate sections, cards on white | `--color-canvas-alt` | `#f5f5f7` |
| Dark tiles (Dicta, the film) | `--color-night` | `#000000` |
| Cards and windows on black, dark nav base | `--color-night-2` / `--color-night-3` | `#1d1d1f` / `#161617` |
| Text on light | `--color-ink` / `--color-ink-2` | `#1d1d1f` / `#6e6e73` (grey text at any size) |
| Large grey only (21px/600 and up on light) | `--color-ink-3` | `#86868b` |
| Text on black | `--color-on-night` / `--color-on-night-2` | `#f5f5f7` / `#a1a1a6` |
| Hairlines | `--color-hairline` / `--color-hairline-on-night` | `rgb(0 0 0 / .16)` / `#424245` |
| Action blue (pills, links, focus ring on light) | `--color-action` (hover `--color-action-hover`), `--color-link` | `#0a62d0` (`#0851ad`) |
| Links and focus ring on dark | `--color-link-on-night` | `#4da3ff` |
| DentiMed accent text on light / brand teal (icons, app UI only) | `--color-dm-accent` / `--color-dm-teal` | `#00796f` / `#04b5b2` |
| Dicta emerald (on black only, never text on light) | `--color-dicta` | `#10b981` |

- **Breakpoints** (em, so they follow the visitor's text size; every other Tailwind breakpoint is removed): `md` 45.9375em (735px), `nav` 52.125em (834px, desktop nav), `lg` 66.8125em (1069px). Components use only `md:`, `nav:` and `lg:`.
- **Containers**: `.wrap` is `min(78.75rem, 87.5%)`; `.wrap-text` is `min(43.25rem, 87.5%)` and `min(61.25rem, 87.5%)` (980px) from `lg`. Percent widths keep 24px gutters at 390px and never overflow with a desktop scrollbar.
- **Spacing variables**: `--nav-h` (48px, 44px from 834px), `--section-pad` (72 / 104 / 144px), `--head-gap` (40 / 64 / 80px), `--tile-pad` (40 / 48 / 56px, the DentiMed first fold's top padding).
- **Type scale** (fluid between 390px and 1068px): `text-display` 36 (at 360px) to 80 (film intro only), `text-hero` 40 to 64 (DentiMed and How we work headlines), `text-tile` 28 to 56 (Dicta, scene and closing headlines), `text-section` 32 to 48 (section headers), `text-eyebrow` 21 to 28 (product names), `text-label` 21 to 24, `text-subhead` 19 to 28 (400), `text-card` 21 to 28, `text-question` 19 to 24, `text-intro` 19 to 21, `text-kicker` 14 to 17, `text-body` 17, `text-caption` 14, `text-legal` 12. Tracking comes from `--tr-*` variables (Inter values by default, Apple's SF values under `html.sf`).
- **Rules**: headlines end with a period; `text-wrap: balance` on headings and `pretty` on paragraphs; never uppercase text with CSS.
- **Buttons**: blue pill (`.btn.btn-primary`) for the main action, outline pill (`.btn.btn-secondary`) for a second action beside it, chevron links (`.link-chevron` via `ChevronLink`) for everything else. No icons inside pills. Every WhatsApp pill opens WhatsApp with a prefilled message and says so in its sr-only hint.
- **Surfaces**: cards are 28px radius (`rounded-card`), no borders, no shadows; separation comes only from fill contrast (`canvas-alt` card on `canvas`, or `canvas` card on `canvas-alt`). Inner tiles, windows and keycaps use `rounded-tile` (18px). Pills use `rounded-full`.
- **Shadows**: only the DentiMed phone device. **Glass** (`backdrop-blur-[20px] backdrop-saturate-[1.8]`) only on the global nav and the film's pause button (the mobile menu is solid white). Never on cards.
- **Gradients**: none, except the film's image scrims.
- **Motion tokens**: `ease-standard` (UI colour transitions, 320ms) and `--ease-out` (reveals and transforms; reveals are 800ms with a 1.5rem rise, staggered with `--reveal-delay`).

**Component layer classes** (prefer over re-implementing): `.wrap`, `.wrap-text`, `.section`, `.on-night`, `.seam`, `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-l`, `.btn-s`, `.btn-nav`, `.btn-auto`, `.link-chevron`, `.text-link`, `.br-lg`.

## i18n contract

- Components are **pure presentation**: they never embed hardcoded ES/EN strings. Copy flows in as props from `src/data/{locale}/*.ts`. The only fixed strings allowed in components are the brand names "InnovaAI", "DentiMed" and "Dicta", and DentiMed's own Spanish UI from `src/data/dentimed-app.ts` inside `src/components/dentimed/*`.
- **Bilingual parity**: every `src/data/es/X.ts` MUST have a `src/data/en/X.ts` with the same export shape. Both satisfy the same type from `src/data/types.ts`.
- Page files (`src/pages/{es,en}/index.astro`) import the locale-specific data and pass it down. They also build the page JSON-LD.
- Anchor IDs (`#dentimed`, `#dentimed-funciones`, `#dicta`, `#historia`, `#que-construimos`, `#como-trabajamos`, `#preguntas`, `#contacto`) stay in Spanish across both locales.
- WhatsApp number is the same across locales; only the prefilled message text translates.

## SEO

- `Layout.astro` owns the meta tags, Open Graph (`og:locale` `es_LA` / `en_US`, alternate swapped), Twitter card, hreflang, canonical and the JSON-LD `@graph`: Organization (`areaServed: 'Worldwide'`, address La Paz, contactPoint, sameAs LinkedIn, `knowsAbout`, the square mark `innovaai-logo-mark-192.png` as `logo`, the page's own share card as `image`), WebSite and WebPage (about the Organization).
- Each page adds a `Service` (`#service`, from `seo.home`, `hasOfferCatalog` built from the How we work steps), two `SoftwareApplication` nodes (DentiMed, `operatingSystem: 'Web'`, `inLanguage: 'es'`; Dicta, `'Windows, Linux'`; no offers) and a `FAQPage`.
- Share cards: `public/images/innovaai-og.jpg` (es) and `innovaai-og-en.jpg` (en), 1200x630 on black: the mark and wordmark, "Menos repetición. / Más criterio." ("Less repetition. / More judgment."), then the DentiMed and Dicta icons with "Creadores de DentiMed y Dicta" ("Makers of DentiMed and Dicta"); the name is not repeated. Rendered from an HTML template with Playwright and encoded with `sharp` (mozjpeg q84).
- `public/llms.txt` and `public/llms-full.txt` summarise the page for LLMs (the full file copies the EN copy in page order). Keep both in sync with the data files and update the date line.

## Brand voice and content rules

- Apple's writing style: headlines of two to six words ending in a period, plain and confident. One idea per section. Show the product, don't claim.
- **No emoji, ever.** No exclamation marks.
- **Sentence case** for every heading, button, label and nav item. CSS never uppercases text.
- **No em or en dashes inside sentences**, and no spaced hyphens as punctuation. The "·" separator is fine in microcopy.
- **Spanish-first**, neutral Latin American Spanish. EN is a translation of ES, not a parallel rewrite. `tú` for the visitor, `nosotros` for the studio. "solo" never takes an accent.
- **Global, not local**: positioning is "Desde Latinoamérica, para el mundo." Bolivia appears only as a fact, in three places: the footer location line, FAQ answer 1 and the SEO organization description. Never in a heading.
- **No invented numbers**, metrics, clients, testimonials, duration promises or prices. "30 minutos" / "30-minute" and the step numbers are the only numerals in locale copy.
- **No founder or team names, for now** (owner decision): the site, SEO, JSON-LD, llms files and the prefilled WhatsApp messages name no person on the InnovaAI side (no founder line, no `founder` node, "Hola, ..." rather than a name). A future About section may add a photo; ask the owner before naming anyone.
- **No fictitious people or businesses** in InnovaAI's own sections, and no demo captions or disclaimers of any kind. The only demo data on the page is DentiMed's own (José Pérez, Dra. Mónica, Bs amounts, piezas), and it lives only in `src/data/dentimed-app.ts` and `src/components/dentimed/*`.
- **DentiMed claims** follow dentimed.app (the source of truth): the dentist dictates when the visit ends, DentiMed drafts, nothing is saved without approval, WhatsApp messages are prefilled and the dentist sends them by tapping Enviar, runs in the phone's browser, founders pilot. Never claim odontograms, agents or autonomy, prescriptions, automatic reminders, automatic WhatsApp, invoicing, HIPAA/GDPR, FHIR/OCR, a native app or live transcription. Security claims allowed: clinic isolation, audit log, append-only financial ledger, mandatory human review.
- **Dicta claims** (verified only): hold F9 to talk or tap twice for hands-free; the text appears at the cursor in any app; removes filler words; Spanish and English; Windows and Linux; free to start. Never mention speed, translation, Android, offline or price.
- Banned filler includes "transformar tu negocio", "potenciar", "de vanguardia", "soluciones a medida", "en tiempo real" and their English equivalents.

## Animation hooks

- `data-reveal` fades and rises elements in once (IntersectionObserver in `src/scripts/reveals.ts`, `rootMargin: '0px 0px -8% 0px'`, gated by `html.motion.reveal-ready`). Stagger with `style="--reveal-delay:80ms"`. Never on the DentiMed first fold, the Dicta visual or anywhere in the film chapter.
- One motion idea per section, never looped, never required: the DentiMed phones rise once, the Dicta text types once, the film scrubs with scroll, reveals elsewhere, the FAQ answer opens.
- `html.motion { scroll-behavior: smooth }` for in-page links; `scroll-padding-top` keeps anchors clear of the sticky nav.
- Reduced motion and Save-Data get `html.still`: no reveal state, no phone rise, no typing, no clip requested, everything in its final state (2G gets `html.slow-net`: the film stays static and requests no clip). Don't author animations that bypass the mode classes.

## Key directories

```
src/
├── assets/brand/               # innovaai-mark.png, dicta-icon.png, dentimed-icon.svg
├── assets/photos/              # dentimed-dictado.webp (DentiMed feature card 1)
├── components/                 # Header, Ribbon, Dicta, CinematicStory, EverydayWork, HowWeWork, FAQ, Closing, Footer
│   ├── dentimed/               # DentimedHero, DentimedFeatures, DentimedPhone, DmCard
│   └── ui/                     # Icon, Logo, Button, ChevronLink, SectionHead, Lines, MetaLine, Highlight
├── data/
│   ├── types.ts, links.ts      # shared types and locale-neutral URLs
│   ├── dentimed-app.ts         # DentiMed's Spanish app UI and demo patient (dentimed components only)
│   ├── es/                     # Spanish copy, one file per section plus site, navigation, footer, seo
│   └── en/                     # English copy: every es/*.ts MUST have an en/*.ts twin
├── layouts/Layout.astro        # base HTML: meta, Open Graph, hreflang, canonical, JSON-LD graph, mode script
├── pages/                      # /es/, /en/, redirect stubs, robots.txt
├── scripts/                    # main.ts, header.ts, reveals.ts, cinema.ts, dicta-demo.ts
└── styles/                     # global.css (@theme tokens, base, components layer), dentimed-app.css (.dm-app)
public/
├── cinema/                     # film clips and posters (read-only media)
├── deck/                       # standalone pitch deck (HTML + JS + CSS)
├── downloads/                  # product binaries (unlinked)
├── images/                     # OG images, logo files, favicons
└── llms.txt, llms-full.txt     # summaries for LLMs (keep in sync with the copy)
docs/creative/                  # owner's brand film brief and media records (read-only)
```

## Adding a new landing section

1. Add the type to `src/data/types.ts`, then `src/data/es/<section>.ts` and `src/data/en/<section>.ts` ending with `satisfies <Type>`.
2. Create `src/components/<Section>.astro` with `interface Props` that imports the type only. Take all copy as props.
3. Use `SectionHead` for the label, h2 and intro, and give the `<section>` an `id` plus `aria-labelledby="{id}-title"`. Dark sections use `.on-night` and `data-nav-theme="dark"`.
4. Pick the surface so two identical backgrounds never sit side by side; cards take the other neutral.
5. Add `data-reveal` to the heading block and cards if they should rise in.
6. Import and render it in both `src/pages/es/index.astro` and `src/pages/en/index.astro`.

## Deploy pipeline

- `main` is the deploy branch.
- Render service `innovaai-landing` (id `srv-d6po70ia214c73e8vj50`) auto-deploys on every push to `main`. Build command: `npm run build`. Publish dir: `dist`. Typical build time: 30–45 seconds.
- `.github/workflows/ci.yml` runs `npm ci && npm run build` on push and PR. Gate before merging.
- `.github/workflows/copilot-setup-steps.yml` exists for the Copilot coding-agent environment; it does not gate normal CI.
- The old `/es/dentimed/`, `/en/dentimed/`, `/es/diariomed/` and `/en/diariomed/` URLs should also get 301 rules to https://dentimed.app/ in the Render dashboard.

## Conventions

- **Commits**: conventional-commit-ish prefixes are common (`feat:`, `chore:`, `fix:`, `docs:`). Recent history is the best style guide; run `git log --oneline` before authoring.
- **Branches**: feature work goes on a topic branch; `main` stays deployable.
- **Two-locale changes** ship in the same commit when possible, which keeps ES/EN parity reviewable.
- **CRLF/LF warnings** during `git add` on Windows are cosmetic; ignore.

## Anti-patterns to avoid

- Adding a `tailwind.config.js/.ts/.mjs`: tokens live in the CSS `@theme` block.
- Hardcoding ES or EN strings inside a component, or importing locale data inside a component.
- Adding a route under `/es/` without the matching `/en/` (or vice versa) unless explicitly scoped as locale-only.
- A third button style, an icon inside a pill, a floating WhatsApp button, shadows or borders on cards, glass on anything but the nav and the film control, or any decorative gradient.
- A second font family or a weight other than 400 and 600.
- Teal or emerald text on a light surface; `ink-3` for small text on light.
- Using emoji in copy, code comments, or commit messages.
- Adding ESLint/Prettier/test configs without an explicit ask; the project deliberately keeps tooling minimal.
- Committing `bash.exe.stackdump`, `.env*`, `.mcp.json`, `.atl/`, `.claude/` (all gitignored).
- Touching the deck files in `public/deck/` to "match" the rest of the site: the deck is intentionally standalone with its own CSS copy.

## Retired, do not reintroduce

The owner rejected these in the v2 review; none of them may come back in code, copy, SEO, OG images or docs:

- The old hero line "La IA prepara el trabajo. Tu equipo decide." / "AI prepares the work. Your team decides." and its whole family ("la IA prepara", "una persona decide", "Tú revisas y confirmas", "una persona revisa y confirma" / "a person reviews and confirms", "prepared by AI"). It was the master line of v1; v2 has no master line.
- The "Pedido de Ana Quispe" hero card and every InnovaAI-side fictitious person or business (Ana Quispe, Rosa Choque, Jorge Flores, Marco Vargas, Carla Rojas, Sofía Mamani, Luis, doña Rosa, suppliers, invoices).
- "Datos de demostración." captions, `caption` / `demoNote` fields, colophons and any other demo disclaimer (v1 rule "every mockup has a demo caption").
- The WhatsApp/PDF "Bandeja de operaciones" demo (Example, OpsInbox), the Tagline, Principles, Audience, Products and UseCases sections, and the light hero with its photo.
- The v1 look: Outfit as a display font, the navy `#071628` night token, teal `#2de6d4` eyebrows, the `.wm-ai` gradient wordmark, `.eyebrow`, `.chip-*`, `.link-arrow`, `shadow-pill` / `shadow-window`, `rounded-island`, and the dark glass header pill that used to float over the page.
- v1's "one button style" rule (blue pill for WhatsApp only, every other action a `.link-arrow`): v2 uses the blue pill, the outline pill and chevron links.
- GSAP, ScrollTrigger and Lenis (and the `src/scripts/motion/` chunk, `state.ts`, `layout:refresh`, `--pill-clear`): v2 uses native scrolling and three small modules.
- Describing InnovaAI as an "applied AI studio in Bolivia" or as local: it is an AI product studio from Latin America, for the world.

## Products

- **DentiMed** (https://dentimed.app): assistant for dentists (Spanish-language product). The dentist dictates when the visit ends and DentiMed drafts the clinical note, procedures by tooth, medications, treatment plan and estimate, payment and next appointment; nothing is saved without approval. WhatsApp messages are prefilled and the dentist sends them. Runs in the phone's browser; founders pilot. dentimed.app is the source of truth; follow the DentiMed content rules above. The real DentiMed PNG screenshots are not used (1x resolution and copy issues); the HTML port of its UI replaces them.
- **Dicta** (https://dicta-web.onrender.com): voice dictation desktop app for Windows and Linux. Hold F9 to talk or double tap for hands-free; the text appears where the cursor is. Removes filler words; Spanish and English; free to start. Do not mention speed, translation, Android, offline or price.

## Where to find more

- `.github/copilot-instructions.md`: Copilot-specific conventions (overlap with this file is intentional).
- `.github/instructions/*.md`: per-domain rules (Astro, TypeScript, Tailwind, i18n, security, performance, code-review).
- `.github/skills/*/SKILL.md`: reusable Copilot Chat skills (setup-component, write-tests, code-review, refactor-code, generate-docs, debug-issue).
- Recent commit history (`git log --oneline -20`) is the most reliable record of how the codebase has actually evolved.
