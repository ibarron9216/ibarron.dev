# Phase 1: Foundation - Research

**Researched:** 2026-03-25
**Domain:** HTML5/CSS3/Vanilla JavaScript Design System Foundation
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Component Structure**
- Use named classes with variant modifiers: `.btn`, `.btn--primary`, `.btn--outline` for buttons; `.card` with variants for cards; `.tag-pill` for tags
- Clear, explicit naming. Each component type has a base class with modifier classes for variations
- Enables reusability across all five pages

**Navigation Pattern**
- Mark the current page with `aria-current="page"` on the active nav link (semantic ARIA, not class-based)
- Structure nav with `role="menubar"` for accessibility (see Pitfall #1 — the APG recommends disclosure pattern instead; the planner should evaluate)
- Mobile menu is a hidden menu toggled by JavaScript hamburger button
- Ensures screen readers announce the current page automatically

**Animation Approach**
- Apply page-load animations (fade-in + slide up) to all major sections when page loads
- Use CSS keyframes with 0.5s duration and 0.1s stagger between sections
- **Critical:** Wrap all animations in `@media (prefers-reduced-motion: no-preference)` — animations must be absent when users prefer reduced motion
- Additional 0.2s transitions on hover/focus for interactive elements

**Font Setup**
- Self-host Inter Variable as a single `.woff2` file in `assets/fonts/`
- Load via `@font-face` in CSS
- Fallback to system sans-serif (`system-ui, -apple-system, sans-serif`) if font fails to load
- No additional formats (.woff, .ttf) — modern browsers all support .woff2
- Georgia serif loaded via system font stack (available on all major operating systems)

**HTML Semantics**
- Semantic-first approach: `<button>` elements for buttons (not `<a>` or `<div>`), `<article>` or `<section>` for cards, `<fieldset>` for tab containers
- Use proper heading hierarchy (one H1 per page, no skipped levels)
- Apply ARIA roles and attributes where semantics need enhancement (tabs, tab panels, menubar)
- Improves accessibility for screen readers and search engines

**CSS Organization**
- Single `css/style.css` file (per requirements)
- Use CSS custom properties for all colors, spacing, typography, and breakpoints
- Custom properties organized by category: `--color-*`, `--spacing-*`, `--font-*`, `--breakpoint-*`
- Breakpoints: `--breakpoint-mobile: 640px`, `--breakpoint-tablet: 1024px`
- Define custom properties in `:root` scope

**Responsive Breakpoints**
- Mobile-first approach: Start with single-column, then expand to multi-column
- Use media queries at `640px` (mobile → tablet) and `1024px` (tablet → desktop)
- Navigation collapses to hamburger on screens `< 768px`
- Multi-column layouts (hero, footer, contact) stack to single column on mobile

### Claude's Discretion
- Exact animation keyframe definitions (easing functions, precise timings within the 0.5s/0.2s constraints)
- Specific CSS custom property naming conventions (beyond the `--category-name` pattern)
- Performance optimization techniques (minification, caching strategies)
- Exact shade/saturation of brand colors (use University of Rochester official palette: navy #001E5F, Dandelion Yellow #FFD82B as anchor points)

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| FOUND-01 | Create HTML5 semantic structure for all 5 pages (header, nav, main, sections, footer) | HTML5 landmark element patterns; `<nav>`, `<header>`, `<main>`, `<section>`, `<footer>` |
| FOUND-02 | Implement University of Rochester brand color palette as CSS custom properties | Color values verified: navy #001E5F, yellow #FFD82B; all contrast ratios confirmed WCAG AA |
| FOUND-03 | Implement responsive layout system (mobile <640px, tablet 640-1024px, desktop >1024px) | Mobile-first CSS with `@media (min-width: 640px)` and `@media (min-width: 1024px)` |
| FOUND-04 | Self-host Inter Variable font as `.woff2` file with fallbacks | Inter variable font from rsms.me/inter; `InterVariable.woff2`; `@font-face` with `font-weight: 100 900` |
| FOUND-05 | Implement CSS custom properties for all spacing, sizing, and typography values | CSS custom properties in `:root` with `--color-*`, `--spacing-*`, `--font-*` categories |
| FOUND-06 | Verify WCAG AA color contrast on all text | Computed: navy/white = 15.54:1, yellow/navy = 11.18:1, dark-gray/white = 4.95:1 — all pass |
| NAV-01 | Create sticky navigation bar with brand name (left) and menu links (right) | `position: sticky; top: 0` CSS; flexbox layout for nav items |
| NAV-02 | Implement hamburger menu button for mobile (<768px) with aria-label and aria-expanded | `<button aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav-menu">` |
| NAV-03 | Show/hide mobile nav with JavaScript toggle (no external library) | Vanilla JS `classList.toggle()`; toggle `aria-expanded` attribute |
| NAV-04 | Apply active page indicator (yellow text and underline) on current nav link | `aria-current="page"` attribute; CSS `[aria-current="page"]` selector for styling |
| NAV-05 | Make hamburger button keyboard accessible (focus indicator visible) | `:focus-visible` CSS outline; inherits from global focus style |
| LAYOUT-01 | Create footer with two-column layout (desktop) and stacked layout (mobile) | CSS Grid `grid-template-columns: repeat(2, 1fr)` with mobile stack |
| LAYOUT-02 | Implement footer with dynamic year generation via JavaScript | `document.querySelector('.year').textContent = new Date().getFullYear()` |
| TYP-01 | H1 and H2 use Georgia serif font, bold weight, proper clamp() sizing | `font-family: Georgia, serif`; `font-size: clamp(2rem, 5vw, 3.5rem)` |
| TYP-02 | H3, H4, H5 use Inter semibold (600), proper clamp() sizing | Variable font allows all weights; `font-weight: 600` |
| TYP-03 | Body text uses Inter regular (400), 1.7 line height, proper clamp() sizing | `font-weight: 400; line-height: 1.7; font-size: clamp(1rem, 2vw, 1.125rem)` |
| TYP-04 | Eyebrow labels: Inter 600, 0.875rem, 0.1em letter-spacing, uppercase, muted gray | `text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.875rem` |
| TYP-05 | All buttons consistent: Inter 600, 1.125rem, 0.75rem vertical / 1.75rem horizontal padding | Button base class pattern; sizes in CSS custom properties |
| TYP-06 | Primary button: navy background, white text, hover to Meliora Blue, 0.2s transition | `background-color: var(--color-navy); transition: background-color 0.2s ease` |
| TYP-07 | Outline button: transparent background, navy border, navy text, hover fills navy | `background: transparent; border: 2px solid var(--color-navy)` |
| TYP-08 | Card styling: white background, 1px border, 4px yellow top border, 1.5rem padding, 8px radius | `border-top: 4px solid var(--color-yellow); border-radius: 8px` |
| ANIM-01 | Fade-in + translate up animation on all major sections (0.5s duration, 0.1s stagger) | CSS `@keyframes fadeInUp`; `.section:nth-child(n)` animation-delay |
| ANIM-02 | Wrap all animations in @media (prefers-reduced-motion: no-preference) block | `@media (prefers-reduced-motion: no-preference)` wrapping all keyframe animations |
| ANIM-03 | Hover states on buttons, cards, links (0.2s transition) | CSS `transition: all 0.2s ease` on interactive elements |
| ANIM-04 | Hamburger icon changes visual state when nav is open | CSS class toggle `.nav--open` changes icon lines to X pattern |
| ANIM-05 | Tab active state visual feedback (yellow text on navy background) | `[aria-selected="true"]` CSS selector for tab styling |
| ASSET-01 | CV placeholder file at assets/cv.pdf | Empty PDF or placeholder; user replaces |
| ASSET-02 | Inter Variable font file (inter-variable.woff2) self-hosted in project | Download `InterVariable.woff2` from rsms.me/inter or GitHub |
| ASSET-03 | All CSS in single css/style.css file | Single file; no CSS frameworks or preprocessors |
| ASSET-04 | Profile photo placeholder is CSS-only (no image file needed until replaced) | CSS `aspect-ratio: 1; background: var(--color-navy)` div with styled "IB" initials |
| PERF-01 | Site loads without external npm dependencies | Zero external imports; all assets local |
| PERF-02 | No webpack, build tools, or development server needed | Pure HTML/CSS/JS; open `index.html` directly in browser |
| PERF-03 | Single CSS file loads in one request | One `<link rel="stylesheet" href="css/style.css">` per page |
| PERF-04 | JavaScript is <200 lines total (hamburger, tabs, year) | Three discrete functions; estimated ~80-100 lines with comments |
</phase_requirements>

---

## Summary

Phase 1 establishes the complete design system, shared navigation/footer, and JavaScript utilities that all five subsequent pages depend on. The technical domain is vanilla HTML5/CSS3/JavaScript with zero external dependencies — no npm, no build tools, no frameworks. Every implementation decision has been locked through the CONTEXT.md discussion phase.

The research confirms that all specified color combinations pass WCAG 2.1 AA: navy/white achieves 15.54:1 (more than 3x the 4.5:1 minimum), yellow/navy achieves 11.18:1, and the dark gray #707070/white achieves 4.95:1. One important discrepancy was found: CONTEXT.md specifies `role="menubar"` for the navigation, but the WAI-ARIA Authoring Practices Guide explicitly states that menu/menubar roles are inappropriate for site navigation and recommends the disclosure pattern instead. The planner should address this with a note to the implementer.

The Inter Variable font is available as `InterVariable.woff2` directly from the rsms/inter GitHub repository. Using `font-weight: 100 900` in the `@font-face` declaration unlocks all weights from a single file — this supports the full typography hierarchy (400 body, 600 UI/headings) without multiple font files.

**Primary recommendation:** Build in waves — CSS custom properties + typography first, then layout system, then navigation component, then footer component, then JavaScript utilities. Each wave produces testable, standalone deliverables.

## Standard Stack

### Core
| Technology | Version | Purpose | Why Standard |
|------------|---------|---------|--------------|
| HTML5 | Living standard | Page structure and semantics | Native browser support, no deps |
| CSS3 with custom properties | All modern browsers | Design system + layout | Replaces preprocessors; live updates; cascade-aware |
| Vanilla JavaScript | ES2020+ | Hamburger, tabs, year | Zero dependency requirement per project constraints |
| Inter Variable font | v4.x (rsms/inter) | Sans-serif UI/body type | Single file for all weights 100-900; open source |
| Georgia | System font | Serif heading type | Available on all OS (macOS, Windows, Linux, Android) |

### Supporting
| Technology | Version | Purpose | When to Use |
|------------|---------|---------|-------------|
| CSS Grid | Native | Two-column layouts (footer, hero, contact) | Multi-column, 2D layout |
| CSS Flexbox | Native | Nav bar, single-axis alignment | Single-axis, alignment, distribution |
| CSS `clamp()` | Native | Fluid typography | Headings that scale between mobile/desktop |
| CSS `position: sticky` | Native | Sticky navigation | Nav that follows scroll without JS |
| `@font-face` | Native | Self-hosted font loading | Required since no CDN fonts allowed |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CSS custom properties | SCSS variables | CSS props have no build step; cascade-aware; runtime changeable |
| `position: sticky` | JS scroll listener | Sticky CSS is zero-JS; no jank on scroll |
| `clamp()` for typography | Explicit breakpoint font sizes | clamp() is smoother; fewer media queries; requires testing with zoom |
| Inter Variable (one file) | Separate weight files | Variable font is smaller total; more flexible |
| Vanilla JS `classList.toggle` | Inline style manipulation | Class toggling keeps styles in CSS where they belong |

**Installation:**

No npm install needed. Steps for implementer:

```bash
# 1. Download Inter Variable font
# Visit https://github.com/rsms/inter/releases
# Download InterVariable.woff2 from latest release assets
# OR direct file: https://github.com/rsms/inter/raw/master/docs/font-files/InterVariable.woff2

# 2. Create directory structure
mkdir -p assets/fonts assets/images css js

# 3. Place font file
mv ~/Downloads/InterVariable.woff2 assets/fonts/inter-variable.woff2

# 4. Create CV placeholder
touch assets/cv.pdf  # user will replace
```

## Architecture Patterns

### Recommended Project Structure
```
ibarron.dev/
├── index.html               # Home page (Phase 2)
├── research.html            # Research page (Phase 3)
├── teaching.html            # Teaching page (Phase 3)
├── students.html            # Students Hub page (Phase 4)
├── contact.html             # Contact page (Phase 3)
├── css/
│   └── style.css            # ALL styles — single file (ASSET-03)
├── js/
│   └── main.js              # Hamburger + tabs + year (<200 lines, PERF-04)
└── assets/
    ├── fonts/
    │   └── inter-variable.woff2  # Self-hosted Inter Variable (ASSET-02)
    ├── images/              # Profile photo placeholder later (ASSET-04)
    └── cv.pdf               # CV placeholder (ASSET-01)
```

### CSS File Internal Organization

Recommended section order in `css/style.css`:

```
/* ===========================
   1. CUSTOM PROPERTIES (:root)
   =========================== */
/* --color-* --spacing-* --font-* --breakpoint-* --transition-* */

/* ===========================
   2. FONT FACE
   =========================== */
/* @font-face for Inter Variable */

/* ===========================
   3. RESET / BASE
   =========================== */
/* box-sizing, margin reset, base body styles */

/* ===========================
   4. TYPOGRAPHY
   =========================== */
/* h1-h6, p, .eyebrow, .lead */

/* ===========================
   5. LAYOUT UTILITIES
   =========================== */
/* .container, .section, grid helpers */

/* ===========================
   6. COMPONENTS
   =========================== */
/* .btn, .card, .tag-pill */

/* ===========================
   7. NAVIGATION
   =========================== */
/* .site-nav, .nav-toggle, mobile menu */

/* ===========================
   8. FOOTER
   =========================== */
/* .site-footer, footer grid */

/* ===========================
   9. ANIMATIONS
   =========================== */
/* @keyframes + @media (prefers-reduced-motion: no-preference) */

/* ===========================
   10. PAGE-SPECIFIC
   =========================== */
/* Page-level overrides added in later phases */
```

### Pattern 1: CSS Custom Properties Token System

**What:** Define all design decisions as named CSS variables in `:root`. Components reference tokens, never raw values.
**When to use:** Always — every color, spacing unit, and font size goes through a custom property.

```css
/* Source: MDN CSS custom properties guide */
:root {
  /* Brand Colors */
  --color-navy: #001E5F;
  --color-yellow: #FFD82B;
  --color-meliora-blue: #0047AB; /* Accent; Claude's discretion for exact shade */
  --color-butter: #FFFBF0;       /* Section backgrounds */
  --color-gray-border: #E8E8E8;
  --color-gray-text: #707070;

  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-serif: Georgia, 'Times New Roman', serif;
  --font-size-base: 1rem;
  --line-height-body: 1.7;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 5rem;

  /* Layout */
  --max-width: 1100px;
  --nav-height: 4rem;

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;

  /* Breakpoints — NOTE: custom properties CANNOT be used in @media queries
     These are documentation-only; use literal values in @media rules */
  /* mobile: 640px | tablet: 1024px | nav-collapse: 768px */
}
```

**Critical caveat:** CSS custom properties cannot be used inside `@media` query conditions. The breakpoint values must be hardcoded as literals (`640px`, `768px`, `1024px`) in media queries even though they are documented as custom properties.

### Pattern 2: @font-face for Inter Variable

**What:** Load Inter Variable as a single woff2 file with full weight range.
**When to use:** At the top of style.css, before any font-family references.

```css
/* Source: MDN Variable Fonts Guide */
@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/inter-variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

Note: `format('woff2-variations')` is the correct modern format string. All browsers that support variable fonts accept it. `font-display: swap` prevents invisible text during font load (FOIT — Flash of Invisible Text).

### Pattern 3: Mobile Navigation with Disclosure Pattern

**What:** Hamburger button reveals/hides navigation list on mobile. No menu/menubar roles.
**When to use:** Navigation collapse on screens narrower than 768px.

```html
<!-- Source: WAI-ARIA APG Disclosure Navigation Pattern -->
<!-- https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/ -->
<header class="site-header">
  <nav class="site-nav" aria-label="Main navigation">
    <a class="nav-brand" href="index.html">Dr. Irving Barron</a>

    <!-- Hamburger button — visible only on mobile -->
    <button
      class="nav-toggle"
      aria-label="Toggle navigation"
      aria-expanded="false"
      aria-controls="nav-menu"
    >
      <span class="nav-toggle__line"></span>
      <span class="nav-toggle__line"></span>
      <span class="nav-toggle__line"></span>
    </button>

    <!-- Navigation links — hidden on mobile until toggled -->
    <ul class="nav-menu" id="nav-menu" role="list">
      <li><a href="index.html" aria-current="page">Home</a></li>
      <li><a href="research.html">Research</a></li>
      <li><a href="teaching.html">Teaching</a></li>
      <li><a href="students.html">Students</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</header>
```

**Important:** Each page sets `aria-current="page"` on its own link — this is done in the HTML of that specific page, not via JavaScript. CSS targets `[aria-current="page"]` for yellow text + underline styling.

### Pattern 4: Hamburger JavaScript Toggle

**What:** Minimal vanilla JS to toggle mobile nav.
**When to use:** In `js/main.js`; applies to all pages.

```javascript
// Source: WAI-ARIA button pattern + MDN classList API
// Estimated: ~20 lines of the <200 line budget
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    menu.classList.toggle('nav-menu--open');
    toggle.classList.toggle('nav-toggle--open');
  });

  // Close menu when clicking a link (mobile UX improvement)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('nav-menu--open');
      toggle.classList.remove('nav-toggle--open');
    });
  });
}

