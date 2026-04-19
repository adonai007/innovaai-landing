---
applyTo: "**"
description: "Security posture for a zero-runtime static marketing site"
---

# Security Guidelines

Apply the repository-wide guidance from `../copilot-instructions.md`.

## Runtime surface

- The site is statically generated. There is no server, no database, no authenticated endpoints; threat surface is effectively the build pipeline, the CDN, and any third-party scripts
- Do not add API routes, adapters, or server-side endpoints without an explicit product requirement

## Secrets and configuration

- `.env*` files are gitignored and must stay that way. Never commit API keys, tokens, or private URLs
- `.mcp.json` is likewise gitignored; it is a local development aid and must not be checked in
- Values that are safe in client code (public URLs, the public WhatsApp number, social links, Render's public deploy URL) can live in `src/data/**` without restriction

## Third-party scripts

- Keep the dependency list lean; every added client-side script widens the attack surface and the bundle
- Prefer trusted, widely-audited libraries (GSAP, tsParticles) already in use. New client dependencies require review
- When embedding third-party widgets, load them from the vendor's canonical CDN over HTTPS and pin versions

## Links and forms

- External links use `rel="noopener noreferrer"` when they include `target="_blank"`
- If a contact form is ever added, it must submit to a trusted third-party endpoint (Formspree, a serverless function) — never to a scraped `mailto:` in plain text that leaks the address to bots without obfuscation

## Headers and policies

- Render handles TLS and basic headers for the static site. If a custom Content Security Policy, Strict-Transport-Security, or Referrer-Policy is added, document the change in `CLAUDE.md` and in the Render dashboard
