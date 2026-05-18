export const THEME_STORAGE_KEY = 'altovex-theme';

export const themeInitScript = `
(function () {
  var storageKey = '${THEME_STORAGE_KEY}';
  var root = document.documentElement;

  try {
    var savedTheme = localStorage.getItem(storageKey);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : prefersDark
        ? 'dark'
        : 'light';

    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
  } catch (error) {
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';
  }
})();
`;