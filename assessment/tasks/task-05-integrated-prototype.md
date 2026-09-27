# Task 05 — Integrated Prototype

**Spec link:** WJEC Unit 4, 2.4.4 / 2.4.6 Development & prototype
**Difficulty:** Stretch / challenge
**Time estimate:** suitable for a double lesson (60–90 minutes)
**Submit via:** Git repository or ZIP, containing all linked HTML pages and a single shared `styles.css`

---

## Scenario

Preseli Adventures now want to see everything working together as **one linked prototype**, not separate unstyled fragments. Combine your landing page (Task 02), booking form (Task 03) and receipt layout (Task 04) into a single, navigable multi-page site sharing one consistent look.

## Requirements

Produce a linked prototype of at least 3 pages:

1. **Homepage** (from Task 02, refined if needed)
2. **Booking form** (from Task 03, refined if needed)
3. **Booking summary/receipt page** (styled using the same approach as Task 04's receipt)

All three pages must:
- Share **one single stylesheet** (`styles.css`) — no page-specific inline styles or duplicated `<style>` blocks
- Use a **consistent header and navigation** across all pages, with the current page indicated (e.g. an `.active` class on the current nav link)
- Follow a **shared naming convention** for CSS classes across pages (e.g. `card`, `card__title`, `card__body` used identically wherever a "card" pattern appears)
- Respond correctly at 375px, 768px and 1280px with no horizontal overflow on any page

## Constraints

- CSS must be organised with clear grouping/comments (e.g. `/* Layout */`, `/* Navigation */`, `/* Forms */`, `/* Cards */`) so another developer could navigate the stylesheet without reading every line
- No class should be defined more than once with conflicting rules (a maintainability requirement, not just a visual one — check with browser dev tools if a rule appears to have no effect)
- Reuse, don't recreate: if a card/button/form-field style already exists from an earlier task, reuse the same class rather than writing a near-identical new one

## Success criteria

**Must**
- At least 3 linked pages sharing one stylesheet and one consistent nav/header
- No horizontal overflow at 375px, 768px or 1280px on any page
- CSS organised into clearly commented sections

**Should**
- A documented, consistent class-naming convention used throughout (state it in a short `notes.md` — e.g. "I used BEM-style `block__element--modifier` naming")
- Current-page indication in the navigation

**Could**
- Add a shared `variables`/`:root` section of CSS custom properties reused across every page
- Add a basic 404 or "page not found" style page, styled consistently with the rest of the site

## How this links to the assessment objectives

- **AO3** (plan, design, create, develop) — integrating separate pieces into one coherent, maintainable prototype is exactly the "develop a digital product" stage of the NEA, and the point at which markers look specifically for maintainability (naming, organisation, reuse) rather than isolated features.
- **AO2** (evaluate) — the `notes.md` naming-convention justification is light-touch evaluative evidence explaining a technical choice, not just describing it.
