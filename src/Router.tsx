import { createBrowserRouter } from 'react-router-dom';

import ResponsiveLayoutWrapper from './components/Layout';
import BoardGameDetailPage from './pages/BoardGameDetail';
import GatheringCreatePage from './pages/GatheringCreate';
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
        path: 'profile/:userId',
        element: <ProfilePage />,
      },
      {
        path: 'board-game-detail',
        element: <BoardGameDetailPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'gatherings/create',
        element: <GatheringCreatePage />,
      },
      {
        path: 'gatherings/:gatheringId',
        element: <HomePage />,
      },
    ],
  },
]);
