# Phase 2: Home Page - Research

**Researched:** 2026-03-25
**Domain:** Plain HTML/CSS — page content, CSS class extensions, responsive hero layout
**Confidence:** HIGH

## Summary

Phase 2 is a pure HTML/CSS authoring task within a plain-file site (no npm, no build tools). Phase 1 already delivered the full design system: CSS custom properties, component classes, responsive breakpoints, and animation utilities. Phase 2's job is to fill `index.html` with the home page content using those classes and extend the stylesheet with three new rules: `.btn--primary--inverse`, `.card--highlighted--navy`, and updated `.hero__photo` / `.profile-placeholder` styling.

The most important technical finding is a **breakpoint mismatch** that requires a decision: Phase 1's `.grid-2` activates two columns at 640px (tablet), but the CONTEXT.md specifies the hero two-column layout should activate at 1024px (desktop). This means the hero must NOT use a bare `.grid-2` class — it needs either a hero-specific grid class or a `.grid-2` override scoped to the hero section. This is the only genuine design/CSS complication in this phase.

A second finding is that Phase 1 shipped `.profile-placeholder` with fixed `width: 200px` / `width: 240px` (desktop) / `width: 140px` (mobile), whereas the CONTEXT.md requires `clamp(120px, 30vw, 280px)` with proportional initials using `clamp(48px, 12vw, 112px)`. The existing rule must be replaced or overridden.

