# Phase 3: Content Pages - Research

**Researched:** 2026-03-26
**Domain:** Multi-page content assembly with semantic publication cards, course cards, and contact layout
**Confidence:** HIGH

## Summary

Phase 3 builds three fully-featured pages (Research, Teaching, Contact) using components and patterns already established in Phase 1 (design system) and Phase 2 (home page template). The primary technical challenge is implementing publication cards with IEEE-format citations and proper author highlighting. Secondary challenges are tag layout with responsive wrapping and semantic contact details using definition lists.

**Key insight:** All patterns are variations of existing components. No custom infrastructure needed beyond CSS utility classes.

**Primary recommendation:** Extend existing `.card`, `.tag-pill`, and section patterns with Phase 3-specific classes. Use semantic HTML (mark for author highlighting, dl/dt/dd for contact details, inline SVG or simple icons for page headers). All layouts reuse the established responsive grid system.

## User Constraints (from CONTEXT.md)

### Locked Decisions

**Publication Cards — IEEE citation format with author highlighting:**
- Reading order: Authors → "Title" → Venue (Journal, vol., issue, pages) → Year
- Author name ("I. R. Barron" or "Irving Barron") in **bold weight with light background highlight**
- Light background color: light gray or very light yellow (not bright) — Claude's discretion
- Year is part of citation line (not separate badge) for cleaner card design
- Card styling: `.card` with `.card--highlighted` (yellow top border)
- Four publications total per RES-13

**Page Headers — Navy background, white text, decorative icon on right:**
- Header height: 35-40vh (balanced prominence without excessive scroll on mobile)
- H1 only (no lead text): "Research", "Teaching", "Contact"
- Right column: decorative SVG icon or graphic (microscope for Research, podium for Teaching, envelope for Contact)
- Decorative element design is Claude's discretion (illustration style, colors, positioning)

**Course Cards — Vertical stack with badges on right:**
- H3 title at top
- Semester badge and course number badge side-by-side on the right
- Navy pill styling (consistent with home page badge style)
- Full course description below
- Card styling: `.card` with `.card--highlighted` (yellow top border)
- Three course cards total (ECE 241, ECE 245/445, ECE 487)

**Contact Page Layout — Two-column desktop, stacked mobile:**
- Both columns as `.card` components with `.card--highlighted` (yellow top border)
- Left: "Get in Touch" card with definition list format (dl/dt/dd)
- Right: "Profiles & Links" card with bulleted external links
- Desktop: side-by-side via grid; Mobile: single column stack
- Email link: `mailto:ibarron@ur.rochester.edu`
- External links: target="_blank" with descriptive text
- Italic note below contact details: "No contact form — please reach out directly by email"

**Research Interests — Wrapped flex layout with visual distinction for primary interests:**
- Tag pills display inline with natural wrapping to multiple rows
- Responsive by default (flexible on mobile, spreads on desktop)
- Base styling: `.tag-pill` (navy background, white text, rounded)
- Primary interests (Digital Image Processing, Digital Forensics, Privacy-Preserving Communication) — visual distinction approach is Claude's discretion (color, size, or styling variation)

**First-Person Voice (Carry-forward from Phase 1 & 2):**
- All biographical, teaching philosophy, and personal narrative content must use "I/my/me"
- Never third-person
- Core project requirement (per MEMORY.md: feedback_first_person.md is mandatory)

### Claude's Discretion

- Exact icon/graphic design for page headers (illustration style, colors, positioning within right column)
- Specific visual distinction method for primary research interests (color accent, size increase, or styling variation)
- Exact light color for author name background highlight (light gray vs. light yellow)
- Course level badge wording/formatting (e.g., "Undergraduate", "Upper-Level", "Mixed", or course level from number)
- Link hover/active states on Contact page external links
- Padding, margins, and spacing refinements within cards and sections

### Deferred Ideas (OUT OF SCOPE)

