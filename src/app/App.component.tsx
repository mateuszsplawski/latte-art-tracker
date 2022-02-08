import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Router } from "./routes/Router.component";
import { GlobalStyles } from "lib/shared";
import { TranslationProvider } from "lib/translations";
import { theme } from "lib/ui-kit";

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <GlobalStyles />
        <BrowserRouter>
          <TranslationProvider>
            <ThemeProvider theme={theme}>
              <Router />
            </ThemeProvider>
          </TranslationProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};
