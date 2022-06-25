import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';
import { CrawlHistory, CrawlProductHistory, PagingResponse } from '../types';

const adminPath = '/admin';

export type getCrawlHistoryVars = {
  page?: number;
  pageSize?: number;
  search?: number;
};

export type getCrawlProductHistoryVars = {
  page?: number;
  pageSize?: number;
  search?: number;
  id?: number;
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
  getCrawlProduct: ({
    id,
    ...params
  }: getCrawlProductHistoryVars): Promise<AxiosResponse<PagingResponse<CrawlProductHistory>>> => {
    const url = `${adminPath}/crawl/history/${id}`;
    return axiosClient.get(url, { params });
  },
};

export default Object.freeze(crawlApi);
