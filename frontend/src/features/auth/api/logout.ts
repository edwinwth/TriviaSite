import { axios } from "../../../lib/axios";

export const logout = () => {
  return axios
    .post("/accounts/logout/")
    .then((response) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
