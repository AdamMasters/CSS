# Mark Scheme — Task 04: Multi-item Transaction Data Model

**Total: 20 marks** · AO3: 14 marks · AO2: 6 marks
**This is a formative classroom rubric — not the official WJEC NEA mark grid.**

## AO3 — Data model & build (14 marks)

| Level | Marks | Evidence |
|-------|-------|----------|
| Developing | 1–5 | ERD present but missing keys/cardinalities, and/or SQL does not match the ERD, and/or a repeating group exists (e.g. `item1`, `item2` columns) |
| Secure | 6–10 | Full ERD with all 6 entities, correct keys and cardinalities; SQL `CREATE TABLE` statements match the ERD with correct primary/foreign keys; no repeating groups; receipt page renders a realistic multi-item booking with a styled total |
| Exceptional | 11–14 | As Secure, plus `BookingItem` cleanly supports at least 3 distinct item types without awkward nullable columns, and the receipt page remains legible/well-aligned if printed |

## AO2 — Normalisation analysis (6 marks)

| Level | Marks | Evidence |
|-------|-------|----------|
| Developing | 1–2 | Final schema presented with no working shown |
| Secure | 3–4 | Working shown for at least one normal form (e.g. what repeating group was removed to reach 1NF, or what partial dependency was removed for 2NF) |
| Exceptional | 5–6 | Working shown across the progression to 3NF, correctly identifying at least one transitive dependency removed, in the student's own words |

## What to look for quickly

- ✅ Every foreign key in the SQL has a matching primary key of the same data type in the ERD
- ✅ `BookingItem` (or equivalent) links to a `Booking`, not directly duplicating fields per item type
- ✅ No table has numbered columns like `activity1`, `activity2`
- ⚠️ Common gap: students often present a correct *final* 3NF design but cannot explain *why* it's 3NF — press for the "before" version in a viva or written note if the working isn't shown
