# Stack: ibarron.dev Faculty Website

**Defined:** 2026-03-25
**Confidence:** HIGH (all claims verified against MDN official documentation)

## Technology Recommendations

### HTML5

- **Semantic elements:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`
- **Form elements:** `<button>` for interactive controls (not `<div onclick>`)
- **Accessibility:** `<img alt>` on every image, `<h1>` once per page, proper heading hierarchy
- **Meta tags:** UTF-8 charset, viewport for mobile, Open Graph for social sharing (optional)
- **No frameworks.** Vanilla HTML5 only.

**Rationale:** HTML5 semantics enable both accessibility (screen readers, keyboard navigation) and SEO. No polyfills needed for modern browsers (2017+).

### CSS3

**Architecture:**
- Single `css/style.css` file (no SCSS/Less preprocessor)
- CSS custom properties (`:root` variables) for design tokens: colors, spacing, type scale, transitions
- CSS Grid for major layout (page grid, footer columns)
- Flexbox for component-level alignment (nav items, card headers, button groups)
- `clamp()` for fluid typography: `font-size: clamp(min, preferred, max)` scales between breakpoints without media query per property

**Responsive strategy:**
- Mobile-first: base styles for <640px, then media queries for tablet (640px) and desktop (1024px) only for layout structural changes
- No pixel-based breakpoints — use `@media (max-width: 640px)` and `(min-width: 1024px)` only for grid restructuring
- Type scale uses `clamp()` so fonts resize fluidly — only 2–3 media queries needed for layout

**Animations:**
- CSS `@keyframes` with `animation` / `transition` properties
- Always wrap in `@media (prefers-reduced-motion: no-preference)` to respect accessibility preference
- Favor `transform` and `opacity` (GPU-accelerated) over `left`/`top`/`width` (reflow-expensive)
- 0.2–0.5s duration for interactive feedback, 0.5s for page load animations

**Typography:**
- Import **Inter Variable** from self-hosted `.woff2` file, not Google Fonts CDN
  - **Why:** Works offline, no external dependency, no privacy leakage, faster in university network-restricted environments
  - Fallback: `system-ui` (Aptos, Segoe UI, San Francisco, etc.)
- Serif fallback: Georgia (web-safe) since Ivy Presto not available
- Font weights: 400, 600, 700 only (limit to reduce file size)
- Line height: 1.7 for body, 1.2 for headings

**No preprocessors.** CSS custom properties replace SCSS variables. Nesting is not needed at this scope (single file, <400 lines).

**Browser support:** All modern evergreen browsers (Chrome, Firefox, Safari, Edge 2017+). IE11 out of scope.

**Rationale:** Native CSS features (custom properties, Grid, Flexbox, clamp) eliminate build tools and dependencies. Single file is fast to load and simple to maintain.

### JavaScript

**Scope:** Vanilla JS only. Zero external libraries.

**Three isolated concerns:**

1. **Hamburger menu toggle** (~20 lines)
   - Target: `<button class="nav-toggle">` with `aria-expanded="false"`
   - Listener: `click` event toggles class `nav--open` on the nav element
   - Also toggles `aria-expanded` to `true`/`false`
   - No libraries needed

2. **Tab interface on Students page** (~40 lines)
   - Target: `<div class="tabs">`
   - Tabs with `role="tab"`, panels with `role="tabpanel"`
   - Click listener: show one panel, hide others, update `aria-selected` on active tab
   - Bonus: arrow keys (left/right) switch tabs
   - No libraries needed

3. **Footer year fill** (1 line)
   - `document.querySelector('.footer-year').textContent = new Date().getFullYear();`

**Hosting:** No build step. Drop files on server and they work.

**Rationale:** Both interactive components are simpler to write in vanilla JS than to learn and configure a library. Learning curve is minimal; maintenance is zero.

### Assets

- **Images:** JPG for photos (optimized), PNG for diagrams (lossless)
- **Fonts:** Self-hosted Inter Variable as `.woff2` (modern browsers only)
- **CV:** PDF placeholder at `assets/cv.pdf` — user uploads their own
- **No CDN.** All files served locally for offline compatibility and university network reliability

### Accessibility (WCAG 2.2 AA)

- **Color contrast:** All text must pass 4.5:1 ratio. Navy (#001E5F) on white is 12:1 ✓. Yellow (#FFD82B) on white is 1.9:1 ✗ — never use yellow as body text, only as decoration or on navy backgrounds.
- **Hamburger button:** Must be a `<button>` element with:
  - `aria-label="Menu"` or `aria-label="Open navigation"`
  - `aria-expanded="false"` / `"true"` toggled on click
  - Visual focus indicator (1px outline, 2px minimum)
- **Tab interface:** Must follow W3C ARIA Authoring Practices Guide:
  - Container: `role="tablist"`
  - Tab buttons: `role="tab"`, `aria-selected="true"/"false"`, `aria-controls="[panel-id]"`
  - Panels: `role="tabpanel"`, `aria-labelledby="[tab-id]"`
- **Headings:** One `<h1>` per page, proper nesting (no `<h1>` → `<h3>`)
- **Images:** Every `<img>` must have descriptive `alt` attribute
- **Skip links:** Optional but recommended (`<a href="#main" class="skip-link">Skip to content</a>`)
- **Focus indicators:** All interactive elements must have visible focus (outline or box-shadow)
- **Keyboard navigation:** Tab order must follow visual left-to-right, top-to-bottom flow

### Performance

- **Single CSS file:** ~400 lines, <20 KB gzipped
- **No JS bundle:** Three tiny inline functions (hamburger, tabs, year) = <500 bytes
- **No external requests** (once fonts are downloaded): pure static files, instant repeat loads
- **Font strategy:** Inter Variable single file (.woff2) is ~50 KB; load asynchronously to avoid blocking render
- **Critical rendering path:** HTML → CSS → layout → render. No blocking JS or images in header.

### Deployment & Hosting

- **Static file host:** Any static site host works (GitHub Pages, Netlify, traditional shared hosting)
- **Domain:** `ibarron.dev` (assuming domain registration already handled)
- **HTTPS:** Required (free via Let's Encrypt)
- **Subdirectory consideration:** If hosted at `https://www.rochester.edu/faculty/ibarron/`, all relative links must use document-relative paths (no leading `/`), and the CSS background images may need root-relative adjustments. Clarify deployment URL before finalizing paths.

## No Open Questions

The plain-HTML stack is fully deterministic. All recommendations are based on 2025 baseline browser capabilities.

---
*Stack research: 2026-03-25*
