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
// 3. ARIA TABS (Students Hub)
// ==============================
function initTabs() {
  const tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;

  const tabs = tablist.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');

  // ---- Helper: check reduced motion preference ----
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // ---- Helper: fade out a panel, call onComplete when done ----
  function fadeOutPanel(panel, onComplete) {
    if (prefersReducedMotion()) {
      onComplete();
      return;
    }

    // Apply fade-out data attribute (CSS handles the transition)
    panel.setAttribute('data-fade', 'out');

    const handleTransitionEnd = () => {
      panel.removeEventListener('transitionend', handleTransitionEnd);
      clearTimeout(timeoutId);
      onComplete();
    };

    panel.addEventListener('transitionend', handleTransitionEnd);

    // Fallback timeout: 0.2s transition + 100ms buffer
    const timeoutId = setTimeout(() => {
      panel.removeEventListener('transitionend', handleTransitionEnd);
      onComplete();
    }, 300);
  }

  // ---- Helper: fade in a panel ----
  function fadeInPanel(panel) {
    if (prefersReducedMotion()) {
      panel.removeAttribute('data-fade');
      return;
    }

    // Force reflow so browser registers opacity: 0 before transitioning to 1
    void panel.offsetHeight;

    // Apply fade-in data attribute (CSS handles the transition)
    panel.setAttribute('data-fade', 'in');

    const handleTransitionEnd = () => {
      panel.removeEventListener('transitionend', handleTransitionEnd);
      panel.removeAttribute('data-fade');
    };

    panel.addEventListener('transitionend', handleTransitionEnd);
  }

  // ---- Helper: switch to tab at targetIndex ----
  function switchTab(targetIndex) {
    const currentTab = tablist.querySelector('[aria-selected="true"]');
    const currentPanel = document.getElementById(currentTab.getAttribute('aria-controls'));
    const targetTab = tabs[targetIndex];
    const targetPanel = document.getElementById(targetTab.getAttribute('aria-controls'));

    // Do nothing if already on this tab
    if (currentTab === targetTab) return;

    // Fade out current panel, then hide it
    fadeOutPanel(currentPanel, () => {
      currentPanel.hidden = true;
      currentPanel.removeAttribute('data-fade');
    });

    // Show new panel (start hidden at opacity:0 via data-fade="out" before fade-in)
    targetPanel.setAttribute('data-fade', 'out');
    targetPanel.hidden = false;
    fadeInPanel(targetPanel);

    // Update ARIA selected state
    currentTab.setAttribute('aria-selected', 'false');
    targetTab.setAttribute('aria-selected', 'true');

    // Update tabindex: active tab = 0, inactive = -1
    tabs.forEach((tab, idx) => {
      tab.setAttribute('tabindex', idx === targetIndex ? '0' : '-1');
    });

    // Move keyboard focus to the newly active tab
    targetTab.focus();
  }

  // ---- Step 1: Initialize tabindex values ----
  tabs.forEach((tab) => {
    const isActive = tab.getAttribute('aria-selected') === 'true';
    tab.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  // ---- Step 2: Initialize panel opacity ----
  panels.forEach((panel) => {
    if (!panel.hidden) {
      panel.setAttribute('data-fade', 'in');
    }
  });

  // ---- Step 3: Click handlers ----
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      switchTab(index);
    });
  });

  // ---- Step 4: Arrow key handlers (left/right with wrapping) ----
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
}

// ==============================
// 4. SIDEBAR NAVIGATION (Students Hub)
// ==============================
function initSidebarNav() {
  const sidebar = document.querySelector('.layout-1__sidebar');
  const selectEl = document.querySelector('.layout-1__select');
  if (!sidebar && !selectEl) return;

  const sidebarBtns = sidebar ? sidebar.querySelectorAll('.sidebar-nav__item') : [];
  const panels = document.querySelectorAll('.layout-1__panel');

  function showTopic(topicId) {
    // Hide all panels
    panels.forEach(function(panel) { panel.hidden = true; });

    // Deactivate all sidebar buttons
    sidebarBtns.forEach(function(btn) {
      btn.setAttribute('aria-selected', 'false');
    });

    // Show selected panel
    var target = document.getElementById('layout1-' + topicId);
    if (target) target.hidden = false;

    // Activate sidebar button
    if (sidebar) {
      var activeBtn = sidebar.querySelector('[data-controls="layout1-' + topicId + '"]');
      if (activeBtn) activeBtn.setAttribute('aria-selected', 'true');
    }

    // Sync mobile select
    if (selectEl) selectEl.value = topicId;
  }

  // Sidebar button click handlers
  sidebarBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var topicId = btn.getAttribute('data-controls').replace('layout1-', '');
      showTopic(topicId);
    });
  });

  // Mobile select change handler
  if (selectEl) {
    selectEl.addEventListener('change', function() {
      showTopic(selectEl.value);
    });
  }
}

// ==============================
// 5. INITIALIZE ALL
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initFooterYear();
  initTabs();
  initSidebarNav();
});
