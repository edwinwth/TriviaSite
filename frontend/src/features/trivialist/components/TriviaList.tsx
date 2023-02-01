import { Grid, Spinner, styled } from "@nextui-org/react";
import { useTrivia } from "../api/getTrivia";
import { TriviaCard } from "./TriviaCard";

const Box = styled("div", {
  boxSizing: "border-box",
});

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

  return (
    <Grid.Container gap={2} justify="center">
      {trivaQuery.data.results.map((trivia) => (
        <Grid>
          <TriviaCard trivia={trivia} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
