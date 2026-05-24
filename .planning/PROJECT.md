# ibarron.dev — Faculty Webpage

## Current State

**Shipped version:** v1.0 MVP on 2026-05-17

Personal faculty webpage for Dr. Irving Ricardo Barron Martinez, Assistant Professor of Instruction in Electrical and Computer Engineering at the University of Rochester. The shipped site is a static, zero-dependency HTML/CSS/JS website with five pages: Home, Research, Teaching, Students, and Contact.

## What This Is

A professional faculty website that presents Dr. Barron's identity, research, teaching, student resources, and contact information in a responsive University of Rochester-aligned design. The site works directly from static files and does not require a framework, build step, server, database, or external runtime dependency.

## Core Value

A professional, accessible, visually coherent faculty presence that showcases research, teaching philosophy, and student resources using only plain HTML/CSS/JavaScript.

## Requirements

### Validated

- ✓ Semantic HTML structure for all five pages — v1.0
- ✓ University of Rochester color system and typography — v1.0
- ✓ Responsive layout across mobile, tablet, and desktop breakpoints — v1.0
- ✓ Sticky navigation with mobile hamburger behavior — v1.0
- ✓ Responsive footer with dynamic year generation — v1.0
- ✓ Home page with hero, biography, CV link, and section cards — v1.0
- ✓ Research page with publications, project highlights, research content, and external links — v1.0
- ✓ Teaching page with philosophy and course information — v1.0
- ✓ Students Hub with accessible topic navigation and student resources — v1.0
- ✓ Contact page with contact details and external profiles — v1.0
- ✓ WCAG AA accessibility, heading hierarchy, focus indicators, link integrity, responsive behavior, and cross-browser/offline verification — v1.0

### Active

(None yet — define the next milestone with `$gsd-new-milestone`.)

### Out of Scope

- Build tools, npm, or external dependencies
- CMS or dynamic content management
- Official University of Rochester logos, wordmarks, or photography unless explicitly supplied
- Mobile app version
- Real-time updates or databases
- Server-side functionality
- Contact form backend
- Blog, comments, authentication, or e-commerce

## Next Milestone Goals

Potential v1.1/v2.0 directions to consider during `$gsd-new-milestone`:

- Replace the CSS profile placeholder with a real optimized profile photo.
- Add sitemap/robots metadata and deployment-oriented SEO polish.
- Add print-friendly CV/page styling.
- Expand publications or course updates as content changes.
- Consider analytics only if privacy and maintenance tradeoffs are acceptable.

## Context

**Design System:**

- Official University of Rochester palette centered on navy (#001E5F) and Dandelion Yellow (#FFD82B)
- Inter Variable for body/UI text and Georgia for major headings
- Reusable static components: buttons, cards, tag pills, page headers, sidebar navigation, accordions, and contact/profile link lists
- Breakpoints: mobile-first styles with tablet/desktop expansions

**Page Structure:**

- `index.html` — hero, biography, and section cards
- `research.html` — research work, publications, project/podcast/media links
- `teaching.html` — teaching philosophy and courses
- `students.html` — student resource hub with topic navigation and impact/outcomes content
- `contact.html` — email, office, address, office hours, and profile links
- `css/style.css` — all styling
- `js/main.js` — navigation, footer year, tab/sidebar behavior

## Constraints

- **Technology:** Plain HTML5, CSS3, vanilla JavaScript only
- **Brand:** University of Rochester color and typography alignment
- **Accessibility:** WCAG AA minimum
- **Content management:** Manual HTML editing
- **Performance:** Static assets, self-hosted font, minimal JavaScript
- **Maintenance:** Content should remain easy to update without tooling

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Plain HTML/CSS/JS only | Simplicity, no maintenance overhead, instant loading, no dependency churn | ✓ Good |
| Self-host Inter Variable font | Offline functionality and privacy; no Google Fonts dependency | ✓ Good |
| University of Rochester brand colors | Institutional credibility and visual consistency | ✓ Good |
| CSS-based profile placeholder | Allowed launch without waiting on photography | ✓ Revisit when real photo is available |
| Copy-pasted nav/footer per page | Avoids JS-injected navigation and keeps pages static-file friendly | ✓ Good |
| Vanilla JS hamburger/sidebar interactions | Clear, maintainable behavior without libraries | ✓ Good |
| Sidebar/select Students Hub | Better information architecture than the initial tab-only structure | ✓ Good |
| Phase 5 as final cross-page verification authority | Later polish fixed stale Phase 3 verification gaps | ✓ Good |

---
*Last updated: 2026-05-17 after v1.0 milestone*
