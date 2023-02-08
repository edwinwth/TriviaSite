import { axios } from '../../../lib/axios';

import { TestResponse } from '../types';

export const getUser = (): Promise<TestResponse> => {
  return axios.get('/accounts/test');
};