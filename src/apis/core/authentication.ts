import axios, {
  HttpStatusCode,
  InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';

import { AUTH_REISSUE_API_URL } from '@/constants/apiRoutes';

const TOKEN_EXPIRED_MESSAGE = '기한이 만료된 토큰입니다';

interface ReissueResponse {
  accessToken: string;
}

export const attachAccessToken = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const refreshExpiredToken = async (error: unknown) => {
  if (
    isAxiosError(error) &&
    error.config &&
    error.response?.status === HttpStatusCode.Unauthorized &&
    error.response?.data.message === TOKEN_EXPIRED_MESSAGE
  ) {
    const { data } = await axios<ReissueResponse>(
      `${import.meta.env.VITE_BASE_URL}${AUTH_REISSUE_API_URL}`,
      {
        withCredentials: true,
      },
    );
    localStorage.setItem('accessToken', data.accessToken);

    const newAxiosConfig = {
      ...error.config,
      headers: {
        ...error.config.headers,
        Authorization: `Bearer ${data.accessToken}`,
      },
    };

    return axios(newAxiosConfig);
  }

  throw error;
};
