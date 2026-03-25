# Roadmap: ibarron.dev Faculty Website

## Overview

Build a professional five-page faculty website using plain HTML/CSS/JS only. The work moves from infrastructure (CSS design system, shared nav/footer, JS utilities) through the home page template, to the three informational content pages, to the most JS-complex page (Students Hub), and finishes with a cross-cutting polish and verification pass to confirm accessibility, link integrity, responsiveness, and browser compatibility across the whole site.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation** - CSS design system, shared nav/footer, JS utilities, asset setup
- [ ] **Phase 2: Home Page** - Complete index.html establishing the page template pattern
- [ ] **Phase 3: Content Pages** - Research, Teaching, and Contact pages (informational, minimal JS)
- [ ] **Phase 4: Students Hub** - Students page with full ARIA tab interface and JS tab switching
- [ ] **Phase 5: Polish & Verification** - Cross-cutting accessibility audit, link verification, browser testing, performance check

## Phase Details

### Phase 1: Foundation
**Goal**: The CSS design system, shared components, and JS utilities exist and work correctly — every subsequent page can be built by filling in content
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, FOUND-06, NAV-01, NAV-02, NAV-03, NAV-04, NAV-05, LAYOUT-01, LAYOUT-02, TYP-01, TYP-02, TYP-03, TYP-04, TYP-05, TYP-06, TYP-07, TYP-08, ANIM-01, ANIM-02, ANIM-03, ANIM-04, ANIM-05, ASSET-01, ASSET-02, ASSET-03, ASSET-04, PERF-01, PERF-02, PERF-03, PERF-04
**Success Criteria** (what must be TRUE):
  1. Opening any HTML file in a browser shows the sticky nav bar with brand name left, links right, and hamburger button visible on narrow screens
  2. Clicking the hamburger button opens and closes the mobile nav menu, and the button changes visual state between open and closed
  3. The footer displays the current year dynamically and switches between two-column (desktop) and stacked (mobile) layout
  4. All button, card, and tag-pill components render with correct University of Rochester brand colors (navy, Dandelion Yellow) and typography (Georgia headings, Inter body)
  5. Animations are absent when prefers-reduced-motion is set, and fade in smoothly otherwise
**Plans**: TBD

### Phase 2: Home Page
**Goal**: A visitor can read Dr. Barron's identity, affiliation, bio, and navigate to the three main sections from the home page
**Depends on**: Phase 1
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, HOME-06, HOME-07, HOME-08, HOME-09, HOME-10, HOME-11
**Success Criteria** (what must be TRUE):
  1. The hero section shows "Dr. Irving Barron" in serif font on a navy background with affiliation eyebrow, lead text, and two action buttons side-by-side (stacked on mobile)
  2. The profile photo placeholder appears as a navy rectangle with yellow "IB" initials in the hero (right column on desktop, above text on mobile)
  3. The About Me section shows a biographical paragraph and a "Download CV (PDF)" button that links to assets/cv.pdf
  4. Three highlight cards (Research, Teaching, Students) appear below the About section, each with a colored top border and a working "Learn more" link to the correct page
**Plans**: TBD

### Phase 3: Content Pages
**Goal**: A visitor can explore Dr. Barron's research, teaching, and contact information across three fully built pages
**Depends on**: Phase 2
**Requirements**: RES-01, RES-02, RES-03, RES-04, RES-05, RES-06, RES-07, RES-08, RES-09, RES-10, RES-11, RES-12, RES-13, TEACH-01, TEACH-02, TEACH-03, TEACH-04, TEACH-05, TEACH-06, TEACH-07, TEACH-08, CONT-01, CONT-02, CONT-03, CONT-04, CONT-05, CONT-06, CONT-07, CONT-08
**Success Criteria** (what must be TRUE):
  1. The Research page shows a navy header, plain-English overview, seven research-interest tag pills, the NSF project highlight card with funding details, and four publication cards with bold author highlighting and year badges
  2. The Teaching page shows a navy header, teaching philosophy statement, and three course cards (ECE 241, ECE 245/445, ECE 487) each with semester badge, level badge, and full description
  3. The Contact page shows a navy header, a two-column layout (desktop) with office/email details on the left and three external profile links on the right, and the italic note about no contact form
  4. The email address on the Contact page is a working mailto: link and all external links open in a new tab
**Plans**: TBD

### Phase 4: Students Hub
**Goal**: Students can navigate between three resource sections (Current, Prior, Prospective) using a fully accessible tab interface
**Depends on**: Phase 3
**Requirements**: STU-01, STU-02, STU-03, STU-04, STU-05, STU-06, STU-07, STU-08, STU-09, STU-10, STU-11, STU-12
**Success Criteria** (what must be TRUE):
  1. The Students page shows a navy header and three tab buttons; clicking each tab shows its panel and hides the others
  2. Arrow keys (left/right) navigate between tabs without a mouse
  3. The Current Students tab shows office hours, a Blackboard link, email contact, and accommodations info
  4. The Prior Students tab shows a Stay in Touch section and a Recommendation Letters card with bulleted requirements
  5. The Prospective Students tab shows an Undergraduate Research card with application requirements and a Graduate Admissions link
**Plans**: TBD

### Phase 5: Polish & Verification
**Goal**: Every page passes WCAG AA accessibility, all links work, the site is fully responsive from 320px to desktop, and it runs correctly in all modern browsers with no external dependencies
**Depends on**: Phase 4
**Requirements**: A11Y-01, A11Y-02, A11Y-03, A11Y-04, A11Y-05, A11Y-06, A11Y-07, A11Y-08, LINK-01, LINK-02, LINK-03, LINK-04, LINK-05, RESP-01, RESP-02, RESP-03, RESP-04, RESP-05, RESP-06, PERF-05, PERF-06, PERF-07
**Success Criteria** (what must be TRUE):
  1. No yellow text appears on white backgrounds anywhere on the site; all body text is navy or dark gray on white
  2. Every interactive element (nav links, buttons, tabs, hamburger) has a visible focus indicator and correct ARIA attributes
  3. All five pages load and display correctly at 320px wide, with navigation collapsed to hamburger and multi-column layouts stacked to single column
  4. All internal relative links navigate to the correct pages, and all external links open in a new tab with descriptive text
  5. Opening all five pages from the filesystem (no server) in Chrome, Firefox, and Safari shows no console errors and no missing assets
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/TBD | Not started | - |
| 2. Home Page | 0/TBD | Not started | - |
| 3. Content Pages | 0/TBD | Not started | - |
| 4. Students Hub | 0/TBD | Not started | - |
| 5. Polish & Verification | 0/TBD | Not started | - |
