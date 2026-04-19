---
applyTo: "**"
description: "Documentation standards for components, utilities, and repo-level docs"
---

# Documentation Guidelines

Apply the repository-wide guidance from `../copilot-instructions.md`.

## Component docs

- Every exported `.astro` component must declare an `interface Props` with a short TSDoc comment per field when the purpose is not obvious from the name and type
- Include a one-line TSDoc summary above each component's frontmatter describing its role and which page uses it
- Capture non-obvious constraints in a comment (e.g. "Requires `<ParticleBackground>` earlier in the page", "Assumes the parent runs GSAP registration")

## Utilities and scripts

- Exported functions in `src/scripts/*` and `src/data/types.ts` carry JSDoc/TSDoc: one-line summary, `@param` for each argument, `@returns` when meaningful
- Document side effects explicitly (DOM writes, global listeners) so future edits respect them

## Repo-level docs

- `CLAUDE.md` is the canonical onboarding document for AI assistants and new contributors. Update it whenever architecture, routing, design tokens, or conventions change
- If a `README.md` is introduced, keep it in sync with `CLAUDE.md`; do not let them drift

## Style

- Write documentation in English inside the codebase, even when the user-facing copy is Spanish
- Keep comments focused on *why* and *how it connects*, not *what the code literally does*
- Never include emoji in source files, comments, or commit messages