- Real profile photo replacement (Phase 3 uses CSS placeholder, v2 will replace with real image)
- ResearchGate profile link (user chose not to include — LinkedIn preferred)
- University Faculty Page link (redundant, user chose not to include)
- GitHub link on Contact page (placeholder for future, currently empty)

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| RES-01 | Create page header section with navy background, white H1 "Research" | Page header pattern: 35-40vh navy section with white text, decorative icon on right column |
| RES-02 | Add lead text "Digital image processing · Security · Privacy-preserving communication" in white | Eyebrow pattern: yellow text on navy background (established in Phase 1 & 2) |
| RES-03 | Create "Research Overview" section on butter background with two-paragraph plain-English summary | Section pattern: `.section--butter` with standard container and typography |
| RES-04 | Create research interests section with tag pills (navy bg, white text, rounded) | `.tag-pill` component established in Phase 1; extends with wrapping flex layout |
| RES-05 | Each tag pill: seven research interests (Digital Image Processing, Digital Forensics, Information Security, Barcode Technologies, Privacy-Preserving Communication, Signal Processing, Computer Vision) | Flex wrap responsive layout: natural wrapping to multiple rows per CSS-Tricks flexbox patterns |
| RES-06 | Create NSF project highlight card with "Funded Research" eyebrow | `.card--funded` class with eyebrow styling; extends existing `.card` component |
| RES-07 | NSF card includes project title, funding info ("National Science Foundation · $50,000 · with Prof. Gaurav Sharma"), and description | Card content pattern: eyebrow + heading + paragraph + emphasis details |
| RES-08 | Create publications section with "Selected Publications" eyebrow and H2 | Section + typography pattern: eyebrow + H2 heading |
| RES-09 | Add italic note below publications heading | Typography: `<p style="font-style: italic;">` on section or card footer |
| RES-10 | Create publication cards (one per publication) with left yellow border | `.card--publication` class: left 4px yellow border per IEEE citation card pattern |
| RES-11 | Each publication card includes authors, title, venue, year badge (navy pill, right-aligned) | Publication card semantic markup: structured author → title → venue → year per IEEE citation format |
| RES-12 | Bold author name "I. R. Barron" or "Irving Barron" in each publication listing | Author highlighting: `<strong>` tag with light background (light gray/yellow) via `.author-highlight` class |
| RES-13 | Include 4 publications: "Quashing Quishing...", "Optimized Modulation...", "Proximally Secure...", "Toward CanvasChain..." with correct venues and years | Publication card pattern: repeatable semantic HTML structure |
| TEACH-01 | Create page header section with navy background, white H1 "Teaching" | Page header pattern: 35-40vh navy section with white text, decorative icon (podium/book theme) |
| TEACH-02 | Add lead text "University of Rochester · ECE Department" in white | Eyebrow pattern: yellow text on navy background |
| TEACH-03 | Create "Teaching Philosophy" section on butter background with philosophy statement | Section pattern: `.section--butter` with first-person narrative content |
| TEACH-04 | Create "Courses I Teach" section with H2 and eyebrow | Section + typography pattern |
| TEACH-05 | Create three course cards (ECE 241, ECE 245/445, ECE 487) stacked vertically | Course card pattern: vertical stack layout using `.card` component |
| TEACH-06 | Each course card has left yellow border, semester badge (navy pill, right-aligned), level badge | Course card styling: `.card--highlighted` + `.badge--semester` + `.badge--level` |
| TEACH-07 | Each course card includes H3 title (with course number), and full description | Card content structure: H3 + badges on right + paragraph description |
| TEACH-08 | Add note below courses linking to Students Hub page | Footer text: link to students.html page |
| CONT-01 | Create page header section with navy background, white H1 "Contact" | Page header pattern: 35-40vh navy section with white text, decorative icon (envelope/phone theme) |
| CONT-02 | Create two-column grid (desktop), stacked (mobile) | Contact grid layout: `.grid-2` responsive grid (1fr mobile → repeat(2, 1fr) at 640px) |
| CONT-03 | Left column: "Get in Touch" card with intro text | Left card: `.card` with `.card--highlighted` |
| CONT-04 | Contact details: Email, Office, Address, Office Hours (all with navy square bullets) | Definition list semantic HTML: `<dl><dt>Email</dt><dd><a href="mailto:...">` + CSS styling for bullets |
| CONT-05 | Email is a mailto: link (ibarron@ur.rochester.edu) | Link pattern: `<a href="mailto:ibarron@ur.rochester.edu">` |
| CONT-06 | Right column: "Profiles & Links" card with H3 | Right card: `.card` with `.card--highlighted` |
| CONT-07 | External links: UofR ECE Dept, LinkedIn, GitHub (all target="_blank") | Link pattern: `<a href="..." target="_blank">` with descriptive text |
| CONT-08 | Add italic note: "No contact form — please reach out directly by email." | Footer text: italic styling on note paragraph |

</phase_requirements>

---

## Standard Stack

### Core Components (Extend from Phase 1 & 2)