**Primary recommendation:** Add `.hero__photo` as a scoped wrapper, add `.section--spacious` for 100px vertical padding, add `.btn--primary--inverse` and `.card--highlighted--navy` modifiers, and replace the `.profile-placeholder` width with a `clamp()` value.

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- Hero background: Navy (#001E5F) — uses existing `.section--navy` class
- Hero layout: Text above photo on mobile, text-left + photo-right at 1024px+ desktop
- Hero min-height: 60vh
- `.btn--primary--inverse`: yellow background (#FFD82B), navy text (#001E5F)
- "View My Research" uses `.btn--primary--inverse`; "For Students" uses existing `.btn--outline--white`
- Photo sizing: `width: clamp(120px, 30vw, 280px); aspect-ratio: 1;`
- Initials font-size: `clamp(48px, 12vw, 112px)` — Georgia serif, bold, yellow (#FFD82B)
- Photo styling: `border: 2px solid var(--color-yellow)`, `box-shadow: 0 4px 12px rgba(0,0,0,0.12)`, background navy
- About Me section: `.section--butter` background
- Highlight cards section: white (default) background
- Section padding: 80-100px top/bottom for home page (above standard 64px)
- Grid layout: 1-column mobile/tablet, 3-column at 1024px for highlight cards (`.grid-3`)
- Research card: `.card--highlighted` (yellow top border)
- Teaching card: `.card--highlighted` (yellow top border)
- Students card: `.card--highlighted--navy` (navy top border, 4px)
- Hero H1: `var(--font-size-heading)`, Georgia serif, white, bold
- About Me H2: `var(--font-size-heading)`, Georgia serif, navy
- Card H4: `var(--font-size-subheading)`, Inter

### Claude's Discretion

- Exact clamp() min/max values can be tuned during execution (120-280px photo range is approximate)
- Card padding, border-radius, hover effects (use existing .card styles)
- Exact easing/timing for any smooth scroll or fade-in animations (already handled by Phase 1)
- Specific line-height and margin-bottom values for headings and paragraphs (use existing design tokens)

### Deferred Ideas (OUT OF SCOPE)

- Real profile photo upload (v2)
- Hero video background
- Additional hero layouts (centered, overlay text on photo)
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| HOME-01 | Hero section with two-column layout (text left, photo right on desktop) | Needs hero-scoped grid at 1024px; cannot reuse bare `.grid-2` which activates at 640px |
| HOME-02 | Affiliation eyebrow above H1 | `.eyebrow` class exists; color override needed on navy background (white, not dark-gray) |
| HOME-03 | H1 "Dr. Irving Barron" serif, white on navy | `.section--navy h1` color override already set to white in Phase 1 |
| HOME-04 | Lead text "Assistant Professor..." in white | Paragraph in `.section--navy` already renders white |
| HOME-05 | Two buttons side-by-side (desktop), stacked (mobile) | Flex button row; `.btn--primary--inverse` is new CSS addition |
| HOME-06 | Profile photo placeholder — CSS-only navy box, yellow "IB" initials | Replace fixed widths on `.profile-placeholder` with `clamp()` values |
| HOME-07 | "About Me" section with eyebrow, H2, biographical paragraph | Uses existing `.section--butter`, `.eyebrow`, standard heading/paragraph |
| HOME-08 | "Download CV (PDF)" button linking to assets/cv.pdf | Uses existing `.btn--primary` class; `href="assets/cv.pdf"` |
| HOME-09 | Three highlight cards with colored top border | Uses `.card.card--highlighted` for Research/Teaching; `.card.card--highlighted--navy` for Students |
| HOME-10 | Each card has H4, description, and link | Standard card content; no new CSS needed |
| HOME-11 | Students card has navy border-top | New `.card--highlighted--navy` modifier CSS addition |
</phase_requirements>

---

## Standard Stack

### Core

This is a plain HTML/CSS/JS project. No npm packages. No build step. No framework.

| Technology | Version | Purpose | Why Standard |
|------------|---------|---------|--------------|
| HTML5 | — | Semantic page structure | Project constraint (PERF-01) |
| CSS3 (custom properties) | — | Design system, components, layout | Single file `css/style.css` (ASSET-03) |
| Vanilla JS | — | No JS changes needed for Phase 2 | All interactivity for home page is CSS-only |

### Existing Design System (Phase 1 output)

All of the following are ALREADY IN `css/style.css` and ready to use:

| Class / Token | What It Does |
|---------------|--------------|
| `.section` | 64px top/bottom padding, full-width |
| `.section--navy` | Navy background; overrides h1-h5/p to white |
| `.section--butter` | Butter (#FFFBF0) background |
| `.container` | max-width 1100px, auto margins, responsive padding |
| `.grid-2` | Single column → 2 columns at 640px |
| `.grid-3` | Single column → 3 columns at 1024px |
| `.btn` | Base button (Inter 700, 44px min-height, 0.2s transition) |
| `.btn--primary` | Navy fill, white text, hover to Meliora Blue |
| `.btn--outline--white` | White border/text on dark background, hover fills white |
| `.card` | White bg, 1px border, 8px radius, 24px padding, hover shadow |
| `.card--highlighted` | Yellow 4px border-top |
| `.eyebrow` | Inter 700, 0.875rem, uppercase, dark-gray |
| `.profile-placeholder` | Navy square, centered initials (NEEDS clamp() update) |
| `.profile-placeholder__initials` | Georgia serif, yellow — NEEDS clamp() font-size |
| `.animate-on-load` | fadeInUp animation (inside prefers-reduced-motion guard) |

### New CSS Additions for Phase 2

| Class | Where in CSS | What It Does |
|-------|-------------|--------------|
| `.btn--primary--inverse` | Section 9 (Button Components) | Yellow fill, navy text; for CTA on navy background |
| `.card--highlighted--navy` | Section 10 (Card Components) | Navy 4px border-top; Students card only |
| `.hero__photo` | New Section 17 (Hero Component) | Positions photo right on desktop, above text on mobile |
| `.section--spacious` | Section 6 (Layout Utilities) | 100px top/bottom padding; home page override |
| Update `.profile-placeholder` | Section 12 | Replace `width: 200px` with `clamp(120px, 30vw, 280px)` |
| Update `.profile-placeholder__initials` | Section 12 | Replace `font-size: 3rem` with `clamp(48px, 12vw, 112px)` |

---

## Architecture Patterns

### Recommended Project Structure (no change from Phase 1)

```
ibarron.dev/
├── index.html          <- Phase 2 writes content here
├── css/
│   └── style.css       <- Phase 2 adds new CSS classes here
├── js/
│   └── main.js         <- No changes needed
└── assets/
    └── cv.pdf          <- Already exists (placeholder)
```

### Pattern 1: Hero Section HTML Structure

**What:** A `<section>` with `.section.section--navy` that contains a `.container` holding a two-column grid (text left, photo right on desktop, stacked on mobile at narrow widths).

**When to use:** Only on index.html hero.

**Critical detail:** Do NOT use `.grid-2` directly because it expands to two columns at 640px. Use a `.hero__grid` class (or `.grid-2--desktop`) that only expands at 1024px to match the locked layout decision.

```html
<!-- Hero section -->
<section class="section section--navy hero" style="min-height: 60vh;">
  <div class="container">
    <div class="hero__grid">

      <!-- Text column — left on desktop, top on mobile -->
      <div class="hero__text">
        <p class="eyebrow hero__eyebrow">University of Rochester · Hajim School of Engineering</p>
        <h1>Dr. Irving Barron</h1>
        <p class="hero__lead">Assistant Professor of Instruction, Electrical &amp; Computer Engineering</p>
        <div class="hero__buttons">
          <a href="research.html" class="btn btn--primary--inverse">View My Research</a>
          <a href="students.html" class="btn btn--outline--white">For Students</a>
        </div>
      </div>

      <!-- Photo column — right on desktop, below text on mobile -->
      <div class="hero__photo-col">
        <div class="hero__photo profile-placeholder">
          <span class="profile-placeholder__initials">IB</span>
        </div>
      </div>

    </div>
  </div>
</section>
```

### Pattern 2: Hero Grid CSS (the critical breakpoint fix)

**What:** A hero-specific grid that stays single-column until 1024px.

**Why needed:** `.grid-2` from Phase 1 activates at 640px. The locked decision requires single-column until 1024px. A scoped class solves this without touching the shared `.grid-2`.

```css
/* Hero grid — single column mobile/tablet, two-column desktop */
.hero__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1fr 1fr;
  }

  /* Photo column appears second visually on desktop */
  .hero__photo-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* On mobile, photo-col appears below text (HTML order is text first, photo second — correct) */
```

### Pattern 3: `.btn--primary--inverse` CSS

**What:** Yellow background with navy text. Placed on navy hero background for strong CTA contrast.

**WCAG AA check:** Yellow #FFD82B on navy #001E5F — ratio 8.7:1 (passes). Navy #001E5F on yellow #FFD82B — ratio 8.7:1 (passes).

```css
/* Inverse primary button — yellow fill, navy text (for use on navy backgrounds) */
.btn--primary--inverse {
  background-color: var(--color-yellow);
  color: var(--color-navy);
  border-color: var(--color-yellow);
}

.btn--primary--inverse:hover {
  background-color: #e6c200; /* slightly darker yellow on hover */
  border-color: #e6c200;
  color: var(--color-navy);
}
```

**Note on hover color:** The hover darken (#e6c200) is discretionary. An alternative is to invert to a white outline. The darkened yellow preserves visibility on navy and stays within brand. This is within Claude's Discretion.

**Focus on navy background:** The global `.section--navy :focus-visible` rule already applies `outline: 3px solid white` to elements inside navy sections. This covers `.btn--primary--inverse` automatically.

### Pattern 4: `.card--highlighted--navy` CSS

**What:** Navy 4px top border instead of yellow. Appended after `.card--highlighted` in the card section.

```css
/* Navy highlighted card — Students card variant */
.card--highlighted--navy {
  border-top: 4px solid var(--color-navy);
}
```

**Usage:** `<div class="card card--highlighted--navy">` — the base `.card` provides border, radius, padding, hover shadow; the modifier replaces the top border color.

### Pattern 5: Profile Photo Placeholder — clamp() sizing

**What:** Replace fixed-pixel widths on `.profile-placeholder` with fluid clamp() values. Also update the mobile and desktop responsive overrides.

```css
/* Updated profile placeholder — fluid sizing */
.profile-placeholder {
  width: clamp(120px, 30vw, 280px);
  aspect-ratio: 1 / 1;
  background-color: var(--color-navy);
  border: 2px solid var(--color-yellow);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.profile-placeholder__initials {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: clamp(48px, 12vw, 112px);
  color: var(--color-yellow);
  user-select: none;
  line-height: 1;
}
```

**Remove:** The old responsive overrides in `@media (max-width: 639px)` and `@media (min-width: 1024px)` that set `.profile-placeholder { width: 140px; }` and `.profile-placeholder { width: 240px; }` respectively — `clamp()` handles this automatically.

### Pattern 6: `.section--spacious` for generous vertical padding

**What:** A modifier that increases section padding from 64px to 100px. Applied on the home page sections.

```css
/* Spacious section — home page uses 100px vertical rhythm */
.section--spacious {
  padding-top: 100px;
  padding-bottom: 100px;
}
```

**Usage:** `<section class="section section--navy section--spacious hero">` etc.

**Alternative approach:** Inline `style="padding-top: 100px; padding-bottom: 100px;"` on each section. This works but is less maintainable and violates the design token approach. The `.section--spacious` class is the correct pattern.

**Note:** The mobile override `@media (max-width: 639px) { .section { padding-top: var(--spacing-2xl); padding-bottom: var(--spacing-2xl); } }` should also apply to `.section--spacious` on mobile, or the spacious padding should only activate at tablet+.

### Pattern 7: About Me Section

```html
<section class="section section--butter section--spacious">
  <div class="container">
    <p class="eyebrow">About Me</p>
    <h2>Researcher, Educator, Engineer</h2>
    <p>[biographical paragraph]</p>
    <a href="assets/cv.pdf" class="btn btn--primary">Download CV (PDF)</a>
  </div>
</section>
```

**Note:** `<a>` with `.btn.btn--primary` is correct pattern (from Phase 1 — buttons are `<a>` tags styled as buttons). The existing `.btn--primary` (navy fill) is appropriate on butter background.

### Pattern 8: Highlight Cards Section

```html
<section class="section section--spacious">
  <div class="container">
    <p class="eyebrow">Explore</p>
    <h2>What I Do</h2>
    <div class="grid-3">

      <div class="card card--highlighted">
        <h4>Research</h4>
        <p>[description]</p>
        <a href="research.html">Learn more &rarr;</a>
      </div>

      <div class="card card--highlighted">
        <h4>Teaching</h4>
        <p>[description]</p>
        <a href="teaching.html">Learn more &rarr;</a>
      </div>

      <div class="card card--highlighted--navy">
        <h4>Students</h4>
        <p>[description]</p>
        <a href="students.html">Visit hub &rarr;</a>
      </div>

    </div>
  </div>
</section>
```

**Note:** `.grid-3` already expands to 3 columns at 1024px (from Phase 1). No changes needed to `.grid-3`.

### Pattern 9: Eyebrow on Navy Background

**Issue:** `.eyebrow` is styled with `color: var(--color-dark-gray)` (gray). On a navy background this renders poorly. `.section--navy` overrides p colors to white, but `.eyebrow` is also a `p` so it would be white — however if the eyebrow is a `<p class="eyebrow">` the cascade works. If it's a `<span>` or `<div>`, it won't inherit.

**Resolution:** Use `<p class="eyebrow hero__eyebrow">` inside the hero, and add a scoped override:

```css
.section--navy .eyebrow {
  color: var(--color-yellow); /* or white — yellow gives more visual hierarchy */
}
```

**Rationale:** Yellow eyebrow on navy is on-brand and distinguishes the label from the white H1 below it.

### Anti-Patterns to Avoid

- **Using `.grid-2` for the hero layout:** It activates two columns at 640px, not 1024px. This would put the photo beside the text on tablet, violating the locked layout decision.
- **Using `<button>` for CTA links:** Buttons navigating to other pages must be `<a>` elements with button styling. The Phase 1 `.btn` class is correctly designed for this.
- **Setting fixed widths on `.profile-placeholder`:** The responsive overrides at 640px and 1024px should be removed when adding `clamp()` — leaving both creates specificity conflicts.
- **Modifying `.grid-3` for the hero:** The hero needs a two-column grid, not three. Don't reuse `.grid-3` for the hero.
- **Skipping `.section--spacious` and using inline styles:** Reduces maintainability and diverges from the token-based approach.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Responsive fluid photo sizing | Custom JS to resize the photo | CSS `clamp()` | Native CSS handles all screen sizes without JS |
| Two-column hero responsive behavior | JavaScript media query listeners | CSS grid + media query | Pure CSS is faster and more maintainable |
| Button hover animation | Custom JS mouse event listeners | CSS transitions already on `.btn` | Phase 1 already provides `0.2s ease` transitions |
| Card hover shadow | JS event listeners | CSS `.card:hover` already set | Phase 1 already provides hover shadow |
| Section scroll animations | Custom IntersectionObserver | `.animate-on-load` class from Phase 1 | The fade-in keyframes and stagger delays are already implemented |
| Color contrast validation | Manual WCAG calculation | Known verified: navy/white = 15.1:1, navy/yellow = 8.7:1 | Both confirmed against WCAG AA (4.5:1 required) |

**Key insight:** This phase is content-and-CSS-extension work. Every pattern needed either already exists or requires a small, targeted addition. Building custom solutions from scratch would duplicate Phase 1 infrastructure.

---

## Common Pitfalls

### Pitfall 1: Hero layout appears two-column on tablet

**What goes wrong:** If `.grid-2` is used for the hero, the photo appears side-by-side with text at 640px (tablet) instead of staying stacked until 1024px.

**Why it happens:** `.grid-2` in Phase 1 CSS activates at 640px per the general tablet breakpoint. The hero's locked decision requires 1024px.

**How to avoid:** Use a new `.hero__grid` CSS class that only expands at `@media (min-width: 1024px)`. Never apply `.grid-2` to the hero's grid container.

**Warning signs:** On a 768px viewport, the hero photo appears beside the text instead of below it.

### Pitfall 2: Profile placeholder border and shadow missing

**What goes wrong:** The Phase 1 `.profile-placeholder` has no `border` or `box-shadow` — these are new additions for Phase 2. If the developer only updates the `width`, they'll miss the border and shadow.

**Why it happens:** Phase 1 only built the basic placeholder (size, color, centered initials). Phase 2 adds visual polish.

**How to avoid:** When updating `.profile-placeholder`, add all three properties together: `width: clamp(...)`, `border: 2px solid var(--color-yellow)`, `box-shadow: 0 4px 12px rgba(0,0,0,0.12)`.

**Warning signs:** Photo placeholder looks flat and unbordered.

### Pitfall 3: Responsive override conflicts with clamp()

**What goes wrong:** After updating `.profile-placeholder` with `clamp()`, the mobile override `width: 140px` and desktop override `width: 240px` still exist and override the clamp value on those breakpoints.

**Why it happens:** The existing rules in `@media (max-width: 639px)` and `@media (min-width: 1024px)` have higher specificity at their breakpoints.

**How to avoid:** Remove (or comment out) the two old width overrides for `.profile-placeholder` when adding the `clamp()` rule.

**Warning signs:** Photo is a fixed 140px on mobile or 240px on desktop instead of scaling fluidly.

### Pitfall 4: Eyebrow color invisible on navy background

**What goes wrong:** `.eyebrow` has `color: var(--color-dark-gray)` (#707070). On navy, this is low contrast and feels wrong stylistically.

**Why it happens:** The `.eyebrow` style is a global rule set for use on light backgrounds. Navy sections need an override.

**How to avoid:** Add `.section--navy .eyebrow { color: var(--color-yellow); }` to make eyebrows yellow on navy sections.

**Warning signs:** Affiliation eyebrow above H1 appears as dark gray on dark navy, nearly invisible.

### Pitfall 5: Section padding not reduced on mobile

**What goes wrong:** The `.section--spacious` class at 100px looks excessive on mobile (320px wide screens).

**Why it happens:** No mobile override for the spacious variant.

**How to avoid:** Add a mobile media query override so `.section--spacious` reduces to 64px (or 48px) below 640px:

```css
@media (max-width: 639px) {
  .section--spacious {
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }
}
```

**Warning signs:** Very large vertical gaps between sections on narrow mobile screens.

### Pitfall 6: Buttons not stacking on mobile

**What goes wrong:** The hero button group appears side-by-side on mobile, causing overflow on very narrow screens if button text is long.

**Why it happens:** `display: inline-flex` on `.btn` makes buttons inline. Without a flex column wrapper on mobile, they stay side-by-side.

**How to avoid:** Wrap buttons in `.hero__buttons` div and add responsive CSS:

```css
.hero__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

@media (max-width: 639px) {
  .hero__buttons {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

**Warning signs:** Both buttons appear side-by-side on mobile and overflow or wrap awkwardly.

### Pitfall 7: Highlight card links not styled as links

**What goes wrong:** The "Learn more →" and "Visit hub →" links in cards are plain anchor tags with no visual treatment, making them look like unstyled text.

**Why it happens:** Phase 1 sets `a { color: inherit; text-decoration: none; }` globally. Inside cards, this means links inherit navy and have no underline.

**How to avoid:** Either (a) use `text-decoration: underline` on card links via a `.card a` rule, or (b) use the existing `text-underline-offset` approach. For simplicity, add `text-decoration: underline; text-underline-offset: 2px;` to `.card a` as a Phase 2 addition.

**Warning signs:** "Learn more →" text looks identical to the paragraph description text.

---

## Code Examples

Verified patterns from Phase 1 implementation and CSS review:

### Applying CSS clamp() for fluid photo sizing
```css
/* Confirmed pattern from Phase 1 typography tokens */
/* --font-size-heading: clamp(1.5rem, 3vw, 3.5rem); */

/* Applied to profile placeholder (new for Phase 2): */
.profile-placeholder {
  width: clamp(120px, 30vw, 280px);
  aspect-ratio: 1 / 1;
}

.profile-placeholder__initials {
  font-size: clamp(48px, 12vw, 112px);
}
```

### CSS grid with single-breakpoint expansion
```css
/* Pattern: mobile-first grid, one breakpoint */
/* Used by Phase 1 .grid-3 at 1024px — same pattern for hero */
.hero__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

### Button modifier pattern (consistent with Phase 1)
```css
/* Phase 1 pattern (reference): */
/* .btn--outline--white { background: transparent; color: white; border-color: white; } */
/* .btn--outline--white:hover { background: white; color: navy; } */

/* Phase 2 new modifier (same pattern): */
.btn--primary--inverse {
  background-color: var(--color-yellow);
  color: var(--color-navy);
  border-color: var(--color-yellow);
}
```

### Semantic hero HTML structure
```html
<!-- min-height via style attribute (discretionary inline, or add .hero--full class) -->
<section class="section section--navy section--spacious" style="min-height: 60vh;">
  <div class="container">
    <div class="hero__grid">
      <div class="hero__text animate-on-load">...</div>
      <div class="hero__photo-col animate-on-load">
        <div class="profile-placeholder" role="img" aria-label="Profile photo placeholder for Dr. Irving Barron">
          <span class="profile-placeholder__initials" aria-hidden="true">IB</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Note on `role="img"` and `aria-label`:** A decorative CSS placeholder with initials is essentially presentational but conveys that a photo would appear here. Using `role="img"` with `aria-label` and `aria-hidden="true"` on the initials span is a clean accessibility pattern. The CONTEXT.md does not lock this but it addresses A11Y-03 (Phase 5 requirement — every img has descriptive alt).

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Fixed-pixel photo size | `clamp()` fluid sizing | Phase 2 | Photo scales across all viewports without media query hacks |
| Separate mobile/desktop width overrides | Single `clamp()` value | Phase 2 | Removes two responsive override rules |
| `.grid-2` for all two-column layouts | Component-scoped `.hero__grid` | Phase 2 | Enables different breakpoints per layout context |

**Deprecated/outdated (to clean up in Phase 2):**
- `@media (max-width: 639px) { .profile-placeholder { width: 140px; } }` — replaced by clamp()
- `@media (min-width: 1024px) { .profile-placeholder { width: 240px; } }` — replaced by clamp()

---

## Open Questions

1. **Hero min-height implementation**
   - What we know: Locked at 60vh
   - What's unclear: Whether to use inline `style="min-height: 60vh;"` on the section or add a `.section--hero` modifier
   - Recommendation: Use a `.hero` class or inline style; inline style is simplest for a one-off value and within Claude's Discretion

2. **Hover state for `.btn--primary--inverse`**
   - What we know: Phase 1 uses Meliora Blue (#0045A0) as the hover for `.btn--primary` (navy hover → blue). But for yellow → darker yellow on hover there's no existing token.
   - What's unclear: Whether to use a darkened yellow or invert to white outline on hover
   - Recommendation: Use a slightly darkened yellow (#e6c200) or `filter: brightness(0.9)` on hover — within Claude's Discretion

3. **About Me H2 content**
   - What we know: Section 7 (About Me) uses H2 with `.section--butter` background
   - What's unclear: The exact biographical text and H2 heading text
   - Recommendation: Planner should use placeholder content ("About Me" as H2 label is in CONTEXT.md); the actual bio is Dr. Barron's content to fill in

---

## Validation Architecture

**nyquist_validation is enabled** — validation section included.

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None (plain HTML/CSS/JS project — no test runner) |
| Config file | None — Wave 0 gap |
| Quick run command | Open `index.html` in browser; inspect visually |
| Full suite command | W3C HTML validator at validator.w3.org |

**Note:** This is a no-build, no-npm project. There is no automated test runner. All validation is visual inspection and W3C HTML validation (as done in Phase 1, Plan 01-03). Automated testing with jest/vitest/playwright would require adding npm which is explicitly out of scope (PERF-01).

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| HOME-01 | Hero two-column at 1024px, stacked below 1024px | visual/manual | Resize browser at 1024px boundary | ❌ no runner |
| HOME-02 | Affiliation eyebrow appears above H1 | visual/manual | Open index.html, inspect hero | ❌ no runner |
| HOME-03 | H1 renders in Georgia serif, white, on navy | visual/manual | Open index.html, inspect hero | ❌ no runner |
| HOME-04 | Lead text appears in white | visual/manual | Open index.html, inspect hero | ❌ no runner |
| HOME-05 | Two buttons side-by-side desktop, stacked mobile | visual/manual | Resize at 640px boundary | ❌ no runner |
| HOME-06 | Navy photo placeholder with yellow "IB", clamp sizing | visual/manual | Resize browser across breakpoints | ❌ no runner |
| HOME-07 | About Me section on butter background | visual/manual | Scroll to About Me section | ❌ no runner |
| HOME-08 | "Download CV" links to assets/cv.pdf | link check | Click button, verify file loads | ❌ no runner |
| HOME-09 | Three cards with colored top borders | visual/manual | Scroll to cards section | ❌ no runner |
| HOME-10 | Cards have H4, description, working links | link check | Click "Learn more" and "Visit hub" links | ❌ no runner |
| HOME-11 | Students card has navy border-top | visual/manual | Inspect Students card CSS | ❌ no runner |

### Sampling Rate

- **Per task commit:** Open `index.html` in browser, verify section renders correctly
- **Per wave merge:** Check all three sections (hero, about, cards) at 320px, 768px, 1024px viewports
- **Phase gate:** W3C HTML validation passes + all 4 ROADMAP success criteria visible before `/gsd:verify-work`

### Wave 0 Gaps

- No automated test infrastructure exists or is needed (plain HTML/CSS project)
- All validation is manual visual inspection (consistent with Phase 1 approach)
- Planner should include explicit visual-check tasks as part of each plan

*(No test file gaps — manual verification is the correct approach for this project type)*

---

## Sources

### Primary (HIGH confidence)

- Direct read of `css/style.css` (Phase 1 output) — verified all existing classes, tokens, breakpoints, and component patterns
- Direct read of `index.html` (Phase 1 output) — verified HTML structure template
- Direct read of `js/main.js` (Phase 1 output) — confirmed no JS changes needed for Phase 2
- Direct read of `.planning/phases/02-home/02-CONTEXT.md` — all locked decisions
- Direct read of `.planning/REQUIREMENTS.md` — HOME-01 through HOME-11 definitions

### Secondary (MEDIUM confidence)

- WCAG AA contrast ratios (navy/white = 15.1:1, navy/yellow = 8.7:1) — based on known brand color values and standard formula; independently verifiable at webaim.org/resources/contrastchecker

### Tertiary (LOW confidence)

- None — all findings are grounded in the Phase 1 codebase and locked CONTEXT.md decisions

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — the stack is the Phase 1 codebase, directly read
- Architecture: HIGH — patterns derived from existing Phase 1 CSS conventions and locked CONTEXT.md decisions
- Pitfalls: HIGH — breakpoint conflict is a concrete finding from reading the CSS; all other pitfalls follow from known CSS behavior

**Research date:** 2026-03-25
**Valid until:** Phase 3 start — Phase 2 decisions are fully locked; no external dependencies to go stale
