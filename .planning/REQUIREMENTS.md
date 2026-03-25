# Requirements: ibarron.dev Faculty Website

**Defined:** 2026-03-25
**Core Value:** Professional, accessible, visually coherent faculty presence using only plain HTML/CSS/JavaScript.

## v1 Requirements

Requirements for launch. Each maps to roadmap phases.

### Foundation & Setup

- [x] **FOUND-01**: Create HTML5 semantic structure for all 5 pages (header, nav, main, sections, footer)
- [x] **FOUND-02**: Implement University of Rochester brand color palette as CSS custom properties
- [x] **FOUND-03**: Implement responsive layout system (mobile <640px, tablet 640-1024px, desktop >1024px)
- [x] **FOUND-04**: Self-host Inter Variable font as `.woff2` file with fallbacks
- [x] **FOUND-05**: Implement CSS custom properties for all spacing, sizing, and typography values
- [x] **FOUND-06**: Verify WCAG AA color contrast on all text (navy/dark gray on white, white on navy)

### Navigation & Layout

- [x] **NAV-01**: Create sticky navigation bar with brand name (left) and menu links (right)
- [x] **NAV-02**: Implement hamburger menu button for mobile (<768px) with aria-label and aria-expanded
- [x] **NAV-03**: Show/hide mobile nav with JavaScript toggle (no external library)
- [x] **NAV-04**: Apply active page indicator (yellow text and underline) on current nav link
- [x] **NAV-05**: Make hamburger button keyboard accessible (focus indicator visible)
- [x] **LAYOUT-01**: Create footer with two-column layout (desktop) and stacked layout (mobile)
- [x] **LAYOUT-02**: Implement footer with dynamic year generation via JavaScript

### Pages: Home (index.html)

- [ ] **HOME-01**: Create hero section with two-column layout (text left, profile photo right on desktop)
- [ ] **HOME-02**: Add "University of Rochester · Hajim School..." eyebrow above H1
- [ ] **HOME-03**: Add H1 "Dr. Irving Barron" in serif font, white on navy background
- [ ] **HOME-04**: Add lead text "Assistant Professor of Instruction, Electrical & Computer Engineering" in white
- [ ] **HOME-05**: Create two buttons: "View My Research" (primary, white on navy) and "For Students" (outline, white border)
- [ ] **HOME-06**: Implement profile photo placeholder (CSS-only navy box with yellow "IB" initials) in serif font
- [ ] **HOME-07**: Create "About Me" section with eyebrow, H2, and biographical paragraph
- [ ] **HOME-08**: Add "Download CV (PDF)" button (primary style) pointing to assets/cv.pdf
- [ ] **HOME-09**: Create three highlight cards (Research, Teaching, Students) with yellow top border
- [ ] **HOME-10**: Each highlight card has H4 title, description, and "Learn more →" or "Visit hub →" link
- [ ] **HOME-11**: Research and Teaching cards have yellow border-top; Students card has navy border-top

### Pages: Research (research.html)

- [ ] **RES-01**: Create page header section with navy background, white H1 "Research"
- [ ] **RES-02**: Add lead text "Digital image processing · Security · Privacy-preserving communication" in white
- [ ] **RES-03**: Create "Research Overview" section on butter background with two-paragraph plain-English summary
- [ ] **RES-04**: Create research interests section with tag pills (navy bg, white text, rounded)
- [ ] **RES-05**: Each tag pill: "Digital Image Processing", "Digital Forensics", "Information Security", "Barcode Technologies", "Privacy-Preserving Communication", "Signal Processing", "Computer Vision"
- [ ] **RES-06**: Create NSF project highlight card with "Funded Research" eyebrow
- [ ] **RES-07**: NSF card includes project title, funding info ("National Science Foundation · $50,000 · with Prof. Gaurav Sharma"), and description
- [ ] **RES-08**: Create publications section with "Selected Publications" eyebrow and H2
- [ ] **RES-09**: Add italic note below publications heading linking to ResearchGate
- [ ] **RES-10**: Create publication cards (one per publication) with left yellow border
- [ ] **RES-11**: Each publication card includes authors, title, venue, year badge (navy pill, right-aligned)
- [ ] **RES-12**: Bold author name "I. R. Barron" or "Irving Barron" in each publication listing
- [ ] **RES-13**: Include 4 publications: "Quashing Quishing...", "Optimized Modulation...", "Proximally Secure...", "Toward CanvasChain..." with correct venues and years

### Pages: Teaching (teaching.html)

