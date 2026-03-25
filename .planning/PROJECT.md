# ibarron.dev — Faculty Webpage

## What This Is

Personal faculty webpage for Dr. Irving Ricardo Barron Martinez, Assistant Professor of Instruction in Electrical and Computer Engineering at the University of Rochester. Plain HTML/CSS/JS only — no frameworks, build tools, or dependencies. Five pages (Home, Research, Teaching, Students, Contact) with consistent navigation, University of Rochester brand guidelines, and responsive design from mobile to desktop.

## Core Value

A professional, accessible, visually coherent faculty presence that showcases research, teaching philosophy, and student resources using only plain HTML/CSS/JavaScript.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Build semantic HTML structure for all 5 pages with proper metadata
- [ ] Implement University of Rochester color system and typography (Inter sans-serif, Georgia serif)
- [ ] Create responsive layout system for mobile (<640px), tablet (640-1024px), desktop (>1024px)
- [ ] Build sticky navigation bar with hamburger menu toggle for mobile
- [ ] Implement responsive footer with dynamic year generation
- [ ] Create home page with hero, about section, and three highlight cards
- [ ] Create research page with overview, research interests tags, NSF project card, and publications
- [ ] Create teaching page with philosophy and three course cards
- [ ] Create students page with tabbed interface (Current/Prior/Prospective) and student resources
- [ ] Create contact page with two-column contact details and links
- [ ] Implement smooth fade-in animations on page load (CSS only, respects prefers-reduced-motion)
- [ ] Ensure all internal links work correctly (relative hrefs)
- [ ] Build profile photo placeholder (CSS-based navy rectangle with yellow "IB" initials)
- [ ] Hamburger menu implementation (vanilla JS, no external libraries)
- [ ] Ensure WCAG color contrast on all text (white/yellow on navy, dark text on light backgrounds)

### Out of Scope

- Build tools, npm, or external dependencies
- CMS or dynamic content management (manual HTML edit only)
- Official University of Rochester logos, wordmarks, or photography
- Mobile app version
- Real-time updates or databases
- Server-side functionality

## Context

**Design System:**
- Official University of Rochester brand palette: navy (#001E5F), Dandelion Yellow (#FFD82B), accent blues, and grays
- Typography: Inter Variable (sans-serif) for body/UI, Georgia serif for H1/H2 headings
- Component library: buttons (primary/outline), cards with yellow accent borders, tag pills
- Animations: CSS fade-in + translate on page load, 0.2s transitions on hover
- Breakpoints: 640px (mobile→tablet), 1024px (tablet→desktop), max content width 1100px

**Page Structure:**
- index.html — Hero, about, three highlight cards
- research.html — Overview, research interests tags, NSF project, publications
- teaching.html — Philosophy, three course cards
- students.html — Tab-based interface with three student resource sections
- contact.html — Two-column contact details and external links
- css/style.css — All styling (no CSS frameworks)
- assets/cv.pdf — Placeholder for CV upload

**Content:**
- Profile photo: CSS placeholder (navy bg, yellow "IB" initials) until user replaces with real image
- Publications: Four academic papers with authorship highlighting and venue details
- Courses: ECE 241 (Signals & Systems), ECE 245/445 (Wireless Communications), ECE 487 (Senior Design)
- Bio: First-person narrative about background, research focus, and academic journey

**User Interaction:**
- Hamburger menu on mobile devices (<768px)
- Tab navigation on students page (Current/Prior/Prospective with JS toggle)
- Outbound links to Blackboard, ResearchGate, University ECE department
- No form submissions — email-only contact

## Constraints

- **Technology**: Plain HTML5, CSS3, vanilla JavaScript only — no frameworks, build tools, or npm dependencies
- **Brand**: Must follow University of Rochester brand guidelines for color contrast and typography
- **Accessibility**: WCAG AA minimum — especially color contrast and semantic HTML
- **Content management**: Manual HTML editing — no database or CMS
- **Performance**: All assets served statically, single CSS file, minimal JS
- **Maintenance**: User will manually update publications, courses, and content as they change

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Plain HTML/CSS/JS only | Simplicity, no maintenance overhead, instant loading, no dependencies | ✓ Approved |
| University of Rochester brand colors | Official faculty presence, institutional credibility | ✓ Approved |
| CSS-based profile photo placeholder | No asset needed until photo is ready, maintains design fidelity | ✓ Approved |
| Vanilla JS hamburger menu | No external libraries, clear implementation, maintainable | ✓ Approved |
| Tab interface on students page | Organize content without page navigation, cleaner UX | ✓ Approved |
| All five pages in v1 | Complete faculty presence from launch | ✓ Approved |

---
*Last updated: 2026-03-25 after initialization*
