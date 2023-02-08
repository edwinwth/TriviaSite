import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";
import { queryClient } from "../lib/react-query";
import { QueryClientProvider } from "react-query";
import { getCSRF } from "../lib/auth";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"
import { useAuthenticationStore } from "../stores/auth";

const darkTheme = createTheme({
  type: "dark",
});
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

  React.useEffect(() => {
    const getCSRFToken = async () => {
      await getCSRF();
    };
    getCSRFToken().catch(console.error);
  }, []);
  return (
    <ReduxProvider store={useAuthenticationStore}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider theme={darkTheme}>
          <Router>{children}</Router>
        </NextUIProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
};
