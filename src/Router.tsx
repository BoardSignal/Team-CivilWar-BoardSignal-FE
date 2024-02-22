import { createBrowserRouter } from 'react-router-dom';

import { ResponsiveLayoutWrapper } from './components/Layout';
import BoardGameDetail from './pages/BoardGameDetail';
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
      {
        path: 'board-game-detail',
        element: <BoardGameDetail />,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
]);
