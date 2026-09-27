# CSS Fundamentals — A2 Interactive Web Design

An interactive, self-paced web application for teaching CSS to A level students. Built with React + Vite, it provides ten guided modules, each with live playgrounds, interactive controls, and real-time code generation.

---

## Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Module List](#module-list)
4. [Tech Stack](#tech-stack)
5. [Getting Started](#getting-started)
6. [Project Structure](#project-structure)
7. [Teaching Notes](#teaching-notes)
   - [How to Use This App in the Classroom](#how-to-use-this-app-in-the-classroom)
   - [Module 1 — The Box Model](#module-1--the-box-model)
   - [Module 2 — Display & Flow](#module-2--display--flow)
   - [Module 3 — Positioning](#module-3--positioning)
   - [Module 4 — Flexbox](#module-4--flexbox)
   - [Module 5 — CSS Grid](#module-5--css-grid)
   - [Module 6 — Typography](#module-6--typography)
   - [Module 7 — Colours & Backgrounds](#module-7--colours--backgrounds)
   - [Module 8 — Transitions & Animations](#module-8--transitions--animations)
   - [Module 9 — Responsive Design](#module-9--responsive-design)
   - [Module 10 — Modals & Overlays](#module-10--modals--overlays)
8. [Common Student Misconceptions](#common-student-misconceptions)
9. [Assessment Ideas](#assessment-ideas)
   - [WJEC A2 Digital Technology — Assessment Pack](#wjec-a2-digital-technology--assessment-pack)
10. [Customising the App](#customising-the-app)
11. [License](#license)

---

## Overview

**CSS Fundamentals** is a purpose-built interactive teaching tool for A Level Web Development students. It replaces static slides with live, hands-on exploration: students drag sliders, toggle properties, and watch both the visual output and the generated CSS code update in real time.

The application is designed to be used:
- **In class** as a teacher-led demonstration tool projected onto a board
- **Independently** by students as a self-study reference and sandbox
- **As a homework resource** accessible via any modern browser

---

## Features

- **10 progressive modules** covering the core CSS curriculum from box model to responsive design
- **Interactive playgrounds** — every key concept has a live visual demo with controls
- **Live code generation** — the CSS produced by each playground is shown in syntax-highlighted code blocks so students immediately see the relationship between properties and values
- **Progress bar** tracking movement through the 10 modules
- **Lazy-loaded modules** for fast initial load
- **No backend** — runs entirely in the browser, deployable to any static host

---

## Module List

| # | Module | Key Concepts |
|---|--------|-------------|
| 1 | Box Model | content, padding, border, margin, box-sizing, margin collapse |
| 2 | Display & Flow | block, inline, inline-block, display: none vs visibility: hidden |
| 3 | Positioning | static, relative, absolute, fixed, sticky, z-index, stacking context |
| 4 | Flexbox | flex container, flex items, justify-content, align-items, flex-grow/shrink/basis |
| 5 | CSS Grid | grid tracks, fr unit, grid-template, spanning, auto-fit vs auto-fill |
| 6 | Typography | font-family stacks, font-size units, line-height, letter-spacing, text properties |
| 7 | Colours & Backgrounds | named, hex, rgb, hsl, oklch, gradients, currentColor |
| 8 | Transitions & Animations | transition properties, timing functions, @keyframes, animation properties |
| 9 | Responsive Design | viewport units, clamp(), media queries, container queries |
| 10 | Modals & Overlays | fixed positioning, z-index, backdrop-filter, animation, `<dialog>` element |
| 11 | Confidence Check-in | self-assessment slider per topic, no CSS marking involved |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | Component framework |
| Vite 8 | Build tool and dev server |
| react-syntax-highlighter | Code block rendering |
| CSS custom properties | Theming and design tokens |

No TypeScript, no routing library, no state management library. The simplicity is intentional — this is a teaching resource and the codebase itself should be easy for students to read.

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Install and run

```bash
# Clone or download the repository
cd css

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for deployment

```bash
npm run build
```

The `dist/` folder can be deployed to any static host (Netlify, GitHub Pages, college web server, etc.).

### Lint

```bash
npm run lint
```

---

## Project Structure

```
css/
├── public/                     # Static assets served as-is
│   ├── favicon.svg
│   ├── exeter-college-black-text.svg
│   └── exeter_logo.svg
├── src/
│   ├── App.jsx                 # Root component; module registry and tab navigation
│   ├── App.css                 # App-level layout styles
│   ├── index.css               # Global styles and CSS custom properties
│   ├── main.jsx                # React entry point
│   ├── components/
│   │   ├── Playground.jsx      # Reusable playground wrapper (controls + preview + code)
│   │   ├── CodeBlock.jsx       # Syntax-highlighted code display
│   │   ├── Slider.jsx          # Labelled range input control
│   │   ├── Select.jsx          # Labelled dropdown control
│   │   ├── Toggle.jsx          # Button-group toggle control
│   │   └── CMFloatAd.jsx       # Floating course brand element
│   └── modules/
│       ├── BoxModel/index.jsx
│       ├── DisplayFlow/index.jsx
│       ├── Positioning/index.jsx
│       ├── Flexbox/index.jsx
│       ├── Grid/index.jsx
│       ├── Typography/index.jsx
│       ├── Colors/index.jsx
│       ├── Transitions/index.jsx
│       ├── Responsive/index.jsx
│       └── Modals/index.jsx
├── index.html
├── package.json
└── vite.config.js
```

### Key architectural decisions

**`Playground` component** — the shared container for all interactive demos. It accepts:
- `title` — the heading for the demo panel
- `code` — a string of CSS (generated by the module's state) rendered in a code block
- `controls` — the React node containing sliders, toggles, etc.
- `children` — the live visual preview
- `minHeight` — minimum preview height

Every module generates its `code` string dynamically as a template literal from its React state, so the code block always matches exactly what the preview is showing.

**Lazy loading** — all ten modules are loaded with `React.lazy()` and wrapped in `Suspense`. This keeps the initial bundle small and avoids loading code for modules the student hasn't reached yet.

---

## Teaching Notes

### How to Use This App in the Classroom

#### As a demonstration tool (teacher-led)

1. Open the app full-screen on the projector
2. Navigate to the module you are teaching
3. Read the introductory text with students, then move to the interactive playground
4. Manipulate controls live while narrating what each property does
5. Draw attention to the code block — ask students to predict what value will change before you move a slider
6. Use the progression bar as a course roadmap — show students where they are in the curriculum

#### As a self-directed activity

1. Direct students to open the app individually (shared link, local server, or USB deploy)
2. Set a structured exploration task per module (see [Assessment Ideas](#assessment-ideas))
3. Require students to record the CSS code from specific playground configurations in their notes
4. Ask them to replicate an effect in a separate HTML file to consolidate learning

#### As a homework reference

The app works offline once the build is deployed to a static host. Share the URL for students to explore at home. The code blocks mean every playground configuration produces copyable, working CSS.

---

### Module 1 — The Box Model

**Learning objective:** Students understand that every element is a rectangular box with four layers, and can predict how box dimensions are calculated.

**Time allocation:** 45–60 minutes

#### Key concepts to emphasise

- The four layers — **content → padding → border → margin** — are always present even when set to zero
- **Margin is not part of the element.** It cannot receive a background colour. This is a frequent source of confusion when students try to colour the space between elements
- `box-sizing: border-box` is the single most impactful CSS reset. Demonstrate `content-box` vs `border-box` using the playground's Total Width display
- **Margin collapse** is unintuitive — show that two adjacent margins do not add; only the larger survives

#### Classroom walkthrough

1. Ask students: "If I set `width: 200px`, how wide is the element?" — accept answers, then reveal that it depends on `box-sizing`
2. Open the playground. With `content-box` selected, drag padding up. Watch Total Width increase
3. Switch to `border-box`. Drag padding again — Total Width stays at 180px. Ask: "Where did the extra space go?"
4. Reset padding, increase margin. Discuss: why doesn't the margin appear in Total Width?

#### Discussion prompts

- "When would `content-box` ever be the right choice?" (Almost never in modern development — legacy only)
- "Two paragraphs both have `margin-bottom: 32px` and `margin-top: 16px`. What is the gap between them?"

#### Common pitfalls

- Students set `margin: auto` expecting vertical centring — remind them it only works horizontally on block elements with a defined width (or in flex/grid)
- Students confuse `padding` and `margin` — a useful mnemonic: **P**adding is inside your **P**ocket, **M**argin is the **M**oat outside

---

### Module 2 — Display & Flow

**Learning objective:** Students understand normal document flow and can choose the correct `display` value for a layout requirement.

**Time allocation:** 30–45 minutes

#### Key concepts to emphasise

- **Normal flow is the default** — the browser lays out elements before any CSS runs. Block elements stack; inline elements flow like text
- `inline` elements ignore `width` and `height` — this surprises students who try to size a `<span>`
- `inline-block` is the hybrid: flows with text but respects box dimensions
- `display: none` removes from both visual display and accessibility tree; `visibility: hidden` preserves space

#### Classroom walkthrough

1. Show the playground with `block` selected — three coloured boxes stacking vertically
2. Switch to `inline` — watch the width slider become irrelevant, items collapse to their label width
3. Switch to `inline-block` — items flow side by side but the sliders work again
4. Discuss the accessibility note about `display: none`

#### Discussion prompts

- "You want a navigation bar where links sit side by side. Which display values could you use?"
- "A `<div>` and a `<span>` contain the same text. What is different about how they lay out by default?"

#### Extension: flow roots

For more advanced students: mention that `display: flow-root` creates a **block formatting context**, preventing margin collapse and containing floats. This is rarely needed but demonstrates that CSS display has more depth than three values.

---

### Module 3 — Positioning

**Learning objective:** Students can identify which position value to use for a given layout requirement and understand the containing block concept.

**Time allocation:** 45–60 minutes

#### Key concepts to emphasise

- `static` is the default — `top`/`left` do nothing to static elements
- `relative` offsets from the element's own normal-flow position, **but the space is preserved** (ghost space)
- `absolute` removes the element from flow and positions it relative to the nearest **non-static** ancestor
- `fixed` positions relative to the viewport — essential for sticky headers and modals
- `sticky` is a hybrid — behaves `relative` until a scroll threshold, then sticks

#### Classroom walkthrough

1. Start with `relative` — drag the top/left sliders. Draw attention to the ghost space left behind
2. Switch to `absolute` — the ghost space collapses. The box now refers to the parent container
3. Switch to `fixed` — note the app's preview clips it (the element would escape to the browser chrome in a real page)
4. Explain the containing block: "absolute looks for the nearest positioned ancestor; if none, it uses `<html>`"

#### Sticky gotchas to cover

`position: sticky` breaks if:
- No `top` (or `bottom`) is defined
- The parent is too short to scroll through
- Any ancestor has `overflow: hidden`

These are extremely common bugs — worth spending time on.

#### Discussion prompts

- "You want a 'Back to top' button that always appears in the bottom-right corner, even as the user scrolls. Which position value?"
- "A tooltip must appear directly above its trigger button, wherever on the page that button is. How would you structure the HTML and CSS?"

---

### Module 4 — Flexbox

**Learning objective:** Students can use the Flexbox model to build one-dimensional layouts with controlled alignment and distribution.

**Time allocation:** 60–90 minutes

#### Key concepts to emphasise

- Flex properties are split: **container** properties control all children; **item** properties let individual children override
- The **main axis** (direction) vs **cross axis** — `justify-content` acts on the main axis; `align-items` on the cross axis
- `flex-grow: 1` means "take a share of available space", not "be 100% wide"
- The `flex` shorthand (`flex: 1`, `flex: auto`, `flex: none`) is strongly preferred over setting the three sub-properties individually

#### Classroom walkthrough — container properties

1. Start with `flex-direction: row` and `justify-content: flex-start` — the default
2. Change `justify-content` through all values — `space-between` and `space-evenly` are the most visually striking
3. Change `align-items` — use `stretch` vs `center` to show cross-axis alignment
4. Enable `flex-wrap` — add items until they wrap; discuss the difference from grid

#### Classroom walkthrough — item properties

1. Click item 1, set `flex-grow: 1` — it expands to fill remaining space
2. Click item 2, set `flex-grow: 2` — now item 2 gets twice the spare space as item 1
3. Set `flex-basis: 120px` on an item — its starting size changes before grow/shrink applies

#### Discussion prompts

- "You want three equal-width cards in a row, filling the container. What flex properties?"
- "You want a navigation bar: logo on the left, links grouped on the right. Flex approach?"

#### Flexbox vs Grid — when to choose

A useful heuristic to teach:
- **Flexbox** — layout in one direction, content drives size
- **Grid** — layout in two dimensions, or you want explicit cell placement

---

### Module 5 — CSS Grid

**Learning objective:** Students can create two-dimensional page layouts using CSS Grid and understand track sizing, spanning, and responsive grid patterns.

**Time allocation:** 60–90 minutes

#### Key concepts to emphasise

- Grid is **two-dimensional** — you define both rows and columns simultaneously
- The `fr` unit divides **available space after fixed tracks are placed** — not the total container
- `minmax(min, max)` is essential for responsive grids
- `auto-fit` vs `auto-fill` only differs when items don't fill the row

#### Classroom walkthrough

1. Start with the preset **3-col equal** (`repeat(3, 1fr)`) — a classic equal-column layout
2. Switch to **2-col + aside** (`2fr 1fr`) — introduce fractional proportions
3. Switch to **Holy Grail** (`200px 1fr 200px`) — fixed sidebars with flexible centre
4. Switch to **auto-fit** — resize the item count slider to show how columns automatically adjust
5. Open the spanning demo — explain grid line numbers and the `1 / -1` shorthand for full-width items

#### Explaining the `fr` unit

A common confusion: students think `1fr` means "100% of the container." Use this example:

```
grid-template-columns: 200px 1fr 1fr;
/* Container: 800px total. Fixed: 200px. Remaining: 600px. Each fr: 300px */
```

The playground's preset switcher makes this easy to demonstrate live.

#### Discussion prompts

- "When would you choose Grid over Flexbox for a page layout?"
- "How would you make a photo gallery where images are different sizes but always fill the available width?"

---

### Module 6 — Typography

**Learning objective:** Students can control all aspects of text appearance using CSS and understand why relative units are preferred for font sizing.

**Time allocation:** 45 minutes

#### Key concepts to emphasise

- The **font stack** is a priority list — always end with a generic family (`serif`, `sans-serif`, `monospace`)
- **Unitless line-height** (e.g., `1.6`) is a multiplier of the element's own font-size; it inherits correctly. A pixel value does not
- `rem` is the correct unit for accessible font sizing in production — it respects the user's browser font size preference; `px` overrides it
- `clamp()` enables fluid type without media queries (covered more deeply in Module 9)

#### Classroom walkthrough

1. Open the playground — drag font-size and watch the code block update
2. Change font-family through the presets — demonstrate serif vs sans-serif legibility
3. Drop line-height below 1.0 — show how text becomes unreadable; optimal is 1.5–1.7 for body
4. Drag letter-spacing into negative values — discuss when negative tracking is appropriate (display headings only)

#### Relative units comparison table

| Unit | Relative to | Best for |
|------|------------|---------|
| `px` | Nothing | Borders, shadows (not type) |
| `em` | Parent font-size | Padding/margin relative to text size |
| `rem` | Root (`html`) font-size | Font sizes — consistent, accessible |
| `clamp()` | Viewport width + fixed bounds | Responsive headings |

#### Discussion prompts

- "A user has set their browser's default font size to 20px for accessibility reasons. Which unit respects that preference?"
- "Why is `line-height: 1.6` better than `line-height: 24px`?"

---

### Module 7 — Colours & Backgrounds

**Learning objective:** Students understand the main CSS colour formats and can create gradients.

**Time allocation:** 45 minutes

#### Key concepts to emphasise

- There are five main formats: **named**, **hex**, **RGB/RGBA**, **HSL/HSLA**, **oklch**
- **HSL is the most human-readable** — designers think in hue, saturation, and lightness
- Gradients are **generated images** used in the `background` property, not the `color` property
- `currentColor` is a powerful keyword for keeping icon and border colours in sync with text

#### Classroom walkthrough

1. Open the HSL mixer — drag Hue across the full 0–360 range to show the colour wheel
2. Set Saturation to 0 — all greys. Return to ~70% — vivid. This is a useful rule for accessible design: body text `hsl(X, 0%, 15%)`, accents at `hsl(X, 70%, 55%)`
3. Open the gradient builder — switch between linear, radial, and conic. Add a third colour stop

#### Colour accessibility note

When teaching this module, it is worth briefly introducing **contrast ratio** (WCAG AA requires 4.5:1 for normal text). Use the lightness slider to demonstrate that low-lightness on low-lightness backgrounds or high-lightness on high-lightness backgrounds fails accessibility checks. Tools like the browser DevTools colour picker show contrast ratios.

#### Discussion prompts

- "A developer writes `color: rgb(108, 71, 255)`. A designer writes `hsl(258, 70%, 64%)`. Are these likely the same colour?"
- "You want an SVG icon to automatically match the text colour of its container when the theme changes. Which CSS keyword?"

---

### Module 8 — Transitions & Animations

**Learning objective:** Students can apply CSS transitions and keyframe animations and understand the performance implications of different animated properties.

**Time allocation:** 60 minutes

#### Key concepts to emphasise

- **Transitions** interpolate between two states triggered by a state change (e.g., `:hover`). They need a start and an end state
- **Animations** run on an independent timeline with full keyframe control — no trigger required
- **Only `transform` and `opacity` are cheap to animate** (GPU compositor). Animating `width`, `height`, `top`, `left` causes layout recalculation on every frame

#### Classroom walkthrough — transitions

1. Hover the demo box — show the transition from square to circle, purple to red
2. Set duration to 0ms — snaps instantly. Set to 2000ms — very slow. Discuss ideal ranges (150–400ms for UI)
3. Switch timing functions — `ease-out` vs `ease-in`. Ask which feels more natural for a button press
4. Change `transition-property` from `all` to `background` — only colour transitions; shape snaps

#### Classroom walkthrough — animations

1. Cycle through presets — bounce, spin, pulse, fadeIn, shake, wave
2. Toggle infinite vs 1 iteration — discuss use cases
3. Use the Pause/Resume button — demonstrate `animation-play-state`
4. Look at the keyframe code block — explain percentage stops as "points in time"

#### Performance rule summary

```css
/* Fast — compositor, no layout reflow */
transform: translate(), scale(), rotate()
opacity

/* Slow — triggers layout reflow */
width, height, top, left, margin, padding
```

#### Discussion prompts

- "You want to animate a card sliding in from off-screen. `margin-left: -300px` → `margin-left: 0` or `transform: translateX(-300px)` → `transform: translateX(0)` — which is better and why?"
- "A loading spinner rotates forever. Which animation iteration count?"

---

### Module 9 — Responsive Design

**Learning objective:** Students can build layouts that adapt to different screen sizes using viewport units, `clamp()`, and media queries.

**Time allocation:** 60 minutes

#### Key concepts to emphasise

- **Mobile-first** means writing base styles for small screens, then overriding for larger screens with `min-width` queries — not writing desktop styles and patching mobile
- `clamp(min, preferred, max)` eliminates breakpoints for fluid sizing
- **Container queries** (`@container`) are the modern evolution of media queries — components respond to their parent's size, not the viewport
- `dvh` (dynamic viewport height) solves the mobile browser chrome problem that `100vh` has

#### Classroom walkthrough

1. Open the viewport unit explorer — drag the width slider. Watch the 50vw marker update live
2. Open the clamp explorer — set min to 14px, pref to 2.5vw, max to 36px. Drag the simulated viewport width. Point to the graph — explain the three regions (clamped at min, fluid middle, clamped at max)
3. Read the media query code block together — point out mobile-first ordering
4. Discuss `prefers-reduced-motion` — link to accessibility

#### Mobile-first argument

The mobile-first approach forces you to prioritise content. A page with only base styles (no media queries applied) should still be usable on a phone. Adding breakpoints then progressively enhances the experience. Desktop-first approaches tend to produce overridden styles and specificity battles.

#### Discussion prompts

- "A site has `font-size: clamp(16px, 2vw, 24px)`. At what viewport width does the font size stop being fluid?"
- "When would you use a container query instead of a media query?"

---

### Module 10 — Modals & Overlays

**Learning objective:** Students can build a production-quality modal component by combining fixed positioning, z-index, backdrop effects, and CSS animation.

**Time allocation:** 45–60 minutes

This module is explicitly a synthesis module — every property used comes from earlier modules.

#### Key concepts to emphasise

- A modal requires **two layers**: the overlay (covers everything) and the modal box (centred in the overlay)
- `position: fixed; inset: 0` is the cleanest way to make a full-viewport overlay
- `backdrop-filter: blur()` requires the overlay to have a non-opaque background (even `#00000001` works)
- The native `<dialog>` element is the **accessible first choice** for production — it handles focus trapping, Escape key, and screen readers automatically

#### Classroom walkthrough

1. Open the playground — adjust backdrop blur slider. Toggle it between 0 and 12px
2. Lower overlay opacity. Explain that `backdrop-filter` has no visible effect at opacity 0
3. Switch animation presets — compare scale, slide, fade, bounce. Ask which feels most appropriate for a "serious" app vs a playful one
4. Click "Open Modal" — click the overlay to dismiss (click-outside pattern). Discuss UX: should all modals close on overlay click?
5. Read the code block — trace through each property's role

#### Accessibility imperative

Always mention the `<dialog>` element when teaching modals. A `<div>` modal requires:
- `role="dialog"` and `aria-modal="true"` attributes
- Manual focus trapping with JavaScript
- Manual Escape key handling
- Manual `aria-labelledby` wiring

`<dialog>` provides all of this for free. The extra CSS work to style it is trivial.

#### Discussion prompts

- "A user opens a modal on a very long page. They can scroll the background content. Which CSS property on `<body>` fixes this?"
- "You have a modal inside a container with `transform: scale(0.9)`. The modal's `position: fixed` overlay doesn't cover the full screen. Why?" (This is the stacking context trap — `transform` creates a new stacking context that contains `fixed` elements.)

---

## Common Student Misconceptions

| Misconception | Correction |
|---------------|-----------|
| "I set `width: 200px` but my element is 240px wide" | `box-sizing: content-box` adds padding and border on top. Use `border-box` |
| "Margin and padding do the same thing" | Margin is outside the element (no background), padding is inside |
| "`z-index: 9999` will always be on top" | `z-index` is relative within a stacking context. A `z-index: 1` in a higher context beats `z-index: 9999` in a lower one |
| "Flexbox and Grid are the same" | Flexbox is one-dimensional; Grid is two-dimensional |
| "`inline` and `inline-block` are the same" | `inline` ignores `width`/`height`; `inline-block` respects them |
| "`position: sticky` isn't working" | Check: `top` value defined? Parent tall enough? No `overflow: hidden` on ancestor? |
| "I can use `height: 100%` anywhere" | `%` height requires the parent to have an explicit height. Use `100vh` for viewport height |
| "`px` font sizes are fine for accessibility" | `px` overrides the user's browser font size preference; use `rem` |

---

## Assessment Ideas

### WJEC A2 Digital Technology — Assessment Pack

This app is also used to support **WJEC Digital Technology (A level), Unit 4: Digital Solutions** — the 45-hour, 30%-weighted NEA in which students design, build, test and present a transactional website.

The [`assessment/`](assessment/README.md) folder contains a structured, classroom-ready pack aligned to Unit 4 of the WJEC specification:

- **6 tasks** ([`assessment/tasks/`](assessment/tasks)) spanning design & usability, accessible semantic HTML/CSS, data capture & validation, multi-item transaction data modelling (ERD/3NF/SQL), integration/maintainability, and testing/refinement/justification — mixing core and stretch/challenge difficulty, each sized for a single lesson or double lesson
- **A matching mark scheme for every task** ([`assessment/mark-schemes/`](assessment/mark-schemes)) — formative classroom rubrics with indicative mark bands, mapped to AO2 (investigate/analyse/evaluate) and AO3 (plan/design/create/develop)
- **An exemplars library** ([`assessment/exemplars/`](assessment/exemplars/README.md)) — empty by default, designed to be filled with anonymised student work across future cohorts

Start at [`assessment/README.md`](assessment/README.md) for the full overview, task index and how the folder scales year on year.

A [printable Confidence Check-in](assessment/confidence-checkin.md) self-assessment sheet is also included — matching the interactive **Module 11 — Confidence Check-in** built into the app — useful as a before/after starter and plenary either side of the six tasks.

### Formative — in-class exploration tasks

**Module 1 — Box Model challenge**
> Using the playground, find the combination of padding and border-width where `content-box` and `border-box` produce the same total element width. (Answer: both 0.)

**Module 4 — Flexbox layout challenge**
> Configure the Flexbox playground to produce a horizontal row of items with the first item pushed to the left and all remaining items grouped to the right. Record the CSS.

**Module 5 — Grid layout challenge**
> Use the Grid playground to recreate a standard "blog layout": a wide main column (roughly 2/3 width) and a narrower sidebar (1/3 width). Record the `grid-template-columns` value.

**Module 8 — Animation audit**
> List three properties from the transition playground that are "expensive" to animate (trigger layout) and explain an alternative for each.

### Summative — mini-project ideas

1. **Portfolio card component** — build a responsive card using Flexbox or Grid, with hover transition and typographic hierarchy using `rem` units
2. **Navigation bar** — sticky header, logo left, links right (Flexbox), with a hamburger menu (Positioning + Transitions)
3. **Pricing table** — CSS Grid layout, colour-coded columns, hover effects, responsive breakpoints
4. **Animated loading screen** — full-viewport fixed overlay (Modal pattern) with a keyframe animation

---

## Customising the App

### Adding a module

1. Create `src/modules/YourModule/index.jsx`
2. Export a default React component following the same structure:
   ```jsx
   export default function YourModule() {
     return (
       <div className="module">
         <div className="module-header">
           <span className="module-badge">Module N</span>
           <h1 className="module-title">Title</h1>
           <p className="module-intro">Introduction text.</p>
         </div>
         {/* sections */}
       </div>
     )
   }
   ```
3. Register it in `src/App.jsx`:
   ```js
   const YourModule = lazy(() => import('./modules/YourModule'))
   // Add to MODULES array:
   { id: 'your-module', label: 'N. Your Module', component: YourModule }
   ```

### Changing the colour scheme

All colours are CSS custom properties in `src/index.css`:

```css
:root {
  --primary: #6c47ff;       /* accent colour */
  --primary-dark: #5535d4;  /* darker accent */
  --primary-light: #ede8ff; /* light tint */
  --bg: #f5f4fb;            /* page background */
  --surface: #ffffff;       /* card background */
  --text: #1a1523;          /* body text */
  --text-muted: #6b6680;    /* secondary text */
  --border: #e2dff5;        /* border colour */
}
```

Change `--primary` to rebrand for a different institution or course theme.

### Replacing the course icon

Replace `public/favicon.svg` with your own course icon. It is used in both the page header and browser tab.

---

## License

Designed by Adam Masters. Course materials based on CSS Fundamentals by Simon Rundell / Exeter College.

Original course material copyright © 2025 Simon Rundell / Exeter College.

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

Under the following terms:
- **Attribution** — give appropriate credit, provide a link to the licence, and indicate if changes were made
- **NonCommercial** — you may not use the material for commercial purposes
- **ShareAlike** — if you remix or transform this material, you must distribute your contributions under the same licence

[![CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
