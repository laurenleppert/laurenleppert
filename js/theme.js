(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let hasPreference = false;
  try {
    const saved = localStorage.getItem('theme');
    hasPreference = saved === 'light' || saved === 'dark';
  } catch { /* The theme still works when storage is unavailable. */ }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
      meta.content = theme === 'dark' ? '#17131e' : '#fcfaff';
    });
    if (!toggle) return;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
    toggle.querySelectorAll('[data-theme-icon]').forEach(icon => {
      icon.toggleAttribute('hidden', icon.dataset.themeIcon !== nextTheme);
    });
  }

  applyTheme(root.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      hasPreference = true;
      applyTheme(theme);
      try { localStorage.setItem('theme', theme); } catch { /* Persistence is optional. */ }
    });
  }
  systemTheme.addEventListener('change', event => {
    if (!hasPreference) applyTheme(event.matches ? 'dark' : 'light');
  });
})();
