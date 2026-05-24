# Phase 2: Home Page - Context

**Gathered:** 2026-03-25
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the home page (index.html) that introduces Dr. Irving Barron to visitors. The page establishes the visual template and interaction pattern that all subsequent content pages will follow.

**Success Criteria (from ROADMAP.md):**
1. Hero section shows "Dr. Irving Barron" in serif font on navy background with affiliation eyebrow, lead text, and two action buttons side-by-side (stacked on mobile)
2. Profile photo placeholder appears as navy rectangle with yellow "IB" initials in hero (right column on desktop, above text on mobile)
3. About Me section shows biographical paragraph and "Download CV (PDF)" button linking to assets/cv.pdf
4. Three highlight cards (Research, Teaching, Students) appear below, each with colored top border and working "Learn more" link

**Requirements Mapped:** HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, HOME-06, HOME-07, HOME-08, HOME-09, HOME-10, HOME-11

</domain>

<decisions>
## Implementation Decisions

All decisions locked after user discussion 2026-03-25. No rework needed.

### Hero Section: Layout & Background

**LOCKED: Hero background = Navy (#001E5F)**
- Text is white/yellow on navy background
- Sets strong branded first impression

**LOCKED: Hero layout = Text above photo (mobile), text left + photo right (1024px+ desktop)**
- Mobile (<1024px): Vertical stack — eyebrow, H1, lead text, buttons, then photo below
- Desktop (1024px+): Two-column grid — text on left (50%), photo on right (50%)
- Rationale: Credentials/name establish context first on mobile, photo is secondary. Professional faculty site prioritizes identity over appearance.

**LOCKED: Hero min-height = 60vh (60% of viewport)**
- Gives hero visual prominence without full-screen dominance
- Desktop: About section is partially visible below hero, encourages scrolling
- Mobile: Hero naturally sized by content without excessive whitespace

### Hero Section: Buttons

**LOCKED: Primary button on navy background = Yellow background (#FFD82B) with navy text**
- Create new `.btn--primary--inverse` modifier: `background-color: var(--color-yellow)`, `color: var(--color-navy)`
- "View My Research" button uses `.btn--primary--inverse`
- Rationale: Yellow pops on navy background, high contrast, brand accent, distinct from outline button

**Secondary button:** "For Students" uses existing `.btn--outline--white` (white border, white text)
- Both buttons side-by-side on desktop, stacked on mobile

### Profile Photo Placeholder

**LOCKED: Photo sizing = Responsive with clamp()**
- Size range: approximately 120px on mobile to 280px on desktop
- Use `clamp()` function matching typography approach: `width: clamp(120px, 30vw, 280px); aspect-ratio: 1;`
- Rationale: Scales appropriately across all breakpoints, proportional to hero size, flexible for real photo replacement

**LOCKED: Initials ("IB") = Scale proportionally with photo**
- Font size approximately 40% of photo width/height
- Use `clamp()` or calculated percentage: `font-size: clamp(48px, 12vw, 112px);`
- Font: Georgia serif (matches H1/H2), bold weight
- Color: Yellow (#FFD82B)
- Rationale: Always readable and visually balanced, no mismatch between photo and text size

**LOCKED: Photo styling = Subtle shadow + Yellow border**
- Border: 2px solid yellow (#FFD82B)
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.12)` (subtle depth)
- Background: Navy (#001E5F)
- Rationale: Shadow gives floating effect, yellow border frames and accents, creates professional photo-like appearance

### Section Backgrounds & Vertical Rhythm

**LOCKED: About Me section background = Butter (#FFFBF0)**
- Uses existing `.section--butter` class
- Warm, inviting color for biographical content
- Rationale: Creates visual rhythm (Hero navy → About butter → Cards white), feels personal for "about me" content

**LOCKED: Highlight Cards section background = White (#FFFFFF)**
- Default body background, high contrast for card borders
- Rationale: Completes visual rhythm, cards stand out, prepares for interactive content

**LOCKED: Vertical padding between sections = Generous (80-100px top/bottom)**
- Increase from standard `.section` padding (var(--spacing-3xl) = 64px) to 80-100px
- Apply to `.section` on home page: `padding-top: 100px; padding-bottom: 100px;`
- Rationale: Home page deserves spacious layout, professional feel, breathing room for each section

### Highlight Cards Grid Layout

**LOCKED: Grid layout = 1-column mobile/tablet, 3-column desktop (1024px+)**
- Mobile (<1024px): Cards stack vertically (1-column, 100% width)
- Desktop (1024px+): 3-column grid with equal width
- Use `.grid-3` class, expand at 1024px breakpoint: `@media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }`
- Gap: var(--spacing-lg) between cards
- Rationale: Simpler CSS (one breakpoint), aligns with "plain design" philosophy, single-column is readable on all mobile/tablet sizes

### Highlight Cards: Visual Distinction

**LOCKED: Research card = Yellow top border (4px)**
- Uses `.card--highlighted` class
- Border: `border-top: 4px solid var(--color-yellow);`

**LOCKED: Teaching card = Yellow top border (4px)**
- Uses `.card--highlighted` class
- Border: `border-top: 4px solid var(--color-yellow);`

**LOCKED: Students card = Navy top border (4px), NOT yellow**
- Create `.card--highlighted--navy` modifier: `border-top: 4px solid var(--color-navy);`
- Rationale: Explicit requirement (HOME-11: "Students card has navy border-top"). Visual distinction signals Students is different content type (interactive hub with tabs in Phase 4, not informational page).

### Typography & Copy Decisions

**LOCKED: Hero H1 styling = Standard heading size (var(--font-size-heading))**
- Font: Georgia serif (phase 1 established)
- Weight: Bold (700)
- Color: White on navy background
- No special sizing increase; standard heading size is appropriate for hero

**LOCKED: About Me H2 styling = Standard subheading size (var(--font-size-subheading))**
- Font: Inter sans-serif (phase 1 established)
- Color: Navy on butter background
- Eyebrow label above: "About Me", Inter 600, uppercase

**LOCKED: Highlight card H4 styling = Standard subheading size**
- Font: Inter sans-serif
- Color: Navy on white background
- Supports text "Learn more →" or "Visit hub →" as link

### HTML Structure / Semantic Requirements

- Hero section uses `<section class="section section--navy">` with min-height 60vh
- Hero content in `<div class="container">` with `.grid-2` two-column layout (desktop) / stacked (mobile)
- Photo placeholder: `<div class="hero__photo">` with `<span>IB</span>` for initials
- About section: `<section class="section section--butter">`
- Highlight cards section: `<section class="section">` (white background)
- Cards: `<div class="card card--highlighted">` or `<div class="card card--highlighted--navy">`
- All buttons: `<a href="">` with `.btn .btn--primary--inverse` or `.btn .btn--outline--white`

### Claude's Discretion

- Exact clamp() min/max values can be tuned during execution (120-280px photo range is approximate)
- Card padding, border-radius, hover effects (use existing .card styles)
- Exact easing/timing for any smooth scroll or fade-in animations (already handled by Phase 1)
- Specific line-height and margin-bottom values for headings and paragraphs (use existing design tokens)

</decisions>

<specifics>
## Specific Ideas & Preferences

- Profile photo placeholder must be CSS-only (no image file) until real photo replaces it
- Yellow border on photo creates cohesion with yellow accent throughout design
- Navy border on Students card prepares for Phase 4 (Students page with tabs will have navy theme)
- Generous spacing makes home page feel premium and accessible
- Hero layout prioritizes professional credibility (name/title first) over visual appearance on mobile

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read before planning or implementing.**

- `.planning/PROJECT.md` — Project vision, constraints, plain HTML/CSS/JS only, University of Rochester brand
- `.planning/REQUIREMENTS.md` — All v1 requirements, HOME-01 through HOME-11 are Phase 2 scope
- `.planning/ROADMAP.md` — Phase 2 goal and success criteria
- `.planning/phases/01-foundation/01-CONTEXT.md` — Phase 1 foundation decisions (design system, components, patterns)

**Design System Resources (established in Phase 1):**
- CSS custom properties: `--color-navy`, `--color-yellow`, `--color-white`, `--color-butter`
- Typography tokens: `--font-size-heading`, `--font-size-subheading`, `--font-size-body`
- Spacing tokens: `--spacing-3xl` (64px), scale to 80-100px for Phase 2 home page
- Component classes: `.btn`, `.btn--primary`, `.btn--outline--white`, `.card`, `.card--highlighted`, `.section`, `.section--navy`, `.section--butter`
- Responsive breakpoints: 640px (mobile→tablet), 1024px (tablet→desktop)

</canonical_refs>

<code_context>
## Existing Code & Reusable Patterns

### From Phase 1 (index.html template):

```html
<!-- Hero section skeleton already exists but needs content -->
<section class="section">
  <div class="container">
    <p class="eyebrow">...</p>
    <h1>...</h1>
    <p>...</p>
  </div>
</section>
```

### CSS Components Ready to Extend:

- `.section` with `section--navy`, `section--butter` variants
- `.btn`, `.btn--primary`, `.btn--outline--white` (need new `.btn--primary--inverse`)
- `.card`, `.card--highlighted`, `.grid-3`
- All typography and spacing tokens

### CSS Classes to Add:

- `.btn--primary--inverse` — Yellow background, navy text, for buttons on navy hero
- `.card--highlighted--navy` — Navy top border, for Students card variant
- `.hero__photo` — CSS-only photo placeholder with yellow border and shadow
- Modify `.grid-3` media query to expand at 1024px: `grid-template-columns: repeat(3, 1fr)`
- Extend `.section` padding to 80-100px on home page (or create `.section--spacious` variant)

### JS Utilities (already exist from Phase 1):

- Footer year generation working
- Nav toggle already working
- Tab interface placeholder (for Phase 4, Students page)

### Assets (already exist from Phase 1):

- `assets/cv.pdf` placeholder exists, ready for "Download CV" button
- Font files already self-hosted
- All styling in `css/style.css`

</code_context>

<deferred>
## Deferred Ideas

- Real profile photo upload: Phase 2 uses CSS placeholder, v2 will replace with real image
- Hero video background: Considered but deferred (accessibility + performance risk)
- Additional hero layouts (centered, overlay text on photo): Not needed, two-column is sufficient

</deferred>

---

*Phase: 02-home*
*Context gathered: 2026-03-25 after user discussion*
*Status: Ready for researcher to investigate button modifier implementation*
