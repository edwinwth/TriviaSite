import { Grid, Spinner, styled } from "@nextui-org/react";
import { useTrivia } from "../api/getTrivia";
import { TriviaCard } from "./TriviaCard";

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
    <Grid.Container gap={4} justify="center">
      <Grid xs={6} lg={10}>
        <Grid.Container gap={2} justify="flex-start">
          {trivaQuery.data.results.map((trivia) => (
            <Grid xs={12} sm={6} lg={4}>
              <TriviaCard trivia={trivia} />
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};
