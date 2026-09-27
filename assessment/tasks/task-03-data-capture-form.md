# Task 03 — Data Capture Form & Validation

**Spec link:** WJEC Unit 4, 2.4.4 Development (data capture)
**Difficulty:** Core
**Time estimate:** 45–60 minutes (single lesson)
**Submit via:** Git repository or ZIP, containing `index.html` (or `booking.html`) and a linked `styles.css`

---

## Scenario

Preseli Adventures need a **booking enquiry form** so customers can request a session before payment is taken. Your job is to build the form and its validation states — not to process the data (no backend/database is required for this task; that's covered in Task 04).

## Requirements

Build a single form page containing fields for:

1. Full name (text, required)
2. Email address (email type, required)
3. Phone number (tel type, optional)
4. Preferred activity (select: Coasteering / Kayaking / Mountain Biking / Bunkhouse only)
5. Preferred date (date type, required, must not allow a date in the past)
6. Party size (number type, required, minimum 1, maximum 12)
7. Additional message (textarea, optional)
8. A submit button labelled clearly (e.g. "Send booking enquiry")

## Constraints

- Use **HTML5 built-in validation attributes** (`required`, `type="email"`, `min`/`max`, `pattern` where useful) — do not rely on JavaScript for the core validation
- Every field must have a properly associated `<label>` (using `for`/`id`, not just placeholder text)
- Style the `:invalid`, `:valid` and `:focus` states distinctly using CSS, so a user gets clear visual feedback without needing to submit first
- Error messaging must not rely on colour alone (e.g. pair a red border with an icon or text, for a colour-blind user)
- The form must remain usable and readable at 375px width

## Success criteria

**Must**
- All 7 fields present with correct input types and correctly associated labels
- Required fields enforce validation using HTML attributes (test: try submitting empty)
- `:invalid`/`:valid`/`:focus` states are visually distinct via CSS

**Should**
- The date field blocks past dates (`min` attribute set dynamically or to a fixed sensible date)
- Party size is constrained to a sensible range (1–12) and shows a native error message when out of range

**Could**
- Group related fields visually using `<fieldset>` and `<legend>` (e.g. "Your details" vs "Your booking")
- Add a short inline hint (e.g. "We'll only use this to confirm your booking") to build user trust

## How this links to the assessment objectives

- **AO3** (plan, design, create, develop) — this is direct evidence of the "data capture" component required by the Unit 4 specification for a transactional website.
- **AO2** (evaluate) — briefly note (a short comment block or `notes.md` is enough) *why* each validation rule was chosen, e.g. why party size is capped at 12 — this small justification step is what distinguishes AO3 building from AO2 evaluating the same feature.
