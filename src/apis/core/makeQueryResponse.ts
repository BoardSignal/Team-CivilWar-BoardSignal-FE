import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const extractData = ({ data }: AxiosResponse) => data;

/**
 * 응답 코드가 2xx 대일 때 data로 응답해요.
 */
export const makeQueryResponse =
  (axiosInstance: AxiosInstance) =>
  <T>(config: AxiosRequestConfig): Promise<T> =>
    axiosInstance({
      ...config,
    }).then(extractData);
