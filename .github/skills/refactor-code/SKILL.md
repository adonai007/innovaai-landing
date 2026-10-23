---
name: refactor-code
description: Refactor Astro components or TypeScript data files while preserving the i18n contract, design tokens, and animation hooks.
---

# Refactor Code

Improves structure, readability, or reuse without changing behavior or visual output. Preserves all externally observable contracts: component props, data bundle keys, animation hooks, and routing.

Ask for the following inputs if not provided:

- Target file(s) or component(s) to refactor
- Refactor goal (extract shared helper, tighten types, consolidate duplicated markup, simplify data shapes, etc.)
- Constraints (e.g. "do not change the DOM structure", "keep the public props identical")

## Requirements

- Preserve every `data-reveal`, `data-nav-theme`, `data-cinema`, `data-scene*` and `data-dicta` attribute; `src/scripts/reveals.ts`, `header.ts`, `cinema.ts` and `dicta-demo.ts` depend on them
- Preserve the `interface Props` contract of every component unless the refactor explicitly renames or reshapes it — in which case update all call sites in the same change
- Keep i18n parity: if a key is renamed in `src/data/es/*`, rename it in `src/data/en/*` simultaneously
- Do not swap design tokens for hardcoded values; keep colors flowing through `@theme` variables and shared utility classes
- Do not introduce new dependencies, linters, formatters, or config files
- Run `npm run build` after the refactor and confirm the `dist/` output is unchanged in structure; visual regressions are blockers
- Follow `../../instructions/astro.instructions.md`, `../../instructions/typescript.instructions.md`, and `../../instructions/tailwind.instructions.md`
