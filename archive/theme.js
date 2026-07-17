// Theme toggle: prefers-color-scheme aware, persisted, sun/moon icon
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Safe localStorage helpers (handles private browsing mode)
  function getStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function setStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Storage unavailable (private browsing, etc.)
    }
  }

  // Determine starting theme
  const saved = getStorage('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = saved || (prefersDark ? 'dark' : 'light');

  applyTheme(theme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = (root.classList.contains('light')) ? 'dark' : 'light';
      applyTheme(theme);
      setStorage('theme', theme);
    });
  }

  function applyTheme(mode) {
    if (mode === 'light') {
      root.classList.add('light');
      if (toggle) toggle.textContent = '☀️';
      toggle?.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      root.classList.remove('light');
      if (toggle) toggle.textContent = '🌙';
      toggle?.setAttribute('aria-label', 'Switch to light theme');
    }
  }
});
