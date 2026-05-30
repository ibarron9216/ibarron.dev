# Site Audit Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix 8 SEO, accessibility, and code quality issues identified in the ibarron.dev site audit.

**Architecture:** Static HTML site, single CSS file (`css/style.css`), single JS file (`js/main.js`). All fixes are surgical — no restructuring, no new dependencies.

**Tech Stack:** HTML5, CSS3 (custom properties), vanilla JavaScript, no frameworks.

---

### Task 1: Favicon and Social Media Meta Tags

**Files:**
- Create: `favicon.svg`
- Modify: `index.html:3-9`, `contact.html:3-9`, `research.html:3-9`, `teaching.html:3-9`, `students.html:3-9`

**Spec:** Add a self-hosted SVG favicon and Open Graph / Twitter Card meta tags to all 5 pages for social sharing previews.

- [ ] **Step 1: Create SVG favicon**

Create `favicon.svg` in project root:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#001E5F"/>
  <text x="50" y="70" font-family="Georgia, serif" font-weight="700" font-size="72" fill="#FFD82B" text-anchor="middle">IB</text>
</svg>
```

Run: `cat favicon.svg`
Expected: SVG output with navy background, yellow "IB" initials.

- [ ] **Step 2: Add favicon and meta tags to index.html**

In `index.html`, after line 7 (`<title>Dr. Irving Barron</title>`), insert:

```html
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="alternate icon" type="image/svg+xml" href="/favicon.svg">

  <!-- Open Graph / Social -->
  <meta property="og:title" content="Dr. Irving Barron">
  <meta property="og:description" content="Assistant Professor of Instruction, University of Rochester ECE. Signal processing, security, and privacy.">
  <meta property="og:image" content="https://ibarron.dev/assets/images/dr-irving-barron-profile.webp">
  <meta property="og:url" content="https://ibarron.dev/">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Dr. Irving Barron">
  <meta name="twitter:description" content="Assistant Professor of Instruction, University of Rochester ECE. Signal processing, security, and privacy.">
  <meta name="twitter:image" content="https://ibarron.dev/assets/images/dr-irving-barron-profile.webp">
```

- [ ] **Step 3: Add favicon link to all other pages**

In each of `contact.html`, `research.html`, `teaching.html`, `students.html`, after the existing `<title>` line, insert:

```html
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

- [ ] **Step 4: Add OG/Twitter meta tags to contact.html**

After the favicon link added in Step 3, insert in `contact.html`:

```html

  <!-- Open Graph / Social -->
  <meta property="og:title" content="Contact - Dr. Irving Barron">
  <meta property="og:description" content="Contact information for Dr. Irving Barron, University of Rochester ECE">
  <meta property="og:image" content="https://ibarron.dev/assets/images/dr-irving-barron-profile.webp">
  <meta property="og:url" content="https://ibarron.dev/contact.html">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Contact - Dr. Irving Barron">
  <meta name="twitter:description" content="Contact information for Dr. Irving Barron, University of Rochester ECE">
  <meta name="twitter:image" content="https://ibarron.dev/assets/images/dr-irving-barron-profile.webp">
```

- [ ] **Step 5: Add OG/Twitter meta tags to research.html**

After the favicon link, insert in `research.html`:

```html

  <!-- Open Graph / Social -->
  <meta property="og:title" content="Research - Dr. Irving Barron">
  <meta property="og:description" content="Research interests and publications of Dr. Irving Barron, University of Rochester">
  <meta property="og:image" content="https://ibarron.dev/assets/images/what-i-do-research.jpg">
  <meta property="og:url" content="https://ibarron.dev/research.html">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Research - Dr. Irving Barron">
  <meta name="twitter:description" content="Research interests and publications of Dr. Irving Barron, University of Rochester">
  <meta name="twitter:image" content="https://ibarron.dev/assets/images/what-i-do-research.jpg">
```

- [ ] **Step 6: Add OG/Twitter meta tags to teaching.html**

After the favicon link, insert in `teaching.html`:

```html

  <!-- Open Graph / Social -->
  <meta property="og:title" content="Teaching - Dr. Irving Barron">
  <meta property="og:description" content="Teaching philosophy and courses taught by Dr. Irving Barron, University of Rochester ECE">
  <meta property="og:image" content="https://ibarron.dev/assets/images/what-i-do-teaching.jpg">
  <meta property="og:url" content="https://ibarron.dev/teaching.html">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Teaching - Dr. Irving Barron">
  <meta name="twitter:description" content="Teaching philosophy and courses taught by Dr. Irving Barron, University of Rochester ECE">
  <meta name="twitter:image" content="https://ibarron.dev/assets/images/what-i-do-teaching.jpg">
```

- [ ] **Step 7: Add OG/Twitter meta tags to students.html**

After the favicon link, insert in `students.html`:

```html

  <!-- Open Graph / Social -->
  <meta property="og:title" content="Students Hub - Dr. Irving Barron">
  <meta property="og:description" content="Resources and opportunities for students of Dr. Irving Barron, University of Rochester ECE">
  <meta property="og:image" content="https://ibarron.dev/assets/images/what-i-do-students.jpg">
  <meta property="og:url" content="https://ibarron.dev/students.html">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Students Hub - Dr. Irving Barron">
  <meta name="twitter:description" content="Resources and opportunities for students of Dr. Irving Barron, University of Rochester ECE">
  <meta name="twitter:image" content="https://ibarron.dev/assets/images/what-i-do-students.jpg">
```

