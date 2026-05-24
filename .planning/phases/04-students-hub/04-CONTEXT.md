# Phase 4: Students Hub - Context

**Gathered:** 2026-03-27
**Status:** Ready for planning

<domain>
## Phase Boundary

Build a fully accessible Students Hub page (students.html) with three tab-based sections: Current Students, Prior Students, and Prospective Students. Each section contains student resources (office hours, course materials, recommendation requirements, graduate admissions information). The page features a sticky tab interface with full keyboard support and semantic ARIA tab pattern implementation.

**Success Criteria (from ROADMAP.md):**
1. Students page shows navy header with H1 "Students Hub" and lead text
2. Three tab buttons; clicking each tab shows its panel and hides others
3. Arrow keys (left/right) navigate between tabs without mouse
4. Current Students tab: office hours, Blackboard link, email contact, accommodations info
5. Prior Students tab: Stay in Touch section, Recommendation Letters card with bulleted requirements
6. Prospective Students tab: Undergraduate Research card with application requirements, Graduate Admissions link

**Requirements Mapped:** STU-01 through STU-12

</domain>

<decisions>
## Implementation Decisions

### Tab Navigation Styling

**Tab buttons = Pill buttons with background fill**
- Active tab: Navy background (#001E5F), white text, rounded corners
- Inactive tabs: Transparent background, navy text
- Padding and sizing consistent with existing `.btn` styles
- Hover state: Subtle background color shift (Meliora Blue on inactive tabs)
- Focus state: Visible outline (browser default or custom focus ring)

**Tab Container**
- Horizontal layout on all screen sizes (no vertical stacking, no dropdown on mobile)
- Three tabs fit comfortably even on small screens (320px+)
- All tabs visible without horizontal scrolling on typical mobile widths
- Wrapping: flex layout, gap between pills using `--spacing-md` (16px)

### Tab Keyboard Navigation

**Tab key behavior = WCAG/ARIA APG standard**
- Tab key moves focus through the three tab buttons sequentially (left to right)
- After the last tab, Tab moves to the first focusable element inside the active panel
- Shift+Tab reverses the flow
- Arrow Left/Right switches between tabs (already in Phase 1 placeholder code)
- Arrow wraps: Left from first tab goes to last tab; Right from last tab goes to first tab

**Implementation:**
- Manage `tabindex=0` on active tab, `tabindex=-1` on inactive tabs
- Move focus to active tab when switching via arrow keys
- JavaScript: Update tabindex values when tab changes

### Panel Content Organization

**Single section per panel**
- Each tab panel is one flowing `<section>` without nested subsections
- Important items (Recommendation Letters, Undergraduate Research) appear as `.card` components
- Other content (office hours, accommodations, contact) flows as prose + definition lists or simple bullet lists
- Single content block per panel = clean, minimal structure inside the tab container

**Panel Styling**
- Panel background: White (default)
- Panel padding: Consistent with section padding (var(--spacing-3xl) = 64px top/bottom, --spacing-md on sides for mobile)
- Panels are direct children of the `.section` containing the tablist
- One panel shown, others hidden via `hidden` attribute (not CSS `display: none`, for better semantics)

### Tab Panel Animation

**Fade in/out transition**
- Old panel: Fade out over 0.2s (opacity 1 → 0)
- New panel: Fade in over 0.2s (opacity 0 → 1)
- Easing: ease-in-out (or ease — Claude's discretion on specific easing function)
- **Critical:** Wrap animation in `@media (prefers-reduced-motion: no-preference)` — instant switch for users who prefer reduced motion

**Implementation:**
- Use CSS `opacity` and `transition` properties
- When hiding panel: Set `opacity: 0`, then `hidden = true` after animation completes
- When showing panel: Set `hidden = false`, then `opacity: 1` via animation
- JavaScript: Manage animation state or use CSS transitions with event listeners

### Carry-Forward from Prior Phases

**Page header = Navy background, H1 + lead text**
- Consistent with Research, Teaching, Contact pages
- Header min-height: 35-40vh (balanced visual anchor)
- Two-column layout (text left, optional decorative element right) — or full-width H1 + lead text is acceptable
- H1: "Students Hub"
- Lead text: "Resources for current, prior, and prospective students"

**Card styling = Yellow top border**
- Recommendation Letters card: `.card .card--highlighted` (4px yellow border-top)
- Undergraduate Research card: `.card .card--highlighted` (4px yellow border-top)
- Consistent with Research, Teaching, Contact pages

**Responsive Design**
- Breakpoints: 640px (mobile→tablet), 1024px (tablet→desktop)
- Tab container and panels: Full width on mobile, constrained on desktop (within `.container`)
- Single-column on mobile, preserve layout on desktop

**Typography & Styling**
- H1/H2: Georgia serif (from Phase 1)
- Body: Inter sans-serif (from Phase 1)
- All colors, spacing, component classes from Phase 1 design system
- Page-load animation: Fade in on major sections (wrapped in prefers-reduced-motion)

**First-Person Voice**
- All copy (office hours description, accommodations text, Contact section) must use "I/my/me"
- Never third-person
- Core requirement from project CLAUDE.md

### Claude's Discretion

- Exact easing function for fade transitions (ease, ease-in-out, cubic-bezier, etc.)
- Precise timings within the 0.2s fade range (could be 0.15s or 0.25s if testing suggests adjustment)
- Focus state styling on tab buttons (default outline vs. custom ring)
- Panel content layout details (padding, margins, spacing between elements within a panel)
- Decorative header element (optional SVG icon or illustration on right side of header)
- Definition list styling for office hours/contact details vs. simple prose + bullet lists
- Accommodation info wording and structure

</decisions>

<specifics>
## Specific Ideas & Preferences

- Tab interface should feel like a real tab control — users should immediately recognize they can click tabs to see different content
- Pill buttons create visual consistency with tag pills elsewhere on the site
- Fade animation makes switching feel smooth and intentional, not jarring
- Keyboard navigation (arrow keys) should work intuitively for screen reader users and keyboard-only navigators
- All tab content should be scannable and actionable (clear calls to action for office hours, Blackboard link, recommendation process, graduate applications)

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase 4 Scope & Requirements
- `.planning/ROADMAP.md` § Phase 4 — Phase goal, success criteria, requirements mapped
- `.planning/REQUIREMENTS.md` — STU-01 through STU-12 (Students page tab interface and content)

### Foundation & Design System (Phase 1)
- `.planning/phases/01-foundation/01-CONTEXT.md` — CSS design system, typography, animations, responsive breakpoints, semantic HTML, ARIA roles

### Home Page Template (Phase 2)
- `.planning/phases/02-home/02-CONTEXT.md` — Card styling, button patterns, section backgrounds, component reuse

### Content Pages Reference (Phase 3)
- `.planning/phases/03-content-pages/03-CONTEXT.md` — Page header pattern, card styling, typography, spacing consistency

### Project Vision & Brand
- `.planning/PROJECT.md` — Project constraints (plain HTML/CSS/JS only, University of Rochester brand, no external dependencies)
- `CLAUDE.md` — First-person voice requirement (core project rule)

### Accessibility Standards
- WCAG 2.1 AA minimum compliance
- ARIA Authoring Practices Guide: https://www.w3.org/WAI/ARIA/apg/practices/tabpanel/ — ARIA tabs pattern reference (standard for tab interfaces)

### Existing JavaScript Reference
- `js/main.js` — `initTabs()` placeholder function already has basic tab switching with arrow key navigation and ARIA attributes; Phase 4 planning will expand this with tabindex management and fade animations

</canonical_refs>

<code_context>
## Existing Code & Reusable Patterns

### From Phase 1, 2, 3 (Ready to Reuse):

**CSS Components:**
- `.section` with variants: `section--navy` (for header)
- `.card`, `.card--highlighted` (yellow top border) — perfect for Recommendation Letters and Undergraduate Research cards
- `.btn`, `.btn--primary` — for any action buttons
- `.tag-pill` — if needed for labeling
- All typography tokens: `.eyebrow`, heading styles (H1, H2, H3, H4)
- Spacing tokens: `--spacing-*` CSS custom properties
- Responsive layout: `.container`, `.grid-2` (if needed for header)

**JavaScript (Already Exists):**
- `initTabs()` in `js/main.js` — Basic tab switching with:
  - Click handlers to toggle panels (hide all, show selected)
  - `aria-selected` attribute updates
  - Arrow key navigation (left/right)
  - Current implementation uses `hidden` attribute for panel visibility
- `initNavToggle()` — Navigation hamburger (reuse as-is)
- `initFooterYear()` — Footer year generation (reuse as-is)

**HTML Structure Pattern:**
```html
<section class="section">
  <div class="container">
    <div role="tablist" class="tabs">
      <button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
      <button role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
      <!-- ... -->
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div role="tabpanel" id="panel-1">Content</div>
    <div role="tabpanel" id="panel-2" hidden>Content</div>
    <!-- ... -->
  </div>
</section>
```

### Phase 4 New Components/Classes to Add:

**CSS:**
- `.tabs` — Container for tab buttons (flex layout, gap, responsive)
- `.tab` or refine `[role="tab"]` styling — Pill button styling with variants
- `.tabpanel` — Panel styling (padding, animations, opacity transitions)
- `.fade-in-out` or animation class — Fade transition for panels (tied to `hidden` attribute toggling or JS opacity changes)
- Consider: `.tabs--horizontal` variant if needed (current assumption is always horizontal)

**JavaScript Enhancements:**
- Expand `initTabs()` to manage `tabindex` values
  - Active tab: `tabindex="0"`
  - Inactive tabs: `tabindex="-1"`
  - Update tabindex when active tab changes
- Add fade animation logic
  - Before hiding panel: fade out (set `opacity: 0`)
  - After animation, set `hidden = true`
  - Before showing panel: set `hidden = false`, then fade in (set `opacity: 1`)
  - Use `transitionend` event or `setTimeout` to coordinate animations
- Ensure focus moves to active tab after arrow key navigation

### Assets & Files (Already Exist):

- `css/style.css` — All styling, add `.tabs`, `.tab`, `.tabpanel`, animation classes here
- `js/main.js` — Expand `initTabs()` function
- `students.html` — New file, will import `css/style.css` and `js/main.js`

### Integration Points:

- `students.html` links from home page (index.html) via "For Students" button and "Students" highlight card
- Nav link will show active state via `aria-current="page"` on the Students link
- Page follows same header/nav/footer pattern as all other pages
- Page-load animation applies to header and panels

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 04-students-hub*
*Context gathered: 2026-03-27*
