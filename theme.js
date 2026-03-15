(function () {
  var STORAGE_KEY = 'theme';
  var DARK = 'dark';
  var LIGHT = 'light';
  var META_COLORS = { dark: '#0b0b0f', light: '#ffffff' };

  function getPreferred() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === DARK || saved === LIGHT) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? LIGHT : DARK;
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', META_COLORS[theme]);
  }

  // Toggle handler — attached after DOM is ready
  function init() {
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || DARK;
        var next = current === DARK ? LIGHT : DARK;
        apply(next);
        localStorage.setItem(STORAGE_KEY, next);
        btn.setAttribute('aria-label', next === DARK ? 'Switch to light mode' : 'Switch to dark mode');
      });
      // Set initial aria-label
      var current = document.documentElement.getAttribute('data-theme') || DARK;
      btn.setAttribute('aria-label', current === DARK ? 'Switch to light mode' : 'Switch to dark mode');
    }

    // Mobile nav toggle
    var navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
      navToggle.addEventListener('click', function () {
        var links = document.querySelector('.nav-links');
        var expanded = this.getAttribute('aria-expanded') === 'true';
        links.classList.toggle('open');
        this.setAttribute('aria-expanded', String(!expanded));
      });
    }
  }

  // Apply theme immediately (anti-FOUC — also set by inline script, but this is a fallback)
  apply(getPreferred());

  // Bind toggle once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Listen for OS preference changes (only when no explicit user choice is stored)
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function () {
    if (!localStorage.getItem(STORAGE_KEY)) {
      apply(getPreferred());
    }
  });
})();
