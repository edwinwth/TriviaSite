import { TrivaList } from "../features/trivialist/components/TriviaList";
import React from "react";
import { useRoutes } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout";
import { publicRoutes } from "./public";
import { styled } from "@nextui-org/react";

export const AppRoutes = () => {
  const commonRoutes = [
    { path: "totd", element: <div>TOTD</div> },
    { path: "trivia_list", element: <TrivaList /> },
  ];

  const element = useRoutes([...commonRoutes]);

  return <MainLayout>{element}</MainLayout>;
};