- [ ] **TEACH-01**: Create page header section with navy background, white H1 "Teaching"
- [ ] **TEACH-02**: Add lead text "University of Rochester · ECE Department" in white
- [ ] **TEACH-03**: Create "Teaching Philosophy" section on butter background with philosophy statement
- [ ] **TEACH-04**: Create "Courses I Teach" section with H2 and eyebrow
- [ ] **TEACH-05**: Create three course cards (ECE 241, ECE 245/445, ECE 487) stacked vertically
- [ ] **TEACH-06**: Each course card has left yellow border, semester badge (navy pill, right-aligned), level badge
- [ ] **TEACH-07**: Each course card includes H3 title (with course number), and full description
- [ ] **TEACH-08**: Add note below courses linking to Students Hub page

### Pages: Students (students.html)

- [ ] **STU-01**: Create page header section with navy background, white H1 "Students Hub"
- [ ] **STU-02**: Add lead text "Resources for current, prior, and prospective students" in white
- [ ] **STU-03**: Create tab navigation with three tabs: "Current Students", "Prior Students", "Prospective Students"
- [ ] **STU-04**: Implement tab panel switching with JavaScript (click toggles visible panel, hides others)
- [ ] **STU-05**: Apply ARIA roles to tabs (role="tablist", role="tab", role="tabpanel")
- [ ] **STU-06**: Implement arrow key navigation (left/right arrows switch between tabs)
- [ ] **STU-07**: Update aria-selected attribute on tabs when switching
- [ ] **STU-08**: Tab 1 (Current): Office Hours card, Course Materials (link to Blackboard), Reaching Me (email), Accommodations
- [ ] **STU-09**: Tab 2 (Prior): Stay in Touch section, Recommendation Letters card with bulleted requirements
- [ ] **STU-10**: Tab 3 (Prospective): Undergraduate Research card with bulleted application requirements, Graduate Admissions link
- [ ] **STU-11**: Recommendation Letters card has yellow top border
- [ ] **STU-12**: Undergraduate Research card has yellow top border

### Pages: Contact (contact.html)

- [ ] **CONT-01**: Create page header section with navy background, white H1 "Contact"
- [ ] **CONT-02**: Create two-column grid (desktop), stacked (mobile)
- [ ] **CONT-03**: Left column: "Get in Touch" card with intro text
- [ ] **CONT-04**: Contact details: Email, Office, Address, Office Hours (all with navy square bullets)
- [ ] **CONT-05**: Email is a mailto: link (ibarron@ur.rochester.edu)
- [ ] **CONT-06**: Right column: "Profiles & Links" card with H3
- [ ] **CONT-07**: External links: UofR ECE Dept, ResearchGate, University Faculty Page (all target="_blank")
- [ ] **CONT-08**: Add italic note: "No contact form — please reach out directly by email."

### Typography & Styling

