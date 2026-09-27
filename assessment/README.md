# WJEC A2 Digital Technology — Assessment Pack

This section supports **WJEC Digital Technology (A level), Unit 4: Digital Solutions** — the 45-hour, 30%-weighted non-exam assessment in which students design, build, test and present a transactional website for a client brief.

The six tasks below are **classroom practice components**, not a simulation of the full NEA. Each one isolates a single skill from the Unit 4 specification (design, front-end build, data capture, data modelling, integration, testing/evaluation) so it can be taught, attempted and marked inside a single lesson or double lesson — while still producing evidence that maps directly onto how the real NEA is assessed.

All six tasks share one running scenario so the work builds toward a mini end-to-end project:

> **Client brief:** *Preseli Adventures* is a fictional outdoor activity centre in Pembrokeshire offering coasteering, kayaking, mountain biking and bunkhouse accommodation. Customers need to research activities online and book **multiple items in a single transaction** (e.g. two activity sessions + equipment hire + a night's accommodation).

---

## How this section is organised

```text
assessment/
├── README.md                        ← this overview page
├── confidence-checkin.md            ← printable self-assessment sheet (before/after)
├── tasks/                           ← student-facing briefs
│   ├── task-01-design-pack.md
│   ├── task-02-accessible-landing-page.md
│   ├── task-03-data-capture-form.md
│   ├── task-04-transaction-data-model.md
│   ├── task-05-integrated-prototype.md
│   └── task-06-test-refine-present.md
├── mark-schemes/                    ← teacher-facing marking rubrics (one per task)
│   ├── task-01-mark-scheme.md
│   ├── task-02-mark-scheme.md
│   ├── task-03-mark-scheme.md
│   ├── task-04-mark-scheme.md
│   ├── task-05-mark-scheme.md
│   └── task-06-mark-scheme.md
└── exemplars/                       ← real student work, added year on year
    └── README.md
```

**Naming convention:** every task, mark scheme and exemplar folder uses the same `task-NN-slug` id, so a new cohort's work always lines up with the brief and rubric it answers. To add a seventh task in a future year, create `task-07-*.md` in each of the three folders — nothing else needs to change.

**Submission:** students submit via a Git repository (branch or fork) or a ZIP export of their working folder, containing at minimum an `index.html` and a linked stylesheet.

---

## The six tasks

| # | Task | Spec link (Unit 4) | Focus | Difficulty | Time |
|---|------|--------------------|-------|------------|------|
| 1 | [Design pack & style guide](tasks/task-01-design-pack.md) | 2.4.2 Investigation · 2.4.3 Design | Web design, usability | Core | 45–60 min |
| 2 | [Accessible landing page](tasks/task-02-accessible-landing-page.md) | 2.4.4 Development (front end) | Accessibility, semantic HTML/CSS | Core | Double lesson |
| 3 | [Data capture form & validation](tasks/task-03-data-capture-form.md) | 2.4.4 Development (data capture) | Technical implementation | Core | 45–60 min |
| 4 | [Multi-item transaction data model](tasks/task-04-transaction-data-model.md) | 2.4.5 Development (data structures) | Data modelling + CSS reporting | Stretch | Double lesson |
| 5 | [Integrated prototype](tasks/task-05-integrated-prototype.md) | 2.4.4 / 2.4.6 Prototype development | Maintainability, integration | Stretch | Double lesson |
| 6 | [Test, refine & justify](tasks/task-06-test-refine-present.md) | 2.4.7 Testing, refinement, evaluation | Evaluation, justification (AO2/AO3) | Core + stretch extension | Double lesson |

Tasks 1–3 can be run in any order as standalone single lessons. Tasks 4–6 assume tasks 1–3 have already produced a design pack, landing page and booking form to build on, refine and evaluate.

## Assessment objectives at a glance

Unit 4 is weighted **0% AO1, 6% AO2, 24% AO3** (of the 30% total A-level weighting for this unit) — it is almost entirely a "build and justify" assessment, not a knowledge-recall one.

- **AO2** — investigate, analyse and evaluate: research existing sites, test your own work, justify decisions.
- **AO3** — plan, design, create and develop digital products: wireframes, HTML/CSS, forms, data models, working prototypes.

Every mark scheme in this pack states which AO(s) it evidences and roughly how much weight each carries, so the balance mirrors the real NEA rather than turning into a knowledge quiz.

## Using the mark schemes

These are **formative classroom rubrics** written for quick, consistent marking of practice tasks — they are deliberately simpler than, and not a substitute for, the official WJEC NEA mark grid. Each one uses three or four levels of response (e.g. Developing / Secure / Exceptional) with an indicative mark band and a description of the evidence expected at each level, rather than a tick-list of isolated marks.

## Exemplars

The `exemplars/` folder is intentionally empty in this repository — it is where **real, anonymised student submissions** should be added over time, one subfolder per task per year (e.g. `exemplars/task-02/sics-2026-cohort-a/`). See [`exemplars/README.md`](exemplars/README.md) for the convention. Building this library is what makes the pack more useful every year without needing to change the tasks or mark schemes.

## Confidence check-in

[`confidence-checkin.md`](confidence-checkin.md) is a short, printable self-assessment (0–10 confidence per CSS topic, plus a "likely to use it?" flag) designed to be run **before Task 01** and **again after Task 06**, giving students a simple before/after view of their own progress. The same check-in is available interactively as **Module 11** in the app itself, with auto-saving sliders instead of pen and paper — use whichever suits the lesson.
