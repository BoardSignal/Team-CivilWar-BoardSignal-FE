const systemDarkCSS = '(prefers-color-scheme: dark)';

const isDarkTheme = () => {
  const isSystemDark = matchMedia(systemDarkCSS).matches;
  const isConfigWhite = localStorage.theme === 'light';

  return !isConfigWhite || isSystemDark;
};

/**
 * 시스템 테마와 localstorage의 테마 설정에 따라 dark mode를 활성화/비활성화해요.
 */
const activateColorTheme = () => {
  document.documentElement.classList[isDarkTheme() ? 'add' : 'remove']('dark');
};

export default activateColorTheme;
