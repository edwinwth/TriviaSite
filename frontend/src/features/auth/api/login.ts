import { axios } from "../../../lib/axios";
import { User } from "../types";

export type LoginCredentialsDTO = {
  username: string;
  password: string;
};

type LoginResponse = User

export const loginWithUsernameAndPassword = (
  data: LoginCredentialsDTO
): Promise<LoginResponse> => {
  return axios.post("/accounts/login/", data);
};
