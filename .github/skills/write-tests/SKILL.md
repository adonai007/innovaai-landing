---
name: write-tests
description: Guidance for adding tests to a project that currently has no test infrastructure.
---

# Write Tests

The InnovaAI landing page has **no** test runner configured (no Vitest, Jest, Playwright, or similar). Before writing any test code, bootstrapping infrastructure is required — and that bootstrap should be discussed with the maintainer.

Ask for the following inputs if not provided:

- What exactly needs coverage (visual regression on the hero, locale routing smoke tests, form behavior, etc.)?
- Is the maintainer open to adding a test runner to the project?
- Which CI workflow should run the tests (extend `.github/workflows/ci.yml` or add a dedicated one)?

## Requirements

- Do not write `*.test.ts`, `*.spec.ts`, or framework-specific test files until a runner is installed and wired into `package.json` and CI
- Recommend **Playwright** as the first-choice runner for this project: it covers visual regression, cross-locale smoke tests, and Lighthouse budgets in one tool
- If infrastructure is approved, propose a minimal setup:
  - Add `@playwright/test` as a dev dependency
  - Configure Playwright to run against `npm run preview` in CI
  - Start with two tests: `/es/` renders the hero, `/en/` renders the hero
- Never silently introduce a test runner or testing dependency; get explicit sign-off first
- Follow the posture captured in `../../instructions/testing.instructions.md`
