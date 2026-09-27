# Task 02 — Accessible Landing Page

**Spec link:** WJEC Unit 4, 2.4.4 Development (front end/interface, accessibility)
**Difficulty:** Core
**Time estimate:** suitable for a double lesson (60–90 minutes)
**Submit via:** Git repository or ZIP, containing `index.html` and a linked `styles.css`
**Accessibility focus task** — this is the task that explicitly targets WCAG contrast and semantic HTML/CSS.

---

## Scenario

Using your Task 01 design pack as a starting point (or the fallback palette below if you haven't completed it), build the **static HTML/CSS homepage** for Preseli Adventures. This is a real, working web page — no JavaScript required — that must be usable by a keyboard-only visitor and a screen-reader user, not just look right.

**Fallback palette** (use this if you don't have your own): background `#f4f1ea`, text `#1f2417`, primary `#2f6f4f`, primary-dark `#1f4d36`, accent `#c96f34`.

## Requirements

Build a single homepage that includes:

1. A `<header>` with a logo/site name and a `<nav>` containing at least 4 links (Home, Activities, Accommodation, Book Now)
2. A `<main>` containing:
   - A hero section with a heading and a short intro paragraph
   - A section listing at least 3 activities (coasteering, kayaking, mountain biking) as cards, using semantic elements (`<section>`, `<article>` or `<ul>`/`<li>` — not a stack of unstyled `<div>`s)
   - A call-to-action linking to a booking page (the link can point to `#` or to your Task 03 form)
3. A `<footer>` with contact details and opening hours

## Constraints

- Use **semantic HTML5** elements throughout (`header`, `nav`, `main`, `section`, `article`, `footer`) — no `<div>` used where a semantic element exists for that purpose
- Every image needs meaningful `alt` text (or `alt=""` if it is purely decorative)
- All text/background colour pairings must meet **WCAG AA contrast**: 4.5:1 for body text, 3:1 for large text (24px+/bold 19px+) and UI components
- The page must be usable with the **keyboard only** — every link and button must show a visible focus state
- Layout must use Flexbox and/or CSS Grid, and must not overflow horizontally or break at common widths: 375px (mobile), 768px (tablet), 1280px (desktop)

## Success criteria

**Must**
- Semantic HTML structure as listed above, validated with no major structural errors
- All colour pairings pass WCAG AA (checked and noted, e.g. with a browser contrast checker)
- Visible `:focus` states on every interactive element
- No horizontal scrolling/overflow at 375px, 768px or 1280px

**Should**
- Activity cards use a consistent, reusable pattern (same class names/structure repeated, not copy-pasted with drift)
- Heading levels are in a logical order (one `<h1>`, then `<h2>`s, no skipped levels)

**Could**
- Add a `skip to content` link for keyboard users
- Use a CSS custom property system (`:root { --primary: ... }`) rather than hard-coded colours repeated throughout

## How this links to the assessment objectives

- **AO3** (plan, design, create, develop) — this is the core "build" evidence for the front-end stage of the NEA: translating a design pack into working, standards-compliant markup and styling.
- **AO2** (evaluate) — checking and recording contrast ratios and keyboard behaviour is evaluative evidence, not just implementation, and should be documented briefly (a short `notes.md` alongside your code is enough).
