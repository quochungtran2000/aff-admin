import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';

export type LoginVars = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

const LoginApi = (vars: LoginVars): Promise<AxiosResponse<LoginResponse>> => {
  const url = `/auth/login`;
  return axiosClient.post(url, vars);
};

export default Object.freeze(LoginApi);
