# Pitfalls: ibarron.dev Faculty Website

**Defined:** 2026-03-25
**Confidence:** HIGH

## Critical Pitfalls

### 1. Dandelion Yellow (#FFD82B) as Body Text Fails WCAG AA

**Problem:** The University of Rochester brand palette includes Dandelion Yellow (#FFD82B) for accents. Many faculty sites naively use yellow for text on white background. This fails WCAG color contrast requirement (ratio ~1.9:1, needs 4.5:1).

**Warning Signs:**
- Yellow text on white looks "correct" to the designer's eye
- Passes informal contrast check but fails automated WCAG validator
- Becomes unreadable for low-vision users, fails on printed pages

**Prevention Strategy:**
- Yellow is for accents and decorations ONLY: card borders, hover states, background highlights
- Yellow text is only acceptable on navy backgrounds (#001E5F) — ratio is 14:1 ✓
- Use navy (#001E5F) or dark gray (#707070) for all body text
- White (#FFFFFF) on navy backgrounds — always approved
- Test contrast early: use WebAIM Contrast Checker (webaim.org) for every color pair

**Which Phase:** Foundation phase (CSS setup) — establish this rule in the token system, enforce it in all component styles.

---

### 2. Hamburger Menu Button Missing ARIA Makes It Invisible to Assistive Tech

**Problem:** Hamburger menu icon is just a visual `<div>` or `<i>` tag with click handler. Screen readers ignore it. Keyboard users can't open the menu. Site is inaccessible to deaf-blind users.

**Warning Signs:**
- Menu icon is `<div class="hamburger">` instead of `<button>`
- No `aria-label` or `aria-expanded` attribute
- Visual focus indicator missing (browser default outline is removed)
- Keyboard Tab doesn't focus the button

**Prevention Strategy (WCAG requirement):**
```html
<button class="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
  <span></span>
  <span></span>
  <span></span>
</button>
```
- Use semantic `<button>` element (not `<div onclick>`)
- Add `aria-label="Toggle navigation menu"` for screen readers
- Add `aria-expanded="false"` initially, toggle to `"true"` when open
- Provide visible focus indicator (outline, box-shadow, or background change)
- JavaScript toggles `aria-expanded` along with CSS class

**Test:** Open in VoiceOver (Mac) or NVDA (Windows) — button should be announced as "Toggle navigation menu, button, collapsed"

**Which Phase:** Phase 1 (JS foundation) — implement from the start, not as retrofit.

---

### 3. Relative Link Paths Break on Subdirectory Hosting

**Problem:** If the site is hosted at a University subdirectory (e.g., `https://www.rochester.edu/faculty/ibarron/`) instead of the domain root, relative paths like `href="research.html"` break. Links point to wrong locations.

**Warning Signs:**
- All internal links are written as `href="research.html"`
- Site works locally but links break when deployed to production
- Links work at root domain but not at subdirectory

**Prevention Strategy:**
- **CONFIRMED for this project:** Deployment is at domain root `ibarron.dev`, NOT a subdirectory
- Use relative document-relative paths: `href="research.html"` ✓
- Verify during testing on the actual domain before finalizing
- If subdirectory hosting becomes necessary later, all links must be updated to account for the base path

**Which Phase:** Phase 2 (first page deploy) — test links on actual domain as soon as first page is live.

---

### 4. Tabs Interface Missing ARIA Pattern Is Invisible to Screen Readers

**Problem:** The Students page has a tab interface (Current / Prior / Prospective). If implemented as plain `<div>` with CSS and JavaScript, screen readers see only a list of buttons, not a tabbed interface. Keyboard users can't navigate with arrow keys.

**Warning Signs:**
- Tab buttons are `<button>` elements without roles
- Tab panels are `<div>` elements without roles
- No `aria-selected` / `aria-controls` attributes
- Arrow keys don't work (only Tab moves focus)

**Prevention Strategy (W3C ARIA Authoring Practices):**
```html
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="current-panel">
    Current Students
  </button>
  <button role="tab" aria-selected="false" aria-controls="prior-panel">
    Prior Students
  </button>
  <button role="tab" aria-selected="false" aria-controls="prospective-panel">
    Prospective Students
  </button>
</div>

<div role="tabpanel" id="current-panel" aria-labelledby="current-tab">
  ...content...
</div>
```

- Container: `role="tablist"`
- Tab buttons: `role="tab"`, `aria-selected="true"/"false"`, `aria-controls="[panel-id]"`
- Panels: `role="tabpanel"`, `aria-labelledby="[tab-id]"`
- JavaScript: Left/Right arrow keys move between tabs, update `aria-selected` attributes

**Test:** In screen reader, announce "tablist with 3 tabs" and arrow keys move focus between tabs.

**Which Phase:** Phase 4 (Students page) — implement full ARIA tabs pattern from the start, not as an add-on.

---

### 5. `prefers-reduced-motion` Animations Are Easy to Miss

**Problem:** CSS animations are added to page-load fade-ins and hover effects. If not paired with `@media (prefers-reduced-motion: no-preference)`, users who disabled animations in their OS preferences see jumpy, disorienting motion.

**Warning Signs:**
- Animations are defined in global CSS without media query wrapper
- Page feels jarring when accessibility settings prefer reduced motion
- Animations added as a "feature" at the end, not built in from the start

**Prevention Strategy:**
- **Wrap every animation in `@media (prefers-reduced-motion: no-preference)` block at write time**
- Do this *before* the animation is deployed, not as a retrofit
- Pattern:
  ```css
  @media (prefers-reduced-motion: no-preference) {
    .section {
      animation: fadeInUp 0.5s ease-out;
    }
  }
  ```
- Without this wrapper, the animation runs regardless of user preference

**Test:** Open System Preferences → Accessibility → Display → reduce motion (Mac) or Settings → Ease of Access → Display → Show animations (Windows), reload page. Animations should be gone.

**Which Phase:** Phase 1 (CSS animations) — establish this pattern for every animation, enforce it in code review.

---

### 6. Profile Photo Placeholder Must Have Proper Alt Text (If Real Image)

**Problem:** When user replaces the CSS placeholder "IB" box with a real photo, the `<img>` tag needs a descriptive alt attribute. If missing, screen readers can't describe the photo.

**Warning Signs:**
- `<img src="photo.jpg">` with no `alt` attribute
- `alt=""` (empty) when it should have text
- `alt="photo"` or `alt="headshot"` (too vague)

**Prevention Strategy:**
- If image placeholder used initially: CSS placeholder needs no alt (it's not an `<img>`)
- When user replaces with real photo:
  ```html
  <img src="assets/photo.jpg" alt="Dr. Irving Barron, Assistant Professor of Electrical and Computer Engineering" class="profile-photo">
  ```
- Alt text should describe who is in the photo and their role (not "picture of the professor")

**Open Question:** Will the profile photo be a real `<img>` in v1 or remain the CSS placeholder until user provides an image?
- **If CSS placeholder:** Pitfall is deferred — no alt text needed
- **If real image:** Must address in Phase 2 (home page)

**Which Phase:** Phase 2 (home page) if real photo used; otherwise deferred.

---

## Minor Pitfalls

### Heading Hierarchy Broken (Skip Levels)
**Problem:** Page has `<h1>`, then `<h3>`, skipping `<h2>`. Screen reader users are confused.
**Prevention:** Always nest headings properly: H1 → H2 → H3. If visual design doesn't match, use CSS to resize, don't break hierarchy.

### Focus Indicators Removed with CSS
**Problem:** Designer removes browser focus outline with `outline: none` but doesn't provide alternative. Keyboard users can't see where focus is.
**Prevention:** Never remove focus indicators without providing a visible replacement. Use outline, box-shadow, or background color.

### Images Without Alt Text
**Problem:** Research publication cards have author photos or venue logos with no alt text.
**Prevention:** Every `<img>` must have `alt` attribute. For decorative images, use `alt=""`. For content images, describe what's shown.

### Color Alone to Convey Information
**Problem:** Active nav link is only shown in yellow color. Users with color blindness can't tell which page is active.
**Prevention:** Use yellow color + underline or checkmark to indicate active state.

## Roadmap Implications

**Phase 1 (CSS):**
- Establish color token system with WCAG contrast enforcement
- Define `prefers-reduced-motion` wrapper pattern for all animations
- Build accessible component library (buttons, cards, tabs with ARIA roles already baked in)

**Phase 2 (Home page):**
- Verify hamburger button is a `<button>` with full ARIA (`aria-label`, `aria-expanded`)
- Test all relative links on the actual `ibarron.dev` domain
- If using real profile photo, ensure alt text is descriptive
- Keyboard navigation test: Tab through entire page, all focusable elements must be reachable

**Phase 3 (Research, Teaching, Contact pages):**
- Publication cards: bold the author name (already in spec) ✓
- Verify color contrast on all text (navy on white, white on navy, gray on white)
- Confirm card border-top yellow is decoration only, not relied upon for meaning

**Phase 4 (Students page):**
- Implement full ARIA tabs pattern (tablist, tab, tabpanel roles, aria-selected, arrow key handler)
- Test with screen reader: each tab should announce "tab, selected/not selected"
- Arrow keys must move between tabs without submitting form

**Accessibility audit after each phase:**
- Use WebAIM Contrast Checker for every color pair
- Use WAVE browser extension (webaim.org/tools) to scan for ARIA and semantic errors
- Test with keyboard only (no mouse) — all features must be accessible
- Test with screen reader (VoiceOver on Mac, NVDA on Windows) — all interactive elements must be announced

---

*Pitfalls research: 2026-03-25*
