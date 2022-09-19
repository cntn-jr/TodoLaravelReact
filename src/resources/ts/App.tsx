import { ChakraProvider, TabPanels, Tabs } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/organisms/layout/Header";
import { Router } from "./router/Router";

import theme from "./theme/theme";


export default function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Header></Header>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}