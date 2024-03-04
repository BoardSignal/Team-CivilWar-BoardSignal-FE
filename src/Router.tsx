import { createBrowserRouter } from 'react-router-dom';

import { ResponsiveLayoutWrapper } from './components/Layout';
import BoardGameDetail from './pages/BoardGameDetail';
import GatheringCreatePage from './pages/GatheringCreate';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/Login';
import ProfilePage from './pages/MyProfile';

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
        path: 'profile/:userId',
        element: <ProfilePage />,
      },
      {
        path: 'board-game-detail',
        element: <BoardGameDetail />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'gatherings/create',
        element: <GatheringCreatePage />,
      },
    ],
  },
]);
