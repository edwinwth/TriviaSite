import { useMutation, useQuery } from "react-query";
import { Trivia, TriviaAPIResult } from "../types";
import { ExtractFnReturnType, MutationConfig, queryClient, QueryConfig } from "../../../lib/react-query";
import { axios } from "../../../lib/axios";

export type TriviaData = {
  question_text: string;
  answer_text: string;
  trivia_category: number[];
};

export const addTrivia = (data: TriviaData): Promise<TriviaAPIResult> => {
  return axios.post(`/trivia/question/`, data);
};

type UseTrivaOptions = {
  config?: MutationConfig<typeof addTrivia>;
};

export const useAddTrivia = ({ config }: UseTrivaOptions = {}) => {
    
  
    return useMutation({
      onMutate: async (triviaData) => {
        await queryClient.cancelQueries(['trivia', triviaData]);
        return
      },
      onError: (_, __, context: any) => {
        console.log(context)
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['trivia']);
      },
      ...config,
      mutationFn: addTrivia,
    });
  };
  
