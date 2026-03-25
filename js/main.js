/**
 * Main site JavaScript
 * Hamburger navigation toggle, ARIA tabs pattern, footer year
 */

// ==============================
// 1. HAMBURGER NAVIGATION TOGGLE
// ==============================
function initNavToggle() {
  const toggle = document.querySelector('.nav__hamburger');
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.nav__menu');

  if (!toggle || !nav || !menu) return;

  // Click handler for hamburger button
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('nav--open');
  });

  // Close menu when clicking a nav link (mobile UX)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--open');
    });
  });
}

// ==============================
// 2. FOOTER YEAR INITIALIZATION
// ==============================
function initFooterYear() {
  const yearSpan = document.querySelector('.footer__year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ==============================
// 3. ARIA TABS (Phase 4 placeholder)
// ==============================
function initTabs() {
  // Placeholder for Students page tab interface (Phase 4)
  const tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;

  const tabs = tablist.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach((tab, index) => {
    // Click to switch tab
    tab.addEventListener('click', () => {
      // Hide all panels
      panels.forEach(p => { p.hidden = true; });

      // Deselect all tabs
      tabs.forEach(t => t.setAttribute('aria-selected', 'false'));

      // Show selected panel and mark tab active
      if (panels[index]) panels[index].hidden = false;
      tab.setAttribute('aria-selected', 'true');
      tab.focus();
    });

    // Arrow key navigation (left/right)
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

      tabs[targetIndex].click();
      tabs[targetIndex].focus();
    });
  });
}

// ==============================
// 4. INITIALIZE ALL
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initFooterYear();
  initTabs();
});
