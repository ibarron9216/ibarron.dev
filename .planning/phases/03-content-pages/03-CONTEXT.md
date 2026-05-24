# Phase 3: Content Pages - Context

**Gathered:** 2026-03-26
**Status:** Ready for planning

<domain>
## Phase Boundary

Build three fully-featured content pages (Research, Teaching, Contact) that visitors can navigate to from the home page. Each page follows the established home page template with consistent navigation, typography, and card-based layouts. Pages are informational (no interactive tabbed interfaces — that's Phase 4 Students page).

**Success Criteria (from ROADMAP.md):**
1. Research page: navy header, plain-English overview, seven research-interest tag pills, NSF project highlight card with funding details, four publication cards with author highlighting and year badges
2. Teaching page: navy header, teaching philosophy statement, three course cards (ECE 241, ECE 245/445, ECE 487) each with semester badge, level badge, and full description
3. Contact page: navy header, two-column layout (desktop) with office/email details on left and three external profile links on right, italic note about no contact form
4. Email on Contact is mailto: link; all external links open in new tab

**Requirements Mapped:** RES-01 through RES-13, TEACH-01 through TEACH-08, CONT-01 through CONT-08

</domain>

<decisions>
## Implementation Decisions

### Page Headers (All three pages: Research, Teaching, Contact)

**Header Height = Medium (35-40vh)**
- Balanced: prominent visual anchor without forcing excessive scroll on mobile
- Desktop: About section becomes partially visible below, encourages scrolling
- Mobile: Header naturally sized, not full-viewport

**Header Background = Navy (#001E5F), white text**
- Consistent with home page hero
- White text on navy has strong contrast and professional appearance
- Maintains brand presence across all pages

**Header Visual Element = Decorative icon/illustration on right column**
- Right column has simple SVG icon or graphic representing the page topic
- Examples: microscope/beaker for Research, podium/book for Teaching, envelope/phone for Contact
- Text on left, decorative element on right (two-column layout matching home hero pattern)

**Header Title = H1 only (no lead text)**
- Simple, clean presentation
- "Research", "Teaching", "Contact" as H1s
- No descriptive lead line below

### Publication Cards (Research page)

**Publication Card Layout = IEEE citation format**
- Reading order: Authors → "Title" → Venue (Journal, vol., issue, pages) → Year
- Follows academic publication conventions
- Natural reading flow for academic audience

**Author Name Highlighting = Bold + light background highlight**
- Your name ("I. R. Barron" or "Irving Barron") in bold weight with subtle light background
- Background color: light gray or very light yellow (not bright)
- Maintains professionalism while clearly identifying your publications
- Consistent with academic CV/faculty bio styling

**Year Display = Integrated into venue line**
- Year is part of the citation line, not a separate badge
- Cleaner card design (fewer competing visual elements)
- Follows IEEE citation format naturally

**Card Styling**
- Uses `.card .card--highlighted` (yellow top border)
- Consistent with home page highlight cards and other content pages
- Four publication cards total per RES-13

### Course Cards (Teaching page)

**Course Card Layout = Vertical stack**
- Course title (H3) at top
- Semester badge and course number badge side-by-side on the right
- Full course description below

**Course Badges = Two badges side-by-side on the right**
- Semester badge (e.g., "Spring 2025") and course number badge (e.g., "ECE 245") next to each other
- Both right-aligned in the card header
- Compact, doesn't interfere with course title reading
- Navy pill styling (consistent with home page badge style)

**Card Styling**
- Uses `.card .card--highlighted` (yellow top border)
- Consistent with publication cards and home page
- Three course cards total (ECE 241, ECE 245/445, ECE 487)

### Research Interests (Research page)

**Tag Layout = Wrapped flex layout**
- Tags display inline and wrap naturally to multiple rows
- Responsive by default (flexible on mobile, spreads on desktop)
- Organic, content-forward presentation (like hashtags)
- Easy to add/remove tags in the future

**Tag Styling = Navy background, white text, pill-shaped**
- Base styling: `.tag-pill` with navy background, white text, rounded corners
- Per RES-04 and RES-05 specifications

**Primary Research Interests = Visually distinguished**
- Primary interests: Digital Image Processing, Digital Forensics, Privacy-Preserving Communication
- Secondary interests: Barcode Technologies, Signal Processing, Computer Vision, Information Security
- Visual distinction approach: Claude's Discretion (color, size, or styling variation during implementation)

### Contact Page Layout

**Two-Column Structure = Both columns as .card components**
- Left column: "Get in Touch" card with contact details
- Right column: "Profiles & Links" card with external links
- Both use `.card .card--highlighted` (yellow top border) for consistency
- Desktop: side-by-side grid layout
- Mobile: single column, cards stack vertically

**Contact Details (Left Card) = Definition list format**
- Semantic HTML using `<dl>`, `<dt>`, `<dd>` elements
- Labels (Email, Office, Address, Office Hours) formatted as `<dt>`
- Values formatted as `<dd>` (email as mailto: link)
- Clean, accessible structure
- Styled with proper spacing and typography contrast

**No Contact Form Note = Inside left card, below contact details**
- Positioned at the bottom of the contact details
- Italic text: "No contact form — please reach out directly by email"
- Clearly communicates that email is the contact method
- Prevents user confusion/frustration looking for a form

**External Profile Links (Right Card) = Bulleted list**
- Three links with navy square bullets (consistent with left column styling)
- Links:
  1. University of Rochester ECE Department
  2. LinkedIn
  3. GitHub (placeholder for future — currently empty)
- All external links: `target="_blank"` and descriptive link text
- Bulleted format creates visual balance with left card

### Carry-Forward from Prior Phases

**First-Person Voice (Phase 1 & 2 requirement)**
- All biographical, teaching philosophy, and personal narrative content must use "I/my/me"
- Never third-person
- Core project requirement

**Typography & Spacing**
- H1/H2: Georgia serif
- Body/UI: Inter sans-serif
- Spacing tokens: `--spacing-*` CSS custom properties
- Section padding: Consistent with Phase 2 home page

**Component Patterns**
- `.card`, `.card--highlighted` (yellow top border)
- `.btn` buttons for CTAs
- `.tag-pill` for tag styling
- `.section` for section wrappers
- All responsive breakpoints: 640px (mobile→tablet), 1024px (tablet→desktop)

**Animation & Accessibility**
- Page-load fade-in animations on all major sections (wrapped in prefers-reduced-motion)
- All links keyboard accessible with visible focus indicators
- Semantic HTML structure maintained

### Claude's Discretion

- Exact icon/graphic design for page headers (illustration style, colors, positioning within right column)
- Specific visual distinction method for primary research interests (color accent, size increase, or styling variation)
- Exact light color for author name background highlight (light gray vs. light yellow)
- Course level badge wording/formatting (e.g., "Undergraduate", "Upper-Level", "Mixed", or course level from number)
- Link hover/active states on Contact page external links
- Padding, margins, and spacing refinements within cards and sections

</decisions>

<specifics>
## Specific Ideas & Preferences

- Research page should feel like an academic publication list — IEEE citation format signals credibility
- Teaching page should emphasize personal connection to courses — philosophy statement in first-person is important
- Contact page should be straightforward and friendly — no forms, just direct email
- Page headers (Research, Teaching, Contact) should have decorative visual elements to break up text-only content and add personality
- Primary research interests should stand out — help visitors quickly identify your main focus areas
- Profile links on Contact page (LinkedIn, GitHub) should be positioned prominently; no redundant University Faculty Page link

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase 3 Requirements & Scope
- `.planning/ROADMAP.md` § Phase 3 — Phase goal, success criteria, requirements mapped
- `.planning/REQUIREMENTS.md` — RES-01 through RES-13 (Research), TEACH-01 through TEACH-08 (Teaching), CONT-01 through CONT-08 (Contact)

### Foundation & Design System (Phase 1)
- `.planning/phases/01-foundation/01-CONTEXT.md` — CSS design system, typography, components, animations, responsive breakpoints

### Home Page Template (Phase 2)
- `.planning/phases/02-home/02-CONTEXT.md` — Two-column layouts, card styling, section backgrounds (navy/butter/white), navigation pattern, button modifiers

### Project Vision & Brand
- `.planning/PROJECT.md` — Project constraints (plain HTML/CSS/JS, University of Rochester brand, no external dependencies)
- `.planning/PROJECT.md` — Key decisions table (semantic HTML, responsive design, vanilla JS only)

### Approved Content
- User's memory: `bio_content.md` — Approved biographical text for use on pages (first-person voice required)
- User's memory: `feedback_first_person.md` — First-person voice is a non-negotiable core requirement

### Academic Citation Format
- IEEE citation standard (user requirement: follow IEEE format for publication citations)
- Example format: Authors, "Title," Journal Name, vol. #, no. #, pp. page range, Year.

### Accessibility & Standards
- WCAG 2.1 AA standard minimum (all pages must pass accessibility audit in Phase 5)
- W3C HTML5 semantic structure (proper headings, link structure, ARIA where needed)

</canonical_refs>

<code_context>
## Existing Code & Reusable Patterns

### From Phase 1 & 2 (All Pages Use):

**HTML Structure:**
- Page skeleton: header (nav), main (sections), footer
- Section wrapper: `<section class="section [section--navy|section--butter]">`
- Container: `<div class="container">`
- Two-column layout: `.hero__grid` or `.grid-2` media query

**CSS Components Ready to Reuse:**
- `.section` with variants: `section--navy`, `section--butter` (white default)
- `.card`, `.card--highlighted` (yellow top border), `.card--clickable`
- `.btn`, `.btn--primary`, `.btn--outline--white`, `.btn--primary--inverse`
- `.tag-pill` (navy background, white text, rounded)
- `.grid-3` (three-column grid, 1024px+ breakpoint)
- `.grid-2` (two-column layout, 1024px+ breakpoint)
- Typography classes: `.eyebrow`, `.animate-on-load`

**CSS Custom Properties:**
- Colors: `--color-navy`, `--color-yellow`, `--color-white`, `--color-butter`, `--color-dark-gray`
- Typography: `--font-serif`, `--font-sans`, `--font-size-heading`, `--font-size-subheading`, `--font-size-body`
- Spacing: `--spacing-xs` through `--spacing-3xl`
- Breakpoints: `--breakpoint-mobile: 640px`, `--breakpoint-desktop: 1024px`

**JavaScript (already exists, can reuse):**
- Footer year generation (`js/main.js`)
- Nav hamburger toggle
- Any animation hooks from Phase 1

**Assets (ready to use):**
- Font files: `assets/fonts/inter-variable.woff2`
- CV placeholder: `assets/cv.pdf`
- All styling in `css/style.css` (single file)

### Phase 3 New Components/Classes to Add:

- `.page-header` or section class for page headers (navy, 35-40vh, two-column with icon)
- `.icon-placeholder` or similar for header decorative icons (or inline SVG)
- `.publication-card` (extends `.card`) — may need specific styling for IEEE format layout
- `.course-card` (extends `.card`) — may need badge positioning refinements
- `.tag-pill--primary` or `.tag-pill--featured` for highlighted research interests (Claude's discretion on implementation)
- `.definition-list` or styles for `<dl>` formatting (labels + values for contact details)
- `.profile-links` or `.external-links` list styling for Contact page

### Integration Points:

- All three pages (research.html, teaching.html, contact.html) will link from home page (index.html) via highlight cards
- Nav links will update `aria-current="page"` to mark the current page
- All pages import `css/style.css` and `js/main.js`
- Contact page email link: `mailto:ibarron@ur.rochester.edu` (from requirements CONT-05)
- External links from Contact page will use `target="_blank"` and proper descriptive text

</code_context>

<deferred>
## Deferred Ideas

- Real profile photo replacement: Phase 3 uses CSS placeholder (inherited from Phase 2), v2 will replace with real image
- ResearchGate profile link: User chose not to include (no added value, LinkedIn preferred)
- University Faculty Page link: User chose not to include (redundant — only has short bio)
- GitHub link: Placeholder in Contact page for future; currently empty, to be populated in future release
- GitHub portfolio/project showcase: Separate phase if needed (not in v1 scope)

</deferred>

---

*Phase: 03-content-pages*
*Context gathered: 2026-03-26 after user discussion*
*Status: Ready for researcher to investigate publication citation styling and icon design patterns*
