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
    ],
  },
]);
