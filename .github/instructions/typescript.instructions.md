---
applyTo: "**/*.ts,**/*.tsx"
description: "TypeScript conventions for Astro frontmatter, data files, and client scripts"
---

# TypeScript Guidelines

Apply the repository-wide guidance from `../copilot-instructions.md` to all TypeScript.

## Type posture

- Treat the project as strict TypeScript. Do not use `any`; prefer `unknown` with narrowing when a value's shape is genuinely unknown
- Never silence errors with `@ts-ignore`; use `@ts-expect-error` with a short justification only when a type gap is unavoidable, and open a follow-up to remove it
- Keep return types explicit on exported functions; let TypeScript infer locals

## Data files

- Localized content in `src/data/{es,en}/*.ts` should be declared with `as const` (const assertions) so downstream components can rely on literal types
- Define the canonical type for a data bundle once (e.g. a `Service`, `Product`, `FaqItem`) and import it from both locales to guarantee parity
- Avoid circular imports between data files; if shared shapes grow, place them in `src/data/types.ts`

## Component props

- Every `.astro` component with inputs declares an `interface Props` in its frontmatter
- Prefer narrow unions (`variant: 'primary' | 'secondary'`) over free-form strings
- Optional props should use `?:` plus a destructuring default; avoid `undefined`-checks scattered in the template

## Client scripts

- Scripts in `src/scripts/` run in the browser. Guard DOM access (`document`, `window`) at the entry point, not inside every helper
- Type third-party APIs (GSAP, tsParticles) from their own typings; do not re-declare them locally
- Prefer `const` over `let`; use `readonly` on module-level arrays that are not mutated

## Naming

- Types and interfaces in PascalCase; functions and variables in camelCase; constants in UPPER_SNAKE_CASE only when they represent true module-level constants
- File names follow the surrounding convention: Astro components in PascalCase, TypeScript modules in kebab-case unless they export a class or component
