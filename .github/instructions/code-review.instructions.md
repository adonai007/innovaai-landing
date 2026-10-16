<!-- Inspired by: https://github.com/github/awesome-copilot/blob/main/instructions/code-review-generic.instructions.md -->
---
applyTo: "**"
description: "Code review checklist for the InnovaAI landing page"
---

# Code Review Guidelines

Apply the repository-wide guidance from `../copilot-instructions.md`.

## Review priority

- **Critical** — build breaks, deploy-blocking regressions, committed secrets, broken locale routing, accessibility regressions (missing alt text, broken keyboard paths)
- **Important** — hardcoded strings or hex colors, missing i18n parity, silent removal of `data-reveal` or `data-primary-cta` hooks, new client-side islands without justification
- **Suggestion** — copy polish, naming, refactors that do not change behavior

## Core checks

### Design system

- No hardcoded hex colors in components; all colors flow through `@theme` tokens or the components-layer classes (`.btn-primary`, `.link-arrow`, `.chip-*`, `.eyebrow`)
- Helpers (`.wrap`, `.section`, `.on-dark`, etc.) are reused rather than re-implemented
- One blue CTA style, teal only on dark surfaces, gradients only in the three allowed places, sentence case, no dashes inside sentences
- No emoji in source, comments, copy, or commit messages
- Icons are Phosphor SVGs through `src/components/ui/Icon.astro`: no sprite sheet, icon font, or emoji stand-ins

### Content and i18n

- Every new Spanish string has an English counterpart with the same key, and both data files `satisfies` the same type
- Components receive copy as props; no imports from `src/data/**` inside components
- `interface Props` present and accurate on every new or modified component

### Astro and performance

- No new `client:*` directive without a clear interactivity reason
- Entrance motion goes through `data-reveal`; scroll-scrubbed motion lives in `src/scripts/motion/` (loaded only under `html.motion`); no inline GSAP calls in components
- `dist/` bundle size did not regress unexpectedly for changed pages

### TypeScript

- No `any`; narrow unions preferred over free-form strings
- `as const` on data arrays that downstream code treats as literals
- No `@ts-ignore` without a short justification

### Security

- No secrets introduced; `.env*` and `.mcp.json` remain ignored
- External links with `target="_blank"` carry `rel="noopener noreferrer"`

## Comment style

- Tag each comment with the priority tier (Critical / Important / Suggestion)
- Cite specific file and line, explain the impact, and propose a concrete alternative when possible
- Approve when the change meets the critical and important bars, even if suggestions remain open
