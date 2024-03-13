import { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import { REGISTER_PAGE_URL } from '@/constants/pageRoutes';
import { STORAGE_KEY_ACCESS_TOKEN } from '@/constants/storageKeys';

const RedirectOnAuthentication = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // useEffect 가 없으면 렌더링 순서때문인지 라우팅이 정상동작을 안합기에 추가합니다.
  useEffect(() => {
    const accessToken = searchParams.get('access-token');
    const isJoined = searchParams.get('is-joined');

    if (accessToken) {
      localStorage.setItem(STORAGE_KEY_ACCESS_TOKEN, accessToken);
    }

    navigate(isJoined === 'true' ? '/' : `${REGISTER_PAGE_URL}`);
  }, [navigate, searchParams]);

  return null;
};

export default RedirectOnAuthentication;
