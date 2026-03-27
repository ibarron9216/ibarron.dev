# Phase 4: Students Hub - Research

**Researched:** 2026-03-27
**Domain:** Accessible ARIA tab interface, CSS animations, JavaScript keyboard navigation
**Confidence:** HIGH

## Summary

Phase 4 builds a fully accessible Students Hub page featuring a semantic ARIA tab interface with three content sections (Current, Prior, Prospective Students). The tab pattern requires implementing W3C APG standard roles (tablist, tab, tabpanel), keyboard navigation (arrow keys with wrapping), and fade animations with prefers-reduced-motion support. The project's existing initTabs() placeholder function provides the foundation; Phase 4 work expands it to include tabindex management, fade animations, and complete keyboard handling. No external dependencies are needed—all implementation uses plain HTML, CSS custom properties, and vanilla JavaScript aligned with the project's constraints.

**Primary recommendation:** Implement fade animations exclusively (no scaling/transforms) to ensure compatibility with prefers-reduced-motion users; use CSS opacity transitions tied to the hidden attribute toggling managed by JavaScript. Structure tabindex values to move focus to the active tab after arrow key navigation. Leverage existing .card and button styling; add minimal new CSS classes (.tabs, [role="tab"], [role="tabpanel"] selectors) using the established design tokens.

## User Constraints (from CONTEXT.md)

### Locked Decisions

