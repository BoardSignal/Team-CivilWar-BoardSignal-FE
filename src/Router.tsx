import { createBrowserRouter } from 'react-router-dom';

import { ResponsiveLayoutWrapper } from './components/layout';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/Login';

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
  {
    path: 'login',
    element: <LoginPage />,
  },
]);
