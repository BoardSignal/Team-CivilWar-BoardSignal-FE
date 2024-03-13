import { createBrowserRouter } from 'react-router-dom';

import ResponsiveLayoutWrapper from './components/Layout';
import {
  BOARD_GAMES_PAGE_URL,
  CHATS_PAGE_URL,
  GATHERINGS_CREATE_PAGE_URL,
  GATHERINGS_PAGE_URL,
  GATHERINGS_UNFIX_PAGE_URL,
  LOGIN_PAGE_URL,
  NOTIFICATIONS_PAGE_URL,
  USERS_PAGE_URL,
} from './constants/pageRoutes';
import BoardGameDetailPage from './pages/BoardGameDetail';
import CreateBoardGameTipPage from './pages/CreateBoardGameTip';
import GatheringCreatePage from './pages/GatheringCreate';
import GatheringUnfixPage from './pages/GatheringUnfix';
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
        path: LOGIN_PAGE_URL,
        element: <LoginPage />,
      },
      {
        path: CHATS_PAGE_URL,
        element: <HomePage />,
      },
      {
        path: BOARD_GAMES_PAGE_URL,
        element: <HomePage />,
      },
      {
        path: `${BOARD_GAMES_PAGE_URL}/:boardGameId`,
        element: <BoardGameDetailPage />,
      },
      {
        path: NOTIFICATIONS_PAGE_URL,
        element: <NotificationListPage />,
      },
      {
        path: `${USERS_PAGE_URL}/me`,
        element: <ProfilePage />,
      },
      {
        path: `${USERS_PAGE_URL}/:userId`,
        element: <ProfilePage />,
      },
      {
        path: GATHERINGS_CREATE_PAGE_URL,
        element: <GatheringCreatePage />,
      },
      {
        path: `${GATHERINGS_PAGE_URL}/:gatheringId`,
        element: <HomePage />,
      },
      {
        path: `${GATHERINGS_UNFIX_PAGE_URL}/:gatheringId`,
        element: <GatheringUnfixPage />,
      },
      {
        // 해당 라우팅 주소는 백엔드와 협의된 내용으로 수정이 불가합니다.
        path: '/redirect',
        element: <RedirectOnAuthentication />,
      },
      {
        path: 'board-games/tip/create/:boardGameId/:boardGameTitle',
        element: <CreateBoardGameTipPage />,
      },
    ],
  },
]);
