import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import { enableAPIMocks } from './mocks';
import { activateColorTheme } from './utils/activateColorTheme.ts';

activateColorTheme();

(async () => {
  if (import.meta.env.DEV && import.meta.env.VITE_USE_MSW === 'true') {
    await enableAPIMocks();
  }

  const KAKAO_APP_KEY =
    import.meta.env.VITE_KAKAO_APP_KEY ||
    import.meta.env.STORYBOOK_KAKAO_APP_KEY;

  window.Kakao.init(KAKAO_APP_KEY);

  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
})();
