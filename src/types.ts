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
