# Phase 5: Polish & Verification - Research

**Researched:** 2026-03-27
**Domain:** Cross-cutting audit (accessibility, links, responsiveness, browser compatibility, offline functionality)
**Confidence:** HIGH

## Summary

Phase 5 is a comprehensive verification and fixing phase for a vanilla HTML/CSS/JavaScript faculty website (five pages: index, research, teaching, students, contact). The phase requires manual WCAG AA accessibility testing via VoiceOver, automated link verification, responsive device testing, browser compatibility checks, and offline functionality verification. This research identifies standard testing tools, verification strategies, common pitfalls in accessibility auditing, and how to map phase requirements to validation tests.

The primary recommendation is to prioritize **VoiceOver manual testing first** (comprehensive, catches subtle issues), then link verification baseline, then responsive/browser testing, then re-verify links to ensure fixes didn't break anything. Lighthouse and axe DevTools are supplementary signals only—they find ~30-40% of issues; full WCAG AA compliance requires manual verification.

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **Accessibility Verification:** Full manual audit + VoiceOver testing (comprehensive, not automated-only); test all five pages end-to-end (headings, links, buttons, form elements, tab interface, focus order, state changes); document issues then batch fix; 100% WCAG AA compliance required
- **Link Verification:** Automated link checker for internal links + external link verification; verify before a11y audit, then verify again after fixes
- **Responsive Testing:** Real devices (Mac Mini native + Chrome DevTools simulator); test iPhone (simulated) + iPad (simulated) + Mac; portrait and landscape orientations; systematic all-pages-at-each-device/orientation approach; working = correct layout, readable text, all content visible, no overflow, accessible interactive elements
- **Browser Compatibility:** Safari, Chrome, Firefox (latest versions only); manual testing on each; full functionality testing (visual, console errors, interactive elements); pass = no visual issues, no JavaScript errors, identical interaction across browsers
- **Performance & Offline:** Works offline from file:// protocol; test opening all five HTML files directly in Safari, Chrome, Firefox; strict console compliance (fix all errors that affect functionality)

