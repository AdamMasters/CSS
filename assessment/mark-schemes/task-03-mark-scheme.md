# Mark Scheme — Task 03: Data Capture Form & Validation

**Total: 12 marks** · AO3: 9 marks · AO2: 3 marks
**This is a formative classroom rubric — not the official WJEC NEA mark grid.**

## AO3 — Build quality (9 marks)

| Level | Marks | Evidence |
|-------|-------|----------|
| Developing | 1–3 | Fields present but missing correct `type` attributes and/or labels not properly associated (e.g. placeholder used instead of `<label for>`) |
| Secure | 4–6 | All 7 fields present with correct input types, properly associated labels, required fields enforce native validation, `:invalid`/`:valid`/`:focus` states are visually distinct |
| Exceptional | 7–9 | As Secure, plus date field blocks past dates, party size correctly constrained to 1–12 with a native out-of-range message, and error states do not rely on colour alone |

## AO2 — Justification (3 marks)

| Level | Marks | Evidence |
|-------|-------|----------|
| Developing | 1 | No explanation of validation choices given |
| Secure | 2 | A short note explains at least one validation rule (e.g. why party size is capped) |
| Exceptional | 3 | Explanations given for at least two rules, each tied to a real user or business reason (not just "because the task said so") |

## What to look for quickly

- ✅ Click into each field and check the `<label>` highlights/focuses it (proves correct `for`/`id` association)
- ✅ Try submitting the form empty — browser should block it and show native messages
- ✅ Try typing a non-numeric character into party size, or an out-of-range number
- ⚠️ Common gap: `type="text"` used for phone/email instead of `type="tel"`/`type="email"` — this technically still "works" but loses the built-in validation and mobile keyboard benefits, so should not be marked as Secure