- [ ] **Step 8: Verify files exist for og:image references**

Run: `ls assets/images/dr-irving-barron-profile.webp assets/images/what-i-do-research.jpg assets/images/what-i-do-teaching.jpg assets/images/what-i-do-students.jpg`
Expected: All four files listed (no errors).

- [ ] **Step 9: Commit**

```bash
git add favicon.svg index.html contact.html research.html teaching.html students.html
git commit -m "feat: add favicon and Open Graph / Twitter Card meta tags to all pages"
```

---

### Task 2: Fix Skip-Link Accessibility

**Files:**
- Modify: `index.html:49`, `contact.html:50`, `research.html:50`, `teaching.html:50`, `students.html:51`

**Spec:** Add `tabindex="-1"` to `<main>` on all 5 pages so the skip-link's focus target works correctly for keyboard users.

- [ ] **Step 1: Add tabindex to index.html main**

Edit `index.html:49`. Replace:
```html
  <main class="main-content" id="main-content">
```
With:
```html
  <main class="main-content" id="main-content" tabindex="-1">
```

Run: `python3 -c "
with open('index.html') as f:
    content = f.read()
assert 'tabindex=\"-1\"' in content
print('PASS: index.html has tabindex')
"`

Expected: `PASS: index.html has tabindex`

- [ ] **Step 2: Add tabindex to contact.html main**

Edit `contact.html:50`. Replace:
```html
  <main class="main-content" id="main-content">
```
With:
```html
  <main class="main-content" id="main-content" tabindex="-1">
```

- [ ] **Step 3: Add tabindex to research.html main**

Edit `research.html:50`. Replace:
```html
  <main class="main-content" id="main-content">
```
With:
```html
  <main class="main-content" id="main-content" tabindex="-1">
```

- [ ] **Step 4: Add tabindex to teaching.html main**

Edit `teaching.html:50`. Replace:
```html
  <main class="main-content" id="main-content">
```
With:
```html
  <main class="main-content" id="main-content" tabindex="-1">
```

- [ ] **Step 5: Add tabindex to students.html main**

Edit `students.html:51`. Replace:
```html
  <main class="main-content" id="main-content">
```
With:
```html
  <main class="main-content" id="main-content" tabindex="-1">
```

- [ ] **Step 6: Verify all pages have tabindex**

Run: `python3 -c "
import os
pages = ['index.html', 'contact.html', 'research.html', 'teaching.html', 'students.html']
for p in pages:
    path = os.path.join('.', p)
    with open(path) as f:
        content = f.read()
    assert 'tabindex=\"-1\"' in content, f'FAIL: {p} missing tabindex'
print(f'PASS: all {len(pages)} pages have tabindex on main')
"`

Expected: `PASS: all 5 pages have tabindex on main`

- [ ] **Step 7: Also add type="button" to index.html hamburger (bonus fix)**

Edit `index.html:22-23`. The hamburger button is missing `type="button"` (other 4 pages have it). Replace:
```html
        <button
          class="nav__hamburger"
```
With:
```html
        <button
          type="button"
          class="nav__hamburger"
```

- [ ] **Step 8: Commit**

```bash
git add index.html contact.html research.html teaching.html students.html
git commit -m "fix: add tabindex=-1 to main on all pages for skip-link accessibility"
```

---

### Task 3: Remove Broken "Learn more →" Links on Teaching Page

**Files:**
- Modify: `teaching.html:103,122,141,159,177` (remove 5 `<a>` links)
- Modify: `css/style.css:1507-1518` (remove `.course-media-card__cta` rules)

**Spec:** Remove 5 invisible, broken `href="#"` links. Also remove their dead CSS.

- [ ] **Step 1: Remove learn-more links from teaching.html**

Remove these 5 lines from `teaching.html`:
- Line 103: `            <a href="#" class="course-media-card__cta">Learn more →</a>`
- Line 122: `            <a href="#" class="course-media-card__cta">Learn more →</a>`
- Line 141: `            <a href="#" class="course-media-card__cta">Learn more →</a>`
- Line 159: `            <a href="#" class="course-media-card__cta">Learn more →</a>`
- Line 177: `            <a href="#" class="course-media-card__cta">Learn more →</a>`

- [ ] **Step 2: Verify no more broken links exist**

Run: `python3 -c "
with open('teaching.html') as f:
    content = f.read()
assert 'course-media-card__cta' not in content, 'FAIL: course-media-card__cta still present in teaching.html'
assert 'Learn more' not in content, 'FAIL: Learn more still present in teaching.html'
print('PASS: all broken links removed')
"`

Expected: `PASS: all broken links removed`

- [ ] **Step 3: Remove dead CSS for .course-media-card__cta**

In `css/style.css`, delete lines 1507-1518:
```css
.course-media-card__cta {
  color: var(--color-navy);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
  width: fit-content;
  transition: color 0.2s ease;
  display: none; /* Hidden for now, will enable in future */
}

.course-media-card__cta:hover {
  color: var(--color-meliora-blue);
}
```

- [ ] **Step 4: Verify CSS removed**

