# Mark Scheme — Task 05: Integrated Prototype

**Total: 16 marks** · AO3: 12 marks · AO2: 4 marks
**This is a formative classroom rubric — not the official WJEC NEA mark grid.**

## AO3 — Integration & maintainability (12 marks)

| Level | Marks | Evidence |
|-------|-------|----------|
| Developing | 1–4 | Pages exist but use separate/duplicated stylesheets or inline styles, and/or navigation is inconsistent between pages |
| Secure | 5–9 | At least 3 pages sharing one stylesheet, consistent header/nav across all pages, no horizontal overflow at 375/768/1280px on any page, CSS organised into clearly commented sections |
| Exceptional | 10–12 | As Secure, plus a documented and consistently applied class-naming convention, current-page indication in the nav, and demonstrable reuse of components (e.g. the same `.card` class used identically across pages) |

## AO2 — Justifying technical organisation (4 marks)

| Level | Marks | Evidence |
|-------|-------|----------|
| Developing | 1 | No explanation of how the CSS/pages are organised |
| Secure | 2–3 | A short note states the naming convention used and why |
| Exceptional | 4 | The note also identifies a specific maintainability trade-off made (e.g. "I duplicated this one rule rather than adding a new utility class because it's only used once") |

## What to look for quickly

- ✅ View each page's `<head>` — confirm exactly one shared stylesheet link, not several or inline `<style>` blocks
- ✅ Use dev tools to check for a CSS rule defined twice with conflicting values (a common maintainability fault)
- ✅ Click through the nav on every page and confirm the "current page" is visually indicated somewhere
- ⚠️ Common gap: students often duplicate a whole `<style>` block per page "just in case" rather than trusting the shared stylesheet — this should be capped at Developing even if each individual page looks fine
