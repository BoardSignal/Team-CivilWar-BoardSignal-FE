import { useState } from 'react';

import { STORAGE_KEY_THEME } from '@/constants/storageKeys';

const systemDarkCSS = '(prefers-color-scheme: dark)';

const isDarkTheme = () => {
  const isSystemDark = matchMedia(systemDarkCSS).matches;
  const theme = localStorage.getItem(STORAGE_KEY_THEME);

  return (!theme && isSystemDark) || theme === 'dark';
};

/**
 * 시스템 테마와 localstorage의 테마 설정에 따라 dark mode를 활성화/비활성화해요.
 */
const activateColorTheme = () => {
  document.documentElement.classList[isDarkTheme() ? 'add' : 'remove']('dark');
};

/**
 * dark mode를 활성화/비활성화하는 hook이에요.
 */
const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(isDarkTheme());

  const handleDarkModeToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY_THEME, newTheme);
    setDarkMode(!isDarkMode);
  };

  return { isDarkMode, handleDarkModeToggle };
};

export { activateColorTheme, useDarkMode };