document.addEventListener('DOMContentLoaded', initNavToggle);
```

### Pattern 5: Page-Load Animations with prefers-reduced-motion

**What:** All major sections fade in + slide up on load. Disabled entirely for reduced-motion users.
**When to use:** Sections with class `.animate-on-load`.

```css
/* Source: MDN prefers-reduced-motion + W3C WCAG C39 technique */

/* Default state: sections start invisible + shifted down */
/* Only apply when user has NOT requested reduced motion */
@media (prefers-reduced-motion: no-preference) {
  .animate-on-load {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;
  }

  /* Stagger: each nth section delays by 0.1s */
  .animate-on-load:nth-child(1) { animation-delay: 0s; }
  .animate-on-load:nth-child(2) { animation-delay: 0.1s; }
  .animate-on-load:nth-child(3) { animation-delay: 0.2s; }
  .animate-on-load:nth-child(4) { animation-delay: 0.3s; }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Hover/focus transitions */
  .btn,
  .card,
  a {
    transition: all var(--transition-fast);
  }
}
```

**Critical implementation note:** When using `opacity: 0` with animations, sections are invisible on page load for users without reduced-motion preference. This is correct behavior — `animation: fadeInUp ... forwards` fills the final state (opacity: 1). Do NOT set opacity: 0 outside the media query block, as it would permanently hide sections for reduced-motion users.

### Pattern 6: Button Component BEM-style Variants

**What:** Base class + modifier classes for button variations.
**When to use:** All clickable buttons throughout all five pages.

```css
/* Base button — shared properties */
.btn {
  display: inline-block;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 1.125rem;
  padding: 0.75rem 1.75rem;
  border-radius: 4px;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition-fast),
              color var(--transition-fast),
              border-color var(--transition-fast);
}

