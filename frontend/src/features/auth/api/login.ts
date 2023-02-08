import { axios } from "../../../lib/axios";

export type LoginCredentialsDTO = {
  username: string;
  password: string;
};

export const loginWithUsernameAndPassword = (
  data: LoginCredentialsDTO
): Promise<boolean> => {
  return axios
    .post("/accounts/login/", data)
    .then((response) => {
      return true;
    })
    .catch((error) => {
      const message = error.response?.data?.message || error.message;
      alert(message);
      return false;
    });
};
