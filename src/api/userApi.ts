import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';
import { PagingResponse, User } from '../types';

export type getUserVars = {
  page?: number;
  pageSize?: number;
  search?: string;
  username?: string;
  fullname?: string;
  email?: string;
  phoneNumber?: string;
};

const userApi = {
  getUser: (params?: getUserVars): Promise<AxiosResponse<PagingResponse<User>>> => {
    const url = '/admin/user';
    return axiosClient.get(url, { params });
  },
};

export default Object.freeze(userApi);
