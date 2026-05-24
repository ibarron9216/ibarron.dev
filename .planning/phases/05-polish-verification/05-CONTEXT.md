# Phase 5: Polish & Verification - Context

**Gathered:** 2026-03-27
**Status:** Ready for planning

<domain>
## Phase Boundary

Cross-cutting audit of all five pages (index, research, teaching, students, contact) to verify WCAG AA accessibility compliance, link integrity, responsive behavior across devices, browser compatibility, and offline functionality. Fixes any issues found during verification. Does not add new features or content.

</domain>

<decisions>
## Implementation Decisions

### Accessibility Verification Strategy
- **Method:** Full manual audit + VoiceOver testing (comprehensive, not automated-only)
- **Tool:** VoiceOver on Mac (built-in, no installation needed)
- **Scope:** All five pages end-to-end — headings, links, buttons, form elements (tab interface), focus order, state changes
- **Process:** Document all accessibility issues during testing, then batch fix (no pausing to fix mid-audit)
- **Goal:** 100% WCAG AA compliance required — cannot accept 95%; every accessibility violation must be caught and resolved

### Link Verification Strategy
- **Internal links:** Automated link checker for all internal relative links (home → research → teaching → students → contact)
- **External links:** Automated checker + note that external links may break independently over time (ResearchGate, ECE Dept, Blackboard, mailto:)
- **Scope:** Verify all links including `target="_blank"` behavior and `mailto:` link opening
- **Timing:** Link verification baseline before a11y audit, then verify again after fixes to ensure fixes didn't break links

### Responsive Testing Strategy
- **Device approach:** Real devices — Mac Mini native + Chrome DevTools device simulator (not just viewport widths)
- **Devices tested:** iPhone (simulated) + iPad (simulated) + native Mac browser
- **Orientations:** Portrait and landscape for both iPhone and iPad
- **Testing order:** Systematic — all five pages at each device/orientation combination
- **What counts as working:** Page layout adapts correctly, text readable, all content visible, no overflow, interactive elements accessible at all sizes

### Browser Compatibility Strategy
- **Browsers:** Safari, Chrome, Firefox (latest versions only) — three major engines covering ~95% of users
- **Testing method:** Manual testing on each browser (no expensive cross-browser tools like BrowserStack)
- **Testing scope:** Full functionality — visual rendering, console errors, interactive elements (hamburger menu, tabs, links, focus)
- **Pass criteria:** No visual rendering issues, no JavaScript errors, all interactive features work identically across browsers

### Performance & Offline Functionality
- **Performance target:** Pragmatic — no console errors + works offline from filesystem
- **Offline test method:** Open all five HTML files directly (file:// protocol) in browser, verify they work without a server
- **Browsers for offline test:** Test file:// opening on Safari, Chrome, Firefox (all three engines)
- **Error threshold:** Fix any errors at all — strict console compliance (no errors, warnings, or deprecation messages if they affect functionality)

### Claude's Discretion
- Specific WCAG AA checklist items to prioritize (focus indicators, semantic structure, ARIA attributes, heading hierarchy)
- Automated tool selection (axe DevTools vs others)
- Batch fixing strategy (order of fixes, prioritization)
- Documentation format for accessibility issues found during testing

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Accessibility Standards
- `REQUIREMENTS.md` §Accessibility — A11Y-01 through A11Y-08 requirements (color contrast, ARIA, focus, heading hierarchy)
- `ROADMAP.md` §Phase 5 — Phase goal and success criteria (WCAG AA compliance across five pages, all links work, responsive 320px to desktop, modern browsers)

### Link & Navigation Verification
- `REQUIREMENTS.md` §Links & Navigation — LINK-01 through LINK-05 (relative hrefs, link verification, external links open in new tab, active page highlighting, highlight cards link to correct pages)

### Responsiveness Requirements
- `REQUIREMENTS.md` §Responsiveness — RESP-01 through RESP-06 (mobile 320px+, navigation collapses to hamburger <768px, multi-column stacks to single column, readable fonts, 44x44px touch targets)

### Browser & Performance Requirements
- `REQUIREMENTS.md` §Browser & Performance — PERF-05 through PERF-07 (image optimization, works in all modern browsers, HTTPS-ready)

### Project Constraints
- `PROJECT.md` §Constraints — Plain HTML5/CSS3/vanilla JS only, no frameworks or dependencies, self-hosted assets, single CSS file

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **VoiceOver testing:** Built-in to macOS — no external tools needed beyond Safari/Chrome/Firefox browsers
- **Automated link checker:** Use open-source tool like `linkchecker` (Python) or `broken-link-checker` (npm) — both free, CLI-based
- **Device simulation:** Chrome DevTools responsive design mode (free, built-in) — supports iPhone, iPad, and custom viewport dimensions
- **Console error detection:** Built-in browser dev tools on Safari, Chrome, Firefox — check for errors in console tab

### Established Patterns
- **Five HTML pages:** index.html, research.html, teaching.html, students.html, contact.html — all follow same structure (nav, main content, footer)
- **Single CSS file:** css/style.css with all design tokens, breakpoints (640px, 768px, 1024px), components, and responsive rules already defined
- **Vanilla JavaScript:** ~200 lines total across three functions (hamburger menu, tab switching, footer year) — small, auditable surface
- **Focus management:** Existing CSS includes focus states; VoiceOver testing will verify they work as expected
- **ARIA markup:** Phase 4 added ARIA roles (tablist, tab, tabpanel) to students page; Phase 5 audits completeness

### Integration Points
- **All pages share:** nav/footer HTML blocks, css/style.css, main.js utilities
- **Tab interface:** students.html uses initTabs() from main.js — will be tested during VoiceOver audit
- **Mobile nav:** All pages use hamburger button with initNav() — will be tested on iPhone/iPad simulation
- **External links:** ResearchGate, ECE Dept, Blackboard, mailto: links across research.html, teaching.html, students.html, contact.html

</code_context>

<specifics>
## Specific Ideas

- VoiceOver testing is the most critical verification — the faculty webpage must be usable for students with visual impairments
- Test sequence: link verification first (quick baseline), then full a11y audit (time-intensive), then link re-check, then responsive/browser testing
- Document accessibility issues in a structured format (page, element, issue, severity) to make fixing and verification easier
- Lighthouse score not required, but if you run it, it's a useful validation signal (aim for 90+/100 on accessibility pillar)

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope (verification and fixes only).

</deferred>

---

*Phase: 05-polish-verification*
*Context gathered: 2026-03-27*
