import { Grid, Spinner, styled, Input, Row } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTrivia } from "../api/getTrivia";
import { TriviaCard } from "./TriviaCard";
import { TriviaSearchBar } from "./TriviaSearchBar";

export const TrivaList = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState();

  const trivaQuery = useTrivia({
    queryParams: { search: search, trivia_category: filter },
  });

  return (
    <>
      <TriviaSearchBar onSearchChange={setSearch} onFilterChange={setFilter} />
      {trivaQuery.isLoading ? (
        <div className="w-full h-48 flex justify-center items-center">
          <Spinner size="lg" />
        </div>
      ) : !trivaQuery.data ? (
        <>No Data</>
      ) : (
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
      )}
    </>
  );
};
