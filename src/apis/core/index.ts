import axios from 'axios';

import { API_BASE_URL } from '@/constants/apiRoutes';

import { attachAccessToken, refreshExpiredToken } from './authentication';
import { makeMutationResponse } from './makeMutationResponse';
import { makeQueryResponse } from './makeQueryResponse';

const HTTP_METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch',
} as const;

const TIME_OUT = 2000;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(attachAccessToken);
axiosInstance.interceptors.response.use(null, refreshExpiredToken);

export const api = {
  get: makeQueryResponse(axiosInstance),
  post: makeMutationResponse(axiosInstance, HTTP_METHODS.POST),
  patch: makeMutationResponse(axiosInstance, HTTP_METHODS.PATCH),
  put: makeMutationResponse(axiosInstance, HTTP_METHODS.PUT),
  delete: makeMutationResponse(axiosInstance, HTTP_METHODS.DELETE),
};
