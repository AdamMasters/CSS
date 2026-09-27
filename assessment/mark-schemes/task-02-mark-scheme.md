# Mark Scheme — Task 02: Accessible Landing Page

**Total: 16 marks** · AO3: 12 marks · AO2: 4 marks
**This is a formative classroom rubric — not the official WJEC NEA mark grid.**

## AO3 — Build quality (12 marks)

| Level | Marks | Evidence |
|-------|-------|----------|
| Developing | 1–4 | Page renders but uses `<div>` in place of semantic elements throughout, and/or one or more colour pairings fail WCAG AA, and/or focus states are missing or invisible |
| Secure | 5–9 | Correct semantic structure (`header`/`nav`/`main`/`section`/`footer`), all checked colour pairings pass WCAG AA, visible focus state on every interactive element, no overflow at 375/768/1280px |
| Exceptional | 10–12 | As Secure, plus a logical, unbroken heading hierarchy, meaningful `alt` text throughout, and a reusable/consistent card pattern for the activities list (not three near-identical but drifting blocks) |

## AO2 — Accessibility evaluation (4 marks)

| Level | Marks | Evidence |
|-------|-------|----------|
| Developing | 1 | Claims the page is accessible with no evidence of testing |
| Secure | 2–3 | `notes.md` (or equivalent) records actual contrast ratios checked and confirms keyboard-only navigation was tested |
| Exceptional | 4 | As Secure, plus at least one accessibility issue was found and explicitly fixed as a result of testing, with a before/after note |

## What to look for quickly

- ✅ View source / dev tools: count `<div>`s used where a semantic tag exists — should be minimal
- ✅ Tab through the page with no mouse — every link/button must show a visible outline or equivalent
- ✅ Resize the browser to ~375px width — check for a horizontal scrollbar
- ⚠️ Common gap: contrast is "checked" only for body text, not for muted/secondary text or button labels on coloured backgrounds — check those too
