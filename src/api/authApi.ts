import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';
import { BaseResponse, User } from '../types';

export type LoginVars = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type RegisterVars = {
  username: string;
  password: string;
  fullname: string;
  email: string;
  phoneNumber: string;
};

const authApi = {
  login: (data: LoginVars): Promise<AxiosResponse<LoginResponse>> => {
    const url = `/auth/login`;
    return axiosClient.post(url, data);
  },
  register: (data: RegisterVars): Promise<AxiosResponse<BaseResponse>> => {
    const url = `auth/register`;
    return axiosClient.post(url, data);
  },
  me: (): Promise<AxiosResponse<User>> => {
    const url = `/auth/me`;
    return axiosClient.get(url);
  },
};

export default Object.freeze(authApi);
