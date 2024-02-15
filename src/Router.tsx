import { createBrowserRouter } from 'react-router-dom';

import { ResponsiveLayoutWrapper } from './components/layout';
import { HomePage } from './pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ResponsiveLayoutWrapper />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'chat',
        element: <HomePage />,
      },
      {
        path: 'game-info',
        element: <HomePage />,
      },
      {
        path: 'notifications',
        element: <HomePage />,
      },
      {
        path: 'me',
        element: <HomePage />,
      },
    ],
  },
]);
