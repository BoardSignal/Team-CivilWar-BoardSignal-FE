import { Route, Routes, useLocation } from 'react-router-dom';

import AuthorizedRoute from './components/AuthorizedRoute';
import {
  BOARD_GAMES_PAGE_URL,
  CHATS_PAGE_URL,
  GATHERINGS_CREATE_PAGE_URL,
  GATHERINGS_PAGE_URL,
  LOGIN_PAGE_URL,
  NOTIFICATIONS_PAGE_URL,
  USERS_PAGE_URL,
} from './constants/pageRoutes';
import BoardGameDetailPage from './pages/BoardGameDetail';
import GatheringCreatePage from './pages/GatheringCreate';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/Login';
import NotificationListPage from './pages/NotificationList';
import ProfilePage from './pages/Profile';
import RedirectOnAuthentication from './pages/RedirectOnAuthentication';

/**
 * 페이지 트랜지션을 제공하기 위해 `createBrowserRouter` 대신 `Routes` 요소를 사용해요.
 */
const Router = () => {
  // TODO: 동작 방식에 대한 설명 추가하기
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path='' element={<HomePage />} />
      <Route path={LOGIN_PAGE_URL} element={<LoginPage />} />
      <Route path={CHATS_PAGE_URL} element={<HomePage />} />
      <Route path={BOARD_GAMES_PAGE_URL} element={<HomePage />} />
      <Route
        path={`${BOARD_GAMES_PAGE_URL}/:boardGameId`}
        element={<BoardGameDetailPage />}
      />
      <Route
        path={NOTIFICATIONS_PAGE_URL}
        element={
          <AuthorizedRoute>
            <NotificationListPage />
          </AuthorizedRoute>
        }
      />
      <Route
        path={`${USERS_PAGE_URL}/me`}
        element={
          <AuthorizedRoute>
            <ProfilePage />
          </AuthorizedRoute>
        }
      />
      <Route
        path={`${USERS_PAGE_URL}/:userId`}
        element={
          <AuthorizedRoute>
            <ProfilePage />
          </AuthorizedRoute>
        }
      />
      <Route
        path={GATHERINGS_CREATE_PAGE_URL}
        element={
          <AuthorizedRoute>
            <GatheringCreatePage />
          </AuthorizedRoute>
        }
      />
      <Route
        path={`${GATHERINGS_PAGE_URL}/:gatheringId`}
        element={<HomePage />}
      />
      <Route path='/redirect' element={<RedirectOnAuthentication />} />
    </Routes>
  );
};

export default Router;
