import { useQuery } from "react-query";
import { TriviaCategory } from "../types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { axios } from "../../../lib/axios";


export const getCategory = (): Promise<TriviaCategory[]> => {
    return axios.get(`/trivia/category/`)
}

type QueryFnType = typeof getCategory;

type UseCategoryOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useCategory = ({ config }: UseCategoryOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['category'],
    queryFn: () => getCategory(),
  });
}