Run: `python3 -c "
with open('css/style.css') as f:
    content = f.read()
assert 'course-media-card__cta' not in content, 'FAIL: course-media-card__cta still in CSS'
print('PASS: course-media-card__cta removed from CSS')
"`

Expected: `PASS: course-media-card__cta removed from CSS`

- [ ] **Step 5: Commit**

```bash
git add teaching.html css/style.css
git commit -m "fix: remove broken Learn more links and dead .course-media-card__cta CSS"
```

---

### Task 4: Delete ~350 Lines of Dead CSS

**Files:**
- Modify: `css/style.css`

**Spec:** Remove CSS selectors that have zero matches across all 5 HTML files. Also move `@keyframes slideDown` inside `@media (prefers-reduced-motion: no-preference)`.

The following blocks are verified unused (grep all HTML files: zero matches):

| Lines | Selector | Type |
|-------|----------|------|
| 513-518 | `.card--clickable` | unused |
| 533-539 | `.card--highlighted`, `:hover` | unused |
| 655-680 | `.card-ur__icon`, `.card-ur__icon svg`, `.card-ur:hover .card-ur__icon`, `.card-ur:hover .card-ur__icon svg` | unused |
| 795-802 | `.card--funded`, `.card--funded .eyebrow` | unused |
| 810-820 | `.tag-pill` | unused |
| 823-833 | `.badge--year` | unused |
| 874-894 | `.profile-placeholder`, `.profile-placeholder__initials` | unused |
| 902-950 | `.tabs`, `.tabs__list`, `.tabs__tab` (all 3), `.tabs__panel` (both) | legacy tabs, unused |
| 1304-1338 | `.page-header__grid` (with media query), `.page-header__icon`, `.page-header__icon svg`, `.page-header__image` | unused page header |
| 1398-1434 | `.course__header`, `.course__title`, `.course__description` | old course component (`.course__badges` IS used - keep it) |
| 1432-1434 | `.course__description` | unused (keep .course__badges at 1411-1417) |
| 1549-1591 | `.research-interests__wrapper` (with media query), `.research-interests__label`, `.research-interests` | unused |
| 1594-1611 | `.tag-pill--highlight`, `.tag-pill--outline`, `.tag-pill--primary` | unused |
| 1965-1974 | `@keyframes slideDown` | move inside `@media (prefers-reduced-motion: no-preference)` block |

**Keep these blocks** (verified used):
- `.card-ur__media` + img (used)
- `.course__badges` (used in teaching.html)
- `.badge--semester` (used)
- `.research-nav` + `.research-nav--centered` (used)
- `.card-grid--ur` (used)
- `.card-grid--ur-contact` (used)
- `.card-ur` + all hover variants (used)
- `.card-ur--no-hover` (used)

- [ ] **Step 1: Delete lines 513-518 (.card--clickable)**

Remove:
```css
/* Clickable card (link-based card) — remove link styling */
.card--clickable {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}
```

- [ ] **Step 2: Delete lines 533-539 (.card--highlighted)**

Remove:
```css
/* Highlighted card — yellow top border, changes to navy on hover */
.card--highlighted {
  border-top: 4px solid var(--color-yellow);
}

.card--highlighted:hover {
  border-top-color: var(--color-navy);
}
```

- [ ] **Step 3: Delete lines 655-680 (.card-ur__icon block)**

Remove:
```css
/* Card icon container */
.card-ur__icon {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
  color: var(--color-navy);
  transition: color 0.3s ease;
}

.card-ur:hover .card-ur__icon {
  color: var(--color-white);
}

.card-ur__icon svg {
  width: 100%;
  height: 100%;
  max-width: 120px;
  max-height: 120px;
  opacity: 0.8;
}

.card-ur:hover .card-ur__icon svg {
  opacity: 1;
}
```

- [ ] **Step 4: Delete lines 795-802 (.card--funded block)**

Remove:
```css
/* Funded card — includes eyebrow label styling */
.card--funded {
  position: relative;
}

.card--funded .eyebrow {
  display: block;
  margin-bottom: var(--spacing-sm);
}
```

- [ ] **Step 5: Delete lines 810-820 (.tag-pill)**

Remove:
```css
/* Research interest tag */
.tag-pill {
  display: inline-block;
  background-color: var(--color-navy);
  color: var(--color-white);
  border-radius: 100px;
  padding: var(--spacing-sm) var(--spacing-md); /* 8px 16px */
  font-family: var(--font-sans);
  font-size: var(--font-size-label);
  font-weight: 700;
  line-height: 1.2;
}
```

- [ ] **Step 6: Delete lines 823-833 (.badge--year)**

Remove:
```css
/* Year badge (compact) */
.badge--year {
  display: inline-block;
  background-color: var(--color-navy);
  color: var(--color-white);
  border-radius: 100px;
  padding: var(--spacing-xs) var(--spacing-md); /* 4px 12px */
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.2;
}
```

- [ ] **Step 7: Delete lines 874-894 (.profile-placeholder + initals)**

Remove:
```css
.profile-placeholder {
  width: clamp(120px, 30vw, 280px);
  aspect-ratio: 1 / 1;
  background-color: var(--color-navy);
  border: 2px solid var(--color-yellow);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.profile-placeholder__initials {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: clamp(48px, 12vw, 112px);
  color: var(--color-yellow);
  user-select: none;
  line-height: 1;
}
```

