import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';
import { EcommerceCategory } from '../types';

export type CrawlCategoryVars = {
  merchant?: 'tiki' | 'lazada' | 'shopee';
};

const categoryApi = {
  getCrawlCategory: (params: CrawlCategoryVars): Promise<AxiosResponse<EcommerceCategory[]>> => {
    const url = `/admin/category/ecommerce`;
    return axiosClient.get(url, { params });
  },
};

export default Object.freeze(categoryApi);