/* Primary: navy background, white text */
.btn--primary {
  background-color: var(--color-navy);
  color: #ffffff;
  border-color: var(--color-navy);
}
.btn--primary:hover,
.btn--primary:focus-visible {
  background-color: var(--color-meliora-blue);
  border-color: var(--color-meliora-blue);
}

/* Outline: transparent background, navy border */
.btn--outline {
  background-color: transparent;
  color: var(--color-navy);
  border-color: var(--color-navy);
}
.btn--outline:hover,
.btn--outline:focus-visible {
  background-color: var(--color-navy);
  color: #ffffff;
}
```

### Pattern 7: Card Component

**What:** White card with colored top border accent and consistent spacing.
**When to use:** Highlight cards, publication cards, course cards across all pages.

```css
/* Source: REQUIREMENTS.md TYP-08 */
.card {
  background-color: #ffffff;
  border: 1px solid var(--color-gray-border);
  border-top: 4px solid var(--color-yellow);
  border-radius: 8px;
  padding: var(--spacing-md);
}

/* Variant: navy accent border top (Students cards) */
.card--navy-accent {
  border-top-color: var(--color-navy);
}
```

### Anti-Patterns to Avoid

- **Using role="menubar" on `<nav>`:** WAI-ARIA APG explicitly states menubar is for desktop app-style menus, not site navigation. Use `<nav aria-label="Main navigation">` with `<ul>` links instead. The context discussion mentioned menubar — use `<nav>` with disclosure pattern instead.
- **Putting animation keyframes outside `@media (prefers-reduced-motion: no-preference)`:** Any `@keyframes` referenced by elements that are always applied will run regardless of user preference.
- **Setting `opacity: 0` outside the reduced-motion block:** Sections become permanently invisible for reduced-motion users who disable animations.
- **Using CSS custom properties inside `@media` queries:** `@media (max-width: var(--breakpoint-mobile))` is invalid — custom properties don't resolve in media query conditions.
- **Injecting nav/footer via JavaScript:** Flash of no-navigation on page load. Decision locked: copy-paste HTML into each page (per STATE.md).
- **Using `<a>` styled as button:** Breaks keyboard behavior and semantic meaning. Use `<button>` for actions, `<a>` for navigation.
- **Using `target="_blank"` without `rel="noopener noreferrer"`:** Security vulnerability (reverse tabnapping). All external links need both attributes.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Fluid font scaling | Step-wise @media font sizes | `clamp(min, fluid, max)` | Smoother scaling; single declaration |
| Color contrast verification | Manual luminance math | WebAIM checker or browser devtools | Error-prone; these are already pre-verified |
| Font performance | Multiple weight files | Single `InterVariable.woff2` | Browser loads one file; CSS handles all weights |
| Sticky nav | JS scroll event listener | `position: sticky; top: 0` | Zero JavaScript; no scroll jank |
| Year in footer | Hardcoded "2026" | `new Date().getFullYear()` | Auto-updates every year |
| Hamburger open/close | Manual DOM style changes | CSS class toggle + `aria-expanded` | Keeps styles in CSS; accessible |
| Active nav indicator | JS that reads URL | `aria-current="page"` in HTML | HTML is the source of truth; no race condition |

**Key insight:** In a no-framework vanilla project, native CSS features (sticky, clamp, custom properties, media queries) eliminate entire categories of JavaScript code. Reach for CSS first.

## Common Pitfalls

### Pitfall 1: ARIA menubar on `<nav>` Element

**What goes wrong:** Applying `role="menubar"` (mentioned in CONTEXT.md) forces screen reader users into a complex keyboard interaction model (arrow keys, Escape, Home/End) that they don't expect for site navigation links.
**Why it happens:** Developers conflate "application menus" (like File > Save) with "site navigation". The patterns look similar visually but are semantically different.
**How to avoid:** Use `<nav aria-label="Main navigation">` with a plain `<ul>` of links. The `<nav>` element is already a landmark. `aria-current="page"` handles the active state. No `role` override needed.
**Warning signs:** Developer tools showing `role="menubar"` in the accessibility tree; screen reader users complaining about unexpected keyboard behavior.

### Pitfall 2: Animation opacity trap

**What goes wrong:** Sections are permanently invisible for users with prefers-reduced-motion enabled because `opacity: 0` is set unconditionally.
**Why it happens:** Copying animation setup code without wrapping it in the media query guard.
**How to avoid:** The ONLY correct pattern is: all animation-related initial states (`opacity: 0`, `transform: translateY(...)`) AND the `@keyframes` must be inside `@media (prefers-reduced-motion: no-preference)`. Default state is fully visible.
**Warning signs:** Pages appear blank in testing with DevTools "Emulate prefers-reduced-motion: reduce" enabled.

### Pitfall 3: CSS custom properties in media queries

**What goes wrong:** `@media (max-width: var(--breakpoint-mobile))` silently fails — the media query never matches.
**Why it happens:** CSS custom properties resolve in the cascade, but media query conditions are evaluated before the cascade. They don't mix.
**How to avoid:** Always use literal values in media queries: `@media (min-width: 640px)`. Document the breakpoint values as comments next to them.
**Warning signs:** Responsive layouts don't change at expected breakpoints.

### Pitfall 4: font-display and FOIT/FOUT

**What goes wrong:** If `font-display` is omitted, browsers may show invisible text (FOIT) while the variable font loads, causing a jarring layout shift.
**Why it happens:** Default `font-display: auto` behavior varies by browser.
**How to avoid:** Always include `font-display: swap` in `@font-face`. This shows system font immediately, then swaps to Inter when loaded. Performance and UX win.
**Warning signs:** Brief flash of invisible text or unexpectedly different initial font on first load.

### Pitfall 5: Touch target size on mobile

**What goes wrong:** Hamburger button or nav links are smaller than 44x44px touch targets on mobile, making them hard to tap.
**Why it happens:** Default button/link padding is too small; developers forget to test on actual mobile screen sizes.
**How to avoid:** Nav toggle button: `min-width: 44px; min-height: 44px`. Mobile nav links: `padding: 0.75rem 1rem` for adequate vertical touch area.
**Warning signs:** Users report difficulty tapping nav items on mobile; accessibility audit flags touch targets.

### Pitfall 6: Missing rel="noopener noreferrer" on external links

**What goes wrong:** `target="_blank"` links without `rel="noopener noreferrer"` allow the opened page to access `window.opener`, enabling reverse tabnapping attacks.
**Why it happens:** Developers set `target="_blank"` without remembering the security requirement.
**How to avoid:** Every external link must be: `<a href="..." target="_blank" rel="noopener noreferrer">`.
**Warning signs:** Security scan flags reverse tabnapping; browser devtools warns about noopener.

### Pitfall 7: Georgia not available on all Linux systems

**What goes wrong:** Headings fall back to a different serif font on some Linux distributions that lack Georgia.
**Why it happens:** Georgia is a Microsoft/Apple font; not all Linux distros include it.
**How to avoid:** Use font stack: `Georgia, 'Times New Roman', serif`. The fallback chain ensures consistent rendering.
**Warning signs:** Heading fonts look different on Linux test environments.

## Code Examples

Verified patterns from official sources:

### Complete @font-face for Inter Variable

```css
/* Source: MDN Variable Fonts Guide */
@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/inter-variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