- [ ] **Step 8: Delete lines 902-950 (legacy .tabs__* selectors)**

Remove the entire Tabs sub-block (but NOT line 901's `.tabs` - we handle that separately):
```css
/* Tab container — flex row of pill buttons */
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}
```

And remove lines 910-950:
```css
/* Legacy sub-classes kept for backward compat */
.tabs__list {
  display: flex;
  border-bottom: 2px solid var(--color-border);
  gap: var(--spacing-xs);
  margin: 0;
  padding: 0;
  list-style: none;
}

.tabs__tab {
  font-family: var(--font-sans);
  font-size: var(--font-size-label);
  font-weight: 700;
  color: var(--color-navy);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  margin-bottom: -2px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.tabs__tab:hover {
  color: var(--color-meliora-blue);
}

.tabs__tab[aria-selected="true"] {
  color: var(--color-yellow);
  border-bottom-color: var(--color-yellow);
  background-color: var(--color-navy);
  border-radius: 4px 4px 0 0;
}

.tabs__panel {
  padding-top: var(--spacing-lg);
}

.tabs__panel[hidden] {
  display: none;
}
```

- [ ] **Step 9: Delete lines 1304-1338 (unused page-header components)**

Remove:
```css
/* --- 18a. Page Header Component --- */

.page-header__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .page-header__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.page-header__icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-header__icon svg {
  width: clamp(120px, 25vw, 280px);
  height: clamp(120px, 25vw, 280px);
  color: var(--color-white);
  stroke: currentColor;
  fill: none;
  stroke-width: 1.5;
}

.page-header__image {
  width: clamp(624px, 54vw, 810px);
  max-width: 100%;
  height: auto;
  border: 2px solid var(--color-yellow);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
}
```

- [ ] **Step 10: Delete lines 1398-1404 and 1432-1434 (old course component — keep .course__badges)**

Remove `.course__header`, `.course__title`, and `.course__description` but KEEP `.course__badges` (lines 1411-1417):

Remove lines 1398-1409:
```css
/* --- 18c. Course Card --- */

.course__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.course__title {
  flex: 1;
  margin: 0;
}
```

Remove lines 1432-1434:
```css
.course__description {
  margin: 0;
}
```

- [ ] **Step 11: Delete lines 1549-1591 (unused research-interests components)**

Remove:
```css
/* --- 18e. Research Interests --- */

/* Wrapper constrained to the left column (50%) on desktop so pills don't
   bleed into the right column where the page-header icon sits */
.research-interests__wrapper {
  max-width: 50%;
}

@media (max-width: 1023px) {
  /* On mobile/tablet the header grid is single-column, so full width is fine */
  .research-interests__wrapper {
    max-width: 100%;
  }
}

/* "Research Interests" label above the pills */
.research-interests__label {
  font-family: var(--font-sans);
  font-size: var(--font-size-label);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-white);
  margin-bottom: var(--spacing-sm);
  line-height: 1.4;
}

/* Research page navigation — buttons to jump to sections */
.research-nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin: 0;
}

.research-nav--centered {
  justify-content: center;
}

.research-interests {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin: 0;
}
```

**WAIT:** `.research-nav` and `.research-nav--centered` ARE actively used in `research.html` (line 65, 66) and `teaching.html` (line 66). Do NOT delete these.

CORRECTION: Remove only lines 1547-1560 and 1586-1591. Keep lines 1575-1584 (`.research-nav` and `.research-nav--centered`).

Revised: Remove `research-interests__wrapper` block (lines 1547-1560), `research-interests__label` block (lines 1563-1572), and `research-interests` block (lines 1586-1591). Keep `.research-nav` (lines 1575-1584).

- [ ] **Step 12: Delete lines 1594-1611 (unused tag-pill modifiers)**

Remove:
```css
/* Highlighted pill — yellow background, navy text (mirrors btn--primary--inverse) */
.tag-pill--highlight {
  background-color: var(--color-yellow);
  color: var(--color-navy);
  text-align: center;
}
```

And:
```css
/* Secondary pill — outline style, white border and text on navy background */
.tag-pill--outline {
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  text-align: center;
}

/* Legacy — kept for backward compat if used elsewhere */
.tag-pill--primary {
  background-color: var(--color-meliora-blue);
}
```

- [ ] **Step 13: Move @keyframes slideDown inside prefers-reduced-motion**

The `@keyframes slideDown` (currently lines 1965-1974, OUTSIDE any media query) must move into the `@media (prefers-reduced-motion: no-preference)` block. Delete lines 1965-1974:

```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

And insert them inside the `@media (prefers-reduced-motion: no-preference)` block at line 1092, before the closing `}` of that block.

- [ ] **Step 14: Delete empty CSS rule block (lines 1120-1127)**

Remove:
```css
/* Hover/Focus transitions — intentionally NOT wrapped in reduced-motion.
   These are immediate interactive responses, not gratuitous animations. */
