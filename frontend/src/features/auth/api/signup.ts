import { AxiosError } from 'axios';
import { axios } from '../../../lib/axios';

import { UserResponse } from "../types";

export type SignUpCredentialsDTO = {
  username: string;
  password: string;
};

export const signUpWithUsernameAndPassword = (data: SignUpCredentialsDTO):Promise<UserResponse> => {
  return axios.post("/accounts/signup/", data);
};