### Fluid Typography with clamp()

```css
/* Source: Smashing Magazine Modern Fluid Typography */
/* clamp(minimum, preferred, maximum) */
/* preferred: vw unit creates fluid scaling + rem for zoom accessibility */

h1 { font-size: clamp(2rem, 5vw, 3.5rem); }    /* 32px → 56px */
h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); }   /* 24px → 40px */
h3 { font-size: clamp(1.25rem, 3vw, 1.75rem); } /* 20px → 28px */
body { font-size: clamp(1rem, 1.5vw, 1.125rem); } /* 16px → 18px */
```

### aria-current="page" CSS Styling

```css
/* Source: WAI-ARIA spec + a11y-collective.com */
/* Target with attribute selector — no extra class needed */
.nav-menu a[aria-current="page"] {
  color: var(--color-yellow);
  text-decoration: underline;
  text-underline-offset: 4px;
}
```

### Footer with Dynamic Year

```html
<!-- HTML -->
<footer class="site-footer">
  <p>&copy; <span class="js-year"></span> Dr. Irving Barron. All rights reserved.</p>
</footer>
```

```javascript
// JS — in main.js, runs on DOMContentLoaded
// Source: MDN Date API
function initYear() {
  const yearEl = document.querySelector('.js-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
```

### Focus Visible Styles

