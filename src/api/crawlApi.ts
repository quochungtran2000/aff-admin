import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';
import { CrawlHistory, PagingResponse } from '../types';

const adminPath = '/admin';

export type getCrawlHistoryVars = {
  page?: number;
  pageSize?: number;
  search?: number;
};

const crawlApi = {
  getCrawlHistory: (params?: getCrawlHistoryVars): Promise<AxiosResponse<PagingResponse<CrawlHistory>>> => {
    const url = `${adminPath}/crawl/history`;
    return axiosClient.get(url, { params });
  },
  createCrawlHistory: (): Promise<AxiosResponse<any>> => {
    const url = `${adminPath}/crawl`;
    return axiosClient.post(url);
  },
};

export default Object.freeze(crawlApi);
