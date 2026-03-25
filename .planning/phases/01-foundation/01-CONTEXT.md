# Phase 1: Foundation - Context

**Gathered:** 2026-03-25
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish the CSS design system, shared navigation and footer components, and JavaScript utilities that all five pages will reuse. This includes the responsive layout system, typography hierarchy, component patterns (buttons, cards, tag pills), animations, and font setup.

Every subsequent page (Home, Research, Teaching, Students, Contact) will be built by filling in content into templates established here.

</domain>

<decisions>
## Implementation Decisions

### Component Structure
- Use named classes with variant modifiers: `.btn`, `.btn--primary`, `.btn--outline` for buttons; `.card` with variants for cards; `.tag-pill` for tags
- Clear, explicit naming. Each component type has a base class with modifier classes for variations
- Enables reusability across all five pages

### Navigation Pattern
- Mark the current page with `aria-current="page"` on the active nav link (semantic ARIA, not class-based)
- Structure nav with `role="menubar"` for accessibility
- Mobile menu is a hidden menu toggled by JavaScript hamburger button
- Ensures screen readers announce the current page automatically

### Animation Approach
- Apply page-load animations (fade-in + slide up) to all major sections when page loads
- Use CSS keyframes with 0.5s duration and 0.1s stagger between sections
- **Critical:** Wrap all animations in `@media (prefers-reduced-motion: no-preference)` — animations must be absent when users prefer reduced motion
- Additional 0.2s transitions on hover/focus for interactive elements

### Font Setup
- Self-host Inter Variable as a single `.woff2` file in `assets/fonts/`
- Load via `@font-face` in CSS
- Fallback to system sans-serif (`system-ui, -apple-system, sans-serif`) if font fails to load
- No additional formats (.woff, .ttf) — modern browsers all support .woff2
- Georgia serif loaded via system font stack (available on all major operating systems)

### HTML Semantics
- Semantic-first approach: `<button>` elements for buttons (not `<a>` or `<div>`), `<article>` or `<section>` for cards, `<fieldset>` for tab containers
- Use proper heading hierarchy (one H1 per page, no skipped levels)
- Apply ARIA roles and attributes where semantics need enhancement (tabs, tab panels, menubar)
- Improves accessibility for screen readers and search engines

### CSS Organization
- Single `css/style.css` file (per requirements)
- Use CSS custom properties for all colors, spacing, typography, and breakpoints
- Custom properties organized by category: `--color-*`, `--spacing-*`, `--font-*`, `--breakpoint-*`
- Breakpoints: `--breakpoint-mobile: 640px`, `--breakpoint-tablet: 1024px`
- Define custom properties in `:root` scope

### Responsive Breakpoints
- Mobile-first approach: Start with single-column, then expand to multi-column
- Use media queries at `640px` (mobile → tablet) and `1024px` (tablet → desktop)
- Navigation collapses to hamburger on screens `< 768px`
- Multi-column layouts (hero, footer, contact) stack to single column on mobile

### Claude's Discretion
- Exact animation keyframe definitions (easing functions, precise timings within the 0.5s/0.2s constraints)
- Specific CSS custom property naming conventions (beyond the `--category-name` pattern)
- Performance optimization techniques (minification, caching strategies)
- Exact shade/saturation of brand colors (use University of Rochester official palette: navy #001E5F, Dandelion Yellow #FFD82B as anchor points)

</decisions>

<specifics>
## Specific Ideas

- University of Rochester brand guidelines are the north star — navy, Dandelion Yellow, Inter + Georgia is the approved direction
- Inter Variable font gives flexibility for future weight adjustments without multiple files
- Semantic HTML reflects the professional, academic nature of a faculty website
- Animations should feel smooth and professional, not flashy — respecting prefers-reduced-motion is non-negotiable (legal/accessibility requirement)

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Brand & Design System
- `.planning/PROJECT.md` — Core project vision, constraints, key decisions (plain HTML/CSS/JS only, University of Rochester brand)
- `.planning/REQUIREMENTS.md` — Complete v1 requirements with detailed acceptance criteria (FOUND-01 through PERF-04 for Phase 1)

### University of Rochester Brand
- No external brand docs provided. Use official UofR colors:
  - Navy: #001E5F
  - Dandelion Yellow: #FFD82B
  - Meliora Blue (accent): from official brand palette
  - Grays and accent colors as detailed in REQUIREMENTS.md

### Typography
- Georgia serif: System default, available on all OS (macOS, Windows, Linux)
- Inter Variable: Download from [fonts.google.com](https://fonts.google.com/specimen/Inter) or [rsms.me/inter](https://rsms.me/inter) (self-host in project)

### Accessibility
- WCAG 2.1 AA standard (minimum)
- All color contrast checked per REQUIREMENTS.md (A11Y-01, A11Y-02)
- ARIA Authoring Practices Guide: https://www.w3.org/WAI/ARIA/apg/ (for ARIA roles/attributes)

### Responsive Design
- No external framework — custom media queries per breakpoints defined above
- Mobile-first approach standard

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None yet — Phase 1 establishes the foundation that all other phases build on

### Established Patterns
- None yet — this phase creates the patterns

### Integration Points
- All subsequent pages (index.html, research.html, teaching.html, students.html, contact.html) will import `css/style.css` and `js/main.js`
- All pages will use the nav component pattern and footer component pattern defined here
- All pages will follow the semantic HTML structure and responsive breakpoint system

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-03-25*
