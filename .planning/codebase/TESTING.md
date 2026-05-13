# Testing Patterns

**Analysis Date:** 2026-05-13

## Test Framework

**Runner:**
- No automated test runner is configured.
- There is no `package.json`, Playwright config, Jest/Vitest config, or CI workflow in the repo.

**Assertion Library:**
- None.

**Run Commands:**
```bash
# No project test command exists.
```

## Test File Organization

**Location:**
- No test files are present.
- Historical manual/agent verification artifacts are stored in `.planning/phases/`.

**Naming:**
- Existing verification reports use GSD naming such as `05-VERIFICATION.md`, `05-RESPONSIVE-REPORT.md`, and `05-LINK-REPORT.md`.

**Structure:**
```text
.planning/
`-- phases/
    |-- 01-foundation/
    |-- 02-home/
    |-- 03-content-pages/
    |-- 04-students-hub/
    `-- 05-polish-verification/
```

## Manual Verification Patterns

**Responsive Checks:**
- Prior reports reference viewport checks at 320px, 375px, 768px, and 1024px.
- Responsive behavior is mainly controlled by `css/style.css` media queries.

**HTML and Link Checks:**
- Prior GSD phase artifacts mention W3C HTML validation and internal link verification.
- Current source contains placeholder `href="#"` links that should be included in future link audits.

**Interaction Checks:**
- Mobile hamburger toggles `.nav--open` and `aria-expanded`.
- Students Hub sidebar changes panel `hidden` state and `aria-selected`.
- Students Hub mobile select syncs to the same panels.
- Accordion headers toggle `aria-expanded`; CSS displays content based on the adjacent content element.

## Recommended Test Additions

**Static Validation:**
- HTML validation for all root pages.
- Link checking for internal links, external links, and placeholder anchors.
- CSS syntax validation for `css/style.css`.

**Browser Smoke Tests:**
- Load each root page.
- Verify shared nav/footer render.
- Verify no console errors from `js/main.js`.
- Verify `assets/fonts/inter-variable.woff2` and `assets/cv.pdf` resolve.

**Interaction Tests:**
- Mobile nav opens and closes.
- Clicking nav links closes the mobile menu.
- Students Hub sidebar buttons show the correct panel.
- Students Hub select shows the correct panel on mobile.
- Accordion headers expand and collapse.

**Accessibility Checks:**
- Keyboard focus visibility.
- ARIA state changes for nav, tabs/sidebar, and accordion.
- Color contrast on navy, yellow, butter, and card backgrounds.

## Mocking

**Framework:**
- None.

**What to Mock:**
- Nothing currently requires mocking because there are no network calls or external services.

## Fixtures and Factories

**Test Data:**
- Test data would be the static HTML pages themselves.
- No fixture directory exists.

## Coverage

**Current Coverage:**
- Manual/GSD verification only.
- No automated coverage metrics.

**Highest Risk Untested Areas:**
- Students Hub interactive behavior in `students.html` and `js/main.js`.
- Cross-page duplicated nav/footer consistency.
- External links and placeholder PDF/course links.
- Responsive layout regressions in the single large stylesheet.

---

*Testing analysis: 2026-05-13*
*Update after adding automated validation, browser tests, or CI.*
