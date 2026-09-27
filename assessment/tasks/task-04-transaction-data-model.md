# Task 04 — Multi-item Transaction Data Model

**Spec link:** WJEC Unit 4, 2.4.5 Development (data structures / RDBMS)
**Difficulty:** Stretch / challenge
**Time estimate:** suitable for a double lesson (60–90 minutes)
**Submit via:** Git repository or ZIP, containing an ERD image/diagram file, a `schema.sql` file, and a static `receipt.html` + `styles.css`

---

## Scenario

A customer can book **multiple items in one transaction** — for example, two coasteering sessions, one night in the bunkhouse, and a wetsuit hire. Preseli Adventures need a database design that can store this correctly, and a styled digital receipt customers can view after booking.

This is the most technically demanding task in the pack — it is the one place in this CSS-focused unit where the WJEC specification requires database design work, so it is included as a **stretch task** rather than a core one.

## Requirements

1. **Entity-Relationship Diagram (ERD)** showing at least these entities: `Customer`, `Booking`, `BookingItem`, `Activity`, `EquipmentHire`, `Accommodation` — with primary keys, foreign keys and relationship cardinalities (1:1, 1:M, M:M) clearly marked.
2. **Normalise to Third Normal Form (3NF)** — briefly show your working: what repeating groups or partial/transitive dependencies you removed and why (a short table or bullet list per normal form is enough).
3. **SQL `CREATE TABLE` statements** implementing your normalised design, including primary keys, foreign keys and sensible data types.
4. **A static, CSS-styled receipt page** (`receipt.html`) that renders one example multi-item booking (hard-coded sample data is fine — no live database connection is required for this classroom task) as a clearly laid-out itemised receipt: customer details, a table/grid of line items, and a total.

## Constraints

- The `BookingItem` entity must be able to represent **at least three different item types** (activity session, equipment hire, accommodation night) linked to a single `Booking` — this is what makes it a genuine multi-item transaction model, not a single-product booking.
- No table may contain a repeating group (e.g. `item1`, `item2`, `item3` columns) — this is the specific 3NF violation this task is designed to catch.
- The receipt page must use CSS Grid or a `<table>` styled with CSS to align item names, quantities and prices legibly, and must remain readable if printed (a `@media print` rule is not required but is worth extra credit).

## Success criteria

**Must**
- ERD includes all 6 entities with keys and correctly marked relationships
- SQL `CREATE TABLE` statements match the ERD and include primary/foreign keys
- No repeating groups in any table
- Receipt page renders a realistic multi-item booking with a clear, styled total

**Should**
- Written normalisation working shown (not just the final 3NF result)
- Foreign key data types match the primary key they reference

**Could**
- Add a `Payment` entity separate from `Booking` (supporting partial payments/deposits)
- Add a `@media print` stylesheet so the receipt renders cleanly if printed

## How this links to the assessment objectives

- **AO3** (plan, design, create, develop) — the ERD, SQL and receipt page are all "create/develop" evidence, specifically covering the data-structure component of Unit 4 that a pure front-end task cannot demonstrate.
- **AO2** (analyse, evaluate) — the normalisation working is explicit analytical evidence: showing *why* a design is 3NF, not just presenting a finished schema.
