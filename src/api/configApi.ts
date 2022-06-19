import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';
import { AffConfig, PagingResponse } from '../types';

export type configVars = {
  name: string;
  value: string;
};
const url = `/admin/config`;

const ConfigApi = {
  getConfigs: (): Promise<AxiosResponse<PagingResponse<AffConfig>>> => {
    return axiosClient.get(url);
  },
  createConfig: (data: configVars) => {
    return axiosClient.post(url, data);
  },
  updateConfig: (data: configVars) => {
    return axiosClient.put(url, data);
  },
  deleteConfig: (configName: string) => {
    return axiosClient.delete(`${url}/${configName}`);
  },
};

export default Object.freeze(ConfigApi);
