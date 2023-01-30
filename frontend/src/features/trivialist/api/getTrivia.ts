import { useQuery } from "react-query";
import { Trivia, TriviaAPIResult } from "../types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { axios } from "../../../lib/axios";

export const getTrivia = (): Promise<TriviaAPIResult> => {
    return axios.get('/trivia/question/')
}

type QueryFnType = typeof getTrivia;

type UseTrivaOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useTrivia = ({ config }: UseTrivaOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['trivia'],
    queryFn: () => getTrivia(),
  });
}