```css
/* Source: MDN :focus-visible */
/* Universal accessible focus indicator */
:focus-visible {
  outline: 3px solid var(--color-yellow);
  outline-offset: 2px;
}

/* Remove default focus outline only when focus-visible is supported */
:focus:not(:focus-visible) {
  outline: none;
}
```

### CSS Profile Photo Placeholder (ASSET-04)

```css
/* CSS-only, no image file needed */
.profile-photo-placeholder {
  width: 280px;
  aspect-ratio: 1;
  background-color: var(--color-navy);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.profile-photo-placeholder__initials {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 8vw, 5rem);
  color: var(--color-yellow);
  font-weight: bold;
  user-select: none;
}
```

### Sticky Navigation CSS

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-navy);
}

/* Compensate for sticky nav pushing content down */
/* Apply to <main> if needed */
/* NOT needed when nav is inside <header> at top of flow */
```

### Mobile-First Navigation CSS

```css
/* Mobile: hamburger visible, menu hidden */
.nav-toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 44px;
  min-height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-menu {
  display: none;  /* Hidden on mobile */
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu--open {
  display: flex;
  flex-direction: column;
}

/* Tablet+: hamburger hidden, menu always visible */
@media (min-width: 768px) {
  .nav-toggle {
    display: none;
  }
  .nav-menu {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-md);
  }
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Separate font weight files (.woff2 × 9) | Single variable font (InterVariable.woff2) | ~2018, now standard | Fewer requests, flexible weights |
| `font-display: block` default | `font-display: swap` explicit | 2018+ best practice | Eliminates FOIT |
| JS scroll listener for sticky nav | `position: sticky` CSS | ~2017, widely supported 2020+ | Zero-JS sticky headers |
| Viewport-specific font sizes via @media | `clamp()` fluid typography | CSS Values Level 4, ~2021 | Smooth scaling, fewer breakpoints |
| `@media (prefers-reduced-motion: reduce)` override | `@media (prefers-reduced-motion: no-preference)` guard | W3C WCAG C39 technique | Motion-off by default; safer |
| ARIA menu/menubar on `<nav>` | Plain `<nav>` with disclosure pattern | WAI-ARIA APG recommendation | Correct AT behavior for navigation |
| `target="_blank"` alone | `target="_blank" rel="noopener noreferrer"` | Security best practice ~2016 | Prevents reverse tabnapping |

**Deprecated/outdated:**
- `.woff` format: No longer needed; all modern browsers support `.woff2`
- `.ttf` format: Not needed for web delivery; only for desktop installation
- Hardcoded footer year: Replace with JS; auto-updates forever
- CSS `position: fixed` for nav: Sticky is better (stays in flow until threshold)

## Open Questions

1. **Meliora Blue exact hex value**
   - What we know: Navy is #001E5F, Yellow is #FFD82B. CONTEXT.md names "Meliora Blue" as an accent.
   - What's unclear: The exact hex. University of Rochester brand guidelines list several blues. #0047AB (Cobalt Blue) or #003494 are common UofR secondary values.
   - Recommendation: Use #003494 as a conservative secondary blue, or leave it to Claude's discretion per CONTEXT.md. The implementer can adjust after visual check. Suggest defining as `--color-meliora-blue: #003494` with a comment noting it can be adjusted.

2. **Inter Variable font file naming convention**
   - What we know: The file on rsms/inter GitHub is named `InterVariable.woff2`
   - What's unclear: Whether to use `InterVariable.woff2` or `inter-variable.woff2` (CONTEXT.md says `inter-variable.woff2`)
   - Recommendation: Download as `InterVariable.woff2` from source, rename to `inter-variable.woff2` to match the convention in CONTEXT.md.

3. **`<fieldset>` for tabs**
   - What we know: CONTEXT.md specifies `<fieldset>` for tab containers (Students page, Phase 4 scope)
   - What's unclear: APG tabs pattern uses `role="tablist"` + `role="tab"`, not fieldset. Fieldset is for form groups.
   - Recommendation: This is Phase 4 scope, not Phase 1. Document as an open question for Phase 4 research. Phase 1 only needs to establish the CSS infrastructure for tabs (`.tab`, `.tab-panel` classes).

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None — plain HTML/CSS/JS; no test framework installed |
| Config file | None — no build tooling |
| Quick run command | Open `index.html` in browser; DevTools manual check |
| Full suite command | Browser + DevTools accessibility audit (Lighthouse or axe DevTools) |

This project has no automated test runner by design (PERF-01, PERF-02 — no npm, no build tools). Validation is manual browser testing + accessibility tools.

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| FOUND-01 | 5 HTML files have `<header>`, `<nav>`, `<main>`, `<footer>` | manual | Open each page, inspect DOM | ❌ Wave 0 |
| FOUND-02 | CSS custom properties defined; brand colors applied | manual | DevTools computed styles | ❌ Wave 0 |
| FOUND-03 | Layout correct at 320px, 640px, 1024px, 1440px | manual | DevTools responsive mode | ❌ Wave 0 |
| FOUND-04 | Inter Variable loads; correct weight renders | manual | DevTools Network tab + font inspector | ❌ Wave 0 |
| FOUND-05 | All spacing/size values reference custom properties | manual | DevTools CSS inspector | ❌ Wave 0 |
| FOUND-06 | Color contrast ≥ 4.5:1 for all text | manual | Browser axe extension or Lighthouse | ❌ Wave 0 |
| NAV-01 | Nav bar visible, sticky, correct layout | manual | Scroll page; check nav stays at top | ❌ Wave 0 |
| NAV-02 | Hamburger button present on mobile (<768px) | manual | DevTools mobile viewport | ❌ Wave 0 |
| NAV-03 | Click hamburger: nav menu shows/hides | manual | Click button on mobile viewport | ❌ Wave 0 |
| NAV-04 | Active page link has yellow text + underline | manual | Check `[aria-current="page"]` on each page | ❌ Wave 0 |
| NAV-05 | Tab key reaches hamburger; focus ring visible | manual | Keyboard Tab navigation test | ❌ Wave 0 |
| LAYOUT-01 | Footer two-column (desktop), stacked (mobile) | manual | DevTools responsive mode | ❌ Wave 0 |
| LAYOUT-02 | Footer year = current year | manual | Inspect `.js-year` text content | ❌ Wave 0 |
| TYP-01–08 | Typography renders per spec | manual | Visual inspection in browser | ❌ Wave 0 |
| ANIM-01 | Sections animate on load | manual | Reload page, observe fade-in | ❌ Wave 0 |
| ANIM-02 | Animations absent with reduce-motion | manual | DevTools: emulate prefers-reduced-motion: reduce | ❌ Wave 0 |
| ANIM-03 | Hover states visible on buttons/cards/links | manual | Hover over interactive elements | ❌ Wave 0 |
| ANIM-04 | Hamburger icon changes to X when open | manual | Click hamburger; observe icon change | ❌ Wave 0 |
| ANIM-05 | Tab active state: yellow on navy | manual | Phase 4 scope; verify when tabs built | ❌ Wave 0 |
| ASSET-01–04 | Files exist at correct paths | manual | Check file system + `<link>` resolves | ❌ Wave 0 |
| PERF-01–03 | No external deps; single CSS file | manual | DevTools Network tab: verify no external loads | ❌ Wave 0 |
| PERF-04 | main.js < 200 lines | manual | Line count: `wc -l js/main.js` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** Open in browser; check the feature implemented visually
- **Per wave merge:** Full manual checklist sweep across all requirements in wave
- **Phase gate:** All requirements green (manual check) before `/gsd:verify-work`

### Wave 0 Gaps

All test infrastructure is manual browser verification — no automated test files to create. The Wave 0 setup for this phase is:

- [ ] Create directory structure: `css/`, `js/`, `assets/fonts/`, `assets/images/`
- [ ] Download `InterVariable.woff2` from rsms/inter releases → rename to `inter-variable.woff2`
- [ ] Create empty `assets/cv.pdf` placeholder
- [ ] Create `css/style.css` with section comment scaffold
- [ ] Create `js/main.js` with function scaffolding
- [ ] Create stub HTML files for all 5 pages with base structure

## Sources

### Primary (HIGH confidence)
- MDN Web Docs — CSS Custom Properties (verified 2026-03-25): https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- MDN Web Docs — Variable Fonts Guide (verified 2026-03-25): https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide
- MDN Web Docs — prefers-reduced-motion (verified 2026-03-25): https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- WAI-ARIA APG — Disclosure Navigation Pattern (verified 2026-03-25): https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/
- WAI-ARIA APG — Menubar Pattern (verified 2026-03-25): https://www.w3.org/WAI/ARIA/apg/patterns/menubar/
- W3C WCAG C39 — prefers-reduced-motion technique: https://www.w3.org/WAI/WCAG21/Techniques/css/C39
- rsms/inter GitHub repository (font source): https://github.com/rsms/inter
- WCAG contrast ratios — computed mathematically from spec formula; verified: navy/white = 15.54:1, yellow/navy = 11.18:1, gray/white = 4.95:1

### Secondary (MEDIUM confidence)
- Adrian Roselli — "Don't Use ARIA Menu Roles for Site Nav": https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html
  (Verified against WAI-ARIA APG recommendation to use disclosure pattern for site nav)
- Smashing Magazine — Modern Fluid Typography with clamp(): https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
- Tatiana Mac — prefers-reduced-motion no-preference approach: https://www.tatianamac.com/posts/prefers-reduced-motion
- a11y-collective — aria-current="page": https://www.a11y-collective.com/blog/aria-current/

### Tertiary (LOW confidence)
- Fontsource — Inter install documentation (alternative to rsms.me, not needed for this project): https://fontsource.org/fonts/inter/install

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all technologies are native browser APIs with MDN documentation
- Architecture patterns: HIGH — CSS custom properties, @font-face, media queries are well-established standards
- Pitfalls: HIGH — ARIA menubar misuse verified against official APG; animation trap verified against WCAG C39; others from official security advisories
- Color contrast values: HIGH — calculated using WCAG luminance formula (mathematical, not a tool guess)

**Research date:** 2026-03-25
**Valid until:** 2026-09-25 (6 months — stable spec-level technologies; no fast-moving frameworks)
