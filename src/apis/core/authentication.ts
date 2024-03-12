import axios, {
  HttpStatusCode,
  InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';

import { API_BASE_URL, AUTH_REISSUE_API_URL } from '@/constants/apiRoutes';
import { TOKEN_EXPIRED_MESSAGE } from '@/constants/messages/error';
import { STORAGE_KEY_ACCESS_TOKEN } from '@/constants/storageKeys';

interface ReissueResponse {
  accessToken: string;
}

export const attachAccessToken = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);
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
      `${API_BASE_URL}${AUTH_REISSUE_API_URL}`,
      {
        withCredentials: true,
      },
    );
    localStorage.setItem(STORAGE_KEY_ACCESS_TOKEN, data.accessToken);

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
