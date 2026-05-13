# Codebase Concerns

**Analysis Date:** 2026-05-13

## Tech Debt

**Repeated page shell:**
- Issue: Navigation and footer markup are duplicated in all five HTML files.
- Why: Project decision avoids JS injection, build tooling, and flash-of-no-nav.
- Impact: Nav/footer edits must be applied consistently across every page.
- Fix approach: Keep manual edits synchronized, or introduce a static-site build/include step only if the project accepts tooling.

**Single large stylesheet:**
- Issue: `css/style.css` contains the whole design system, page-specific styles, responsive rules, and legacy retained classes.
- Why: Plain CSS/no build constraint keeps deployment simple.
- Impact: Selectors can accumulate and regressions may be hard to localize.
- Fix approach: Continue sectioned organization; consider splitting only if a build or multi-file CSS strategy is adopted.

**Placeholder links:**
- Issue: `research.html` publication PDF buttons and `teaching.html` course "Learn more" links use `href="#"`.
- Why: Final linked resources are not present yet, and course CTAs are hidden by CSS.
- Impact: Link audits may flag them; users can land at the top of the page if activated.
- Fix approach: Replace with real PDFs/pages, remove inactive anchors, or use non-link controls until destinations exist.

## Known Bugs

**Accordion content relies on CSS sibling state:**
- Symptoms: `initAccordion` toggles only `aria-expanded`; it does not toggle the `hidden` attribute on accordion content.
- Trigger: Interacting with `.outcomes-accordion__header` in `students.html`.
- Workaround: CSS selectors display adjacent content when `aria-expanded="true"`, but hidden-attribute semantics should be verified in browser/accessibility testing.
- Root cause: State is split between ARIA and CSS, while markup starts with `hidden` on content nodes.

**Contact external links missing rel attributes:**
- Symptoms: `contact.html` opens external links with `target="_blank"` without `rel="noopener noreferrer"`.
- Trigger: Clicking profile links.
- Workaround: Browser behavior still opens the links.
- Root cause: Unlike `research.html`, the contact links did not include the safer rel pattern.

## Security Considerations

**External links:**
- Risk: Reverse tabnabbing for `target="_blank"` links without `rel`.
- Current mitigation: `research.html` uses `rel="noopener noreferrer"` consistently.
- Recommendations: Add `rel="noopener noreferrer"` to `contact.html` external links.

**No forms or backend:**
- Risk: Low application security surface.
- Current mitigation: No user input is submitted, no secrets are required, and no client API calls are made.
- Recommendations: Reassess if adding contact forms, analytics scripts, or third-party embeds.

## Performance Bottlenecks

**Render-blocking CSS:**
- Problem: All CSS is loaded as one blocking stylesheet.
- Measurement: No performance measurements in repo.
- Cause: Simple static architecture.
- Improvement path: Keep CSS lean; measure before optimizing.

**Inline SVG repetition:**
- Problem: Several cards embed repeated SVG markup directly in HTML.
- Measurement: No measured impact.
- Cause: Avoiding asset pipeline and external icon dependencies.
- Improvement path: Accept for current size, or extract reusable assets if markup grows substantially.

## Fragile Areas

**Navigation shell:**
- Why fragile: It is duplicated across all pages.
- Common failures: Missing active state, inconsistent new nav item, stale href.
- Safe modification: Edit all five pages in one pass and verify each `aria-current="page"` value.
- Test coverage: Manual only.

**Students Hub behavior:**
- Why fragile: It coordinates sidebar buttons, mobile select, panels, and accordion state across HTML/CSS/JS.
- Common failures: ID mismatch, stale `data-controls`, hidden panel not synchronized with selected tab.
- Safe modification: Check `students.html`, `css/style.css`, and `js/main.js` together.
- Test coverage: Manual only.

**CSS breakpoints:**
- Why fragile: Several components have breakpoint-specific overrides in distant sections of `css/style.css`.
- Common failures: Text overflow, grid collapse issues, hidden controls appearing at the wrong viewport.
- Safe modification: Test at 320px, 375px, 768px, 1024px, and desktop widths.
- Test coverage: Historical reports only.

## Scaling Limits

**Manual content management:**
- Current capacity: Works well for a small five-page faculty site.
- Limit: More pages, publications, and student outcomes will increase duplicated editing.
- Symptoms at limit: Inconsistent links, stale nav, hard-to-maintain long HTML files.
- Scaling path: Add a static generator or structured content source only when manual maintenance becomes the bottleneck.

## Dependencies at Risk

**Self-hosted Inter font:**
- Risk: If `assets/fonts/inter-variable.woff2` is missing or path changes, typography falls back to system sans-serif.
- Impact: Visual fidelity changes but site remains usable.
- Migration plan: Keep the font asset committed or update `@font-face` path.

## Missing Critical Features

**Automated validation:**
- Problem: No test, lint, link-check, or accessibility command exists.
- Current workaround: Manual/GSD verification reports.
- Blocks: Fast regression checks before edits.
- Implementation complexity: Low to medium, depending on whether npm/tooling remains out of scope.

**Deployment documentation:**
- Problem: Hosting target and deployment steps are not present in source files.
- Current workaround: Static files can be hosted anywhere.
- Blocks: Repeatable release process.
- Implementation complexity: Low.

## Test Coverage Gaps

**Interactive JavaScript:**
- What's not tested: Mobile nav, Students Hub sidebar/select, tab helper, accordion behavior.
- Risk: Regressions can ship silently.
- Priority: Medium.
- Difficulty to test: Low if a browser test tool is introduced; manual otherwise.

**External links:**
- What's not tested: Whether outbound links are alive and safe.
- Risk: Broken user pathways.
- Priority: Medium.
- Difficulty to test: Low with link checker; moderate if avoiding tooling.

---

*Concerns audit: 2026-05-13*
*Update as issues are fixed or new concerns are discovered.*
