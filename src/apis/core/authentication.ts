import axios, {
  HttpStatusCode,
  InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';

const TOKEN_EXPIRED_MESSAGE = 'Token expired';

export const attachAccessToken = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const refreshExpiredToken = (error: unknown) => {
  if (
    isAxiosError(error) &&
    error.config &&
    error.response?.status === HttpStatusCode.Unauthorized &&
    error.response?.data.message === TOKEN_EXPIRED_MESSAGE
  ) {
    // TODO: refresh 과정을 수행할 코드의 위치에요.
    return axios(error.config);
  }

  throw error;
};
