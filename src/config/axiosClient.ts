/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';
import queryString from 'querystring';

const axiosClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
  paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    (config as any).headers.Authorization = token ? `Bearer ${token}` : '';
  }
  // (config as any).headers["x-private-key"] =
  //   process.env.REACT_APP_X_PRIVATE_KEY;
  // (config as any).headers["x-application-name"] =
  //   process.env.REACT_APP_X_APPLICATION_NAME;

  return config;
});

axiosClient.interceptors.response.use((response) => {
  return response;
});

export default axiosClient;
