import axios from "axios";
import { Application } from "./Components/Application";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrandColor } from "./constants";
import { Audio } from "./Components";
import React from "react";
import { LightDarkMode } from "./Components/LightDarkMode";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      throwOnError: true,
      retry: false,
    },
    mutations: {
      throwOnError: true,
      retry: false,
    },
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      bg: BrandColor.Background,
      color: BrandColor.Color,
      bgMain: BrandColor.BackgroundMain,
    },
  },
});

const ActionButtons = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex pos="absolute" top={2} right={2} gap={2}>
      {children}
    </Flex>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ActionButtons>
          <LightDarkMode />
          <Audio />
        </ActionButtons>
        <Application />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
