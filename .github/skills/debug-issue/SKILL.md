---
name: debug-issue
description: Triage a bug, failed build, or visual regression in the InnovaAI landing page — browser console, Astro output, Render logs, particle canvas.
---

# Debug Issue

Systematically investigates a failure and proposes a fix grounded in evidence from the actual environment (browser console, `npm run build` output, Render deploy logs, DOM inspector) — never a guess.

Ask for the following inputs if not provided:

- Symptom: what breaks, on which page, in which locale, on which device size
- Reproduction steps
- Any error messages or stack traces already captured

## Requirements

- Investigate before fixing. Capture the actual error from the browser console, the `npm run dev` terminal, the `npm run build` output, or the Render deploy log before proposing a change
- Common failure classes in this project:
  - **Build failures** — usually a missing export in `src/data/{es,en}/*.ts` or a type mismatch in `interface Props`
  - **Hydration / interactivity issues** — a component that needs `client:*` but was shipped as pure server output, or a script running before the DOM is ready
  - **Particle canvas missing or hanging** — tsParticles is loaded as a client island; check the module import path and that `ParticleBackground.astro` is rendered once in the hero
  - **Animation not firing** — `data-animate` attribute missing, or `src/scripts/animations.ts` did not register the ScrollTrigger for that selector
  - **Locale routing oddities** — check `astro.config.mjs` i18n settings, the page exists under `src/pages/{locale}/`, and `Layout.astro` hreflang tags are correct
  - **Visual regression after deploy** — diff the `dist/` output locally vs. the deployed build; check Render logs for warnings
- Do not ship a fix that masks the symptom (e.g. wrapping in try/catch without understanding the failure)
- When the fix involves a missing animation hook, a dropped data-key, or a token regression, escalate through the code-review checklist in `../../instructions/code-review.instructions.md`
- Follow `../../copilot-instructions.md` and the relevant instruction files