.btn,
.card,
.nav__link,
.nav__brand,
.tabs__tab {
  /* Transition declarations are already set on each component above.
     Listed here for reference: all use 0.2s ease transitions (ANIM-03). */
}
```

- [ ] **Step 15: Verify no unused selectors remain**

Run: `python3 -c "
import subprocess, sys
selectors = [
    'card--clickable', 'card--highlighted', 'card-ur__icon', 'card--funded',
    'tag-pill', 'tag-pill--highlight', 'tag-pill--outline', 'tag-pill--primary',
    'badge--year', 'profile-placeholder', 'profile-placeholder__initials',
    'tabs__list', 'tabs__tab', 'tabs__panel', '.tabs {',
    'page-header__grid', 'page-header__icon', 'page-header__image',
    'course__header', 'course__title', 'course__description',
    'research-interests__wrapper', 'research-interests__label', 'research-interests',
    'course-media-card__cta', 'tabs__list', 'tabs__tab', 'tabs__panel'
]
with open('css/style.css') as f:
    css = f.read()
issues = []
for sel in selectors:
    if sel in css:
        issues.append(sel)
if issues:
    print(f'FAIL: still in CSS: {issues}')
    sys.exit(1)
print('PASS: all unused selectors removed')
"`

Expected: `PASS: all unused selectors removed`

- [ ] **Step 16: Update section numbering in CSS**

After removing blocks, section 13 "Tab Component" is now only the ARIA tab selectors (lines 953-1063). Remove the empty section comment left behind. Verify section 18c's `.course__badges` still exists. Update any section comments that have become misaligned.

- [ ] **Step 17: Commit**

```bash
git add css/style.css
git commit -m "refactor: remove ~350 lines of dead CSS selectors"
```

---

### Task 5: Fix Heading Hierarchy on Contact Page

**Files:**
- Modify: `contact.html:68,89`

**Spec:** Contact page skips from `h1` to `h3`. Change "Get in Touch" and "Profiles & Links" card titles from `h3` to `h2`.

- [ ] **Step 1: Change "Get in Touch" heading to h2**

Edit `contact.html:68`. Replace:
```html
            <h3 class="card-ur__title">Get in Touch</h3>
```
With:
```html
            <h2 class="card-ur__title">Get in Touch</h2>
```

- [ ] **Step 2: Change "Profiles & Links" heading to h2**

Edit `contact.html:89`. Replace:
```html
            <h3 class="card-ur__title">Profiles &amp; Links</h3>
```
With:
```html
            <h2 class="card-ur__title">Profiles &amp; Links</h2>
```

- [ ] **Step 3: Verify heading hierarchy**

Run: `python3 -c "
import re
with open('contact.html') as f:
    content = f.read()
h_tags = re.findall(r'<(h[1-6])', content)
print('Contact page heading hierarchy:', ' -> '.join(h_tags))
assert h_tags == ['h1', 'h2', 'h2'], f'FAIL: unexpected hierarchy: {h_tags}'
print('PASS: correct heading hierarchy')
"`

Expected: `PASS: correct heading hierarchy`

- [ ] **Step 4: Ensure CSS covers h2 inside .card-ur__title**

Verify that `h2.card-ur__title` inherits the same styles as `h3.card-ur__title`. The current `.card-ur__title` CSS (line 706) uses `.card-ur__title` class, not element selector, so `h2` will get the same styles. The `h2` element will additionally pick up the base `h1, h2` serif/heading-size styles from section 5, which may be slightly different from the `.card-ur__title` font-size of `1.5rem`. This is acceptable - the `font-family: var(--font-serif)` is shared.

Run: `python3 -c "
with open('css/style.css') as f:
    css = f.read()
assert '.card-ur__title' in css
# Check that card-ur__title uses class selector, not element+class
assert 'h3.card-ur__title' not in css
assert 'h2.card-ur__title' not in css
print('PASS: .card-ur__title is element-agnostic')
"`

Expected: `PASS: .card-ur__title is element-agnostic`

- [ ] **Step 5: Commit**

```bash
git add contact.html
git commit -m "fix: contact page heading hierarchy (h3 -> h2 for card titles)"
```

---

### Task 6: Remove Empty initSidebarNav Function

**Files:**
- Modify: `js/main.js:203-209,238`

**Spec:** Remove the no-op `initSidebarNav` function (lines 203-209) and its call on line 238.

- [ ] **Step 1: Remove function definition**

Delete lines 203-209 from `js/main.js`:
```javascript
// ==============================
// 4. SIDEBAR NAVIGATION (Students Hub)
// ==============================
function initSidebarNav() {
  // Student topic navigation is handled by initTabs so ARIA tabs,
  // panels, and the mobile select stay in a single state path.
}
```

- [ ] **Step 2: Remove function call from DOMContentLoaded**

In `js/main.js`, remove `initSidebarNav();` from the DOMContentLoaded handler. On line 238, delete:
```javascript
  initSidebarNav();
```

- [ ] **Step 3: Verify removal**

Run: `python3 -c "
with open('js/main.js') as f:
    content = f.read()
assert 'initSidebarNav' not in content, 'FAIL: initSidebarNav still in JS'
print('PASS: initSidebarNav removed')
"`

Expected: `PASS: initSidebarNav removed`

- [ ] **Step 4: Renumber remaining function comment headers**

After removing section 4, sections 5 (Accordion) becomes section 4 and section 6 (DOMContentLoaded) becomes section 5. Update comment headers:
- Line ~214 (Accordion): change `5.` to `4.`
- Line ~232 (DOMContentLoaded): change `6.` to `5.`

