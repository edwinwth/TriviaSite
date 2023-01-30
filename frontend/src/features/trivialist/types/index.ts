export type TriviaAPIResult = {
    count: number;
    next: string;
    previous: string;
    results: Trivia[];
}

export type Trivia = {
  id: number;
  question_text: string;
  answer_text: string;
  thumbs_up_count: string;
  thumbs_down_count: string;
  creation_date: Date;
  trivia_category: number[];
}