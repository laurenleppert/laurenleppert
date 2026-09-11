// Set the theme before styles load to avoid a flash of the other palette.
(() => {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch { /* Storage is optional. */ }
  const theme = saved === 'light' || saved === 'dark'
    ? saved
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
})();
