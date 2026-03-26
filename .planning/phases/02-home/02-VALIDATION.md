---
phase: 2
slug: home
status: active
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-25
---

# Phase 2 — Home Page Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — plain HTML/CSS/JS project (no npm) |
| **Config file** | None — project constraint (PERF-01 prohibits npm) |
| **Quick run command** | Open `index.html` in browser; inspect visually |
| **Full suite command** | W3C HTML validator: `curl -X POST https://validator.w3.org/check -F "uploaded_file=@index.html" -F "output=json"` |
| **Estimated runtime** | ~2 seconds (visual) + ~10 seconds (W3C API) |

---

## Sampling Rate

- **After Task 02-01-01 (CSS):** Open `index.html` in browser, verify CSS loads without errors
- **After Task 02-01-02 (HTML):** Visual inspection at 320px, 768px, 1024px viewports — confirm all sections render
- **After Wave 1 (Plan 02-01):** W3C HTML validation passes with no errors
- **Before `/gsd:verify-work`:** All 4 ROADMAP success criteria visually confirmed + HTML valid

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | Status |
|---------|------|------|-------------|-----------|-------------------|--------|
| 02-01-01 | 02-01 | 1 | HOME-01 through HOME-11 (CSS) | grep/code-read | `grep -n "\.btn--primary--inverse" css/style.css` | ⬜ pending |
| 02-01-02 | 02-01 | 1 | HOME-01 through HOME-11 (HTML) | visual/manual | Open `index.html` at 3 viewports | ⬜ pending |
| 02-02-01 | 02-02 | 2 | W3C HTML validation | automated | W3C validator CLI | ⬜ pending |
| 02-02-02 | 02-02 | 2 | Visual checkpoint (all requirements) | manual/human | Resize browser, verify sections | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

**None.** Existing infrastructure covers all phase requirements:
- Phase 1 CSS already in place
- No new test framework needed (HTML validation via W3C is sufficient)
- No test files required for a plain HTML/CSS/JS project

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Hero layout: text-left + photo-right on 1024px+ | HOME-01 | Responsive breakpoint behavior requires browser resize | At 1024px viewport, verify hero has text on left column, photo on right column. Below 1024px, photo stacks below text. |
| Profile photo placeholder scaling | HOME-06 | Fluid `clamp()` sizing across viewports requires visual inspection | At 320px, 768px, 1024px viewports, verify photo placeholder scales proportionally and remains square. |
| Button stacking on mobile | HOME-05 | Responsive flex behavior requires browser inspection | At 320px viewport, verify "View My Research" and "For Students" buttons stack vertically. At 1024px+, verify they appear side-by-side. |
| Color contrast (navy/white/yellow) | HOME-02, HOME-03, HOME-04 | WCAG AA verification (manual checks in Phase 5; Phase 2 visual confirmation) | Verify eyebrow is readable yellow on navy. H1 is readable white on navy. Lead text is readable white on navy. |
| Card borders and layout | HOME-09, HOME-11 | Grid layout and border styling requires visual inspection | At 320px, verify cards stack 1-column. At 1024px, verify 3-column layout. Verify Research/Teaching cards have yellow border-top, Students card has navy border-top. |
| Section padding/spacing | All HOME requirements | Generous vertical padding (100px) requires visual assessment | Verify spacing between hero, about, and cards sections is visually spacious and balanced. |

---

## Automated Verifications (Per Task)

### Task 02-01-01: CSS Classes Added

**Automated checks:**

```bash
# Verify .btn--primary--inverse exists
grep -n "\.btn--primary--inverse" css/style.css

# Verify .card--highlighted--navy exists
grep -n "\.card--highlighted--navy" css/style.css

# Verify .hero__grid exists
grep -n "\.hero__grid" css/style.css

# Verify .section--spacious exists
grep -n "\.section--spacious" css/style.css

# Verify profile-placeholder uses clamp()
grep -n "clamp(" css/style.css | grep "profile-placeholder"
```

**Expected output:** All 5 CSS class definitions present in style.css

### Task 02-01-02: HTML Content Added

**Automated check:**

```bash
# Verify three sections exist in index.html
grep -c "<section" index.html

# Verify hero section exists
grep -n "section.*hero" index.html

# Verify about section exists
grep -n "section.*butter" index.html

# Verify cards section exists
grep -n "\.grid-3" index.html
```

**Expected output:** At least 3 sections present, hero, about, and cards all found

### Task 02-02-01: W3C HTML Validation

**Automated check:**

```bash
# Run local HTML validation (requires validator.w3.org access or local validator)
# Simplified: grep for common validation issues
grep -E "<[a-z]+ [a-z]+=|<script|<style" index.html | head -5
```

**Expected output:** No validation errors (manual W3C check in CI or via web UI)

---

## Validation Sign-Off Checklist

- [ ] Task 02-01-01 CSS verify commands all pass (5 CSS classes found)
- [ ] Task 02-01-02 HTML verify commands all pass (3 sections + content found)
- [ ] Visual inspection at 320px viewport complete (sections render, buttons stack)
- [ ] Visual inspection at 768px viewport complete (hero layout correct, cards layout)
- [ ] Visual inspection at 1024px+ viewport complete (2-column hero, 3-column cards)
- [ ] W3C HTML validation passes (Task 02-02-01)
- [ ] Human visual checkpoint complete (Task 02-02-02) — all 4 ROADMAP success criteria confirmed
- [ ] All 11 HOME requirements (HOME-01 through HOME-11) visually verified
- [ ] `nyquist_compliant: true` set in frontmatter when complete

**Approval:** pending — verify after execution

---

## Nyquist Dimension Coverage

| Dimension | Task | Coverage | Status |
|-----------|------|----------|--------|
| 1 (Requirements) | All | All 11 HOME-XX IDs mapped to tasks | ✅ |
| 2 (Completeness) | Task 02-01-01/02 | CSS + HTML deliverables specified | ✅ |
| 3 (Dependencies) | Wave 1→2 | CSS must complete before validation | ✅ |
| 4 (Scope) | All | Locked CONTEXT.md decisions only; no deferreds | ✅ |
| 5 (Must-Haves) | Task 02-02-02 | Checkpoint validates all 4 ROADMAP success criteria | ✅ |
| 6 (Key Links) | Task 02-01-02 | Links to research.html, teaching.html, students.html, assets/cv.pdf | ✅ |
| 7 (Anti-Patterns) | All | No custom code; uses Phase 1 components only | ✅ |
| 8 (Validation) | This file | Manual + automated verification defined per task | 🟡 |

**Status:** Will be ✅ after task execution and verification.
