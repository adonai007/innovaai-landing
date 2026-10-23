---
name: debug-issue
description: Triage a bug, failed build, or visual regression in the InnovaAI landing page — browser console, Astro output, Render logs, the film and the nav theme.
---

# Debug Issue

Systematically investigates a failure and proposes a fix grounded in evidence from the actual environment (browser console, `npm run build` output, Render deploy logs, DOM inspector) — never a guess.

Ask for the following inputs if not provided:

- Symptom: what breaks, on which page, in which locale, on which device size, in which mode (`html.motion`, `html.still`, no JS)
- Reproduction steps
- Any error messages or stack traces already captured

## Requirements

- Investigate before fixing. Capture the actual error from the browser console, the `npm run dev` terminal, the `npm run build` output, or the Render deploy log before proposing a change
- Common failure classes in this project:
  - **Build failures** — usually a missing export in `src/data/{es,en}/*.ts`, a tuple length that no longer matches its type in `src/data/types.ts`, or a type mismatch in `interface Props`
  - **Reveal not firing** — the element lacks `data-reveal`, or `html.motion.reveal-ready` was never set because `src/scripts/reveals.ts` did not run
  - **Film not scrubbing** — the section fell back to `.is-static` (short screen, `html.still`, `html.slow-net`, copy too tall for its frame), an ancestor of the sticky stage clips overflow, or the browser cannot decode the H.264 clips (Playwright's Chromium cannot)
  - **Nav theme wrong** — a black section is missing `data-nav-theme="dark"`, or the observer in `src/scripts/header.ts` was not rebuilt after a resize
  - **Locale routing oddities** — check `astro.config.mjs` i18n settings, the page exists under `src/pages/{locale}/`, and `Layout.astro` hreflang tags are correct
  - **Visual regression after deploy** — diff the `dist/` output locally vs. the deployed build; check Render logs for warnings
- Do not ship a fix that masks the symptom (e.g. wrapping in try/catch without understanding the failure)
- When the fix involves a missing hook, a dropped data key, or a token regression, escalate through the code-review checklist in `../../instructions/code-review.instructions.md`
- Follow `../../copilot-instructions.md` and the relevant instruction files
