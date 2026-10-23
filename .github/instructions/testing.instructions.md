---
applyTo: "**"
description: "Testing posture for a static marketing site with no test runner configured"
---

# Testing Guidelines

Apply the repository-wide guidance from `../copilot-instructions.md`.

## Current state

- The project has **no** test runner, unit framework, or end-to-end harness
- Do not fabricate a test setup, scaffold Vitest/Jest, or add a `test` script to `package.json` without discussing it with the maintainer first
- Do not write `*.test.ts` or `*.spec.ts` files speculatively — they will not run

## Manual verification

For each change, verify locally before opening a PR:

- `npm run dev` boots cleanly and the targeted page renders without console errors
- Both `/es/...` and `/en/...` variants render (except when the change is explicitly ES-only)
- `npm run build` completes; inspect the `dist/` output for unexpected size regressions on critical pages
- Reveals still fire where `data-reveal` hooks exist, and with reduced motion, Save-Data or no JS every element is visible in its final state (film posters with copy in normal flow, full Dicta text)
- Responsive checks at 390px, 768px, 1024px and 1440px (the breakpoints are 735px, 834px and 1069px), with no horizontal overflow
- The nav turns dark over `#dicta` and `#historia` and light elsewhere; the menu opens, traps focus and closes with Esc
- Playwright's bundled Chromium cannot decode the film's H.264 clips: for screenshots of scrubbed frames, copy VP9 stand-ins into a private build output only, never into `public/cinema/`

## When to invest in test infrastructure

- If the maintainer approves adding tests, **Playwright** is the recommended starting point: visual regression for the DentiMed first fold (`#dentimed`), basic navigation smoke tests per locale, Lighthouse performance budget in CI
- Any new test infrastructure must run in the existing `.github/workflows/ci.yml` or a dedicated workflow; do not leave tests that never execute
