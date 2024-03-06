import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import { enableAPIMocks } from './mocks';

(async () => {
  if (import.meta.env.DEV && import.meta.env.VITE_USE_MSW) {
    await enableAPIMocks();
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
})();