- [ ] **Step 5: Commit**

```bash
git add js/main.js
git commit -m "refactor: remove empty initSidebarNav function and call"
```

---

### Task 7: Replace Inline style Attributes with CSS Utility Classes

**Files:**
- Create: New CSS utility classes in `css/style.css`
- Modify: `index.html`, `research.html`, `teaching.html`, `students.html`

**Spec:** Create CSS utility classes to replace the ~32 inline `style` attributes. Identify recurring patterns and extract them.

**Pattern Analysis:**

| Pattern | Count | Files |
|---------|-------|-------|
| `margin-top: var(--spacing-md); margin-bottom: var(--spacing-lg); max-width: 720px;` | 3 | index, research, teaching |
| `margin-top: var(--spacing-xl); margin-bottom: var(--spacing-lg);` | 7 | research, teaching |
| `margin-bottom: var(--spacing-lg);` | 6 | research |
| `justify-content: flex-start;` | 5 | teaching |
| `margin-bottom: var(--spacing-sm);` | 6 | research |
| `margin-bottom: var(--spacing-xl);` | 1 | index |
| `margin-bottom: 0;` | 1 | research |
| `margin-top: var(--spacing-sm); margin-bottom: 0; font-weight: 700; color: var(--color-dark-gray);` | 1 | research |
| `min-height: 60vh;` | 1 | index |
| Callout boxes (students) | 2 | students |
| `margin-top: var(--spacing-lg); margin-bottom: 0; padding: var(--spacing-md); background-color: var(--color-meliora-blue); color: var(--color-yellow); border-radius: 4px; font-weight: 500;` | 2 | students |

- [ ] **Step 1: Create spacing utility classes in CSS**

In `css/style.css`, section 6 (Layout Utilities), after the existing utilities (after `.section--spacious` at line 259), add:

```css

/* --- Spacing Utilities --- */

.mt-md { margin-top: var(--spacing-md); }
.mt-lg { margin-top: var(--spacing-lg); }
.mt-xl { margin-top: var(--spacing-xl); }
.mb-sm { margin-bottom: var(--spacing-sm); }
.mb-lg { margin-bottom: var(--spacing-lg); }
.mb-xl { margin-bottom: var(--spacing-xl); }
.mb-0  { margin-bottom: 0; }
.mxw-readable { max-width: 720px; }

/* Course card vertical rhythm */
.course-media-card--gapped {
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
}

/* Publication/media card spacing */
.card--pub-gapped {
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
}

.card--pub-first {
  margin-top: var(--spacing-xl);
}

.card--pub-last {
  margin-bottom: 0;
}

/* Grant/Media card eyebrow spacing */
.card--grant .eyebrow {
  margin-bottom: var(--spacing-sm);
}

/* Grant co-PI detail line */
.grant__co-pi {
  margin-top: var(--spacing-sm);
  margin-bottom: 0;
  font-weight: 700;
  color: var(--color-dark-gray);
}

/* Course badge row — start-aligned */
.course__badges--start {
  justify-content: flex-start;
}

/* Min-height hero section */
.section--hero-min {
  min-height: 60vh;
}

/* Students callout box */
.callout-box {
  margin-top: var(--spacing-lg);
  margin-bottom: 0;
  padding: var(--spacing-md);
  background-color: var(--color-meliora-blue);
  color: var(--color-yellow);
  border-radius: 4px;
  font-weight: 500;
}
```

- [ ] **Step 2: Verify new CSS classes exist**

Run: `python3 -c "
with open('css/style.css') as f:
    css = f.read()
for cls in ['mt-md', 'mxw-readable', 'course-media-card--gapped', 'card--pub-gapped',
            'card--pub-first', 'card--pub-last', 'grant__co-pi', 'course__badges--start',
            'section--hero-min', 'callout-box']:
    assert cls in css, f'FAIL: {cls} not in CSS'
print('PASS: all utility classes added')
"`

Expected: `PASS: all utility classes added`

- [ ] **Step 3: Replace inline styles in index.html**

In `index.html`, replace all inline `style=""` attributes:

Line 52: `<section class="section section--navy section--spacious" style="min-height: 60vh;">`
→ `<section class="section section--navy section--spacious section--hero-min">`

Line 80: `<p style="margin-top: var(--spacing-md); margin-bottom: var(--spacing-lg); max-width: 720px;">`
→ `<p class="mt-md mb-lg mxw-readable">`

Line 83: `<p style="margin-bottom: var(--spacing-lg); max-width: 720px;">`
→ `<p class="mb-lg mxw-readable">`

Line 86: `<p style="margin-bottom: var(--spacing-lg); max-width: 720px;">`
→ `<p class="mb-lg mxw-readable">`

Line 96: `<h2 style="margin-bottom: var(--spacing-xl);">`
→ `<h2 class="mb-xl">`

- [ ] **Step 4: Replace inline styles in research.html**

Line 78: `<p style="margin-top: var(--spacing-md); margin-bottom: var(--spacing-lg); max-width: 720px;">`
→ `<p class="mt-md mb-lg mxw-readable">`

Publication cards — replace inline styles on `<div class="card card--publication ...">`:

Line 90: `style="margin-top: var(--spacing-xl); margin-bottom: var(--spacing-lg);"`
→ Add class `card--pub-gapped`, remove style attribute