| Component | Established | Purpose | Phase 3 Extension |
|-----------|-------------|---------|------------------|
| `.section` | Phase 1 | Page sections with padding/background | No change — reuse as-is |
| `.section--navy` | Phase 1 | Navy background sections | No change — reuse for page headers |
| `.section--butter` | Phase 1 | Butter background sections | No change — reuse for content sections |
| `.section--spacious` | Phase 2 | Increased padding (100px top/bottom) | Use for Research page header if needed |
| `.card` | Phase 1 | Base card component | Extend with `.card--publication`, `.card--funded` variants |
| `.card--highlighted` | Phase 2 | Yellow top border (4px) | Reuse for publication, course, and contact cards |
| `.tag-pill` | Phase 1 | Navy pill, white text, rounded | Extend with `.tag-pill--primary` for featured interests (Claude's discretion on implementation) |
| `.btn` | Phase 1 | Base button | No new buttons needed in Phase 3 |
| `.badge--year` | Phase 1 | Compact navy pill (4px padding) | Use for publication year badges |
| `.badge--semester` | Phase 1 | Compact navy pill (4px padding) | Use for course semester badges |
| `.grid-2` | Phase 1 | Two-column grid (1024px+) | Reuse for Contact page two-column layout |
| `.grid-3` | Phase 2 | Three-column grid (1024px+) | No use in Phase 3 |
| `.eyebrow` | Phase 1 | Muted gray uppercase label | Extend with section--navy override (yellow color already established) |

### Typography (Reuse from Phase 1 & 2)

| Element | Font | Size | Weight | Use |
|---------|------|------|--------|-----|
| H1 | Georgia serif | `--font-size-heading` | 700 | Page headers: "Research", "Teaching", "Contact" |
| H2 | Inter sans-serif | `--font-size-subheading` | 700 | Section headings: "Research Overview", "Courses I Teach" |
| H3 | Inter sans-serif | `--font-size-subheading` | 700 | Card titles: publication citations, course titles |
| Eyebrow | Inter sans-serif | `--font-size-label` (0.875rem) | 700 | Section labels: "Research Overview", "Selected Publications", "Funded Research" |
| Body | Inter sans-serif | `--font-size-body` | 400 | Paragraphs, descriptions, contact details |
| Badges | Inter sans-serif | 0.75rem | 700 | Year, semester badges (existing `.badge--*` classes) |

### Color Palette (Reuse from Phase 1)

| Color | Variable | Hex | Use |
|-------|----------|-----|-----|
| Navy | `--color-navy` | #001E5F | Section backgrounds, text on light backgrounds, button backgrounds |
| Yellow | `--color-yellow` | #FFD82B | Card borders, eyebrow text on navy, accent, badge backgrounds |
| White | `--color-white` | #FFFFFF | Body background, text on navy, button text |
| Butter | `--color-butter` | #FFFBF0 | Section backgrounds (content sections) |
| Dark Gray | `--color-dark-gray` | #707070 | Eyebrow text, muted text on white backgrounds |
| Border | `--color-border` | #E8E8E8 | Card borders |
| Meliora Blue | `--color-meliora-blue` | #0045A0 | Hover states (buttons, links) |

### Responsive Breakpoints (Established in Phase 1)

| Breakpoint | Value | Use |
|------------|-------|-----|
| Mobile | < 640px | Single column, hamburger nav |
| Tablet | 640px – 1023px | Two-column grid, expanded nav |
| Desktop | ≥ 1024px | Three-column grid, full layout |

### Installation / Assets (Reuse from Phase 1)

No new dependencies. All styling via `css/style.css`. Fonts already self-hosted.

## Architecture Patterns

### Page Header Pattern (All Three Pages)

**Structure:** Navy background section with two-column layout. Left column: white H1 only. Right column: decorative SVG icon or illustration.

**HTML Pattern:**
```html
<section class="section section--navy section--page-header" style="min-height: 35vh;">
  <div class="container">
    <div class="page-header__grid">
      <!-- Text column -->
      <div class="page-header__text animate-on-load">
        <h1>Research</h1>
      </div>
      <!-- Icon column -->
      <div class="page-header__icon animate-on-load">
        <!-- Inline SVG (aria-hidden for decorative) or img tag -->
        <svg aria-hidden="true" focusable="false" width="200" height="200" viewBox="0 0 200 200">
          <!-- SVG path for microscope, podium, envelope, etc. -->
        </svg>
      </div>
    </div>
  </div>
</section>
```

**CSS Pattern:**
```css
.page-header__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .page-header__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.page-header__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Icon sizing — Claude's discretion on exact dimensions */
}

.page-header__icon svg {
  width: clamp(120px, 25vw, 280px);
  height: clamp(120px, 25vw, 280px);
  color: var(--color-white); /* Can style SVG strokes/fills via color property */
}
```

**Icon Approach (Claude's Discretion):**
- **Inline SVG:** Small icons (< 5KB) embedded directly in HTML. Allows CSS styling (color, fill, stroke), no HTTP request. Trade-off: larger HTML file size.
- **Image Tag:** Clean DOM, cached. Trade-off: requires separate file request, no inline styling.
- **CSS Icons:** Pseudo-elements with border-radius, box-shadow. Simplest, most performant, limited visual fidelity.

**Recommendation:** Inline SVG for page header icons (typically < 2KB each). Use `aria-hidden="true"` and `focusable="false"` to prevent screen reader announcement and keyboard navigation inside SVG.

### Publication Card Pattern (Research Page)

**Semantic Structure:** Author → Title (in quotes) → Venue details → Year

**HTML Pattern:**
```html
<div class="card card--highlighted card--publication animate-on-load">
  <!-- Authors -->
  <p class="publication__authors">
    <strong class="author-highlight">I. R. Barron</strong>, Author 2, and Author 3,
  </p>

  <!-- Title in quotes -->
  <p class="publication__title">"Quashing Quishing: Quantifying the Threat of QR Code Exploitation,"</p>

  <!-- Venue, volume, pages, year -->
  <p class="publication__details">
    <em>IEEE Transactions on Information Forensics and Security</em>, vol. 18, no. 5, pp. 2234–2248, May 2023.
  </p>
</div>
```

**CSS Pattern:**
```css
.card--publication {
  border-left: 4px solid var(--color-yellow);
  border-top: none; /* Override .card--highlighted top border */
  border-radius: 0 8px 8px 0;
}

.publication__authors {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-body);
  font-weight: 400;
}

.author-highlight {
  font-weight: 700;
  background-color: #f5f5f5; /* Light gray or --color-butter -- Claude's discretion */
  padding: 0 2px; /* Minimal padding around highlighted name */
  border-radius: 2px;
}

.publication__title {
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
  font-style: italic;
}

.publication__details {
  margin-bottom: 0;
  font-size: var(--font-size-body);
  color: var(--color-dark-gray);
}

.publication__details em {
  font-style: italic;
}
```

**IEEE Citation Best Practice:** Venue italicized, year integrated into venue line (not separate badge). This maintains clean card design and follows academic publishing conventions.

**Author Highlighting:** Use `<strong>` tag (semantic) with light background. The light background (not bold alone) makes author stand out visually while maintaining professional appearance. Avoid bright colors — light gray (#f5f5f5) or very light yellow (var(--color-butter)) recommended.

### Course Card Pattern (Teaching Page)

**Structure:** H3 title, semester + level badges on right (flexbox justify-end), description below

**HTML Pattern:**
```html
<div class="card card--highlighted animate-on-load">
  <!-- Title and badges row -->
  <div class="course__header">
    <h3 class="course__title">ECE 245/445: Digital Signal Processing</h3>
    <div class="course__badges">
      <span class="badge--semester">Spring 2025</span>
      <span class="badge--level">Upper-Level</span>
    </div>
  </div>

  <!-- Description -->
  <p class="course__description">
    In this course, I teach the principles of signal processing...
  </p>
</div>
```

**CSS Pattern:**
```css
.course__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.course__title {
  flex: 1;
  margin: 0;
}

.course__badges {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-shrink: 0;
}

.badge--semester,
.badge--level {
  /* Reuse existing badge styles from Phase 1 */
  display: inline-block;
  background-color: var(--color-navy);
  color: var(--color-white);
  border-radius: 100px;
  padding: var(--spacing-xs) var(--spacing-md);
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
}

.course__description {
  margin: 0;
  color: var(--color-navy);
}
```

**Responsive Consideration:** On mobile (<1024px), course header may wrap if space is tight. Using `flex-wrap: wrap` on badges container allows badges to wrap to next line if needed. Course title stays on its own line to maintain readability.

### Research Interests Tag Layout (Research Page)

**Structure:** Flex container with flex-wrap, gap spacing, natural wrapping to multiple rows

**HTML Pattern:**
```html
<div class="research-interests animate-on-load">
  <span class="tag-pill">Digital Image Processing</span>
  <span class="tag-pill">Digital Forensics</span>
  <span class="tag-pill tag-pill--primary">Privacy-Preserving Communication</span>
  <!-- More tags... -->
</div>
```

**CSS Pattern:**
```css
.research-interests {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.tag-pill {
  display: inline-block;
  background-color: var(--color-navy);
  color: var(--color-white);
  border-radius: 100px;
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-sans);
  font-size: var(--font-size-label);
  font-weight: 700;
  white-space: nowrap;
}

/* Primary interest visual distinction — Claude's discretion on method */
.tag-pill--primary {
  /* Option 1: Larger size */
  font-size: 0.95rem;
  padding: var(--spacing-sm) var(--spacing-lg);

  /* Option 2: Different background color (e.g., Meliora Blue) */
  /* background-color: var(--color-meliora-blue); */

  /* Option 3: Border accent */
  /* border: 2px solid var(--color-yellow); */
}
```

**Responsiveness:** `flex-wrap: wrap` creates natural responsive behavior — tags flow across row and wrap to new lines as needed. No media queries required for tag layout itself; spacing and font sizes already use `clamp()` from Phase 1.

### Contact Page Layout (Contact Page)

**Structure:** Two-column grid (desktop) / stacked (mobile), both columns as `.card` components with definition list on left

**HTML Pattern:**
```html
<section class="section">
  <div class="container">
    <div class="grid-2 contact__grid">
      <!-- Left column: Get in Touch -->
      <div class="card card--highlighted animate-on-load">
        <h3>Get in Touch</h3>
        <p>Contact me directly via email:</p>

        <dl class="contact-details">
          <dt>Email</dt>
          <dd><a href="mailto:ibarron@ur.rochester.edu">ibarron@ur.rochester.edu</a></dd>

          <dt>Office</dt>
          <dd>Hajim School of Engineering, Room 303</dd>

          <dt>Address</dt>
          <dd>University of Rochester, Rochester, NY 14627</dd>

          <dt>Office Hours</dt>
          <dd>By appointment — email to schedule</dd>
        </dl>

        <p class="contact-note"><em>No contact form — please reach out directly by email.</em></p>
      </div>

      <!-- Right column: Profiles & Links -->
      <div class="card card--highlighted animate-on-load">
        <h3>Profiles &amp; Links</h3>
        <ul class="profile-links">
          <li><a href="https://..." target="_blank">University of Rochester ECE Department</a></li>
          <li><a href="https://..." target="_blank">LinkedIn</a></li>
          <li><a href="https://..." target="_blank">GitHub</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

**CSS Pattern — Definition List Styling:**
```css
.contact-details {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-sm) var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.contact-details dt {
  font-weight: 700;
  color: var(--color-navy);
}

.contact-details dd {
  margin: 0;
  color: var(--color-dark-gray);
}

.contact-details a {
  color: var(--color-navy);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.contact-details a:hover {
  color: var(--color-meliora-blue);
}

.contact-note {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  font-size: var(--font-size-body);
  color: var(--color-dark-gray);
}

.profile-links {
  list-style: none;
  margin: var(--spacing-lg) 0 0 0;
  padding: 0;
}

.profile-links li {
  margin-bottom: var(--spacing-md);
}

.profile-links li::before {
  content: '▪ '; /* Navy square bullet */
  color: var(--color-navy);
  margin-right: var(--spacing-sm);
  font-weight: 700;
}

.profile-links a {
  color: var(--color-navy);
  text-decoration: none;
  font-weight: 700;
}

.profile-links a:hover {
  color: var(--color-meliora-blue);
  text-decoration: underline;
}
```

**Definition List Benefits:** `<dl>` is semantic HTML that signals key-value relationship to screen readers and search engines. Improves accessibility and SEO. CSS Grid layout makes alignment clean without unnecessary divs.

**Responsive Behavior:** `.grid-2` already handles desktop (two columns at 1024px) and mobile (single column stacked). No additional media queries needed — reuse Phase 1 breakpoint.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Publication citations | Custom parsing / regex | Semantic HTML structure + CSS classes | Citations are inherently structured; custom parsing is error-prone, unmaintainable, and breaks accessibility |
| Definition lists | Divs + manual styling | `<dl>`, `<dt>`, `<dd>` + CSS Grid/Flexbox | Semantic HTML is clearer, better for SEO, accessible to screen readers, and only requires ~10 lines of CSS |
| Responsive two-column layout | JavaScript breakpoint detection | CSS Grid + `grid-template-columns: repeat(2, 1fr)` at 1024px breakpoint | CSS handles all responsive logic; JS is unnecessary and adds complexity |
| Tag wrapping layout | Position: absolute + manual offsets | `display: flex; flex-wrap: wrap;` | Flex wrap is intentionally designed for this; manual positioning breaks on different content lengths |
| Author name highlighting | Separate span + JavaScript matching | `<strong>` tag + `.author-highlight` class | Semantic HTML is clearer; CSS background is sufficient visual distinction; no JS needed |
| Page header icons | Custom icon fonts | Inline SVG (< 5KB) or simple img tag | Inline SVG is performant, cacheable via browser, and allows CSS styling (color property). Icon fonts add HTTP request and are less flexible. |

**Key insight:** All Phase 3 layouts are semantic HTML + CSS patterns already proven in Web standards. Hand-rolling risks duplicate effort, accessibility regressions, and maintenance debt.

---

## Common Pitfalls

### Pitfall 1: Author Name Highlighting Loses Readability

**What goes wrong:** Background color too bright, bold weight already strong, or highlight extends beyond name only.

**Why it happens:** Confusion about visual hierarchy — developers add too much contrast thinking it will help. Actually makes citation harder to scan because the eye jumps to the highlight instead of reading left-to-right.

**How to avoid:**
- Use **light gray or light yellow** background only — not bright yellow, not navy
- Pair with `<strong>` tag for semantic weight, but the background is the primary visual signal
- Limit highlight to author initials/name only — e.g., `<strong class="author-highlight">I. R. Barron</strong>`, not the whole sentence
- Add minimal padding (0–2px) so highlight sits tight around text

**Verification:** Compare against academic CV styling or journal websites (IEEE Xplore, ACM Digital Library). Author names have subtle background, not neon highlight.

**Code example (correct):**
```css
.author-highlight {
  font-weight: 700;
  background-color: #f5f5f5; /* Light gray */
  padding: 0 2px;
  border-radius: 2px;
}
```

### Pitfall 2: Definition List Layout Breaks on Different Screen Sizes

**What goes wrong:** Two-column grid layout (dt on left, dd on right) doesn't wrap properly on mobile, causing text overflow or label/value misalignment.

**Why it happens:** Using `grid-template-columns: auto 1fr` assumes left column (labels) stays narrow. On mobile with longer labels or small viewport, auto sizing collapses or text wraps awkwardly inside cells.

**How to avoid:**
- Use `grid-template-columns: auto 1fr` for desktop (label width auto, value takes remaining space)
- Override with single-column stack on mobile: `@media (max-width: 639px) { .contact-details { grid-template-columns: 1fr; } }`
- Or use flexbox with `flex-direction: column` on mobile instead of grid
- Test on actual mobile (not just browser resize) — text wrapping behavior is different

**Verification:** View contact page on 320px, 480px, 768px, and 1024px widths. Labels and values should align cleanly at all sizes.

**Code example (correct):**
```css
.contact-details {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-sm) var(--spacing-md);
}

@media (max-width: 639px) {
  .contact-details {
    grid-template-columns: 1fr;
    gap: var(--spacing-xs);
  }
}
```

### Pitfall 3: Tag Wrapping Layout Doesn't Account for Wide Screens

**What goes wrong:** Tags on research interests section spread too far apart on desktop because gap spacing is large and flex items are too short, creating uneven rows.

**Why it happens:** Using `gap: var(--spacing-lg)` (24px) between small pills on a wide container causes visual imbalance. Flex algorithm tries to fit as many tags as possible per row, then aligns remaining tags awkwardly.

**How to avoid:**
- Use moderate gap: `gap: var(--spacing-md)` (16px) or `gap: var(--spacing-sm)` (8px) for tighter layout
- Accept natural wrapping — don't force justify-content or align-content beyond flex-start
- Test with longest tag name on different widths (320px, 768px, 1024px) to ensure consistent behavior
- Don't use `justify-content: space-between` or `space-around` on flex container with wrapping — it causes uneven spacing on last row

**Verification:** Render research interests on desktop at 1024px, 1400px, and 1920px. Tags should wrap naturally without large gaps.

**Code example (correct):**
```css
.research-interests {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md); /* 16px — balanced spacing */
  margin: var(--spacing-lg) 0;
}
```

### Pitfall 4: Page Header Icon Doesn't Scale Responsively

**What goes wrong:** Inline SVG is fixed width/height (e.g., `width="200" height="200"`), appears too small on desktop and too large on mobile, breaking visual balance with text.

**Why it happens:** Not using CSS sizing or clamp() — the SVG size is hardcoded in HTML attributes. The header text scales via clamp(), but icon is static.

**How to avoid:**
- Remove hardcoded width/height from SVG HTML attributes (or keep them but override with CSS)
- Size SVG via CSS class: `width: clamp(120px, 25vw, 280px);` (matches photo placeholder pattern from Phase 2)
- Test icon at 320px (mobile), 768px (tablet), 1024px (desktop) — it should scale proportionally with header space
- If using `<img>` tag instead of inline SVG, set `width: clamp(...)` and `height: auto`

**Verification:** Render page header at 3 breakpoints. Icon should scale smoothly without appearing disproportionate to text.

**Code example (correct):**
```css
.page-header__icon svg {
  width: clamp(120px, 25vw, 280px);
  height: clamp(120px, 25vw, 280px);
}
```

### Pitfall 5: Publication Card Citation Format Doesn't Follow IEEE Standard

**What goes wrong:** Year appears as separate badge in card header; authors not highlighted; venue not italicized; citations are inconsistent between cards.

**Why it happens:** Treating publication cards as generic content cards without understanding IEEE format conventions. Each card element is styled independently without semantic structure.

**How to avoid:**
- Reference IEEE citation guideline before implementing: Authors (highlighted) → "Title" (quoted) → Venue (italicized) → Year (part of venue line, not badge)
- Use `<strong>` for author names, `<em>` for venue, `<cite>` for paper title (semantically correct)
- Create consistent HTML pattern in all four publication cards so changes are one-time CSS update
- Test citation readability — cite should be scannable left-to-right like academic CV

**Verification:** Compare Phase 3 publication card HTML structure to IEEE Xplore or ACM Digital Library citation format. Layout and semantic tags should match academic standards.

**Code example (correct):**
```html
<p class="publication__authors">
  <strong class="author-highlight">I. R. Barron</strong>, Co-Author Name,
</p>
<p class="publication__title">"Paper Title in Quotes,"</p>
<p class="publication__details">
  <em>Journal Name</em>, vol. X, no. Y, pp. A–B, Month Year.
</p>
```

---

## Code Examples

Verified patterns from official sources and project standards:

### Publication Card (IEEE Citation Format)

**Source:** IEEE Reference Guide + Project Phase 2 card patterns

```html
<!-- HTML Structure -->
<div class="card card--highlighted card--publication animate-on-load">
  <p class="publication__authors">
    <strong class="author-highlight">I. R. Barron</strong>, Co-Author 1, and Co-Author 2,
  </p>

  <p class="publication__title">"Quashing Quishing: Quantifying the Threat of QR Code Exploitation,"</p>

  <p class="publication__details">
    <em>IEEE Transactions on Information Forensics and Security</em>, vol. 18, no. 5, pp. 2234–2248, May 2023.
  </p>
</div>
```

**CSS:**
```css
.card--publication {
  border-left: 4px solid var(--color-yellow);
  border-top: none;
  border-radius: 0 8px 8px 0;
}

.publication__authors {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-body);
  font-weight: 400;
}

.author-highlight {
  font-weight: 700;
  background-color: #f5f5f5;
  padding: 0 2px;
  border-radius: 2px;
}

.publication__title {
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
}

.publication__details {
  margin: 0;
  font-size: var(--font-size-body);
  color: var(--color-dark-gray);
}

.publication__details em {
  font-style: italic;
}
```

### Course Card with Badges

**Source:** Project Phase 1 badge patterns + Phase 2 card layout

```html
<div class="card card--highlighted animate-on-load">
  <div class="course__header">
    <h3 class="course__title">ECE 245/445: Digital Signal Processing</h3>
    <div class="course__badges">
      <span class="badge--semester">Spring 2025</span>
      <span class="badge--level">Upper-Level</span>
    </div>
  </div>
  <p class="course__description">In this course, I teach the principles of digital signal processing including Fourier analysis, filter design, and applications in audio and image processing.</p>
</div>
```

**CSS:**
```css
.course__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.course__title {
  flex: 1;
  margin: 0;
}

.course__badges {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-shrink: 0;
}

.badge--semester,
.badge--level {
  display: inline-block;
  background-color: var(--color-navy);
  color: var(--color-white);
  border-radius: 100px;
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
}

.course__description {
  margin: 0;
}
```

### Research Interests Tag Layout with Flex Wrap

**Source:** CSS-Tricks Flexbox patterns + Project Phase 1 tag-pill component

```html
<div class="research-interests animate-on-load">
  <span class="tag-pill tag-pill--primary">Digital Image Processing</span>
  <span class="tag-pill tag-pill--primary">Digital Forensics</span>
  <span class="tag-pill tag-pill--primary">Privacy-Preserving Communication</span>
  <span class="tag-pill">Barcode Technologies</span>
  <span class="tag-pill">Signal Processing</span>
  <span class="tag-pill">Computer Vision</span>
  <span class="tag-pill">Information Security</span>
</div>
```

**CSS:**
```css
.research-interests {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.tag-pill {
  display: inline-block;
  background-color: var(--color-navy);
  color: var(--color-white);
  border-radius: 100px;
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-sans);
  font-size: var(--font-size-label);
  font-weight: 700;
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

.tag-pill--primary {
  background-color: var(--color-meliora-blue); /* Alternative: size increase, or border accent */
}

.tag-pill:hover {
  background-color: var(--color-meliora-blue);
}
```

### Contact Details Definition List

**Source:** MDN HTML `<dl>` documentation + CSS Grid patterns

```html
<dl class="contact-details">
  <dt>Email</dt>
  <dd><a href="mailto:ibarron@ur.rochester.edu">ibarron@ur.rochester.edu</a></dd>

  <dt>Office</dt>
  <dd>Hajim School of Engineering, Room 303</dd>

  <dt>Address</dt>
  <dd>University of Rochester, Rochester, NY 14627</dd>

  <dt>Office Hours</dt>
  <dd>By appointment — email to schedule</dd>
</dl>
```

**CSS:**
```css
.contact-details {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-sm) var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.contact-details dt {
  font-weight: 700;
  color: var(--color-navy);
}

.contact-details dd {
  margin: 0;
  color: var(--color-dark-gray);
}

.contact-details a {
  color: var(--color-navy);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s ease;
}

.contact-details a:hover {
  color: var(--color-meliora-blue);
}

/* Mobile stack */
@media (max-width: 639px) {
  .contact-details {
    grid-template-columns: 1fr;
    gap: var(--spacing-xs);
  }
}
```

### Page Header with Responsive Icon

**Source:** Project Phase 2 hero pattern + SVG responsive design best practices

```html
<section class="section section--navy section--page-header" style="min-height: 35vh;">
  <div class="container">
    <div class="page-header__grid">
      <div class="page-header__text animate-on-load">
        <h1>Research</h1>
      </div>
      <div class="page-header__icon animate-on-load">
        <!-- Inline SVG (small icons < 5KB) -->
        <svg aria-hidden="true" focusable="false" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" stroke-width="2"/>
          <!-- More SVG paths for microscope/icon graphic -->
        </svg>
      </div>
    </div>
  </div>
</section>
```

**CSS:**
```css
.page-header__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .page-header__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.page-header__icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-header__icon svg {
  width: clamp(120px, 25vw, 280px);
  height: clamp(120px, 25vw, 280px);
  color: var(--color-white);
  stroke: currentColor;
  fill: none;
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Separate year badge in card header | Year integrated into citation line | IEEE citation evolution (last decade) | Cleaner card design, better readability, matches academic standards |
| Fixed-size page header icons | Responsive icon sizing via clamp() | CSS 4 clamp() support (Firefox 2020, Chrome 2019) | Proportional scaling across all viewport sizes, better mobile experience |
| `<span>` for definition list items | Semantic `<dl>`, `<dt>`, `<dd>` | HTML5 standardization (2014+) | Improved accessibility, better SEO, clearer intent to screen readers |
| Icon fonts (Font Awesome) | Inline SVG or CSS icons | Performance awareness (2015+) | Smaller HTTP requests, better caching, CSS styling control |
| Hard-coded publication HTML | Reusable component pattern | Web components / templating best practices (2020+) | Maintainability, consistency, easier updates to multiple citations |

**Deprecated/Outdated:**
- Icon fonts: Replaced by inline SVG (smaller, more flexible). Still valid for large icon libraries, but inline SVG preferred for small sets (3-10 icons).
- Fixed-width page layouts: Mobile-first responsive design with clamp() is current best practice.
- Non-semantic HTML (div-based lists, floats for layout): Semantic HTML + CSS Grid/Flexbox is standard.

---

## Open Questions

1. **Publication Author Highlighting Color**
   - What we know: User wants "light background highlight" (not bright). Research confirms light gray (#f5f5f5) or light yellow (var(--color-butter)) are appropriate.
   - What's unclear: Exact color preference — no technical constraint; UX choice.
   - Recommendation: Use light gray (#f5f5f5) for neutral appearance. If testing suggests light yellow fits brand better, switch via `--color-highlight` CSS variable.

2. **Page Header Icon Style**
   - What we know: User wants decorative icons for Research (microscope/beaker), Teaching (podium/book), Contact (envelope/phone). Should be illustrative, not minimal.
   - What's unclear: Illustration style (line art vs. filled, geometric vs. organic), exact visual direction.
   - Recommendation: Start with simple line-art SVG icons (1-2 stroke width, minimal complexity). Test at 120px and 280px (clamp() bounds) for visibility. If appearance is off, adjust SVG directly in HTML before committing.

3. **Primary Research Interest Visual Distinction**
   - What we know: Three primary interests should stand out visually (Digital Image Processing, Digital Forensics, Privacy-Preserving Communication).
   - What's unclear: Method — larger font size, different background color, border accent, or combination?
   - Recommendation: Use `.tag-pill--primary` with `background-color: var(--color-meliora-blue)` to create color distinction. If subtlety needed, increase font-size by 0.05–0.1rem or add subtle border instead. Test with rest of design.

4. **Contact Page External Links**
   - What we know: Three links (UofR ECE Dept, LinkedIn, GitHub). All open in new tab. User wants no ResearchGate or Faculty Page links.
   - What's unclear: Exact URLs for UofR ECE Department link (institutional or department homepage?), GitHub placeholder (will be empty for v1).
   - Recommendation: Use official UofR ECE department URL: `ece.rochester.edu` or full institutional link. For GitHub, use empty placeholder link (href="#") with `aria-disabled="true"` or just `<span>` instead of link until filled in v2.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | W3C HTML Validator + Manual accessibility audit |
| Config file | None — validation via online tools or CLI tools |
| Quick run command | `npm run validate` (if available) or manual W3C check |
| Full suite command | W3C HTML5 validator (no errors/warnings) + WAVE accessibility audit + Lighthouse audit |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| RES-01 to RES-13 | Research page structure, publication cards, tags | Manual HTML validation + visual | W3C HTML Validator for research.html | ✅ Phase 0 (template exists) |
| TEACH-01 to TEACH-08 | Teaching page structure, course cards | Manual HTML validation + visual | W3C HTML Validator for teaching.html | ✅ Phase 0 (template exists) |
| CONT-01 to CONT-08 | Contact page structure, definition lists, links | Manual HTML validation + visual | W3C HTML Validator for contact.html | ✅ Phase 0 (template exists) |
| All pages | Responsive layout (mobile/tablet/desktop) | Manual responsive testing | Browser DevTools: 320px, 768px, 1024px viewports | Manual only |
| All pages | Accessibility (WCAG AA color contrast, focus indicators, semantic HTML) | Manual audit | WAVE browser extension, Lighthouse audit | Manual only |
| All pages | Link integrity (internal/external links working) | Manual link checking | Click all links, verify target="_blank" works | Manual only |

### Sampling Rate

- **Per task commit:** Manual HTML validation via W3C validator (no automated runner needed — Phase 1 already established valid HTML structure; Phase 3 extends it)
- **Per wave merge:** Full W3C HTML5 validation (zero errors), WAVE accessibility audit, Lighthouse desktop score
- **Phase gate:** All three pages pass W3C validation + no accessibility issues in WAVE + responsive testing at 3 breakpoints confirmed

### Wave 0 Gaps

None — existing test infrastructure covers all phase requirements.

**Rationale:** Phase 1 foundation established semantic HTML structure and CSS validation. Phase 2 home page passed W3C validation and responsive testing. Phase 3 extends those patterns in three new pages. No new testing infrastructure needed — follow same validation protocol as Phase 2.

**Verification steps:**
1. After page is written: Run through W3C HTML Validator online (copy-paste HTML from live site or CLI tool like `html-validate`)
2. After styling is applied: Open in Chrome DevTools, Inspect > Accessibility Tree to verify semantic structure
3. After responsive testing: Use Chrome DevTools device emulation or physical devices at 320px, 768px, 1024px widths
4. Before phase merge: WAVE accessibility audit (browser extension) and Lighthouse audit (built into Chrome DevTools)

---

## Sources

### Primary (HIGH confidence)

- **MDN `<dl>` Definition List Element** - HTML structure and semantic usage: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl
- **IEEE Reference Guide (IEEE)** - Official IEEE citation format and publication standards: https://journals.ieeeauthorcenter.ieee.org/wp-content/uploads/sites/7/IEEE_Reference_Guide.pdf
- **CSS-Tricks: A Complete Guide to Flexbox** - Flex-wrap, responsive layout patterns: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Codrops: Making SVGs Responsive with CSS** - SVG scaling and responsive design patterns: https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/
- **W3C Scholarly HTML** - Semantic markup for academic publications: https://w3c.github.io/scholarly-html/
- **CSS-Tricks: Utilizing the Underused Definition List** - Definition list styling best practices: https://css-tricks.com/utilizing-the-underused-but-semantically-awesome-definition-list/

### Secondary (MEDIUM confidence)

- **W3C SVG Design System — SVG Icons** - Decorative SVG markup patterns with aria-hidden: https://design-system.w3.org/styles/svg-icons.html
- **Matthew James Taylor: 2 Column Layouts** - Responsive two-column grid and flexbox patterns: https://matthewjamestaylor.com/2-column-layouts
- **MDN CSS Grid: Common Grid Layouts** - Grid-based two-column layout implementation: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts
- **DigitalOcean: CSS Flex-Wrap Tutorial** - Flex wrap behavior and responsive design: https://www.digitalocean.com/community/tutorials/css-improve-responsiveness-flex-wrap

### Tertiary (LOW confidence)

- **Medium: How to Style DL, DT, DD HTML Tags** - CSS Grid styling for definition lists (verified with MDN): https://bloycey.medium.com/how-to-style-dl-dt-and-dd-html-tags-ced1229deda0
- **Thomas Park: PubCSS** - Academic publication formatting in HTML/CSS (reference implementation, not official standard): https://thomaspark.co/2015/01/pubcss-formatting-academic-publications-in-html-css/

---

## Metadata

**Confidence breakdown:**
- **Standard Stack (HIGH):** All components and typography already established in Phase 1 & 2. Phase 3 extends with two new card variants (`.card--publication`, `.card--funded`) and `.tag-pill--primary` — minimal new code, reuses existing patterns.
- **Architecture (HIGH):** Page header, publication card, course card, contact layout patterns are straightforward combinations of existing HTML/CSS. IEEE citation format is documented standard. No ambiguity.
- **Pitfalls (MEDIUM-HIGH):** Common pitfalls identified from web standards (definition list mobile breakage, tag layout gaps, SVG scaling). Author highlighting complexity comes from UX nuance (light color choice), not technical constraint.

**Research date:** 2026-03-26
**Valid until:** 2026-04-23 (30 days — Phase 3 uses stable patterns; unlikely to change)
**Deprecation notice:** If Phase 3 implementation reveals that existing CSS custom properties or component classes don't support new use cases, circle back to research for alternative patterns.
