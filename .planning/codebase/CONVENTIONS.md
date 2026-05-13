# Coding Conventions

**Analysis Date:** 2026-05-13

## Naming Patterns

**Files:**
- Root page files are lowercase and descriptive: `research.html`, `teaching.html`, `students.html`, `contact.html`.
- Shared stylesheet is `css/style.css`.
- Shared script is `js/main.js`.

**Functions:**
- JavaScript functions use camelCase.
- Setup routines are named with an `init` prefix, such as `initNavToggle`, `initFooterYear`, and `initAccordion`.
- Event callbacks are mostly inline arrow functions for simple handlers and named helper functions for reusable behavior.

**Variables:**
- JavaScript variables use camelCase: `yearSpan`, `targetIndex`, `sidebarBtns`.
- CSS custom properties use kebab-case with semantic prefixes: `--color-navy`, `--spacing-lg`, `--font-size-body`.

**CSS Classes:**
- BEM-like names are preferred: `.nav__hamburger-line`, `.publication__pdf-download`, `.layout-1__panel`.
- Modifiers use `--`: `.section--butter`, `.card--publication`, `.btn--outline--white`.

## Code Style

**Formatting:**
- HTML uses two-space indentation.
- CSS uses section banners with numbered headings.
- JavaScript uses two-space indentation and semicolons.
- Strings in JavaScript use single quotes.

**Linting:**
- No linting tool is configured.
- Style is enforced by matching nearby code.

## Import Organization

**JavaScript:**
- No imports or modules are used.
- `js/main.js` is a browser script loaded directly by each page.

**CSS:**
- No CSS imports.
- Font loading is declared through `@font-face`.

## Error Handling

**Patterns:**
- Use guard clauses when elements may be absent:
  - `if (!toggle || !nav || !menu) return;`
  - `if (!tablist) return;`
  - `if (headers.length === 0) return;`
- Interactive code assumes complete markup once a component root is present.

**User-Facing Errors:**
- None. There are no form submissions, network calls, or validation flows.

## Accessibility Patterns

**Navigation:**
- Main nav uses `aria-label="Main navigation"`.
- The current page link uses `aria-current="page"`.
- Mobile nav toggle uses `aria-expanded` and `aria-controls`.

**Interactive Components:**
- Students Hub sidebar uses `role="tablist"`, `role="tab"`, `role="tabpanel"`, and `aria-selected`.
- Accordion headers use `aria-expanded` and `aria-controls`.
- Hidden content uses the `hidden` attribute.

**Decorative Media:**
- Decorative SVGs use `aria-hidden="true"` and `focusable="false"`.
- The profile placeholder uses `role="img"` with an accessible label.

## Comments

**When to Comment:**
- HTML comments are used heavily to identify sections and intent.
- CSS section banners organize the single stylesheet.
- JavaScript comments divide modules and explain non-obvious animation/fallback behavior.

**TODO Comments:**
- No formal TODO convention exists.
- Placeholder links and copy are represented in markup rather than TODO comments.

## Function Design

**Size:**
- Initializers are small to medium and component-specific.
- `initTabs` is the largest function and contains nested helpers for panel animation and tab switching.

**Parameters:**
- Most behavior reads from the DOM and uses closures rather than exported APIs.
- No public JavaScript API surface exists.

**Return Values:**
- Initializers return `undefined`; guard clauses are used to exit.

## Module Design

**Exports:**
- None. The script is not modularized.

**State Updates:**
- Prefer updating HTML attributes and CSS classes over storing state in JavaScript objects.
- Keep CSS and JS selectors aligned with the static HTML.

## Content Editing

- Preserve the repeated nav/footer shell across all pages when making navigation changes.
- Keep page metadata in each HTML `<head>` current.
- Use relative internal links such as `research.html` and section anchors such as `#overview`.
- Keep external links explicit and add `rel="noopener noreferrer"` when using `target="_blank"`.

---

*Conventions analysis: 2026-05-13*
*Update when adding tooling or changing style rules.*
