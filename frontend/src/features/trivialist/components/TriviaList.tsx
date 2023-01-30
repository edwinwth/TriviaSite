import { Spinner } from "@nextui-org/react";
import { useTrivia } from "../api/getTrivia";

export const TrivaList = () => {
  const trivaQuery = useTrivia();

  if (trivaQuery.isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!trivaQuery.data) return <>No Data</>;

  return <div>{trivaQuery.data.results.map((trivia) => trivia.question_text)}</div>;
};
