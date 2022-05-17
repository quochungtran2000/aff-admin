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