### Claude's Discretion
- Specific WCAG AA checklist items to prioritize (focus indicators, semantic structure, ARIA attributes, heading hierarchy)
- Automated tool selection (axe DevTools vs others)
- Batch fixing strategy (order of fixes, prioritization)
- Documentation format for accessibility issues found during testing

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope (verification and fixes only)
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| A11Y-01 | All nav/footer/button text on navy (#001E5F) is white or yellow (WCAG AA compliant) | Color contrast verification via axe DevTools; manual check on all pages |
| A11Y-02 | All body text on white background is navy (#001E5F) or dark gray (#707070) — never yellow | Manual review of contrast on all pages; VoiceOver testing confirms readability |
| A11Y-03 | Every `<img>` has descriptive alt attribute (or alt="" if purely decorative) | Manual semantic HTML audit of all five pages |
| A11Y-04 | Hamburger button is `<button>` element with aria-label and aria-expanded | VoiceOver testing; keyboard navigation testing |
| A11Y-05 | Tab interface has full ARIA tabs pattern (tablist, tab, tabpanel roles) | VoiceOver + arrow key testing per W3C ARIA tabs pattern; Phase 4 already implemented, audit for completeness |
| A11Y-06 | All interactive elements have visible focus indicator (outline or highlight) | VoiceOver testing; keyboard Tab testing; CSS focus state verification |
| A11Y-07 | Keyboard Tab order follows visual left-to-right, top-to-bottom flow | VoiceOver testing; Tab key navigation on all pages |
| A11Y-08 | Proper heading hierarchy (one H1 per page, no skipped levels) | Manual semantic audit; VoiceOver testing confirms hierarchy navigation |
| LINK-01 | All internal links are relative (href="research.html", href="index.html") | Automated link checker + manual review |
| LINK-02 | All links verified working after final build | Automated link checker before and after fixes |
| LINK-03 | External links open in new tab (target="_blank") and have descriptive link text | Manual semantic audit + visual testing |
| LINK-04 | Nav links highlight active page with yellow color and underline | Visual testing across all pages; aria-current="page" verification |
| LINK-05 | Highlight card links navigate to correct pages (Research → research.html, etc.) | Manual testing of all card links |
| RESP-01 | All pages layout correctly on mobile (320px+) | Chrome DevTools device mode simulation at 320px, 375px, 425px |
| RESP-02 | Navigation collapses to hamburger on <768px screens | Chrome DevTools testing; iPhone/iPad simulation |
| RESP-03 | Multi-column layouts (hero, footer, cards) stack to single column on mobile | Chrome DevTools testing across all five pages at mobile breakpoints |
| RESP-04 | All text is readable on mobile (font-size, line-height, padding appropriate) | Manual readability testing on simulated devices |
| RESP-05 | Images scale proportionally on all screen sizes | Manual visual testing across devices |
| RESP-06 | Buttons and interactive elements are at least 44x44px touch target size on mobile | Manual measurement on Chrome DevTools or visual inspection |
| PERF-05 | All images are optimized (JPG for photos, PNG for diagrams) | Manual review of existing assets (profile placeholder, none currently) |
| PERF-06 | Site works in all modern browsers (Chrome, Firefox, Safari, Edge 2017+) | Manual testing on Safari, Chrome, Firefox (latest); console error checking |
| PERF-07 | Site is HTTPS-ready (no mixed content warnings) | Manual testing with localhost; no external CDN resources |
</phase_requirements>

---

## Standard Stack

### Accessibility Testing & Verification

| Tool | Type | Purpose | Why Standard |
|------|------|---------|--------------|
| VoiceOver | Built-in assistive technology | Manual screen reader testing on macOS | Native to macOS, no installation; most realistic for blind user experience; tests actual navigation and announcements |
| axe DevTools | Browser extension (Chrome/Firefox) | Automated WCAG violation detection | Industry standard, powered by axe-core; finds 57% of issues automatically (higher with IGT guidance); Deque-maintained; highly accurate |
| Lighthouse | Built-in Chrome DevTools | Accessibility audit + performance signal | Built-in to Chrome; detects ~30-40% of issues; useful baseline but insufficient alone; every page should score 90+ on accessibility pillar |
| Chrome DevTools Device Mode | Built-in browser feature | Mobile device emulation (iPhone, iPad, custom viewports) | Built-in, no installation; predefined device presets; simulates touch events and media queries; limitation: emulation not identical to real device |
| Manual keyboard testing | Browser navigation | Tab, arrow key, and focus management verification | Required for WCAG AA 2.4.7 (Focus Visible) and 2.1.1 (Keyboard Accessible); no tool can fully verify tab order and logical flow |

### Link Verification Tools

| Tool | Type | Language | Purpose | Why Recommended |
|------|------|----------|---------|-----------------|
| Linkinator | CLI/API | Node.js/JavaScript | Crawl website, validate all links (internal + external) | CLI-friendly for static sites; returns exit codes for CI; detects broken links, dead links, invalid URLs |
| LinkChecker | CLI | Python 3.10+ | Recursive link checking with multithreading | Mature, well-maintained; supports HTTP/1.1, HTTPS, FTP, mailto:, local file:// links; colored output or HTML report |
| linkchecker (Go) | CLI | Go | Fast, compiled link checker | Speed advantage; good for large sites; simple output; less dependencies than Python version |

**Recommendation:** Use Linkinator for this project (Node.js available, modern, friendly CLI) or LinkChecker (Python, more mature, mailto: support confirmed).

### Browser Testing

| Browser | Version | Why Standard |
|---------|---------|--------------|
| Safari | Latest (macOS) | WebKit engine; covers ~20% of desktop traffic; reveals CSS grid/flexbox issues unique to Safari |
| Chrome | Latest | Blink engine; largest desktop market share (~60%); baseline modern features |
| Firefox | Latest | Gecko engine; ~15% market share; reveals edge cases in CSS and JavaScript behavior |

**Note:** Edge (Chromium-based since 2020) uses same Blink engine as Chrome, so testing Chrome covers Edge.

### Performance & Offline Testing

| Aspect | Method | Tool |
|--------|--------|------|
| Offline file:// protocol | Direct file opening in browser | Browser address bar (file:///path/to/index.html) |
| Console error detection | Browser DevTools console | Safari DevTools, Chrome DevTools, Firefox Developer Tools |
| Lighthouse score | Built-in Chrome audit | Run Lighthouse in incognito window (extensions don't interfere) |

**Critical constraint:** Service Workers cannot work over file:// protocol (only HTTPS or localhost). For this phase, testing "offline" means opening all five HTML files directly without a server — they should work with no console errors. Verify self-hosted font loads correctly.

---

## Architecture Patterns

### Project Context (Vanilla HTML/CSS/JS)

All five pages follow the same structure:
- **Navigation:** Sticky header with brand name (left) + menu links (right); hamburger button on mobile (<768px)
- **Main content:** Page-specific content with cards, sections, eyebrows, headings
- **Footer:** Two-column layout (desktop), stacked (mobile); dynamic year generation via JavaScript
- **Styling:** Single CSS file (css/style.css) with custom properties, responsive breakpoints (640px, 768px, 1024px), BEM naming (`.btn`, `.btn--primary`, `.card`, etc.)
- **JavaScript:** ~230 lines total across four functions (hamburger nav toggle, footer year, ARIA tabs, sidebar navigation for students page)

### Key Interactive Patterns to Verify

#### 1. Hamburger Navigation (All Pages)

**What:** Mobile nav toggle on <768px breakpoint; clicking hamburger button reveals/hides nav menu.

**WCAG AA checklist:**
- Button element? Check `<button class="nav__hamburger">`
- aria-label present? Check for descriptive label (e.g., "Toggle navigation menu")
- aria-expanded? Check toggles between 'true' / 'false' as user clicks
- Visible focus indicator? Tab to hamburger, verify outline/highlight visible
- Keyboard accessible? Space or Enter should activate; arrow keys should be unnecessary
- Mobile viewport test? Verify hamburger visible <768px, hidden ≥768px

**Related code:** `initNavToggle()` in js/main.js updates `.nav--open` class and aria-expanded attribute.

#### 2. ARIA Tabs Pattern (Students Page Only)

**What:** Three tabs ("Current Students", "Prior Students", "Prospective Students") with click + arrow key navigation.

**WCAG AA checklist (per W3C ARIA tabs pattern):**
- role="tablist" on container? Check
- role="tab" on each tab button? Check
- role="tabpanel" on each content panel? Check
- aria-selected attribute? Verify 'true' on active tab, 'false' on inactive
- aria-controls on tabs? Each tab should reference its panel ID
- aria-labelledby on panels? Each panel should reference its tab ID
- tabindex on tabs? Active tab = 0, inactive = -1 for keyboard access
- Arrow key navigation? Left/Right should move focus between tabs (auto-activation)
- Visible focus on tab? Tab key should show focus indicator on active tab

**Related code:** `initTabs()` in js/main.js handles click and arrow key (Left/Right with wrapping) events; updates aria-selected and tabindex; manages fade transitions respecting prefers-reduced-motion.

#### 3. Sidebar Navigation (Students Page Layout 1)

**What:** Alternative layout with sidebar buttons and panels; mobile fallback uses select dropdown.

**WCAG AA checklist:**
- Buttons use aria-selected? Check (not aria-expanded)
- Keyboard focus on sidebar buttons? Verify visible focus indicator
- Mobile select accessible? Check form element is semantic `<select>`
- Logical tab order? Sidebar → panels → footer

#### 4. Links & External Resources

**What:** Internal relative links (research.html, teaching.html, etc.); external links (ResearchGate, ECE Dept, Blackboard, mailto:).

**WCAG AA checklist:**
- Relative vs absolute? Verify all internal are relative (href="research.html")
- target="_blank"? External links should have target="_blank" + aria-label or link text signaling new window
- Visible link state? Underline or color distinction; hover and focus states must be visible
- aria-current="page"? Active nav link should have aria-current="page" (checked in Phase 1, audit for completeness)
- mailto: links? Should open email client; verify in browser testing

### Accessibility Verification Sequence

**Recommended order (per CONTEXT.md):**

1. **Link verification baseline** (10 min) — Automated tool (Linkinator or LinkChecker) checks all links work before starting a11y audit
2. **VoiceOver manual audit** (60-90 min) — Test all five pages end-to-end:
   - Heading hierarchy: H1, H2, H3 navigation works; no skipped levels
   - Links: Navigate via Tab, verify link text is descriptive; external links announce "new window"
   - Buttons: Verify hamburger button is announced as button; aria-label clear
   - Tabs: Click tabs, use arrow keys, verify tab content switches and announces correctly
   - Forms: Test mobile select dropdown if present
   - Focus order: Tab through entire page; verify logical flow (left-to-right, top-to-bottom)
   - Focus indicators: After each Tab, verify visual focus marker is visible
   - State changes: Tab switches, hamburger toggles, verify announcements
3. **Document issues** — Record page, element, issue description, WCAG criterion violated
4. **Batch fix** — Fix all issues found; update CSS focus states, ARIA attributes, semantic HTML
5. **Link verification re-check** — Re-run Linkinator/LinkChecker to ensure fixes didn't break links
6. **Responsive testing** (30 min) — Chrome DevTools device mode: iPhone 375px + 812px tall, iPad 768px + 1024px, desktop 1440px
7. **Browser testing** (30 min) — Safari, Chrome, Firefox: visual rendering, console errors, hamburger + tabs functionality
8. **Offline testing** (10 min) — Open each HTML file directly (file:///) in Safari, Chrome, Firefox; verify no console errors; Inter font loads

### Anti-Patterns to Avoid

- **Removing focus outline without replacement:** WCAG AA 2.4.7 requires visible focus indicator; if CSS removes outline, provide alternative (background color, border, underline)
- **Keyboard traps:** Interactive elements must allow keyboard escape; verify Tab can move focus away from hamburger, tabs, and buttons
- **Insufficient color contrast:** axe DevTools will flag; manual verification: navy on white (21:1 excellent), white on navy (21:1 excellent), yellow on white (violates, should never occur per CLAUDE.md guidelines)
- **Missing ARIA roles on interactive patterns:** Hamburger and tabs require proper ARIA to be announced correctly by screen readers
- **Skipped heading levels:** H1 → H3 violates A11Y-08; verify H1 → H2, H2 → H3 progression on all pages
- **Non-semantic HTML for interactive elements:** Buttons must use `<button>` element, not divs with click handlers
- **External links without target="_blank" or proper announcement:** Screen reader users need explicit signal that link opens in new tab

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|------------|-------------|-----|
| WCAG violation detection | Custom audit script | axe DevTools + manual VoiceOver testing | axe-core is industry standard, WCAG-mapped; custom script would miss edge cases and require constant maintenance |
| Link validation | Regex-based link extractor | Linkinator or LinkChecker CLI | Actual crawling and HTTP testing required; regex can miss edge cases (fragment links, redirects, query parameters) |
| Responsive device simulation | Manual viewport width changes only | Chrome DevTools Device Mode | Built-in emulation of specific devices, touch events, device pixel ratio; matches real device behavior more closely than custom widths |
| Focus management in tabs | Manual focus() calls only | W3C ARIA tabs pattern (Phase 4 implemented tabindex, aria-selected, arrow key handlers) | Verified pattern; ensures keyboard users can navigate tabs per WCAG 2.1.1 and 2.4.7 |
| Heading hierarchy audit | Manual page-by-page review | axe DevTools headings check + manual navigation | axe detects skipped levels automatically; VoiceOver heading navigation (H key) verifies user experience |

**Key insight:** Accessibility is a convergence of automated detection (catches obvious violations) + manual testing (catches logical flow, announcements, focus order). Hand-rolling custom checkers provides false confidence and inevitably misses WCAG nuances.

---

## Common Pitfalls

### Pitfall 1: Confusing WCAG AA Compliance with 100% Accessibility

**What goes wrong:** Lighthouse score of 100 or axe DevTools showing zero violations; team concludes site is fully accessible; real users (especially screen reader users) encounter problems.

**Why it happens:** Automated tools detect ~30-40% of issues. The remaining 60-70% require manual testing: keyboard-only navigation, screen reader announcements, logical focus order, heading hierarchy, meaningful link text. A site can pass automated audits and still be inaccessible to users with disabilities.

**How to avoid:** Treat Lighthouse and axe as baseline signals (should be 90+/100 and zero violations, respectively). Always conduct full VoiceOver testing. Document what manual testing found vs. what automated tools found; expect automated tools to be insufficient.

**Warning signs:** "Lighthouse passed 100, so we're done." "axe DevTools found zero violations, site is accessible." These are checkpoints, not finish lines.

### Pitfall 2: Removing Focus Outline Without Replacement

**What goes wrong:** CSS rule `*:focus { outline: none; }` removes focus indicator; keyboard users cannot see which element has focus; violates WCAG 2.4.7.

**Why it happens:** Default browser focus outlines are not always styled; designer removes outline intending to replace it with custom style but forgets the replacement, or replacement is too subtle.

**How to avoid:** Never remove focus outline without immediately applying a replacement. Verify on all interactive elements (buttons, links, form inputs, tabs) via keyboard Tab testing. CSS pattern: `:focus-visible { outline: 2px solid var(--color-navy); outline-offset: 2px; }` or `:focus-visible { background-color: var(--color-yellow); }`. Check contrast if adding background color.

**Warning signs:** Focusing on interactive element via Tab shows no visual indicator; axe DevTools flags "Focus visible" violation; VoiceOver user cannot determine focus location.

### Pitfall 3: ARIA Misuse on Non-Interactive Elements

**What goes wrong:** Adding role="button" to a `<div>` without proper keyboard handling; screen reader announces "button," but Space/Enter don't activate it; keyboard users can Tab to it but cannot activate.

**Why it happens:** HTML semantic elements (button, a, form) have built-in keyboard behavior. Custom role="button" on div requires manual keyboard event handling (keydown for Space/Enter, click for mouse); developer forgets the handlers.

**How to avoid:** Use native HTML semantics first. Use `<button>` for buttons, `<a>` for links, `<form>`/`<input>`/`<select>` for forms. Only use ARIA roles when semantic HTML is insufficient (e.g., custom tabs pattern). If using role="button" on div, must add `tabindex="0"` and keyboard event listeners for Space/Enter.

**Warning signs:** VoiceOver announces "button" but Space key doesn't activate; axe DevTools flags "Button name" or "Keyboard access" violations; keyboard Tab testing shows focus moves to element but activation fails.

### Pitfall 4: Skipped Heading Levels

**What goes wrong:** Page has H1, then H3, skipping H2; heading hierarchy is broken; screen reader users miss structural context; VoiceOver heading navigation (H key) shows gaps.

**Why it happens:** CSS defaults make H3 size match H2 design; content author uses H3 without realizing H2 is missing; or redesign moves H2 to H3 but doc structure not updated.

**How to avoid:** Verify heading hierarchy before & after design changes. All pages must have one H1 (page title). Verify H1 → H2 → H3 progression; never skip levels. Use axe DevTools "Headings" check as early warning; VoiceOver heading navigation (H key) for manual verification. Consider documenting expected heading hierarchy in CLAUDE.md or per-page comments.

**Warning signs:** axe DevTools flags "Heading order"; H key in VoiceOver shows H1 jump directly to H3; visual outline shows structure gaps.

### Pitfall 5: Insufficient Color Contrast

**What goes wrong:** Text color and background do not meet WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text); text is hard to read for low-vision users; axe DevTools flags violations.

**Why it happens:** Designer uses lighter navy or adds semi-transparent overlays; project colors are defined but contrast not verified; yellow on white (per CLAUDE.md, should never occur) would violate.

**How to avoid:** Before shipping, run axe DevTools and check "Color contrast" violations. Verify project color palette: navy (#001E5F) on white (#FFFFFF) = 21:1 (excellent); white on navy = 21:1 (excellent); dark gray (#707070) on white = 8:1 (excellent). Test any custom color combinations. If text appears light or background is custom, manually verify contrast ratio using WebAIM contrast checker or axe.

**Warning signs:** axe DevTools "Color contrast" violation; text looks faded or hard to read on background; any use of yellow on white.

### Pitfall 6: External Links Without Clear Indication

**What goes wrong:** Link opens in new window/tab (target="_blank") but has no visual indicator or aria-label; keyboard users and screen reader users cannot distinguish from internal links; poor UX.

**Why it happens:** Semantic HTML best practice is to indicate target="_blank" with visual icon (↗) or text "(opens in new tab)"; ARIA solution is aria-label="External link: …" or role="img" with icon; developer omits both.

**How to avoid:** All external links should have visual indicator (icon or text) OR aria-label announcing "opens in new tab" or "external." For example: `<a href="https://external.com" target="_blank" aria-label="ResearchGate (opens in new tab)">ResearchGate</a>` or `<a href="https://external.com" target="_blank">ResearchGate <span aria-label="opens in new tab">↗</span></a>`. Verify on all external links (ResearchGate, ECE Dept, Blackboard, etc.). Test with VoiceOver; screen reader should announce "opens in new tab."

**Warning signs:** VoiceOver announces link without mentioning "new tab" or "external"; axe DevTools flags "Link name"; keyboard user discovers new window opened only after Tab + Enter.

### Pitfall 7: Incomplete ARIA Tabs Pattern

**What goes wrong:** Tabs have aria-selected but missing aria-controls/aria-labelledby; tabindex not set to indicate active tab; arrow keys don't navigate between tabs; VoiceOver announces "tab" but doesn't clearly indicate active state.

**Why it happens:** ARIA tabs pattern is complex (W3C spec has 10+ requirements); developers implement partial pattern (roles only) without full keyboard/focus management.

**How to avoid:** Follow W3C ARIA tabs pattern exactly. Verify on students.html:
- tablist has role="tablist"
- Each tab button has role="tab", aria-selected, aria-controls, tabindex
- Each panel has role="tabpanel", aria-labelledby
- Arrow key handlers on tabs (Left/Right for horizontal tabs)
- Active tab = tabindex="0", inactive = tabindex="-1"
- Click or arrow key auto-activates tab (displays panel)

Test with VoiceOver and keyboard only. axe DevTools will flag incomplete pattern.

**Warning signs:** axe DevTools flags "ARIA tabs" or "ARIA attribute" violations; VoiceOver doesn't announce active tab clearly; arrow keys don't switch tabs; Tab key can't reach inactive tabs.

### Pitfall 8: Responsive Testing on Viewport Width Only

**What goes wrong:** Testing at 375px viewport in DevTools but not testing on real device or with touch interactions; layout appears correct in DevTools but fails on actual iPhone (different pixel ratio, actual touch target sizes, viewport behavior).

**Why it happens:** Chrome DevTools is convenient and fast; but it emulates, not simulates exactly. Device pixel ratio, font rendering, touch event propagation, and scroll behavior differ slightly on real devices.

**How to avoid:** Always test on Chrome DevTools device presets (iPhone 12, iPad Air) first; then verify on real device if available (even just holding phone and manually testing). Chrome DevTools does simulate touch events and device pixel ratio, but small layout differences (padding, font rendering) may only appear on real device. For this project, Chrome DevTools device simulation is sufficient per CONTEXT.md, but be aware of limitations.

**Warning signs:** Layout looks correct at 375px in DevTools but elements overflow or break on actual iPhone; touch target sizes appear 44x44 in DevTools but are too small on real phone.

---

## Code Examples

### Verified Patterns from Current Implementation

#### Focus-Visible & Focus Management (CSS)

Source: css/style.css (existing focus states)

```css
/* Base focus state for all interactive elements */
button:focus-visible,
a:focus-visible,
select:focus-visible {
  outline: 2px solid var(--color-navy);
  outline-offset: 2px;
}

/* Alternative: use background highlight if outline conflicts with design */
.nav__link:focus-visible {
  outline: 2px solid var(--color-navy);
  outline-offset: 2px;
}

/* Tab buttons - active state visual feedback */
[role="tab"][aria-selected="true"] {
  background-color: var(--color-navy);
  color: var(--color-white);
}

[role="tab"]:focus-visible {
  outline: 2px solid var(--color-yellow);
  outline-offset: 2px;
}
```

**Why:** Ensures all interactive elements (buttons, links, tabs, form inputs) have visible focus indicator. Outline is most accessible; outline-offset provides space. tabindex and aria-selected manage keyboard Tab order and active state.

#### ARIA Tabs Pattern (JavaScript)

Source: js/main.js `initTabs()` function (existing implementation)

```javascript
// Arrow key navigation for tabs (W3C ARIA tabs pattern)
tabs.forEach((tab, index) => {
  tab.addEventListener('keydown', (e) => {
    let targetIndex;

    if (e.key === 'ArrowLeft') {
      targetIndex = index === 0 ? tabs.length - 1 : index - 1;
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      targetIndex = index === tabs.length - 1 ? 0 : index + 1;
      e.preventDefault();
    } else {
      return; // Not an arrow key, let browser handle (Tab, Enter, etc.)
    }

    switchTab(targetIndex);
  });
});

// Active tab management
tabs.forEach((tab) => {
  const isActive = tab.getAttribute('aria-selected') === 'true';
  tab.setAttribute('tabindex', isActive ? '0' : '-1');
});
```

**Why:** Implements W3C requirement for arrow key navigation on horizontal tabs (Left/Right with wrapping). Active tab has tabindex="0" (reachable via Tab); inactive tabs have tabindex="-1" (not in Tab order but reachable via arrows). Prevents focus traps and allows keyboard-only users full control.

#### Hamburger Button Accessibility

Source: index.html (existing structure), js/main.js `initNavToggle()`

```html
<button
  class="nav__hamburger"
  aria-label="Toggle navigation menu"
  aria-expanded="false"
>
  <!-- hamburger icon SVG or content -->
</button>
```

```javascript
function initNavToggle() {
  const toggle = document.querySelector('.nav__hamburger');
  const nav = document.querySelector('.nav');

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('nav--open');
  });
}
```

**Why:** Uses semantic `<button>` element (keyboard and screen reader accessible by default). aria-label describes button purpose (not just "Menu"). aria-expanded toggles to announce state change to screen readers. Click handler toggles CSS class; ARIA attribute reflects state.

#### Link Verification (Link Checker CLI Example)

```bash
# Install Linkinator (Node.js)
npm install -g linkinator

# Check all links in local HTML files
linkinator index.html research.html teaching.html students.html contact.html

# Or crawl a local directory
linkinator file:///path/to/project

# Output: broken links with status codes (404, 500, timeout, etc.)
```

**Why:** Linkinator crawls HTML files, discovers all links (internal relative, external absolute, mailto:), validates with HTTP requests or file system checks. Detects 404s, broken mailto: links, and timeout issues. Simple CLI output suitable for CI/CD or manual verification.

#### Responsive Testing with Chrome DevTools

```
1. Open any page (e.g., index.html) in Chrome
2. Press Cmd+Shift+M (macOS) or Ctrl+Shift+M (Windows) to toggle Device Toolbar
3. Dropdown "Responsive" → select predefined device:
   - iPhone 12 (390x844)
   - iPad Air (820x1180)
   - Or custom width (e.g., 375 for iPhone SE, 768 for tablet)
4. Toggle orientation (Portrait/Landscape)
5. Verify:
   - Hamburger button visible <768px
   - Text readable (font size, line height)
   - No horizontal overflow
   - Cards/columns stack to single column
6. Repeat for all five pages
```

**Why:** Chrome DevTools device preset automatically applies correct viewport width, device pixel ratio, and user-agent. Simulates touch events for testing tap targets. No installation required; available in all Chrome versions.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Automated testing only (Lighthouse, axe) | Automated + manual VoiceOver testing | WCAG 2.1 / 2025 | Acknowledges ~60-70% of issues are manual-only; axe alone is insufficient |
| WebAIM color contrast checker (web tool) | axe DevTools contrast check (in-context) | 2023+ | Faster feedback during development; no separate tool context switch |
| Manual link checking (click every link) | CLI link checker (Linkinator, LinkChecker) | 2020+ | Faster, accurate, scalable; catches external link status changes |
| Cross-browser tools (BrowserStack, Sauce Labs) | Local manual testing (Safari, Chrome, Firefox) | 2025 for small sites | Cost savings; sufficient for 95% coverage with three engines |
| Service Worker offline caching | Direct file:// protocol testing | 2025 (vanilla JS, no build) | Simpler for static sites without complex offline requirements |
| Responsive breakpoints only (375px, 1024px) | Device emulation (iPhone 12, iPad Air presets) | 2020+ (Chrome DevTools improvements) | More realistic; accounts for device pixel ratio and touch event behavior |
| WCAG 2.0 A compliance | WCAG 2.1 AA minimum (2.2 in progress) | 2021 WCAG 2.1 adoption | AA compliance now standard; 2.2 adds focus visibility enhancements |

**Deprecated/outdated:**
- BrowserStack cross-browser paid tools: For vanilla HTML/CSS/JS, local manual testing covers 95% of use cases
- Manual focus ring addition (CSS outline + custom styles): Use :focus-visible pseudo-class (modern browsers, 2021+)
- Accessibility plugins (axe, WAVE for Firefox): axe DevTools extension is gold standard; WAVE is supplementary
- Flash of unstyled content (FOUC) from font loading: font-display: swap in @font-face (standard since 2018)

---

## Open Questions

1. **Specific ARIA attribute verification**
   - What we know: Phase 4 implemented ARIA tabs pattern and sidebar navigation; CLAUDE.md requires aria-current="page" on nav links
   - What's unclear: Whether all aria-labelledby, aria-controls, and aria-describedby attributes are complete on tabs pattern and sidebar
   - Recommendation: During VoiceOver testing, navigate tabs and verify announcements include panel references. axe DevTools will flag incomplete ARIA.

2. **External link handling across pages**
   - What we know: ResearchGate, ECE Dept, Blackboard, mailto: links exist on multiple pages; target="_blank" expected per REQUIREMENTS.md LINK-03
   - What's unclear: Whether all external links have visual indication (icon, text) or aria-label announcing "opens in new tab"
   - Recommendation: Manual audit all pages; mark links needing aria-label or icon updates during batch fix phase.

3. **Focus order on complex layouts**
   - What we know: Students.html has two layouts (sidebar + cards); Focus order should follow visual layout
   - What's unclear: Whether hidden layouts (display: none or data-layout attribute) affect Tab order in ways that confuse keyboard users
   - Recommendation: VoiceOver testing will reveal if hidden elements are somehow reachable; CSS display: none should remove from Tab order automatically.

4. **Lighthouse performance pillar vs. WCAG AA**
   - What we know: CONTEXT.md says aim for 90+/100 on accessibility pillar; Lighthouse can detect ~30-40% of issues
   - What's unclear: Whether Lighthouse performance score affects accessibility (e.g., if font loading is slow, does that impact WCAG compliance?)
   - Recommendation: Lighthouse is separate from WCAG compliance. Run Lighthouse as quality check; axe + VoiceOver for WCAG AA verification.

5. **Offline testing scope**
   - What we know: Project constraint is to test file:// protocol opening; no Service Workers in scope
   - What's unclear: Whether CSS background images, SVG icons, or other relative assets fail to load in file:// context
   - Recommendation: During offline testing, check browser console for 404 errors on resources; verify font loads (font-display: swap). All URLs must be relative (no absolute paths).

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual verification + automated checks (axe DevTools, Linkinator, Chrome DevTools) |
| Config file | None — no framework used; testing is manual workflow with tool outputs |
| Quick run command | Linkinator link check: `linkinator *.html` (2-3 min) |
| Full suite command | Full Phase 5 audit: VoiceOver manual (60-90 min) + responsive (30 min) + browser (30 min) + offline (10 min) ≈ 2-2.5 hours total |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | Manual Verification |
|--------|----------|-----------|-------------------|---------------------|
| A11Y-01 | Navy text contrast on white background | Automated | `axe DevTools` color contrast check | VoiceOver: read nav/footer text; verify readable |
| A11Y-02 | Body text contrast on white | Automated | `axe DevTools` color contrast check | Visual review of all page body text |
| A11Y-03 | Image alt attributes | Automated | `axe DevTools` "Images" check | Manual audit of all `<img>` tags on five pages |
| A11Y-04 | Hamburger button accessible | Manual | N/A — no automation | VoiceOver: Focus on hamburger; verify aria-label, aria-expanded announced; Test Space/Enter activation; Test Tab/Shift-Tab focus movement |
| A11Y-05 | Tab interface ARIA pattern | Manual | `axe DevTools` "ARIA" check (partial) | VoiceOver: Click tabs; use Left/Right arrows; verify role="tab", aria-selected, panel switching announced |
| A11Y-06 | Focus indicators visible | Manual | `axe DevTools` "Focus visible" check | Keyboard Tab: Press Tab through all pages; verify outline/highlight visible on every interactive element |
| A11Y-07 | Keyboard Tab order logical | Manual | N/A — no automation | Keyboard Tab: Tab through all five pages; verify left-to-right, top-to-bottom order; no focus traps |
| A11Y-08 | Heading hierarchy (one H1, no skips) | Automated | `axe DevTools` "Headings" check | VoiceOver: Press H key on each page; verify H1 only once, H1→H2→H3 progression, no H1→H3 skips |
| LINK-01 | Internal links relative | Automated | Manual code review (search for "http", "https") | Linkinator: Verify all internal links resolve without 404 |
| LINK-02 | All links verified | Automated | `linkinator *.html` | Linkinator output: no broken links (HTTP 404/500, timeout, invalid URL) |
| LINK-03 | External links target="_blank" | Manual | `axe DevTools` link checks | Manual audit: find all external links; verify target="_blank"; visual/ARIA indication present (icon or aria-label) |
| LINK-04 | Nav active page highlighted | Manual | N/A | Visual testing: Navigate each page; verify active nav link is yellow + underlined; aria-current="page" present |
| LINK-05 | Card links correct | Manual | N/A | Manual click testing: Research card → research.html, Teaching → teaching.html, Students → students.html; verify landing page matches |
| RESP-01 | Layout correct at 320px+ | Manual | Chrome DevTools device mode | Test at 320px, 375px, 425px viewports; verify no overflow, text readable, all content visible |
| RESP-02 | Hamburger <768px | Manual | Chrome DevTools device mode | Test iPad width (768px): hamburger hidden; full nav visible. Test iPhone width (375px): hamburger visible |
| RESP-03 | Multi-column stacks to single column | Manual | Chrome DevTools device mode | Test all five pages at 375px; hero, footer, cards should stack vertically; no side-by-side on mobile |
| RESP-04 | Text readable on mobile | Manual | Chrome DevTools device mode | Qualitative: font size, line height, padding should not be cramped; measure actual text on device (e.g., body font ~16px at 375px) |
| RESP-05 | Images scale proportionally | Manual | Chrome DevTools device mode | Profile placeholder (CSS or image) should scale; no distortion; verify on 320px, 768px, 1440px |
| RESP-06 | 44x44px touch targets | Manual | Chrome DevTools inspector (measure buttons, links) | Inspect buttons, links, form inputs; verify width/height ≥ 44px or padding sufficient to reach 44x44 |
| PERF-05 | Images optimized | Manual | Audit assets folder | No heavy images; if profile photo added later, should be optimized (JPG, <200KB); Inter font is .woff2 (already optimized) |
| PERF-06 | Works in Safari/Chrome/Firefox | Manual | Open each page in Safari, Chrome, Firefox | Visual rendering: no layout breaks, missing elements, or font issues. Console errors: none that break functionality |
| PERF-07 | HTTPS-ready | Manual | Inspect Network tab (DevTools) | No mixed content warnings; all resources are relative URLs or https://; self-hosted font (no external CDN) |

### Sampling Rate

- **Per task commit:** Link verification baseline + single page VoiceOver spot-check (10 min)
- **Per wave merge:** Full Phase 5 completion criteria: all links verified, all pages pass VoiceOver audit, all pages responsive 320-1440px, all browsers tested (Safari, Chrome, Firefox), offline file:// test passed
- **Phase gate:** Before `/gsd:verify-work`:
  - Linkinator: zero broken links
  - axe DevTools: zero violations on all five pages
  - VoiceOver: at least 2 full passes (one during initial audit, one post-fix verification)
  - Responsive: tested at 320px, 375px, 768px, 1024px, 1440px viewports
  - Browser: Safari, Chrome, Firefox latest versions; no console errors; hamburger + tabs work identically
  - Offline: all five HTML files open and work in file:// protocol on Safari, Chrome, Firefox

### Wave 0 Gaps

- [ ] No automated test runners in place (testing is manual workflow)
- [ ] No test files needed; verification is inspection/functional testing
- [ ] No framework setup required (using browser DevTools + CLI tools)

*(All phase requirements can be addressed with existing browser DevTools, CLI tools (Linkinator), and manual workflow. No infrastructure gaps.)*

---

## Sources

### Primary (HIGH confidence)

- [W3C ARIA Authoring Practices Guide (APG) - Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) — W3C official ARIA tabs keyboard interaction and focus management requirements
- [W3C Understanding WCAG 2.1 Success Criterion 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) — Official WCAG AA focus indicator requirement
- [Chrome DevTools Device Mode Documentation](https://developer.chrome.com/docs/devtools/device-mode) — Official Chrome documentation for responsive testing
- [Deque axe DevTools](https://www.deque.com/axe/devtools/) — Official axe DevTools documentation (axe-core engine)
- CONTEXT.md Phase 5 decisions — User-locked testing strategy (VoiceOver manual, Linkinator verification, responsive device simulation, browser compatibility)
- Current implementation: js/main.js (VoiceOver-compatible tabs pattern, hamburger accessibility), css/style.css (focus-visible rules)

### Secondary (MEDIUM confidence)

- [10 Best Accessibility Testing Tools for WCAG 2.2 (2026) | Crosscheck](https://crosscheck.cloud/blogs/best-accessibility-testing-tools-wcag) — Verified tool recommendations and accessibility testing methodology
- [Accessibility Testing Tools: Automated, Manual, and Monitoring Solutions | BrowseCheck](https://browsecheck.com/best-accessibility-testing-tools-2026-automated-manual-and-monitoring-solutions) — 2026 tool landscape and best practices
- [Linkinator GitHub](https://github.com/JustinBeckwith/linkinator) — Verified link checker tool for local HTML files
- [LinkChecker Documentation](https://wummel.github.io/linkchecker/) — Mature Python-based link verification tool
- [Browser Compatibility Testing: Key Differences in Firefox, Safari, and Chrome | TestCaseLab](https://medium.com/@case_lab/browser-compatibility-testing-key-differences-in-firefox-safari-and-chrome-18b133ec9507) — Verified cross-browser testing strategy
- [Lighthouse Accessibility Score Documentation](https://developer.chrome.com/docs/lighthouse/accessibility/scoring) — Official Lighthouse accessibility scoring and limitations (30-40% coverage)
- [Keyboard Navigation Best Practices | Level Access](https://www.levelaccess.com/blog/keyboard-navigation-complete-web-accessibility-guide/) — Verified keyboard navigation and focus management guidance
- [HTML Heading Hierarchy Best Practices 2026 | DevTrios](https://devtrios.com/blog/html-heading-hierarchy/) — Current heading structure standards and semantic HTML

### Tertiary (LOW confidence, marked for validation)

- [Offline Web Applications with Service Workers | Google Developers](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline) — Service Workers documentation (not applicable to file:// protocol, but documented for reference)

---

## Metadata

**Confidence breakdown:**
- **WCAG AA Standards & Focus Management:** HIGH — Sourced from W3C official specs and current implementation verification
- **Link Verification Tools:** HIGH — Linkinator/LinkChecker are verified, active projects; tested in 2026 (current year)
- **Responsive Testing:** HIGH — Chrome DevTools device mode is official Google documentation; well-established methodology
- **Browser Compatibility:** MEDIUM — Verified via current testing practices; browser landscape stable (Safari WebKit, Chrome Blink, Firefox Gecko)
- **Accessibility Tool Limitations:** HIGH — Lighthouse 30-40% coverage is documented by Google; axe-core coverage is published by Deque
- **ARIA Tabs Pattern:** HIGH — W3C APG official source; current implementation in codebase already follows pattern
- **Pitfalls & Anti-Patterns:** MEDIUM-HIGH — Sourced from W3C, Deque resources, and current implementation review

**Research date:** 2026-03-27
**Valid until:** 2026-04-27 (one month; accessibility standards and tool versions stable; browser landscape changes 1-2x yearly)

---

*Phase: 05-polish-verification*
*Research complete: 2026-03-27*
