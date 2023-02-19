export type User = {
  user_id: number;
  username: string;
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
