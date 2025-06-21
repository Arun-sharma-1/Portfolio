import { useEffect, useState } from 'react';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  // On initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  // When theme changes
  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    document.documentElement.classList.remove(currentTheme === 'dark' ? 'light' : 'dark')
    document.documentElement.classList.add(currentTheme)
  }, [currentTheme]);

  return [currentTheme, setCurrentTheme] as const;
};

export default useTheme;