- [x] **TYP-01**: H1 and H2 use Georgia serif font, bold weight, proper clamp() sizing
- [x] **TYP-02**: H3, H4, H5 use Inter semibold (600), proper clamp() sizing
- [x] **TYP-03**: Body text uses Inter regular (400), 1.7 line height, proper clamp() sizing
- [x] **TYP-04**: Eyebrow labels: Inter 600, 0.875rem, 0.1em letter-spacing, uppercase, muted gray color
- [x] **TYP-05**: All buttons consistent: Inter 600, 1.125rem, 0.75rem vertical padding, 1.75rem horizontal padding
- [x] **TYP-06**: Primary button: navy background, white text, hover to Meliora Blue, 0.2s transition
- [x] **TYP-07**: Outline button: transparent background, navy border, navy text, hover to navy bg + white text
- [x] **TYP-08**: Card styling: white background, 1px border (#E8E8E8), 4px yellow top border, 1.5rem padding, 8px border-radius

### Animations & Interactions

- [x] **ANIM-01**: Implement fade-in + translate up animation on all major sections (0.5s duration, 0.1s stagger)
- [x] **ANIM-02**: Wrap all animations in @media (prefers-reduced-motion: no-preference) block
- [x] **ANIM-03**: Hover states on buttons, cards, links (0.2s transition)
- [x] **ANIM-04**: Hamburger icon changes visual state when nav is open
- [x] **ANIM-05**: Tab active state visual feedback (yellow text on navy background)

### Accessibility

- [ ] **A11Y-01**: All nav/footer/button text on navy (#001E5F) is white or yellow (both WCAG AA compliant)
- [ ] **A11Y-02**: All body text on white background is navy (#001E5F) or dark gray (#707070) — never yellow
- [ ] **A11Y-03**: Every <img> has descriptive alt attribute (or alt="" if purely decorative)
- [ ] **A11Y-04**: Hamburger button is <button> element with aria-label and aria-expanded
- [ ] **A11Y-05**: Tab interface has full ARIA tabs pattern (tablist, tab, tabpanel roles)
- [ ] **A11Y-06**: All interactive elements have visible focus indicator (outline or highlight)
- [ ] **A11Y-07**: Keyboard Tab order follows visual left-to-right, top-to-bottom flow
- [ ] **A11Y-08**: Proper heading hierarchy (one H1 per page, no skipped levels)

### Links & Navigation

- [ ] **LINK-01**: All internal links are relative (href="research.html", href="index.html")
- [ ] **LINK-02**: All links verified working after final build
- [ ] **LINK-03**: External links open in new tab (target="_blank") and have descriptive link text
- [ ] **LINK-04**: Nav links highlight active page with yellow color and underline
- [ ] **LINK-05**: Highlight card links navigate to correct pages (Research → research.html, etc.)

### Assets & Files

- [x] **ASSET-01**: CV placeholder file at assets/cv.pdf (user will replace with their own)
- [x] **ASSET-02**: Inter Variable font file (inter-variable.woff2) self-hosted in project
- [x] **ASSET-03**: All CSS in single css/style.css file
- [x] **ASSET-04**: Profile photo placeholder is CSS-only (no image file needed until replaced)

### Responsiveness

- [ ] **RESP-01**: All pages layout correctly on mobile (320px+)
- [ ] **RESP-02**: Navigation collapses to hamburger on <768px screens
- [ ] **RESP-03**: Multi-column layouts (hero, footer, cards) stack to single column on mobile
- [ ] **RESP-04**: All text is readable on mobile (font-size, line-height, padding appropriate)
- [ ] **RESP-05**: Images scale proportionally on all screen sizes
- [ ] **RESP-06**: Buttons and interactive elements are at least 44x44px touch target size on mobile

### Browser & Performance

- [x] **PERF-01**: Site loads without external npm dependencies
- [x] **PERF-02**: No webpack, build tools, or development server needed — files work as-is
- [x] **PERF-03**: Single CSS file loads in one request
- [x] **PERF-04**: JavaScript is <200 lines total (hamburger, tabs, year)
- [ ] **PERF-05**: All images are optimized (JPG for photos, PNG for diagrams)
- [ ] **PERF-06**: Site works in all modern browsers (Chrome, Firefox, Safari, Edge 2017+)
- [ ] **PERF-07**: Site is HTTPS-ready (no mixed content warnings)

## v2 Requirements

Deferred to future releases.

### Content & Features

- [ ] **v2-01**: Real profile photo replaces CSS placeholder
- [ ] **v2-02**: Print-friendly stylesheet for CV-style printing
- [ ] **v2-03**: Search functionality for publications and courses
- [ ] **v2-04**: Dark mode toggle (respects prefers-color-scheme)
- [ ] **v2-05**: Analytics integration (Google Analytics, Plausible)
- [ ] **v2-06**: Sitemap.xml and robots.txt for SEO

### CMS & Content Management

- [ ] **v2-07**: CMS integration (Contentful, Forestry, etc.) for easier content updates
- [ ] **v2-08**: Automated publication feed from ResearchGate API
- [ ] **v2-09**: Course roster management without manual HTML editing

### Interactivity

- [ ] **v2-10**: Contact form with backend submission (with spam prevention)
- [ ] **v2-11**: Newsletter signup
- [ ] **v2-12**: Comments on blog posts (if blog added)

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Build tools / npm | Plain files only — zero dependency overhead |
| CSS preprocessor (SCSS/Less) | CSS custom properties are sufficient |
| Framework (React, Vue, etc.) | Plain HTML/CSS/JS only |
| External JS libraries (jQuery, Alpine) | Vanilla JS is clearer for this scope |
| Google Fonts CDN | Self-host fonts for offline + privacy |
| Contact form backend | Email link is sufficient, no server needed |
| CMS / database | Manual HTML editing, no dynamic content |
| Blog functionality | Single faculty website, not a blog |
| Social media embeds | Reduces performance, API dependency |
| Dark mode in v1 | Deferred to v2 |
| Video hero background | Accessibility + performance risk |
| Real-time chat | Out of scope for faculty site |
| Mobile app | Web-first only |
| Booking/calendar system | Out of scope |
| Comment sections | Moderation burden, not needed |
| User authentication / login | All information is public |
| Shopping / e-commerce | Not applicable |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Complete |
| FOUND-02 | Phase 1 | Complete |
| FOUND-03 | Phase 1 | Complete |
| FOUND-04 | Phase 1 | Complete |
| FOUND-05 | Phase 1 | Complete |
| FOUND-06 | Phase 1 | Complete |
| NAV-01 | Phase 1 | Complete |
| NAV-02 | Phase 1 | Complete |
| NAV-03 | Phase 1 | Complete |
| NAV-04 | Phase 1 | Complete |
| NAV-05 | Phase 1 | Complete |
| LAYOUT-01 | Phase 1 | Complete |
| LAYOUT-02 | Phase 1 | Complete |
| TYP-01 | Phase 1 | Complete |
| TYP-02 | Phase 1 | Complete |
| TYP-03 | Phase 1 | Complete |
| TYP-04 | Phase 1 | Complete |
| TYP-05 | Phase 1 | Complete |
| TYP-06 | Phase 1 | Complete |
| TYP-07 | Phase 1 | Complete |
| TYP-08 | Phase 1 | Complete |
| ANIM-01 | Phase 1 | Complete |
| ANIM-02 | Phase 1 | Complete |
| ANIM-03 | Phase 1 | Complete |
| ANIM-04 | Phase 1 | Complete |
| ANIM-05 | Phase 1 | Complete |
| ASSET-01 | Phase 1 | Complete |
| ASSET-02 | Phase 1 | Complete |
| ASSET-03 | Phase 1 | Complete |
| ASSET-04 | Phase 1 | Complete |
| PERF-01 | Phase 1 | Complete |
| PERF-02 | Phase 1 | Complete |
| PERF-03 | Phase 1 | Complete |
| PERF-04 | Phase 1 | Complete |
| HOME-01 | Phase 2 | Pending |
| HOME-02 | Phase 2 | Pending |
| HOME-03 | Phase 2 | Pending |
| HOME-04 | Phase 2 | Pending |
| HOME-05 | Phase 2 | Pending |
| HOME-06 | Phase 2 | Pending |
| HOME-07 | Phase 2 | Pending |
| HOME-08 | Phase 2 | Pending |
| HOME-09 | Phase 2 | Pending |
| HOME-10 | Phase 2 | Pending |
| HOME-11 | Phase 2 | Pending |
| RES-01 | Phase 3 | Pending |
| RES-02 | Phase 3 | Pending |
| RES-03 | Phase 3 | Pending |
| RES-04 | Phase 3 | Pending |
| RES-05 | Phase 3 | Pending |
| RES-06 | Phase 3 | Pending |
| RES-07 | Phase 3 | Pending |
| RES-08 | Phase 3 | Pending |
| RES-09 | Phase 3 | Pending |
| RES-10 | Phase 3 | Pending |
| RES-11 | Phase 3 | Pending |
| RES-12 | Phase 3 | Pending |
| RES-13 | Phase 3 | Pending |
| TEACH-01 | Phase 3 | Pending |
| TEACH-02 | Phase 3 | Pending |
| TEACH-03 | Phase 3 | Pending |
| TEACH-04 | Phase 3 | Pending |
| TEACH-05 | Phase 3 | Pending |
| TEACH-06 | Phase 3 | Pending |
| TEACH-07 | Phase 3 | Pending |
| TEACH-08 | Phase 3 | Pending |
| CONT-01 | Phase 3 | Pending |
| CONT-02 | Phase 3 | Pending |
| CONT-03 | Phase 3 | Pending |
| CONT-04 | Phase 3 | Pending |
| CONT-05 | Phase 3 | Pending |
| CONT-06 | Phase 3 | Pending |
| CONT-07 | Phase 3 | Pending |
| CONT-08 | Phase 3 | Pending |
| STU-01 | Phase 4 | Pending |
| STU-02 | Phase 4 | Pending |
| STU-03 | Phase 4 | Pending |
| STU-04 | Phase 4 | Pending |
| STU-05 | Phase 4 | Pending |
| STU-06 | Phase 4 | Pending |
| STU-07 | Phase 4 | Pending |
| STU-08 | Phase 4 | Pending |
| STU-09 | Phase 4 | Pending |
| STU-10 | Phase 4 | Pending |
| STU-11 | Phase 4 | Pending |
| STU-12 | Phase 4 | Pending |
| A11Y-01 | Phase 5 | Pending |
| A11Y-02 | Phase 5 | Pending |
| A11Y-03 | Phase 5 | Pending |
| A11Y-04 | Phase 5 | Pending |
| A11Y-05 | Phase 5 | Pending |
| A11Y-06 | Phase 5 | Pending |
| A11Y-07 | Phase 5 | Pending |
| A11Y-08 | Phase 5 | Pending |
| LINK-01 | Phase 5 | Pending |
| LINK-02 | Phase 5 | Pending |
| LINK-03 | Phase 5 | Pending |
| LINK-04 | Phase 5 | Pending |
| LINK-05 | Phase 5 | Pending |
| RESP-01 | Phase 5 | Pending |
| RESP-02 | Phase 5 | Pending |
| RESP-03 | Phase 5 | Pending |
| RESP-04 | Phase 5 | Pending |
| RESP-05 | Phase 5 | Pending |
| RESP-06 | Phase 5 | Pending |
| PERF-05 | Phase 5 | Pending |
| PERF-06 | Phase 5 | Pending |
| PERF-07 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 110 total
- Mapped to phases: 110
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-25*
*Last updated: 2026-03-25 after roadmap creation*
