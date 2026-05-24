---
phase: 5
slug: polish-verification
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-27
---

# Phase 5 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution. Primarily manual verification through accessibility audits, responsive testing, browser compatibility, and offline functionality checks.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual verification + browser DevTools (no code test framework) |
| **Config file** | None — browser-based testing |
| **Quick run command** | Browser console check + manual spot-check on one page |
| **Full suite command** | VoiceOver audit + Linkinator + responsive test + browser console + offline test |
| **Estimated runtime** | ~4-5 hours (comprehensive accessibility audit across 5 pages) |

---

## Sampling Rate

- **After every accessibility audit task:** Spot-check one page with VoiceOver
- **After every fix batch:** Re-run Linkinator to confirm links still work
- **After responsive testing:** Verify no new regressions in CSS (browser DevTools)
- **Before `/gsd:verify-work`:** Full verification suite must be green (all pages pass, all links work, no console errors)
- **Max feedback latency:** Test completion → issue documentation (same day)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | Manual Verification | Status |
|---------|------|------|-------------|-----------|-------------------|----------------------|--------|
| 05-01-01 | 01 | 1 | LINK-01, LINK-02, LINK-03, LINK-04, LINK-05 | automated | `linkinator . --recurse --skip node_modules` | ✅ all links confirmed | ⬜ pending |
| 05-01-02 | 01 | 1 | A11Y-01 through A11Y-08 | manual | VoiceOver on Safari | ✅ all 5 pages audited, issues documented | ⬜ pending |
| 05-01-03 | 02 | 1 | A11Y-01 through A11Y-08 | manual | Browser console + CSS review | ✅ all fixes applied and verified | ⬜ pending |
| 05-01-04 | 02 | 2 | LINK-01 through LINK-05 | automated | `linkinator . --recurse` (post-fix) | ✅ links re-verified, no regressions | ⬜ pending |
| 05-02-01 | 02 | 2 | RESP-01 through RESP-06 | manual | Chrome DevTools responsive mode (320px, 768px, 1024px+) | ✅ all layouts tested on iPhone/iPad/desktop | ⬜ pending |
| 05-02-02 | 03 | 2 | PERF-05, PERF-06, PERF-07 | manual | Safari, Chrome, Firefox console + visual check | ✅ no errors, correct rendering on all 3 browsers | ⬜ pending |
| 05-03-01 | 03 | 3 | PERF-05, PERF-06, PERF-07 | manual | Open file:// protocol directly; browser console check | ✅ offline mode works, no missing assets | ⬜ pending |

*Status: ⬜ pending · ✅ verified · ❌ failed · ⚠️ needs review*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Focus indicators visible on all interactive elements | A11Y-02, A11Y-03 | VoiceOver can't be fully automated; human judgment needed | Use VoiceOver with keyboard Tab navigation; verify outline visible and color contrasts meet WCAG AA (4.5:1 for normal text, 3:1 for large text) |
| Heading hierarchy correct (no skips, one H1 per page) | A11Y-04 | Requires semantic understanding | Navigate each page with VoiceOver heading list; confirm H1 → H2 → H3 progression with no gaps |
| ARIA attributes complete (aria-label, aria-expanded, aria-selected, aria-controls) | A11Y-05 | Requires VoiceOver testing to confirm expected behavior | Use VoiceOver rotor to inspect all interactive elements; tabs should announce state and have aria-selected/aria-controls |
| Form field labels accessible (tab interface, contact form) | A11Y-06 | VoiceOver testing confirms label associations | Use Tab key in VoiceOver; each form input must announce associated label |
| Links semantically distinct, external links announce "opens in new tab" | A11Y-07, LINK-03 | Visual + screen reader context | Inspect each link in VoiceOver; external links must have aria-label or visible indicator (e.g., icon) |
| Page responsive at 320px width, hamburger collapses navigation | RESP-01, RESP-02, RESP-03 | Viewport emulation isn't identical to real devices | Test on Chrome DevTools at 320px, 768px, 1024px+; verify hamburger shows/hides correctly and content stacks properly |
| All five pages open correctly from filesystem (no server) | PERF-05, PERF-06, PERF-07 | file:// protocol has different security/loading rules | Open each HTML file directly (file:///path/to/page.html) in Safari, Chrome, Firefox; verify no 404s, no console errors, fonts load, layout intact |

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements.* No additional test setup needed. All verification occurs through browser-based manual testing (VoiceOver, DevTools, Linkinator CLI).

---

## Validation Sign-Off

- [ ] Link verification baseline run (Linkinator) before a11y audit
- [ ] All 5 pages audited with VoiceOver on macOS
- [ ] WCAG AA issues documented in structured format (page, element, issue, severity)
- [ ] All accessibility fixes applied and re-tested
- [ ] Link verification re-run post-fixes
- [ ] Responsive testing completed (320px, 768px, 1024px+ on Chrome DevTools)
- [ ] Browser compatibility testing completed (Safari, Chrome, Firefox latest versions)
- [ ] Offline testing completed (file:// protocol on all 3 browsers)
- [ ] No console errors on any page in any browser
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
