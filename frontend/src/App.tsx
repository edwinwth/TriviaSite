import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes/>
    </AppProvider>
  );
}

export default App;
