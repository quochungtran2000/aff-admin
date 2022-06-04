import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';
import { PagingResponse, Product, ProductTempalte } from '../types';

export type getProductVars = {
  page?: number;
  pageSize?: number;
  search?: string;
};

export type getCrawlProductQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  merchant?: string;
};

const productApi = {
  getCrawlProduct: (params: getCrawlProductQuery): Promise<AxiosResponse<PagingResponse<Product>>> => {
    const url = 'admin/product';
    return axiosClient.get(url, { params });
  },
  getProduct: (params: getProductVars): Promise<AxiosResponse<PagingResponse<ProductTempalte>>> => {
    const url = 'admin/product/template';
    return axiosClient.get(url, { params });
  },
  getProductDetail: (productId: number) => {
    const url = `admin/product/template/${productId}`;
    return axiosClient.get(url);
  },
};

export default Object.freeze(productApi);
