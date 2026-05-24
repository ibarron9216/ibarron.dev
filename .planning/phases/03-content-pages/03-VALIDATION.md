---
phase: 3
slug: content-pages
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-26
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution. Phase 3 builds three new content pages (Research, Teaching, Contact) extending the Phase 1 design system and Phase 2 home page template.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | W3C HTML Validator + WAVE Accessibility Audit + Lighthouse |
| **Config file** | None — validation via CLI tools or online checker |
| **Quick run command** | `npx html-validate research.html teaching.html contact.html` (or manual W3C check) |
| **Full suite command** | W3C HTML5 validator (zero errors) + WAVE accessibility audit + Lighthouse desktop audit (90+ score) |
| **Estimated runtime** | ~2-5 minutes (automated validation) + ~15 minutes (manual accessibility audit per page) |

---

## Sampling Rate

- **After every task commit:** Manual HTML validation via W3C validator (per task description in plans)
- **After every plan wave:** Full W3C HTML5 validation (zero errors), WAVE accessibility audit, Lighthouse desktop score verification
- **Before Phase gate:** All three pages pass W3C validation + no accessibility issues in WAVE + responsive testing at 3 breakpoints (320px, 768px, 1024px) confirmed
- **Max feedback latency:** Manual verification ~20 minutes per wave

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement IDs | Test Type | Verification Method | Status |
|---------|------|------|---|-----------|-------------------|--------|
| 03-01-01 | 01 | 1 | RES-01 to RES-13 | Automated HTML + Manual CSS | W3C HTML Validator for research.html + visual inspection of cards/tags/header | ⬜ pending |
| 03-01-02 | 01 | 1 | RES-01 to RES-13 | Automated HTML + Manual visual | W3C validation of publication cards + author highlighting visibility check | ⬜ pending |
| 03-02-01 | 02 | 2 | TEACH-01 to TEACH-08 | Automated HTML + Manual CSS | W3C HTML Validator for teaching.html + course card badge positioning verification | ⬜ pending |
| 03-02-02 | 02 | 2 | CONT-01 to CONT-08 | Automated HTML + Manual links | W3C HTML Validator for contact.html + manual link click-through (mailto: and external links target="_blank") | ⬜ pending |
| 03-03-01 | 03 | 3 | All (RES-01 to CONT-08) | Automated validation | Full W3C HTML5 validation (all three pages, zero errors) + HTML structure check | ⬜ pending |
| 03-03-02 | 03 | 3 | All (RES-01 to CONT-08) | Manual checkpoint | WAVE accessibility audit + Lighthouse desktop audit (90+ score) + responsive breakpoint testing (320px, 768px, 1024px) | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing infrastructure covers all phase requirements. No new test files, fixtures, or test framework installation needed.

**Rationale:** Phase 1 foundation established semantic HTML structure and CSS validation protocols. Phase 2 home page successfully passed W3C validation and responsive testing. Phase 3 extends those same patterns in three new pages. Following the same validation protocol is sufficient.

---

## Manual-Only Verifications

| Behavior | Requirement IDs | Why Manual | Test Instructions |
|----------|---|------------|-------------------|
| Publication card author highlighting visibility | RES-10, RES-11, RES-12, RES-13 | Author name styling (bold + light background) is visual/accessibility concern, not automatically checkable | Inspect each of 4 publication cards: verify author name is bold weight, has light gray (#f5f5f5) background, and remains readable on all breakpoints |
| Course card badge positioning | TEACH-01 to TEACH-08 | Badge alignment (semester + level side-by-side on right) is visual layout concern | Inspect each of 3 course cards: verify semester and level badges display side-by-side on the right, stack vertically on mobile (640px), and don't interfere with title reading |
| Page header decorative icon visibility/scaling | RES-01, TEACH-01, CONT-01 | SVG icon sizing (responsive with clamp()) is visual/UX concern | Check page headers at 320px, 768px, 1024px: verify icon is visible, scales proportionally, doesn't overlap text, and maintains aspect ratio |
| Research interests tag wrapping | RES-04, RES-05 | Tag flex-wrap behavior is responsive layout concern | Check research.html at 320px, 640px, 1024px: verify tags wrap naturally, don't overflow, maintain readable spacing between pills |
| Contact page two-column desktop layout | CONT-01 to CONT-08 | Two-column desktop grid is visual/responsive concern | Check contact.html at 1024px: verify left and right cards display side-by-side, both use `.card--highlighted` styling; at 640px: verify cards stack vertically |
| Definition list (dl/dt/dd) semantic structure | CONT-01 to CONT-08 | Semantic HTML correctness is WCAG compliance concern | Inspect HTML: verify `<dl>`, `<dt>` (labels), `<dd>` (values) are properly nested; run through WAVE accessibility audit; verify color contrast for labels and values (WCAG AA minimum) |
| mailto: link functionality | CONT-05 | Email link behavior is functional concern | Test contact.html: click email link, verify it opens compose window with `mailto:ibarron@ur.rochester.edu` |
| External links target="_blank" | CONT-06, CONT-07, CONT-08 | External link behavior (new tab) is user experience concern | Test contact.html: click each of 3 external links (UofR ECE Dept, LinkedIn, GitHub), verify each opens in new tab (`target="_blank"`) |
| First-person voice consistency | RES-02, TEACH-02 to TEACH-04 | Narrative tone is content quality concern, not automatically checkable | Read all biographical, teaching philosophy, and personal narrative content: verify it uses "I/my/me" voice, never third-person |
| Responsive layout at all breakpoints | All pages | Responsive design quality is visual/UX concern | Test all three pages at 320px (mobile), 768px (tablet), 1024px (desktop): verify no horizontal scrolling, readable text, proper spacing, media queries working correctly |
| Color contrast (WCAG AA) | All pages | Accessibility requirement for contrast ratios | Run WAVE accessibility audit on all pages: verify no "Very Low Contrast" or "Missing Alt Text" errors; Lighthouse accessibility score 90+ |

---

## Validation Sign-Off

- [ ] All task verifications have been run (W3C validation per task)
- [ ] Wave 1 green: research.html passes W3C, publication cards visually verified, tags render correctly
- [ ] Wave 2 green: teaching.html and contact.html pass W3C, links working, layout correct at all breakpoints
- [ ] Wave 3 checkpoint: Full W3C validation (all pages zero errors), WAVE audit complete (no accessibility issues), Lighthouse score 90+
- [ ] All responsive breakpoints tested and verified (320px, 768px, 1024px)
- [ ] First-person voice consistent across all content pages
- [ ] `nyquist_compliant: true` set in frontmatter (after all verifications pass)

**Approval:** pending

---

*Phase: 03-content-pages*
*Validation strategy created: 2026-03-26*
*Source: Validation Architecture from 03-RESEARCH.md*
