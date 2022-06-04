import { AxiosResponse } from 'axios';
import { axiosClient } from '../config';
import { PagingResponse, Post } from '../types';

export type getPostsVars = {
  page?: number;
  pageSize?: number;
  search?: string;
  type?: string;
};

const postApi = {
  getPosts: (params: getPostsVars): Promise<AxiosResponse<PagingResponse<Post>>> => {
    const url = '/website/post';
    return axiosClient.get(url, {params});
  },
};

export default Object.freeze(postApi);
