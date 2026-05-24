# Research Summary: ibarron.dev Faculty Website

**Date:** 2026-03-25
**Scope:** Plain HTML/CSS/JS faculty website (no frameworks, no build tools)

---

## Stack: Modern Baseline HTML/CSS/JS (2025+)

**What to use:**
- HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- CSS3 features: custom properties, Grid, Flexbox, `clamp()` for fluid typography
- Vanilla JavaScript only (no libraries) — hamburger menu (~20 lines), tabs (~40 lines), year fill (1 line)
- Self-host Inter Variable font as `.woff2` (not Google Fonts CDN) for offline support
- Single `css/style.css` file (~400 lines) with all styling organized in layers

**What NOT to use:**
- No build tools, preprocessors (SCSS), or npm dependencies
- No external JS libraries (jQuery, Alpine, etc.)
- No Google Fonts CDN (use self-hosted `.woff2` instead)
- No JS to inject nav/footer (causes flash-of-no-nav, copy-paste is simpler)

**Browser support:** All evergreen browsers (2017+). IE11 out of scope.

---

## Features: Table Stakes vs. Differentiators

**Table Stakes (must have for credible faculty presence):**
- Name, title, affiliation prominently displayed
- Professional headshot
- Bio paragraph
- CV download
- Email contact
- Research description
- Teaching information
- Navigation menu
- Institutional affiliation link
- Mobile responsive
- HTTPS
- Semantic, accessible HTML

**Differentiators (what makes this site stand out):**
- Student-facing resources hub (office hours, recommendation letters, research opportunities)
- Research interest tags (searchable, visual)
- Highlighted authorship in publications
- Consistent University of Rochester brand colors
- Teaching philosophy statement
- Homepage highlight cards (Research, Teaching, Students)
- Fade-in animations (CSS only)
- Prospective student framing (undergrad vs. grad)
- External profile links (ResearchGate, faculty page)
- Course descriptions with level/semester badges

**Anti-features (avoid):**
- Contact form with backend (use email link instead)
- CMS (overkill for static content)
- Social media feeds (API dependency, slow)
- Dark mode toggle (adds complexity)
- Comment sections (spam risk)
- Video hero background (accessibility, performance)

---

## Architecture: Flat File, Copy-Paste Nav/Footer, Single CSS

**File structure:**
```
ibarron.dev/
├── index.html, research.html, teaching.html, students.html, contact.html
├── css/style.css (single file, ~400 lines)
├── assets/cv.pdf, inter-variable.woff2
└── .gitignore
```

**Key insight:** Flat HTML files at root (no subdirectories). Copy-paste the same `<nav>` and `<footer>` into all 5 pages — don't use JS injection.

**Build order:**
1. **Phase 1:** CSS foundation + hamburger/footer JS
2. **Phase 2:** Home page (establishes template)
3. **Phase 3:** Research, Teaching, Contact pages (parallel, use template)
4. **Phase 4:** Students page (tab interface, most JS-complex)

**CSS layers:**
- Tokens: color, spacing, type variables
- Layout: Grid, Flexbox, breakpoints
- Components: buttons, cards, tag pills
- Animations: fade-in, hover (always with `@media (prefers-reduced-motion: no-preference)`)

---

## Pitfalls: Critical Accessibility & UX Mistakes to Avoid

### 1. Yellow Text on White Fails WCAG AA ⚠️
- Dandelion Yellow (#FFD82B) on white has contrast ratio ~1.9:1 (needs 4.5:1)
- **Solution:** Use yellow ONLY on navy backgrounds or as decoration. All body text must be navy or dark gray on white.

### 2. Hamburger Button Needs ARIA ⚠️
- If hamburger is just a `<div>` with click handler, screen readers ignore it.
- **Solution:** Use semantic `<button>` with `aria-label="Toggle menu"` and `aria-expanded="false"/"true"` toggled on click.

### 3. Relative Paths Break on Subdirectory Hosting
- If site moves to `university.edu/~ibarron/`, relative paths like `href="research.html"` break.
- **Solution:** CONFIRMED: Your domain is `ibarron.dev` (root), so document-relative paths work fine. But verify deployment URL matches.

### 4. Tabs Interface Needs ARIA Pattern ⚠️
- If tab panels are plain `<div>` elements, screen readers see only buttons, not a tabbed interface.
- **Solution:** Use ARIA tabs pattern: `role="tablist"`, `role="tab"`, `role="tabpanel"`, with `aria-selected` and `aria-controls`.

### 5. Animations Without `prefers-reduced-motion` Are Disorienting
- If animations are added without media query wrapper, users with motion preferences disabled see unwanted animations.
- **Solution:** Every animation must be wrapped in `@media (prefers-reduced-motion: no-preference) { ... }` at write time, not as retrofit.

### Other pitfalls:
- Broken heading hierarchy (skip levels) — use proper H1 → H2 → H3 nesting
- Focus indicators removed without replacement — keyboard users can't see where focus is
- Images without alt text — every `<img>` needs descriptive alt
- Color alone to convey meaning — always use color + text/icon

---

## Key Findings

| Dimension | Recommendation | Confidence |
|-----------|---|---|
| **Stack** | HTML5 + CSS3 native features + vanilla JS | HIGH |
| **No build tools** | Confirmed: plain files, no npm/webpack/etc. | HIGH |
| **Single CSS file** | At 400 lines, simpler than per-page files | HIGH |
| **Copy-paste nav** | Better than JS injection (no flash-of-no-nav) | HIGH |
| **Accessibility** | WCAG AA required: ARIA on hamburger/tabs, color contrast | HIGH |
| **Color contrast** | Yellow fails on white; use navy or dark gray for text | HIGH |
| **Self-host fonts** | Inter Variable `.woff2` (not Google Fonts CDN) | HIGH |
| **Vanilla JS** | Both interactive components <100 lines total | HIGH |
| **Relative paths** | Document-relative (no leading `/`) work for `ibarron.dev` root | HIGH |
| **Animations** | CSS only, wrap all in `prefers-reduced-motion` block | HIGH |

---

## No Open Questions

The stack, architecture, and feature set are fully specified. All recommendations are based on 2025 baseline capabilities.

---

*Research summary: 2026-03-25*
*Created by: gsd-research-synthesizer*
