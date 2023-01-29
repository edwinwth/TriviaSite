import React from 'react';
import { useRoutes } from 'react-router-dom';
import { MainLayout } from "../components/Layout/MainLayout";
import { publicRoutes } from './public';

export const AppRoutes = () => {

  const commonRoutes = [
    { path: 'totd', element: <div>TOTD</div> },
    { path: 'trivia_list', element: <div>Trivia List</div> }
  ];


  const element = useRoutes([...commonRoutes]);

  return <MainLayout>{element}</MainLayout>;
};