import { createBrowserRouter } from 'react-router-dom';

import ResponsiveLayoutWrapper from './components/Layout';
import BoardGameDetailPage from './pages/BoardGameDetail';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/Login';
import NotificationListPage from './pages/NotificationList';
import ProfilePage from './pages/Profile';
import RedirectOnAuthentication from './pages/RedirectOnAuthentication';

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
        path: 'board-games/:boardGameId',
        element: <BoardGameDetailPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '/redirect',
        element: <RedirectOnAuthentication />,
      },
    ],
  },
]);
