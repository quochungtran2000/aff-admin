export type BaseResponse = {
  status: number;
  message: string;
};

export type PagingResponse<T> = {
  total: number;
  data: T[];
};

export type Role = {
  roleId: number;
  roleName: string;
  description: string;
  slug: string;
};

export type User = {
  userId: number;
  username: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  role: Role;
  imgUrl: string;
  roleId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type EcommerceCategory = {
  id: string;
  title: string;
  slug: string;
  active: boolean;
  crawl: boolean;
  subCategory?: EcommerceCategory[];
};

export type SubCategory = {
  crawlCategoryId: string;
  merchant: string;
  title: string;
  slug: string;
  active: boolean;
  crawl: boolean;
};

export type Category = {
  categoryId: number;
  title: string;
  slug: string | null;
  active: boolean;
  crawl: boolean;
  createdAt: Date;
  updatedAt: Date;
  childrens?: EcommerceCategory[];
};

export type Product = {
  productId: string;
  description: string;
  lastestCrawlAt: string;
  merchant: string;
  name: string;
  originalUrl: string;
  thumbnail: string;
  slug: string;
  average: number;
  sold: number;
  createdAt: string;
  updatedAt: string;
};

export type ProductTempalte = {
  productTemplateId: number;
  productName: string;
  slug: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Post = {
  postId: number;
  postTitle: string;
  postThumbnail: string;
  postType: string;
  postContent: string;
  author: PostAuthor;
  totalView: number;
  createdAt: Date;
  updatedAt: Date;
};

export type PostAuthor = {
  userId: number;
  username: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
};
