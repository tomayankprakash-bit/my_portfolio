import { useEffect, useState } from 'react';

// Manages light/dark theme, respects the visitor's system preference on
// first visit, and remembers their explicit choice after that.
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = window.localStorage.getItem('mp-theme');
      if (saved) return saved;
    } catch (e) {
      /* localStorage unavailable, fall through to system preference */
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem('mp-theme', theme);
    } catch (e) {
      /* ignore write errors (private browsing, etc.) */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
