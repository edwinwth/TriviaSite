import { useQuery } from "react-query";
import { Trivia, TriviaAPIResult } from "../types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { axios } from "../../../lib/axios";

type triviaParam = {
  page_size?:number; 
  search?:string; 
  trivia_category?:number | "all";
}


export const getTrivia = ({page_size, search, trivia_category}: triviaParam): Promise<TriviaAPIResult> => {
    let params = []
    let paramString = ""
    if (page_size) {
      params.push(`page_size=${page_size}`)
    }
    if (search) {
      params.push(`search=${search}`)
    }
    if (trivia_category && trivia_category !== "all") {
      params.push(`trivia_category=${trivia_category}`)
    }
    if (params) {
      paramString = params.join()
    }
    return axios.get(`/trivia/question/?` + paramString)
}

type QueryFnType = typeof getTrivia;

type UseTrivaOptions = {
  queryParams?: triviaParam;
  config?: QueryConfig<QueryFnType>;
};

export const useTrivia = ({ queryParams, config }: UseTrivaOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['trivia', queryParams],
    queryFn: () => getTrivia({...queryParams}),
  });
}