Lines 112, 134, 156: `style="margin-bottom: var(--spacing-lg);"`
→ Add class `mb-lg`, remove style attribute

Line 178: `style="margin-bottom: 0;"`
→ Add class `mb-0`, remove style attribute

Line 213: `style="margin-top: var(--spacing-xl);"`
→ Add class `mt-xl`, remove style attribute

Lines 216, 240, 253, 265: `style="margin-bottom: var(--spacing-sm);"` on eyebrow elements
→ REMOVE style attribute. The new `.card--grant .eyebrow { margin-bottom: var(--spacing-sm); }` CSS already handles this.

Line 218: `style="margin-top: var(--spacing-sm); margin-bottom: 0; font-weight: 700; color: var(--color-dark-gray);"`
→ Replace `<p style="...">` with `<p class="grant__co-pi">`

Lines 237, 250: `style="margin-top: var(--spacing-xl); margin-bottom: var(--spacing-lg);"` on media cards
→ Add class `card--pub-gapped`, remove style attribute

- [ ] **Step 5: Replace inline styles in teaching.html**

Line 77: `<p style="margin-top: var(--spacing-md); margin-bottom: var(--spacing-lg); max-width: 720px;">`
→ `<p class="mt-md mb-lg mxw-readable">`

For each of the 5 course-media-card divs (lines 89, 108, 127, 146, 164):
`style="margin-top: var(--spacing-xl); margin-bottom: var(--spacing-lg);"` → Add `course-media-card--gapped` class

For each of the 5 course__badges divs (lines 95, 114, 133, 152, 170):
`style="justify-content: flex-start;"` → Add `course__badges--start` class

- [ ] **Step 6: Replace inline styles in students.html**

Lines 153 and 181: Replace:
```html
              <p style="margin-top: var(--spacing-lg); margin-bottom: 0; padding: var(--spacing-md); background-color: var(--color-meliora-blue); color: var(--color-yellow); border-radius: 4px; font-weight: 500;">...
```
With:
```html
              <p class="callout-box">...
```

- [ ] **Step 7: Verify no inline styles remain**

Run: `python3 -c "
import os
pages = ['index.html', 'contact.html', 'research.html', 'teaching.html', 'students.html']
total = 0
for p in pages:
    with open(os.path.join('.', p)) as f:
        content = f.read()
    count = content.count('style=\"')
    if count > 0:
        print(f'{p}: {count} inline style(s) remain')
        total += count
if total == 0:
    print('PASS: zero inline styles across all pages')
else:
    print(f'FAIL: {total} inline styles remain')
    exit(1)
"`

Expected: `PASS: zero inline styles across all pages`

- [ ] **Step 8: Update CSS comment header for grant eyebrow**

In `css/style.css`, the `.grant__co-pi` and `.card--grant .eyebrow` spacing was extracted. Remove the now-unnecessary `.card--grant .eyebrow` if the build step added it. Actually, `.card--grant .eyebrow` is the replacement for the inline eyebrow styles, so it stays as the new canonical way to space grant eyebrows. No changes needed.

- [ ] **Step 9: Verify build (rendering)**

Open each HTML file in a browser or run a visual diff tool to confirm no layout regressions. All spacing should remain identical — we're replacing inline styles with equivalent CSS classes.

- [ ] **Step 10: Commit**

```bash
git add css/style.css index.html research.html teaching.html students.html
git commit -m "refactor: replace all inline style attributes with CSS utility classes"
```

---

### Task 8: Add robots.txt, sitemap.xml, Better Meta Descriptions, loading="lazy"

**Files:**
- Create: `robots.txt`, `sitemap.xml`
- Modify: `index.html:6,102,112,122,132`, `research.html:6,58`, `teaching.html:6,58`, `students.html:6`

**Spec:** Create SEO files, improve meta descriptions, add `loading="lazy"` to below-fold images.

- [ ] **Step 1: Create robots.txt**

Create `robots.txt` in project root:
```
User-agent: *
Allow: /

Sitemap: https://ibarron.dev/sitemap.xml
```

Run: `cat robots.txt`
Expected: Content as above.

- [ ] **Step 2: Create sitemap.xml**

Create `sitemap.xml` in project root:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ibarron.dev/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ibarron.dev/research.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ibarron.dev/teaching.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ibarron.dev/students.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://ibarron.dev/contact.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Improve meta descriptions on all pages**

Update meta descriptions:

`index.html:6`: Replace description with:
```html
  <meta name="description" content="Dr. Irving Barron is an Assistant Professor of Instruction in Electrical and Computer Engineering at the University of Rochester, focusing on signal processing for security, privacy, and digital media forensics.">
```

`contact.html:6` — already adequate, keep as is.

`research.html:6` — already adequate, keep as is.

`teaching.html:6` — already adequate, keep as is.

`students.html:6`: Replace description with:
```html
  <meta name="description" content="Student resources, office hours, research opportunities, and mentorship information for students of Dr. Irving Barron at the University of Rochester ECE department.">
```

- [ ] **Step 4: Add loading="lazy" to missing images on index.html**

