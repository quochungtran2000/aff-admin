export type BaseResponse = {
  status: number;
  message: string;
};

export type User = {
  userId: number;
  username: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  role: string;
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
  categoryId: string;
  title: string;
  slug: string | null;
  active: boolean;
  crawl: boolean;
  createdAt: Date;
  updatedAt: Date;
  childrens?: EcommerceCategory[];
};