**Tab Navigation Styling**
- Active tab: Navy background (#001E5F), white text, rounded corners, padding/sizing consistent with existing .btn styles
- Inactive tabs: Transparent background, navy text
- Hover state: Meliora Blue on inactive tabs
- Focus state: Visible outline (browser default or custom focus ring)

**Tab Keyboard Navigation**
- Tab key moves focus sequentially through tab buttons, then to first focusable element in active panel
- Arrow Left/Right switches between tabs (wraps: Left from first goes to last; Right from last goes to first)
- Manage tabindex=0 on active tab, tabindex=-1 on inactive tabs
- Move focus to active tab when switching via arrow keys

**Tab Container Layout**
- Horizontal layout on all screen sizes (no vertical stacking, no dropdown on mobile)
- Three tabs fit comfortably on 320px+ screens without horizontal scrolling
- Flex layout with gap=--spacing-md (16px) between pill buttons

**Panel Content Organization**
- Single <section> per panel, no nested subsections
- Important items (Recommendation Letters, Undergraduate Research) as .card components
- Other content as prose + definition lists or bullet lists
- White background, consistent padding (--spacing-3xl vertical, --spacing-md mobile sides)
- Hidden via hidden attribute (not CSS display: none, for better semantics)

**Tab Panel Animation**
- Fade in/out over 0.2s opacity transitions
- Easing: ease-in-out (Claude's discretion on exact function)
- Critical: Wrap in @media (prefers-reduced-motion: no-preference) for instant switch for users who prefer reduced motion
- When hiding panel: Set opacity: 0, then hidden = true after animation completes
- When showing panel: Set hidden = false, then opacity: 1 via animation

**Page Header**
- Navy background, H1 "Students Hub" + lead text
- min-height: 35-40vh (balanced visual anchor)
- Consistent with Research, Teaching, Contact pages

**Card Styling**
- Recommendation Letters card: .card .card--highlighted (4px yellow border-top)
- Undergraduate Research card: .card .card--highlighted (4px yellow border-top)

**Responsive Design**
- Breakpoints: 640px (mobile→tablet), 1024px (tablet→desktop)
- Tab container and panels: Full width on mobile, constrained on desktop
- Single-column on mobile, preserve layout on desktop

**First-Person Voice**
- All copy must use "I/my/me" — never third-person
- Core requirement from project CLAUDE.md

### Claude's Discretion

- Exact easing function for fade transitions (ease, ease-in-out, cubic-bezier, etc.)
- Precise timings within 0.2s fade range (0.15s or 0.25s if testing suggests adjustment)
- Focus state styling on tab buttons (default outline vs. custom ring)
- Panel content layout details (padding, margins, spacing between elements within a panel)
- Decorative header element (optional SVG icon or illustration on right side of header)
- Definition list styling for office hours/contact details vs. simple prose + bullet lists
- Accommodation info wording and structure

### Deferred Ideas

None — discussion stayed within phase scope.

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| STU-01 | Create page header section with navy background, white H1 "Students Hub" | Navy background pattern established in Phase 1 CSS, section--navy component, typography tokens for H1 in serif font |
| STU-02 | Add lead text "Resources for current, prior, and prospective students" in white | Eyebrow + lead pattern reused from Research, Teaching, Contact pages; section--navy text color override established |
| STU-03 | Create tab navigation with three tabs: "Current Students", "Prior Students", "Prospective Students" | ARIA tab pattern requires role="tablist" on container, role="tab" on buttons; pill button styling available via .btn classes or new [role="tab"] selector |
| STU-04 | Implement tab panel switching with JavaScript (click toggles visible panel, hides others) | Placeholder initTabs() function handles click event listeners and hidden attribute toggling; expand with fade animation coordination |
| STU-05 | Apply ARIA roles to tabs (role="tablist", role="tab", role="tabpanel") | W3C APG specifies required roles; existing CSS includes [role="tab"] and [role="tabpanel"] selectors from Phase 1 planning |
| STU-06 | Implement arrow key navigation (left/right arrows switch between tabs) | Existing initTabs() includes arrow key handlers with wrapping logic; enhance with tabindex management |
| STU-07 | Update aria-selected attribute on tabs when switching | Placeholder function already updates aria-selected="true"/"false" on each tab |
| STU-08 | Tab 1 (Current): Office Hours card, Course Materials link to Blackboard, Reaching Me email, Accommodations | Card styling and typography patterns established; content organization per locked decision single section per panel |
| STU-09 | Tab 2 (Prior): Stay in Touch section, Recommendation Letters card with bulleted requirements | .card--highlighted pattern (yellow top border) ready; bullet lists compatible with existing typography |
| STU-10 | Tab 3 (Prospective): Undergraduate Research card with bulleted application requirements, Graduate Admissions link | .card--highlighted pattern ready; link styling consistent with footer/nav link patterns |
| STU-11 | Recommendation Letters card has yellow top border | .card .card--highlighted CSS already defines 4px yellow border-top and hover behavior |
| STU-12 | Undergraduate Research card has yellow top border | .card .card--highlighted CSS already defines 4px yellow border-top and hover behavior |

## Standard Stack

### Core Technologies
| Technology | Version | Purpose | Why Standard |
|------------|---------|---------|--------------|
| HTML5 | Native | Semantic markup with ARIA roles (tablist, tab, tabpanel) | W3C APG tab pattern requires semantic HTML5; role attributes provide accessibility without JavaScript dependency |
| CSS3 | Native | Layout (flexbox), animations (opacity transitions), responsive design (mobile-first media queries) | Custom properties (--color-*, --spacing-*) from Phase 1 design system; opacity transitions work cross-browser without prefixes (Chrome 26+, Firefox 16+, Safari 9+, Edge 12+) |
| JavaScript (Vanilla) | ES6 | Tab switching, keyboard navigation (arrow keys), focus management, animation state | Project constraint: no external libraries; existing initTabs() placeholder provides foundation; addEventListener/setAttribute API sufficient for event handling and ARIA attribute updates |
| prefers-reduced-motion | CSS media query | Accessibility for vestibular motion disorders | Standard accessibility requirement; all motion animations must respect this setting per WCAG 2.1 AA (ANIM-02 requirement from Phase 1) |

### Existing Reusable Components

| Component | From Phase | Purpose in Phase 4 |
|-----------|-----------|-------------------|
| .section, .section--navy | 1, 3 | Page header container with navy background |
| .container | 1 | Max-width wrapper (1100px) for page content |
| .card, .card--highlighted | 1, 2, 3 | Recommendation Letters and Undergraduate Research cards |
| .btn, .btn--primary, .btn--outline | 1, 2 | Styling reference for tab pill buttons (pill shape, padding, hover transitions) |
| .eyebrow | 1, 3 | Optional label for section above H1 |
| .skip-link | 1 | Accessibility first element on page |
| Color tokens: --color-navy, --color-yellow, --color-meliora-blue, --color-white | 1 | All component styling |
| Spacing tokens: --spacing-md, --spacing-lg, --spacing-xl, --spacing-3xl | 1 | Padding/gaps throughout |
| Typography: --font-serif (H1/H2), --font-sans (body), font-size-heading, font-size-body | 1 | All text styling |
| Responsive breakpoints: 640px, 768px (nav), 1024px | 1 | Mobile-first breakpoints |
| Focus indicator pattern (yellow outline, white on navy) | 1 | Tab button and tabpanel focus states |
| Page-load animation: .animate-on-load with fadeInUp keyframes | 1 | Optional: staggered fade-in on page sections |

### Phase 4 New Components to Add

| Component | Type | Purpose | Location |
|-----------|------|---------|----------|
| [role="tablist"] | CSS selector | Container for tab buttons, flex layout with gap | css/style.css (or extend existing .tabs class) |
| [role="tab"] | CSS selector + existing pill styling | Individual tab button with pill design (navy bg when active, transparent when inactive) | css/style.css, expand on existing [role="tab"] selector rules |
| [role="tabpanel"] | CSS selector | Panel content container with padding and animation | css/style.css, enhance existing [role="tabpanel"] selector rules |
| .tabs-fade (or animate[role="tabpanel"]) | CSS animation class | Opacity transition for panel visibility toggle | Controlled via JS, applied during active tab change |
| opacity transition rule | CSS | 0.2s opacity change wrapped in @media (prefers-reduced-motion: no-preference) | css/style.css under Animation section |

### Installation/Setup

**No external packages required.** The project uses plain HTML/CSS/JS only.

Verify in-place:
- Check css/style.css exists with design tokens and existing .card, .btn, [role="tab"] styles
- Verify js/main.js has initTabs() placeholder function
- Confirm HTML5 doctype and semantic structure in existing pages (index.html, research.html, teaching.html, contact.html)

**Version verification:** All technologies are native browser standards. No versions to verify against npm or external registries. Test in Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ for modern API support.

## Architecture Patterns

### Recommended Project Structure

```
students.html                          # New: Phase 4 Students page
css/style.css                          # Existing: Add [role="tabpanel"] fade animation + [role="tab"] pill button styles
js/main.js                             # Existing: Expand initTabs() with tabindex management + fade animation
```

### Pattern 1: W3C APG Accessible Tab Interface

**What:** Semantic ARIA tab pattern with automatic activation (tabs activate on focus) and full keyboard support (Tab key and arrow navigation).

**When to use:** Multi-section content that users need to switch between without page reload; ideal for grouping related information by category or audience.

**Example HTML Structure:**
```html
<section class="section">
  <div class="container">
    <div role="tablist" aria-label="Student resource sections">
      <button role="tab" aria-selected="true" aria-controls="panel-current" id="tab-current">
        Current Students
      </button>
      <button role="tab" aria-selected="false" aria-controls="panel-prior" id="tab-prior">
        Prior Students
      </button>
      <button role="tab" aria-selected="false" aria-controls="panel-prospective" id="tab-prospective">
        Prospective Students
      </button>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div role="tabpanel" id="panel-current" aria-labelledby="tab-current">
      <!-- Content here -->
    </div>
    <div role="tabpanel" id="panel-prior" aria-labelledby="tab-prior" hidden>
      <!-- Content here -->
    </div>
    <div role="tabpanel" id="panel-prospective" aria-labelledby="tab-prospective" hidden>
      <!-- Content here -->
    </div>
  </div>
</section>
```

**Source:** https://www.w3.org/WAI/ARIA/apg/patterns/tabs/

### Pattern 2: CSS Opacity Fade Animation with prefers-reduced-motion

**What:** CSS transition on opacity property (0 to 1) wrapped in @media (prefers-reduced-motion: no-preference) to ensure users who prefer reduced motion experience instant visibility changes instead of animations.

**When to use:** Panel show/hide transitions where fade creates smooth UX without introducing motion-triggered discomfort. Preferable to scale or transform animations for accessibility.

**Example CSS:**
```css
[role="tabpanel"] {
  padding: var(--spacing-lg) 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

[role="tabpanel"][hidden] {
  display: none;
}

@media (prefers-reduced-motion: no-preference) {
  [role="tabpanel"] {
    transition: opacity 0.2s ease-in-out;
  }
}

@media (prefers-reduced-motion: reduce) {
  [role="tabpanel"] {
    transition: none;
  }
}
```

**Source:** https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion, https://css-tricks.com/almanac/rules/m/media/prefers-reduced-motion/

### Pattern 3: JavaScript Tab Management (Tabindex + Focus)

**What:** Dynamically manage tabindex attribute (tabindex="0" for active tab, tabindex="-1" for inactive) to ensure keyboard Tab key skips inactive tabs and moves focus through the active tab only.

**When to use:** Any custom tab interface to ensure sighted keyboard-only users and screen reader users experience the same logical tab order.

**Example JavaScript Enhancement:**
```javascript
function initTabs() {
  const tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;

  const tabs = tablist.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach((tab, index) => {
    // Set initial tabindex
    if (index === 0) {
      tab.setAttribute('tabindex', '0');
    } else {
      tab.setAttribute('tabindex', '-1');
    }

    // Click to switch tab
    tab.addEventListener('click', () => switchTab(index));

    // Arrow key navigation
    tab.addEventListener('keydown', (e) => {
      let targetIndex = index;
      if (e.key === 'ArrowLeft') {
        targetIndex = index === 0 ? tabs.length - 1 : index - 1;
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        targetIndex = index === tabs.length - 1 ? 0 : index + 1;
        e.preventDefault();
      } else {
        return;
      }
      switchTab(targetIndex);
    });
  });

  function switchTab(index) {
    // Hide all panels, deselect all tabs
    panels.forEach(p => { p.hidden = true; });
    tabs.forEach(t => {
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });

    // Show selected panel and mark tab active
    if (panels[index]) panels[index].hidden = false;
    tabs[index].setAttribute('aria-selected', 'true');
    tabs[index].setAttribute('tabindex', '0');
    tabs[index].focus();

    // Handle fade animation (optional, depends on implementation)
    // See "Animation Coordination" section in Don't Hand-Roll
  }
}
```

**Source:** https://www.w3.org/WAI/ARIA/apg/practices/tabpanel/ (APG implementation example)

### Anti-Patterns to Avoid

- **Missing aria-controls and aria-labelledby:** Tab and tabpanel must be explicitly linked via aria-controls (on tab) and aria-labelledby (on panel) so screen readers understand the association.
- **tabindex="0" on all tabs:** Puts all tabs in the natural tab order, breaking the pattern. Only the active tab should have tabindex="0"; others get tabindex="-1".
- **Using CSS display: none instead of hidden attribute:** The hidden attribute is semantic and understood by assistive technology; display: none is purely presentational.
- **Slide/scale animations without prefers-reduced-motion:** Transforms cause vestibular motion disorder discomfort. Use fade-only animations or wrap all motion in @media (prefers-reduced-motion: no-preference).
- **Arrow key navigation without preventing default:** e.preventDefault() on arrow keys prevents browser scroll and ensures arrow keys only navigate tabs, not the page.
- **Not moving focus to active tab after arrow key navigation:** Users expect focus to move when they press arrow keys; calling tabs[targetIndex].focus() after switching ensures keyboard users see what happened.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Tab interface with ARIA roles and keyboard handling | Custom dropdown or button toggles | W3C APG tab pattern (role="tablist", role="tab", role="tabpanel") | Existing semantic HTML + standardized keyboard behavior; screen readers understand tabs immediately; custom solutions miss edge cases (focus management, automatic activation, proper ARIA attribute sequencing) |
| Focus management in tabs | Manual focus tracking with indices | Built-in tabindex attribute + HTMLElement.focus() API | Browser handles focus ring drawing, focus event listeners ensure proper state; custom focus state tracking is error-prone and conflicts with native browser focus behavior |
| Fade animations with motion accessibility | Custom motion detection, conditional animation application | CSS @media (prefers-reduced-motion: no-preference) media query | Media query is native CSS standard, works without JavaScript, respects OS-level accessibility settings; custom JS detection is unreliable and adds unnecessary complexity |
| Tab switching visibility toggle | Custom opacity/display toggling with manual timing | CSS transition + JavaScript hidden attribute | CSS transitions are optimized by browser, timing is reliable; manual timing with setTimeout is vulnerable to race conditions and browser performance variations |

**Key insight:** The tab interface is a solved problem with a published W3C pattern. Screen readers have built-in support for ARIA tabs. JavaScript complexity should be minimal: just bind events to existing HTML structure and toggle aria-selected + hidden attribute. All visual feedback comes from CSS; no need for custom animation state tracking.

## Common Pitfalls

### Pitfall 1: Focus Management — Inactive Tabs Hijacking Tab Key

**What goes wrong:** If all tabs have tabindex="0" (or default tabindex behavior), pressing Tab moves focus through every tab before reaching content inside the active panel. Keyboard-only users navigate slowly. Screen reader users hear "tab" announced many times.

**Why it happens:** Developers assume all focusable elements should have tabindex="0". But roving tabindex pattern (used in tabs) intentionally keeps inactive tabs out of the natural tab order.

**How to avoid:** Set tabindex="0" on the active tab only. All inactive tabs get tabindex="-1". When switching tabs, update tabindex values. Update initTabs() function to include:
```javascript
tabs[index].setAttribute('tabindex', '0');  // Active tab gets focus
tabs.forEach((t, i) => {
  if (i !== index) t.setAttribute('tabindex', '-1');  // Inactive tabs out of tab order
});
tabs[index].focus();  // Move focus to new active tab
```

**Warning signs:** Pressing Tab from the tablist requires multiple Tab presses to reach content; focus visible outline jumps through all tabs before moving down; screen reader users report hearing multiple "tab" announcements per tab switch.

### Pitfall 2: Missing aria-controls and aria-labelledby Linking

**What goes wrong:** Tab buttons have no explicit connection to their panels. Screen reader announces "tab" but not which content it controls. Users don't understand the relationship; tabs feel like separate controls rather than content switches.

**Why it happens:** ARIA roles alone don't create relationships; developers assume role="tab" automatically links to role="tabpanel". APG requires explicit linking via aria-controls + aria-labelledby.

**How to avoid:** Always include aria-controls on the tab referencing the panel's ID, and aria-labelledby on the panel referencing the tab's ID:
```html
<button role="tab" aria-selected="true" aria-controls="panel-current" id="tab-current">
  Current Students
</button>
<div role="tabpanel" id="panel-current" aria-labelledby="tab-current">
  ...
</div>
```

**Warning signs:** Screen reader doesn't announce panel content when tab is selected; testing with NVDA/JAWS shows tabs and panels as separate, unrelated elements.

### Pitfall 3: Animations That Don't Respect prefers-reduced-motion

**What goes wrong:** Fade animation runs even for users with "reduce motion" enabled on their OS. Users with vestibular motion sensitivity experience discomfort or dizziness from the animation.

**Why it happens:** Developers forget to wrap animations in @media (prefers-reduced-motion: no-preference). This is easy to overlook because most developers don't have motion sensitivity and don't test this setting.

**How to avoid:** Always wrap CSS animations and transitions in prefers-reduced-motion media query. For tab fade, use:
```css
@media (prefers-reduced-motion: no-preference) {
  [role="tabpanel"] {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
}

@media (prefers-reduced-motion: reduce) {
  [role="tabpanel"] {
    transition: none;
  }
}
```

Test by enabling reduce motion on your system (macOS > System Settings > Accessibility > Display > Reduce motion; Windows 11 > Settings > Accessibility > Visual Effects > Animation Effects).

**Warning signs:** Pan, scale, or slide transforms accompany fade; animation runs for users with reduce motion enabled; testing at OS level shows animation not respecting the setting.

### Pitfall 4: Arrow Key Event Propagation — Forgetting e.preventDefault()

**What goes wrong:** Pressing arrow keys navigates tabs AND scrolls the page. User expects arrow keys to only switch tabs, not move the whole page. Confusing behavior.

**Why it happens:** Arrow keys have default browser behavior (scroll up/down). Custom event handlers need to prevent this default to avoid double-action.

**How to avoid:** Always call e.preventDefault() when handling arrow keys in a custom control:
```javascript
tab.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    e.preventDefault();  // Prevent page scroll
    // ... switch tab logic
  }
});
```

**Warning signs:** Pressing arrow keys scrolls page at the same time as switching tabs; tab content shifts unexpectedly while user is navigating.

### Pitfall 5: Opacity Transitions on Elements with hidden Attribute

**What goes wrong:** JavaScript sets `panel.hidden = true` immediately, then CSS opacity: 0 transition tries to animate. But hidden removes the element from layout instantly, breaking the animation. Panel disappears without fade.

**Why it happens:** The hidden attribute takes effect immediately; CSS transitions can't animate on hidden elements because they're removed from the DOM rendering flow.

**How to avoid:** Two approaches:

**Option A (Simple):** Don't animate out, only animate in. Hide immediately, fade in when showing:
```javascript
// Hide old panel
oldPanel.hidden = true;

// Show new panel with fade-in
newPanel.hidden = false;
newPanel.style.opacity = '0';
// Trigger reflow to ensure transition applies
newPanel.offsetHeight;
newPanel.style.opacity = '1';
```

**Option B (Smoother):** Use a fade-out animation before hiding, then fade-in after showing:
```javascript
// Fade out old panel
oldPanel.style.opacity = '0';
// Wait for transition to complete
setTimeout(() => {
  oldPanel.hidden = true;
  // Show and fade in new panel
  newPanel.hidden = false;
  newPanel.style.opacity = '0';
  newPanel.offsetHeight; // Trigger reflow
  newPanel.style.opacity = '1';
}, 200); // Match CSS transition duration
```

**Warning signs:** Panel visibility toggles instantly without fade effect; CSS transition rule shows opacity change but no visible animation occurs.

## Code Examples

Verified patterns from official sources:

### W3C APG Tab Pattern — Full Implementation

```html
<!-- HTML Structure -->
<section class="section section--navy">
  <div class="container">
    <h1>Students Hub</h1>
    <p class="hero__lead">Resources for current, prior, and prospective students</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div role="tablist" aria-label="Student resource categories">
      <button
        role="tab"
        aria-selected="true"
        aria-controls="panel-current"
        id="tab-current"
        class="tab-button"
      >
        Current Students
      </button>
      <button
        role="tab"
        aria-selected="false"
        aria-controls="panel-prior"
        id="tab-prior"
        class="tab-button"
      >
        Prior Students
      </button>
      <button
        role="tab"
        aria-selected="false"
        aria-controls="panel-prospective"
        id="tab-prospective"
        class="tab-button"
      >
        Prospective Students
      </button>
    </div>

    <div role="tabpanel" id="panel-current" aria-labelledby="tab-current">
      <!-- Content for current students -->
    </div>
    <div role="tabpanel" id="panel-prior" aria-labelledby="tab-prior" hidden>
      <!-- Content for prior students -->
    </div>
    <div role="tabpanel" id="panel-prospective" aria-labelledby="tab-prospective" hidden>
      <!-- Content for prospective students -->
    </div>
  </div>
</section>
```

**Source:** https://www.w3.org/WAI/ARIA/apg/patterns/tabs/

### CSS Tab Styling with Fade Animation

```css
/* Tab container */
[role="tablist"] {
  display: flex;
  gap: var(--spacing-md);
  border-bottom: 2px solid var(--color-border);
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-lg) 0;
}

/* Tab button — pill style */
[role="tab"] {
  padding: var(--spacing-md) var(--spacing-lg);
  background: transparent;
  border: none;
  color: var(--color-dark-gray);
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: var(--font-size-label);
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

[role="tab"]:hover {
  color: var(--color-navy);
  background-color: rgba(0, 30, 95, 0.05);
}

[role="tab"]:focus-visible {
  outline: 3px solid var(--color-yellow);
  outline-offset: 2px;
}

/* Active tab state */
[role="tab"][aria-selected="true"] {
  background-color: var(--color-navy);
  color: var(--color-white);
  border-radius: 8px;
}

[role="tab"][aria-selected="true"]:hover {
  background-color: var(--color-meliora-blue);
}

/* Tab panel — fade animation */
[role="tabpanel"] {
  padding: var(--spacing-lg) 0;
}

[role="tabpanel"][hidden] {
  display: none;
}

/* Fade transition — only when motion is not reduced */
@media (prefers-reduced-motion: no-preference) {
  [role="tabpanel"] {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
}

@media (prefers-reduced-motion: reduce) {
  [role="tabpanel"] {
    transition: none;
  }
}
```

**Source:** https://css-tricks.com/almanac/rules/m/media/prefers-reduced-motion/

### JavaScript Tab Initialization (Enhanced from Placeholder)

```javascript
function initTabs() {
  const tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;

  const tabs = tablist.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');

  function switchTab(index) {
    // Deselect all tabs and set tabindex
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', i === index);
      tab.setAttribute('tabindex', i === index ? '0' : '-1');
    });

    // Hide all panels, show active panel
    panels.forEach((panel, i) => {
      if (i === index) {
        // Fade in: remove hidden, set opacity to 1
        panel.hidden = false;
        // Force reflow to ensure transition applies
        panel.offsetHeight;
        panel.style.opacity = '1';
      } else {
        // Fade out: set opacity to 0, then hidden
        // Check if we support transitions
        const supportsTransitions = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
        if (supportsTransitions) {
          panel.style.opacity = '0';
          setTimeout(() => {
            panel.hidden = true;
            panel.style.opacity = ''; // Reset for next animation
          }, 200); // Match CSS transition duration
        } else {
          // No animation: hide immediately
          panel.hidden = true;
        }
      }
    });

    // Move focus to active tab
    tabs[index].focus();
  }

  tabs.forEach((tab, index) => {
    // Set initial tabindex
    tab.setAttribute('tabindex', index === 0 ? '0' : '-1');

    // Click handler
    tab.addEventListener('click', () => {
      switchTab(index);
    });

    // Arrow key navigation
    tab.addEventListener('keydown', (e) => {
      let targetIndex = index;

      if (e.key === 'ArrowLeft') {
        targetIndex = index === 0 ? tabs.length - 1 : index - 1;
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        targetIndex = index === tabs.length - 1 ? 0 : index + 1;
        e.preventDefault();
      } else {
        return;
      }

      switchTab(targetIndex);
    });
  });

  // Set initial panel state
  switchTab(0);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initFooterYear();
  initTabs();
});
```

**Source:** W3C APG pattern (https://www.w3.org/WAI/ARIA/apg/practices/tabpanel/) combined with project's existing initTabs() placeholder and prefers-reduced-motion best practices.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| jQuery-based tab plugins | Vanilla JavaScript + W3C APG pattern | Widely adopted post-2016 | Removed dependency overhead, improved accessibility by standardizing on ARIA pattern instead of custom solutions |
| display: none for hiding | hidden attribute + aria-hidden | HTML5 standard (W3C 2008+) | Better semantic clarity for assistive technology; hidden is explicit intent vs. CSS presentation-only |
| All transform animations | Opacity-only fades with prefers-reduced-motion | WCAG 2.1 guideline (2018), browser support 2020+ | Reduced motion support became expected; transform animations now considered inaccessible for vestibular disorders |
| Manual tabindex management | Roving tabindex pattern (active tab tabindex="0", others "-1") | APG recommends post-2016 | Improves keyboard UX for custom controls; reduces tab key presses needed to navigate |
| setTimeout-based focus timing | requestAnimationFrame or CSS transition events | Modern APIs standardized circa 2015+ | More reliable animation coordination; reduces race conditions |

**Deprecated/outdated:**
- jQuery Tab plugins (e.g., jQuery UI Tabs): Custom solutions replaced by standard APG pattern; modern browsers have native focus management and CSS transitions making custom JS unnecessary
- Slide/accordion patterns without fade alternatives: Transforms known to trigger vestibular motion disorder; fade-only approach is now expected per WCAG 2.1 AA
- Custom focus rings without :focus-visible: outline: 3px solid color is standard now; custom rings can hide focus from keyboard-only users if not carefully managed

## Open Questions

1. **Fade Animation Coordination with Hidden Attribute**
   - What we know: CSS transitions cannot animate elements with hidden attribute; JavaScript must coordinate opacity and hidden toggling
   - What's unclear: Exact timing strategy — should we use setTimeout with hardcoded 200ms duration, or listen to transitionend event?
   - Recommendation: Use setTimeout(200ms) matching CSS transition duration (0.2s). transitionend is more robust but adds event listener overhead; for a single 0.2s fade, setTimeout is acceptable. Add a comment noting the hardcoded duration for maintainability.

2. **Pill Button Styling — New Class or Attribute Selector?**
   - What we know: Existing CSS has [role="tab"] selector rules; context.md specifies pill button styling consistent with .btn classes
   - What's unclear: Should we extend [role="tab"] styling in css/style.css or create a new .tab-button class for clarity?
   - Recommendation: Use [role="tab"] attribute selector to minimize CSS additions and leverage semantic HTML. If pill styling conflicts with other [role="tab"] uses elsewhere, create .tab-button class. For Phase 4 scope, one tab interface, attribute selector is sufficient.

3. **Panel Content Padding and Spacing**
   - What we know: Locked decision specifies consistent padding (--spacing-3xl vertical, --spacing-md mobile sides)
   - What's unclear: Is this padding on the panel itself ([role="tabpanel"]) or on a wrapper div inside the panel?
   - Recommendation: Apply padding to [role="tabpanel"] directly for simplicity. Reduces nesting and makes CSS rule clear. If individual panels need different internal spacing, add utility classes inside each panel.

4. **Decorative Header Element on Right (Optional)**
   - What we know: Claude's discretion allows optional SVG icon or illustration on right side of header
   - What's unclear: Should SVG be added to students.html or deferred?
   - Recommendation: Defer to Phase 4 planning. Leave space for icon in page header template but implement only if time permits in plan. If included, use SVG with aria-hidden="true" focusable="false" per project conventions.

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual verification (no automated test framework configured) |
| Config file | None — Wave 0 will establish testing approach in Phase 5 |
| Quick run command | Manual browser testing: Open students.html, check tab switching and keyboard navigation |
| Full suite command | Full page validation: WCAG accessibility checkers, keyboard nav, animation testing with prefers-reduced-motion |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Verification Command | Status |
|--------|----------|-----------|---------------------|---------|
| STU-01 | Page header displays navy background with white H1 "Students Hub" | Visual | Open students.html, inspect header styling in DevTools | Wave 0 |
| STU-02 | Lead text displays white on navy background | Visual | DevTools: check text color contrast, verify white text on #001E5F | Wave 0 |
| STU-03 | Three tab buttons visible and clickable | Functional | Click each tab, verify aria-selected updates and content changes | Wave 0 |
| STU-04 | Tab panel switching works (click hides old, shows new) | Functional | Click tabs in sequence, verify only one panel visible at a time; inspect hidden attribute | Wave 0 |
| STU-05 | ARIA roles applied (tablist, tab, tabpanel) | Accessibility | Inspect HTML with DevTools, verify role attributes present on correct elements | Wave 0 |
| STU-06 | Arrow key navigation switches tabs (left/right arrows wrap) | Keyboard | Tab to tab 1, press Right arrow, verify Tab 2 becomes active; from Tab 3 press Right, verify Tab 1 activates | Wave 0 |
| STU-07 | aria-selected attribute updates correctly | Accessibility | Click each tab, inspect aria-selected in DevTools, verify "true" on active, "false" on inactive | Wave 0 |
| STU-08 | Current Students tab contains office hours, Blackboard link, email, accommodations | Visual/Content | Click Current tab, verify all four content sections present and legible | Wave 0 |
| STU-09 | Prior Students tab contains Stay in Touch, Recommendation Letters card with requirements | Visual/Content | Click Prior tab, verify card styling (yellow border) and bulleted requirements list | Wave 0 |
| STU-10 | Prospective Students tab contains Undergraduate Research card, Graduate Admissions link | Visual/Content | Click Prospective tab, verify card styling (yellow border) and link to graduate admissions | Wave 0 |
| STU-11 | Recommendation Letters card has yellow top border (4px) | Visual | Inspect Recommendation Letters card in DevTools, verify border-top: 4px solid #FFD82B | Wave 0 |
| STU-12 | Undergraduate Research card has yellow top border (4px) | Visual | Inspect Undergraduate Research card in DevTools, verify border-top: 4px solid #FFD82B | Wave 0 |

**Automated Test Commands:** None — no test framework is configured in this project. Phase 4 implementation is manual verification only. Phase 5 will establish automated testing infrastructure if needed.

**Additional Manual Tests:**
- Keyboard accessibility: Tab through all focusable elements; verify focus order is logical (through tabs, then into active panel content, then to next section)
- Animation testing: Open DevTools > Rendering tab > Emulate CSS media feature prefers-reduced-motion > select "reduce" or "no-preference", then switch tabs — verify fade animation only plays when no-preference is set
- Responsive testing: Test students.html at 320px (mobile), 640px (tablet), 1024px (desktop); verify tab container and panels layout correctly at all breakpoints
- Screen reader testing (manual, requires NVDA/JAWS/VoiceOver): Announce tab elements and verify screen reader reads tab labels, aria-selected state, and panel content association

### Sampling Rate

- **Per task commit:** Manual browser smoke test — open students.html, click each tab, verify content switches and fade animation works
- **Per wave merge:** Full keyboard navigation test (Tab key through all elements, arrow keys in tab list, focus visible on all interactive elements) + animation test with prefers-reduced-motion enabled
- **Phase gate:** W3C HTML5 validation (no errors), accessibility audit (no ARIA violations), responsive layout test (3 breakpoints: 320/640/1024px)

### Wave 0 Gaps

- [ ] Automated test suite setup (Phase 5 responsibility, not Phase 4)
- [ ] Test runner configuration (jest, vitest, or playwright for E2E tests if added in Phase 5)
- [ ] Accessibility linting rules (ESLint + axe-core, if Phase 5 adds CI/CD)

*(Current state: No gaps for Phase 4 since manual verification is the defined approach. Phase 5 will establish automated testing if project scales beyond single faculty website.)*

## Sources

### Primary (HIGH confidence)

- **W3C Authoring Practices Guide (APG) — ARIA Tabs Pattern:** https://www.w3.org/WAI/ARIA/apg/patterns/tabs/ — Authoritative specification for accessible tab interfaces, including roles, properties, keyboard interactions, and implementation examples
- **W3C APG Practices — Tab (Tabs) Implementation Guide:** https://www.w3.org/WAI/ARIA/apg/practices/tabpanel/ — Detailed implementation guidance with code examples for the tab pattern
- **MDN Web Docs — prefers-reduced-motion:** https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion — Official documentation for CSS media query respecting motion preferences; includes browser support and implementation examples
- **CSS-Tricks Almanac — prefers-reduced-motion:** https://css-tricks.com/almanac/rules/m/media/prefers-reduced-motion/ — Industry best practices for fade animations and motion accessibility
- **Project Context7:** Existing codebase (css/style.css, js/main.js, CLAUDE.md) — Local source of truth for design tokens, existing component patterns, and project constraints

### Secondary (MEDIUM confidence)

- **Josh Collinsworth Blog — "Ten tips for better CSS transitions and animations":** https://joshcollinsworth.com/blog/great-transitions — Community best practices for smooth transitions and animation performance
- **HubSpot Blog — "How to Add a CSS Fade-in Transition Animation":** https://blog.hubspot.com/website/css-fade-in — Practical guide to CSS fade-in implementations
- **DEV Community — "Fading in... and fading out with CSS transitions":** https://dev.to/nicm42/fading-in-and-fading-out-with-css-transitions-3lc1 — Community discussion of CSS fade techniques

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — W3C APG is authoritative; CSS opacity transitions are native browser standards (Chrome 26+, Firefox 16+, Safari 9+, Edge 12+); vanilla JavaScript APIs (addEventListener, getAttribute, setAttribute, focus()) are standard since ES5
- Architecture: HIGH — W3C APG pattern is published standard with wide adoption; CSS fade animations widely documented and tested; project codebase provides clear precedent for styling patterns
- Pitfalls: HIGH — Common accessibility mistakes (tabindex mismanagement, missing aria-controls, animation accessibility) are well-documented in APG and WCAG 2.1 AA guidelines; project's Phase 1 planning and existing code demonstrate understanding of these patterns

**Research date:** 2026-03-27
**Valid until:** 2026-04-27 (30 days — W3C APG and CSS standards are stable; animation best practices may evolve slightly with new browser features, but core pattern is stable)

---

*Phase: 04-students-hub*
*Research completed: 2026-03-27*
