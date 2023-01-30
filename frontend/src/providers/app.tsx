import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";
import { queryClient } from "../lib/react-query";
import { QueryClientProvider } from "react-query";

const darkTheme = createTheme({
  type: "dark",
});
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider theme={darkTheme}>
        <Router>{children}</Router>
      </NextUIProvider>
    </QueryClientProvider>
  );
};
