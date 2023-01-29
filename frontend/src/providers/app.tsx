import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
});
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <NextUIProvider theme={darkTheme}>
      <Router>{children}</Router>
    </NextUIProvider>
  );
};
