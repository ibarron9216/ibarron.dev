# Architecture: ibarron.dev Faculty Website

**Defined:** 2026-03-25
**Confidence:** HIGH

## File Structure

```
ibarron.dev/
├── index.html              (home page — establishes nav/footer shell)
├── research.html
├── teaching.html
├── students.html
├── contact.html
├── css/
│   └── style.css          (single file, ~400 lines, all styling)
├── assets/
│   ├── cv.pdf             (placeholder — user uploads)
│   └── inter-variable.woff2   (self-hosted font file)
└── .gitignore
```

**Key decisions:**
- **Flat HTML at root:** All `.html` files at project root (not in subdirectories) so relative href paths stay simple: `href="research.html"`
- **Single CSS file:** At ~400 lines for this scope, one monolithic `style.css` beats per-page stylesheets.
- **CSS tokens as source of truth:** All colors, sizes, spacing defined as `--var` in `:root`
- **Vanilla JS embedded inline:** No separate `.js` file — JavaScript lives as `<script>` blocks at the end of pages

## Build Order & Dependencies

**Phase 1: CSS Foundation & JS Setup**
- `css/style.css` with all tokens, layout, components, animations
- Hamburger menu JS (toggle, aria-expanded)
- Footer year JS (one-liner)

**Phase 2: Home Page (index.html)**
- Establishes nav/footer/section template copied to all other pages
- Hero section, about section, three highlight cards

**Phase 3: Research, Teaching, Contact (parallel)**
- research.html (overview, interests, NSF project, publications)
- teaching.html (philosophy, three course cards)
- contact.html (contact details, external links)

**Phase 4: Students Page (students.html)**
- Tab interface (Current/Prior/Prospective students)
- Full ARIA tabs pattern with arrow key handling

## JavaScript Responsibilities

1. **Hamburger menu toggle** (~20 lines)
   - Click on button → toggle CSS class `nav--open` on nav element
   - Toggle `aria-expanded` attribute

2. **Tab interface** (~40 lines)
   - Click on tab button → show that panel, hide others, update `aria-selected`
   - Arrow keys (left/right) switch between tabs

3. **Footer year** (1 line)
   - `document.querySelector('.footer-year').textContent = new Date().getFullYear();`

## Shared Components (Copy-Paste)

- **Navigation bar:** Same `<nav>` markup on all 5 pages (no JS injection)
- **Footer:** Same `<footer>` markup on all 5 pages
- **Component library:** Buttons, cards, tag pills (defined in CSS, reused everywhere)

---

*Architecture research: 2026-03-25*
