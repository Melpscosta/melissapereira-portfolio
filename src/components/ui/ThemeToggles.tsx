import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let isDark = false;

    if (savedTheme === 'dark') {
      isDark = true;
    } else if (!savedTheme && systemPrefersDark) {
      isDark = true;
    }

    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
    setDarkMode(isDark);
    console.log('[Theme] Inicializado como', isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const isNowDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
    setDarkMode(isNowDark);
    console.log('[Theme] Alternado para', isNowDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-white hover:text-pink-400 transition text-xs"
      aria-label="Alternar tema"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
