import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';
import { Category, EcommerceCategory } from '../types';
import { BaseResponse } from '../types';

export type CrawlCategoryVars = {
  merchant?: 'tiki' | 'lazada' | 'shopee';
};

export type CreateCategoryPayload = {
  title: string;
  mapCategory: string[];
};

export type UpdateCategoryPayload = {
  categoryId: number;
  active: boolean;
  crawl: boolean;
  website: boolean;
  app: boolean;
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
  createCategory: (data: CreateCategoryPayload): Promise<AxiosResponse<BaseResponse>> => {
    const url = `/admin/category`;
    return axiosClient.post(url, data);
  },
  updateCateory: (data: UpdateCategoryPayload): Promise<AxiosResponse<BaseResponse>> => {
    const url = `/admin/category`;
    return axiosClient.put(url, data);
  },
  deleteCategory: ({ categoryId }: { categoryId: number }): Promise<AxiosResponse<BaseResponse>> => {
    const url = `/admin/category/${categoryId}`;
    return axiosClient.delete(url);
  },
};

export default Object.freeze(categoryApi);
