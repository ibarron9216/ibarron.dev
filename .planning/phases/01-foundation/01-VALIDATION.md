---
phase: 01
slug: foundation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-25
---

# Phase 01 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — plain HTML/CSS/JS; no test framework installed |
| **Config file** | None — no build tooling |
| **Quick run command** | Open `index.html` in browser; DevTools inspect |
| **Full suite command** | Browser + DevTools accessibility audit (Lighthouse or axe DevTools) |
| **Estimated runtime** | ~5 minutes per wave (manual verification) |

---

## Sampling Rate

- **After every task commit:** Open affected pages in browser; visually verify the feature
- **After every plan wave:** Full manual checklist sweep of all requirements in wave
- **Before `/gsd:verify-work`:** All requirements verified green (manual) + accessibility audit passing
- **Max feedback latency:** ~5 minutes per task (manual browser check)

---

## Per-Task Verification Map

| Requirement | Behavior | Test Type | Manual Check | Status |
|-------------|----------|-----------|--------------|--------|
| FOUND-01 | 5 HTML files have semantic structure (`<header>`, `<nav>`, `<main>`, `<footer>`) | manual | Inspect DOM on each page | ⬜ pending |
| FOUND-02 | CSS custom properties defined; brand colors applied | manual | DevTools computed styles | ⬜ pending |
| FOUND-03 | Layout responsive: 320px, 640px, 1024px, 1440px | manual | DevTools responsive mode | ⬜ pending |
| FOUND-04 | Inter Variable loads; correct weight renders | manual | DevTools Network + font inspector | ⬜ pending |
| FOUND-05 | All spacing/size values reference custom properties | manual | DevTools CSS inspector | ⬜ pending |
| FOUND-06 | Color contrast ≥ 4.5:1 for all text | manual | axe DevTools or Lighthouse audit | ⬜ pending |
| NAV-01 | Nav bar visible, sticky, correct layout | manual | Scroll page; check nav stays at top | ⬜ pending |
| NAV-02 | Hamburger button present on mobile (<768px) | manual | DevTools mobile viewport | ⬜ pending |
| NAV-03 | Click hamburger: nav menu toggles show/hide | manual | Click button on mobile viewport | ⬜ pending |
| NAV-04 | Active page link has yellow text + underline | manual | Check `[aria-current="page"]` styling | ⬜ pending |
| NAV-05 | Tab key reaches hamburger; focus ring visible | manual | Keyboard Tab navigation test | ⬜ pending |
| LAYOUT-01 | Footer two-column (desktop), stacked (mobile) | manual | DevTools responsive mode | ⬜ pending |
| LAYOUT-02 | Footer year = current year, updates dynamically | manual | Inspect `.js-year` text content | ⬜ pending |
| TYP-01–08 | Typography renders per spec (weights, sizes, line-height) | manual | Visual inspection; DevTools metrics | ⬜ pending |
| ANIM-01 | Sections fade in + slide up on page load | manual | Reload page; observe animations | ⬜ pending |
| ANIM-02 | Animations absent when prefers-reduced-motion: reduce | manual | DevTools emulate setting; reload | ⬜ pending |
| ANIM-03 | Hover states visible on buttons/cards/links | manual | Hover over interactive elements | ⬜ pending |
| ANIM-04 | Hamburger icon animates to X when open | manual | Click hamburger; observe icon | ⬜ pending |
| ANIM-05 | Tab active state (yellow on navy) | manual | Deferred to Phase 4 scope | ⬜ deferred |
| ASSET-01–04 | Font, images, CSS, JS files exist at correct paths | manual | File system check + link resolution | ⬜ pending |
| PERF-01–03 | No external deps; single CSS file; no npm | manual | DevTools Network tab; verify no CDNs | ⬜ pending |
| PERF-04 | main.js < 200 lines | manual | `wc -l js/main.js` | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ needs adjustment · ⬜ deferred*

---

## Wave 0 Requirements

- [ ] Create directory structure: `css/`, `js/`, `assets/fonts/`, `assets/images/`
- [ ] Download `InterVariable.woff2` from rsms/inter releases → rename to `inter-variable.woff2`
- [ ] Create empty `assets/cv.pdf` placeholder
- [ ] Create `css/style.css` with section comment scaffold
- [ ] Create `js/main.js` with function scaffolding
- [ ] Create stub HTML files for all 5 pages with base structure

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Sections animate on page load with correct timing | ANIM-01, ANIM-02 | No automated animation test framework in plain JS | Reload page in browser; observe fade-in + slide-up over ~0.5s per section. Verify animations absent when DevTools emulates `prefers-reduced-motion: reduce` |
| Hamburger menu opens/closes with hamburger icon animation | NAV-03, ANIM-04 | User interaction event handling; no automation test setup | Click hamburger on mobile viewport; verify menu appears/disappears and hamburger icon rotates to X / back |
| Responsive layout switches between breakpoints | FOUND-03, LAYOUT-01 | Cross-browser layout rendering varies slightly; manual verification ensures pixel accuracy | Resize browser to 320px, 640px, 768px (nav breakpoint), 1024px, 1440px. Verify layout stacks/expands correctly at each breakpoint |
| Color contrast meets WCAG AA | FOUND-06 | Automated tools (axe, Lighthouse) provide most accurate feedback | Run Lighthouse audit (DevTools) or axe Browser Extension. Verify all text has contrast ratio ≥ 4.5:1 (or ≥ 3:1 for large text). Focus on yellow on navy combinations |
| Font loads correctly and renders Inter Variable weights | FOUND-04 | Font rendering varies by OS; requires visual inspection | Open DevTools Network tab. Verify `inter-variable.woff2` loads. Check computed font in DevTools. Visually verify body text renders at 400 weight, headings at 600+ |
| CSS custom properties are applied consistently | FOUND-02, FOUND-05 | Requires visual + DevTools inspection of computed styles | Open DevTools Element Inspector. Select random elements. Verify computed color, spacing, font values reference `--color-*`, `--spacing-*`, `--font-*` custom properties. No hardcoded values except in media query breakpoints |
| All interactive elements have visible focus ring | NAV-05, ANIM-03 | Keyboard interaction testing; no automated framework | Press Tab to reach hamburger, buttons, links. Verify focus ring is visible and meets contrast requirements |

*Note: All phase behaviors require manual verification. This is by design (PERF-01, PERF-02 — no npm, no build tools). Validation is manual browser testing + accessibility tools.*

---

## Validation Sign-Off

- [ ] All 22+ requirements have manual verification instructions above
- [ ] Wave 0 setup covers all missing file structure dependencies
- [ ] Sampling continuity met (manual check after each task)
- [ ] No automated test framework required (plain HTML/CSS/JS by design)
- [ ] Feedback latency achievable (~5 min per wave)
- [ ] All requirements mapped to requirement IDs (FOUND-*, NAV-*, etc.)
- [ ] `nyquist_compliant: true` set in frontmatter once approved

**Approval:** pending — awaiting execution start
