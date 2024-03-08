import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import { enableAPIMocks } from './mocks';
import activateColorTheme from './utils/activateColorTheme.ts';

(async () => {
  if (import.meta.env.DEV && import.meta.env.VITE_USE_MSW) {
    await enableAPIMocks();
  }

  activateColorTheme();

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
})();
