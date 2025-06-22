import { useEffect, useState } from 'react';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | null>(null);

  // On initial load, read from localStorage
  useEffect(() => {
    const storedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    setCurrentTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  // When theme changes, update DOM and localStorage
  useEffect(() => {
    if (!currentTheme) return;

    localStorage.setItem('theme', currentTheme);
    document.documentElement.classList.remove(currentTheme === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.add(currentTheme);
  }, [currentTheme]);

  return [currentTheme, setCurrentTheme] as const;
};

export default useTheme;
