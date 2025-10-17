import { useState, useEffect, useCallback } from 'react';
import { Theme } from '../types';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return Theme.LIGHT;
  }
  const storedTheme = window.localStorage.getItem('theme');
  // Default to light theme unless dark is explicitly set in storage
  if (storedTheme === Theme.DARK) {
    return Theme.DARK;
  }
  return Theme.LIGHT;
};

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }, []);

  return [theme, toggleTheme];
};