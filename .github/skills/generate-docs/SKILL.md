---
name: generate-docs
description: Generate or update JSDoc/TSDoc on utilities and component prop interfaces, and keep CLAUDE.md aligned with architecture changes.
---

# Generate Docs

Adds or refreshes documentation for exported utilities in `src/scripts/**` and for the `interface Props` of Astro components. Updates `CLAUDE.md` when architecture, routing, or design tokens have drifted.

Ask for the following inputs if not provided:

- Target: a specific file, a directory, or "everything that's out of date"
- Scope: component props, exported helpers, repo-level docs, or all three

## Requirements

- Every exported function in `src/scripts/**` and `src/data/types.ts` carries a TSDoc block: one-line summary, `@param` for each argument when the name is not self-evident, `@returns` when meaningful, and a note on side effects
- Every exported component has a short frontmatter comment describing its role and where it is used
- Every `interface Props` field gets a TSDoc comment unless the name and type already make the purpose obvious
- Keep documentation in English even though user-facing copy is Spanish
- Never use emoji in documentation
- When architecture, routing, the design token list, or conventions change, update `CLAUDE.md` in the same commit as the code change
- Do not generate a `README.md` unless explicitly requested; if one exists, keep it in sync with `CLAUDE.md`
- Follow `../../instructions/documentation.instructions.md`
