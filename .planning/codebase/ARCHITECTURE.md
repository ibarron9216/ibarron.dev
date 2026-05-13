# Architecture

**Analysis Date:** 2026-05-13

## Pattern Overview

**Overall:** Static multi-page website.

**Key Characteristics:**
- Five hand-authored HTML pages.
- One shared stylesheet for design system, components, page layouts, and responsive rules.
- One shared JavaScript file for progressive enhancement.
- No build step, package manager, backend, database, or client-side routing.

## Layers

**Content Layer:**
- Purpose: Holds semantic page content and page-specific structure.
- Contains: `index.html`, `research.html`, `teaching.html`, `students.html`, `contact.html`.
- Depends on: Shared CSS and JavaScript assets.
- Used by: Browser navigation via normal page loads.

**Presentation Layer:**
- Purpose: Defines the visual system and responsive behavior.
- Contains: `css/style.css`.
- Depends on: HTML class names, ARIA attributes, and the Inter font asset.
- Used by: All five HTML pages.

**Behavior Layer:**
- Purpose: Adds interactive behavior without changing the static page model.
- Contains: `js/main.js`.
- Depends on: DOM selectors such as `.nav__hamburger`, `.footer__year`, `[role="tablist"]`, `.layout-1__sidebar`, and `.outcomes-accordion__header`.
- Used by: All pages, with guard clauses when a component is absent.

**Asset Layer:**
- Purpose: Provides static downloadable and visual resources.
- Contains: `assets/cv.pdf` and `assets/fonts/inter-variable.woff2`.
- Depends on: Browser asset loading.
- Used by: `index.html` and `css/style.css`.

## Data Flow

**Page Load Flow:**

1. Browser requests an HTML page such as `index.html`.
2. The page loads `css/style.css`.
3. The page loads `js/main.js` at the end of `body`.
4. `DOMContentLoaded` initializes all JS modules.
5. Each initializer checks whether its target DOM exists and exits if not.
6. User interactions mutate DOM attributes/classes locally.

**State Management:**
- State is entirely DOM-local and ephemeral.
- Mobile nav state is represented by `aria-expanded` on `.nav__hamburger` and `.nav--open` on `.nav`.
- Students Hub sidebar state is represented by `hidden` on panels and `aria-selected` on sidebar buttons.
- Accordion state is represented by `aria-expanded` on accordion headers.
- Footer year is derived from `new Date().getFullYear()`.

## Key Abstractions

**Shared Page Shell:**
- Purpose: Repeated navigation and footer structure across every page.
- Examples: `.site-header`, `.nav`, `.footer`.
- Pattern: Copy-pasted static shell by project decision; no include system.

**Design Tokens:**
- Purpose: Centralize colors, spacing, typography, and breakpoints.
- Examples: `--color-navy`, `--color-yellow`, `--spacing-lg`, `--font-size-body`.
- Pattern: CSS custom properties in `:root`.

**Component Classes:**
- Purpose: Reusable page building blocks.
- Examples: `.btn`, `.card`, `.card-ur`, `.course-media-card`, `.profile-placeholder`.
- Pattern: BEM-like naming with modifier classes.

**Progressive Enhancers:**
- Purpose: Add behavior only when matching markup is present.
- Examples: `initNavToggle`, `initFooterYear`, `initTabs`, `initSidebarNav`, `initAccordion`.
- Pattern: Guard clause per initializer.

## Entry Points

**HTML Pages:**
- Location: `index.html`, `research.html`, `teaching.html`, `students.html`, `contact.html`.
- Triggers: Browser navigation.
- Responsibilities: Page content, metadata, active nav link, links to shared assets.

**Stylesheet:**
- Location: `css/style.css`.
- Triggers: `<link rel="stylesheet" href="css/style.css">`.
- Responsibilities: Reset, design tokens, layout, components, page-specific sections, responsive rules.

**JavaScript:**
- Location: `js/main.js`.
- Triggers: `<script src="js/main.js"></script>` and `DOMContentLoaded`.
- Responsibilities: Mobile nav, footer year, ARIA tabs, Students Hub sidebar/select sync, accordion toggles.

## Error Handling

**Strategy:** Defensive DOM checks.

**Patterns:**
- Initializers return early when required DOM elements are absent.
- Tab and sidebar behavior assumes matching ARIA/control IDs when the relevant component exists.
- No global error reporting or user-visible error states.

## Cross-Cutting Concerns

**Accessibility:**
- Semantic landmarks are used: `header`, `nav`, `main`, `section`, `footer`.
- Active nav links use `aria-current="page"`.
- Interactive components use ARIA attributes such as `aria-expanded`, `aria-controls`, `aria-selected`, and `role="tabpanel"`.
- Focus indicators are centralized in `css/style.css`.

**Responsive Design:**
- Mobile-first CSS with breakpoints at 640px, 768px, 1024px, and 1200px.
- Mobile nav is toggled by JavaScript below 640px.

**Branding:**
- University of Rochester-inspired colors are encoded as CSS variables.
- Inter and Georgia form the typographic system.

---

*Architecture analysis: 2026-05-13*
*Update when introducing build tooling, templates, backend behavior, or new page architecture.*
