---
name: code-review
description: Review a pull request against the InnovaAI landing page conventions — design tokens, i18n parity, Astro idioms, no emoji.
---

# Code Review

Reviews a branch, pull request, or changeset against this repository's conventions and the checklist in `../../instructions/code-review.instructions.md`.

Ask for the following inputs if not provided:

- Target of the review (PR number, branch name, or diff range)
- Scope: full review or a narrow focus (i18n only, design system only, performance only)

## Requirements

- Apply the priority tiers defined in `../../instructions/code-review.instructions.md`: Critical / Important / Suggestion
- Confirm every user-facing string lives in `src/data/{es,en}/**` and that parity holds (except for the ES-only DiarioMed sub-landing)
- Reject hardcoded hex colors; direct the author to `@theme` tokens or the shared utility classes
- Flag any emoji in source files, comments, commit messages, or copy
- Verify new components declare `interface Props` and accept translated strings as props
- Verify `data-animate` hooks are preserved or intentionally removed, and that new animations go through `src/scripts/animations.ts`
- Check for new `client:*` directives and require a justification
- Confirm no secrets or ignored files (`.env*`, `.mcp.json`) have been committed
- Deliver comments anchored to file and line, with a concrete alternative where possible
- Follow the review style described in `../../copilot-instructions.md`
