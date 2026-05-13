# Technology Stack

**Analysis Date:** 2026-05-13

## Languages

**Primary:**
- HTML5 - Page markup for `index.html`, `research.html`, `teaching.html`, `students.html`, and `contact.html`.
- CSS3 - All layout, typography, responsive behavior, component styling, and animation in `css/style.css`.
- JavaScript - Vanilla browser behavior in `js/main.js`.

**Secondary:**
- Markdown - GSD planning and project documentation in `.planning/`.

## Runtime

**Environment:**
- Browser runtime only. The site can be opened as static files or served by any static host.
- No server-side runtime is required.

**Package Manager:**
- None. There is no `package.json`, lockfile, or dependency install step.

## Frameworks

**Core:**
- None. The project intentionally uses plain HTML, CSS, and vanilla JavaScript.

**Testing:**
- No automated test framework is installed.
- Prior verification artifacts live under `.planning/phases/`, but there is no runnable local test suite.

**Build/Dev:**
- No bundler, transpiler, or build tool.
- Source files are production files.

## Key Dependencies

**Runtime Dependencies:**
- None.

**Static Assets:**
- `assets/fonts/inter-variable.woff2` - Self-hosted Inter variable font used by `@font-face` in `css/style.css`.
- `assets/cv.pdf` - Linked from `index.html` as the downloadable CV.

## Configuration

**Environment:**
- No environment variables.
- No secrets or service configuration.

**Build:**
- No build configuration files.
- CSS design tokens are declared in `:root` in `css/style.css`.

## Platform Requirements

**Development:**
- Any modern browser.
- Optional local static server for realistic navigation and asset loading, but not required by the codebase.

**Production:**
- Any static hosting provider that can serve HTML, CSS, JavaScript, fonts, and PDFs.
- No database, API server, or serverless functions.

## Operational Notes

- Every HTML page links the same stylesheet: `css/style.css`.
- Every HTML page links the same script: `js/main.js`.
- Manual edits are the content management model.
- Adding npm tooling would be a deliberate architecture change, not an existing pattern.

---

*Stack analysis: 2026-05-13*
*Update after major dependency or hosting changes.*
