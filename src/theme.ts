// src/theme.ts
export function applySavedThemeImmediately() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

  if (shouldUseDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
