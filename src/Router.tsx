import { createBrowserRouter } from 'react-router-dom';

import ResponsiveLayoutWrapper from './components/Layout';
import BoardGameDetailPage from './pages/BoardGameDetail';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/Login';
import ProfilePage from './pages/MyProfile';
import NotificationListPage from './pages/NotificationList';

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
        element: <NotificationListPage />,
      },
      {
        path: 'me',
        element: <HomePage />,
      },
      {
        path: 'users/:userId',
        element: <ProfilePage />,
      },
      {
        path: 'board-games/:gameId',
        element: <BoardGameDetailPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);
