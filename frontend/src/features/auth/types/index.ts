export type User = {
  id: number;
  user: string;
  email: string;
};
export type UserResponse = BaseResponse & {
  user: User;
};

type BaseResponse = {
  message: string;
};

export type TestResponse = {
  user: string;
  auth: string;
};