In `index.html`, add `loading="lazy"` to these 4 card thumbnail images:
- Line 102: `<img src="assets/images/what-i-do-research.jpg" ...>` → add `loading="lazy"`
- Line 112: `<img src="assets/images/what-i-do-teaching.jpg" ...>` → add `loading="lazy"`
- Line 122: `<img src="assets/images/what-i-do-students.jpg" ...>` → add `loading="lazy"`
- Line 132: `<img src="assets/images/dr-irving-barron-profile.webp" ...>` → add `loading="lazy"`

- [ ] **Step 5: Add loading="lazy" to hero images on research.html and teaching.html**

In `research.html:58`, after `class="visual-hero__image animate-on-load"`, add `loading="lazy"`.

In `teaching.html:58`, after `class="visual-hero__image animate-on-load"`, add `loading="lazy"`.

- [ ] **Step 6: Verify all images have loading="lazy"**

Run: `python3 -c "
import os, re
pages = ['index.html', 'contact.html', 'research.html', 'teaching.html', 'students.html']
total_imgs = 0
lazy_imgs = 0
for p in pages:
    with open(os.path.join('.', p)) as f:
        content = f.read()
    imgs = re.findall(r'<img\b[^>]*>', content)
    total_imgs += len(imgs)
    lazy = [img for img in imgs if 'loading=\"lazy\"' in img]
    lazy_imgs += len(lazy)
print(f'{lazy_imgs}/{total_imgs} images have loading=lazy')
if lazy_imgs < total_imgs:
    print('WARN: some images miss loading=lazy (hero images or profile photos above fold are acceptable)')
else:
    print('PASS: all images have loading=lazy')
"`

- [ ] **Step 7: Verify new files exist**

Run: `ls -la robots.txt sitemap.xml`
Expected: Both files exist.

- [ ] **Step 8: Commit**

```bash
git add robots.txt sitemap.xml index.html research.html teaching.html students.html contact.html
git commit -m "feat: add robots.txt, sitemap.xml, improve meta descriptions, add loading=lazy to images"
```

---

### Final Verification

- [ ] **Run full audit after all tasks**

Run: `python3 -c "
import os, glob, re

issues = []

# Check 1: All pages have skip-link tabindex
for p in ['index.html', 'contact.html', 'research.html', 'teaching.html', 'students.html']:
    with open(p) as f:
        content = f.read()
    if 'tabindex=\"-1\"' not in content:
        issues.append(f'{p}: missing tabindex=-1 on main')

# Check 2: Heading hierarchy on contact page
with open('contact.html') as f:
    content = f.read()
htags = [h for h in re.findall(r'<(h[1-6])[ >]', content) if '/main' not in h]
if htags != ['h1', 'h2', 'h2']:
    issues.append(f'contact.html heading hierarchy: {htags}')

# Check 3: No dead classes in CSS
with open('css/style.css') as f:
    css = f.read()
dead = ['card--clickable', 'card--highlighted', 'card-ur__icon', 'card--funded',
        'tag-pill', 'tag-pill--highlight', 'tag-pill--outline', 'tag-pill--primary',
        'badge--year', 'profile-placeholder', 'profile-placeholder__initials',
        'tabs__list', 'tabs__tab', 'tabs__panel', '.tabs {',
        'page-header__grid', 'page-header__icon', 'page-header__image',
        'course__header', 'course__title', 'course__description',
        'research-interests__wrapper', 'research-interests__label', 'research-interests',
        'course-media-card__cta',
        ]
for d in dead:
    if d in css:
        issues.append(f'CSS: {d} still present')

# Check 4: No initSidebarNav in JS
with open('js/main.js') as f:
    js = f.read()
if 'initSidebarNav' in js:
    issues.append('JS: initSidebarNav still present')

# Check 5: Inline styles removed
for p in ['index.html', 'contact.html', 'research.html', 'teaching.html', 'students.html']:
    with open(p) as f:
        content = f.read()
    count = content.count('style=\"')
    if count > 0:
        issues.append(f'{p}: {count} inline styles remain')

# Check 6: New files exist
for f in ['favicon.svg', 'robots.txt', 'sitemap.xml']:
    if not os.path.exists(f):
        issues.append(f'{f}: missing')

# Check 7: Meta tags on all pages
for p in ['index.html', 'contact.html', 'research.html', 'teaching.html', 'students.html']:
    with open(p) as f:
        content = f.read()
    for tag in ['og:title', 'og:description', 'og:image', 'twitter:card']:
        if tag not in content:
            issues.append(f'{p}: missing {tag}')

# Check 8: No broken learn-more links
with open('teaching.html') as f:
    content = f.read()
if 'Learn more' in content or 'course-media-card__cta' in content:
    issues.append('teaching.html: Learn more links still present')

# Check 9: index.html hamburger has type=button
with open('index.html') as f:
    content = f.read()
if 'class=\"nav__hamburger\"' in content and 'type=\"button\"' not in content[:content.index('class=\"nav__hamburger\"')+50]:
    issues.append('index.html: hamburger missing type=button')

if issues:
    for i in issues:
        print(f'FAIL: {i}')
    exit(1)
print('PASS: all audit checks passed')
"`

Expected: `PASS: all audit checks passed`

- [ ] **Final commit (if any stragglers)**

```bash
git status
git add -A
# Only commit if there are changes
git commit -m "chore: final audit verification fixes" || echo "No changes to commit"
```
