import { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import { REGISTER_PAGE_URL } from '@/constants/pageRoutes';

const RedirectOnAuthentication = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = searchParams.get('access-token');
    const isJoined = searchParams.get('is-joined');

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    navigate(isJoined === 'true' ? '/' : `${REGISTER_PAGE_URL}`);
  }, [navigate, searchParams]);

  return null;
};

export default RedirectOnAuthentication;