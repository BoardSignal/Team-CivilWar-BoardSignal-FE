import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

import { getLocalStorage } from '@/utils/localStorage';

const HTTP_METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch',
} as const;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken: string = getLocalStorage('accessToken', '');
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response.data,
  async error => {
    const { response, config } = error;
    if (
      response &&
      response.status === 401 &&
      response.data.message === 'Token expired'
    ) {
      /*
       * TODO : accessToken 재발급 로직 추가 예정
       */
      return axios(config);
    }
  },
);

const createApiMethod =
  (_axiosInstance: AxiosInstance, methodType: Method) =>
  <T>(config: AxiosRequestConfig): Promise<T> => {
    return _axiosInstance({
      ...config,
      method: methodType,
    });
  };
export const api = {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};
