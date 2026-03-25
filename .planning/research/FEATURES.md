# Features: ibarron.dev Faculty Website

**Defined:** 2026-03-25
**Confidence:** HIGH

## Table Stakes (Must Have)

Features users expect on any faculty website. Missing these = incomplete presence.

- Name, title, institutional affiliation prominently displayed
- Professional headshot / profile photo
- Bio paragraph (background, education, current role)
- Downloadable CV/resume
- Email contact information
- Research description (what you work on)
- Teaching information (courses taught)
- Navigation menu (clear site structure)
- Link to institutional affiliation (University of Rochester)
- Mobile responsiveness (works on phones)
- HTTPS / secure connection
- Semantic, accessible HTML (works with screen readers, keyboard navigation)
- Professional visual design

## Differentiators (Stand Out)

Features that make this faculty site distinctive and user-friendly:

- **Student-facing resources hub** (office hours, recommendation letters, research opportunities) — most faculty sites bury this
- **Research interest tags / keywords** (searchable, visual way to browse focus areas)
- **Highlighted authorship in publications** (author name in bold when it appears) — makes CV contributions clear
- **Consistent brand color system** (University of Rochester official palette) — reinforces institutional identity
- **Teaching philosophy statement** (why you teach the way you do) — humanizes the instructor
- **Highlight cards on homepage** (Research, Teaching, Students) — guides visitor to the three main sections
- **Smooth fade-in animations on page load** (CSS only, respects accessibility preferences)
- **Prospective student framing** (clearly labeled sections for undergrads vs. grad students)
- **External profile links** (ResearchGate, departmental page, institutional faculty listing)
- **Clear course descriptions** (level, semester, topics) — helps students plan course sequences

## Anti-Features (Avoid)

Things NOT to build — common mistakes in faculty sites:

- Contact form with email backend (unreliable, maintenance burden) — email link is better
- CMS or content management system (overkill for static content, adds complexity)
- Social media feed embeds (breaks when platforms change API, slows page load)
- Infinite scroll or pagination (faculty sites aren't blogs)
- Dark mode toggle (adds complexity, most users prefer light on their own terms)
- Real-time collaboration features or live chat (out of scope)
- Video hero background (slow, distracting, hard to make accessible)
- Comment sections (spam, moderation burden, not needed for faculty info)
- Shopping cart / transactions (not applicable)
- User authentication / login required (public information should be public)

## Feature Dependency Tree

```
Homepage (index.html)
  ├─ Navigation bar (all pages)
  ├─ Footer (all pages)
  ├─ Profile photo placeholder
  ├─ About section
  └─ Three highlight cards (links to other pages)

Research page (research.html)
  ├─ Research overview (plain-English summary)
  ├─ Research interest tags
  ├─ NSF project highlight card
  └─ Publications section
       └─ Publication cards (venue, authors, year badge)

Teaching page (teaching.html)
  ├─ Teaching philosophy
  └─ Course cards (3 courses)
       ├─ Course number & title
       ├─ Description
       ├─ Semester badge
       └─ Level badge

Students page (students.html)
  ├─ Tab navigation (Current / Prior / Prospective)
  ├─ Current Students tab
  │   ├─ Office hours
  │   ├─ Course materials link
  │   ├─ Reaching me (email)
  │   └─ Accommodations policy
  ├─ Prior Students tab
  │   ├─ Stay in touch
  │   └─ Recommendation letters info
  └─ Prospective Students tab
      ├─ Undergraduate research opportunities
      └─ Graduate admissions info

Contact page (contact.html)
  ├─ Contact details (email, office, address)
  └─ External profiles & links
```

## MVP Definition

**Minimum Viable Product** = all 5 pages working with:
- Semantic HTML structure
- University of Rochester brand colors and typography
- Navigation and footer on every page
- All content sections from spec
- Mobile responsiveness (hamburger menu on <768px)
- Tab interface on Students page working
- All links functional (relative)
- Accessibility baseline (color contrast, ARIA on interactive elements, semantic headings)

**Post-MVP enhancements** (v2):
- Dark mode toggle
- Print-friendly stylesheet
- Search functionality
- CMS integration for easier content updates
- Analytics integration
- Real photo replaces CSS placeholder

## Prioritization Matrix

| Feature | Priority | Effort | Build Phase |
|---------|----------|--------|-------------|
| Navigation / footer shell | CRITICAL | Low | Phase 1 (CSS) |
| Home page | CRITICAL | Low | Phase 2 |
| Research page | HIGH | Medium | Phase 3 |
| Teaching page | HIGH | Low | Phase 3 |
| Contact page | HIGH | Low | Phase 3 |
| Students page (with tabs) | HIGH | Medium | Phase 4 |
| Hamburger menu on mobile | HIGH | Low | Phase 1 (JS) |
| Tab interface | MEDIUM | Medium | Phase 4 (JS) |
| Animations (fade-in) | MEDIUM | Low | Phase 1 (CSS) |
| Research interest tags | MEDIUM | Low | Phase 3 (CSS) |

## No Open Questions

Feature set is fully derived from PROJECT.md specification. No ambiguity on what to build.

---
*Features research: 2026-03-25*
