import React from 'react';
import { useRoutes } from 'react-router-dom';
import { MainLayout } from "../components/Layout/MainLayout";
import { publicRoutes } from './public';

export const AppRoutes = () => {

  const commonRoutes = [{ path: '/', element: <MainLayout /> }];


  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};