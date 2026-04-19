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
- Scroll-triggered animations still fire where `data-animate` hooks exist
- Responsive checks at mobile (<640px), tablet (~768px), and desktop (>=1024px) widths

## When to invest in test infrastructure

- If the maintainer approves adding tests, **Playwright** is the recommended starting point: visual regression for hero sections, basic navigation smoke tests per locale, Lighthouse performance budget in CI
- Any new test infrastructure must run in the existing `.github/workflows/ci.yml` or a dedicated workflow; do not leave tests that never execute
