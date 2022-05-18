import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';
import { Category, EcommerceCategory } from '../types';
import { BaseResponse } from '../types';

export type CrawlCategoryVars = {
  merchant?: 'tiki' | 'lazada' | 'shopee';
};

export type CategoryPayload = {
  title: string;
  mapCategory: string[];
};
const categoryApi = {
  getCrawlCategory: (params: CrawlCategoryVars): Promise<AxiosResponse<EcommerceCategory[]>> => {
    const url = `/admin/category/ecommerce`;
    return axiosClient.get(url, { params });
  },
  updateCrawlCategory: (data: EcommerceCategory): Promise<AxiosResponse<BaseResponse>> => {
    const url = `/admin/category/ecommerce`;
    return axiosClient.put(url, data);
  },
  getCategory: (): Promise<AxiosResponse<Category[]>> => {
    const url = `/admin/category`;
    return axiosClient.get(url);
  },
  createCategory: (data: CategoryPayload): Promise<AxiosResponse<BaseResponse>> => {
    const url = `/admin/category`;
    return axiosClient.post(url, data);
  },
};

export default Object.freeze(categoryApi);
